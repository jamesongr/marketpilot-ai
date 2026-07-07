import DashboardShell from '../../components/DashboardShell';

const stats = [
  { label: 'Total followers', value: '42.3K' },
  { label: 'Impressions', value: '153K' },
  { label: 'Engagement rate', value: '4.8%' },
  { label: 'Best posting time', value: '8:00 PM' }
];

export default function AnalyticsPage() {
  return (
    <DashboardShell title="Analytics">
      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="space-y-6">
          <section className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6 shadow-glow">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Overview</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5">
                  <p className="text-sm text-slate-400">{stat.label}</p>
                  <p className="mt-3 text-2xl font-semibold text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6 shadow-glow">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Top performing post</p>
            <div className="mt-5 rounded-3xl bg-slate-900/80 p-6">
              <p className="text-sm text-slate-400">Instagram carousel</p>
              <p className="mt-3 text-xl font-semibold text-white">Cozy reading tips for busy BookTok fans</p>
              <p className="mt-3 text-slate-400">Best time: Tuesday 7:00 PM — 21.4K impressions and 6.1% engagement.</p>
            </div>
          </section>
        </div>
        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6 shadow-glow">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Filters</p>
            <div className="mt-5 space-y-3">
              <button className="w-full rounded-3xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-left text-sm text-slate-100">Last 7 days</button>
              <button className="w-full rounded-3xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-left text-sm text-slate-100">Last 30 days</button>
              <button className="w-full rounded-3xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-left text-sm text-slate-100">Platform</button>
              <button className="w-full rounded-3xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-left text-sm text-slate-100">Brand</button>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6 shadow-glow">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Why analytics matter</p>
            <p className="mt-3 text-slate-400">Use insights from each platform to refine posting cadence, tone, and creative formats for your audience.</p>
          </div>
        </aside>
      </div>
    </DashboardShell>
  );
}
