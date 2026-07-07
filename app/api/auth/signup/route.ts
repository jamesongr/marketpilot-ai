import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({
    status: 'mock',
    message: 'Signup placeholder. Replace with Supabase auth and onboarding persistence.',
    payload: body
  });
}
