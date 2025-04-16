'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Import shadcn components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Default configuration
const defaultConfig = {
  title: "Contact Us",
  subtitle: "Get in Touch",
  description: "We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.",
  buttonText: "Send Message",
  successMessage: "Thanks for reaching out! We'll get back to you soon.",
  subjectOptions: [
    { value: "general", label: "General Inquiry" },
    { value: "support", label: "Technical Support" },
    { value: "feedback", label: "Feedback" },
    { value: "business", label: "Business" },
    { value: "other", label: "Other" }
  ],
};

const formSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(10, 'Message should be at least 10 characters'),
  gdprConsent: z.boolean().refine(val => val === true, {
    message: 'You must accept the terms and privacy policy to continue',
  }),
  honeypot: z.string().optional(), // Honeypot field for bot detection
});

type FormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  customConfig?: {
    title?: string;
    subtitle?: string;
    description?: string;
    buttonText?: string;
    successMessage?: string;
    subjectOptions?: Array<{value: string, label: string}>;
  };
  endpoint?: string;
  showHeader?: boolean;
  dark?: boolean;
}

export default function ContactForm({
  customConfig,
  endpoint = '/api/contact',
  showHeader = false,
  dark = true,
}: ContactFormProps) {
  const config = {
    ...defaultConfig,
    ...customConfig, // Allow custom overrides
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formTimestamp] = useState<number>(Date.now());
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
      gdprConsent: false,
      honeypot: "",
    },
  });

  // Handle select change for shadcn Select component
  const handleSubjectChange = (value: string) => {
    setValue("subject", value, { shouldValidate: true });
  };

  // Handle checkbox change for shadcn Checkbox component
  const handleCheckboxChange = (checked: boolean) => {
    setValue("gdprConsent", checked, { shouldValidate: true });
  };

  const onSubmit = async (data: FormValues) => {
    // Don't submit if honeypot is filled (bot detection)
    if (data.honeypot) {
      // Pretend success but don't actually submit
      setIsSuccess(true);
      return;
    }

    // Don't submit if timestamp is too recent (bot detection)
    const elapsed = Date.now() - formTimestamp;
    if (elapsed < 3000) { // If form was filled in less than 3 seconds
      setError('Form submitted too quickly. Please try again.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          honeypot: undefined, // Don't send honeypot to server
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

      setIsSuccess(true);
      reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const bgClass = dark ? "bg-zinc-900" : "bg-white";
  const textClass = dark ? "text-white" : "text-zinc-900";
  const mutedTextClass = dark ? "text-zinc-400" : "text-zinc-500";

  return (
    <Card className={`w-full ${bgClass}`}>
      {showHeader && (
        <CardHeader>
          <CardTitle className={textClass}>{config.title}</CardTitle>
          <CardDescription className={mutedTextClass}>{config.subtitle}</CardDescription>
          <p className={`mt-2 ${mutedTextClass}`}>{config.description}</p>
        </CardHeader>
      )}

      <CardContent>
        {isSuccess ? (
          <Alert className={dark ? "bg-green-900/20 border-green-800" : "bg-green-50 border-green-200"}>
            <AlertDescription className={dark ? "text-green-300" : "text-green-800"}>
              {config.successMessage}
            </AlertDescription>
          </Alert>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className={errors.firstName ? "text-destructive" : textClass}>
                  First Name
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  {...register("firstName")}
                  placeholder="John"
                  className={errors.firstName ? "border-destructive" : ""}
                />
                {errors.firstName && (
                  <p className="text-sm text-destructive">{errors.firstName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName" className={errors.lastName ? "text-destructive" : textClass}>
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  {...register("lastName")}
                  placeholder="Doe"
                  className={errors.lastName ? "border-destructive" : ""}
                />
                {errors.lastName && (
                  <p className="text-sm text-destructive">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className={errors.email ? "text-destructive" : textClass}>
                Email
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="john.doe@example.com"
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject" className={errors.subject ? "text-destructive" : textClass}>
                Subject
              </Label>
              <Select 
                onValueChange={handleSubjectChange}
                defaultValue={watch("subject")}
              >
                <SelectTrigger className={errors.subject ? "border-destructive" : ""}>
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  {config.subjectOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.subject && (
                <p className="text-sm text-destructive">{errors.subject.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className={errors.message ? "text-destructive" : textClass}>
                Message
              </Label>
              <Textarea
                id="message"
                {...register("message")}
                placeholder="Your message here..."
                className={`min-h-[120px] ${errors.message ? "border-destructive" : ""}`}
              />
              {errors.message && (
                <p className="text-sm text-destructive">{errors.message.message}</p>
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
                  className={`text-sm font-normal ${errors.gdprConsent ? "text-destructive" : mutedTextClass}`}
                >
                  I consent to having my submitted information collected and stored.
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
              {isSubmitting ? "Sending..." : config.buttonText}
            </Button>

            <p className={`text-xs ${mutedTextClass} mt-2`}>
              We respect your privacy and will never share your information.
            </p>
          </form>
        )}
      </CardContent>
    </Card>
  );
} 