const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
const authEmail = 'outlook_5dbd9e2cf48f4f77@outlook.com';
const authPassword = 'sonicSpeed1';

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({

  service: 'outlook', // Replace with your email service provider
  auth: {
    user: authEmail, // Replace with your email address
    pass: authPassword, // Replace with your email password
  },

});

app.post('/send-email', (req, res) => {

  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: authEmail, // Replace with the recipient's email address
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {

    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, error: 'Error sending email' });
    } else {
      console.log('Email sent:', info.response);
      res.json({ success: true, message: 'Email sent successfully' });
    }

  });

});

app.listen(port, () => {

  console.log(`Server is running on port ${port}`);

});