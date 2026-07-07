import type { Route } from 'next';
import Link from 'next/link';
import { Bell, LayoutDashboard, BookOpen, CalendarDays, ImageIcon, Users, Sparkles, ChartBar, MessageSquare, Settings, CreditCard } from 'lucide-react';

const navItems: Array<{ href: Route; label: string; icon: typeof LayoutDashboard }> = [
  { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
  { href: '/content-studio', label: 'Content Studio', icon: Sparkles },
  { href: '/content-calendar', label: 'Content Calendar', icon: CalendarDays },
  { href: '/social-accounts', label: 'Social Accounts', icon: Users },
  { href: '/brand-kit', label: 'Brand Kit', icon: BookOpen },
  { href: '/ai-assistant', label: 'AI Assistant', icon: MessageSquare },
  { href: '/analytics', label: 'Analytics', icon: ChartBar },
  { href: '/billing', label: 'Billing', icon: CreditCard },
  { href: '/settings', label: 'Settings', icon: Settings }
];

export default function DashboardShell({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="grid min-h-screen gap-6 px-4 py-5 lg:grid-cols-[280px_1fr] xl:px-10">
        <aside className="rounded-[2rem] border border-slate-800 bg-slate-900/95 p-6 shadow-glow">
          <div className="flex items-center gap-3 rounded-3xl bg-slate-950/95 px-4 py-4 ring-1 ring-slate-700/60">
            <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-sky-400/10 text-sky-300">M</div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">MarketPilot AI</p>
              <p className="text-sm text-slate-300">Brand manager</p>
            </div>
          </div>
          <nav className="mt-8 space-y-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="group flex items-center gap-3 rounded-3xl px-4 py-3 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white">
                <item.icon className="h-5 w-5 transition group-hover:text-sky-300" />
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-10 rounded-[1.75rem] border border-slate-800 bg-slate-950/70 p-5">
            <p className="text-sm uppercase tracking-[0.25em] text-sky-300">Need help?</p>
            <p className="mt-3 text-sm text-slate-400">Use the AI Assistant to create posts, campaigns, or reply suggestions for any connected account.</p>
            <Link href="/ai-assistant" className="mt-4 inline-flex items-center justify-center rounded-full bg-sky-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">Open assistant</Link>
          </div>
        </aside>
        <section className="space-y-6">
          <header className="flex flex-col gap-4 rounded-[2rem] border border-slate-800 bg-slate-900/95 px-6 py-5 shadow-glow sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">{title}</p>
              <h1 className="mt-2 text-3xl font-semibold text-white">{title}</h1>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500">Create Content</button>
              <button className="inline-flex items-center justify-center rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">Brand switcher</button>
              <button className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-slate-300 transition hover:bg-slate-800"><Bell className="h-5 w-5" /></button>
            </div>
          </header>
          {children}
        </section>
      </div>
    </div>
  );
}
