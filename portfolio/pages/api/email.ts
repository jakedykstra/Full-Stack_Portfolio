import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import smtpTransport from 'nodemailer-smtp-transport'


export default (req: NextApiRequest, res: NextApiResponse) => {

    const transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: process.env.UN,
            pass: process.env.PASS
        }
      }));
    
     transporter.verify((error) => {
      if (error) {
        throw new Error('Creating Email Server')
      } else {
        console.log('Server is ready to take messages');
      }
    });

    const { name, email, message, project, hiring } = req.body;

    const composeReason = (project: string, hiring: string) => {
        if(project === "on"){
            return {reason: "project", reasonResp: " about your project"}
        } else if (hiring === "on") {
            return {reason: "hiring", reasonResp: " about your position available"}
        }

        return {reason: "none specificed", reasonResp: ""}
    }

    const {reason, reasonResp} = composeReason(project, hiring)

    const content = `name: ${name} \n email: ${email} \n message: ${message} \n reason: ${reason} `
    const mail = {
      from: name,
      to: 'jacobdavidfinch@gmail.com', 
      subject: 'New Message from Contact Form',
      text: content
    }
    const notifyMailer = {
        from: 'Jacob Finch',
        to: email,
        subject: 'Expect a follow up shortly',
        text: 'Dear ' + name + ', \n\nThis is an automated message on behalf of Jacob Finch. Thank you for reaching out to me via my contact form on my site. I will follow up with you as soon as possible to discuss further details' + reasonResp + '.\n\nBest, \nJacob Finch'
    }

    // sending my message to client
    transporter.sendMail(notifyMailer, (err) => {
        if (err) { 
            throw new Error('Error Sending Email to Client')
        } 
      })
  
    // sending message to me via client contact form
    transporter.sendMail(mail, (err) => {
      if (err) {
        throw new Error('Error Sending Email to Self')

      } else {
        res.json({
          msg: 'success'
        })
      }
    })

    res.status(200).send('SUCCESS')
}