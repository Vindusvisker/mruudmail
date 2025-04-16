import Link from 'next/link';
import Header from '@/components/Header';

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex flex-col items-start gap-4 mb-12">
          <h1 className="text-5xl font-bold">Documentation</h1>
          <p className="text-xl text-zinc-400 max-w-3xl">
            Comprehensive guides and references for integrating and using MruudMail in your projects.
          </p>
        </div>

        {/* Documentation Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Link
            href="/docs/getting-started"
            className="group flex flex-col p-6 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors"
          >
            <div className="mb-4 p-2 w-fit rounded-full bg-blue-500/10 text-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">Getting Started</h2>
            <p className="text-sm text-zinc-400">
              Learn the basics of MruudMail and get up and running quickly with our step-by-step guides.
            </p>
          </Link>

          <Link
            href="/docs/cli"
            className="group flex flex-col p-6 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors"
          >
            <div className="mb-4 p-2 w-fit rounded-full bg-purple-500/10 text-purple-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            <h2 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">CLI Reference</h2>
            <p className="text-sm text-zinc-400">
              Detailed documentation for the MruudMail CLI, including commands, options, and examples.
            </p>
          </Link>

          <Link
            href="/docs/api"
            className="group flex flex-col p-6 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors"
          >
            <div className="mb-4 p-2 w-fit rounded-full bg-green-500/10 text-green-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2 group-hover:text-green-400 transition-colors">API Reference</h2>
            <p className="text-sm text-zinc-400">
              Complete API documentation for developers who want to integrate MruudMail via REST API.
            </p>
          </Link>
        </div>

        {/* Featured Docs */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-zinc-800">Featured Documentation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <h3 className="text-xl font-medium mb-4">CLI Tool</h3>
              <p className="text-zinc-400 mb-6">
                Our CLI tool allows you to access and integrate email templates directly from your terminal.
              </p>
              <div className="space-y-3">
                <Link 
                  href="/cli-project" 
                  className="flex items-center text-blue-400 hover:text-blue-300"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 mr-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                  CLI Project Overview
                </Link>
                <Link 
                  href="/cli" 
                  className="flex items-center text-blue-400 hover:text-blue-300"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 mr-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                  CLI Documentation
                </Link>
                <Link 
                  href="/docs/cli/installation" 
                  className="flex items-center text-blue-400 hover:text-blue-300"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 mr-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                  Installation Guide
                </Link>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <h3 className="text-xl font-medium mb-4">Email Templates</h3>
              <p className="text-zinc-400 mb-6">
                Explore our collection of customizable, responsive email templates.
              </p>
              <div className="space-y-3">
                <Link 
                  href="/templates" 
                  className="flex items-center text-blue-400 hover:text-blue-300"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 mr-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                  Template Gallery
                </Link>
                <Link 
                  href="/docs/templates/customization" 
                  className="flex items-center text-blue-400 hover:text-blue-300"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 mr-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                  Customization Guide
                </Link>
                <Link 
                  href="/docs/templates/integration" 
                  className="flex items-center text-blue-400 hover:text-blue-300"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 mr-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                  Integration Guide
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Guides Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-zinc-800">Popular Guides</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              href="/docs/guides/getting-started" 
              className="group bg-zinc-900 rounded-lg p-6 border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <h3 className="text-xl font-medium mb-2 group-hover:text-blue-400 transition-colors">Getting Started</h3>
              <p className="text-sm text-zinc-400">
                Set up MruudMail in your project quickly with our beginner-friendly guide.
              </p>
            </Link>

            <Link 
              href="/docs/guides/email-integration" 
              className="group bg-zinc-900 rounded-lg p-6 border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <h3 className="text-xl font-medium mb-2 group-hover:text-blue-400 transition-colors">Email Integration</h3>
              <p className="text-sm text-zinc-400">
                Learn how to integrate our templates with popular email sending services.
              </p>
            </Link>

            <Link 
              href="/docs/guides/template-customization" 
              className="group bg-zinc-900 rounded-lg p-6 border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <h3 className="text-xl font-medium mb-2 group-hover:text-blue-400 transition-colors">Template Customization</h3>
              <p className="text-sm text-zinc-400">
                Customize our templates to match your brand identity and design needs.
              </p>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-950 rounded-lg p-8 border border-zinc-800">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Implement Better Emails?</h2>
            <p className="text-xl text-zinc-300 mb-8">
              Start sending beautiful, responsive emails today with MruudMail.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/docs/getting-started" 
                className="bg-white text-black font-medium px-5 py-2 rounded-md hover:bg-zinc-200 transition-colors"
              >
                Get Started
              </Link>
              <Link 
                href="/templates" 
                className="bg-zinc-800 text-white font-medium px-5 py-2 rounded-md hover:bg-zinc-700 transition-colors"
              >
                Browse Templates
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 