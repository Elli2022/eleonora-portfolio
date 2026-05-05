import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://eleonora-portfolio.netlify.app"),
  title: {
    default: "Eleonora Nocentini Sköldebrink | Webbportfolio",
    template: "%s | Eleonora Nocentini",
  },
  description:
    "Webbutvecklar-portfolio med skarpa case i Next.js, React och TypeScript. Fokus på tydlig design, snabb frontend och affärsnytta för företag.",
  keywords: [
    "webbutvecklare",
    "frontend developer",
    "Next.js",
    "React",
    "TypeScript",
    "portfolio",
    "frilans",
    "Netlify",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "/",
    siteName: "Eleonora Portfolio",
    title: "Eleonora Nocentini Sköldebrink | Webbportfolio",
    description:
      "Utvalda webbprojekt med tydlig känsla, modern frontend och fokus på resultat.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Eleonora Nocentini Sköldebrink - Webbportfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eleonora Nocentini Sköldebrink | Webbportfolio",
    description:
      "Utvalda webbprojekt med modern frontend och tydligt affärsfokus.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
