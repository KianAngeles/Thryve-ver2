const { Resend } = require('resend');

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (to, subject, html) => {
  try {
    console.log('📧 Attempting to send email to:', to);
    console.log('📧 Using Resend from:', process.env.FROM_EMAIL || 'onboarding@resend.dev');
    console.log('📧 Resend API Key present:', !!process.env.RESEND_API_KEY);
    
    const result = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to: [to],
      subject,
      html,
    });

    console.log('✅ Email sent successfully to', to);
    console.log('📧 Resend response:', result);
    return result;
  } catch (err) {
    console.error('❌ Resend email sending error:', err);
    console.error('📧 Error details:', {
      name: err.name,
      message: err.message,
    });
    throw err; // Re-throw to handle in controller
  }
};

module.exports = sendEmail;
