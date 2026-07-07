'use client';

import Link from 'next/link';

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_35%),_radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.14),_transparent_32%),_linear-gradient(180deg,_#020617_0%,_#020617_100%)] px-6 py-16 text-slate-100 sm:px-10">
      <div className="mx-auto max-w-md rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 shadow-glow">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Password reset</p>
          <h1 className="text-3xl font-semibold text-white">Google sign-in only</h1>
          <p className="text-slate-400">This app uses Firebase Google authentication only. Reset your password through your Google account.</p>
        </div>
        <div className="mt-8 text-center text-sm text-slate-400">
          <p>If you need to update your Google account password, please visit your Google account settings.</p>
        </div>
        <div className="mt-6 text-center text-sm text-slate-500">
          <Link href="/signin" className="text-sky-300 hover:text-sky-200">Return to sign in</Link>
        </div>
      </div>
    </main>
  );
}
