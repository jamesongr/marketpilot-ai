import DashboardShell from '../../components/DashboardShell';

export default function BillingPage() {
  return (
    <DashboardShell title="Billing">
      <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <section className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6 shadow-glow">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Current plan</p>
          <div className="mt-5 rounded-[1.75rem] border border-slate-800 bg-slate-900/80 p-6">
            <p className="text-sm text-slate-400">Creator Plan</p>
            <p className="mt-3 text-3xl font-semibold text-white">$19 / month</p>
            <p className="mt-3 text-slate-400">Includes unlimited content ideas, up to 3 brands, and 5 connected accounts.</p>
          </div>
          <div className="mt-8 grid gap-4">
            <button className="rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">Update billing</button>
            <button className="rounded-full border border-slate-700 bg-slate-900 px-5 py-3 text-sm text-slate-100 transition hover:border-slate-500">Manage subscription</button>
          </div>
          <div className="mt-8 rounded-[1.75rem] border border-slate-800 bg-slate-900/80 p-6 text-sm text-slate-400">
            <p>Stripe checkout integration is a placeholder. Real payments require STRIPE_SECRET_KEY and NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY in environment variables.</p>
          </div>
        </section>
        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6 shadow-glow">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Billing details</p>
            <div className="mt-5 text-sm text-slate-400">
              <p>Plan renewal date: 30 days from now</p>
              <p className="mt-3">Invoices and receipts will appear here after connecting Stripe.</p>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6 shadow-glow">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Switch plans</p>
            <p className="mt-3 text-slate-400">Upgrade to Growth or Business for advanced analytics, team members, and priority support.</p>
          </div>
        </aside>
      </div>
    </DashboardShell>
  );
}
