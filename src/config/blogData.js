import carNewsPosts from "./blogs/news/car-news.js";
import bikeNewsPosts from "./blogs/news/bike-news.js";
import evCarsPosts from "./blogs/news/ev-news.js";
import motorsportPosts from "./blogs/news/motorsport.js";
import carsReviewsPosts from "./blogs/reviews/vehicle-reviews.js";
import carsComparePosts from "./blogs/reviews/comparisons.js";
import buyingGuidePosts from "./blogs/guides/buying-guides.js";
import accessoriesPosts from "./blogs/guides/accessories.js";
import carsPricesPosts from "./blogs/cars/prices.js";
import bikesNewsPosts from "./blogs/bikes/news.js";
import bikesReviewsPosts from "./blogs/bikes/reviews.js";
import bikesPricesPosts from "./blogs/bikes/prices.js";
import bikesComparePosts from "./blogs/bikes/compare.js";
import evBikesPosts from "./blogs/ev/bikes.js";
import insurancePosts from "./blogs/insurance/index.js";
import regionalPosts from "./blogs/regional/index.js";

const blogPosts = [
  ...carNewsPosts,
  ...bikeNewsPosts,
  ...evCarsPosts,
  ...motorsportPosts,
  ...carsReviewsPosts,
  ...carsComparePosts,
  ...buyingGuidePosts,
  ...accessoriesPosts,
  ...carsPricesPosts,
  ...bikesNewsPosts,
  ...bikesReviewsPosts,
  ...bikesPricesPosts,
  ...bikesComparePosts,
  ...evBikesPosts,
  ...insurancePosts,
  ...regionalPosts,
];

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
  return post.relatedPosts.map((id) => blogPosts.find((p) => p.id === id)).filter(Boolean);
}

export function getRecentPosts(excludeSlug = null, limit = 4) {
  return blogPosts
    .filter((post) => post.slug !== excludeSlug)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
}

export default blogPosts;
