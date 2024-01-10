import nodemailer from 'nodemailer';
import { SentMessageInfo } from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

type EmailOptions = {
  to: string;
  subject: string;
  html: string;
  attachments?: { filename: string; path: string }[];
};

async function sendEmail(options: EmailOptions): Promise<SentMessageInfo> {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EPASS,
    },
  });

  const mailOptions = {
    from: 'ygo.cardtime@gmail.com',
    to: options.to,
    subject: options.subject,
    html: options.html,
    attachments: options.attachments,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: %s', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email: ', error);
    throw error;
  }
}

export { sendEmail, EmailOptions };
