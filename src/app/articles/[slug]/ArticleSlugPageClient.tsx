'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import {
  BigThreeArticle, PlanetSignArticle, AspectsArticle, HousesArticle,
  ZodiacSignsGuideArticle, AstroBeginnersArticle, LifePathArticle, ChineseZodiacGuideArticle,
} from '@/components/articles';
import {
  MoonSignArticle, VenusSignArticle, MarsSignArticle, MercurySignArticle,
  ZodiacCompatibilityArticle, NumerologyBeginnersArticle, RisingSignArticle,
  AngelNumbersArticle, ChineseFiveElementsArticle, BirthChartReadingArticle,
} from '@/components/articles-extra';
import {
  FireSignsArticle, EarthSignsArticle, AirSignsArticle, WaterSignsArticle, LoveCompatibilityArticle,
} from '@/components/articles-batch3a';
import {
  MoonPhasesArticle, NameNumerologyArticle, CareerAstrologyArticle,
  FriendshipCompatibilityArticle, JupiterSaturnArticle,
} from '@/components/articles-batch3b';
import {
  SaturnReturnArticle, RetrogradePlanetsArticle,
} from '@/components/articles-batch4';

const slugToArticle: Record<string, (props: { navigate: (v: string) => void }) => React.ReactElement> = {
  'big-three-guide': (p) => <BigThreeArticle {...p} />,
  'planet-sign-placements': (p) => <PlanetSignArticle {...p} />,
  'astrology-aspects-guide': (p) => <AspectsArticle {...p} />,
  'astrology-houses-guide': (p) => <HousesArticle {...p} />,
  'zodiac-signs-guide': (p) => <ZodiacSignsGuideArticle {...p} />,
  'astrology-beginners-guide': (p) => <AstroBeginnersArticle {...p} />,
  'life-path-meanings': (p) => <LifePathArticle {...p} />,
  'chinese-zodiac-guide': (p) => <ChineseZodiacGuideArticle {...p} />,
  'moon-sign-guide': (p) => <MoonSignArticle {...p} />,
  'venus-sign-love-guide': (p) => <VenusSignArticle {...p} />,
  'mars-sign-motivation-guide': (p) => <MarsSignArticle {...p} />,
  'mercury-sign-communication-guide': (p) => <MercurySignArticle {...p} />,
  'zodiac-compatibility-guide': (p) => <ZodiacCompatibilityArticle {...p} />,
  'numerology-beginners-guide': (p) => <NumerologyBeginnersArticle {...p} />,
  'rising-sign-guide': (p) => <RisingSignArticle {...p} />,
  'angel-numbers-guide': (p) => <AngelNumbersArticle {...p} />,
  'chinese-five-elements-guide': (p) => <ChineseFiveElementsArticle {...p} />,
  'birth-chart-reading-guide': (p) => <BirthChartReadingArticle {...p} />,
  'fire-signs-guide': (p) => <FireSignsArticle {...p} />,
  'earth-signs-guide': (p) => <EarthSignsArticle {...p} />,
  'air-signs-guide': (p) => <AirSignsArticle {...p} />,
  'water-signs-guide': (p) => <WaterSignsArticle {...p} />,
  'love-compatibility-guide': (p) => <LoveCompatibilityArticle {...p} />,
  'moon-phases-guide': (p) => <MoonPhasesArticle {...p} />,
  'name-numerology-guide': (p) => <NameNumerologyArticle {...p} />,
  'career-astrology-guide': (p) => <CareerAstrologyArticle {...p} />,
  'friendship-compatibility-guide': (p) => <FriendshipCompatibilityArticle {...p} />,
  'jupiter-saturn-guide': (p) => <JupiterSaturnArticle {...p} />,
  'saturn-return-guide': (p) => <SaturnReturnArticle {...p} />,
  'retrograde-planets-guide': (p) => <RetrogradePlanetsArticle {...p} />,
};


export default function ArticleSlugPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;
  const navigate = (v: string) => { router.push(v); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  const ArticleComponent = slugToArticle[slug];
  if (!ArticleComponent) {
    return <div className="max-w-3xl mx-auto px-4 py-8 text-center"><h1 className="text-2xl font-bold mb-4">Article Not Found</h1><p className="text-muted-foreground">The article you are looking for does not exist.</p></div>;
  }
  return <ArticleComponent navigate={navigate} />;
}
