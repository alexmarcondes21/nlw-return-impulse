import { MailAdapter, sendMailData } from "../mailAdapter";
import nodemailer from 'nodemailer';


const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "5b618062a37ecd",
    pass: "ae1c09400f40eb",
  },
});


export class NodemailerMailAdapter implements MailAdapter{
 async sendMail({subject, body}: sendMailData) {
       await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Alexander Marcondes Junior <alexmarcjr21@gmail.com> ',
      subject,
      html: body,
  })
  
 };
}