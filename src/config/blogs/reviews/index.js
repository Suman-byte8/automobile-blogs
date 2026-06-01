// Reviews — aggregates all review sub-categories

import vehicleReviewsPosts from "./vehicle-reviews.js";
import comparisonsPosts from "./comparisons.js";

export { vehicleReviewsPosts, comparisonsPosts };

const reviewsPosts = [...vehicleReviewsPosts, ...comparisonsPosts];

export default reviewsPosts;
