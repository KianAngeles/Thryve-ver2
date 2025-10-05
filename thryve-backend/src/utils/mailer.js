const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    // user: process.env.EMAIL_USER, // email
    //pass: process.env.EMAIL_PASS  // app password
    user: "thryve.noreply@gmail.com", // email
    pass: "xkmc lgdu zxie qxlv"  // app password
  }
});

const sendEmail = async (to, subject, html) => {
  const mailOptions = {
    from: "thryve.noreply@gmail.com", //process.env.EMAIL_USER, // must be a valid email
    to,                            // recipient email
    subject,
    html
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent to', to);
  } catch (err) {
    console.error('Email sending error:', err);
  }
};

module.exports = sendEmail;
