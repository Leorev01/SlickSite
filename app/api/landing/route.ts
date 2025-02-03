import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs';
const logoPath = path.join(process.cwd(), 'public/images/SlickSite3.png');

interface AppointmentRequest {
  websiteDescription: string;
  firstName: string;
  email: string;
  phone: string;
  currentWebsite: string;
  hosting: string;
}

const transporter = nodemailer.createTransport({
  service: 'gmail', // or you can use another service like SendGrid, Mailgun, etc.
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app-specific password
  },
});

export async function POST(req: NextRequest) {
  const { websiteDescription, firstName, email, phone, currentWebsite, hosting }: AppointmentRequest = await req.json();

  // Email to admin
  const adminMailOptions = {
    from: process.env.EMAIL_USER, // sender address
    to: process.env.EMAIL_USER, // receiver address (your email)
    subject: 'New Appointment Scheduled',
    text: `
      You have received a new appointment request:

      Name: ${firstName}
      Email: ${email}
      Phone: ${phone}
      Current Website: ${currentWebsite}
      Website Description: ${websiteDescription}
      Hosting: ${hosting ? 'Yes' : 'No'}
    `,
  };

  // Confirmation email to user
  const userMailOptions = {
    from: process.env.EMAIL_USER, // sender address
    to: email, // user's email address
    subject: 'Email Confirmation',
    html: `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
            <img src="cid:logo" alt="Slick Site Logo" style="width: 200px; height: auto; margin-bottom: 20px;"/><br>

            <p>Hi ${firstName},</p>

            <p>Thank you for reaching out to us! We've received your request and will get back to you as soon as possible.</p>

            <p><strong>Here are the details you provided:</strong></p>
            <p style="margin-left: 20px;">
                📝 <strong>Website Description:</strong> ${websiteDescription}<br>
                🌐 <strong>Current Website:</strong> ${currentWebsite || 'N/A'}<br>
                📧 <strong>Email:</strong> ${email}<br>
                📞 <strong>Phone:</strong> ${phone || 'Not provided'}<br>
                🏠 <strong>Do you have hosting?</strong> ${hosting === 'Yes' ? 'Yes' : 'No'}
            </p>

            <p>If you have any additional information to share, feel free to reply to this email or contact us at <a href="mailto:${process.env.EMAIL_USER}" style="color: #007bff; text-decoration: none;">${process.env.EMAIL_USER}</a>.</p>

            <p>We look forward to assisting you!</p>

            <p>Best regards,<br>
            <strong>The Slick Site Team</strong></p>
        </div>
    `,
    attachments: [
      {
        filename: 'logo.png', // The file name for the image
        content: fs.readFileSync(logoPath), // The image content (buffer)
        cid: 'logo',           // Content ID to reference the image inline
      },
    ],
  };

  try {
    // Send email to admin (without logo)
    await transporter.sendMail(adminMailOptions);

    // Send confirmation email to user (with logo)
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { message: 'Appointment request sent successfully and confirmation email sent to user.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send appointment request.' }, { status: 500 });
  }
}
