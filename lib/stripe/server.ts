import Stripe from 'stripe';

// Lazy initialization to prevent errors during build time
let stripeInstance: Stripe | null = null;

function getStripeInstance(): Stripe {
  if (!stripeInstance) {
    const apiKey = process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder';
    stripeInstance = new Stripe(apiKey, {
      apiVersion: '2025-11-17.clover',
      typescript: true,
    });
  }
  return stripeInstance;
}

// Export a getter that lazily initializes Stripe
export const stripe = new Proxy({} as Stripe, {
  get: (target, prop) => {
    const instance = getStripeInstance();
    const value = instance[prop as keyof Stripe];
    return typeof value === 'function' ? value.bind(instance) : value;
  }
});
