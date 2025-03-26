// app/api/send-message/route.js
import { sendContactMessage } from "@/lib/mailer";
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Rate limiting check could be added here
    
    const { name, email, message, interest } = await request.json();

    // Enhanced validation
    if (!name || !email || !message || !interest) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    if (name.length > 100) {
      return NextResponse.json(
        { error: 'Name must be less than 100 characters' },
        { status: 400 }
      );
    }

    if (message.length > 2000) {
      return NextResponse.json(
        { error: 'Message must be less than 2000 characters' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    await sendContactMessage(name, email, message, interest,"prashanth.naro@gmail.com");

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred while sending your message' },
      { status: 500 }
    );
  }
}