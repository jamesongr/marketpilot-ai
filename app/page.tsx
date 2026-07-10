'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Shield, CalendarDays, BarChart } from 'lucide-react';

const features = [
  { title: 'AI content generation', description: 'Create posts, captions, replies, and video scripts with brand memory.', icon: Sparkles },
  { title: 'Social account connections', description: 'Connect X, Instagram, TikTok, Facebook, and LinkedIn securely.', icon: Shield },
  { title: 'Calendar & scheduling', description: 'Plan campaigns, drag posts, and publish only after authorization.', icon: CalendarDays },
  { title: 'Analytics & performance', description: 'Track engagement, followers, best time, and content wins.', icon: BarChart }
];

const testimonials = [
  { name: 'Nina Lopez', role: 'Founder, ReadMore App', quote: 'Amplify AI makes social marketing feel effortless for our launch weeks.' },
  { name: 'Jared Kim', role: 'Creative Director', quote: 'I finally have a single place to manage brands, platforms, and AI content ideas.' }
];

const showcaseImages = [
  { src: '/IMG_1283.PNG', alt: 'Amplify AI workspace overview' },
  { src: '/IMG_1284.PNG', alt: 'Amplify AI analytics dashboard' },
  { src: '/IMG_1285.PNG', alt: 'Amplify AI content planning view' }
];

export default function HomePage() {
  const [activeImage, setActiveImage] = useState(0);
  const [isManualMode, setIsManualMode] = useState(false);

  useEffect(() => {
    if (isManualMode) return;

    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % showcaseImages.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isManualMode]);

  const handleDotClick = (index: number) => {
    setActiveImage(index);
    setIsManualMode(true);
    const timeout = window.setTimeout(() => setIsManualMode(false), 10000);
    return () => window.clearTimeout(timeout);
  };
  return (
    <main className="min-h-screen px-6 py-10 text-slate-100 sm:px-10 lg:px-16">
      <section className="mx-auto mb-8 max-w-7xl rounded-full border border-slate-800 bg-slate-900/70 px-4 py-3 shadow-glow sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-300">Need legal information? Review our policies anytime.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/terms-of-service" className="rounded-full border border-slate-700 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-slate-500 hover:bg-white/10">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="rounded-full bg-sky-400 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-sky-300">
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>

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
              <Link href="/terms-of-service" className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:bg-sky-300">
                Terms of Service
              </Link>
              <Link href="/privacy-policy" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500/60">
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950/80 p-6 shadow-glow">
            <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-sky-400/20 to-transparent" />
            <div className="space-y-4">
              <div className="rounded-3xl bg-slate-900/80 p-3 ring-1 ring-slate-700/50">
                <div className="rounded-2xl bg-slate-800/50 overflow-hidden">
                  <img
                    src={showcaseImages[activeImage].src}
                    alt={showcaseImages[activeImage].alt}
                    className="w-full h-auto"
                  />
                </div>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-sky-300">Product gallery</p>
                    <h2 className="mt-1 text-xl font-semibold text-white">A closer look at the experience</h2>
                  </div>
                  <div className="flex gap-3">
                    {showcaseImages.map((image, index) => (
                      <button
                        key={image.src}
                        type="button"
                        aria-label={`Show slide ${index + 1}`}
                        onClick={() => handleDotClick(index)}
                        className={`h-3 w-3 rounded-full transition cursor-pointer ${
                          index === activeImage
                            ? 'bg-sky-400 scale-125'
                            : 'bg-slate-500 hover:bg-slate-400 hover:scale-110'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-900/80 p-4 ring-1 ring-slate-700/50">
                  <p className="text-xs uppercase tracking-widest text-sky-300">Built for teams</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">See your content planning, brand direction, and campaign snapshots in one polished workspace.</p>
                </div>
                <div className="rounded-3xl bg-slate-900/80 p-4 ring-1 ring-slate-700/50">
                  <p className="text-xs uppercase tracking-widest text-sky-300">Auto-rotating gallery</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">The preview cycles through your uploaded images so visitors can browse the product experience effortlessly.</p>
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
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400">
          <Link href="/terms-of-service" className="transition hover:text-slate-200">Terms of Service</Link>
          <Link href="/privacy-policy" className="transition hover:text-slate-200">Privacy Policy</Link>
        </div>
      </section>
    </main>
  );
}
