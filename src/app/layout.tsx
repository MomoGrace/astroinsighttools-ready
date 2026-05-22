import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SiteHeader, SiteFooter, CookieConsent } from "@/components/site-layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://astroinsighttools.com"),
  title: {
    default: "Astro Insight Tools — Free Astrology & Numerology Calculators",
    template: "%s | Astro Insight Tools",
  },
  description:
    "Explore free astrology and numerology tools for self-reflection. Calculate your zodiac sign, moon phase, life path number, compatibility, name numerology, Chinese zodiac, and more.",
  keywords: [
    "astrology tools",
    "zodiac calculator",
    "moon phase calculator",
    "life path number",
    "numerology",
    "compatibility checker",
    "Chinese zodiac",
    "birth chart",
    "free astrology",
    "self-reflection",
  ],
  authors: [{ name: "Astro Insight Tools" }],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>✨</text></svg>",
  },
  openGraph: {
    title: "Astro Insight Tools — Free Astrology & Numerology Calculators",
    description:
      "Explore free astrology and numerology tools for self-reflection. Calculate your zodiac sign, moon phase, life path number, compatibility, and more.",
    url: "https://astroinsighttools.com/",
    type: "website",
  },
  alternates: {
    canonical: "https://astroinsighttools.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5952834143682557"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <div className="min-h-screen flex flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <CookieConsent />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
