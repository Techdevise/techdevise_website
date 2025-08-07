// utils/sendEmail.js
const nodemailer = require("nodemailer");
require('dotenv').config();

const sendEmail = async (options) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, 
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false 
      }
    });

    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: options.email,
      subject: options.subject,
      html: options.message,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);
    return info;
  } catch (error) {
    console.error("Email sending failed:", error);
    throw error;
  }
};

module.exports = sendEmail;