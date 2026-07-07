import Link from 'next/link';

const plans = [
  { name: 'Free', price: '$0', description: '20 AI generations / month, 1 brand, 1 connected account, draft content only', badge: 'Best for testing' },
  { name: 'Creator', price: '$19/mo', description: 'Unlimited ideas, 3 brands, 5 accounts, calendar, image concepts, basic analytics', badge: 'Popular' },
  { name: 'Growth', price: '$49/mo', description: 'Unlimited brands/accounts, advanced analytics, weekly plans, engagement tools', badge: 'Best value' },
  { name: 'Business', price: '$99/mo', description: 'Teams, client management, white-label reports, premium support', badge: 'Enterprise-ready' }
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100 sm:px-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="rounded-[2rem] border border-slate-800 bg-slate-900/95 p-10 shadow-glow text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Pricing</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Plans for solo creators and growth teams.</h1>
          <p className="mt-4 text-slate-400">Scale your social strategy with the right plan for your brands, platforms, and content velocity.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-4">
          {plans.map((plan) => (
            <div key={plan.name} className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-7 shadow-glow">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">{plan.name}</h2>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-sky-300">{plan.badge}</span>
              </div>
              <p className="mt-5 text-3xl font-semibold text-white">{plan.price}</p>
              <p className="mt-4 text-sm text-slate-400">{plan.description}</p>
              <button className="mt-8 w-full rounded-full bg-sky-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">Select plan</button>
            </div>
          ))}
        </div>
        <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 shadow-glow">
          <p className="text-slate-300">Stripe checkout placeholder — integration requires <span className="text-white">STRIPE_SECRET_KEY</span> and <span className="text-white">NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY</span>.</p>
        </div>
        <div className="text-center text-sm text-slate-400">
          <Link href="/signup" className="text-sky-300 hover:text-sky-200">Start your free account</Link>
        </div>
      </div>
    </main>
  );
}
