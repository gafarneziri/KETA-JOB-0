require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const multer = require('multer');

console.log('✅ Debugging ENV Variables:');
console.log('EMAIL_USER:', process.env.EMAIL_USER || '❌ NOT LOADED');
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '****' : '❌ NOT LOADED');
console.log('PORT:', process.env.PORT || '❌ NOT LOADED');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("✅ Server is live and ready to send emails!");
});

// ✅ Multer Setup
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
});

// ✅ Nodemailer Setup
const transporter = nodemailer.createTransport({
  host: 'mail.ketagroup.ch',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// ✅ Email Sending Utility
const sendEmail = async (to, subject, text, attachments = []) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
      attachments,
      replyTo: process.env.EMAIL_USER,
    });
    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send email.' };
  }
};

// ✅ Route: Anfrageformular
app.post('/send-email', async (req, res) => {
  const { name, email, phone, firm, message, job, ort, plz } = req.body;
  const emailText = `
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Firmenname: ${firm}
    Job: ${job}
    Ort: ${ort}
    PLZ: ${plz}

    Message: ${message}
  `;

  const response = await sendEmail(process.env.EMAIL_USER, `New Anfrage from ${name}`, emailText);
  res.status(response.success ? 200 : 500).send(response.message);
});

// ✅ Route: Formular2 with Files
app.post('/send-email-formular2', upload.fields([
  { name: 'CV' }, { name: 'Diplome' }, { name: 'Arbeitszeugnisse' }, { name: 'Bild Hochladen' }, { name: 'Sonstiges' }
]), async (req, res) => {
  const { vorname, nachname, email, phone, ort, plz, beruf, start, mitteilung } = req.body;

  const attachments = req.files ? Object.keys(req.files).map(key => ({
    filename: req.files[key][0].originalname,
    content: req.files[key][0].buffer,
  })) : [];

  const emailText = `
    Vorname: ${vorname}
    Nachname: ${nachname}
    Email: ${email}
    Mobil: ${phone}
    Ort: ${ort}
    PLZ: ${plz}
    Beruf: ${beruf}
    Startdatum: ${start}
    Mitteilung: ${mitteilung}
  `;

  const response = await sendEmail(process.env.EMAIL_USER, `Formular2 Anfrage von ${vorname} ${nachname}`, emailText, attachments);
  res.status(response.success ? 200 : 500).send(response.message);
});

// ✅ Route: General Inquiry
app.post('/send-email-page5', async (req, res) => {
  const { name, email, phone, location, message } = req.body;
  const emailText = `
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Location: ${location}
    Message: ${message}
  `;

  const response = await sendEmail(process.env.EMAIL_USER, `New Inquiry from ${name}`, emailText);
  res.status(response.success ? 200 : 500).send(response.message);
});

// ✅ Route: Bewerben with Attachments
app.post('/send-email-bewerben', upload.fields([
  { name: 'bewerbungsschreiben' }, { name: 'arbeitszeugnisse' }, { name: 'bild' }, { name: 'cv' }
]), async (req, res) => {
  const { vorname, nachname, email, phone, ort, plz, pensum, datumVon, datumBis, mitteilung } = req.body;

  const attachments = req.files ? Object.keys(req.files).map(key => ({
    filename: req.files[key][0].originalname,
    content: req.files[key][0].buffer,
  })) : [];

  const emailText = `
    Vorname: ${vorname}
    Nachname: ${nachname}
    Email: ${email}
    Mobil: ${phone}
    Ort: ${ort}
    PLZ: ${plz}
    Gewünschtes Pensum: ${pensum}
    Datum Von: ${datumVon}
    Datum Bis: ${datumBis}
    Mitteilung: ${mitteilung}
  `;

  const response = await sendEmail(process.env.EMAIL_USER, `New Bewerbung from ${vorname} ${nachname}`, emailText, attachments);
  res.status(response.success ? 200 : 500).send(response.message);
});

// ✅ Start server
app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
