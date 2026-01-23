import { NextResponse } from 'next/server';


export async function POST(req: Request) {
const data = await req.json();
// validate
// send via provider (SendGrid) using env keys
// here we simply return success
return NextResponse.json({ ok: true });
}