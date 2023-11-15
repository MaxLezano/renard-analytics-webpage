const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { name, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.GOOGLE_API_KEY
    },
  });

  const mailOptions = {
    from: process.env.SENDER_EMAIL,
    to: 'renardanalytics@gmail.com',
    subject: `New message from ${name}: ${subject}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('E-mail sent: ' + info.response);
  });
});

module.exports = app;