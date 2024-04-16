import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

// Handles POST requests to /api

export async function POST(request) {
  //   const formData = await request.formData();
  const { name, email, subject, message } = await request.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    auth: {
      user: "apikey",
      pass: process.env.API_KEY,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject: subject,
      html: `
            <p>Name: ${name} </p>
            <p>Email: ${email} </p>
            <p>Message: ${message} </p>
            `,
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.log(error);
    NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" });
  }
}
