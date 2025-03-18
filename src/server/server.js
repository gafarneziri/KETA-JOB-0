require('dotenv').config(); // Load environment variables
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const multer = require('multer');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// ✅ Email transporter (Using environment variables for security)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false, // Ignore self-signed certificate errors
  },
});

// ✅ File upload setup with 5MB limit
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max file size
});

// ✅ Utility function to send emails
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

// ✅ Route: Send an email (Anfrageformular)
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

// ✅ Route: Send an email with file attachments (Formular2)
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

// ✅ Route: Send an email for Page 5 (General Inquiry)
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

// ✅ Route: Bewerben (Job Application with File Upload)
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

// ✅ Start the server
app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
