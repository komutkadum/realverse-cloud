import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  let nodemailer = require('nodemailer');
  const {
    firstName,
    lastName,
    email,
    phone,
    jobTitle,
    contactType,
    description,
  } = req.body;
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'kadumnui@gmail.com',
      pass: 'KadumNuyi47@',
    },
    secure: true,
  });
  const msg = {
    to: 'kadumnui@gmail.com',
    from: 'realverseproptech@gmail.com',
    subject: contactType,
    text: `email from ${email}`,
    html: `<p>from email :  ${email}, name: ${firstName} ${lastName}</p>
          <p>phone: ${phone} </p>
          <p>job title: ${jobTitle}</p>
          <p>contact type: ${contactType}</p>
          <p>description: ${description}</p>`,
  };
  transporter.sendMail(msg, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
}

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const {
//       firstName,
//       lastName,
//       email,
//       phone,
//       jobTitle,
//       contactType,
//       description,
//     } = req.body;
//     const msg = {
//       to: 'realverseproptech@gmail.com',
//       from: 'kadumkomut2826@gmail.com',
//       subject: contactType,
//       html: `<p>from email :  ${email}, name: ${firstName} ${lastName}</p>
//       <p>phone: ${phone} </p>
//       <p>job title: ${jobTitle}</p>
//       <p>contact type: ${contactType}</p>
//       <p>description: ${description}</p>`,
//     };

//     try {
//       await sgMail.send(msg);
//       res.status(200).json({ success: true, content: req.body });
//     } catch (err) {
//       res.status(501).json({ success: false });
//     }
//   }
// }
