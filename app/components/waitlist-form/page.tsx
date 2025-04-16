import Link from 'next/link';
import Header from '@/components/Header';
import WaitlistForm from '@/components/WaitlistForm';

export default function WaitlistFormPage() {
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
          <h1 className="text-4xl font-bold">Waitlist Form</h1>
          <p className="text-xl text-zinc-400">
            A customizable form for collecting emails and information for your waitlist.
          </p>
        </div>

        {/* Demo and Preview Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Preview</h2>
            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <WaitlistForm 
                projectId="indie-portfolio" 
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
                <span>Fully customizable form with validation</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Integrated with Supabase Edge Functions</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Bot detection with honeypot and timestamp verification</span>
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
                <span>Success and error states with meaningful feedback</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Customizable labels, descriptions, and button text</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Usage Documentation */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Usage</h2>
          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
            <pre className="text-sm text-zinc-300 overflow-x-auto">
              <code>{`import WaitlistForm from '@/components/WaitlistForm';

// Basic usage
<WaitlistForm 
  projectId="your-project-id" 
  showHeader={true}
/>

// With custom configuration
<WaitlistForm 
  projectId="your-project-id"
  customConfig={{
    title: "Join Our Beta",
    subtitle: "Early Access",
    description: "Be the first to try our new product.",
    buttonText: "Request Access",
    successMessage: "You're in! Check your email for confirmation.",
    category: "waitlist"
  }}
  showHeader={true}
/>

// Without header (for embedding in your own UI)
<WaitlistForm 
  projectId="your-project-id"
  showHeader={false}
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
                  <td className="p-4 text-zinc-300 font-mono text-sm">projectId</td>
                  <td className="p-4 text-zinc-400 font-mono text-sm">string</td>
                  <td className="p-4 text-zinc-400 font-mono text-sm">required</td>
                  <td className="p-4 text-zinc-300">Unique identifier for the project</td>
                </tr>
                <tr className="bg-zinc-900/70">
                  <td className="p-4 text-zinc-300 font-mono text-sm">customConfig</td>
                  <td className="p-4 text-zinc-400 font-mono text-sm">object</td>
                  <td className="p-4 text-zinc-400 font-mono text-sm">undefined</td>
                  <td className="p-4 text-zinc-300">Override default configurations</td>
                </tr>
                <tr className="bg-zinc-900">
                  <td className="p-4 text-zinc-300 font-mono text-sm">supabaseUrl</td>
                  <td className="p-4 text-zinc-400 font-mono text-sm">string</td>
                  <td className="p-4 text-zinc-400 font-mono text-sm">&quot;https://...&quot;</td>
                  <td className="p-4 text-zinc-300">Custom Supabase URL if needed</td>
                </tr>
                <tr className="bg-zinc-900/70">
                  <td className="p-4 text-zinc-300 font-mono text-sm">showHeader</td>
                  <td className="p-4 text-zinc-400 font-mono text-sm">boolean</td>
                  <td className="p-4 text-zinc-400 font-mono text-sm">false</td>
                  <td className="p-4 text-zinc-300">Whether to show the header section</td>
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
              <h3 className="text-xl font-medium mb-4">Newsletter Signup</h3>
              <WaitlistForm 
                projectId="newsletter" 
                customConfig={{
                  title: "Subscribe to Newsletter",
                  subtitle: "Stay Updated",
                  description: "Get the latest updates, tips, and insights delivered straight to your inbox.",
                  buttonText: "Subscribe",
                  successMessage: "Thanks for subscribing! Check your inbox for a confirmation.",
                  category: "newsletter",
                }}
                showHeader={true}
              />
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-medium mb-4">Early Access</h3>
              <WaitlistForm 
                projectId="waitlist" 
                customConfig={{
                  title: "Join the Waitlist",
                  subtitle: "Early Access Signup",
                  description: "Be among the first to try our upcoming projects and exclusive tools.",
                  buttonText: "Join the Waitlist",
                  successMessage: "You're on the list! We'll notify you when early access is ready.",
                  category: "waitlist",
                }}
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
              This component requires a Supabase Edge Function to handle form submissions. 
              The function should be named <code className="bg-zinc-800 px-2 py-1 rounded text-xs">submit-email</code> 
              and should be deployed to your Supabase project.
            </p>
            <p className="text-zinc-300 mb-4">
              For detailed setup instructions, check out the implementation guide in our documentation.
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

        {/* Next Steps */}
        <div className="flex justify-between items-center pt-8 border-t border-zinc-800">
          <Link 
            href="/components"
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
            Back to all components
          </Link>
          <Link 
            href="/components/newsletter-form"
            className="text-blue-400 hover:text-blue-300 flex items-center"
          >
            Next component: Newsletter Form
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