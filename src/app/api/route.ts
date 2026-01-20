// src/app/api/contact/route.ts

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, message } = data;

    // Create a Nodemailer transporter using your email service
    let transporter = nodemailer.createTransport({
      service: "gmail", // Example: Gmail, you can change to your preferred email service
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    // Configure email options
    let mailOptions = {
      from: email,
      to: process.env.EMAIL_TO, // Your email address where you want to receive messages
      subject: `New message from ${name}`,
      text: message,
      html: `<p>You have a new message from <b>${name}</b> (${email}):</p><p>${message}</p>`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to send message." },
      { status: 500 }
    );
  }
}
