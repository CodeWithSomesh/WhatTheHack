// Stripe is temporarily disabled
// To re-enable: Install stripe package and configure STRIPE_SECRET_KEY in environment variables

export const stripe = {
  checkout: {
    sessions: {
      create: async () => {
        throw new Error('Stripe is currently disabled. Please configure STRIPE_SECRET_KEY to enable payments.');
      }
    }
  }
} as any;
