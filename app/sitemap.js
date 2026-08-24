import { allStudies, site } from "@/data/content";

// Emitted at /sitemap.xml. Every route on the site is static and known at
// build time, so the whole map is one array: the long page, the CV, the case
// study index and one entry per study. `/cv` is a permanent redirect and is
// deliberately left out.
export default function sitemap() {
  const lastModified = new Date();

  return [
    { url: site.url, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: `${site.url}/work`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...allStudies.map((s) => ({
      url: `${site.url}/work/${s.slug}`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    })),
    {
      url: `${site.url}/resume`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
