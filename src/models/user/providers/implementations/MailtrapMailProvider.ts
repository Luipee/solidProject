import { IMailProvider, IMessage } from "../IMailProviders"
import nodemailer from 'nodemailer'

  export class MailtrapMailProvider implements IMailProvider {
    transporter

    constructor() {
      this.transporter = nodemailer.createTransport({
        host: 'sandbox.smtp.mailtrap.io',
        port: 2525,
        auth: {
          user: '0cc5ff22b2b418',
          pass: '9309c4afc880bd'
        }
      })
    }
    Promise() {
      throw new Error("Method not implemented.");
    }
    async sendMail(message: IMessage) {
      await this.transporter.sendMail({
        to:{
          name: message.to.name, 
          address:message.to.email,
        },
        from: {
          name: message.from.name,
          address: message.from.email,
        },
        subject: message.subject,
        html: message.body,

      })
   }
  }