// /app/api/contact/route.js
import nodemailer from 'nodemailer';

export async function POST(req: { json: () => PromiseLike<{ name: string; email: string; message: string; }> | { name: string; email: string; message: string; }; }) {
  try {
    const { name, email, message } = await req.json();
    console.log('Received data:', { name, email, message }); // Add this log

    // Validate input
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        { status: 400 }
      );
    }

    // Set up Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER, // Use environment variables for sensitive info
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: email,
      to: 'revrennaleo@gmail.com',  // Replace with your email address
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
    return new Response(
      JSON.stringify({ message: 'Your message has been sent!' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error); // Log error for debugging
    return new Response(
      JSON.stringify({ error: 'There was an error sending your message' }),
      { status: 500 }
    );
  }
}
