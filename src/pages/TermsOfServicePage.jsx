import { Helmet } from "../components/Helmet";

export default function TermsOfServicePage() {
  return (
    <>
      <Helmet
        title="Terms of Service"
        description="Read AutoStream's Terms of Service to understand the rules and guidelines for using our website."
      />
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900">Terms of Service</h1>
        <p className="mt-2 text-sm text-gray-500">Last updated: June 1, 2026</p>

        <div className="prose prose-lg mt-8 max-w-none text-gray-700">

          <p>
            Please read these Terms of Service ("Terms") carefully before using the{" "}
            <strong>AutoStream</strong> website. By accessing or using our website, you agree to be
            bound by these Terms. If you do not agree, please do not use our website.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">1. Acceptance of Terms</h2>
          <p>
            By using AutoStream, you confirm that you are at least 13 years of age and have read,
            understood, and agree to be bound by these Terms and our Privacy Policy.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">2. Use of the Website</h2>
          <p>You agree to use AutoStream only for lawful purposes and in accordance with these Terms. You must not:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Use the website in any way that violates applicable local, national, or international laws.</li>
            <li>Transmit any unsolicited or unauthorized advertising or promotional material.</li>
            <li>Attempt to gain unauthorized access to any part of the website or its related systems.</li>
            <li>Reproduce, duplicate, copy, or resell any part of our content without prior written permission.</li>
            <li>Use automated tools to scrape, crawl, or harvest data from the website.</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">3. Intellectual Property</h2>
          <p>
            All content on AutoStream — including articles, images, graphics, logos, and design — is
            owned by or licensed to AutoStream and protected by applicable intellectual property laws.
            You may not reproduce, distribute, or create derivative works without our express written
            consent.
          </p>
          <p className="mt-3">
            You may share links to our content on social media or other platforms, provided you
            attribute AutoStream as the source and do not alter the content.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">4. User-Submitted Content</h2>
          <p>
            If you submit content to AutoStream (e.g., through our "Write for Us" program or
            comments), you grant us a non-exclusive, royalty-free, worldwide license to publish,
            reproduce, and distribute that content. You represent that you have the right to grant
            this license and that your content does not violate any third-party rights.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">5. Disclaimer of Warranties</h2>
          <p>
            AutoStream is provided on an "as is" and "as available" basis without warranties of any
            kind, express or implied. We do not warrant that the website will be uninterrupted,
            error-free, or free of viruses. Automotive information, prices, and specifications
            published on AutoStream are for informational purposes only and may not be accurate or
            up to date. Always verify information with official manufacturer or dealer sources before
            making purchasing decisions.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">6. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, AutoStream and its operators shall not be liable
            for any direct, indirect, incidental, special, or consequential damages arising from your
            use of or inability to use the website, even if we have been advised of the possibility
            of such damages.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">7. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. These links are provided for your
            convenience only. We have no control over the content of those sites and accept no
            responsibility for them or any loss or damage that may arise from your use of them.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">8. Advertising</h2>
          <p>
            AutoStream displays advertisements served by Google AdSense and other ad networks. We
            are not responsible for the content of these advertisements. The presence of an
            advertisement does not constitute our endorsement of the advertised product or service.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">9. Modifications to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes will be effective
            immediately upon posting to the website. Your continued use of AutoStream after changes
            are posted constitutes your acceptance of the revised Terms.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">10. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of India.
            Any disputes arising under these Terms shall be subject to the exclusive jurisdiction
            of the courts located in West Bengal, India.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">11. Contact Us</h2>
          <p>If you have questions about these Terms, please contact us:</p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li><strong>Email:</strong> legal@autostream.com</li>
            <li><strong>Address:</strong> AutoStream, Malda, West Bengal, India</li>
          </ul>
        </div>
      </main>
    </>
  );
}
