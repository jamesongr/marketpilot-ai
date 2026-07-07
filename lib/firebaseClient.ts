import { initializeApp, getApps, type FirebaseOptions } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { addDoc, collection, doc, getDocs, getFirestore, serverTimestamp, setDoc, type DocumentData } from 'firebase/firestore';

export interface SocialAccountConnection {
  id: string;
  platform: string;
  connected: boolean;
  accountName: string;
  lastSync: string;
  autoPost: boolean;
  approvalRequired: boolean;
  permissions: string;
  provider?: string;
  providerEmail?: string | null;
  userId?: string;
}

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '',
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || ''
};

if (!firebaseConfig.apiKey || !firebaseConfig.authDomain || !firebaseConfig.projectId || !firebaseConfig.appId) {
  throw new Error(
    'Firebase configuration is incomplete. Please set NEXT_PUBLIC_FIREBASE_API_KEY, NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN, NEXT_PUBLIC_FIREBASE_PROJECT_ID, and NEXT_PUBLIC_FIREBASE_APP_ID in .env.local.'
  );
}

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export async function signInWithGoogle() {
  return signInWithPopup(auth, provider);
}

export async function signOutUser() {
  return signOut(auth);
}

export async function saveBrandProfile(payload: Record<string, unknown>) {
  if (!auth.currentUser) {
    throw new Error('Please sign in with Google before saving your brand profile.');
  }

  const docRef = await addDoc(collection(db, 'users', auth.currentUser.uid, 'brands'), {
    userId: auth.currentUser.uid,
    ...payload,
    createdAt: serverTimestamp()
  });

  return docRef.id;
}

export async function saveSocialAccountConnection(platform: string, payload: Partial<SocialAccountConnection>) {
  if (!auth.currentUser) {
    throw new Error('Please sign in with Google before connecting social accounts.');
  }

  const docRef = doc(db, 'users', auth.currentUser.uid, 'socialAccounts', platform.toLowerCase());
  const dataToSave = {
    userId: auth.currentUser.uid,
    platform,
    connected: payload.connected ?? true,
    accountName: payload.accountName ?? `${platform} account`,
    lastSync: payload.lastSync ?? 'Just now',
    autoPost: payload.autoPost ?? false,
    approvalRequired: payload.approvalRequired ?? true,
    permissions: payload.permissions ?? 'Read profile, publish with approval, monitor replies.',
    provider: payload.provider ?? 'google',
    providerEmail: payload.providerEmail ?? auth.currentUser.email,
    updatedAt: serverTimestamp(),
    ...(payload.connected ? { connectedAt: serverTimestamp() } : {}),
  };

  await setDoc(docRef, dataToSave, { merge: true });
  return { id: docRef.id, ...dataToSave };
}

export async function loadSocialAccountsForCurrentUser(): Promise<SocialAccountConnection[]> {
  if (!auth.currentUser) {
    return [];
  }

  const snapshot = await getDocs(collection(db, 'users', auth.currentUser.uid, 'socialAccounts'));

  return snapshot.docs.map((item) => {
    const data = item.data() as DocumentData;
    return {
      id: item.id,
      platform: data.platform as string,
      connected: Boolean(data.connected),
      accountName: (data.accountName as string) ?? '',
      lastSync: (data.lastSync as string) ?? 'Never',
      autoPost: Boolean(data.autoPost),
      approvalRequired: Boolean(data.approvalRequired),
      permissions: (data.permissions as string) ?? 'Read profile, publish with approval, monitor replies.',
      provider: data.provider as string | undefined,
      providerEmail: data.providerEmail as string | null | undefined,
      userId: data.userId as string | undefined,
    };
  });
}
