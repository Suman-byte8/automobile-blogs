// Site Configuration - global metadata, social links, contact info

const siteConfig = {
  name: "AutoStream",
  tagline: "Your Daily Dose of Automotive Excellence",
  description:
    "AutoStream delivers the latest automotive news, in-depth reviews, expert buying guides, and motorsport coverage. Stay informed with our comprehensive vehicle comparisons and EV updates.",
  url: "https://autostream.com",
  logo: "/images/logo.svg",
  logoAlt: "AutoStream Logo",
  founded: 2018,
  social: {
    twitter: "https://twitter.com/autostream",
    facebook: "https://facebook.com/autostream",
    instagram: "https://instagram.com/autostream",
    youtube: "https://youtube.com/autostream",
    rss: "/rss",
  },
  contact: {
    email: "hello@autostream.com",
    phone: "+1 (555) 123-4567",
    address: "123 Auto Drive, Motor City, MC 48123",
    tipEmail: "tips@autostream.com",
    pressEmail: "press@autostream.com",
  },
  seo: {
    defaultTitle: "AutoStream - Automotive News, Reviews & Guides",
    titleTemplate: "%s | AutoStream",
    twitterHandle: "@autostream",
    ogImage: "/images/og-default.jpg",
  },
  newsletter: {
    title: "Stay in the Fast Lane",
    description:
      "Get the latest automotive news, reviews, and exclusive content delivered straight to your inbox every week.",
    placeholder: "Enter your email",
    buttonText: "Subscribe",
  },
};

export default siteConfig;
