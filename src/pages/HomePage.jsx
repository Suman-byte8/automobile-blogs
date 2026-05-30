import { Helmet } from "../components/Helmet";
import BlogCard from "../components/BlogCard";
import { AdGroup } from "../components/AdUnit";
import { homepageAdLayout } from "../config/adsConfig";
import { getFeaturedPosts, getRecentPosts, categoryNames } from "../config/blogData";
import { Link } from "react-router-dom";

export default function HomePage() {
  const featuredPosts = getFeaturedPosts(4);
  const recentPosts = getRecentPosts(null, 8);

  return (
    <>
      <Helmet
        title="Automotive News, Reviews & Guides"
        description="Your daily source for automotive news, in-depth reviews, buying guides, and motorsport coverage."
      />

      {/* Ad: Banner (desktop) + Mobile Banner */}
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <AdGroup adIds={[homepageAdLayout[0], homepageAdLayout[1]]} />
      </div>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Featured */}
          <div className="lg:col-span-2">
            {featuredPosts[0] && (
              <BlogCard post={featuredPosts[0]} variant="featured" />
            )}
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {featuredPosts.slice(1, 3).map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Ad: Rectangle */}
            <AdGroup adIds={[homepageAdLayout[2]]} />

            {/* Ad: Skyscraper (desktop) */}
            <AdGroup adIds={[homepageAdLayout[3]]} />

            {/* Latest News Widget */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="mb-4 text-lg font-bold text-gray-900">
                Latest News
              </h3>
              <div className="space-y-4">
                {recentPosts.slice(0, 5).map((post) => (
                  <Link
                    key={post.id}
                    to={`/post/${post.slug}`}
                    className="flex gap-3 group"
                  >
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200">
                      <img
                        src={post.featuredImage}
                        alt={post.featuredImageAlt}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-xs font-medium uppercase text-blue-600">
                        {categoryNames[post.category] || post.category}
                      </span>
                      <h4 className="text-sm font-medium leading-snug text-gray-900 transition-colors group-hover:text-blue-600 line-clamp-2">
                        {post.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Ad: Leaderboards (mid-content) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AdGroup adIds={[homepageAdLayout[4], homepageAdLayout[5], homepageAdLayout[6]]} />
      </div>

      {/* Recent Posts Grid */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            Latest Articles
          </h2>
          <Link
            to="/category/news"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            View All &rarr;
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {recentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* Ad: Footer */}
      <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <AdGroup adIds={[homepageAdLayout[7]]} />
      </div>

      {/* Category Sections */}
      <section className="bg-gray-50 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Car News */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900">
                <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                Car News
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Latest updates from the automobile world
              </p>
              <Link
                to="/category/news/car-news"
                className="mt-4 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Read More &rarr;
              </Link>
            </div>

            {/* Reviews */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900">
                <span className="flex h-2 w-2 rounded-full bg-green-600" />
                Vehicle Reviews
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                In-depth test drives and comparisons
              </p>
              <Link
                to="/category/reviews/vehicle-reviews"
                className="mt-4 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Read More &rarr;
              </Link>
            </div>

            {/* Buying Guides */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900">
                <span className="flex h-2 w-2 rounded-full bg-purple-600" />
                Buying Guides
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Expert advice for your next purchase
              </p>
              <Link
                to="/category/guides/buying-guides"
                className="mt-4 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Read More &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
