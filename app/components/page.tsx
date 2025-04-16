import Link from 'next/link';
import Header from '@/components/Header';

export default function ComponentsPage() {
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
          <h1 className="text-4xl font-bold">Build your component library</h1>
          <p className="text-xl text-zinc-400">
            A set of beautifully-designed, accessible components for your marketing and product needs.
          </p>
        </div>

        {/* Component Categories */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <Link 
            href="/components#forms" 
            className="flex items-center justify-center py-2 px-4 rounded-md bg-zinc-900 hover:bg-zinc-800 transition-colors"
          >
            Forms
          </Link>
          <Link 
            href="/components#marketing" 
            className="flex items-center justify-center py-2 px-4 rounded-md bg-zinc-900 hover:bg-zinc-800 transition-colors"
          >
            Marketing
          </Link>
          <Link 
            href="/components#feedback" 
            className="flex items-center justify-center py-2 px-4 rounded-md bg-zinc-900 hover:bg-zinc-800 transition-colors"
          >
            Feedback
          </Link>
        </div>

        {/* Forms Section */}
        <section id="forms" className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-zinc-800">Forms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Waitlist Form Card */}
            <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="aspect-video bg-zinc-800 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-zinc-700 rounded-lg flex items-center justify-center text-zinc-400">
                    WaitlistForm Preview
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-1">Waitlist Form</h3>
                <p className="text-sm text-zinc-400 mb-4">
                  A customizable form for collecting emails and information for your waitlist.
                </p>
                <div className="flex justify-end">
                  <Link 
                    href="/components/waitlist-form" 
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    View component →
                  </Link>
                </div>
              </div>
            </div>

            {/* Newsletter Form Card */}
            <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="aspect-video bg-zinc-800 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-zinc-700 rounded-lg flex items-center justify-center text-zinc-400">
                    Newsletter Form Preview
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-1">Newsletter Form</h3>
                <p className="text-sm text-zinc-400 mb-4">
                  Simple email capture form optimized for newsletter signups.
                </p>
                <div className="flex justify-end">
                  <Link 
                    href="/components/newsletter-form" 
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    View component →
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Form Card */}
            <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="aspect-video bg-zinc-800 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-zinc-700 rounded-lg flex items-center justify-center text-zinc-400">
                    Contact Form Preview
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-1">Contact Form</h3>
                <p className="text-sm text-zinc-400 mb-4">
                  Full-featured contact form with validation and custom fields.
                </p>
                <div className="flex justify-end">
                  <Link 
                    href="/components/contact-form" 
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    View component →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marketing Section */}
        <section id="marketing" className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-zinc-800">Marketing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Hero Section Card */}
            <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="aspect-video bg-zinc-800 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-zinc-700 rounded-lg flex items-center justify-center text-zinc-400">
                    Hero Section Preview
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-1">Hero Section</h3>
                <p className="text-sm text-zinc-400 mb-4">
                  Attention-grabbing hero sections for your landing pages.
                </p>
                <div className="flex justify-end">
                  <Link 
                    href="/components/hero-section" 
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    View component →
                  </Link>
                </div>
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="aspect-video bg-zinc-800 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-zinc-700 rounded-lg flex items-center justify-center text-zinc-400">
                    Testimonial Preview
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-1">Testimonial</h3>
                <p className="text-sm text-zinc-400 mb-4">
                  Customer testimonials to build trust and showcase success.
                </p>
                <div className="flex justify-end">
                  <Link 
                    href="/components/testimonial" 
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    View component →
                  </Link>
                </div>
              </div>
            </div>

            {/* Pricing Table Card */}
            <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="aspect-video bg-zinc-800 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-zinc-700 rounded-lg flex items-center justify-center text-zinc-400">
                    Pricing Table Preview
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-1">Pricing Table</h3>
                <p className="text-sm text-zinc-400 mb-4">
                  Clean, customizable pricing tables for your products and services.
                </p>
                <div className="flex justify-end">
                  <Link 
                    href="/components/pricing-table" 
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    View component →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feedback Section */}
        <section id="feedback" className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-zinc-800">Feedback</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Rating Widget Card */}
            <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="aspect-video bg-zinc-800 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-zinc-700 rounded-lg flex items-center justify-center text-zinc-400">
                    Rating Widget Preview
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-1">Rating Widget</h3>
                <p className="text-sm text-zinc-400 mb-4">
                  User-friendly rating widget with stars and feedback options.
                </p>
                <div className="flex justify-end">
                  <Link 
                    href="/components/rating-widget" 
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    View component →
                  </Link>
                </div>
              </div>
            </div>

            {/* Survey Card */}
            <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="aspect-video bg-zinc-800 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-zinc-700 rounded-lg flex items-center justify-center text-zinc-400">
                    Survey Preview
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-1">Survey</h3>
                <p className="text-sm text-zinc-400 mb-4">
                  Multi-step survey component with progress tracking.
                </p>
                <div className="flex justify-end">
                  <Link 
                    href="/components/survey" 
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    View component →
                  </Link>
                </div>
              </div>
            </div>

            {/* Feedback Form Card */}
            <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="aspect-video bg-zinc-800 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-zinc-700 rounded-lg flex items-center justify-center text-zinc-400">
                    Feedback Form Preview
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-1">Feedback Form</h3>
                <p className="text-sm text-zinc-400 mb-4">
                  Comprehensive feedback collection form with multiple fields.
                </p>
                <div className="flex justify-end">
                  <Link 
                    href="/components/feedback-form" 
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    View component →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 