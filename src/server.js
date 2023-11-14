require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const port = process.env.PORT;
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY
const SENDER_EMAIL = process.env.SENDER_EMAIL

app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { name, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: SENDER_EMAIL,
      pass: GOOGLE_API_KEY
    },
  });

  const mailOptions = {
    from: SENDER_EMAIL,
    to: 'renardanalytics@gmail.com',
    subject: `Nuevo mensaje de ${name}: ${subject}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Correo electrónico enviado: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});