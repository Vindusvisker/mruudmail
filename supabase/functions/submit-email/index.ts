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

// Validate FROM_EMAIL format
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(FROM_EMAIL)) {
  console.error(`Invalid FROM_EMAIL format: ${FROM_EMAIL}`);
  throw new Error('Invalid FROM_EMAIL format');
}

// Log environment variables presence (without exposing values)
console.log('Environment variables present:', {
  hasResendKey: !!RESEND_API_KEY,
  hasFromEmail: !!FROM_EMAIL,
  fromEmailFormat: emailRegex.test(FROM_EMAIL),
  hasSupabaseUrl: !!SUPABASE_URL,
  hasServiceKey: !!SUPABASE_SERVICE_ROLE_KEY
});

// Initialize Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

// Validation schema for incoming requests
const emailSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  email: z.string().email('Please enter a valid email address'),
  projectId: z.string().min(1, 'Project ID is required'),
  category: z.enum(['newsletter', 'github', 'waitlist'], {
    errorMap: () => ({ message: 'Invalid category' }),
  }),
  gdprConsent: z.boolean().optional().default(false), // GDPR consent status
  honeypot: z.string().optional(), // Honeypot field for bot detection
  timestamp: z.number().optional(), // Timestamp for bot detection
});

type EmailRequest = z.infer<typeof emailSchema>;

// CORS headers for cross-origin requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Max-Age': '86400', // 24 hours
};

