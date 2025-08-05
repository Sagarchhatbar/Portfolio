import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

resend.emails.send({
  from: 'sagar.chhatbar25@gmail.com',
  to: 'sagar.chhatbar25@gmail.com',
  subject: 'Hello World',
  react: (
    <>
        <h1>Hello World</h1>
        <p>This is a test email sent using Resend.</p>
    </>
  )
});