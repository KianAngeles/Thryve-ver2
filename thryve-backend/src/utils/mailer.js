const { Resend } = require('resend');

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (to, subject, html) => {
  try {
    console.log('📧 Attempting to send email to:', to);
    console.log('📧 Using Resend from:', process.env.FROM_EMAIL || 'onboarding@resend.dev');
    console.log('📧 Resend API Key present:', !!process.env.RESEND_API_KEY);
    console.log('📧 Resend API Key length:', process.env.RESEND_API_KEY?.length);
    console.log('📧 Resend API Key format:', process.env.RESEND_API_KEY?.substring(0, 3) + '***' + process.env.RESEND_API_KEY?.substring(process.env.RESEND_API_KEY.length - 3));
    
    const result = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to: [to],
      subject,
      html,
    });

    console.log('📧 Resend response:', result);

    // Check if Resend returned an error in the response
    if (result.error) {
      console.error('❌ Resend API returned error:', result.error);
      throw new Error(`Resend API Error: ${result.error.message}`);
    }

    console.log('✅ Email sent successfully to', to);
    console.log('📧 Email ID:', result.data?.id);
    return result;
  } catch (err) {
    console.error('❌ Resend email sending error:', err);
    console.error('📧 Error details:', {
      name: err.name,
      message: err.message,
      statusCode: err.statusCode
    });
    throw err; // Re-throw to handle in controller
  }
};

module.exports = sendEmail;