// Function to send email using Resend API
async function sendEmail(to: string, subject: string, html: string) {
  console.log(`Attempting to send email to: ${to} with subject: ${subject}`);
  
  try {
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

    const responseData = await response.json();
    
    if (!response.ok) {
      console.error('Resend API error:', responseData);
      throw new Error(responseData.message || 'Failed to send email');
    }
    
    console.log('Email sent successfully:', responseData);
    return responseData;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

// Define project configuration type
interface ProjectConfig {
  id: string;
  project_id: string;
  name: string;
  description: string | null;
  category: 'newsletter' | 'github' | 'waitlist';
  config: {
    github_repo: string;
    access_type: 'public' | 'private';
    welcome_message?: string;
    repo_url: string;
    demo_url?: string;
    tech_stack?: string[];
  };
  created_at: string;
  updated_at: string;
}

// Function to get project configuration
async function getProjectConfig(projectId: string): Promise<ProjectConfig> {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('project_id', projectId)
    .single();

  if (error) {
    console.error('Error fetching project config:', error);
    throw new Error(`Failed to get project configuration: ${error.message}`);
  }

  return data as ProjectConfig;
}

// Function to generate email content based on project and category
async function generateEmailContent(
  firstName: string,
  projectConfig: ProjectConfig,
  category: 'newsletter' | 'github' | 'waitlist'
) {
  const { name, description, config } = projectConfig;

  switch (category) {
    case 'github':
      return {
        subject: `GitHub Access - ${name} ✅`,
        html: `
          <!-- Preview text -->
          <div style="display: none; max-height: 0px; overflow: hidden;">
            Access details for ${name} GitHub repository...
          </div>

          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #fafafa; padding: 40px 0;">
            <div style="max-width: 600px; margin: 0 auto;">
              <!-- Logo Section -->
              <div style="text-align: center; margin-bottom: 20px;">
                <div style="font-size: 24px; font-weight: bold; color: #000000; margin: 0;">✨ ${name}</div>
              </div>

              <!-- Main Content -->
              <div style="background-color: #ffffff; padding: 40px; border-radius: 12px; border: 1px solid #eaeaea;">
                <h1 style="font-size: 24px; color: #333; margin: 0 0 20px;">${firstName}, you're in! 🚀</h1>
                <p style="font-size: 16px; line-height: 24px; color: #4a5568; margin: 0 0 20px;">
                  Thanks for checking out <strong>${name}</strong>. Below are your access details:
                </p>

                <!-- Repository Details Box -->
                <div style="background-color: #fafafa; padding: 20px; border-radius: 8px; border: 1px solid #eaeaea; margin-bottom: 24px;">
                  <p style="font-size: 15px; color: #2d3748; margin: 0 0 16px;">
                    <strong>Repository Details:</strong>
                  </p>
                  <ul style="list-style: none; padding-left: 0; margin: 0;">
                    <li style="font-size: 15px; margin: 12px 0; color: #2d3748;">📂 <strong>Repository:</strong> <a href="${config.repo_url}" style="color: #0366d6; text-decoration: none;">${config.github_repo}</a></li>
                    ${config.demo_url ? `<li style="font-size: 15px; margin: 12px 0; color: #2d3748;">🚀 <strong>Demo:</strong> <a href="${config.demo_url}" style="color: #0366d6; text-decoration: none;">View Live Demo</a></li>` : ''}
                    ${config.tech_stack ? `<li style="font-size: 15px; margin: 12px 0; color: #2d3748;">💻 <strong>Tech Stack:</strong> ${config.tech_stack.join(', ')}</li>` : ''}
                  </ul>
                </div>

              ${config.welcome_message ? `
              <!-- Welcome Message -->
              <div style="background-color: #e8f5e9; padding: 20px; border-radius: 8px; margin-bottom: 24px;">
                <p style="font-size: 15px; color: #2e7d32; margin: 0;">
                  ${config.welcome_message}
                </p>
              </div>
              ` : ''}

                <!-- What's Next Section -->
                <div style="margin-top: 32px;">
                  <h2 style="font-size: 18px; color: #333; margin: 0 0 16px;">🔗 What's next?</h2>
                  <ul style="padding-left: 20px; margin: 0 0 24px;">
                    <li style="font-size: 15px; margin: 8px 0; color: #2d3748;"><strong>Follow the repo</strong> to get updates on new features.</li>
                    <li style="font-size: 15px; margin: 8px 0; color: #2d3748;"><strong>Hit reply</strong> and tell me what you're working on—I'll send you cool insider stuff!</li>
                  </ul>
                </div>

                <!-- Quick Help Section -->
                <div style="margin-top: 24px; background-color: #f7fafc; padding: 20px; border-radius: 8px;">
                  <p style="font-size: 14px; color: #4a5568; margin: 0;">
                    <strong>Need help?</strong> Let me know if you have any questions or need help getting started! 🚀
                  </p>
                </div>

                <!-- Signature -->
                <div style="margin-top: 32px;">
                  <p style="font-size: 15px; line-height: 1.6; color: #4a5568;">
                    Cheers,<br>
                    <strong>Marcus Ruud</strong><br>
                    Maker of <a href="https://mruud.com" style="color: #0366d6; text-decoration: none;">Mruud.com</a>
                  </p>
                </div>
              </div>

              <!-- GDPR Footer -->
              <div style="margin-top: 32px; padding: 20px; background-color: #f8f9fa; border-radius: 8px; font-size: 12px; color: #666;">
                <p style="margin-bottom: 8px;"><strong>Your Privacy Rights (GDPR)</strong></p>
                <p style="margin: 0 0 8px;">You received this email because you requested access to the ${name} GitHub repository. Here's what you should know:</p>
                <ul style="margin: 8px 0; padding-left: 20px;">
                  <li style="margin-bottom: 4px;">Your data (name and email) is stored securely and used only for project-related communications.</li>
                  <li style="margin-bottom: 4px;">We'll only contact you about this specific project unless you explicitly opt in for more.</li>
                  <li style="margin-bottom: 4px;">You can request data deletion or opt out at any time by replying with "UNSUBSCRIBE".</li>
                </ul>
                <p style="margin: 8px 0 0;">For more details, see our <a href="https://mruud.com/privacy" style="color: #0366d6; text-decoration: none;">Privacy Policy</a>.</p>
              </div>
            </div>
          </div>
        `
      };

    case 'newsletter':
      return {
        subject: `Welcome to ${name}'s Newsletter`,
        html: `
          <!-- Preview text -->
          <div style="display: none; max-height: 0px; overflow: hidden;">
            Thanks for subscribing to ${name}'s newsletter...
          </div>

          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #fafafa; padding: 40px 0;">
            <div style="max-width: 600px; margin: 0 auto;">
              <!-- Logo Section -->
              <div style="text-align: center; margin-bottom: 20px;">
                <div style="font-size: 24px; font-weight: bold; color: #000000; margin: 0;">✨ ${name}</div>
              </div>

              <!-- Main Content -->
              <div style="background-color: #ffffff; padding: 40px; border-radius: 12px; border: 1px solid #eaeaea;">
                <h1 style="font-size: 24px; color: #333; margin: 0 0 20px;">Thanks for subscribing, ${firstName}!</h1>
                <p style="font-size: 16px; line-height: 24px; color: #4a5568; margin: 0 0 20px;">
                  You've successfully subscribed to updates from ${name}.
                </p>
                
                ${description ? `
                <p style="font-size: 16px; line-height: 24px; color: #4a5568; margin: 0 0 20px;">
                  ${description}
                </p>
                ` : ''}

                ${config.welcome_message ? `
                <!-- Welcome Message -->
                <div style="background-color: #e8f5e9; padding: 20px; border-radius: 8px; margin-bottom: 24px;">
                  <p style="font-size: 15px; color: #2e7d32; margin: 0;">
                    ${config.welcome_message}
                  </p>
                </div>
                ` : ''}

                <!-- Newsletter Info -->
                <div style="background-color: #f7fafc; padding: 20px; border-radius: 8px; margin: 24px 0;">
                  <p style="font-size: 15px; color: #4a5568; margin: 0;">
                    <strong>What to expect:</strong> You'll start receiving our newsletter soon with updates, insights, and more.
                  </p>
                </div>

                <!-- Signature -->
                <div style="margin-top: 32px;">
                  <p style="font-size: 15px; line-height: 1.6; color: #4a5568;">
                    Cheers,<br>
                    <strong>Marcus Ruud</strong><br>
                    Maker of <a href="https://mruud.com" style="color: #0366d6; text-decoration: none;">Mruud.com</a>
                  </p>
                </div>
              </div>

              <!-- GDPR Footer -->
              <div style="margin-top: 32px; padding: 20px; background-color: #f8f9fa; border-radius: 8px; font-size: 12px; color: #666;">
                <p style="margin-bottom: 8px;"><strong>Your Privacy Rights (GDPR)</strong></p>
                <p style="margin: 0 0 8px;">You received this email because you subscribed to ${name}'s newsletter. Here's what you should know:</p>
                <ul style="margin: 8px 0; padding-left: 20px;">
                  <li style="margin-bottom: 4px;">Your data (name and email) is stored securely and used only for newsletter communications.</li>
                  <li style="margin-bottom: 4px;">We'll only send you relevant updates and news about our projects.</li>
                  <li style="margin-bottom: 4px;">You can unsubscribe or request data deletion at any time by replying with "UNSUBSCRIBE".</li>
                </ul>
                <p style="margin: 8px 0 0;">For more details, see our <a href="https://mruud.com/privacy" style="color: #0366d6; text-decoration: none;">Privacy Policy</a>.</p>
              </div>
            </div>
          </div>
        `
      };

    case 'waitlist':
      return {
        subject: `You're on ${name}'s Waitlist`,
        html: `
          <!-- Preview text -->
          <div style="display: none; max-height: 0px; overflow: hidden;">
            Thanks for joining the waitlist for ${name}...
          </div>

        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #fafafa; padding: 40px 0;">
          <div style="max-width: 600px; margin: 0 auto;">
            <!-- Logo Section -->
            <div style="text-align: center; margin-bottom: 20px;">
              <div style="font-size: 24px; font-weight: bold; color: #000000; margin: 0;">✨ ${name}</div>
            </div>

            <!-- Main Content -->
            <div style="background-color: #ffffff; padding: 40px; border-radius: 12px; border: 1px solid #eaeaea;">
              <h1 style="font-size: 24px; color: #333; margin: 0 0 20px;">You're on the waitlist, ${firstName}!</h1>
              <p style="font-size: 16px; line-height: 24px; color: #4a5568; margin: 0 0 20px;">
                Thanks for joining the waitlist for ${name}.
              </p>
              
              ${description ? `
              <p style="font-size: 16px; line-height: 24px; color: #4a5568; margin: 0 0 20px;">
                ${description}
              </p>
              ` : ''}

              ${config.welcome_message ? `
              <!-- Welcome Message -->
              <div style="background-color: #e8f5e9; padding: 20px; border-radius: 8px; margin-bottom: 24px;">
                <p style="font-size: 15px; color: #2e7d32; margin: 0;">
                  ${config.welcome_message}
                </p>
              </div>
              ` : ''}

                <!-- Waitlist Info -->
                <div style="background-color: #f7fafc; padding: 20px; border-radius: 8px; margin: 24px 0;">
                  <p style="font-size: 15px; color: #4a5568; margin: 0;">
                    <strong>What's next:</strong> We'll notify you as soon as early access is available. You're in line for exclusive access!
                  </p>
                </div>

              <!-- Signature -->
              <div style="margin-top: 32px;">
                <p style="font-size: 15px; line-height: 1.6; color: #4a5568;">
                  Cheers,<br>
                  <strong>Marcus Ruud</strong><br>
                  Maker of <a href="https://mruud.com" style="color: #0366d6; text-decoration: none;">Mruud.com</a>
                </p>
              </div>
            </div>

              <!-- GDPR Footer -->
              <div style="margin-top: 32px; padding: 20px; background-color: #f8f9fa; border-radius: 8px; font-size: 12px; color: #666;">
                <p style="margin-bottom: 8px;"><strong>Your Privacy Rights (GDPR)</strong></p>
                <p style="margin: 0 0 8px;">You received this email because you joined the waitlist for ${name}. Here's what you should know:</p>
                <ul style="margin: 8px 0; padding-left: 20px;">
                  <li style="margin-bottom: 4px;">Your data (name and email) is stored securely and used only for waitlist notifications.</li>
                  <li style="margin-bottom: 4px;">We'll only contact you about early access and important updates for this project.</li>
                  <li style="margin-bottom: 4px;">You can leave the waitlist or request data deletion at any time by replying with "UNSUBSCRIBE".</li>
                </ul>
                <p style="margin: 8px 0 0;">For more details, see our <a href="https://mruud.com/privacy" style="color: #0366d6; text-decoration: none;">Privacy Policy</a>.</p>
              </div>
            </div>
          </div>
        `
      };
  }
}

// Main handler function
serve(async (req: Request) => {
  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders, status: 204 });
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  // Log request details for debugging
  console.log('Request method:', req.method);
  console.log('Request headers:', Object.fromEntries(req.headers.entries()));
  
  // Get client IP for rate limiting
  const clientIP = req.headers.get('cf-connecting-ip') || 
                   req.headers.get('x-forwarded-for')?.split(',')[0] || 
                   'unknown';
  console.log('Client IP:', clientIP);

  try {
    // Check environment variables presence
    console.log('Environment variables present:', {
      hasResendKey: !!RESEND_API_KEY,
      hasFromEmail: !!FROM_EMAIL,
      hasSupabaseUrl: !!SUPABASE_URL,
      hasServiceKey: !!SUPABASE_SERVICE_ROLE_KEY
    });

    // Implement rate limiting
    const now = new Date();
    const hourAgo = new Date(now.getTime() - 60 * 60 * 1000);

    // Check if IP has made requests in the last hour
    const { data: rateLimit, error: rateLimitError } = await supabase
      .from('rate_limits')
      .select('*')
      .eq('ip', clientIP)
      .single();

    if (rateLimitError && rateLimitError.code !== 'PGRST116') {
      console.error('Rate limit check error:', rateLimitError);
    }

    if (rateLimit) {
      // If last attempt was more than an hour ago, reset count
      if (new Date(rateLimit.last_attempt) < hourAgo) {
        await supabase
          .from('rate_limits')
          .update({ 
            count: 1,
            last_attempt: now.toISOString() 
          })
          .eq('ip', clientIP);
      } else if (rateLimit.count >= 10) {
        // Rate limit exceeded
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      } else {
        // Increment count
        await supabase
          .from('rate_limits')
          .update({ 
            count: rateLimit.count + 1,
            last_attempt: now.toISOString() 
          })
          .eq('ip', clientIP);
      }
    } else {
      // First attempt from this IP
      await supabase
        .from('rate_limits')
        .insert({
          ip: clientIP,
          count: 1,
          last_attempt: now.toISOString()
        });
    }

    // Parse and validate request body
    const body = await req.json();
    console.log('Request body:', body);

    const result = emailSchema.safeParse(body);
    if (!result.success) {
      console.error('Validation error:', result.error);
      return new Response(
        JSON.stringify({ 
          error: 'Invalid form data', 
          details: result.error.format() 
        }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { firstName, email, projectId, category, gdprConsent } = result.data;

    // First, check if user exists or create them
    let userId;
    try {
      // Check if user exists
      const { data: existingUser, error: userSelectError } = await supabase
        .from('users')
        .select('id')
        .eq('email', email)
        .single();

      if (userSelectError && userSelectError.code !== 'PGRST116') { // PGRST116 is "not found"
        console.error('User lookup error:', userSelectError);
        throw new Error('Database error while checking existing user');
      }

      if (existingUser) {
        userId = existingUser.id;
        
        // Update user's consent if they've given it
        if (gdprConsent) {
          await supabase
            .from('users')
            .update({ 
              global_consent: true,
              updated_at: new Date().toISOString()
            })
            .eq('id', userId);
        }
      } else {
        // Create new user
        const { data: newUser, error: userInsertError } = await supabase
          .from('users')
          .insert({
            email,
            first_name: firstName,
            global_consent: gdprConsent,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          })
          .select('id')
          .single();
          
        if (userInsertError) {
          console.error('User creation error:', userInsertError);
          throw new Error('Failed to create user record');
        }
        
        userId = newUser.id;
      }

      // Get project reference
      const { data: project, error: projectError } = await supabase
        .from('projects')
        .select('id')
        .eq('project_id', projectId)
        .single();

      if (projectError) {
        console.error('Project lookup error:', projectError);
        throw new Error('Failed to get project reference');
      }

      // Check if email already exists for this project
      const { data: existingEmails, error: selectError } = await supabase
        .from('emails')
        .select('id')
        .eq('email', email)
        .eq('project_id', projectId)
        .limit(1);

      if (selectError) {
        console.error('Database select error:', selectError);
        throw new Error('Database error while checking existing email');
      }

      // If email already exists for this project, just proceed to sending the email
      // without trying to insert a new record
      if (existingEmails && existingEmails.length > 0) {
        console.log('Email already exists for this project, skipping insertion');
      } else {
        // Insert new email record
        const { error: insertError } = await supabase
          .from('emails')
          .insert({
            first_name: firstName,
            email,
            project_id: projectId,
            category,
            created_at: new Date().toISOString(),
            confirmed: gdprConsent,
            user_id: userId,
            project_ref: project.id
          });

        if (insertError) {
          console.error('Database insertion error:', insertError);
          
          // If it's a unique constraint violation, handle it gracefully
          if (insertError.code === '23505') {
            console.log('Duplicate email detected, continuing with email sending');
          } else {
            throw new Error('Failed to store email');
          }
        } else {
          // Log successful insertion
          console.log('Successfully inserted email:', { email, projectId, category });
        }
      }
      
    } catch (dbError) {
      console.error('Database operation error:', dbError);
      throw new Error('Failed to process database operations');
    }

    // Get project configuration
    const projectConfig = await getProjectConfig(projectId);

    // Generate email content based on project config
    const { subject, html: htmlContent } = await generateEmailContent(
      firstName,
      projectConfig,
      projectConfig.category
    );

    // Send confirmation email
    try {
      console.log('About to send confirmation email to:', email);
      const emailData = await sendEmail(email, subject, htmlContent);
      console.log('Email sending response:', emailData);
      
      // Log successful email
      await supabase
        .from('webhooks')
        .insert({
          event_type: 'email_sent',
          payload: {
            email,
            project_id: projectId,
            category,
            subject,
            email_id: emailData?.id,
            project_name: projectConfig.name
          },
          status: 'success',
          created_at: new Date().toISOString()
        });

    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError);
      console.error('Error details:', JSON.stringify(emailError, null, 2));
      
      // Log the email error
      await supabase
        .from('webhooks')
        .insert({
          event_type: 'email_error',
          payload: {
            email,
            project_id: projectId,
            category,
            error: emailError instanceof Error ? emailError.message : JSON.stringify(emailError),
            error_stack: emailError instanceof Error ? emailError.stack : undefined,
            project_name: projectConfig.name
          },
          status: 'error',
          created_at: new Date().toISOString()
        });
    }

    // In your form validation
    if (body.honeypot) {
      // This is likely a bot if the honeypot field is filled
      return new Response(
        JSON.stringify({ success: true }), // Pretend success to confuse bots
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Return success response
    return new Response(
      JSON.stringify({ 
        success: true,
        message: 'Email subscription successful'
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Unhandled error:', error);
    
    // Return error response
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
}); 