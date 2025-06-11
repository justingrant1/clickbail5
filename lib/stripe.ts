import { loadStripe, Stripe as StripeClient } from '@stripe/stripe-js';
import { supabase } from './supabase';

// Initialize Stripe with the public key
export const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

// Constants
export const STARTER_PLAN_PRICE_ID = 'price_1RYsD0G2QpTu8gzIaesfiJc6';
export const FREE_TRIAL_DAYS = 7;

// Types for better type safety
export type PriceWithProduct = {
  id: string;
  product: {
    id: string;
    name: string;
    description: string | null;
  };
  unit_amount: number;
  currency: string;
  type: 'one_time' | 'recurring';
  interval?: 'day' | 'month' | 'year';
  interval_count?: number;
};

export type SubscriptionWithPrice = {
  id: string;
  status: 'trialing' | 'active' | 'canceled' | 'incomplete' | 'past_due';
  current_period_end: number;
  cancel_at_period_end: boolean;
  trial_end: number | null;
  price: PriceWithProduct;
};

// Server-side Stripe code can be managed in a separate API route
// The following are client-side helpers

// Handle checkout for subscription
export async function createCheckoutSession(priceId: string) {
  // Get auth token from Supabase
  const { data: sessionData } = await supabase.auth.getSession();
  const token = sessionData?.session?.access_token;
  
  if (!token) {
    throw new Error('No authentication token available');
  }
  
  const response = await fetch('/api/checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      priceId,
      trialDays: FREE_TRIAL_DAYS, 
    }),
  });
  
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Error creating checkout session');
  }
  
  const { sessionId } = await response.json();
  
  // Redirect to Stripe Checkout
  const stripe = await stripePromise;
  if (stripe) {
    const { error } = await stripe.redirectToCheckout({ sessionId });
    if (error) {
      console.error('Error redirecting to checkout:', error);
      throw new Error(error.message);
    }
  }
}

// Handle portal for managing subscription
export async function createPortalSession() {
  // Get auth token from Supabase
  const { data: sessionData } = await supabase.auth.getSession();
  const token = sessionData?.session?.access_token;
  
  if (!token) {
    throw new Error('No authentication token available');
  }
  
  const response = await fetch('/api/create-portal-session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  });
  
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Error creating portal session');
  }
  
  const { url } = await response.json();
  window.location.href = url;
}

// Format currency for display
export function formatCurrency(amount: number | null, currency: string = 'USD'): string {
  if (amount === null) return 'Free';
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
  }).format(amount / 100);
}
