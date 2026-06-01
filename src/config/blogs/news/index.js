// News — aggregates all news sub-categories

import carNewsPosts from "./car-news.js";
import bikeNewsPosts from "./bike-news.js";
import evNewsPosts from "./ev-news.js";
import motorsportPosts from "./motorsport.js";

export { carNewsPosts, bikeNewsPosts, evNewsPosts, motorsportPosts };

const newsPosts = [
  ...carNewsPosts,
  ...bikeNewsPosts,
  ...evNewsPosts,
  ...motorsportPosts,
];

export default newsPosts;
