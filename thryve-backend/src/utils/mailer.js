const { Resend } = require('resend');

// Initialize Resend with hardcoded API key for Railway troubleshooting
// TODO: Remove hardcoded key once Railway env vars are working
const resend = new Resend('re_Xr9ukaDa_CvDYjCqHcVURUxnQLtktGcKQ');

const sendEmail = async (to, subject, html) => {
  try {
    console.log('📧 Attempting to send email to:', to);
    console.log('📧 Using Resend from:', process.env.FROM_EMAIL || 'onboarding@resend.dev');
    console.log('📧 Using hardcoded Resend API key (Railway troubleshooting)');
    console.log('📧 API Key format: re_Xr9***GcKQ');
    console.log('📧 Environment:', process.env.NODE_ENV);
    
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
