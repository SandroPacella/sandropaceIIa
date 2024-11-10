import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    await resend.emails.send({
      from: 'hello@sandropacella.com',
      to: 'hello@sandropacella.com',
      reply_to: email,
      subject: `Contact form submission: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
} 