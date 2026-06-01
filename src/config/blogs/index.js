// Blogs — root index
// Aggregates all categories and re-exports utility helpers so existing
// imports from blogData.js can be migrated here gradually.

import newsPosts, { carNewsPosts, bikeNewsPosts, evNewsPosts, motorsportPosts } from "./news/index.js";
import reviewsPosts, { vehicleReviewsPosts, comparisonsPosts } from "./reviews/index.js";
import guidesPosts, { buyingGuidesPosts, accessoriesPosts } from "./guides/index.js";

// Re-export individual sub-categories for granular imports
export {
  // News
  carNewsPosts,
  bikeNewsPosts,
  evNewsPosts,
  motorsportPosts,
  // Reviews
  vehicleReviewsPosts,
  comparisonsPosts,
  // Guides
  buyingGuidesPosts,
  accessoriesPosts,
};

// Re-export category groups
export { newsPosts, reviewsPosts, guidesPosts };

// All posts combined (preserves original blogPosts shape)
const blogPosts = [...newsPosts, ...reviewsPosts, ...guidesPosts];

// ─── Category metadata ────────────────────────────────────────────────────────

export const categoryNames = {
  "car-news": "Car News",
  "bike-news": "Bike News",
  "ev-news": "EV News",
  motorsport: "Motorsport",
  "vehicle-reviews": "Vehicle Reviews",
  comparisons: "Comparisons",
  "buying-guides": "Buying Guides",
  accessories: "Accessories",
};

export const categoryParents = {
  "car-news": "news",
  "bike-news": "news",
  "ev-news": "news",
  motorsport: "news",
  "vehicle-reviews": "reviews",
  comparisons: "reviews",
  "buying-guides": "guides",
  accessories: "guides",
};

// ─── Utility helpers ──────────────────────────────────────────────────────────

export function getPostsByCategory(category, page = 1, perPage = 6) {
  const filtered = blogPosts.filter((post) => post.category === category);
  const total = filtered.length;
  const totalPages = Math.ceil(total / perPage);
  const start = (page - 1) * perPage;
  const posts = filtered.slice(start, start + perPage);
  return { posts, total, totalPages, page, perPage };
}

export function getAllPosts(page = 1, perPage = 6) {
  const total = blogPosts.length;
  const totalPages = Math.ceil(total / perPage);
  const start = (page - 1) * perPage;
  const posts = blogPosts.slice(start, start + perPage);
  return { posts, total, totalPages, page, perPage };
}

export function getFeaturedPosts(limit = 4) {
  return blogPosts.filter((post) => post.featured).slice(0, limit);
}

export function getPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug) || null;
}

export function getRelatedPosts(post) {
  if (!post || !post.relatedPosts) return [];
  return post.relatedPosts
    .map((id) => blogPosts.find((p) => p.id === id))
    .filter(Boolean);
}

export function getRecentPosts(excludeSlug = null, limit = 4) {
  return blogPosts
    .filter((post) => post.slug !== excludeSlug)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
}

export default blogPosts;
