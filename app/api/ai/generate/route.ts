import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: Request) {
  const payload = await request.json();
  return NextResponse.json({
    status: 'mock',
    message: 'AI generation route placeholder. Connect OpenAI/Anthropic keys to enable.',
    payload
  });
}
