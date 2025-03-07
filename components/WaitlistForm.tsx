'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Project configurations
const projectConfig = {
  'indie-portfolio': {
    title: "Get GitHub Access",
    subtitle: "Request Repository Access",
    description: "Sign up to receive a link to the IndiePortfolio GitHub repository and documentation.",
    buttonText: "Request Access",
    successMessage: "Check your email for the GitHub access link!",
    category: "github",
  },
  'nextjs-supabase': {
    title: "Get GitHub Access",
    subtitle: "Request Repository Access",
    description: "Sign up to receive a link to the Next.js Supabase Boilerplate repository and documentation.",
    buttonText: "Request Access",
    successMessage: "Check your email for the GitHub access link!",
    category: "github",
  },
  'ai-study-calendar': {
    title: "Get GitHub Access",
    subtitle: "Request Repository Access",
    description: "Sign up to receive a link to the AI Study Calendar repository and documentation.",
    buttonText: "Request Access",
    successMessage: "Check your email for the GitHub access link!",
    category: "github",
  },
  waitlist: {
    title: "Join the Waitlist",
    subtitle: "Early Access Signup",
    description: "Be among the first to try my upcoming projects and exclusive tools.",
    buttonText: "Join the Waitlist",
    successMessage: "You're on the list! We'll notify you when early access is ready.",
    category: "waitlist",
  },
  newsletter: {
    title: "Stay Updated",
    subtitle: "Join My Newsletter",
    description: "Subscribe to get updates on my latest projects, insights, and more.",
    buttonText: "Subscribe",
    successMessage: "You're subscribed! Check your email for confirmation.",
    category: "newsletter",
  }
} as const;

// Default configuration
const defaultConfig = {
  title: "Join Us",
  subtitle: "Stay in the Loop",
  description: "Sign up to get the latest updates and news.",
  buttonText: "Sign Up",
  successMessage: "Thanks for signing up! We'll be in touch soon.",
  category: "newsletter",
};

type ProjectId = keyof typeof projectConfig;

const formSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  email: z.string().email('Please enter a valid email address'),
  gdprConsent: z.boolean().refine(val => val === true, {
    message: 'You must accept the terms and privacy policy to continue',
  }),
  honeypot: z.string().optional(), // Honeypot field for bot detection
});

type FormValues = z.infer<typeof formSchema>;

interface WaitlistFormProps {
  projectId: string;
  customConfig?: {
    title?: string;
    subtitle?: string;
    description?: string;
    buttonText?: string;
    successMessage?: string;
    category?: 'newsletter' | 'github' | 'waitlist';
  };
  supabaseUrl?: string;
  showHeader?: boolean;
}

