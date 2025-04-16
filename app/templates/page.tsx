import Link from 'next/link';
import Header from '@/components/Header';

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex flex-col items-start gap-4 mb-12">
          <Link 
            href="/"
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
            Back to dashboard
          </Link>
          <h1 className="text-4xl font-bold">Email Templates</h1>
          <p className="text-xl text-zinc-400">
            Ready-to-use email templates for your campaigns, transactional emails, and newsletters.
          </p>
        </div>

        {/* Template Categories */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <Link 
            href="/templates#transactional" 
            className="flex items-center justify-center py-2 px-4 rounded-md bg-zinc-900 hover:bg-zinc-800 transition-colors"
          >
            Transactional
          </Link>
          <Link 
            href="/templates#marketing" 
            className="flex items-center justify-center py-2 px-4 rounded-md bg-zinc-900 hover:bg-zinc-800 transition-colors"
          >
            Marketing
          </Link>
          <Link 
            href="/templates#notifications" 
            className="flex items-center justify-center py-2 px-4 rounded-md bg-zinc-900 hover:bg-zinc-800 transition-colors"
          >
            Notifications
          </Link>
        </div>

        {/* Transactional Section */}
        <section id="transactional" className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-zinc-800">Transactional Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Welcome Email Card */}
            <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="aspect-video bg-zinc-800 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-zinc-700 rounded-lg flex items-center justify-center text-zinc-400">
                    Welcome Email Preview
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-1">Welcome Email</h3>
                <p className="text-sm text-zinc-400 mb-4">
                  Make a great first impression with a customizable welcome email.
                </p>
                <div className="flex justify-end">
                  <Link 
                    href="/templates/welcome-email" 
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    View template →
                  </Link>
                </div>
              </div>
            </div>

            {/* Password Reset Card */}
            <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="aspect-video bg-zinc-800 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-zinc-700 rounded-lg flex items-center justify-center text-zinc-400">
                    Password Reset Preview
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-1">Password Reset</h3>
                <p className="text-sm text-zinc-400 mb-4">
                  Secure password reset email with verification code or link.
                </p>
                <div className="flex justify-end">
                  <Link 
                    href="/templates/password-reset" 
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    View template →
                  </Link>
                </div>
              </div>
            </div>

            {/* Order Confirmation Card */}
            <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="aspect-video bg-zinc-800 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-zinc-700 rounded-lg flex items-center justify-center text-zinc-400">
                    Order Confirmation Preview
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-1">Order Confirmation</h3>
                <p className="text-sm text-zinc-400 mb-4">
                  Professional order confirmation with itemized receipt and tracking info.
                </p>
                <div className="flex justify-end">
                  <Link 
                    href="/templates/order-confirmation" 
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    View template →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marketing Section */}
        <section id="marketing" className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-zinc-800">Marketing Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Newsletter Card */}
            <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="aspect-video bg-zinc-800 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-zinc-700 rounded-lg flex items-center justify-center text-zinc-400">
                    Newsletter Preview
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-1">Newsletter</h3>
                <p className="text-sm text-zinc-400 mb-4">
                  Clean, responsive newsletter template with customizable sections.
                </p>
                <div className="flex justify-end">
                  <Link 
                    href="/templates/newsletter" 
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    View template →
                  </Link>
                </div>
              </div>
            </div>

            {/* Product Launch Card */}
            <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="aspect-video bg-zinc-800 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-zinc-700 rounded-lg flex items-center justify-center text-zinc-400">
                    Product Launch Preview
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-1">Product Launch</h3>
                <p className="text-sm text-zinc-400 mb-4">
                  Eye-catching template to announce new products or features.
                </p>
                <div className="flex justify-end">
                  <Link 
                    href="/templates/product-launch" 
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    View template →
                  </Link>
                </div>
              </div>
            </div>

            {/* Special Offer Card */}
            <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="aspect-video bg-zinc-800 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-zinc-700 rounded-lg flex items-center justify-center text-zinc-400">
                    Special Offer Preview
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-1">Special Offer</h3>
                <p className="text-sm text-zinc-400 mb-4">
                  Promotion template with discount codes and clear call-to-action.
                </p>
                <div className="flex justify-end">
                  <Link 
                    href="/templates/special-offer" 
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    View template →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notifications Section */}
        <section id="notifications" className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-zinc-800">Notification Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Comment Notification Card */}
            <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="aspect-video bg-zinc-800 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-zinc-700 rounded-lg flex items-center justify-center text-zinc-400">
                    Comment Notification Preview
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-1">Comment Notification</h3>
                <p className="text-sm text-zinc-400 mb-4">
                  Clean notification for new comments or replies.
                </p>
                <div className="flex justify-end">
                  <Link 
                    href="/templates/comment-notification" 
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    View template →
                  </Link>
                </div>
              </div>
            </div>

            {/* Account Activity Card */}
            <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="aspect-video bg-zinc-800 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-zinc-700 rounded-lg flex items-center justify-center text-zinc-400">
                    Account Activity Preview
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-1">Account Activity</h3>
                <p className="text-sm text-zinc-400 mb-4">
                  Security-focused notification for account logins and changes.
                </p>
                <div className="flex justify-end">
                  <Link 
                    href="/templates/account-activity" 
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    View template →
                  </Link>
                </div>
              </div>
            </div>

            {/* Event Reminder Card */}
            <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="aspect-video bg-zinc-800 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-zinc-700 rounded-lg flex items-center justify-center text-zinc-400">
                    Event Reminder Preview
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-1">Event Reminder</h3>
                <p className="text-sm text-zinc-400 mb-4">
                  Calendar-ready event reminder with all necessary details.
                </p>
                <div className="flex justify-end">
                  <Link 
                    href="/templates/event-reminder" 
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    View template →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLI Integration Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-zinc-800">Implement in Your Projects</h2>
          <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
            <h3 className="text-xl font-medium mb-4">CLI Integration</h3>
            <p className="text-zinc-400 mb-6">
              All templates are available through our CLI for easy integration into your own projects.
            </p>
            
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-2">Installation</h4>
              <div className="bg-zinc-950 p-4 rounded-md overflow-auto">
                <code className="text-blue-400">npm install -g mruudmail-cli</code>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-2">Usage</h4>
              <div className="bg-zinc-950 p-4 rounded-md overflow-auto">
                <code className="text-blue-400">mruudmail template get welcome-email --output ./src/emails/</code>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-2">Learn More</h4>
              <Link 
                href="/docs/cli" 
                className="text-blue-400 hover:text-blue-300 inline-flex items-center"
              >
                CLI Documentation 
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