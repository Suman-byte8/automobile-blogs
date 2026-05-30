import { Link } from "react-router-dom";
import LazyImage from "./LazyImage";
import { categoryNames } from "../config/blogData";

export default function BlogCard({ post, variant = "default" }) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const categoryLabel =
    categoryNames[post.category] ||
    post.category;

  if (variant === "featured") {
    return (
      <article className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
        <Link to={`/post/${post.slug}`} className="block">
          <div className="relative aspect-[16/9] overflow-hidden">
            <LazyImage
              src={post.featuredImage}
              alt={post.featuredImageAlt}
              className="h-full w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="mb-3 inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                {categoryLabel}
              </span>
              <h2 className="text-xl font-bold leading-tight text-white md:text-2xl lg:text-3xl">
                {post.title}
              </h2>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  if (variant === "compact") {
    return (
      <article className="group flex gap-4 rounded-lg bg-white p-3 shadow-sm transition-all duration-300 hover:shadow-md">
        <Link to={`/post/${post.slug}`} className="block w-24 flex-shrink-0">
          <LazyImage
            src={post.featuredImage}
            alt={post.featuredImageAlt}
            className="h-20 w-24 rounded-lg"
          />
        </Link>
        <div className="min-w-0 flex-1">
          <span className="mb-1 inline-block text-xs font-medium uppercase tracking-wider text-blue-600">
            {categoryLabel}
          </span>
          <Link to={`/post/${post.slug}`}>
            <h3 className="text-sm font-bold leading-snug text-gray-900 transition-colors group-hover:text-blue-600 line-clamp-2">
              {post.title}
            </h3>
          </Link>
          <p className="mt-1 text-xs text-gray-500">
            {formattedDate}
          </p>
        </div>
      </article>
    );
  }

  // default variant
  return (
    <article className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <Link to={`/post/${post.slug}`} className="block">
        <div className="relative overflow-hidden">
          <LazyImage
            src={post.featuredImage}
            alt={post.featuredImageAlt}
            className="aspect-[16/10] w-full"
          />
          <span className="absolute left-3 top-3 rounded-full bg-blue-600 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            {categoryLabel}
          </span>
        </div>
      </Link>
      <div className="p-5">
        <Link to={`/post/${post.slug}`}>
          <h2 className="text-lg font-bold leading-tight text-gray-900 transition-colors group-hover:text-blue-600 line-clamp-2">
            {post.title}
          </h2>
        </Link>
        <p className="mt-2 text-sm leading-relaxed text-gray-600 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
          <span className="text-xs font-medium text-gray-500">
            {post.author.name}
          </span>
          <span className="text-xs text-gray-400">{formattedDate}</span>
        </div>
      </div>
    </article>
  );
}
