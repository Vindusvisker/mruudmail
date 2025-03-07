# Send Test Email Function

This Supabase Edge Function sends test emails using the Resend API.

## Prerequisites

1. Make sure you have the Supabase CLI installed:
   ```
   npm install -g supabase
   ```

2. Make sure you have set up the following environment variables in your Supabase project:
   - `RESEND_API_KEY`: Your Resend API key
   - `SUPABASE_URL`: Your Supabase project URL
   - `SUPABASE_SERVICE_ROLE_KEY`: Your Supabase service role key

## Deployment

Deploy the function to your Supabase project:

```bash
# Login to Supabase CLI
supabase login

# Link to your Supabase project
supabase link --project-ref your-project-id

# Deploy the function
supabase functions deploy send-test-email --no-verify-jwt
```

The `--no-verify-jwt` flag allows the function to be called without authentication. Remove this flag if you want to require authentication.

## Testing

You can test the function using the provided `test-email-function.sh` script:

1. Edit the script to include your Supabase project URL and your email address
2. Make the script executable: `chmod +x test-email-function.sh`
3. Run the script: `./test-email-function.sh`

Or you can test it directly with curl:

```bash
curl -X POST "https://your-project-id.supabase.co/functions/v1/send-test-email" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "your-email@example.com",
    "subject": "Test Email from MruudMail",
    "message": "This is a test message!",
    "fromName": "MruudMail Test",
    "fromEmail": "noreply@mruud.com"
  }'
```

## Function Parameters

The function accepts the following parameters in the request body:

- `email` (required): The recipient's email address
- `subject` (optional): The email subject (default: "Test Email from MruudMail")
- `message` (optional): The email message (default: "This is a test email from your Supabase Edge Function!")
- `fromName` (optional): The sender's name (default: "MruudMail")
- `fromEmail` (optional): The sender's email address (default: "noreply@mruud.com")

## Response

The function returns a JSON response with the following structure:

### Success
```json
{
  "success": true,
  "message": "Email sent successfully",
  "emailId": "re_123456789"
}
```

### Error
```json
{
  "success": false,
  "error": { ... },
  "message": "Failed to send email"
}
```

## Notes

- Make sure the `fromEmail` domain is verified in your Resend account
- The function logs email attempts to the `email_logs` table in your Supabase database 