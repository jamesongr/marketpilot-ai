'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { saveBrandProfile } from '../../lib/firebaseClient';

const voices = ['Professional', 'Friendly', 'Funny', 'Bold', 'Luxury', 'Casual', 'Educational', 'BookTok / Gen Z'];
const platforms = ['X / Twitter', 'Instagram', 'TikTok', 'Facebook', 'LinkedIn'];

export default function OnboardingPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    brandName: '',
    website: '',
    industry: '',
    description: '',
    audience: '',
    voice: 'Friendly',
    goals: '',
    postsPerWeek: '3',
    platforms: ['Instagram']
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('Saving brand profile to Firebase...');

    try {
      const brandId = await saveBrandProfile({
        brandName: form.brandName,
        website: form.website,
        industry: form.industry,
        description: form.description,
        audience: form.audience,
        brandVoice: form.voice,
        socialGoals: form.goals,
        postsPerWeek: Number(form.postsPerWeek),
        preferredPlatforms: form.platforms,
        createdFrom: 'onboarding'
      });

      setStatus(`Brand profile saved to Firebase with ID ${brandId}.`);
      router.push('/dashboard');
    } catch (error: any) {
      console.error(error);
      setStatus(error?.message || 'Unable to save brand profile. Please sign in with Google first.');
    }
  };

  const togglePlatform = (platform: string) => {
    setForm((current) => ({
      ...current,
      platforms: current.platforms.includes(platform)
        ? current.platforms.filter((item) => item !== platform)
        : [...current.platforms, platform]
    }));
  };

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100 sm:px-10">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-800 bg-slate-900/95 p-8 shadow-glow">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Onboarding</p>
          <h1 className="text-4xl font-semibold text-white">Tell us about your business</h1>
          <p className="text-slate-400">This helps the AI assistant learn your brand, tone, audience, and goals.</p>
        </div>
        <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
          <div className="grid gap-6 lg:grid-cols-2">
            <label className="block text-sm text-slate-300">
              Business or brand name
              <input value={form.brandName} onChange={(event) => setForm({ ...form, brandName: event.target.value })} className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-400/80" placeholder="Example Books" required />
            </label>
            <label className="block text-sm text-slate-300">
              Website URL
              <input value={form.website} onChange={(event) => setForm({ ...form, website: event.target.value })} className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-400/80" placeholder="https://example.com" />
            </label>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <label className="block text-sm text-slate-300">
              Industry
              <input value={form.industry} onChange={(event) => setForm({ ...form, industry: event.target.value })} className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-400/80" placeholder="Mobile reading app" required />
            </label>
            <label className="block text-sm text-slate-300">
              Target audience
              <input value={form.audience} onChange={(event) => setForm({ ...form, audience: event.target.value })} className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-400/80" placeholder="Fantasy readers, BookTok fans, self-care users" required />
            </label>
          </div>
          <label className="block text-sm text-slate-300">
            Description of the business
            <textarea value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} className="mt-2 h-28 w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-400/80" placeholder="Tell the AI what makes your brand unique." required />
          </label>
          <div className="grid gap-6 lg:grid-cols-3">
            <label className="block text-sm text-slate-300">
              Brand voice
              <select value={form.voice} onChange={(event) => setForm({ ...form, voice: event.target.value })} className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-400/80">
                {voices.map((voice) => <option key={voice} value={voice}>{voice}</option>)}
              </select>
            </label>
            <label className="block text-sm text-slate-300">
              Social goals
              <input value={form.goals} onChange={(event) => setForm({ ...form, goals: event.target.value })} className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-400/80" placeholder="Grow audience and share app updates" />
            </label>
            <label className="block text-sm text-slate-300">
              Posts per week
              <input value={form.postsPerWeek} onChange={(event) => setForm({ ...form, postsPerWeek: event.target.value })} className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-400/80" type="number" min="1" />
            </label>
          </div>
          <div className="space-y-3 rounded-[1.75rem] border border-slate-800 bg-slate-950/70 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Preferred platforms</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {platforms.map((platform) => (
                <button key={platform} type="button" onClick={() => togglePlatform(platform)} className={`rounded-3xl border px-4 py-3 text-left text-sm transition ${form.platforms.includes(platform) ? 'border-sky-400 bg-sky-400/10 text-white' : 'border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500'}`}>
                  {platform}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button type="submit" className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">Save brand profile</button>
            <Link href="/dashboard" className="text-sm text-slate-400 hover:text-slate-100">Skip and go to dashboard</Link>
          </div>
          {status && <p className="text-sm text-slate-400">{status}</p>}
        </form>
      </div>
    </main>
  );
}
