const sgMail = require("@sendgrid/mail");

// Use your SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (to, subject, html) => {
  try {
    const msg = {
      to,
      from: process.env.EMAIL_FROM, // Must match your verified single sender
      subject,
      html,
    };

    console.log("📧 Sending email via SendGrid...");
    console.log("📤 From:", process.env.EMAIL_FROM);
    console.log("📨 To:", to);

    const response = await sgMail.send(msg);
    console.log("✅ SendGrid email sent successfully!", response[0].statusCode);
    return response;
  } catch (error) {
    console.error("❌ SendGrid email sending error:", error);
    if (error.response) {
      console.error("📩 SendGrid API Response:", error.response.body);
    }
    throw error;
  }
};

module.exports = sendEmail;
