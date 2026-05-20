import type { Metadata } from 'next';
import { DisclaimerPage } from '@/components/compliance';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Read the Astro Insight Tools disclaimer for limitations, intended use, and non-professional advice notice.',
  alternates: { canonical: 'https://astroinsighttools.com/disclaimer' },
  twitter: { card: 'summary' },
  openGraph: {
    url: 'https://astroinsighttools.com/disclaimer',
    title: 'Disclaimer — Astro Insight Tools',
    description: 'Read the Astro Insight Tools disclaimer for limitations, intended use, and non-professional advice notice.',
  },
};

export default function DisclaimerRoute() { return <DisclaimerPage />; }