export default function WaitlistForm({
  projectId,
  customConfig,
  supabaseUrl = 'https://your-project.supabase.co',
  showHeader = false,
}: WaitlistFormProps) {
  const config = {
    ...(projectConfig[projectId as ProjectId] || defaultConfig),
    ...customConfig, // Allow custom overrides
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [formTimestamp, setFormTimestamp] = useState<number>(0);
  
  // Set timestamp when component mounts
  useEffect(() => {
    setFormTimestamp(Date.now());
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Call the Supabase Edge Function directly
      const response = await fetch(`${supabaseUrl}/functions/v1/submit-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: data.firstName,
          email: data.email,
          projectId,
          category: config.category,
          honeypot: data.honeypot, // Send honeypot field
          timestamp: formTimestamp, // Send timestamp for bot detection
          gdprConsent: data.gdprConsent // Send GDPR consent status
        }),
      });

      // Handle rate limiting
      if (response.status === 429) {
        throw new Error('Too many requests. Please try again later.');
      }

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit email');
      }

      setSubmittedEmail(data.email);
      setIsSuccess(true);
      reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="waitlist-form-container">
      {showHeader && (
        <div className="waitlist-header">
          <h2 className="waitlist-title">{config.title}</h2>
          <h3 className="waitlist-subtitle">{config.subtitle}</h3>
          <p className="waitlist-description">{config.description}</p>
        </div>
      )}

      {isSuccess && (
        <div className="waitlist-modal-overlay">
          <div className="waitlist-modal">
            <div className="waitlist-modal-icon">
              <svg
                className="waitlist-check-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            
            <h3 className="waitlist-modal-title">
              {config.category === 'github' 
                ? "You're in! GitHub access granted!" 
                : config.category === 'newsletter'
                  ? "You're subscribed!"
                  : "We've added you to our waiting list!"}
            </h3>
            
            <p className="waitlist-modal-message">
              {config.successMessage}
            </p>
            
            <p className="waitlist-modal-email">
              {config.category === 'github'
                ? `Check your email for the GitHub access link!`
                : config.category === 'newsletter'
                  ? `We'll send updates to`
                  : `We'll let you know when we're ready at`} <span className="waitlist-email-highlight">{submittedEmail}</span>
            </p>
            
            <button
              onClick={() => setIsSuccess(false)}
              className="waitlist-modal-button"
            >
              Close
            </button>
          </div>
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className="waitlist-form">
        <div className="waitlist-input-container">
          <input
            id="firstName"
            type="text"
            placeholder="Enter your first name"
            {...register('firstName')}
            className="waitlist-input"
          />
          {errors.firstName && (
            <p className="waitlist-error">{errors.firstName.message}</p>
          )}
        </div>

        <div className="waitlist-input-container">
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            {...register('email')}
            className="waitlist-input"
          />
          {errors.email && (
            <p className="waitlist-error">{errors.email.message}</p>
          )}
        </div>
        
        <div className="waitlist-checkbox-container">
          <label className="waitlist-checkbox-label">
            <input
              type="checkbox"
              {...register('gdprConsent')}
              className="waitlist-checkbox"
            />
            <span className="waitlist-checkbox-text">
              I agree to the <a href="https://mruud.com/terms" target="_blank" rel="noopener noreferrer" className="waitlist-link">Terms</a> and <a href="https://mruud.com/privacy" target="_blank" rel="noopener noreferrer" className="waitlist-link">Privacy Policy</a>
            </span>
          </label>
          {errors.gdprConsent && (
            <p className="waitlist-error">{errors.gdprConsent.message}</p>
          )}
        </div>
        
        {/* Honeypot field - hidden from real users but bots will fill it */}
        <div className="waitlist-honeypot">
          <input
            id="honeypot"
            type="text"
            tabIndex={-1}
            {...register('honeypot')}
            autoComplete="off"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="waitlist-button"
        >
          {isSubmitting ? 'Submitting...' : config.buttonText}
        </button>
        
        {error && (
          <p className="waitlist-error">{error}</p>
        )}
      </form>

      <style jsx>{`
        .waitlist-form-container {
          width: 100%;
          max-width: 400px;
          font-family: -apple-system, BlinkMacSystemFont, &apos;Segoe UI&apos;, Roboto, Oxygen, Ubuntu, Cantarell, &apos;Open Sans&apos;, &apos;Helvetica Neue&apos;, sans-serif;
        }

        .waitlist-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .waitlist-input-container {
          width: 100%;
        }

        .waitlist-input {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          background-color: rgba(255, 255, 255, 0.05);
          color: white;
          font-size: 16px;
          transition: all 0.2s ease;
        }

        .waitlist-input:focus {
          outline: none;
          border-color: rgba(255, 255, 255, 0.3);
          background-color: rgba(255, 255, 255, 0.1);
        }

        .waitlist-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .waitlist-honeypot {
          opacity: 0;
          position: absolute;
          top: 0;
          left: 0;
          height: 0;
          width: 0;
          z-index: -1;
          pointer-events: none;
        }

        .waitlist-button {
          width: 100%;
          padding: 12px 16px;
          background-color: white;
          color: black;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .waitlist-button:hover {
          background-color: rgba(255, 255, 255, 0.9);
        }

        .waitlist-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .waitlist-error {
          margin-top: 8px;
          color: #ff6b6b;
          font-size: 14px;
        }

        .waitlist-header {
          text-align: center;
          margin-bottom: 24px;
        }

        .waitlist-title {
          font-size: 24px;
          font-weight: 700;
          color: white;
          margin-bottom: 8px;
        }

        .waitlist-subtitle {
          font-size: 32px;
          font-weight: 700;
          color: white;
          margin-bottom: 12px;
          background: linear-gradient(to right, #ec4899, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .waitlist-description {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 24px;
        }

        .waitlist-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.75);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease;
        }

        .waitlist-modal {
          background-color: #1a1a1a;
          border-radius: 12px;
          padding: 32px;
          width: 90%;
          max-width: 400px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
          animation: slideUp 0.4s ease;
        }

        .waitlist-modal-icon {
          width: 48px;
          height: 48px;
          background-color: rgba(52, 211, 153, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
        }

        .waitlist-check-icon {
          width: 24px;
          height: 24px;
          color: #34D399;
        }

        .waitlist-modal-title {
          font-size: 20px;
          font-weight: 600;
          color: white;
          text-align: center;
          margin-bottom: 12px;
        }

        .waitlist-modal-message {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.8);
          text-align: center;
          margin-bottom: 16px;
        }

        .waitlist-modal-email {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          text-align: center;
          margin-bottom: 24px;
        }

        .waitlist-email-highlight {
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
        }

        .waitlist-modal-button {
          width: 100%;
          padding: 12px 16px;
          background-color: #1f1f1f;
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .waitlist-modal-button:hover {
          background-color: #2a2a2a;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .waitlist-checkbox-container {
          margin: 16px 0;
        }

        .waitlist-checkbox-label {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          cursor: pointer;
        }

        .waitlist-checkbox {
          margin-top: 4px;
          cursor: pointer;
        }

        .waitlist-checkbox-text {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.4;
        }

        .waitlist-link {
          color: white;
          text-decoration: underline;
          transition: opacity 0.2s ease;
        }

        .waitlist-link:hover {
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
}