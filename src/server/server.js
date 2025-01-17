const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const multer = require('multer');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

// File upload setup
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// First endpoint for Anfrageformular (existing one)
app.post('/send-email', async (req, res) => {
  const { name, email, phone, firm, message, job, ort, plz } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'gafarneziri08@gmail.com', // Your email
      pass: 'mljm pemf pofs sncq', // Your email password or app password
    },
  });

  const mailOptions = {
    from: email,
    to: 'gafarneziri08@gmail.com',
    subject: `New Anfrage from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Firmenname: ${firm}
      Job: ${job}
      Ort: ${ort}
      PLZ: ${plz}

      Message: ${message}
    `,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Failed to send email.');
  }
});

// Second endpoint for Formular2 (new one with file support)
app.post(
  '/send-email-formular2',
  upload.fields([
    { name: 'CV' },
    { name: 'Diplome' },
    { name: 'Arbeitszeugnisse' },
    { name: 'Bild Hochladen' },
    { name: 'Sonstiges' },
  ]),
  async (req, res) => {
    try {
      const {
        vorname,
        nachname,
        email,
        phone,
        ort,
        plz,
        beruf,
        start,
        mitteilung,
      } = req.body;

      // Prepare attachments
      const attachments = [];
      if (req.files) {
        Object.keys(req.files).forEach((key) => {
          attachments.push({
            filename: req.files[key][0].originalname,
            content: req.files[key][0].buffer,
          });
        });
      }

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'gafarneziri08@gmail.com', // Your email
          pass: 'mljm pemf pofs sncq', // Your email password or app password
        },
      });

      const mailOptions = {
        from: 'gafarneziri08@gmail.com',
        to: 'gafarneziri08@gmail.com',
        subject: `Formular2 Anfrage von ${vorname} ${nachname}`,
        text: `
          Vorname: ${vorname}
          Nachname: ${nachname}
          Email: ${email}
          Mobil: ${phone}
          Ort: ${ort}
          PLZ: ${plz}
          Beruf: ${beruf}
          Startdatum: ${start}
          Mitteilung: ${mitteilung}
        `,
        attachments: attachments,
        replyTo: email,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).send('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Failed to send email.');
    }
  }
);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
app.post('/send-email-page5', async (req, res) => {
    const { name, email, phone, location, message } = req.body;
  
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'gafarneziri08@gmail.com', // Your email
        pass: 'mljm pemf pofs sncq', // Your app password
      },
    });
  
    const mailOptions = {
      from: email,
      to: 'gafarneziri08@gmail.com',
      subject: `New Inquiry from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Location: ${location}
        Message: ${message}
      `,
      replyTo: email,
    };
  
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Failed to send email.');
    }
  });
  app.post(
    '/send-email-bewerben',
    upload.fields([
      { name: 'bewerbungsschreiben' },
      { name: 'arbeitszeugnisse' },
      { name: 'bild' },
      { name: 'cv' },
    ]),
    async (req, res) => {
      try {
        const {
          vorname,
          nachname,
          email,
          phone,
          ort,
          plz,
          pensum,
          datumVon,
          datumBis,
          mitteilung,
        } = req.body;
  
        // Prepare attachments
        const attachments = [];
        if (req.files) {
          Object.keys(req.files).forEach((key) => {
            attachments.push({
              filename: req.files[key][0].originalname,
              content: req.files[key][0].buffer,
            });
          });
        }
  
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'gafarneziri08@gmail.com', // Your email
            pass: 'mljm pemf pofs sncq', // Your app password
          },
        });
  
        const mailOptions = {
          from: 'gafarneziri08@gmail.com',
          to: 'gafarneziri08@gmail.com',
          subject: `New Bewerbung from ${vorname} ${nachname}`,
          text: `
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
          `,
          attachments: attachments,
          replyTo: email,
        };
  
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully!');
      } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Failed to send email.');
      }
    }
  );
  app.post(
    '/send-email-bewerben',
    upload.fields([
      { name: 'bewerbungsschreiben' },
      { name: 'arbeitszeugnisse' },
      { name: 'bild' },
      { name: 'cv' },
    ]),
    async (req, res) => {
      try {
        const { vorname, nachname, email, phone, ort, plz, pensum, datumVon, datumBis, mitteilung } =
          req.body;
  
        // Prepare attachments
        const attachments = [];
        if (req.files) {
          Object.keys(req.files).forEach((key) => {
            attachments.push({
              filename: req.files[key][0].originalname,
              content: req.files[key][0].buffer,
            });
          });
        }
  
        // Email setup
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'gafarneziri08@gmail.com', // Your email
            pass: 'mljm pemf pofs sncq', // Your app password
          },
        });
  
        const mailOptions = {
          from: 'gafarneziri08@gmail.com',
          to: 'gafarneziri08@gmail.com',
          subject: `New Bewerbung from ${vorname} ${nachname}`,
          text: `
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
          `,
          attachments: attachments,
          replyTo: email,
        };
  
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully!');
      } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Failed to send email.');
      }
    }
  );
  