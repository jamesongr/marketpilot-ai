'use client';

import { useEffect, useState } from 'react';
import DashboardShell from '../../components/DashboardShell';
import { auth, loadSocialAccountsForCurrentUser, saveSocialAccountConnection, type SocialAccountConnection } from '../../lib/firebaseClient';
import { CheckCircle2, Link2, ShieldCheck, RefreshCcw } from 'lucide-react';

const defaultAccounts: SocialAccountConnection[] = [
  { id: 'x', platform: 'X / Twitter', connected: false, accountName: '', lastSync: 'Never', autoPost: false, approvalRequired: true, permissions: 'Read profile, publish with approval, monitor replies.' },
  { id: 'instagram', platform: 'Instagram', connected: false, accountName: '', lastSync: 'Never', autoPost: false, approvalRequired: true, permissions: 'Read profile, publish with approval, monitor replies.' },
  { id: 'tiktok', platform: 'TikTok', connected: false, accountName: '', lastSync: 'Never', autoPost: false, approvalRequired: true, permissions: 'Read profile, publish with approval, monitor replies.' },
  { id: 'facebook', platform: 'Facebook', connected: false, accountName: '', lastSync: 'Never', autoPost: false, approvalRequired: true, permissions: 'Read profile, publish with approval, monitor replies.' },
  { id: 'linkedin', platform: 'LinkedIn', connected: false, accountName: '', lastSync: 'Never', autoPost: false, approvalRequired: true, permissions: 'Read profile, publish with approval, monitor replies.' },
];

export default function SocialAccountsPage() {
  const [accounts, setAccounts] = useState<SocialAccountConnection[]>(defaultAccounts);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('');
  const [busyId, setBusyId] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        setAccounts(defaultAccounts.map((account) => ({ ...account })));
        setLoading(false);
        setStatus('Sign in to save your connected accounts to Firebase.');
        return;
      }

      try {
        setLoading(true);
        const savedAccounts = await loadSocialAccountsForCurrentUser();
        setAccounts(savedAccounts.length ? savedAccounts : defaultAccounts.map((account) => ({ ...account })));
        setStatus('Loaded your saved social account connections.');
      } catch (error) {
        console.error(error);
        setStatus('Unable to load your saved social account connections right now.');
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const persistAccount = async (account: SocialAccountConnection, updates: Partial<SocialAccountConnection>) => {
    if (!auth.currentUser) {
      setStatus('Please sign in before saving account connections.');
      return;
    }

    setBusyId(account.id);
    const nextAccount = { ...account, ...updates };
    setAccounts((current) => current.map((item) => item.id === account.id ? nextAccount : item));

    try {
      await saveSocialAccountConnection(account.platform, {
        connected: nextAccount.connected,
        accountName: nextAccount.accountName,
        lastSync: nextAccount.lastSync,
        autoPost: nextAccount.autoPost,
        approvalRequired: nextAccount.approvalRequired,
        permissions: nextAccount.permissions,
        providerEmail: auth.currentUser?.email,
      });
      setStatus(`${account.platform} was saved to Firebase for ${auth.currentUser?.email || 'your account'}.`);
    } catch (error) {
      console.error(error);
      setStatus(`Unable to save ${account.platform} to Firebase.`);
      setAccounts((current) => current.map((item) => item.id === account.id ? account : item));
    } finally {
      setBusyId(null);
    }
  };

  const openSocialConnectPopup = (account: SocialAccountConnection) => {
    if (!auth.currentUser) {
      setStatus('Please sign in before connecting a social account.');
      return;
    }

    const popup = window.open(
      `/api/social/${account.id}/connect`,
      `social-connect-${account.id}`,
      'width=600,height=700,menubar=no,toolbar=no,location=no,status=no'
    );

    if (!popup) {
      setStatus('Popup blocked. Please allow popups for this site and try again.');
      return;
    }

    popup.focus();
    setStatus(`Opening ${account.platform} connection popup...`);
  };

  const toggleApproval = async (account: SocialAccountConnection) => {
    await persistAccount(account, {
      approvalRequired: !account.approvalRequired,
    });
  };

  const toggleAutoPost = async (account: SocialAccountConnection) => {
    await persistAccount(account, {
      autoPost: !account.autoPost,
    });
  };

  return (
    <DashboardShell title="Social Accounts">
      <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6 shadow-glow">
        <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Firebase sync</p>
        <p className="mt-3 text-slate-400">{loading ? 'Loading saved connections…' : status || 'Your social accounts are synced to your Firebase user profile.'}</p>
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        {accounts.map((account) => (
          <div key={account.id} className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6 shadow-glow">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-sky-300">{account.platform}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{account.connected ? 'Connected' : 'Not connected'}</h3>
              </div>
              <div className="rounded-full bg-slate-900/80 px-3 py-2 text-sm text-slate-300">{account.connected ? 'Live' : 'Saved'}</div>
            </div>
            <div className="mt-5 grid gap-3">
              <div className="rounded-3xl bg-slate-900/80 p-4">
                <p className="text-sm text-slate-400">Account</p>
                <p className="mt-2 text-white">{account.connected ? account.accountName || 'Connected account' : 'No account connected'}</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-4">
                <p className="text-sm text-slate-400">Last sync</p>
                <p className="mt-2 text-white">{account.lastSync}</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-4">
                <p className="text-sm text-slate-400">Permissions</p>
                <p className="mt-2 text-white">{account.permissions}</p>
              </div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <button onClick={() => openSocialConnectPopup(account)} disabled={busyId === account.id} className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300 disabled:cursor-not-allowed disabled:opacity-70">
                <Link2 className="h-4 w-4" /> {account.connected ? 'Reconnect' : 'Connect Account'}
              </button>
              <button onClick={() => toggleApproval(account)} disabled={busyId === account.id} className={`inline-flex items-center justify-center gap-2 rounded-full border px-4 py-3 text-sm transition ${account.approvalRequired ? 'border-slate-700 bg-slate-900 text-slate-100 hover:border-slate-500' : 'border-emerald-700/60 bg-emerald-500/10 text-emerald-200'}`}>
                <ShieldCheck className="h-4 w-4" /> {account.approvalRequired ? 'Require approval' : 'Approval off'}
              </button>
              <button onClick={() => toggleAutoPost(account)} disabled={busyId === account.id} className={`inline-flex items-center justify-center gap-2 rounded-full border px-4 py-3 text-sm transition ${account.autoPost ? 'border-emerald-700/60 bg-emerald-500/10 text-emerald-200' : 'border-slate-700 bg-slate-900 text-slate-100 hover:border-slate-500'}`}>
                <CheckCircle2 className="h-4 w-4" /> {account.autoPost ? 'Auto-posting on' : 'Auto-posting off'}
              </button>
              <button onClick={() => persistAccount(account, { lastSync: 'Synced now' })} disabled={busyId === account.id} className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 transition hover:border-slate-500 disabled:cursor-not-allowed disabled:opacity-70">
                <RefreshCcw className="h-4 w-4" /> Sync status
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6 shadow-glow">
        <p className="text-sm uppercase tracking-[0.3em] text-sky-300">OAuth reminder</p>
        <p className="mt-3 text-slate-400">Each connection is now stored in your Firebase user profile so your workspace remembers which accounts are connected and how they should behave.</p>
      </div>
    </DashboardShell>
  );
}
