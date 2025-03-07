import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4';
import { z } from 'https://deno.land/x/zod@v3.22.4/mod.ts';

// Initialize environment variables
const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
const FROM_EMAIL = Deno.env.get('FROM_EMAIL');
const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

// Validate required environment variables
if (!RESEND_API_KEY || !FROM_EMAIL || !SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error('Missing required environment variables');
}

// Initialize Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

// Validation schema for incoming requests
const marketingEmailSchema = z.object({
  subject: z.string().min(1, 'Subject is required'),
  preview_text: z.string().optional(),
  title: z.string().min(1, 'Title is required'),
  content: z.string().min(1, 'Content is required'),
  cta_text: z.string().optional(),
  cta_url: z.string().url('Invalid URL').optional(),
});

// CORS headers for cross-origin requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Max-Age': '86400', // 24 hours
};

// Function to send email using Resend API
async function sendEmail(to: string, subject: string, html: string) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to,
      subject,
      html,
    }),
  });

  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(`Failed to send email: ${JSON.stringify(data)}`);
  }
  
  return data;
}

// Function to generate marketing email HTML
function generateMarketingEmail(
  firstName: string,
  subject: string,
  previewText: string,
  title: string,
  content: string,
  ctaText?: string,
  ctaUrl?: string
) {
  return `
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
}

// Main function to handle requests
serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders
    });
  }

  try {
    // Only allow POST requests
    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Verify the request is coming from an authorized source
    // This checks for the Supabase service role key
    const authHeader = req.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized. Missing or invalid authorization header.' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const token = authHeader.split(' ')[1];
    if (token !== SUPABASE_SERVICE_ROLE_KEY) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized. Invalid service role key.' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Parse and validate request body
    const body = await req.json();
    console.log('Request body:', body);

    const result = marketingEmailSchema.safeParse(body);
    if (!result.success) {
      console.error('Validation error:', result.error);
      return new Response(
        JSON.stringify({ 
          error: 'Invalid request data', 
          details: result.error.format() 
        }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Get all users with global consent
    const { data: consentedUsers, error: queryError } = await supabase
      .from('users')
      .select('id, email, first_name')
      .eq('global_consent', true);

    if (queryError) {
      console.error('Database query error:', queryError);
      throw new Error('Failed to retrieve consented users');
    }

    if (!consentedUsers || consentedUsers.length === 0) {
      return new Response(
        JSON.stringify({ message: 'No users with marketing consent found' }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Found ${consentedUsers.length} users with marketing consent`);

    // Extract email data
    const { 
      subject, 
      preview_text: previewText = '', 
      title, 
      content, 
      cta_text: ctaText, 
      cta_url: ctaUrl 
    } = result.data;

    // Send emails to all consented users
    const emailPromises = consentedUsers.map(async (user) => {
      try {
        const html = generateMarketingEmail(
          user.first_name,
          subject,
          previewText,
          title,
          content.replace(/{{name}}/g, user.first_name),
          ctaText,
          ctaUrl
        ).replace(/{{email}}/g, encodeURIComponent(user.email));

        const emailResult = await sendEmail(user.email, subject, html);
        
        // Log successful email
        await supabase
          .from('webhooks')
          .insert({
            event_type: 'marketing_email_sent',
            payload: {
              email: user.email,
              subject,
              email_id: emailResult?.id
            },
            status: 'success',
            created_at: new Date().toISOString()
          });
          
        return { email: user.email, status: 'sent', id: emailResult?.id };
      } catch (error) {
        console.error(`Failed to send email to ${user.email}:`, error);
        
        // Log failed email
        await supabase
          .from('webhooks')
          .insert({
            event_type: 'marketing_email_failed',
            payload: {
              email: user.email,
              subject,
              error: error.message
            },
            status: 'error',
            created_at: new Date().toISOString()
          });
          
        return { email: user.email, status: 'failed', error: error.message };
      }
    });

    // Wait for all emails to be sent
    const results = await Promise.all(emailPromises);
    
    // Count successes and failures
    const sent = results.filter(r => r.status === 'sent').length;
    const failed = results.filter(r => r.status === 'failed').length;

    return new Response(
      JSON.stringify({ 
        message: `Marketing email sent to ${sent} users (${failed} failed)`,
        total: consentedUsers.length,
        sent,
        failed,
        results
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error processing request:', error);
    
    return new Response(
      JSON.stringify({ error: error.message || 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
}); 