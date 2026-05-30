// AdSense Ad Unit Configurations
// All dimensions in pixels. slot = AdSense ad slot ID (placeholder for demo)
// responsiveVisibility: controls which breakpoints show the ad

export const adUnits = [
  {
    id: "ad-banner-1",
    size: "970x250",
    width: 970,
    height: 250,
    slot: "1234567890",
    label: "Main Banner (970x250)",
    responsiveVisibility: "hidden md:block", // hidden on mobile, visible on md+
    position: "top",
  },
  {
    id: "ad-rectangle-1",
    size: "300x250",
    width: 300,
    height: 250,
    slot: "1234567891",
    label: "Medium Rectangle (300x250)",
    responsiveVisibility: "block", // visible everywhere
    position: "sidebar",
  },
  {
    id: "ad-leaderboard-1",
    size: "970x90",
    width: 970,
    height: 90,
    slot: "1234567892",
    label: "Large Leaderboard (970x90)",
    responsiveVisibility: "hidden lg:block", // hidden on mobile/tablet
    position: "mid-content",
  },
  {
    id: "ad-leaderboard-2",
    size: "728x90",
    width: 728,
    height: 90,
    slot: "1234567893",
    label: "Standard Leaderboard (728x90)",
    responsiveVisibility: "hidden md:block lg:hidden", // tablet only
    position: "mid-content",
  },
  {
    id: "ad-mobile-1",
    size: "300x50",
    width: 300,
    height: 50,
    slot: "1234567894",
    label: "Mobile Banner (300x50)",
    responsiveVisibility: "block md:hidden", // mobile only
    position: "top",
  },
  {
    id: "ad-mobile-2",
    size: "320x100",
    width: 320,
    height: 100,
    slot: "1234567895",
    label: "Mobile Leaderboard (320x100)",
    responsiveVisibility: "block md:hidden", // mobile only
    position: "mid-content",
  },
  {
    id: "ad-skyscraper-1",
    size: "300x600",
    width: 300,
    height: 600,
    slot: "1234567896",
    label: "Skyscraper (300x600)",
    responsiveVisibility: "hidden lg:block", // desktop only
    position: "sidebar",
  },
  {
    id: "ad-rectangle-2",
    size: "300x250",
    width: 300,
    height: 250,
    slot: "1234567897",
    label: "Medium Rectangle 2 (300x250)",
    responsiveVisibility: "block", // visible everywhere
    position: "footer",
  },
];

// Layout configurations for different page types
export const homepageAdLayout = [
  "ad-banner-1",    // 970x250 - top (desktop)
  "ad-mobile-1",    // 300x50 - top (mobile)
  "ad-rectangle-1", // 300x250 - sidebar
  "ad-skyscraper-1",// 300x600 - sidebar (desktop)
  "ad-leaderboard-1",// 970x90 - mid (desktop)
  "ad-leaderboard-2",// 728x90 - mid (tablet)
  "ad-mobile-2",    // 320x100 - mid (mobile)
  "ad-rectangle-2", // 300x250 - footer
];

export const articleAdLayout = [
  "ad-banner-1",    // 970x250 - after title (desktop)
  "ad-mobile-1",    // 300x50 - after title (mobile)
  "ad-rectangle-1", // 300x250 - after first paragraph
  "ad-leaderboard-1",// 970x90 - mid content (desktop)
  "ad-leaderboard-2",// 728x90 - mid content (tablet)
  "ad-mobile-2",    // 320x100 - mid content (mobile)
  "ad-skyscraper-1",// 300x600 - sidebar (desktop)
  "ad-rectangle-2", // 300x250 - before footer
];

export const listingAdLayout = [
  "ad-banner-1",
  "ad-mobile-1",
  "ad-rectangle-1",
  "ad-skyscraper-1",
  "ad-leaderboard-1",
  "ad-leaderboard-2",
  "ad-mobile-2",
  "ad-rectangle-2",
];

// Get ad unit by ID
export function getAdUnit(id) {
  return adUnits.find((ad) => ad.id === id);
}

// Get ad units by layout
export function getAdsByLayout(layout) {
  return layout.map((id) => getAdUnit(id)).filter(Boolean);
}
