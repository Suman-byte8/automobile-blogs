import { Link } from "react-router-dom";
import { Helmet } from "../components/Helmet";

export default function AdvertisePage() {
  return (
    <>
      <Helmet
        title="Advertise with Us"
        description="Reach India's passionate automotive audience. Learn about advertising opportunities on AutoStream."
      />
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 px-8 py-12 text-center text-white">
          <h1 className="text-4xl font-bold">Advertise with AutoStream</h1>
          <p className="mt-4 text-lg text-blue-100">
            Reach India's most engaged automotive audience — car enthusiasts, bike riders, and EV early adopters.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-3 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-50"
          >
            Get in Touch
          </Link>
        </div>

        {/* Audience Stats */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-gray-900">Why Advertise with Us?</h2>
          <p className="mt-3 text-gray-600">
            AutoStream delivers authoritative automotive content across cars, bikes, EVs, and motorsport
            to a highly targeted Indian audience actively researching their next vehicle purchase.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              { stat: "5L+", label: "Monthly Page Views" },
              { stat: "2L+", label: "Unique Monthly Visitors" },
              { stat: "85%", label: "Audience In-Market for Vehicles" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm"
              >
                <p className="text-4xl font-bold text-blue-600">{item.stat}</p>
                <p className="mt-2 text-sm font-medium text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Ad Formats */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-gray-900">Advertising Options</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Display Banners",
                desc: "Leaderboard (970×90), rectangle (300×250), and skyscraper (300×600) placements across all pages for maximum visibility.",
                icon: "🖼️",
              },
              {
                title: "Sponsored Content",
                desc: "Native articles written by our editorial team that integrate your brand story with genuine automotive value for our readers.",
                icon: "✍️",
              },
              {
                title: "Category Sponsorship",
                desc: "Exclusive sponsorship of a content category (Cars, Bikes, EV, etc.) — your brand featured at the top of every listing page.",
                icon: "🏷️",
              },
              {
                title: "Newsletter Inclusion",
                desc: "Reach our subscribers directly with a dedicated slot in our weekly automotive newsletter sent to 50,000+ subscribers.",
                icon: "📧",
              },
              {
                title: "Product Reviews",
                desc: "In-depth, honest reviews of your vehicle or accessory, published as editorial content and promoted across our channels.",
                icon: "⭐",
              },
              {
                title: "Social Media Promotion",
                desc: "Amplify your campaign across our Twitter, Instagram, Facebook, and YouTube channels with dedicated posts and stories.",
                icon: "📱",
              },
            ].map((option) => (
              <div
                key={option.title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{option.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{option.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{option.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Audience Demographics */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-gray-900">Our Audience</h2>
          <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">Demographic</th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">Breakdown</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Age Group", "18–35 years (68%), 35–50 years (24%)"],
                  ["Gender", "Male (78%), Female (22%)"],
                  ["Location", "Metro cities (55%), Tier 2 cities (30%), Tier 3+ (15%)"],
                  ["Device", "Mobile (72%), Desktop (22%), Tablet (6%)"],
                  ["Interest", "Cars (45%), Bikes (28%), EVs (18%), Motorsport (9%)"],
                ].map(([key, val]) => (
                  <tr key={key}>
                    <td className="px-6 py-4 font-medium text-gray-900">{key}</td>
                    <td className="px-6 py-4 text-gray-600">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-14 rounded-2xl bg-gray-50 px-8 py-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Ready to Reach Our Audience?</h2>
          <p className="mt-3 text-gray-600">
            Contact our advertising team for a custom media kit, rate card, and campaign proposal
            tailored to your brand and budget.
          </p>
          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/contact"
              className="rounded-lg bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Contact Advertising Team
            </Link>
            <a
              href="mailto:advertise@autostream.com"
              className="rounded-lg border border-gray-300 bg-white px-8 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              advertise@autostream.com
            </a>
          </div>
        </section>

      </main>
    </>
  );
}
