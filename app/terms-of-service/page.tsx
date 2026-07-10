import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Amplify AI',
  description: 'Terms of service for Amplify AI provided by Zero Day Technology LLC.'
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-200 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-medium text-sky-300 transition hover:text-sky-200">
          ← Back to home
        </Link>

        <div className="mt-8 rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-glow sm:p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Terms of Service</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Terms of Service</h1>
          <p className="mt-4 text-slate-400">Last updated: July 9, 2026</p>

          <div className="mt-8 space-y-6 text-sm leading-7 text-slate-300">
            <section>
              <h2 className="text-xl font-semibold text-white">1. Acceptance of Terms</h2>
              <p className="mt-2">
                By accessing or using Amplify AI, you agree to be bound by these Terms of Service. If you do not agree, please do not use the service. These terms apply to all visitors, users, and customers of the platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">2. Service Description</h2>
              <p className="mt-2">
                Amplify AI provides AI-assisted marketing tools, content generation features, social account connection workflows, scheduling tools, and analytics dashboards. The service is intended to support marketing planning and content creation, but results may vary based on inputs, platform behavior, and third-party services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">3. Accounts and User Responsibilities</h2>
              <p className="mt-2">
                You are responsible for maintaining the accuracy of your account information, keeping your login credentials secure, and ensuring that any content you upload, generate, or publish complies with applicable laws and platform rules. You must notify us immediately of any unauthorized use of your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">4. Allowed and Prohibited Use</h2>
              <p className="mt-2">
                You may use the service for lawful business, marketing, and content creation purposes. You may not use the platform for spam, fraud, impersonation, harassment, unauthorized scraping, credential theft, or any activity that infringes on the rights of others.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">5. Subscription, Fees, and Cancellation</h2>
              <p className="mt-2">
                If you subscribe to any paid plan, fees will be billed according to the pricing and billing terms made available to you at signup or checkout. You may cancel your subscription according to the plan terms, and access may continue until the end of the current billing period unless otherwise stated.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">6. Intellectual Property</h2>
              <p className="mt-2">
                The platform, its design, interface, and original content remain the property of Zero Day Technology LLC unless otherwise stated. You retain ownership of your own content, data, and brand materials that you provide to the service, but you grant us permission to process and use that information solely to provide and improve the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">7. Availability and Modifications</h2>
              <p className="mt-2">
                We strive to keep the service available and reliable, but we may suspend, modify, or discontinue features at any time for maintenance, security, compliance, or business reasons. We will make reasonable efforts to provide notice when possible.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">8. Limitation of Liability</h2>
              <p className="mt-2">
                Zero Day Technology LLC shall not be liable for indirect, incidental, special, or consequential damages arising from the use of the service, including loss of data, lost profits, or business interruption, except where prohibited by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">9. Contact Information</h2>
              <p className="mt-2">
                For questions about these terms, please contact us at <a href="mailto:contact@zero-day-technology.com" className="text-sky-300 hover:text-sky-200">contact@zero-day-technology.com</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
