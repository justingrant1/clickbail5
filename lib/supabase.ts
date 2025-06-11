import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// User related functions
export type UserAttributes = {
  email: string
  password: string
  data?: {
    first_name?: string
    last_name?: string
    company?: string
    phone?: string
  }
}

export async function signUp(attributes: UserAttributes) {
  const { data, error } = await supabase.auth.signUp(attributes)
  return { data, error }
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  return { data, error }
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()
  return { error }
}

export async function getUser() {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

// Database types
export type Subscription = {
  id: string
  user_id: string
  status: 'trialing' | 'active' | 'canceled' | 'incomplete' | 'past_due'
  price_id: string
  quantity: number
  cancel_at_period_end: boolean
  created: string
  current_period_start: string
  current_period_end: string
  ended_at: string | null
  cancel_at: string | null
  canceled_at: string | null
  trial_start: string | null
  trial_end: string | null
}

// Database functions
export async function createOrUpdateSubscription(subscription: Partial<Subscription>) {
  const { data, error } = await supabase
    .from('subscriptions')
    .upsert(subscription)
    .select()
    .single()
  
  return { data, error }
}

export async function getUserSubscription(userId: string) {
  const { data, error } = await supabase
    .from('subscriptions')
    .select('*, prices(*, products(*))')
    .eq('user_id', userId)
    .in('status', ['trialing', 'active'])
    .single()
  
  return { data, error }
}
