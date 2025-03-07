import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createServiceClient } from '@/lib/supabase';
import { resend } from '@/lib/resend';

const emailSchema = z.object({
  email: z.string().email(),
  projectId: z.string().min(1),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = emailSchema.parse(body);
    const { email, projectId } = validatedData;
    
    // Create a Supabase client with admin privileges
    const supabase = createServiceClient();
    
    // Store email in Supabase
    const { error } = await supabase
      .from('emails')
      .insert({ email, project_id: projectId })
      .select();
    
    if (error) {
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'You are already subscribed' },
          { status: 409 }
        );
      }
      
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to store email' },
        { status: 500 }
      );
    }
    
    // Send confirmation email
    try {
      await resend.emails.send({
        from: 'noreply@email.mruud.com',
        to: email,
        subject: 'Subscription Confirmation',
        html: `
          <div>
            <h1>Thanks for subscribing!</h1>
            <p>You've successfully subscribed to updates from ${projectId}.</p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError);
      // We don't want to fail the whole request if just the email fails
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing request:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 