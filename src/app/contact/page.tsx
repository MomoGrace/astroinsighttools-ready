import type { Metadata } from 'next';
import { ContactPage } from '@/components/compliance';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Astro Insight Tools for questions, feedback, or support related to our free calculators and guides.',
  alternates: { canonical: 'https://astroinsighttools.com/contact' },
  twitter: { card: 'summary' },
  openGraph: {
    url: 'https://astroinsighttools.com/contact',
    title: 'Contact Astro Insight Tools — Astro Insight Tools',
    description: 'Get in touch with Astro Insight Tools for questions, feedback, or support related to our free calculators and guides.',
  },
};

export default function ContactRoute() { return <ContactPage />; }
