import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  // Stripe webhook is currently disabled
  // To re-enable: Configure STRIPE_SECRET_KEY and STRIPE_WEBHOOK_SECRET in environment variables

  return NextResponse.json(
    {
      error: 'Stripe webhook is currently disabled.',
      disabled: true
    },
    { status: 503 }
  );
}
