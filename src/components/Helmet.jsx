import { useEffect } from "react";
import siteConfig from "../config/siteConfig";

export function Helmet({
  title,
  description,
  ogImage,
  canonicalUrl,
}) {
  useEffect(() => {
    const fullTitle = title
      ? siteConfig.seo.titleTemplate.replace("%s", title)
      : siteConfig.seo.defaultTitle;

    document.title = fullTitle;

    // Update meta tags
    const setMeta = (name, content, property = false) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description || siteConfig.description);
    if (ogImage) setMeta("og:image", ogImage, true);
    if (canonicalUrl) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonicalUrl);
    }

    return () => {
      // Reset title on unmount
      document.title = siteConfig.seo.defaultTitle;
    };
  }, [title, description, ogImage, canonicalUrl]);

  return null;
}
