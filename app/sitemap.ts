import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/packages", "/packages/manali-tour-package", "/packages/char-dham-tour-package", "/services", "/contact", "/privacy-policy", "/terms-and-conditions"].map((p) => ({ url: `${site.url}${p}` }));
}
