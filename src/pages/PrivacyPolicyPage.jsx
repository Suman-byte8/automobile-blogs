import { Helmet } from "../components/Helmet";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Helmet
        title="Privacy Policy"
        description="Read AutoStream's Privacy Policy to understand how we collect, use, and protect your personal information."
      />
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
        <p className="mt-2 text-sm text-gray-500">Last updated: June 1, 2026</p>

        <div className="prose prose-lg mt-8 max-w-none text-gray-700">

          <p>
            Welcome to <strong>AutoStream</strong> ("we", "our", or "us"). We are committed to
            protecting your personal information and your right to privacy. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your information when you visit
            our website.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">1. Information We Collect</h2>
          <p>We may collect information about you in various ways:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li><strong>Personal Data:</strong> Name, email address, and other contact details you voluntarily provide via our contact or newsletter forms.</li>
            <li><strong>Usage Data:</strong> Pages visited, time spent on pages, browser type, operating system, and referring URLs — collected automatically via analytics tools.</li>
            <li><strong>Cookies:</strong> Small data files stored on your device to improve site performance and user experience. See Section 5 for details.</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Operate, maintain, and improve our website and content.</li>
            <li>Send newsletters and updates if you have subscribed.</li>
            <li>Respond to your inquiries and support requests.</li>
            <li>Analyze traffic and usage patterns to improve user experience.</li>
            <li>Display relevant advertisements via Google AdSense and other ad networks.</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">3. Sharing of Information</h2>
          <p>We do not sell or rent your personal information to third parties. We may share information with:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li><strong>Service Providers:</strong> Trusted third parties who assist in operating our website (e.g., hosting, analytics, email services).</li>
            <li><strong>Advertising Partners:</strong> Google AdSense and similar networks may collect data to serve targeted ads. See Google's Privacy Policy for details.</li>
            <li><strong>Legal Requirements:</strong> If required by law or to protect the rights and safety of AutoStream and its users.</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">4. Third-Party Advertising</h2>
          <p>
            We use Google AdSense to display advertisements on our website. Google may use cookies
            to serve ads based on your prior visits to our site or other websites. You can opt out
            of personalized advertising by visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Google Ads Settings
            </a>
            .
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">5. Cookies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our website. Types
            of cookies we use:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li><strong>Essential Cookies:</strong> Required for the website to function properly.</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with the site (e.g., Google Analytics).</li>
            <li><strong>Advertising Cookies:</strong> Used by advertising partners to display relevant ads.</li>
          </ul>
          <p className="mt-3">
            You can instruct your browser to refuse all cookies or indicate when a cookie is being
            sent. However, some parts of the website may not function properly without cookies.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">6. Data Retention</h2>
          <p>
            We retain your personal data only for as long as necessary to fulfill the purposes
            outlined in this policy, or as required by law. Newsletter subscribers may unsubscribe
            at any time via the unsubscribe link in each email.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">7. Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Access the personal data we hold about you.</li>
            <li>Request correction or deletion of your data.</li>
            <li>Object to or restrict processing of your data.</li>
            <li>Data portability where applicable.</li>
          </ul>
          <p className="mt-3">
            To exercise these rights, please contact us at the details provided in Section 9.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">8. Security</h2>
          <p>
            We implement reasonable technical and organizational security measures to protect your
            information. However, no method of transmission over the internet is 100% secure, and
            we cannot guarantee absolute security.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">9. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us:</p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li><strong>Email:</strong> privacy@autostream.com</li>
            <li><strong>Address:</strong> AutoStream, Malda, West Bengal, India</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this
            page with an updated revision date. We encourage you to review this policy periodically.
          </p>
        </div>
      </main>
    </>
  );
}
