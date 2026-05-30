import { getRelatedPosts } from "../config/blogData";
import BlogCard from "./BlogCard";

export default function RelatedPosts({ post }) {
  const related = getRelatedPosts(post);

  if (related.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">
        Related Articles
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((relatedPost) => (
          <BlogCard key={relatedPost.id} post={relatedPost} />
        ))}
      </div>
    </section>
  );
}
