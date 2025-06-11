# Clickbail - Bail Bonds Management System

Clickbail is a comprehensive management system for bail bonds businesses, offering features like defendant tracking, court date management, geo-fencing, and more.

## Features

- **Defendant Tracking**: Monitor up to 50 defendants with the Starter plan
- **Court Calendar Sync**: Keep track of important court dates
- **Financial Management**: Handle payments and accounting
- **E-Signature Platform**: Collect signatures electronically
- **Mobile App Access**: Access your dashboard on the go
- **Geo-Fencing**: Basic location monitoring capabilities
- **Reporting**: Generate essential business reports
- **Office Chat**: Communicate with your team
- **Forms Management**: Use and customize templates

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Authentication**: Supabase Auth
- **Database**: Supabase PostgreSQL
- **Payments**: Stripe with subscription support

## Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm
- Supabase account
- Stripe account

### Environment Variables

Copy the example environment file to create your own:

```bash
cp .env.local.example .env.local
```

Then fill in the following values:

- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY`: Your Supabase service role key
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Your Stripe publishable key
- `STRIPE_SECRET_KEY`: Your Stripe secret key
- `STRIPE_WEBHOOK_SECRET`: Your Stripe webhook secret

### Database Setup

The following tables need to be created in your Supabase database:

1. `customers` - Links users to Stripe customers
2. `products` - Stores product information from Stripe
3. `prices` - Stores price information from Stripe
4. `subscriptions` - Stores subscription details

### Stripe Setup

1. Create a product in Stripe for the "Starter Plan" with a price of $49/month
2. Update the `STARTER_PLAN_PRICE_ID` in `lib/stripe.ts` with your Stripe price ID
3. Set up a webhook in Stripe to point to your `/api/webhook` endpoint

### Installation

```bash
# Install dependencies
npm install
# or
pnpm install

# Run the development server
npm run dev
# or
pnpm dev
```

### Stripe Webhook Testing

For local development, you can use the Stripe CLI to forward webhook events:

```bash
stripe listen --forward-to localhost:3000/api/webhook
```

## Subscription Flow

1. Users sign up through the `/start-trial` page
2. They enter their information and are redirected to Stripe Checkout
3. After completing payment, they get 7 days of free trial
4. After the trial, they're automatically charged $49/month for the Starter Plan
5. Users can manage their subscription through the Billing Portal

## Components to Avoid Modifying

The following components have specific functionality and should not be modified:

- E-sign component
- Calendar component
- Office chat component
- Defendant watch component
- Geo fence component
- Payments component on the dashboard

## License

Copyright © 2025 Clickbail. All rights reserved.
