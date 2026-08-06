import "./globals.css";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Newsreader:ital,opsz,wght@0,6..72,300..600;1,6..72,300..500&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
