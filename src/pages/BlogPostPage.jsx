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
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                Share This Post
              </h3>
              <div className="flex flex-wrap gap-3">
                {/* X (formerly Twitter) */}
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-all hover:scale-110 hover:shadow-lg"
                  aria-label="Share on X"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" />
                  </svg>
                </button>

                {/* Facebook */}
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white transition-all hover:scale-110 hover:shadow-lg"
                  aria-label="Share on Facebook"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978 1.602 0 3.531.37 3.531.37v3.376h-1.707c-1.51 0-1.98.939-1.98 1.904v2.487h3.665l-.587 3.667h-3.078v7.98H9.101z" />
                  </svg>
                </button>

                {/* WhatsApp */}
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white transition-all hover:scale-110 hover:shadow-lg"
                  aria-label="Share on WhatsApp"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </button>

                {/* Email */}
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-500 text-white transition-all hover:scale-110 hover:shadow-lg hover:bg-gray-600"
                  aria-label="Share via Email"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
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
