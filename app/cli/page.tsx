import Link from 'next/link';
import Header from '@/components/Header';

export default function CLIDocumentationPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex flex-col items-start gap-4 mb-12">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-sm text-zinc-400">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-zinc-600">/</span>
            <Link href="/docs" className="hover:text-white transition-colors">
              Docs
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">CLI</span>
          </nav>
          
          <h1 className="text-4xl font-bold">CLI Documentation</h1>
          <p className="text-xl text-zinc-400">
            Learn how to integrate our email templates into your projects using the MruudMail CLI.
          </p>
        </div>

        {/* CLI Installation Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-zinc-800">Installation</h2>
          <div className="bg-zinc-900 rounded-lg p-6 mb-6">
            <p className="text-zinc-400 mb-4">
              Install the MruudMail CLI globally using npm:
            </p>
            <div className="bg-zinc-950 p-4 rounded-md overflow-auto mb-4">
              <code className="text-blue-400">npm install -g mruudmail-cli</code>
            </div>
            <p className="text-zinc-400">
              Or using yarn:
            </p>
            <div className="bg-zinc-950 p-4 rounded-md overflow-auto">
              <code className="text-blue-400">yarn global add mruudmail-cli</code>
            </div>
          </div>
        </section>

        {/* CLI Configuration Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-zinc-800">Configuration</h2>
          <div className="bg-zinc-900 rounded-lg p-6 mb-6">
            <p className="text-zinc-400 mb-4">
              After installing, set up your API key:
            </p>
            <div className="bg-zinc-950 p-4 rounded-md overflow-auto">
              <code className="text-blue-400">mruudmail config set --api-key YOUR_API_KEY</code>
            </div>
            <p className="text-zinc-400 mt-4">
              You can get your API key from your <Link href="/account/settings" className="text-blue-400 hover:text-blue-300">account settings</Link>.
            </p>
          </div>
        </section>

        {/* CLI Commands Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-zinc-800">Basic Commands</h2>
          
          <div className="space-y-6">
            {/* List Templates Command */}
            <div className="bg-zinc-900 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-4">List Templates</h3>
              <p className="text-zinc-400 mb-4">
                View all available email templates:
              </p>
              <div className="bg-zinc-950 p-4 rounded-md overflow-auto">
                <code className="text-blue-400">mruudmail templates list</code>
              </div>
              <div className="mt-4 bg-zinc-950 p-4 rounded-md overflow-auto">
                <pre className="text-sm text-zinc-500">
{`Available templates:
- transactional/welcome-email
- transactional/password-reset
- transactional/order-confirmation
- marketing/newsletter
- marketing/product-launch
- marketing/special-offer
- notifications/comment-notification
- notifications/account-activity
- notifications/event-reminder`}
                </pre>
              </div>
            </div>

            {/* Get Template Command */}
            <div className="bg-zinc-900 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-4">Get Template</h3>
              <p className="text-zinc-400 mb-4">
                Download a template to your project:
              </p>
              <div className="bg-zinc-950 p-4 rounded-md overflow-auto">
                <code className="text-blue-400">mruudmail templates get transactional/welcome-email --output ./src/emails/</code>
              </div>
              <div className="mt-4 bg-zinc-950 p-4 rounded-md overflow-auto">
                <pre className="text-sm text-zinc-500">
{`✓ Template downloaded successfully!
Location: ./src/emails/welcome-email.tsx`}
                </pre>
              </div>
              <p className="text-zinc-400 mt-4">
                This will create the necessary files in your project directory.
              </p>
            </div>

            {/* Preview Template Command */}
            <div className="bg-zinc-900 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-4">Preview Template</h3>
              <p className="text-zinc-400 mb-4">
                Preview a template before downloading:
              </p>
              <div className="bg-zinc-950 p-4 rounded-md overflow-auto">
                <code className="text-blue-400">mruudmail templates preview marketing/newsletter</code>
              </div>
              <div className="mt-4 bg-zinc-950 p-4 rounded-md overflow-auto">
                <pre className="text-sm text-zinc-500">
{`✓ Opening preview in your browser...`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Template Customization Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-zinc-800">Customizing Templates</h2>
          
          <div className="bg-zinc-900 rounded-lg p-6 mb-6">
            <p className="text-zinc-400 mb-6">
              Templates are downloaded as React components that you can customize. Here&apos;s an example of a welcome email template:
            </p>
            <div className="bg-zinc-950 p-4 rounded-md overflow-auto">
              <pre className="text-sm text-blue-400">
{`import React from 'react';
import { 
  Body, 
  Container, 
  Head, 
  Heading, 
  Html, 
  Link, 
  Preview, 
  Text 
} from '@react-email/components';

interface WelcomeEmailProps {
  firstName: string;
  productName: string;
  actionUrl: string;
}

export const WelcomeEmail: React.FC<WelcomeEmailProps> = ({
  firstName = 'John',
  productName = 'MruudMail',
  actionUrl = 'https://example.com',
}) => {
  return (
    <Html>
      <Head />
      <Preview>Welcome to {productName}</Preview>
      <Body style={{ 
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', 
        backgroundColor: '#f6f9fc',
        padding: '40px 0'
      }}>
        <Container style={{ 
          backgroundColor: '#ffffff',
          border: '1px solid #eaeaea',
          borderRadius: '12px',
          padding: '40px',
          maxWidth: '600px',
        }}>
          <Heading style={{ 
            fontSize: '24px',
            fontWeight: 'bold',
            margin: '0 0 20px'
          }}>
            Welcome, {firstName}!
          </Heading>
          
          <Text style={{ 
            fontSize: '16px',
            lineHeight: '26px',
            color: '#333'
          }}>
            Thanks for signing up for {productName}. We're excited to have you on board!
          </Text>
          
          {/* More template content here */}
          
          <Text style={{ 
            fontSize: '16px',
            lineHeight: '26px', 
            color: '#333'
          }}>
            Best regards,<br />
            The {productName} Team
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeEmail;`}
              </pre>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-zinc-800">Integration Examples</h2>
          
          <div className="space-y-6">
            {/* Node.js Integration */}
            <div className="bg-zinc-900 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-4">Node.js with Nodemailer</h3>
              <p className="text-zinc-400 mb-4">
                Integrate with Nodemailer to send emails:
              </p>
              <div className="bg-zinc-950 p-4 rounded-md overflow-auto">
                <pre className="text-sm text-blue-400">
{`import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import { WelcomeEmail } from './emails/welcome-email';

// Create transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.example.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Send email
async function sendWelcomeEmail(userEmail, firstName) {
  const emailHtml = render(
    <WelcomeEmail 
      firstName={firstName}
      productName="Your App"
      actionUrl="https://your-app.com/dashboard"
    />
  );

  const info = await transporter.sendMail({
    from: '"Your App" <no-reply@your-app.com>',
    to: userEmail,
    subject: "Welcome to Your App!",
    html: emailHtml,
  });

  console.log('Email sent: %s', info.messageId);
  return info;
}`}
                </pre>
              </div>
            </div>

            {/* Next.js API Route */}
            <div className="bg-zinc-900 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-4">Next.js API Route</h3>
              <p className="text-zinc-400 mb-4">
                Use in a Next.js API route with Resend:
              </p>
              <div className="bg-zinc-950 p-4 rounded-md overflow-auto">
                <pre className="text-sm text-blue-400">
{`// app/api/send-welcome/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import { WelcomeEmail } from '@/emails/welcome-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email, firstName } = await request.json();
    
    const emailHtml = render(
      <WelcomeEmail 
        firstName={firstName}
        productName="Your App"
        actionUrl="https://your-app.com/dashboard"
      />
    );

    const data = await resend.emails.send({
      from: 'Your App <onboarding@your-app.com>',
      to: email,
      subject: 'Welcome to Your App!',
      html: emailHtml,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-zinc-800">Troubleshooting</h2>
          
          <div className="bg-zinc-900 rounded-lg p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">API Key Issues</h3>
                <p className="text-zinc-400">
                  If you encounter API key errors, verify your key with:
                </p>
                <div className="bg-zinc-950 p-4 rounded-md overflow-auto mt-2">
                  <code className="text-blue-400">mruudmail config verify</code>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Dependency Installation</h3>
                <p className="text-zinc-400">
                  Make sure you have the required dependencies installed:
                </p>
                <div className="bg-zinc-950 p-4 rounded-md overflow-auto mt-2">
                  <code className="text-blue-400">npm install @react-email/components react-email</code>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Get Help</h3>
                <p className="text-zinc-400">
                  For more help with the CLI:
                </p>
                <div className="bg-zinc-950 p-4 rounded-md overflow-auto mt-2">
                  <code className="text-blue-400">mruudmail --help</code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-zinc-800">Next Steps</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-4">Browse Templates</h3>
              <p className="text-zinc-400 mb-4">
                Explore our collection of beautifully designed email templates.
              </p>
              <Link 
                href="/templates" 
                className="inline-flex items-center text-blue-400 hover:text-blue-300"
              >
                View templates
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-1" 
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </Link>
            </div>
            
            <div className="bg-zinc-900 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-4">CLI Overview</h3>
              <p className="text-zinc-400 mb-4">
                Learn more about the MruudMail CLI project and its capabilities.
              </p>
              <Link 
                href="/cli-project" 
                className="inline-flex items-center text-blue-400 hover:text-blue-300"
              >
                View CLI project
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-1" 
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 