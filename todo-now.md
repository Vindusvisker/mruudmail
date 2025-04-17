# MruudMail CLI Implementation Todo List

This document outlines the steps needed to implement the MruudMail CLI tool and its accompanying self-hosted email GUI app. Below is a split between what you need to do **now** (build the actual product) and what you’ll do **later** when wrapping it as a CLI scaffolder.

---

## 🔨 Current Focus – Build the Email App (MVP)

This phase is all about building out the actual email product experience that the CLI will eventually scaffold.

### 📦 App Structure & Infrastructure
- [ ] Set up base Next.js 15 project
- [ ] Install & configure Tailwind + Shadcn UI
- [ ] Add Supabase client + auth config
- [ ] Set up `.env.local` with Supabase URL + anon key

### 📨 Email Template System
- [ ] Create folder: `templates/`
- [ ] Add sample HTML email templates (welcome, promo, etc.)
- [ ] Create live preview component (iframe or div)
- [ ] Allow user to load + edit template content
- [ ] Optionally use `React Email` components (if not pure HTML)

### 📤 Email Sending Logic
- [ ] Set up Supabase Edge Function (`functions/send-email.ts`)
- [ ] Create email send API route or button trigger in frontend
- [ ] Add support for Resend/Mailersend (choose 1 first)
- [ ] Build form for subject, content, list of emails

### 🗂️ Campaign Builder UI
- [ ] Create page: `/campaigns`
- [ ] Campaign form: title, subject, template select, audience select
- [ ] Form validation with Zod + React Hook Form
- [ ] Store campaigns to Supabase DB

### 📊 Analytics + Logs
- [ ] Track email sends per campaign
- [ ] Track open rate (optional – consider using Resend tracking)
- [ ] Create `/analytics` dashboard (chart library)
- [ ] Supabase DB table: `campaign_logs`

### 👥 Subscriber Management
- [ ] Supabase table: `subscribers`
- [ ] Page to view/add/remove subscribers
- [ ] Upload CSV feature (optional)

### 🛠️ Settings & Configuration
- [ ] Add `lib/supabase.ts`
- [ ] Add `.env.example`
- [ ] Add basic config constants (e.g., FROM email)

### 🎨 UI Polish
- [ ] Add Nav with Campaigns, Templates, Analytics, Subscribers
- [ ] Use shadcn/ui to keep components consistent
- [ ] Handle loading, success, and error states elegantly

### 🧪 Testing & Stability
- [ ] Manual tests for full flow (create campaign → send → track)
- [ ] Validate HTML rendering + edge function reliability
- [ ] Optional: add unit tests to core logic

---

## 🧱 Later – Wrap as a CLI Project

Once the above app is working:
- Extract it into `/template` folder in new CLI repo
- Build the scaffolding logic using `clack@prompts`
- Publish CLI to npm so others can run:

```bash
npx ruudmail init
```

To scaffold the same self-hosted email system.

---

## 🧭 Summary
You’re not late — you’re just early. Focus now is:
> Build a powerful, beautiful email tool for indie devs.

The CLI comes **after** you’ve got something worth sharing.

Let me know anytime you want help with:
- Designing the campaign builder
- Coding the Supabase function
- Building the analytics UI
- Or wiring in React Email templates

We can go deep wherever you need.

