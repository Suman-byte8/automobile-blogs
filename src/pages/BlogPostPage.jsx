import { useParams, Link } from "react-router-dom";
import { Helmet } from "../components/Helmet";
import { AdGroup } from "../components/AdUnit";
import { articleAdLayout } from "../config/adsConfig";
import { getPostBySlug, categoryNames, categoryParents } from "../config/blogData";
import AuthorBio from "../components/AuthorBio";
import RelatedPosts from "../components/RelatedPosts";
import LazyImage from "../components/LazyImage";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = getPostBySlug(slug || "");

  if (!post) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900">Post Not Found</h1>
        <p className="mt-4 text-gray-600">
          The article you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </Link>
      </main>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const categoryLabel =
    categoryNames[post.category] || post.category;
  const parentCategory = categoryParents[post.category];

  const breadcrumbs = [
    { label: "Home", path: "/" },
  ];
  if (parentCategory) {
    breadcrumbs.push({
      label: parentCategory.charAt(0).toUpperCase() + parentCategory.slice(1),
      path: `/category/${parentCategory}`,
    });
  }
  breadcrumbs.push({
    label: categoryLabel,
    path: `/category/${post.category}`,
  });
  breadcrumbs.push({ label: post.title, path: "" });

  // Split content at paragraph markers to insert ads
  const paragraphs = post.content.split(/(?<=<\/p>)/g);
  const chunks = [];

  paragraphs.forEach((para, index) => {
    chunks.push({ type: "content", content: para });

    // Insert ads at strategic positions
    if (index === 1) {
      // After first paragraph: Medium Rectangle
      chunks.push({ type: "ad", adId: articleAdLayout[2] });
    }
    if (index === Math.floor(paragraphs.length / 2)) {
      // Mid-content: Leaderboards
      chunks.push({ type: "ad", adId: "mid-content-group" });
    }
  });

  return (
    <>
      <Helmet
        title={post.title}
        description={post.excerpt}
        ogImage={post.featuredImage}
        canonicalUrl={`/post/${post.slug}`}
      />

      {/* Ad: Top Banner (desktop) + Mobile Banner */}
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <AdGroup adIds={[articleAdLayout[0], articleAdLayout[1]]} />
      </div>

      <article className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-500">
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-2">
              {i > 0 && (
                <svg
                  className="h-4 w-4 flex-shrink-0 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
              {crumb.path ? (
                <Link
                  to={crumb.path}
                  className="transition-colors hover:text-blue-600"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="font-medium text-gray-900 line-clamp-1">
                  {crumb.label}
                </span>
              )}
            </span>
          ))}
        </nav>

        <div className="grid gap-8 lg:grid-cols-4">
          {/* Main Article */}
          <div className="lg:col-span-3">
            {/* Article Header */}
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                  {categoryLabel}
                </span>
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {post.title}
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                <span className="font-medium text-gray-700">
                  {post.author.name}
                </span>
                <span className="h-1 w-1 rounded-full bg-gray-300" />
                <time dateTime={post.date}>{formattedDate}</time>
              </div>
            </header>

            {/* Featured Image */}
            <div className="mb-8 overflow-hidden rounded-xl">
              <LazyImage
                src={post.featuredImage}
                alt={post.featuredImageAlt}
                className="aspect-[16/9] w-full"
              />
            </div>

            {/* Article Content with Embedded Ads */}
            <div className="prose prose-lg max-w-none">
              {chunks.map((chunk, i) => {
                if (chunk.type === "ad") {
                  if (chunk.adId === "mid-content-group") {
                    return (
                      <div key={`ad-${i}`} className="my-8 not-prose">
                        <AdGroup
                          adIds={[
                            articleAdLayout[3],
                            articleAdLayout[4],
                            articleAdLayout[5],
                          ]}
                        />
                      </div>
                    );
                  }
                  return (
                    <div key={`ad-${i}`} className="my-8 not-prose">
                      <AdGroup adIds={[chunk.adId]} />
                    </div>
                  );
                }
                return (
                  <div
                    key={`content-${i}`}
                    dangerouslySetInnerHTML={{ __html: chunk.content || "" }}
                  />
                );
              })}
            </div>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-gray-200 pt-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gray-300 px-3 py-1 text-xs font-medium text-gray-600"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Author Bio */}
            <div className="mt-8">
              <AuthorBio author={post.author} />
            </div>

            {/* Ad: Before Footer */}
            <div className="my-8">
              <AdGroup adIds={[articleAdLayout[7]]} />
            </div>

            {/* Related Posts */}
            <RelatedPosts post={post} />
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Ad: Rectangle */}
            <AdGroup adIds={[articleAdLayout[2]]} />

            {/* Ad: Skyscraper (desktop) */}
            <AdGroup adIds={[articleAdLayout[6]]} />

            {/* Article Info Widget */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
                Article Info
              </h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="font-medium text-gray-700">Category</dt>
                  <dd>
                    <Link
                      to={`/category/${post.category}`}
                      className="text-blue-600 hover:text-blue-700"
                    >
                      {categoryLabel}
                    </Link>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Published</dt>
                  <dd className="text-gray-600">{formattedDate}</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Author</dt>
                  <dd className="text-gray-600">{post.author.name}</dd>
                </div>
              </dl>
            </div>

            {/* Share Widget */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
                Share
              </h3>
              <div className="flex gap-3">
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white transition-colors hover:bg-blue-700"
                  aria-label="Share on Twitter"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </button>
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-white transition-colors hover:bg-gray-900"
                  aria-label="Share on Facebook"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600 text-white transition-colors hover:bg-green-700"
                  aria-label="Share via Email"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
