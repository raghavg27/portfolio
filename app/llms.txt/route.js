import { allStudies, hero, services, site } from "@/data/content";

// /llms.txt — a plain-text map of the site for AI assistants and answer
// engines (see llmstxt.org). Built from data/content.js like everything else,
// and prerendered at build time: there is nothing request-dependent in it.
export const dynamic = "force-static";

export function GET() {
  const name = `${site.name.first} ${site.name.last}`;

  const body = [
    `# ${name}`,
    "",
    `> ${hero.lede}`,
    "",
    `${name} is a full-stack and AI engineer based in ${site.location}, working remotely with clients worldwide.`,
    "",
    "## Services",
    "",
    ...services.map((s) => `- ${s.name}: ${s.line}`),
    "",
    "## Case studies",
    "",
    ...allStudies.map((c) => `- [${c.name}](${site.url}/work/${c.slug}): ${c.card}`),
    "",
    "## Contact",
    "",
    `- Email: ${site.email}`,
    `- LinkedIn: ${site.linkedin}`,
    `- GitHub: ${site.github}`,
    `- CV: ${site.url}/resume`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
