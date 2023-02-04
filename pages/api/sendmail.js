import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message, subject } = req.body;
    const msg = {
      to: 'realverseproptech@gmail.com',
      from: 'realverseproptech@gmail.com',
      subject: subject,
      text: 'Email',
      html: 'message',
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(200).json({ success: false });
    }
  }
}
