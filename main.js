import { Resend } from 'resend';

const resend = new Resend(process.env.RESENT_API_KEY);
const args = process.argv.slice(2);
const to = args[0];

resend.emails.send({
  from: 'onboarding@resend.dev',
	to,
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});
