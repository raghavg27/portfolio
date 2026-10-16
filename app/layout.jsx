import { Fraunces, Newsreader, Space_Mono } from "next/font/google";

import { services, site } from "@/data/content";
import "./globals.css";

// Self-hosted at build time — no request leaves the page for a font, and no
// render-blocking stylesheet on fonts.googleapis.com sits in front of FCP.
// Fraunces carries the opsz axis because headlines run from .6rem to 3.4rem
// and its default optical size is 14 — `font-optical-sizing: auto` in
// globals.css is a no-op without it.
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-display",
  fallback: ["Georgia", "serif"],
});

// No opsz here on purpose: Newsreader's default optical size is 16, which is
// what body copy is set at, and carrying the axis doubles the file.
const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-body",
  fallback: ["Georgia", "serif"],
});

// Space Mono is not a variable font and is only ever set upright here.
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-mono",
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
});

const favicon =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%23F0EDE8'/%3E%3Ctext x='16' y='23' font-family='Georgia,serif' font-size='20' font-weight='800' text-anchor='middle' fill='%231B1A17'%3ER%3C/text%3E%3C/svg%3E";

export const metadata = {
  // Required for the relative URLs below and for the opengraph-image file
  // convention to resolve to absolute URLs in the emitted meta tags.
  metadataBase: new URL(site.url),
  title: "Raghav Gupta — Websites, software & AI systems, built fast and proved",
  description:
    "Raghav Gupta designs and builds websites, full-stack apps, RAG pipelines and AI automation — fast, with AI in the workflow, and proved with five years of test engineering. AEO, security audits and AI evaluation too. Remote, worldwide.",
  icons: { icon: favicon },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Raghav Gupta",
    title: "Raghav Gupta — Websites, software & AI systems",
    description:
      "Built fast with AI, proved with five years of test engineering. Websites, full apps, RAG, AI automation, AEO and security audits. Remote, worldwide.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raghav Gupta — Websites, software & AI systems",
    description:
      "Built fast with AI, proved with five years of test engineering. Websites, full apps, RAG, AI automation, AEO and security audits. Remote, worldwide.",
  },
};

export const viewport = {
  themeColor: "#F0EDE8",
};

// One Person node for the whole site, so a search engine can tie the name, the
// profiles and the CV together instead of inferring them from the copy.
const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${site.url}/#person`,
  name: `${site.name.first} ${site.name.last}`,
  url: site.url,
  image: `${site.url}/opengraph-image.png`,
  jobTitle: "Full-stack & AI engineer",
  description:
    "Designs and builds websites, full-stack apps, RAG pipelines and AI automation, with five years of test engineering behind every release.",
  email: `mailto:${site.email}`,
  telephone: site.phoneHref,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi–NCR",
    addressCountry: "IN",
  },
  sameAs: [site.github, site.linkedin],
  knowsAbout: [
    "Retrieval-augmented generation",
    "AI automation",
    "Answer engine optimization",
    "AI agent evaluation",
    "Application security testing",
    "Test automation",
    "System design",
    "Next.js",
    "Django",
    "PostgreSQL",
  ],
  // One Offer per service card, so the services are machine-readable from the
  // same data the page renders.
  makesOffer: services.map((s) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: s.name,
      description: s.line,
      url: `${site.url}/#services`,
    },
  })),
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${newsreader.variable} ${spaceMono.variable}`}
    >
      <head>
        {/* Motion.jsx is what adds `.in` to revealables. If its bundle never
            runs, every `.reveal` / `.stagger` stays at opacity 0 and the page
            reads as blank. Keep the content visible when scripting is off. */}
        <noscript>
          <style>{`.reveal,.stagger>*{opacity:1!important;transform:none!important}#progress{display:none}`}</style>
        </noscript>
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        {children}
      </body>
    </html>
  );
}
