import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    // Parse the incoming request JSON data
    const { name, email, message } = await req.json();

    // Log received data for debugging
    console.log('Received data:', { name, email, message });

    // Validate input fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Define email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: 'revrennaleo@gmail.com', // Your recipient email address
      subject: `New contact message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Return a successful response
    return NextResponse.json(
      { message: 'Your message has been sent!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);

    // Handle known errors gracefully
    if (error instanceof Error && error.message.includes('invalid email')) {
      return NextResponse.json(
        { error: 'Invalid email address provided' },
        { status: 400 }
      );
    }

    // Catch-all error response
    return NextResponse.json(
      { error: 'There was an error sending your message' },
      { status: 500 }
    );
  }
}
