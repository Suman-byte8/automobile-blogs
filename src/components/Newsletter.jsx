import { useState } from "react";
import siteConfig from "../config/siteConfig";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            {siteConfig.newsletter.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            {siteConfig.newsletter.description}
          </p>
        </div>
        {subscribed ? (
          <div className="mx-auto mt-8 max-w-md rounded-lg bg-white/10 p-6 text-center backdrop-blur-sm">
            <svg
              className="mx-auto h-12 w-12 text-green-400"
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
            <p className="mt-3 text-lg font-semibold text-white">
              You're subscribed!
            </p>
            <p className="mt-1 text-sm text-blue-200">
              Check your inbox for a confirmation email.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md gap-3"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={siteConfig.newsletter.placeholder}
              className="flex-1 rounded-lg border-0 bg-white/10 px-4 py-3 text-white placeholder-blue-200 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-colors hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              {siteConfig.newsletter.buttonText}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
