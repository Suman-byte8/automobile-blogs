import { Helmet } from "../components/Helmet";
import siteConfig from "../config/siteConfig";
import { AdGroup } from "../components/AdUnit";
import { listingAdLayout } from "../config/adsConfig";

export default function AboutPage() {
  return (
    <>
      <Helmet title="About Us" description={`Learn more about ${siteConfig.name} and our mission.`} />

      {/* Ad: Top Banner */}
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <AdGroup adIds={[listingAdLayout[0], listingAdLayout[1]]} />
      </div>

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          About {siteConfig.name}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-600">
          Your trusted source for automotive news, in-depth reviews, expert
          buying guides, and comprehensive motorsport coverage since{" "}
          {siteConfig.founded}.
        </p>

        {/* Ad: Rectangle after intro */}
        <div className="my-8">
          <AdGroup adIds={[listingAdLayout[2]]} />
        </div>

        <div className="prose prose-lg mt-8 max-w-none">
          <h2>Our Mission</h2>
          <p>
            At {siteConfig.name}, we believe that everyone deserves access to
            accurate, unbiased, and engaging automotive content. Whether you're
            a gearhead looking for the latest performance specs, a family
            searching for the perfect SUV, or an enthusiast keeping up with F1
            and MotoGP, we've got you covered.
          </p>
          <p>
            Our team of experienced journalists, engineers, and automotive
            enthusiasts brings decades of combined industry experience to every
            article we publish. We test vehicles thoroughly, research
            meticulously, and present information in a clear, accessible format.
          </p>

          <h2>What We Cover</h2>
          <ul>
            <li>
              <strong>Automotive News:</strong> Breaking stories, manufacturer
              announcements, industry analysis, and more — covering cars, bikes,
              and EVs.
            </li>
            <li>
              <strong>In-Depth Reviews:</strong> Comprehensive vehicle reviews
              and head-to-head comparisons based on real-world testing.
            </li>
            <li>
              <strong>Buying Guides:</strong> Expert advice to help you make
              informed purchasing decisions, from budget-friendly options to
              luxury vehicles.
            </li>
            <li>
              <strong>Motorsport:</strong> Coverage of Formula 1, MotoGP, WRC,
              WEC, and other major racing series with analysis and commentary.
            </li>
            <li>
              <strong>Accessories & Gear:</strong> Honest reviews of automotive
              accessories, from dash cams to car care products.
            </li>
          </ul>

          {/* Ad: Mid-content */}
          <div className="my-8">
            <AdGroup adIds={[listingAdLayout[4], listingAdLayout[5], listingAdLayout[6]]} />
          </div>

          <h2>Our Values</h2>
          <p>
            <strong>Independence:</strong> Our editorial content is produced
            independently of our advertising partners. We maintain a strict
            separation between editorial and commercial content.
          </p>
          <p>
            <strong>Accuracy:</strong> We verify facts, cite sources, and
            correct errors promptly. Our reputation depends on your trust.
          </p>
          <p>
            <strong>Accessibility:</strong> Automotive journalism should be for
            everyone. We explain complex topics in plain language without
            sacrificing depth or accuracy.
          </p>

          <h2>Join Our Community</h2>
          <p>
            {siteConfig.name} is more than a publication — it's a community of
            automotive enthusiasts. Follow us on social media, subscribe to our
            newsletter, and join the conversation in the comments. We value your
            perspective and encourage respectful discussion.
          </p>
        </div>

        {/* Ad: Footer */}
        <div className="mt-12">
          <AdGroup adIds={[listingAdLayout[7]]} />
        </div>
      </main>
    </>
  );
}
