'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';

const emailSchema = z.object({
  subject: z.string().min(1, 'Subject is required'),
  previewText: z.string().optional(),
  title: z.string().min(1, 'Title is required'),
  content: z.string().min(1, 'Content is required'),
  ctaText: z.string().optional(),
  ctaUrl: z.string().url('Invalid URL').optional(),
});

type EmailFormValues = z.infer<typeof emailSchema>;

export default function MarketingPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ sent: number; failed: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [previewHtml, setPreviewHtml] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<EmailFormValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      subject: 'New Update from Mruud.com',
      previewText: 'Check out our latest update',
      title: 'Exciting News!',
      content: `
<p>Hi {{name}},</p>

<p>We're excited to share some updates with you about our latest projects!</p>

<p>Here's what's new:</p>
<ul>
  <li>New feature launches</li>
  <li>Improvements to existing tools</li>
  <li>Upcoming events and webinars</li>
</ul>

<p>We'd love to hear your feedback on these changes.</p>
      `,
      ctaText: 'Learn More',
      ctaUrl: 'https://mruud.com/updates',
    },
  });

  // Watch form values for live preview
  const formValues = watch();

  // Generate preview automatically whenever form values change
  useEffect(() => {
    generatePreview();
  }, [formValues]);

  const generatePreview = () => {
    const { subject, previewText, title, content, ctaText, ctaUrl } = formValues;
    
    const html = `
    <!-- Preview text -->
    <div style="display: none; max-height: 0px; overflow: hidden;">
      ${previewText || subject}
    </div>

    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #fafafa; padding: 40px 0;">
      <div style="max-width: 600px; margin: 0 auto;">
        <!-- Logo Section -->
        <div style="text-align: center; margin-bottom: 20px;">
          <div style="font-size: 24px; font-weight: bold; color: #000000; margin: 0;">✨ Mruud.com</div>
        </div>

        <!-- Main Content -->
        <div style="background-color: #ffffff; padding: 40px; border-radius: 12px; border: 1px solid #eaeaea;">
          <h1 style="font-size: 24px; color: #333; margin: 0 0 20px;">${title}</h1>
          
          <div style="font-size: 16px; line-height: 24px; color: #4a5568; margin: 0 0 20px;">
            ${content}
          </div>

          ${ctaText && ctaUrl ? `
          <!-- CTA Button -->
          <div style="text-align: center; margin: 32px 0;">
            <a href="${ctaUrl}" 
               style="display: inline-block; background-color: black; color: #ffffff; padding: 12px 32px; border-radius: 6px; text-decoration: none; font-weight: 500; text-align: center;">
              ${ctaText}
            </a>
          </div>
          ` : ''}

          <!-- Signature -->
          <div style="margin-top: 32px;">
            <p style="font-size: 15px; line-height: 1.6; color: #4a5568;">
              Cheers,<br>
              <strong>Marcus Ruud</strong><br>
              Maker of <a href="https://mruud.com" style="color: #0366d6; text-decoration: none;">Mruud.com</a>
            </p>
          </div>
        </div>

        <!-- Footer -->
        <div style="margin-top: 32px; padding: 20px; background-color: #f8f9fa; border-radius: 8px; font-size: 12px; color: #666; text-align: center;">
          <p style="margin-bottom: 8px;"><strong>Why am I receiving this?</strong></p>
          <p style="margin: 0 0 8px;">You're receiving this email because you opted in to marketing communications from Mruud.com.</p>
          <p style="margin: 8px 0 0;">
            <a href="https://mruud.com/unsubscribe?email={{email}}" style="color: #0366d6; text-decoration: none;">Unsubscribe</a> • 
            <a href="https://mruud.com/privacy" style="color: #0366d6; text-decoration: none;">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
    `;
    
    setPreviewHtml(html);
  };

  const onSubmit = async (data: EmailFormValues) => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      // Get the Supabase URL from environment or use the default
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co';
      
      // Get the service role key from sessionStorage (not localStorage)
      const serviceRoleKey = sessionStorage.getItem('supabaseServiceRoleKey');
      
      if (!serviceRoleKey) {
        throw new Error('Service role key not found. Please set it in the settings section below.');
      }

      console.log('Sending request to:', `${supabaseUrl}/functions/v1/marketing-email`);
      console.log('Request data:', {
        subject: data.subject,
        preview_text: data.previewText,
        title: data.title,
        content: data.content,
        cta_text: data.ctaText,
        cta_url: data.ctaUrl,
      });

      const response = await fetch(`${supabaseUrl}/functions/v1/marketing-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${serviceRoleKey}`
        },
        body: JSON.stringify({
          subject: data.subject,
          preview_text: data.previewText,
          title: data.title,
          content: data.content,
          cta_text: data.ctaText,
          cta_url: data.ctaUrl,
        }),
      });

      console.log('Response status:', response.status);
      const result = await response.json();
      console.log('Response data:', result);
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to send marketing email');
      }
      
      setResult(result);
    } catch (err) {
      console.error('Error sending marketing email:', err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Marketing Email Composer</h1>
          <Link href="/" className="text-blue-400 hover:text-blue-300">Back to Home</Link>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Form Section */}
          <div className="w-full md:w-1/2">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <div>
                <label className="block mb-2 font-medium text-zinc-300">Subject</label>
                <input
                  {...register('subject')}
                  className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded text-white"
                  placeholder="Email subject line"
                />
                {errors.subject && (
                  <p className="text-red-400 mt-1">{errors.subject.message}</p>
                )}
              </div>
              
              <div>
                <label className="block mb-2 font-medium text-zinc-300">Preview Text</label>
                <input
                  {...register('previewText')}
                  className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded text-white"
                  placeholder="Optional preview text shown in email clients"
                />
              </div>
              
              <div>
                <label className="block mb-2 font-medium text-zinc-300">Email Title</label>
                <input
                  {...register('title')}
                  className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded text-white"
                  placeholder="Main heading in the email"
                />
                {errors.title && (
                  <p className="text-red-400 mt-1">{errors.title.message}</p>
                )}
              </div>
              
              <div>
                <label className="block mb-2 font-medium text-zinc-300">Email Content (HTML)</label>
                <textarea
                  {...register('content')}
                  className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded text-white font-mono text-sm min-h-[200px]"
                  placeholder="HTML content of your email. Use {{name}} to insert the recipient's name."
                />
                {errors.content && (
                  <p className="text-red-400 mt-1">{errors.content.message}</p>
                )}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 font-medium text-zinc-300">CTA Button Text</label>
                  <input
                    {...register('ctaText')}
                    className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded text-white"
                    placeholder="Optional call-to-action button text"
                  />
                </div>
                
                <div>
                  <label className="block mb-2 font-medium text-zinc-300">CTA URL</label>
                  <input
                    {...register('ctaUrl')}
                    className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded text-white"
                    placeholder="https://example.com/action"
                  />
                  {errors.ctaUrl && (
                    <p className="text-red-400 mt-1">{errors.ctaUrl.message}</p>
                  )}
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending...' : 'Send Marketing Email'}
              </button>
            </form>
            
            {/* Settings Section */}
            <div className="mt-6 bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h2 className="text-xl font-bold mb-4 text-zinc-200">Settings</h2>
              <div>
                <label className="block mb-2 font-medium text-zinc-300">Supabase Service Role Key</label>
                <div className="flex gap-2">
                  <input
                    type="password"
                    id="serviceRoleKey"
                    className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded text-white"
                    placeholder="Enter your service role key"
                    defaultValue={typeof window !== 'undefined' ? sessionStorage.getItem('supabaseServiceRoleKey') || '' : ''}
                  />
                  <button
                    onClick={() => {
                      const key = (document.getElementById('serviceRoleKey') as HTMLInputElement).value;
                      sessionStorage.setItem('supabaseServiceRoleKey', key);
                      alert('Service role key saved! Will be cleared when you close this tab.');
                    }}
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => {
                      sessionStorage.removeItem('supabaseServiceRoleKey');
                      (document.getElementById('serviceRoleKey') as HTMLInputElement).value = '';
                      alert('Service role key cleared!');
                    }}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Clear
                  </button>
                </div>
                <p className="text-sm text-zinc-400 mt-1">
                  This key is stored in your browser&apos;s sessionStorage and will be automatically cleared when you close this tab.
                </p>
                <p className="text-sm text-red-400 mt-2">
                  <strong>Security Note:</strong> Always clear your key when finished or close this tab completely.
                </p>
              </div>
            </div>
            
            {/* Results Section */}
            {error && (
              <div className="mt-6 p-4 bg-red-900/30 border border-red-800 rounded">
                <h3 className="font-bold text-red-400">Error</h3>
                <p className="text-red-300">{error}</p>
              </div>
            )}
            
            {result && (
              <div className="mt-6 p-4 bg-green-900/30 border border-green-800 rounded">
                <h3 className="font-bold text-green-400">Success!</h3>
                <p className="mb-2 text-green-300">Email sent to {result.sent} users ({result.failed} failed)</p>
                <details>
                  <summary className="cursor-pointer text-sm text-zinc-400">View details</summary>
                  <pre className="mt-2 p-2 bg-zinc-800 rounded text-xs overflow-auto text-zinc-300">
                    {JSON.stringify(result, null, 2)}
                  </pre>
                </details>
              </div>
            )}
          </div>
          
          {/* Preview Section */}
          <div className="w-full md:w-1/2">
            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h2 className="text-xl font-bold mb-4 text-zinc-200">Email Preview</h2>
              <div className="border border-zinc-700 rounded overflow-hidden">
                <div className="bg-zinc-800 p-2 flex items-center space-x-2 border-b border-zinc-700">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="text-xs text-zinc-400 ml-2">Gmail Preview</div>
                </div>
                {previewHtml ? (
                  <iframe
                    srcDoc={previewHtml}
                    className="w-full h-[600px] border-0 bg-white"
                    title="Email Preview"
                  />
                ) : (
                  <div className="flex items-center justify-center h-[400px] bg-zinc-800">
                    <p className="text-zinc-500">Loading preview...</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 