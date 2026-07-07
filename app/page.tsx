import Link from 'next/link';
import { ArrowRight, Sparkles, Shield, Users, CalendarDays, BarChart, LayoutDashboard } from 'lucide-react';

const features = [
  { title: 'AI content generation', description: 'Create posts, captions, replies, and video scripts with brand memory.', icon: Sparkles },
  { title: 'Social account connections', description: 'Connect X, Instagram, TikTok, Facebook, and LinkedIn securely.', icon: Shield },
  { title: 'Calendar & scheduling', description: 'Plan campaigns, drag posts, and publish only after authorization.', icon: CalendarDays },
  { title: 'Analytics & performance', description: 'Track engagement, followers, best time, and content wins.', icon: BarChart }
];

const testimonials = [
  { name: 'Nina Lopez', role: 'Founder, ReadMore App', quote: 'MarketPilot AI makes social marketing feel effortless for our launch weeks.' },
  { name: 'Jared Kim', role: 'Creative Director', quote: 'I finally have a single place to manage brands, platforms, and AI content ideas.' }
];

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-10 text-slate-100 sm:px-10 lg:px-16">
      <section className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-4 py-2 text-sm text-sky-200 ring-1 ring-sky-500/30">
              <ArrowRight className="h-4 w-4" /> Premium AI marketing for growing brands
            </span>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Your AI Marketing Team, Working Every Day.
            </h1>
            <p className="max-w-2xl text-lg text-slate-300 sm:text-xl">
              Create posts, images, captions, content ideas, and social campaigns for your business in minutes.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/signup" className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:bg-sky-300">
                Start Free
              </Link>
              <a href="#how-it-works" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500/60">
                See How It Works
              </a>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950/80 p-6 shadow-glow">
            <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-sky-400/20 to-transparent" />
            <div className="space-y-4">
              <div className="rounded-3xl bg-slate-900/80 p-5 ring-1 ring-slate-700/50">
                <p className="text-sm uppercase tracking-[0.25em] text-sky-300">Launch Campaign Preview</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">BookTok Launch Strategy</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">Generate social posts, reels concepts, replies, and a weekly schedule for a reading app audience.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-900/80 p-4 ring-1 ring-slate-700/50">
                  <p className="text-xs uppercase tracking-widest text-sky-300">Next post</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">“Discover your next fantasy romance with our app — swipe for a cozy book moment.”</p>
                </div>
                <div className="rounded-3xl bg-slate-900/80 p-4 ring-1 ring-slate-700/50">
                  <p className="text-xs uppercase tracking-widest text-sky-300">Best time</p>
                  <p className="mt-3 text-2xl font-semibold text-white">7:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mt-20 mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <p className="uppercase tracking-[0.3em] text-sky-300">How it works</p>
            <h2 className="text-4xl font-semibold text-white">Design social content that feels on-brand, every time.</h2>
            <p className="text-slate-300">Mock your onboarding, connect your social platforms with OAuth placeholders, save brand memory, and generate AI-backed content that matches your audience.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
                <h3 className="text-xl font-semibold text-white">Brand memory</h3>
                <p className="mt-2 text-slate-400">Store voice, audience details, hashtags, and product messaging for smarter AI output.</p>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
                <h3 className="text-xl font-semibold text-white">Social connections</h3>
                <p className="mt-2 text-slate-400">Connect X, Instagram, TikTok, Facebook, and LinkedIn through OAuth placeholders before publishing.</p>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-[1.75rem] border border-slate-800 bg-slate-950/80 p-6 shadow-glow">
                <feature.icon className="h-7 w-7 text-sky-300" />
                <h3 className="mt-4 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-24 mx-auto max-w-7xl">
        <div className="space-y-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="uppercase tracking-[0.3em] text-sky-300">Trusted by new brands</p>
              <h2 className="text-3xl font-semibold text-white">Everything for creators, apps, and small teams.</h2>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="rounded-full border border-slate-700 px-3 py-2">AI assistant</span>
              <span className="rounded-full border border-slate-700 px-3 py-2">Content calendar</span>
              <span className="rounded-full border border-slate-700 px-3 py-2">Brand kit</span>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-slate-800 bg-slate-950/80 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Brand memory</p>
              <p className="mt-4 text-slate-300">Save your tone, audience, topics, hashtags, and campaign goals in one place for consistent AI content generation.</p>
            </div>
            <div className="rounded-[2rem] border border-slate-800 bg-slate-950/80 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Creative studio</p>
              <p className="mt-4 text-slate-300">Upload logos, screenshots, and product images, then generate social-first creative ideas and caption-ready content.</p>
            </div>
            <div className="rounded-[2rem] border border-slate-800 bg-slate-950/80 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Schedule & approve</p>
              <p className="mt-4 text-slate-300">Plan your week with a visual calendar and only publish after accounts are authorized.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-24 mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-slate-800 bg-slate-950/80 p-8 text-slate-100 shadow-glow">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <p className="uppercase tracking-[0.3em] text-sky-300">Analytics dashboard</p>
              <h2 className="text-4xl font-semibold text-white">Keep performance visible for every brand and channel.</h2>
              <p className="text-slate-400">View follower growth, engagement rate, top-performing platforms, and campaign momentum across brands.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-900/90 p-5 ring-1 ring-slate-700/50">
                <p className="text-sm uppercase tracking-[0.24em] text-sky-300">Connected accounts</p>
                <p className="mt-3 text-3xl font-semibold text-white">4</p>
              </div>
              <div className="rounded-3xl bg-slate-900/90 p-5 ring-1 ring-slate-700/50">
                <p className="text-sm uppercase tracking-[0.24em] text-sky-300">AI ideas generated</p>
                <p className="mt-3 text-3xl font-semibold text-white">128</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-24 mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="rounded-[2rem] border border-slate-800 bg-slate-950/80 p-7 shadow-glow">
              <p className="text-lg text-slate-200">“{testimonial.quote}”</p>
              <div className="mt-6 text-sm text-slate-400">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 mx-auto max-w-7xl py-12 text-center text-slate-300">
        <h2 className="text-3xl font-semibold text-white">A modern AI marketing platform built for brands, apps, and creators.</h2>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link href="/pricing" className="rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">View Pricing</Link>
          <Link href="/signup" className="rounded-full border border-slate-700 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500">Create account</Link>
        </div>
      </section>
    </main>
  );
}
