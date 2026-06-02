import { useLocation, useSearchParams, Link } from "react-router-dom";
import { Helmet } from "../components/Helmet";
import BlogCard from "../components/BlogCard";
import Pagination from "../components/Pagination";
import { AdGroup } from "../components/AdUnit";
import { listingAdLayout } from "../config/adsConfig";
import {
  getPostsByCategory,
  categoryNames,
  categoryParents,
} from "../config/blogData";
import navigationConfig from "../config/navigationConfig";

// Map URL path (without leading slash) to category slug
const pathToCategoryMap = {
  "cars/news": "cars-news",
  "cars/reviews": "cars-reviews",
  "cars/prices": "cars-prices",
  "cars/compare": "cars-compare",
  "bikes/news": "bikes-news",
  "bikes/reviews": "bikes-reviews",
  "bikes/prices": "bikes-prices",
  "bikes/compare": "bikes-compare",
  "ev/cars": "ev-cars",
  "ev/bikes": "ev-bikes",
  "buying-guide": "buying-guide",
  "insurance": "insurance",
  "accessories": "accessories",
  "regional": "regional",
};

export default function BlogListPage() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);

  // Strip leading and trailing slashes, then map to category key
  const rawPath = location.pathname.replace(/^\//, "").replace(/\/$/, "");
  const currentCategory = pathToCategoryMap[rawPath] || rawPath;

  const { posts, total, totalPages } = getPostsByCategory(currentCategory, page, 6);

  const categoryLabel =
    categoryNames[currentCategory] ||
    currentCategory
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

  const parentId = categoryParents[currentCategory];

  // Breadcrumbs
  const breadcrumbs = [{ label: "Home", path: "/" }];
  if (parentId) {
    const parentItem = navigationConfig.find((n) => n.id === parentId);
    if (parentItem) {
      breadcrumbs.push({
        label: parentItem.label,
        path: parentItem.path,
      });
    }
  }
  breadcrumbs.push({ label: categoryLabel, path: "" });

  return (
    <>
      <Helmet
        title={`${categoryLabel} Archives`}
        description={`Browse all articles in ${categoryLabel}.`}
      />

      {/* Ad: Top Banner */}
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <AdGroup adIds={[listingAdLayout[0], listingAdLayout[1]]} />
      </div>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-gray-500">
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-2">
              {i > 0 && (
                <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
              {crumb.path ? (
                <Link
                  to={crumb.path}
                  className="hover:text-blue-600 transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="font-medium text-gray-900">
                  {crumb.label}
                </span>
              )}
            </span>
          ))}
        </nav>

        <div className="grid gap-8 lg:grid-cols-4">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">
                {categoryLabel}
              </h1>
              <p className="mt-2 text-gray-600">
                {total} {total === 1 ? "article" : "articles"} found
              </p>
            </div>

            {posts.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2">
                {posts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-12 text-center">
                <h2 className="text-xl font-semibold text-gray-900">
                  No articles found
                </h2>
                <p className="mt-2 text-gray-600">
                  Check back soon for new content in this category.
                </p>
              </div>
            )}

            {/* Ad: Mid-content */}
            <div className="my-8">
              <AdGroup
                adIds={[listingAdLayout[4], listingAdLayout[5], listingAdLayout[6]]}
              />
            </div>

            <Pagination
              currentPage={page}
              totalPages={totalPages}
              basePath={`/${rawPath}`}
            />
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Ad: Rectangle */}
            <AdGroup adIds={[listingAdLayout[2]]} />

            {/* Ad: Skyscraper (desktop) */}
            <AdGroup adIds={[listingAdLayout[3]]} />

            {/* Categories Widget */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="mb-4 text-lg font-bold text-gray-900">
                Categories
              </h3>
              <div className="space-y-1">
                {navigationConfig
                  .filter((n) => n.hasDropdown)
                  .map((parent) => (
                    <div key={parent.id}>
                      <p className="px-2 py-1 text-sm font-semibold text-gray-700">
                        {parent.label}
                      </p>
                      {parent.children.map((child) => (
                        <Link
                          key={child.id}
                          to={child.path}
                          className={`block rounded-lg px-4 py-2 text-sm transition-colors hover:bg-blue-50 hover:text-blue-600 ${
                            currentCategory === child.id
                              ? "bg-blue-50 font-semibold text-blue-600"
                              : "text-gray-600"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Ad: Footer */}
        <div className="mt-12">
          <AdGroup adIds={[listingAdLayout[7]]} />
        </div>
      </main>
    </>
  );
}
