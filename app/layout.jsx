import { Fraunces, Newsreader, Space_Mono } from "next/font/google";

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
  title: "Raghav Gupta — Engineer / Builder",
  description:
    "Raghav Gupta — SDET turned solo builder. Years as the last quality gate before release; now shipping AI products end-to-end. Remote, worldwide.",
  icons: { icon: favicon },
  openGraph: {
    type: "website",
    title: "Raghav Gupta — Engineer / Builder",
    description:
      "SDET turned solo builder. Shipping AI products end-to-end. Remote, worldwide.",
  },
};

export const viewport = {
  themeColor: "#F0EDE8",
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
      <body>{children}</body>
    </html>
  );
}
