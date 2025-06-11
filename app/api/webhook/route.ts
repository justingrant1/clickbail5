import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import Stripe from 'stripe';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2025-05-28.basil',
});

// This is your Stripe webhook secret for testing your endpoint locally.
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET || '';

export async function POST(req: NextRequest) {
  try {
    const payload = await req.text();
    const signature = req.headers.get('stripe-signature') || '';
    
    let event;
    
    try {
      event = stripe.webhooks.constructEvent(payload, signature, endpointSecret);
    } catch (err) {
      console.error('Webhook signature verification failed:', err);
      return NextResponse.json({ error: 'Webhook signature verification failed' }, { status: 400 });
    }
    
    // Handle the event
    switch (event.type) {
      case 'customer.subscription.created':
      case 'customer.subscription.updated':
      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription;
        
        // Get the customer to find the associated user
        const customer = await stripe.customers.retrieve(subscription.customer as string);
        
        if (!customer.deleted && customer.metadata.supabaseUUID) {
          const userId = customer.metadata.supabaseUUID;
          
          // Get the price details
          const priceId = subscription.items.data[0].price.id;
          
          // Update the subscription in Supabase
          await supabase.from('subscriptions').upsert({
            id: subscription.id,
            user_id: userId,
            status: subscription.status,
            price_id: priceId,
            quantity: subscription.items.data[0].quantity,
            cancel_at_period_end: subscription.cancel_at_period_end,
            created: new Date(subscription.created * 1000).toISOString(),
            current_period_start: new Date((subscription as any).current_period_start * 1000).toISOString(),
            current_period_end: new Date((subscription as any).current_period_end * 1000).toISOString(),
            ended_at: (subscription as any).ended_at 
              ? new Date((subscription as any).ended_at * 1000).toISOString() 
              : null,
            cancel_at: (subscription as any).cancel_at 
              ? new Date((subscription as any).cancel_at * 1000).toISOString()
              : null,
            canceled_at: (subscription as any).canceled_at
              ? new Date((subscription as any).canceled_at * 1000).toISOString()
              : null,
            trial_start: (subscription as any).trial_start
              ? new Date((subscription as any).trial_start * 1000).toISOString()
              : null,
            trial_end: (subscription as any).trial_end
              ? new Date((subscription as any).trial_end * 1000).toISOString()
              : null,
          });
        }
        break;
      }
      
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        
        // If this was a subscription checkout, we don't need to do anything here
        // because the subscription created event will handle the subscription data
        break;
      }
      
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
    
    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Error handling webhook:', error);
    return NextResponse.json(
      { error: 'Failed to handle webhook' },
      { status: 500 }
    );
  }
}
