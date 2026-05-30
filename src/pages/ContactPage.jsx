import { useState } from "react";
import { Helmet } from "../components/Helmet";
import { AdGroup } from "../components/AdUnit";
import { listingAdLayout } from "../config/adsConfig";
import siteConfig from "../config/siteConfig";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Helmet title="Contact Us" description={`Get in touch with ${siteConfig.name}.`} />

      {/* Ad: Top Banner */}
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <AdGroup adIds={[listingAdLayout[0], listingAdLayout[1]]} />
      </div>

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Contact Us
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Have a question, tip, or just want to say hello? We'd love to hear
          from you.
        </p>

        {/* Ad: Rectangle */}
        <div className="my-8">
          <AdGroup adIds={[listingAdLayout[2]]} />
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          {/* Contact Info */}
          <div className="space-y-8 lg:col-span-1">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Get in Touch
              </h2>
              <dl className="mt-4 space-y-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-sm text-blue-600 hover:text-blue-700"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Phone</dt>
                  <dd className="text-sm text-gray-900">
                    {siteConfig.contact.phone}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Address</dt>
                  <dd className="text-sm text-gray-900">
                    {siteConfig.contact.address}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    News Tips
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${siteConfig.contact.tipEmail}`}
                      className="text-sm text-blue-600 hover:text-blue-700"
                    >
                      {siteConfig.contact.tipEmail}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    Press Inquiries
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${siteConfig.contact.pressEmail}`}
                      className="text-sm text-blue-600 hover:text-blue-700"
                    >
                      {siteConfig.contact.pressEmail}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Ad: Skyscraper (desktop) */}
            <div className="hidden lg:block">
              <AdGroup adIds={[listingAdLayout[3]]} />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h2 className="mt-4 text-xl font-semibold text-green-900">
                  Message Sent!
                </h2>
                <p className="mt-2 text-green-700">
                  Thank you for reaching out. We'll get back to you within 24-48
                  hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="contact-subject"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            )}

            {/* Ad: Mid-content (mobile/tablet) */}
            <div className="mt-8 lg:hidden">
              <AdGroup adIds={[listingAdLayout[4], listingAdLayout[5], listingAdLayout[6]]} />
            </div>

            {/* Ad: Mid-content (desktop) */}
            <div className="mt-8 hidden lg:block">
              <AdGroup adIds={[listingAdLayout[4], listingAdLayout[5]]} />
            </div>
          </div>
        </div>

        {/* Ad: Footer */}
        <div className="mt-12">
          <AdGroup adIds={[listingAdLayout[7]]} />
        </div>
      </main>
    </>
  );
}
