'use client';

import DashboardShell from '../../components/DashboardShell';
import { overviewMetrics, contentIdeas, brands } from '../../lib/mockData';
import { Sparkles, RefreshCcw } from 'lucide-react';

const metricColors = [
  { bg: 'bg-gradient-to-br from-cyan-950/60 to-blue-950/40', border: 'border-cyan-700/50', label: 'text-cyan-300', value: 'text-cyan-100', badge: 'bg-cyan-900/60 text-cyan-300' },
  { bg: 'bg-gradient-to-br from-purple-950/60 to-indigo-950/40', border: 'border-purple-700/50', label: 'text-purple-300', value: 'text-purple-100', badge: 'bg-purple-900/60 text-purple-300' },
  { bg: 'bg-gradient-to-br from-emerald-950/60 to-teal-950/40', border: 'border-emerald-700/50', label: 'text-emerald-300', value: 'text-emerald-100', badge: 'bg-emerald-900/60 text-emerald-300' },
  { bg: 'bg-gradient-to-br from-rose-950/60 to-pink-950/40', border: 'border-rose-700/50', label: 'text-rose-300', value: 'text-rose-100', badge: 'bg-rose-900/60 text-rose-300' },
];

export default function DashboardPage() {
  return (
    <DashboardShell title="Overview">
      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
        <div className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {overviewMetrics.map((metric, idx) => {
              const colors = metricColors[idx % metricColors.length];
              return (
                <div key={metric.name} className={`rounded-[1.75rem] border ${colors.border} ${colors.bg} p-5 shadow-glow backdrop-blur-sm transition hover:shadow-lg hover:scale-105`}>
                  <p className={`text-sm uppercase tracking-[0.3em] ${colors.label} font-semibold`}>{metric.name}</p>
                  <div className="mt-4 flex items-end justify-between gap-2">
                    <div>
                      <p className={`text-3xl font-bold ${colors.value}`}>{metric.value}</p>
                      <p className="mt-2 text-sm text-slate-400">{metric.description}</p>
                    </div>
                    <span className={`rounded-full ${colors.badge} px-3 py-1 text-xs font-semibold`}>{metric.delta}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <section className="rounded-[2rem] border border-cyan-700/30 bg-gradient-to-br from-slate-950/95 via-cyan-950/10 to-slate-950/95 p-6 shadow-glow backdrop-blur-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300 font-semibold">Upcoming schedule</p>
                <h2 className="mt-3 text-2xl font-bold bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">Today's plan</h2>
              </div>
              <button className="inline-flex items-center gap-2 rounded-full border border-cyan-700/50 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200 transition hover:bg-cyan-500/20 hover:border-cyan-600"><RefreshCcw className="h-4 w-4" /> Refresh</button>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-gradient-to-br from-blue-900/30 to-cyan-900/20 border border-cyan-700/30 p-5 backdrop-blur-sm hover:border-cyan-600/50 transition">
                <p className="text-sm text-cyan-200 font-medium">Next scheduled post</p>
                <p className="mt-3 text-lg font-semibold text-white">Instagram carousel for BookTok launch</p>
                <p className="mt-2 text-sm text-cyan-300/70">Scheduled for today at 5:30 PM</p>
              </div>
              <div className="rounded-3xl bg-gradient-to-br from-purple-900/30 to-indigo-900/20 border border-purple-700/30 p-5 backdrop-blur-sm hover:border-purple-600/50 transition">
                <p className="text-sm text-purple-200 font-medium">Best-performing platform</p>
                <p className="mt-3 text-3xl font-bold text-purple-100">Instagram</p>
                <p className="mt-2 text-sm text-purple-300/70">43% engagement lift this week</p>
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] border border-emerald-700/30 bg-gradient-to-br from-slate-950/95 via-emerald-950/10 to-slate-950/95 p-6 shadow-glow backdrop-blur-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-300 font-semibold">AI suggestions</p>
                <h2 className="mt-3 text-2xl font-bold bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent">Content ideas</h2>
              </div>
              <button className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-700/50 px-4 py-2 text-sm text-emerald-200 transition hover:bg-emerald-500/20 hover:border-emerald-600"><Sparkles className="h-4 w-4" /> Refresh ideas</button>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {contentIdeas.map((idea, idx) => (
                <div key={idea.id} className={`rounded-3xl border ${idx % 2 === 0 ? 'border-emerald-700/30 bg-gradient-to-br from-emerald-900/30 to-teal-900/20' : 'border-rose-700/30 bg-gradient-to-br from-rose-900/30 to-pink-900/20'} p-5 backdrop-blur-sm hover:shadow-lg transition`}>
                  <p className={`text-sm uppercase tracking-[0.3em] ${idx % 2 === 0 ? 'text-emerald-300' : 'text-rose-300'} font-semibold`}>{idea.platform}</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">{idea.title}</h3>
                  <p className="mt-2 text-slate-300">{idea.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs">
                    {idea.labels.map((label) => <span key={label} className="rounded-full bg-slate-700/40 px-2 py-1 text-slate-200">{label}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-sky-700/30 bg-gradient-to-br from-slate-950/95 via-sky-950/10 to-slate-950/95 p-6 shadow-glow backdrop-blur-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300 font-semibold">Brand snapshot</p>
            <div className="mt-6 space-y-4">
              {brands.map((brand, idx) => (
                <div key={brand.id} className={`rounded-3xl border p-4 backdrop-blur-sm hover:shadow-lg transition ${idx % 2 === 0 ? 'border-cyan-700/30 bg-gradient-to-br from-cyan-900/25 to-blue-900/15' : 'border-purple-700/30 bg-gradient-to-br from-purple-900/25 to-indigo-900/15'}`}>
                  <p className="text-sm text-slate-400">{brand.name}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{brand.industry}</p>
                  <p className="mt-2 text-sm text-slate-300">{brand.audience}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-sky-700/30 bg-gradient-to-br from-slate-950/95 via-sky-950/10 to-slate-950/95 p-6 shadow-glow backdrop-blur-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300 font-semibold">Quick links</p>
            <div className="mt-5 grid gap-3">
              <button className="rounded-3xl border border-sky-700/50 bg-sky-500/10 px-4 py-3 text-left text-sm font-medium text-sky-200 transition hover:bg-sky-500/20 hover:border-sky-600 hover:shadow-lg">Open Content Studio</button>
              <button className="rounded-3xl border border-sky-700/50 bg-sky-500/10 px-4 py-3 text-left text-sm font-medium text-sky-200 transition hover:bg-sky-500/20 hover:border-sky-600 hover:shadow-lg">Review Social Accounts</button>
              <button className="rounded-3xl border border-sky-700/50 bg-sky-500/10 px-4 py-3 text-left text-sm font-medium text-sky-200 transition hover:bg-sky-500/20 hover:border-sky-600 hover:shadow-lg">View analytics</button>
            </div>
          </div>
        </aside>
      </div>
    </DashboardShell>
  );
}

