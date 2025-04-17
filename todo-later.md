# MruudMail CLI Implementation Todo List

This document outlines the steps needed to implement the MruudMail CLI tool for scaffolding a full self-hosted email GUI setup.

---

## ✅ Core Goal

One-liner install:
```bash
npx ruudmail init
```

Scaffold a Next.js app with email GUI, Supabase integration, pre-built templates, and component libraries (e.g., shadcn/ui).

---

## 🏗️ Project Architecture

- [ ] Create a new repository: `mruudmail-cli`
- [ ] Set up folder structure:
  - `src/cli/` – CLI logic (Clack-powered)
  - `src/scaffold/` – File templates, config generators
  - `src/utils/` – File writing, env helpers, logging
  - `template/` – Full Next.js GUI starter
  - `.mruudmail/` – Optional CLI config after install
  - `dist/`, `docs/`, `README.md`, etc.
- [ ] Initialize npm package with metadata
- [ ] Set up TypeScript, ESLint, Prettier

---

## 🎯 Core CLI Functionality

- [ ] Scaffold flow with `clack@prompts`
- [ ] Prompt user for:
  - Project name
  - Supabase integration
  - Include email templates
  - Include Shadcn UI
- [ ] Scaffold full project into selected folder
- [ ] Write `.env.example` and setup scripts
- [ ] Output final usage instructions

---

## 🔌 API Integration (Optional for hosted templates)

- [ ] Build API client for:
  - Template listing
  - Template retrieval
  - Usage metrics (optional)
  - Auth check for API key usage
- [ ] Secure `.env` integration

---

## 📨 Template System

- [ ] Organize templates by type:
  - Transactional
  - Marketing
  - Notification
- [ ] Use React Email components for templating
- [ ] Allow customizable variables with placeholders
- [ ] Support template rendering for:
  - Resend
  - SendGrid
  - Mailgun
  - SES

---

## 🧩 Supabase Backend Integration

- [ ] Scaffold Supabase folder structure:
  - `supabase/functions/send-email.ts`
  - `supabase/migrations/init.sql`
- [ ] Create tables for:
  - Subscribers
  - Campaigns
  - API Keys (if multi-user future)
  - Template usage logs (optional)
- [ ] Add helper lib `lib/supabase.ts`

---

## 🖥️ GUI Template (Next.js)

- [ ] Homepage for template preview/send
- [ ] Form with React Hook Form + Zod
- [ ] Live HTML preview with iframe or div rendering
- [ ] Basic list view of previous campaigns
- [ ] Supabase hooks for DB interaction

---

## 🧪 Testing

- [ ] Unit tests for CLI scaffolding
- [ ] E2E tests for full `init` and post-setup GUI
- [ ] Test email rendering with multiple providers
- [ ] CI/CD setup for CLI repo

---

## 📚 Documentation

- [ ] CLI usage guide in `/docs`
- [ ] How to use email GUI locally
- [ ] Setup guide for Supabase users
- [ ] Examples for providers: Resend, SendGrid, SES, etc.

---

## 🌍 Marketing & Docs Site

- [ ] Add CLI section to `mruud.com`
- [ ] Write blog post: "From idea to inbox in 5 minutes with RuudMail"
- [ ] Video walkthrough of CLI usage
- [ ] Tutorials for converting HTML → React Email

---

## 📦 Deployment & Distribution

- [ ] Publish CLI to npm as `ruudmail`
- [ ] Set up bin in `package.json`
- [ ] Add auto-updater with `update-notifier`
- [ ] Versioning + changelog

---

## 🔒 Security

- [ ] Local `.env` for config
- [ ] Secure any API key logic
- [ ] Add throttling logic for sending (if implemented)
- [ ] Add basic audit logging to Supabase (if needed)

---

## 📈 Metrics (Optional)

- [ ] Anonymous install ping (opt-in)
- [ ] Usage metrics per template
- [ ] Dashboard for template performance (future GUI)

---

## 🧑‍💻 Community Features

- [ ] Community template contributions
- [ ] Template submission flow
- [ ] Add showcase to website with GitHub usernames

---

## ✅ Getting Started (Execution Order)

1. Scaffold `ruudmail init` CLI using `clack`
2. Create Next.js template with email preview/send
3. Add Supabase logic + Edge Function
4. Add template components + example emails
5. Build docs
6. Test and publish to npm

---

## 🔗 Inspiration from Marketing Page

- Form UX: React Hook Form + Zod
- Email previews (iframe)
- Supabase Edge Function for delivery
- Smooth UX, error handling, validation

---

