'use client';

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Import shadcn components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

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
    title: "Subscribe to Newsletter",
    subtitle: "Stay Updated",
    description: "Get the latest updates, tips, and insights delivered straight to your inbox.",
    buttonText: "Subscribe",
    successMessage: "Thanks for subscribing! Check your inbox for a confirmation.",
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
    setValue,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      email: "",
      gdprConsent: false,
      honeypot: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    // Don't submit if honeypot is filled (bot detection)
    if (data.honeypot) {
      // Pretend success but don't actually submit
      setIsSuccess(true);
      return;
    }

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
          gdprConsent: data.gdprConsent,
          honeypot: data.honeypot, // Send honeypot field
          timestamp: formTimestamp, // Send timestamp for bot detection
        }),
      });

      // Handle rate limiting
      if (response.status === 429) {
        throw new Error('Too many requests. Please try again later.');
      }

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit. Please try again.');
      }

      setSubmittedEmail(data.email);
      setIsSuccess(true);
      reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle checkbox change for shadcn Checkbox component
  const handleCheckboxChange = (checked: boolean) => {
    setValue("gdprConsent", checked, { shouldValidate: true });
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      {showHeader && (
        <CardHeader>
          <CardTitle>{config.title}</CardTitle>
          <CardDescription>{config.subtitle}</CardDescription>
        </CardHeader>
      )}

      <CardContent>
        {isSuccess ? (
          <Alert className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
            <AlertDescription className="text-green-800 dark:text-green-300">
              {submittedEmail ? `Thank you! ${config.successMessage} We've sent a confirmation to ${submittedEmail}.` : config.successMessage}
            </AlertDescription>
          </Alert>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className={errors.firstName ? "text-destructive" : ""}>
                First Name
              </Label>
              <Input
                id="firstName"
                type="text"
                {...register("firstName")}
                placeholder="Your first name"
                className={errors.firstName ? "border-destructive" : ""}
              />
              {errors.firstName && (
                <p className="text-sm text-destructive">{errors.firstName.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className={errors.email ? "text-destructive" : ""}>
                Email
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="your@email.com"
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>

            {/* Honeypot field - hidden from users, used for bot detection */}
            <div className="hidden" aria-hidden="true">
              <Input
                type="text"
                {...register("honeypot")}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="flex items-start space-x-2 pt-2">
              <Checkbox
                id="gdprConsent"
                onCheckedChange={handleCheckboxChange}
                className={errors.gdprConsent ? "border-destructive" : ""}
              />
              <div className="grid gap-1.5 leading-none">
                <Label
                  htmlFor="gdprConsent"
                  className={`text-sm font-normal ${errors.gdprConsent ? "text-destructive" : "text-muted-foreground"}`}
                >
                  I agree to receive emails about this project and understand I can unsubscribe at any time.
                </Label>
                {errors.gdprConsent && (
                  <p className="text-sm text-destructive">{errors.gdprConsent.message}</p>
                )}
              </div>
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? "Submitting..." : config.buttonText}
            </Button>

            <p className="text-xs text-muted-foreground mt-2">
              We respect your privacy and will never share your information.
            </p>
          </form>
        )}
      </CardContent>
    </Card>
  );
}