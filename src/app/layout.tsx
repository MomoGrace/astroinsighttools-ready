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
  title: "Astro Insight Tools — Free Astrology & Numerology Calculators",
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
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are astrology tools free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all astrology and numerology tools on Astro Insight Tools are 100% free to use. No sign-up or payment required.",
        },
      },
      {
        "@type": "Question",
        name: "How accurate are the astrology calculations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our calculations follow standard astrological and numerological methods. However, astrology and numerology are for entertainment and self-reflection purposes only and should not be used as professional advice.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to create an account?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, you do not need to create an account or sign up to use any of our tools or read our guides.",
        },
      },
    ],
  };

  const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Astro Insight Tools",
    description:
      "Free astrology and numerology tools for self-reflection and entertainment.",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webAppJsonLd),
          }}
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
