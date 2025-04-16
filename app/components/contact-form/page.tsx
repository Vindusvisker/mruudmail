import Link from 'next/link';
import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';

export default function ContactFormPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex flex-col items-start gap-4 mb-12">
          <Link 
            href="/components"
            className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 mr-1" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" 
                clipRule="evenodd" 
              />
            </svg>
            Back to components
          </Link>
          <h1 className="text-4xl font-bold">Contact Form</h1>
          <p className="text-xl text-zinc-400">
            A comprehensive contact form with multiple fields and validation.
          </p>
        </div>

        {/* Demo and Preview Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Preview</h2>
            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <ContactForm 
                showHeader={true}
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Features</h2>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Comprehensive form with name, email, subject and message fields</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Dropdown component for subject selection</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Responsive two-column layout for name fields</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>GDPR-compliant with consent checkbox</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Advanced bot protection with honeypot field and timing checks</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Light and dark mode support</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Customizable subject options and form text</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Usage Documentation */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Usage</h2>
          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
            <pre className="text-sm text-zinc-300 overflow-x-auto">
              <code>{`import ContactForm from '@/components/ContactForm';

// Basic usage
<ContactForm 
  showHeader={true}
/>

// With custom configuration
<ContactForm 
  customConfig={{
    title: "Get in Touch",
    subtitle: "We&apos;re Here to Help",
    description: "Have questions or feedback? We&apos;d love to hear from you.",
    buttonText: "Send Your Message",
    successMessage: "Thanks! We&apos;ve received your message and will respond shortly.",
    subjectOptions: [
      { value: "inquiry", label: "General Inquiry" },
      { value: "quote", label: "Request a Quote" },
      { value: "support", label: "Customer Support" }
    ]
  }}
  endpoint="/api/contact"
  showHeader={true}
/>

// Light mode
<ContactForm 
  dark={false}
  showHeader={true}
/>`}</code>
            </pre>
          </div>
        </div>

        {/* Props Documentation */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Props</h2>
          <div className="overflow-hidden rounded-lg border border-zinc-800">
            <table className="w-full text-left">
              <thead className="bg-zinc-800">
                <tr>
                  <th className="p-4 text-zinc-300 font-medium">Name</th>
                  <th className="p-4 text-zinc-300 font-medium">Type</th>
                  <th className="p-4 text-zinc-300 font-medium">Default</th>
                  <th className="p-4 text-zinc-300 font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                <tr className="bg-zinc-900">
                  <td className="p-4 text-zinc-300 font-mono text-sm">customConfig</td>
                  <td className="p-4 text-zinc-400 font-mono text-sm">object</td>
                  <td className="p-4 text-zinc-400 font-mono text-sm">undefined</td>
                  <td className="p-4 text-zinc-300">Override default text configurations</td>
                </tr>
                <tr className="bg-zinc-900/70">
                  <td className="p-4 text-zinc-300 font-mono text-sm">endpoint</td>
                  <td className="p-4 text-zinc-400 font-mono text-sm">string</td>
                  <td className="p-4 text-zinc-400 font-mono text-sm">&quot;/api/contact&quot;</td>
                  <td className="p-4 text-zinc-300">API endpoint to submit form data</td>
                </tr>
                <tr className="bg-zinc-900">
                  <td className="p-4 text-zinc-300 font-mono text-sm">showHeader</td>
                  <td className="p-4 text-zinc-400 font-mono text-sm">boolean</td>
                  <td className="p-4 text-zinc-400 font-mono text-sm">false</td>
                  <td className="p-4 text-zinc-300">Whether to show the header section</td>
                </tr>
                <tr className="bg-zinc-900/70">
                  <td className="p-4 text-zinc-300 font-mono text-sm">dark</td>
                  <td className="p-4 text-zinc-400 font-mono text-sm">boolean</td>
                  <td className="p-4 text-zinc-400 font-mono text-sm">true</td>
                  <td className="p-4 text-zinc-300">Whether to use dark mode styling</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* customConfig Props */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">customConfig Properties</h2>
          <div className="overflow-hidden rounded-lg border border-zinc-800">
            <table className="w-full text-left">
              <thead className="bg-zinc-800">
                <tr>
                  <th className="p-4 text-zinc-300 font-medium">Property</th>
                  <th className="p-4 text-zinc-300 font-medium">Type</th>
                  <th className="p-4 text-zinc-300 font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                <tr className="bg-zinc-900">
                  <td className="p-4 text-zinc-300 font-mono text-sm">title</td>
                  <td className="p-4 text-zinc-400 font-mono text-sm">string</td>
                  <td className="p-4 text-zinc-300">Form title displayed in the header</td>
                </tr>
                <tr className="bg-zinc-900/70">
                  <td className="p-4 text-zinc-300 font-mono text-sm">subtitle</td>
                  <td className="p-4 text-zinc-400 font-mono text-sm">string</td>
                  <td className="p-4 text-zinc-300">Subtitle shown below the title</td>
                </tr>
                <tr className="bg-zinc-900">
                  <td className="p-4 text-zinc-300 font-mono text-sm">description</td>
                  <td className="p-4 text-zinc-400 font-mono text-sm">string</td>
                  <td className="p-4 text-zinc-300">Longer description of the form&apos;s purpose</td>
                </tr>
                <tr className="bg-zinc-900/70">
                  <td className="p-4 text-zinc-300 font-mono text-sm">buttonText</td>
                  <td className="p-4 text-zinc-400 font-mono text-sm">string</td>
                  <td className="p-4 text-zinc-300">Text displayed on the submit button</td>
                </tr>
                <tr className="bg-zinc-900">
                  <td className="p-4 text-zinc-300 font-mono text-sm">successMessage</td>
                  <td className="p-4 text-zinc-400 font-mono text-sm">string</td>
                  <td className="p-4 text-zinc-300">Message shown after successful submission</td>
                </tr>
                <tr className="bg-zinc-900/70">
                  <td className="p-4 text-zinc-300 font-mono text-sm">subjectOptions</td>
                  <td className="p-4 text-zinc-400 font-mono text-sm">array</td>
                  <td className="p-4 text-zinc-300">Array of {`{ value, label }`} objects for the subject dropdown</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Example Variations */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Example Variations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-medium mb-4">Default Dark Mode</h3>
              <ContactForm 
                showHeader={true}
              />
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-medium mb-4 text-gray-900">Light Mode</h3>
              <ContactForm 
                dark={false}
                showHeader={true}
              />
            </div>
          </div>
        </div>

        {/* Backend Integration */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Backend Integration</h2>
          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
            <h3 className="text-xl font-medium mb-4">API Endpoint</h3>
            <p className="text-zinc-300 mb-4">
              This component requires a backend API endpoint to handle form submissions. By default, it sends a POST request to <code className="bg-zinc-800 px-2 py-1 rounded text-xs">/api/contact</code>.
            </p>
            <p className="text-zinc-300 mb-4">
              The API should expect to receive the following data:
            </p>
            <pre className="text-sm text-zinc-300 mb-4 p-4 bg-zinc-800 rounded overflow-x-auto">
              <code>{`{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "subject": "support",  // One of the subject option values
  "message": "This is my detailed message...",
  "gdprConsent": true
}`}</code>
            </pre>
            <p className="text-zinc-300 mb-4">
              For an example implementation of a contact form API endpoint using Next.js API routes:
            </p>
            <pre className="text-sm text-zinc-300 p-4 bg-zinc-800 rounded overflow-x-auto">
              <code>{`// pages/api/contact.js or app/api/contact/route.ts
export async function POST(req, res) {
  const body = await req.json();
  
  // Validate required fields
  if (!body.email || !body.message) {
    return new Response(
      JSON.stringify({ error: 'Email and message are required' }),
      { status: 400 }
    );
  }

  try {
    // Process the submission (e.g., send email, store in database)
    // Example with nodemailer, Resend, or your preferred email service
    
    // Return success response
    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process your request' }),
      { status: 500 }
    );
  }
}`}</code>
            </pre>
          </div>
        </div>

        {/* Accessibility Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Accessibility Features</h2>
          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
            <p className="text-zinc-300 mb-4">
              This contact form is built with accessibility in mind:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-zinc-300">
              <li>All form controls have associated labels</li>
              <li>Error messages are clearly associated with their inputs</li>
              <li>Color is not the only indicator of validation states</li>
              <li>Tab index follows a logical order</li>
              <li>Honeypot field is properly hidden from screen readers with <code className="bg-zinc-800 px-1 py-0.5 rounded text-xs">aria-hidden=&quot;true&quot;</code></li>
              <li>Sufficient color contrast in both light and dark modes</li>
              <li>Status changes (success/error) are apparent and accessible</li>
            </ul>
          </div>
        </div>

        {/* Next Steps */}
        <div className="flex justify-between items-center pt-8 border-t border-zinc-800">
          <Link 
            href="/components/newsletter-form"
            className="text-blue-400 hover:text-blue-300 flex items-center"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 mr-1" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" 
                clipRule="evenodd" 
              />
            </svg>
            Previous: Newsletter Form
          </Link>
          <Link 
            href="/components"
            className="text-blue-400 hover:text-blue-300 flex items-center"
          >
            Back to all components
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-1" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 010-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 