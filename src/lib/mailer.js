// lib/email.js
import formData from "form-data";
import Mailgun from "mailgun.js";

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY,
});

export const sendContactMessage = async (
  name,
  email,
  message,
  interest,
) => {
  try {
    // Validate inputs
    if (!name || !email || !message || !interest) {
      throw new Error("All fields are required");
    }

    
    // Create more professional HTML content
    const htmlContent = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Welcome to MyShop!</title>
      </head>
      <body style="background-color: #f3f4f6; padding: 24px;">
        <div
          style="
            max-width: 600px;
            margin: auto;
            background-color: #ffffff;
            padding: 24px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            font-family: Arial, sans-serif;
          "
        >
          <h1 style="color: #16a34a; font-size: 24px; font-weight: bold;">
            Hey Prashanth!
          </h1>
          <div style="margin-top: 16px;">
            <p><strong>Name:</strong> ${name}</p>
            <p>
              <strong>Email:</strong>
              <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">
                ${email}
              </a>
            </p>
            <p><strong>Interest:</strong> ${interest}</p>
            <p><strong>Message:</strong></p>
            <p style="color: #374151;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          <p style="margin-top: 24px; font-weight: bold;">The Portfolio Contact Team</p>
          <div
            style="
              margin-top: 24px;
              text-align: center;
              font-size: 14px;
              color: #6b7280;
            "
          >
            <p>
              This message was sent from the contact form on
              ${process.env.NEXT_PUBLIC_SITE_NAME || "your website"}.
            </p>
            <p>
              © ${new Date().getFullYear()} ${
      process.env.NEXT_PUBLIC_SITE_NAME || ""
    }.
              All rights reserved.
            </p>
          </div>
        </div>
      </body>
    </html>`;

    // Create plain text version (important for spam prevention)
    const textContent = `
      New Contact Form Submission
      =========================
      
      Name: ${name}
      Email: ${email}
      Interest: ${interest}
      
      Message:
      ${message}
      
      ---
      This message was sent from the contact form on ${
        process.env.NEXT_PUBLIC_SITE_NAME || "your website"
      }.
    `;

    const data = {
      from: "Portfolio Team <no-reply@prashanthnaroju.com>",
      to: [process.env.PERSONAL_MAIL,process.env.PRIVATE_MAIL,process.env.PROFESSIONAL_MAIL], // Join multiple recipients with comma
      subject: `${name} wants to ${interest}`,
      text: message,
      html: htmlContent,
    };

    const response = await mg.messages.create(process.env.MAILGUN_DOMAIN, data);
    return { success: true, messageId: response.id };
  } catch (error) {
    console.error("Email sending error:", error);
    throw error;
  }
};
