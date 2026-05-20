import type { Metadata } from 'next';
import { AboutPage } from '@/components/compliance';

export const metadata: Metadata = {
  title: 'About Astro Insight Tools',
  description: 'Learn about Astro Insight Tools and our mission to provide free astrology and numerology tools for self-reflection.',
  alternates: { canonical: 'https://astroinsighttools.com/about' },
  openGraph: {
    url: 'https://astroinsighttools.com/about',
    title: 'About Astro Insight Tools — Astro Insight Tools',
    description: 'Learn about Astro Insight Tools and our mission to provide free astrology and numerology tools for self-reflection.',
  },
};

export default function AboutRoute() { return <AboutPage />; }
