import Link from 'next/link';
import Header from '@/components/Header';

export default function CLIProjectPage() {
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
            <Link href="/cli" className="hover:text-white transition-colors">
              CLI
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Project</span>
          </nav>
          
          <h1 className="text-4xl font-bold">MruudMail CLI</h1>
          <p className="text-xl text-zinc-400">
            A command-line interface for integrating professional email templates into your projects
          </p>
        </div>

        {/* Hero Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-zinc-900 to-black rounded-lg p-8 border border-zinc-800">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">Email Templates at Your Fingertips</h2>
                <p className="text-zinc-400 mb-6">
                  Access beautiful, responsive email templates directly from your command line. 
                  Perfect for developers who want to integrate professional emails into their applications.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/cli" 
                    className="bg-white text-black font-medium px-5 py-2 rounded-md hover:bg-zinc-200 transition-colors"
                  >
                    Documentation
                  </Link>
                  <Link 
                    href="/templates" 
                    className="bg-zinc-800 text-white font-medium px-5 py-2 rounded-md hover:bg-zinc-700 transition-colors"
                  >
                    Browse Templates
                  </Link>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-zinc-950 rounded-md p-6 w-full max-w-md border border-zinc-800">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <div className="text-zinc-400 text-sm ml-2">terminal</div>
                  </div>
                  <div className="font-mono text-sm">
                    <p className="text-green-400">$ npm install -g mruudmail-cli</p>
                    <p className="text-white mt-2">$ mruudmail templates list</p>
                    <p className="text-zinc-400 mt-1">Available templates:</p>
                    <p className="text-zinc-400">- transactional/welcome-email</p>
                    <p className="text-zinc-400">- marketing/newsletter</p>
                    <p className="text-zinc-400">- notifications/account-activity</p>
                    <p className="text-white mt-2">$ mruudmail templates get marketing/newsletter</p>
                    <p className="text-green-400 mt-1">✓ Template downloaded successfully!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 pb-2 border-b border-zinc-800">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <div className="h-12 w-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-blue-400" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" 
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">50+ Ready-to-Use Templates</h3>
              <p className="text-zinc-400">
                Access a growing library of professionally designed email templates for transactional, marketing, and notification emails.
              </p>
            </div>
            
            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <div className="h-12 w-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-purple-400" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Framework Agnostic</h3>
              <p className="text-zinc-400">
                Templates work with any JavaScript framework or library. Integrate with React, Vue, Express, or plain Node.js projects.
              </p>
            </div>
            
            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <div className="h-12 w-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-green-400" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" 
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Fully Customizable</h3>
              <p className="text-zinc-400">
                All templates are fully customizable. Modify colors, layout, content, and more to match your brand identity.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 pb-2 border-b border-zinc-800">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 relative">
              <div className="absolute -top-3 -left-3 h-8 w-8 bg-zinc-950 rounded-full flex items-center justify-center border border-zinc-800">
                <span className="text-lg font-bold">1</span>
              </div>
              <h3 className="text-xl font-medium mb-4 mt-2">Install the CLI</h3>
              <div className="bg-zinc-950 p-4 rounded-md mb-4">
                <code className="text-blue-400">npm install -g mruudmail-cli</code>
              </div>
              <p className="text-zinc-400">
                Install our CLI tool globally on your system to get started.
              </p>
            </div>
            
            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 relative">
              <div className="absolute -top-3 -left-3 h-8 w-8 bg-zinc-950 rounded-full flex items-center justify-center border border-zinc-800">
                <span className="text-lg font-bold">2</span>
              </div>
              <h3 className="text-xl font-medium mb-4 mt-2">Choose a Template</h3>
              <div className="bg-zinc-950 p-4 rounded-md mb-4">
                <code className="text-blue-400">mruudmail templates list</code>
              </div>
              <p className="text-zinc-400">
                Browse our catalog of templates and choose the one that fits your needs.
              </p>
            </div>
            
            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 relative">
              <div className="absolute -top-3 -left-3 h-8 w-8 bg-zinc-950 rounded-full flex items-center justify-center border border-zinc-800">
                <span className="text-lg font-bold">3</span>
              </div>
              <h3 className="text-xl font-medium mb-4 mt-2">Generate & Integrate</h3>
              <div className="bg-zinc-950 p-4 rounded-md mb-4">
                <code className="text-blue-400">mruudmail templates get marketing/newsletter</code>
              </div>
              <p className="text-zinc-400">
                Download the template and integrate it into your application.
              </p>
            </div>
          </div>
        </section>

        {/* Code Examples Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 pb-2 border-b border-zinc-800">Code Examples</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* CLI Usage Example */}
            <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800">
              <div className="bg-zinc-950 p-4 border-b border-zinc-800">
                <h3 className="text-lg font-medium">CLI Usage</h3>
              </div>
              <div className="p-6">
                <div className="bg-zinc-950 p-4 rounded-md overflow-auto">
                  <pre className="text-sm text-zinc-400">
{`# Install the CLI
npm install -g mruudmail-cli

# Configure your API key
mruudmail config set --api-key YOUR_API_KEY

# List available templates
mruudmail templates list

# Download a template
mruudmail templates get transactional/welcome-email

# Download to a specific location
mruudmail templates get marketing/newsletter --output ./src/emails/

# Preview a template in the browser
mruudmail templates preview marketing/special-offer`}
                  </pre>
                </div>
              </div>
            </div>
            
            {/* Integration Example */}
            <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800">
              <div className="bg-zinc-950 p-4 border-b border-zinc-800">
                <h3 className="text-lg font-medium">Integration with Node.js</h3>
              </div>
              <div className="p-6">
                <div className="bg-zinc-950 p-4 rounded-md overflow-auto">
                  <pre className="text-sm text-zinc-400">
{`// Import the template component
import { render } from '@react-email/render';
import { WelcomeEmail } from './emails/welcome-email';
import nodemailer from 'nodemailer';

// Set up your transporter
const transporter = nodemailer.createTransport({
  // Your email service configuration
});

// Render the template with custom data
const html = render(
  <WelcomeEmail 
    firstName="John" 
    productName="Your App" 
    actionUrl="https://yourapp.com/dashboard" 
  />
);

// Send the email
async function sendEmail() {
  await transporter.sendMail({
    from: '"Your App" <noreply@yourapp.com>',
    to: "user@example.com",
    subject: "Welcome to Your App!",
    html: html
  });
}

sendEmail();`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Started Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-8 border border-blue-900/50">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-zinc-300 mb-8">
                Install our CLI today and start sending beautiful emails in minutes!
              </p>
              <div className="bg-zinc-950 p-4 rounded-md overflow-auto inline-block text-left mb-8">
                <code className="text-blue-400">npm install -g mruudmail-cli</code>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/cli" 
                  className="bg-white text-black font-medium px-5 py-2 rounded-md hover:bg-zinc-200 transition-colors"
                >
                  Read Documentation
                </Link>
                <Link 
                  href="https://github.com/mruud/mruudmail-cli" 
                  className="bg-zinc-800 text-white font-medium px-5 py-2 rounded-md hover:bg-zinc-700 transition-colors flex items-center gap-2"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2z"></path>
                  </svg>
                  GitHub Repository
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-2xl font-bold mb-8 pb-2 border-b border-zinc-800">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <h3 className="text-xl font-medium mb-2">Is the CLI open source?</h3>
              <p className="text-zinc-400">
                Yes, the MruudMail CLI is completely open source. You can find the source code on our GitHub repository and contribute to its development.
              </p>
            </div>
            
            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <h3 className="text-xl font-medium mb-2">Do I need an API key to use the CLI?</h3>
              <p className="text-zinc-400">
                Yes, you need an API key to download templates. You can get a free API key by signing up for an account on our website.
              </p>
            </div>
            
            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <h3 className="text-xl font-medium mb-2">What email service providers are supported?</h3>
              <p className="text-zinc-400">
                Our templates work with any email service provider that supports HTML emails, including SendGrid, Mailgun, Amazon SES, Postmark, and more.
              </p>
            </div>
            
            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <h3 className="text-xl font-medium mb-2">Can I use the templates in commercial projects?</h3>
              <p className="text-zinc-400">
                Yes, all templates can be used in both personal and commercial projects. Check our license terms for more details.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 