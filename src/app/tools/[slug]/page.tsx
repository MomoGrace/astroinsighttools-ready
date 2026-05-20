import type { Metadata } from 'next';
import ToolSlugPageClient from './ToolSlugPageClient';
import { toolSlugs } from '@/lib/slug-map';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = toolSlugs[slug];

  if (!tool) {
    return {
      title: 'Tool Not Found',
      description: 'The requested tool could not be found.',
      alternates: { canonical: `https://astroinsighttools.com/tools/${slug}` },
      openGraph: {
        url: `https://astroinsighttools.com/tools/${slug}`,
        title: 'Tool Not Found — Astro Insight Tools',
      },
    };
  }

  const title = `${tool.title} — Astro Insight Tools`;
  return {
    title,
    description: tool.description,
    alternates: { canonical: `https://astroinsighttools.com/tools/${slug}` },
    openGraph: {
      url: `https://astroinsighttools.com/tools/${slug}`,
      title,
      description: tool.description,
    },
  };
}

export default function ToolSlugPage() {
  return <ToolSlugPageClient />;
}
