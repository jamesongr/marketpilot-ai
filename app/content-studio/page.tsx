'use client';

import { FormEvent, useState } from 'react';
import DashboardShell from '../../components/DashboardShell';
import { brands } from '../../lib/mockData';
import { generateSocialPost } from '../../lib/aiService';
import { Copy, Edit3, RefreshCcw, Plus } from 'lucide-react';

const platforms = ['X / Twitter', 'Instagram', 'TikTok', 'Facebook', 'LinkedIn'];
const contentTypes = ['Product announcement', 'Instagram caption', 'TikTok script', 'LinkedIn post', 'Facebook post'];
const tones = ['Friendly', 'Professional', 'Casual', 'Bold', 'Luxury', 'BookTok / Gen Z'];

export default function ContentStudioPage() {
  const [form, setForm] = useState({ brand: brands[0].id, platform: platforms[1], contentType: contentTypes[1], goal: 'Grow engagement', topic: 'fantasy reading apps', tone: 'Friendly', cta: 'Download now', emojis: true, hashtags: true, links: false, variations: 2, useAssets: true });
  const [results, setResults] = useState<Array<any>>([]);
  const [status, setStatus] = useState('');

  const handleGenerate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('Generating content...');
    const generated = await generateSocialPost({
      brandName: brands.find((item) => item.id === form.brand)?.name || 'MarketPilot',
      platform: form.platform,
      goal: form.goal,
      topic: form.topic,
      tone: form.tone,
      includeHashtags: form.hashtags,
      includeEmojis: form.emojis,
      variations: form.variations
    });
    setResults(generated);
    setStatus('Generated content ready.');
  };

  return (
    <DashboardShell title="Content Studio">
      <div className="space-y-6">
        <section className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6 shadow-glow">
          <h2 className="text-xl font-semibold text-white">Generate social copy and campaign ideas</h2>
          <p className="mt-2 text-slate-400">Choose a brand, platform, tone, and ask the AI for multiple post variations.</p>
          <form className="mt-6 grid gap-4 lg:grid-cols-2" onSubmit={handleGenerate}>
            <label className="block text-sm text-slate-300">
              Select brand
              <select value={form.brand} onChange={(event) => setForm({ ...form, brand: event.target.value })} className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-400/80">
                {brands.map((brand) => <option key={brand.id} value={brand.id}>{brand.name}</option>)}
              </select>
            </label>
            <label className="block text-sm text-slate-300">
              Select platform
              <select value={form.platform} onChange={(event) => setForm({ ...form, platform: event.target.value })} className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-400/80">
                {platforms.map((platform) => <option key={platform} value={platform}>{platform}</option>)}
              </select>
            </label>
            <label className="block text-sm text-slate-300">
              Content type
              <select value={form.contentType} onChange={(event) => setForm({ ...form, contentType: event.target.value })} className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-400/80">
                {contentTypes.map((type) => <option key={type} value={type}>{type}</option>)}
              </select>
            </label>
            <label className="block text-sm text-slate-300">
              Tone
              <select value={form.tone} onChange={(event) => setForm({ ...form, tone: event.target.value })} className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-400/80">
                {tones.map((tone) => <option key={tone} value={tone}>{tone}</option>)}
              </select>
            </label>
            <label className="block text-sm text-slate-300">
              Topic
              <input value={form.topic} onChange={(event) => setForm({ ...form, topic: event.target.value })} className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-400/80" placeholder="Write about our new fantasy reading feature" />
            </label>
            <label className="block text-sm text-slate-300">
              Call to action
              <input value={form.cta} onChange={(event) => setForm({ ...form, cta: event.target.value })} className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-400/80" placeholder="Download now" />
            </label>
            <div className="grid gap-3 sm:grid-cols-2 lg:col-span-2">
              <label className="flex items-center gap-3 rounded-3xl border border-slate-700 bg-slate-950 px-4 py-4">
                <input type="checkbox" checked={form.emojis} onChange={(event) => setForm({ ...form, emojis: event.target.checked })} className="h-4 w-4 rounded border-slate-600 bg-slate-900 text-sky-400" />
                <span className="text-sm text-slate-300">Include emojis</span>
              </label>
              <label className="flex items-center gap-3 rounded-3xl border border-slate-700 bg-slate-950 px-4 py-4">
                <input type="checkbox" checked={form.hashtags} onChange={(event) => setForm({ ...form, hashtags: event.target.checked })} className="h-4 w-4 rounded border-slate-600 bg-slate-900 text-sky-400" />
                <span className="text-sm text-slate-300">Include hashtags</span>
              </label>
              <label className="flex items-center gap-3 rounded-3xl border border-slate-700 bg-slate-950 px-4 py-4">
                <input type="checkbox" checked={form.links} onChange={(event) => setForm({ ...form, links: event.target.checked })} className="h-4 w-4 rounded border-slate-600 bg-slate-900 text-sky-400" />
                <span className="text-sm text-slate-300">Include links</span>
              </label>
              <label className="block text-sm text-slate-300">
                Variations
                <input value={form.variations} onChange={(event) => setForm({ ...form, variations: Number(event.target.value) })} className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-400/80" type="number" min="1" max="5" />
              </label>
            </div>
            <button type="submit" className="lg:col-span-2 inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">Generate content</button>
          </form>
          {status && <p className="mt-4 text-sm text-slate-400">{status}</p>}
        </section>
        <section className="grid gap-5 xl:grid-cols-2">
          {results.map((item) => (
            <article key={item.id} className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-5 shadow-glow">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-sky-300">{item.platform}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{form.contentType}</h3>
                </div>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">{item.suggestedTime}</span>
              </div>
              <p className="mt-4 text-slate-300">{item.content}</p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-400">
                <span>Concept: {item.concept}</span>
                <span className="rounded-full bg-slate-800 px-2 py-1">{item.hashtags.length} hashtags</span>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-100 transition hover:border-slate-500"><Edit3 className="h-4 w-4" /> Edit</button>
                <button className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-100 transition hover:border-slate-500"><Copy className="h-4 w-4" /> Copy</button>
                <button className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-100 transition hover:border-slate-500"><Plus className="h-4 w-4" /> Save draft</button>
              </div>
            </article>
          ))}
        </section>
      </div>
    </DashboardShell>
  );
}
