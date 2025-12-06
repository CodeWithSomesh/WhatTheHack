import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  // Stripe payment is currently disabled
  // To re-enable: Configure STRIPE_SECRET_KEY in environment variables

  return NextResponse.json(
    {
      error: 'Payment system is currently disabled. Please contact support to enable Stripe payments.',
      disabled: true
    },
    { status: 503 }
  );
}
