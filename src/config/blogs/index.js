// Blogs — root index
// Aggregates all categories and re-exports utility helpers.

import newsPosts, { carNewsPosts, bikeNewsPosts, evNewsPosts, motorsportPosts } from "./news/index.js";
import reviewsPosts, { vehicleReviewsPosts, comparisonsPosts } from "./reviews/index.js";
import guidesPosts, { buyingGuidesPosts, accessoriesPosts } from "./guides/index.js";
import carsPricesPosts from "./cars/prices.js";
import bikesNewsPosts from "./bikes/news.js";
import bikesReviewsPosts from "./bikes/reviews.js";
import bikesPricesPosts from "./bikes/prices.js";
import bikesComparePosts from "./bikes/compare.js";
import evBikesPosts from "./ev/bikes.js";
import insurancePosts from "./insurance/index.js";
import regionalPosts from "./regional/index.js";

// Re-export original sub-categories
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
  // New categories
  carsPricesPosts,
  bikesNewsPosts,
  bikesReviewsPosts,
  bikesPricesPosts,
  bikesComparePosts,
  evBikesPosts,
  insurancePosts,
  regionalPosts,
};

// Re-export category groups
export { newsPosts, reviewsPosts, guidesPosts };

// All posts combined
const blogPosts = [
  ...newsPosts,
  ...reviewsPosts,
  ...guidesPosts,
  ...carsPricesPosts,
  ...bikesNewsPosts,
  ...bikesReviewsPosts,
  ...bikesPricesPosts,
  ...bikesComparePosts,
  ...evBikesPosts,
  ...insurancePosts,
  ...regionalPosts,
];

// ─── Category metadata ────────────────────────────────────────────────────────

export const categoryNames = {
  "cars-news": "Car News",
  "cars-reviews": "Car Reviews",
  "cars-prices": "Car Prices",
  "cars-compare": "Car Comparisons",
  "bikes-news": "Bike News",
  "bikes-reviews": "Bike Reviews",
  "bikes-prices": "Bike Prices",
  "bikes-compare": "Bike Comparisons",
  "ev-cars": "EV Cars",
  "ev-bikes": "EV Bikes",
  "buying-guide": "Buying Guide",
  "insurance": "Insurance",
  "accessories": "Accessories",
  "regional": "Regional",
  "motorsport": "Motorsport",
};

export const categoryParents = {
  "cars-news": "cars",
  "cars-reviews": "cars",
  "cars-prices": "cars",
  "cars-compare": "cars",
  "bikes-news": "bikes",
  "bikes-reviews": "bikes",
  "bikes-prices": "bikes",
  "bikes-compare": "bikes",
  "ev-cars": "ev",
  "ev-bikes": "ev",
  "buying-guide": null,
  "insurance": null,
  "accessories": null,
  "regional": null,
  "motorsport": "cars",
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
