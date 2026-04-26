import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eleonora Nocentini Sköldebrink | Portfolio",
  description:
    "Portfolio med utvalda webbprojekt, modern frontend och tydliga digitala upplevelser.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
