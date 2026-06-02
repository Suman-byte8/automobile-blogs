const navigationConfig = [
  {
    id: "home",
    label: "Home",
    path: "/",
    hasDropdown: false,
    children: [],
  },
  {
    id: "cars",
    label: "Cars",
    path: "/cars/news",
    hasDropdown: true,
    children: [
      { id: "cars-news", label: "News", path: "/cars/news", description: "Latest car news and launches" },
      { id: "cars-reviews", label: "Reviews", path: "/cars/reviews", description: "First drives and ownership reviews" },
      { id: "cars-prices", label: "Prices", path: "/cars/prices", description: "Price updates and variants" },
      { id: "cars-compare", label: "Compare", path: "/cars/compare", description: "Head-to-head comparisons" },
    ],
  },
  {
    id: "bikes",
    label: "Bikes",
    path: "/bikes/news",
    hasDropdown: true,
    children: [
      { id: "bikes-news", label: "News", path: "/bikes/news", description: "Latest bike news and launches" },
      { id: "bikes-reviews", label: "Reviews", path: "/bikes/reviews", description: "Bike first drives and reviews" },
      { id: "bikes-prices", label: "Prices", path: "/bikes/prices", description: "Bike price updates" },
      { id: "bikes-compare", label: "Compare", path: "/bikes/compare", description: "Bike head-to-head comparisons" },
    ],
  },
  {
    id: "ev",
    label: "EV",
    path: "/ev/cars",
    hasDropdown: true,
    children: [
      { id: "ev-cars", label: "EV Cars", path: "/ev/cars", description: "Electric car news and reviews" },
      { id: "ev-bikes", label: "EV Bikes", path: "/ev/bikes", description: "Electric bike news and reviews" },
    ],
  },
  {
    id: "buying-guide",
    label: "Buying Guide",
    path: "/buying-guide",
    hasDropdown: false,
    children: [],
  },
  {
    id: "insurance",
    label: "Insurance",
    path: "/insurance",
    hasDropdown: false,
    children: [],
  },
  {
    id: "accessories",
    label: "Accessories",
    path: "/accessories",
    hasDropdown: false,
    children: [],
  },
  {
    id: "regional",
    label: "Regional",
    path: "/regional",
    hasDropdown: false,
    children: [],
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
];

export default navigationConfig;

export function getAllPaths() {
  const paths = [];
  function traverse(items) {
    for (const item of items) {
      paths.push(item.path);
      if (item.children && item.children.length > 0) traverse(item.children);
    }
  }
  traverse(navigationConfig);
  return paths;
}

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
