import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);

// When sending emails, use your domain
const FROM_EMAIL = 'noreply@mruud.com';  // or whatever subdomain you prefer

export { FROM_EMAIL }; 