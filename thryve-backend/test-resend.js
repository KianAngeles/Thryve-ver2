const { Resend } = require('resend');
require('dotenv').config();

const resend = new Resend(process.env.RESEND_API_KEY);

async function testResend() {
  console.log('🔍 Testing Resend API Key...');
  console.log('API Key:', process.env.RESEND_API_KEY);
  console.log('API Key length:', process.env.RESEND_API_KEY?.length);
  console.log('API Key starts with "re_":', process.env.RESEND_API_KEY?.startsWith('re_'));
  
  try {
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['angeleskiancharles@gmail.com'],
      subject: 'Test Email - Direct API Test',
      html: '<p>This is a direct test of the Resend API key</p>',
    });

    console.log('✅ Success! Email sent:', result);
  } catch (error) {
    console.error('❌ Error:', error);
    console.error('Error details:', {
      name: error.name,
      message: error.message,
      statusCode: error.statusCode
    });
  }
}

testResend();