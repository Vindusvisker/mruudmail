# Marketing Email Function

This Edge Function sends marketing emails to users who have explicitly opted in to receive marketing communications (users with `global_consent = true` in the `users` table).

## Features

- Sends emails only to users who have explicitly consented to marketing communications
- Supports personalized content with user's name
- Includes customizable call-to-action buttons
- Provides detailed reporting on email delivery
- Includes GDPR-compliant unsubscribe links
- Secured with Supabase service role authentication

## Setup

1. Deploy the function to Supabase:

```bash
supabase functions deploy marketing-email
```

2. Set the required environment variables:

```bash
supabase secrets set RESEND_API_KEY=your_resend_api_key
supabase secrets set FROM_EMAIL=your@email.com
```

## Usage

Send a POST request to the function with the following JSON body:

```json
{
  "subject": "Your Email Subject",
  "preview_text": "Optional preview text for email clients",
  "title": "Main Title in the Email",
  "content": "HTML content of your email. Use {{name}} to insert the recipient's name.",
  "cta_text": "Optional Call to Action Button Text",
  "cta_url": "https://your-cta-url.com"
}
```

The request must include an `Authorization` header with your Supabase service role key:

```
Authorization: Bearer your-supabase-service-role-key
```

### Example using cURL

```bash
curl -X POST https://your-project.supabase.co/functions/v1/marketing-email \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your-supabase-service-role-key" \
  -d '{
    "subject": "New Feature Announcement",
    "preview_text": "Check out our latest feature",
    "title": "Introducing Our New Feature",
    "content": "<p>Hi {{name}},</p><p>We're excited to announce our new feature!</p>",
    "cta_text": "Try It Now",
    "cta_url": "https://mruud.com/new-feature"
  }'
```

### Example using the provided script

You can also use the provided script in `scripts/send-marketing-email.js`:

```bash
# Set your Supabase service role key
export SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

# Run the script
node scripts/send-marketing-email.js
```

## Response

The function returns a JSON response with information about the email sending process:

```json
{
  "message": "Marketing email sent to 5 users (0 failed)",
  "total": 5,
  "sent": 5,
  "failed": 0,
  "results": [
    { "email": "user1@example.com", "status": "sent", "id": "email_id" },
    { "email": "user2@example.com", "status": "sent", "id": "email_id" }
  ]
}
```

## Security

- The function requires Supabase service role authentication
- Only sends to users who have explicitly opted in (GDPR compliant)
- Includes unsubscribe links in every email
- Logs all email sending activities in the `webhooks` table 