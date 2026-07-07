'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import DashboardShell from '../../components/DashboardShell';
import { signOutUser, auth } from '../../lib/firebaseClient';

export default function SettingsPage() {
  const router = useRouter();
  const [signingOut, setSigningOut] = useState(false);
  const [status, setStatus] = useState('');

  const handleSignOut = async () => {
    setSigningOut(true);
    setStatus('Signing out...');
    try {
      await signOutUser();
      setStatus('Signed out successfully. Redirecting...');
      setTimeout(() => {
        router.push('/signin');
      }, 500);
    } catch (error: any) {
      console.error(error);
      setStatus('Failed to sign out. Please try again.');
      setSigningOut(false);
    }
  };

  return (
    <DashboardShell title="Settings">
      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6 shadow-glow">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Workspace settings</p>
          <div className="mt-5 space-y-4 text-sm text-slate-400">
            <p>Manage account info, notification preferences, and connected user profiles.</p>
            <p>Currently signed in as: <span className="text-sky-300">{auth.currentUser?.email || 'Not authenticated'}</span></p>
          </div>
          <button
            onClick={handleSignOut}
            disabled={signingOut}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-red-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-600 disabled:opacity-50"
          >
            {signingOut ? 'Signing out...' : 'Sign out'}
          </button>
          {status && <p className="mt-3 text-sm text-slate-400">{status}</p>}
        </section>
        <section className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6 shadow-glow">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Data & integrations</p>
          <div className="mt-5 space-y-4 text-sm text-slate-400">
            <p>Storage, brand assets, and actual OAuth flows will require environment variable configuration.</p>
            <p>Use the placeholder API routes under /api/social/* for future OAuth integration.</p>
          </div>
        </section>
      </div>
    </DashboardShell>
  );
}
