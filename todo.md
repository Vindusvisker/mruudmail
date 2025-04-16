# MruudMail CLI Implementation Todo List

This document outlines the steps needed to implement the MruudMail CLI tool for email template integration.

## Project Architecture

- [ ] Create a new repository for the CLI project: `mruudmail-cli`
- [ ] Set up the project structure:
  - `src/` - Source code
  - `templates/` - Template storage
  - `dist/` - Compiled code
  - `docs/` - Documentation
- [ ] Initialize npm package with proper metadata
- [ ] Set up TypeScript configuration
- [ ] Configure ESLint and Prettier for code quality

## Core CLI Functionality

- [ ] Set up Commander.js (or similar) for CLI command structure
- [ ] Implement authentication mechanism for API key storage
- [ ] Create configuration file handling (.mruudmailrc) 
- [ ] Develop template fetching mechanism that connects to backend API
- [ ] Implement command to list available templates
- [ ] Implement command to download templates
- [ ] Create template preview functionality

## API Integration

- [ ] Create API client for interacting with the MruudMail backend
- [ ] Implement authentication with API keys
- [ ] Create endpoints for:
  - Template listing
  - Template retrieval
  - User validation
  - Usage statistics

## Template System

- [ ] Create a system for organizing templates by category:
  - Transactional (welcome emails, password resets, order confirmations)
  - Marketing (newsletters, product announcements, special offers)
  - Notification (comment notifications, account activities, event reminders)
- [ ] Develop templating system using React Email components
- [ ] Create standard template structure with customizable variables
- [ ] Implement template transformation for different email sending services (Resend, SendGrid, etc.)

## Backend Integration (Supabase)

- [ ] Set up Supabase Edge Functions for template delivery:
  - Similar to the existing `marketing-email` function
  - Create new function for template delivery
- [ ] Set up authentication system for API keys
- [ ] Create database tables for:
  - Users
  - API keys
  - Template usage metrics
  - Downloaded templates

## Email Rendering

- [ ] Implement React Email rendering system
- [ ] Create utility for server-side rendering of templates
- [ ] Support HTML output for various email sending libraries
- [ ] Add support for template variables and customization

## Testing

- [ ] Create unit tests for CLI commands
- [ ] Develop integration tests for API interactions
- [ ] Implement E2E tests for full template workflow
- [ ] Set up CI/CD pipeline for automated testing

## Documentation

- [ ] Create comprehensive CLI documentation
- [ ] Write getting started guide
- [ ] Develop reference documentation for all commands
- [ ] Create examples for popular email sending services:
  - Nodemailer
  - SendGrid
  - Mailgun
  - Resend
  - Amazon SES

## Marketing Site Integration

- [ ] Update the MruudMail website with CLI documentation
- [ ] Integrate the existing `/docs` pages with actual functionality
- [ ] Create tutorial content for the CLI tool
- [ ] Update marketing page to promote the CLI tool

## Template Form UI (inspired by marketing page)

- [ ] Create a web-based template customization interface
- [ ] Allow users to:
  - Preview templates
  - Customize template content
  - Export templates to different formats
- [ ] Implement similar functionality to the existing marketing email composer:
  - Form validation
  - Live preview
  - HTML content editing

## Deployment and Distribution

- [ ] Publish the package to npm
- [ ] Set up automatic versioning
- [ ] Create release process
- [ ] Implement update notification system in the CLI

## Security

- [ ] Implement secure storage for API keys
- [ ] Create proper authentication flow
- [ ] Set up rate limiting for API requests
- [ ] Implement audit logging for sensitive operations

## Metrics and Analytics

- [ ] Create usage tracking for templates
- [ ] Implement anonymous analytics for CLI commands
- [ ] Develop dashboard for viewing template usage

## Community Features

- [ ] Create a system for community-contributed templates
- [ ] Implement template submission and approval process
- [ ] Set up community showcase for popular templates

## Getting Started for Implementation

1. Start by creating the basic CLI structure with Commander.js
2. Implement the config commands for API key storage
3. Build the template listing functionality
4. Create the template download mechanism
5. Develop the backend API endpoints
6. Implement the React Email rendering system
7. Create documentation and examples
8. Test the full workflow
9. Deploy to npm

## Inspiration from Marketing Page

The existing marketing page (`app/marketing/page.tsx`) provides a good reference for:

- Form handling and validation with React Hook Form and Zod
- Email preview generation
- API interaction with Supabase Edge Functions
- HTML email structure and styling
- Error handling and loading states

The CLI tool should provide similar functionality but through a command-line interface, allowing developers to integrate the templates directly into their workflows. 