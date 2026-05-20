import type { Metadata } from 'next';
import ArticlesPageClient from './ArticlesPageClient';

export const metadata: Metadata = {
  title: 'Astrology & Numerology Guides',
  description: 'Read astrology and numerology guides covering signs, compatibility, birth charts, moon phases, and more.',
  alternates: { canonical: 'https://astroinsighttools.com/articles' },
  twitter: { card: 'summary_large_image' },
  openGraph: {
    url: 'https://astroinsighttools.com/articles',
    title: 'Astrology & Numerology Guides — Astro Insight Tools',
    description: 'Read astrology and numerology guides covering signs, compatibility, birth charts, moon phases, and more.',
  },
};

export default function ArticlesPage() {
  return <ArticlesPageClient />;
}
