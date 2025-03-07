# MruudMail

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Features

### Marketing Email System

This project includes a serverless email marketing system built on Supabase Edge Functions. The system allows you to:

- Compose marketing emails with a user-friendly interface
- Preview emails in real-time as you edit
- Send emails to users who have opted in to marketing communications
- Track email delivery and engagement

#### Security Notes

- The marketing email composer requires a Supabase service role key to function
- This key is stored in your browser's sessionStorage and is automatically cleared when you close the tab
- **IMPORTANT**: This tool is intended for local development only. Do not deploy it publicly without implementing proper authentication
- Never commit your service role key to the repository

#### How to Use

1. Start the development server
2. Navigate to `/marketing` to access the email composer
3. Enter your Supabase service role key in the settings section
4. Compose your email with subject, content, and optional CTA button
5. Preview your email in real-time
6. Click "Send Marketing Email" to send to all users who have opted in

## Serverless Architecture

This project uses Supabase Edge Functions for serverless operations:

- `submit-email`: Processes initial email signups and sends welcome emails
- `marketing-email`: Sends marketing emails to users who have opted in

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Environment Variables

Create a `.env.local` file with the following variables:

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
RESEND_API_KEY=your_resend_api_key

Note: The service role key is only used by the Supabase Edge Functions and can be entered manually in the UI for the marketing email feature.


