// Navigation Configuration
// Parent-child structure with dropdown menus and sub-menus

const navigationConfig = [
  {
    id: "home",
    label: "Home",
    path: "/",
    hasDropdown: false,
    children: [],
  },
  {
    id: "news",
    label: "News",
    path: "/category/news",
    hasDropdown: true,
    children: [
      {
        id: "car-news",
        label: "Car News",
        path: "/category/news/car-news",
        description: "Latest updates from the automobile world",
      },
      {
        id: "bike-news",
        label: "Bike News",
        path: "/category/news/bike-news",
        description: "Two-wheeler launches and updates",
      },
      {
        id: "ev-news",
        label: "EV News",
        path: "/category/news/ev-news",
        description: "Electric vehicle industry developments",
      },
      {
        id: "motorsport",
        label: "Motorsport",
        path: "/category/news/motorsport",
        description: "F1, MotoGP, WRC and more",
      },
    ],
  },
  {
    id: "reviews",
    label: "Reviews",
    path: "/category/reviews",
    hasDropdown: true,
    children: [
      {
        id: "vehicle-reviews",
        label: "Vehicle Reviews",
        path: "/category/reviews/vehicle-reviews",
        description: "In-depth vehicle test drives and reviews",
      },
      {
        id: "comparisons",
        label: "Comparisons",
        path: "/category/reviews/comparisons",
        description: "Head-to-head vehicle comparisons",
      },
    ],
  },
  {
    id: "guides",
    label: "Guides",
    path: "/category/guides",
    hasDropdown: true,
    children: [
      {
        id: "buying-guides",
        label: "Buying Guides",
        path: "/category/guides/buying-guides",
        description: "Expert advice for your next purchase",
      },
      {
        id: "accessories",
        label: "Accessories",
        path: "/category/guides/accessories",
        description: "Best gear and accessories reviewed",
      },
    ],
  },
  {
    id: "about",
    label: "About",
    path: "/about",
    hasDropdown: false,
    children: [],
  },
  {
    id: "contact",
    label: "Contact",
    path: "/contact",
    hasDropdown: false,
    children: [],
  },
  {
    id: "write-for-us",
    label: "Write for Us",
    path: "/write-for-us",
    hasDropdown: false,
    children: [],
  },
];

export default navigationConfig;

// Flatten all navigable paths for route matching
export function getAllPaths() {
  const paths = [];
  function traverse(items) {
    for (const item of items) {
      paths.push(item.path);
      if (item.children && item.children.length > 0) {
        traverse(item.children);
      }
    }
  }
  traverse(navigationConfig);
  return paths;
}

// Find a nav item by path
export function findNavItem(path) {
  function search(items) {
    for (const item of items) {
      if (item.path === path) return item;
      if (item.children && item.children.length > 0) {
        const found = search(item.children);
        if (found) return found;
      }
    }
    return null;
  }
  return search(navigationConfig);
}
