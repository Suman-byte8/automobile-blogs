// Guides — aggregates all guide sub-categories

import buyingGuidesPosts from "./buying-guides.js";
import accessoriesPosts from "./accessories.js";

export { buyingGuidesPosts, accessoriesPosts };

const guidesPosts = [...buyingGuidesPosts, ...accessoriesPosts];

export default guidesPosts;
