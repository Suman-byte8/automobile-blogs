import { Helmet } from "../components/Helmet";
import { AdGroup } from "../components/AdUnit";
import { listingAdLayout } from "../config/adsConfig";
import siteConfig from "../config/siteConfig";

export default function WriteForUsPage() {
  return (
    <>
      <Helmet
        title="Write for Us / Tip Us"
        description={`Contribute to ${siteConfig.name} or send us a news tip.`}
      />

      {/* Ad: Top Banner */}
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <AdGroup adIds={[listingAdLayout[0], listingAdLayout[1]]} />
      </div>

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Write for Us / Tip Us
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Share your automotive expertise with our audience or send us a
          confidential news tip.
        </p>

        {/* Ad: Rectangle */}
        <div className="my-8">
          <AdGroup adIds={[listingAdLayout[2]]} />
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          {/* Write for Us */}
          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
              <svg
                className="h-6 w-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Write for {siteConfig.name}
            </h2>
            <p className="mt-3 text-gray-600">
              We're always looking for passionate automotive writers to join our
              team of contributors. If you have expertise in cars, motorcycles,
              EVs, motorsport, or automotive technology, we want to hear from
              you.
            </p>

            <h3 className="mt-6 font-semibold text-gray-900">
              What We're Looking For
            </h3>
            <ul className="mt-2 space-y-2">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Original, well-researched articles (800-2,000 words)
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Hands-on experience with vehicles or products
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Strong writing skills with attention to detail
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                High-quality original photography is a plus
              </li>
            </ul>

            <h3 className="mt-6 font-semibold text-gray-900">
              How to Apply
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Send an email to{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="font-medium text-blue-600 hover:text-blue-700"
              >
                {siteConfig.contact.email}
              </a>{" "}
              with:
            </p>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>A brief introduction about yourself</li>
              <li>2-3 writing samples or links to published work</li>
              <li>3 article pitch ideas relevant to our audience</li>
            </ul>
          </div>

          {/* Tip Us */}
          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
              <svg
                className="h-6 w-6 text-amber-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Send a Tip</h2>
            <p className="mt-3 text-gray-600">
              Have inside information about the automotive industry? We
              investigate tips from all sources. Your confidentiality is our
              priority.
            </p>

            <h3 className="mt-6 font-semibold text-gray-900">
              What We Investigate
            </h3>
            <ul className="mt-2 space-y-2">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Upcoming vehicle launches and leaks
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Safety concerns and defects
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Industry insider information
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Dealer and manufacturer practices
              </li>
            </ul>

            <h3 className="mt-6 font-semibold text-gray-900">
              How to Tip Securely
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Email us at{" "}
              <a
                href={`mailto:${siteConfig.contact.tipEmail}`}
                className="font-medium text-blue-600 hover:text-blue-700"
              >
                {siteConfig.contact.tipEmail}
              </a>
              . For sensitive information, we recommend using encrypted email
              services. You can also reach out to any of our journalists on
              social media via direct message.
            </p>

            <div className="mt-6 rounded-lg bg-amber-50 p-4">
              <p className="text-sm font-medium text-amber-800">
                We protect our sources. Your identity will never be revealed
                without your explicit consent.
              </p>
            </div>
          </div>
        </div>

        {/* Ad: Mid-content */}
        <div className="my-8">
          <AdGroup adIds={[listingAdLayout[4], listingAdLayout[5], listingAdLayout[6]]} />
        </div>

        <div className="mt-10 rounded-xl bg-gray-50 p-8 text-center">
          <h2 className="text-xl font-bold text-gray-900">
            Ready to contribute?
          </h2>
          <p className="mt-2 text-gray-600">
            We review all submissions and respond within 5-7 business days.
          </p>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="mt-4 inline-block rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Get in Touch
          </a>
        </div>

        {/* Ad: Footer */}
        <div className="mt-12">
          <AdGroup adIds={[listingAdLayout[7]]} />
        </div>
      </main>
    </>
  );
}
