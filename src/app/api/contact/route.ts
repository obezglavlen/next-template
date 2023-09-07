import {
  ContactPayload,
  ContactResponse,
  contactPayload,
} from '@/types/contact';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

export const POST = async (req: NextRequest) => {
  const body = await req.json() as ContactPayload;

  try {
    const parsed = contactPayload.parse(body);

    console.log(parsed);
    return NextResponse.json({ ok: true });
  } catch (e) {
    if (e instanceof z.ZodError) {
      return NextResponse.json(e, { status: 400 });
    }
    return NextResponse.json(e, { status: 500 });
  }
};
