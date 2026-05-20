import type { Metadata } from 'next';
import { TermsPage } from '@/components/compliance';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Review the Astro Insight Tools Terms of Use for website usage guidelines, disclaimers, and legal terms.',
  alternates: { canonical: 'https://astroinsighttools.com/terms' },
  openGraph: {
    url: 'https://astroinsighttools.com/terms',
    title: 'Terms of Use — Astro Insight Tools',
    description: 'Review the Astro Insight Tools Terms of Use for website usage guidelines, disclaimers, and legal terms.',
  },
};

export default function TermsRoute() { return <TermsPage />; }
