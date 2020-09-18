const nodemailer = require("nodemailer");
const functions = require("firebase-functions");

class Email {
  constructor() {
    const userEmail = 'itoourlatam@gmail.com'
    const passwordEmail = 'itoour2020'
    this.mailTransport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      tls: { rejectUnauthorized: false },
      auth: {
        user: userEmail,
        pass: passwordEmail,
      },
    });
  }

  sendEmail(from, to, bcc, subject, body) {
    const mailOptions = {
      from: from,
      to: to,
      bcc: bcc,
    };

    mailOptions.subject = subject;
    mailOptions.html = body;

    return this.mailTransport.sendMail(mailOptions);
  }
}

exports.Email = Email;