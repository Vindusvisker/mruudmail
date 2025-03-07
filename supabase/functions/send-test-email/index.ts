import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Hardcoded fallback email
const FALLBACK_EMAIL = "test@example.com";

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Parse request body
    const { 
      email = FALLBACK_EMAIL, 
      subject = "Test Email from MruudMail", 
      message = "This is a test email from your Supabase Edge Function!",
      fromName = "MruudMail",
      fromEmail = "notifications@mruud.com" // Make sure this domain is verified in your Resend account
    } = await req.json();

    // Get Resend API key from environment variables
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    if (!resendApiKey) {
      return new Response(
        JSON.stringify({ error: 'RESEND_API_KEY environment variable is not set' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Create a Supabase client for logging
    const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? '';
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Log the email attempt
    const { error: logError } = await supabase
      .from('email_logs')
      .insert({
        recipient: email,
        subject: subject,
        status: 'pending',
        email_type: 'test_email',
        metadata: {
          message_preview: message.substring(0, 100),
          from_name: fromName,
          from_email: fromEmail
        }
      });

    if (logError) {
      console.error('Failed to log email attempt:', logError);
      // Continue anyway - we still want to try sending the email
    }

    // Prepare email content
    const emailContent = {
      from: `${fromName} <${fromEmail}>`,
      to: email,
      subject: subject,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333;">Hello from MruudMail!</h1>
          <p>${message}</p>
          <p>This email was sent from a Supabase Edge Function using the Resend API.</p>
          <hr>
          <p style="color: #666; font-size: 12px;">This is a test email. Please do not reply.</p>
        </div>
      `
    };

    // Send email via Resend API
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`
      },
      body: JSON.stringify(emailContent)
    });

    const resendResult = await resendResponse.json();

    // Update the email log with the result
    if (supabaseUrl && supabaseKey) {
      await supabase
        .from('email_logs')
        .update({
          status: resendResponse.ok ? 'sent' : 'failed',
          sent_at: resendResponse.ok ? new Date().toISOString() : null,
          metadata: {
            ...emailContent,
            resend_response: resendResult
          }
        })
        .eq('recipient', email)
        .eq('subject', subject)
        .eq('status', 'pending');
    }

    if (!resendResponse.ok) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: resendResult,
          message: 'Failed to send email' 
        }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully',
        emailId: resendResult.id
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
}); 