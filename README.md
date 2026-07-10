# Amplify AI

A dark-mode-first AI marketing SaaS prototype built with Next.js, TypeScript, Tailwind CSS, and Supabase-ready architecture.

## What’s included

- Landing page with premium AI marketing copy and product sections
- Sign in, sign up, forgot password, and onboarding flow
- Dashboard shell with sidebar navigation and top controls
- Content Studio with AI post generation mock workflow
- Brand Kit editor and brand memory storage UI
- Content Calendar planning page with weekly plan generation
- Social Accounts page with realistic OAuth connection placeholders
- AI Assistant chat page with brand-aware prompt suggestions
- Placeholder billing and analytics pages
- Supabase schema definitions and environment examples
- API route placeholders for social OAuth and AI generation

## Getting started

1. Install dependencies

```bash
npm install
```

2. Copy environment example

```bash
cp .env.example .env.local
```

3. Fill in your own values for Supabase, OpenAI/Anthropic, Stripe, social OAuth, and Cloudflare.

4. Run the development server

```bash
npm run dev
```

5. Open http://localhost:3000

## Architecture notes

- Uses Next.js App Router and Tailwind CSS
- `lib/aiService.ts` contains mock AI generation functions ready for real API integration
- `lib/supabaseClient.ts` includes Supabase client stubs using environment variables
- Social connections are represented via placeholder API routes under `app/api/social/*`
- Authentication is currently mocked with client-side forms and placeholder API endpoints

## Cloudflare / production readiness

- Designed for Cloudflare Pages / Workers compatibility using Next.js App Router
- No real API keys are committed
- Placeholder OAuth and billing flows are clearly labeled for future integration

## Next steps

- Wire Supabase auth and storage into `/app/api/auth/*` routes
- Replace mock AI service with OpenAI/Anthropic or your own LLM provider
- Add Stripe checkout integration using `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- Implement platform OAuth for X, Instagram, TikTok, Facebook, and LinkedIn
- Add real analytics data and calendar drag/drop interactions
