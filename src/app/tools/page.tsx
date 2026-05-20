import type { Metadata } from 'next';
import ToolsPageClient from './ToolsPageClient';

export const metadata: Metadata = {
  title: 'Astrology, Zodiac & Numerology Tools',
  description: 'Browse all free astrology, zodiac, compatibility, numerology, and tarot tools with no sign-up required.',
  alternates: { canonical: 'https://astroinsighttools.com/tools' },
  twitter: { card: 'summary_large_image' },
  openGraph: {
    url: 'https://astroinsighttools.com/tools',
    title: 'Astrology, Zodiac & Numerology Tools — Astro Insight Tools',
    description: 'Browse all free astrology, zodiac, compatibility, numerology, and tarot tools with no sign-up required.',
  },
};

export default function ToolsPage() {
  return <ToolsPageClient />;
}
