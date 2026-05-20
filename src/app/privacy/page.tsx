import type { Metadata } from 'next';
import { PrivacyPage } from '@/components/compliance';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read the Astro Insight Tools Privacy Policy to understand what data is collected and how it is used.',
  alternates: { canonical: 'https://astroinsighttools.com/privacy' },
  twitter: { card: 'summary' },
  openGraph: {
    url: 'https://astroinsighttools.com/privacy',
    title: 'Privacy Policy — Astro Insight Tools',
    description: 'Read the Astro Insight Tools Privacy Policy to understand what data is collected and how it is used.',
  },
};

export default function PrivacyRoute() { return <PrivacyPage />; }
