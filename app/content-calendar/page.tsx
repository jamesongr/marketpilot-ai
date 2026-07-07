'use client';

import { useState } from 'react';
import DashboardShell from '../../components/DashboardShell';
import { generateWeeklyContentPlan } from '../../lib/aiService';

const defaultPosts = [
  { id: 'event-1', title: 'Book giveaway post', platform: 'Instagram', date: 'Mon', time: '10:00 AM', status: 'Draft' },
  { id: 'event-2', title: 'X reply strategy', platform: 'X / Twitter', date: 'Tue', time: '12:00 PM', status: 'Needs review' },
  { id: 'event-3', title: 'TikTok script idea', platform: 'TikTok', date: 'Wed', time: '6:30 PM', status: 'Scheduled' }
];

export default function ContentCalendarPage() {
  const [plan, setPlan] = useState<Array<any>>([]);
  const [status, setStatus] = useState('');

  const loadPlan = async () => {
    setStatus('Building AI weekly plan...');
    const result = await generateWeeklyContentPlan('LunaReads');
    setPlan(result);
    setStatus('AI weekly plan ready.');
  };

  return (
    <DashboardShell title="Content Calendar">
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <section className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6 shadow-glow">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Calendar overview</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Month and week scheduling</h2>
              </div>
              <button onClick={loadPlan} className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">AI Weekly Plan</button>
            </div>
            <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-slate-800 bg-slate-900/80 p-5">
              <div className="grid gap-3 md:grid-cols-3">
                {defaultPosts.map((item) => (
                  <div key={item.id} className="rounded-3xl bg-slate-950/80 p-4">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{item.platform}</p>
                    <p className="mt-2 text-lg font-semibold text-white">{item.title}</p>
                    <p className="mt-2 text-sm text-slate-400">{item.date} • {item.time} • {item.status}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6 shadow-glow">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Calendar grid</p>
                <h3 className="mt-2 text-xl font-semibold text-white">Drag and drop scheduling</h3>
              </div>
              <p className="text-sm text-slate-400">Click a date to add a post or move items later.</p>
            </div>
            <div className="mt-6 grid gap-3 md:grid-cols-7">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4 text-center">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{day}</p>
                  <div className="mt-3 min-h-[90px] rounded-3xl bg-slate-950/80 p-3 text-sm text-slate-300">
                    {defaultPosts.filter((post) => post.date === day).map((item) => (
                      <div key={item.id} className="mt-2 rounded-2xl bg-slate-800/90 p-2 text-left text-xs text-slate-200">{item.title}</div>
                    ))}
                    {day === 'Thu' && <div className="mt-2 rounded-2xl bg-sky-500/10 p-2 text-xs text-sky-200">AI plan post</div>}
                  </div>
                </div>
              ))}
            </div>
          </section>
          {status && <p className="text-sm text-slate-400">{status}</p>}
          {plan.length > 0 && (
            <section className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6 shadow-glow">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Suggested week</p>
              <div className="mt-5 grid gap-4">
                {plan.map((item) => (
                  <div key={item.day} className="rounded-3xl bg-slate-900/80 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm uppercase tracking-[0.25em] text-slate-400">{item.day}</p>
                      <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">Suggested</span>
                    </div>
                    <p className="mt-2 text-lg font-semibold text-white">{item.title}</p>
                    <p className="mt-2 text-sm text-slate-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6 shadow-glow">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Filters</p>
            <div className="mt-5 space-y-3">
              <button className="w-full rounded-3xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-left text-sm text-slate-100">All platforms</button>
              <button className="w-full rounded-3xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-left text-sm text-slate-100">LunaReads</button>
              <button className="w-full rounded-3xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-left text-sm text-slate-100">Draft only</button>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6 shadow-glow">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Quick tip</p>
            <p className="mt-3 text-slate-400">AI suggested plans help you maintain consistent posting without losing your brand voice.</p>
          </div>
        </aside>
      </div>
    </DashboardShell>
  );
}
