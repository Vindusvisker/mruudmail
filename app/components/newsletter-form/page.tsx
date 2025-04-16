import Link from 'next/link';
import Header from '@/components/Header';
import NewsletterForm from '@/components/NewsletterForm';

export default function NewsletterFormPage() {
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
          <h1 className="text-4xl font-bold">Newsletter Form</h1>
          <p className="text-xl text-zinc-400">
            A simple, effective email capture form for your newsletter signups.
          </p>
        </div>

        {/* Demo and Preview Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Preview</h2>
            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <NewsletterForm 
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
                <span>Clean, minimal design focused on conversions</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Email validation built-in</span>
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
                <span>Bot protection with honeypot fields</span>
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
                <span>Customizable text and styling</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Usage Documentation */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Usage</h2>
          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
            <pre className="text-sm text-zinc-300 overflow-x-auto">
              <code>{`import NewsletterForm from '@/components/NewsletterForm';

// Basic usage
<NewsletterForm 
  showHeader={true}
/>

// With custom configuration
<NewsletterForm 
  customConfig={{
    title: "Join My Newsletter",
    subtitle: "Weekly Updates",
    description: "Get insights and tips delivered to your inbox.",
    buttonText: "Subscribe Now",
    successMessage: "You're all set! Check your inbox for confirmation."
  }}
  showHeader={true}
/>

// Light mode
<NewsletterForm 
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
                  <td className="p-4 text-zinc-300 font-mono text-sm">supabaseUrl</td>
                  <td className="p-4 text-zinc-400 font-mono text-sm">string</td>
                  <td className="p-4 text-zinc-400 font-mono text-sm">&quot;https://...&quot;</td>
                  <td className="p-4 text-zinc-300">Custom Supabase URL if needed</td>
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

        {/* Example Variations */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Example Variations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-medium mb-4">Default Dark Mode</h3>
              <NewsletterForm 
                showHeader={true}
              />
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-medium mb-4 text-gray-900">Light Mode</h3>
              <NewsletterForm 
                dark={false}
                showHeader={true}
              />
            </div>
          </div>
        </div>

        {/* Integration Notes */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Integration Notes</h2>
          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
            <h3 className="text-xl font-medium mb-4">Backend Requirements</h3>
            <p className="text-zinc-300 mb-4">
              This component uses the same backend API as the WaitlistForm component. It requires a Supabase Edge Function named <code className="bg-zinc-800 px-2 py-1 rounded text-xs">submit-email</code>.
            </p>
            <p className="text-zinc-300 mb-4">
              The backend API stores email addresses with a <code className="bg-zinc-800 px-2 py-1 rounded text-xs">category</code> field set to <code className="bg-zinc-800 px-2 py-1 rounded text-xs">&quot;newsletter&quot;</code>.
            </p>
            <div className="flex justify-end">
              <Link 
                href="/docs/backend-setup" 
                className="text-blue-400 hover:text-blue-300"
              >
                View backend implementation guide →
              </Link>
            </div>
          </div>
        </div>

        {/* Design Considerations */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Design Considerations</h2>
          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
            <p className="text-zinc-300 mb-4">
              The NewsletterForm is intentionally minimal to optimize for conversion rates. Key design features:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-zinc-300">
              <li>Single input field to reduce friction</li>
              <li>Clear, action-oriented button text</li>
              <li>GDPR checkbox placed below the main action to maintain focus</li>
              <li>Success state provides immediate feedback</li>
              <li>Error handling is clear but not distracting</li>
              <li>Light/dark mode support for integration in any design</li>
            </ul>
            <p className="text-zinc-300 mt-4">
              For higher engagement, consider embedding this form in content-rich areas or at the end of blog posts.
            </p>
          </div>
        </div>

        {/* Next Steps */}
        <div className="flex justify-between items-center pt-8 border-t border-zinc-800">
          <Link 
            href="/components/waitlist-form"
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
            Previous: Waitlist Form
          </Link>
          <Link 
            href="/components/contact-form"
            className="text-blue-400 hover:text-blue-300 flex items-center"
          >
            Next: Contact Form
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