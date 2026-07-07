'use client';

import { useState } from 'react';
import DashboardShell from '../../components/DashboardShell';
import { brands } from '../../lib/mockData';

export default function BrandKitPage() {
  const [selectedBrand] = useState(brands[0]);
  const [brandMemory, setBrandMemory] = useState([
    'We are friendly and exciting.',
    'Avoid sounding overly corporate.',
    'Our audience is mostly women ages 18–35 who enjoy fantasy romance books.',
    'Mention our mobile app naturally.',
    'Do not use profanity.',
    'Use casual BookTok-style language.'
  ]);
  const [newMemory, setNewMemory] = useState('');

  const addMemory = () => {
    if (!newMemory.trim()) return;
    setBrandMemory((current) => [newMemory.trim(), ...current]);
    setNewMemory('');
  };

  return (
    <DashboardShell title="Brand Kit">
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <section className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6 shadow-glow">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Brand profile</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">{selectedBrand.name}</h2>
              </div>
              <span className="rounded-full bg-slate-800 px-3 py-2 text-sm text-slate-300">{selectedBrand.brandVoice}</span>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-900/80 p-5">
                <p className="text-sm text-slate-400">Website</p>
                <p className="mt-2 text-white">{selectedBrand.website}</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-5">
                <p className="text-sm text-slate-400">Audience</p>
                <p className="mt-2 text-white">{selectedBrand.audience}</p>
              </div>
            </div>
            <div className="mt-6 rounded-3xl bg-slate-900/80 p-5">
              <p className="text-sm text-slate-400">Description</p>
              <p className="mt-2 text-slate-200">A reading app for fantasy romance fans who love BookTok-style social campaigns and cozy mobile reading experiences.</p>
            </div>
          </section>
          <section className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6 shadow-glow">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Brand memory</p>
            <p className="mt-2 text-slate-400">Save the values, phrases, and topics the AI should use for this brand.</p>
            <div className="mt-5 grid gap-3">
              {brandMemory.map((memory) => (
                <div key={memory} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4 text-slate-200">{memory}</div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input value={newMemory} onChange={(event) => setNewMemory(event.target.value)} className="w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-400/80" placeholder="Add new brand memory" />
              <button type="button" onClick={addMemory} className="inline-flex items-center justify-center rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">Save memory</button>
            </div>
          </section>
          <section className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6 shadow-glow">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Brand guidelines</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-900/80 p-5">
                <p className="text-sm text-slate-400">Main competitors</p>
                <p className="mt-2 text-slate-200">Other reading and storytelling apps, BookTok content creators.</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-5">
                <p className="text-sm text-slate-400">Topics to avoid</p>
                <p className="mt-2 text-slate-200">Avoid hard sales copy, corporate jargon, and anything too aggressive.</p>
              </div>
            </div>
          </section>
        </div>
        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6 shadow-glow">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Asset uploads</p>
            <div className="mt-5 space-y-3">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4">
                <p className="text-sm text-slate-400">Logo</p>
                <p className="mt-2 text-slate-200">Upload a brand mark for image concepts and social visuals.</p>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4">
                <p className="text-sm text-slate-400">Product screenshots</p>
                <p className="mt-2 text-slate-200">Store app mockups to help AI generate marketing visuals.</p>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6 shadow-glow">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Save instructions</p>
            <p className="mt-3 text-slate-400">The AI assistant will prioritize this brand voice when generating copy and replies.</p>
          </div>
        </aside>
      </div>
    </DashboardShell>
  );
}
