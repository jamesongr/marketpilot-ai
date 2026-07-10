import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Amplify AI',
  description: 'Privacy policy for Amplify AI provided by Zero Day Technology LLC.'
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-200 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-medium text-sky-300 transition hover:text-sky-200">
          ← Back to home
        </Link>

        <div className="mt-8 rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-glow sm:p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Privacy Policy</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-slate-400">Last updated: July 9, 2026</p>

          <div className="mt-8 space-y-6 text-sm leading-7 text-slate-300">
            <section>
              <h2 className="text-xl font-semibold text-white">1. Information We Collect</h2>
              <p className="mt-2">
                We collect information you provide directly to us, such as your name, email address, account credentials, profile details, and information related to your marketing content, saved brand preferences, and connected social accounts. We may also collect technical data such as IP address, browser type, device information, and usage analytics to help maintain and improve the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">2. How We Use Your Information</h2>
              <p className="mt-2">
                We use your information to create and manage your account, provide core features such as content generation and scheduling, communicate important updates, personalize your experience, prevent fraud, and improve platform performance and reliability.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">3. Data Sharing and Service Providers</h2>
              <p className="mt-2">
                We do not sell your personal data. We may share limited information with trusted service providers who help us operate the platform, such as hosting, authentication, analytics, and communications tools. These providers are contractually required to protect your information and use it only for authorized purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">4. Cookies and Tracking</h2>
              <p className="mt-2">
                Our website and services may use cookies and similar technologies to remember preferences, maintain sessions, understand usage patterns, and improve functionality. You can manage your browser settings to limit or disable cookies, although some features may not work as intended.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">5. Your Rights and Choices</h2>
              <p className="mt-2">
                You may update or delete your account information through your account settings, unsubscribe from marketing emails, and request access to or deletion of your personal data where applicable by law. We may retain certain information when required for legal, security, or legitimate business purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">6. Security</h2>
              <p className="mt-2">
                We take reasonable administrative, technical, and physical measures to protect your information, but no system is completely secure. Please keep your credentials safe and report any suspected unauthorized access immediately.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">7. Contact Information</h2>
              <p className="mt-2">
                If you have questions about this privacy policy, please contact us at <a href="mailto:contact@zero-day-technology.com" className="text-sky-300 hover:text-sky-200">contact@zero-day-technology.com</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
