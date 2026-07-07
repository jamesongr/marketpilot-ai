'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signInWithGoogle } from '../../lib/firebaseClient';

export default function SignUpPage() {
  const [status, setStatus] = useState('');
  const router = useRouter();

  const handleGoogleSignUp = async () => {
    setStatus('Signing in with Google...');
    try {
      await signInWithGoogle();
      setStatus('Account created. Redirecting...');
      router.push('/onboarding');
    } catch (error: any) {
      console.error(error);
      if (error?.code === 'auth/unauthorized-domain') {
        setStatus('Add localhost to Firebase Authentication > Settings > Authorized domains, then try again.');
      } else if (error?.code === 'auth/popup-blocked') {
        setStatus('Popup was blocked. Please allow popups for this site or try again.');
      } else if (error?.code === 'auth/operation-not-allowed') {
        setStatus('Enable the Google provider in Firebase Authentication > Sign-in method.');
      } else {
        setStatus('Google sign-in failed. Check your Firebase Authentication setup.');
      }
    }
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_35%),_radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.14),_transparent_32%),_linear-gradient(180deg,_#020617_0%,_#020617_100%)] px-6 py-16 text-slate-100 sm:px-10">
      <div className="mx-auto max-w-md rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 shadow-glow">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Create account</p>
          <h1 className="text-3xl font-semibold text-white">Start with Google</h1>
          <p className="text-slate-400">Create your MarketPilot AI workspace using Firebase Google authentication.</p>
        </div>
        <div className="mt-8 space-y-5">
          <button type="button" onClick={handleGoogleSignUp} className="flex w-full items-center justify-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
            <span className="h-5 w-5 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center">G</span>
            Continue with Google
          </button>
          {status && <p className="text-center text-sm text-slate-400">{status}</p>}
          <p className="text-center text-sm text-slate-500">This application uses Google sign-in only. Your Google account will create the profile instantly.</p>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-4 text-left text-sm text-slate-400">
            <p className="font-medium text-slate-200">Before it works locally:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Enable Google in Firebase Authentication &gt; Sign-in method</li>
              <li>Add localhost to Authentication &gt; Settings &gt; Authorized domains</li>
              <li>Allow popups in your browser for this site</li>
            </ul>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-slate-500">Already have an account? <Link href="/signin" className="text-sky-300 hover:text-sky-200">Sign in</Link></p>
      </div>
    </main>
  );
}
