import { site } from "@/data/content";

// Emitted at /robots.txt by the App Router metadata file convention.
// Static at build time — nothing here reads the request.
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
