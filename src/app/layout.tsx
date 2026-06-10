import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eleonora-portfolio.netlify.app"),
  title: {
    default: "Eleonora Nocentini Sköldebrink | Webbportfolio",
    template: "%s | Eleonora Nocentini",
  },
  description:
    "Frilans webbutvecklare med referenser för SMB och organisationer – landningssidor, företagswebbar och frontend i Next.js/React och WordPress där det passar. Tydliga leveranser och överlämning.",
  keywords: [
    "webbutvecklare",
    "frilans webbutvecklare",
    "frontend",
    "Next.js",
    "React",
    "TypeScript",
    "WordPress",
    "landningssida",
    "företagswebb",
    "Netlify",
    "SMB",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "/",
    siteName: "Eleonora Portfolio",
    title: "Eleonora Nocentini Sköldebrink | Webbportfolio",
    description:
      "Referenser och case: webb för företag och organisationer med tydliga leveranser och modern frontend.",
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
      "Frilans webbutveckling med trygga leveranser och fokus på resultat.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${inter.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
