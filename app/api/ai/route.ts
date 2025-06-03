// app/api/ai/route.ts

import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai.chat('gpt-4'),
    messages,
  });

  return new NextResponse(result.toDataStream(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
