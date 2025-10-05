const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || "angeleskiancharles@gmail.com", // email
    pass: process.env.EMAIL_PASS || "LjKian101!"  // app password
  }
});

const sendEmail = async (to, subject, html) => {
  const mailOptions = {
    from: process.env.EMAIL_USER || "angeleskiancharles@gmail.com", // must be a valid email
    to,                            // recipient email
    subject,
    html
  };

  try {
    console.log('📧 Attempting to send email to:', to);
    console.log('📧 Using email service:', process.env.EMAIL_USER || "angeleskiancharles@gmail.com");
    
    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully to', to);
    console.log('📧 Message ID:', result.messageId);
    return result;
  } catch (err) {
    console.error('❌ Email sending error:', err);
    console.error('📧 Error details:', {
      code: err.code,
      response: err.response,
      command: err.command
    });
    throw err; // Re-throw to handle in controller
  }
};

module.exports = sendEmail;
