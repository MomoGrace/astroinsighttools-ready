'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { allArticleSlugList, articleSlugs } from '@/lib/slug-map';

function ArticleCard({ title, description, tag, readTime, slug }: { title: string; description: string; tag: string; readTime: string; slug: string }) {
  return (
    <Link href={`/articles/${slug}`} className="block">
      <Card className="group hover:shadow-lg transition-all duration-200 cursor-pointer border-border/50 h-full">
        <CardHeader>
          <Badge variant="secondary" className="w-fit text-xs">{tag}</Badge>
          <CardTitle className="text-lg group-hover:text-primary transition-colors">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{description}</CardDescription>
          <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{readTime}</span>
            <span className="flex items-center gap-1 text-primary font-medium">Read guide <ChevronRight className="h-3 w-3" /></span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

const readTimes: Record<string, string> = {
  'big-three-guide': '10 min read', 'planet-sign-placements': '12 min read', 'astrology-aspects-guide': '11 min read',
  'astrology-houses-guide': '10 min read', 'zodiac-signs-guide': '15 min read', 'astrology-beginners-guide': '12 min read',
  'life-path-meanings': '10 min read', 'chinese-zodiac-guide': '11 min read', 'moon-sign-guide': '12 min read',
  'venus-sign-love-guide': '11 min read', 'mars-sign-motivation-guide': '10 min read', 'mercury-sign-communication-guide': '10 min read',
  'zodiac-compatibility-guide': '14 min read', 'numerology-beginners-guide': '12 min read', 'rising-sign-guide': '11 min read',
  'angel-numbers-guide': '11 min read', 'chinese-five-elements-guide': '10 min read', 'birth-chart-reading-guide': '13 min read',
  'fire-signs-guide': '12 min read', 'earth-signs-guide': '12 min read', 'air-signs-guide': '12 min read',
  'water-signs-guide': '12 min read', 'love-compatibility-guide': '14 min read', 'moon-phases-guide': '11 min read',
  'name-numerology-guide': '11 min read', 'career-astrology-guide': '13 min read', 'friendship-compatibility-guide': '12 min read',
  'jupiter-saturn-guide': '11 min read', 'saturn-return-guide': '14 min read', 'retrograde-planets-guide': '15 min read',
};

export default function ArticlesPage() {
  return (
    <div className="fade-in max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6"><Badge variant="secondary" className="mb-2">Learning Center</Badge><h1 className="text-3xl font-bold mb-2">Astrology Guides & Articles</h1><p className="text-muted-foreground">In-depth guides to help you understand astrology, numerology, and how to use these tools for self-reflection.</p></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allArticleSlugList.map(slug => {
          const meta = articleSlugs[slug];
          if (!meta) return null;
          return <ArticleCard key={slug} title={meta.title} description={meta.description} tag={meta.tag} readTime={readTimes[slug] || '10 min read'} slug={slug} />;
        })}
      </div>
    </div>
  );
}
