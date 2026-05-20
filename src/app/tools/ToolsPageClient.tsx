'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ToolCard } from '@/components/tools';
import { Star, Calculator, Moon, Heart, Sparkles, Compass, Mountain, ScrollText, Eye, Sun, Zap, Users, Hash, Globe, Rainbow, Palette, Target, Briefcase, DollarSign, HelpCircle, Wind } from 'lucide-react';

export default function ToolsPage() {
  const router = useRouter();
  const navigate = (v: string) => { router.push(v); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const [filter, setFilter] = useState('All');
  const categories = ['All','Advanced Astrology','Astrology Tools','Compatibility','Numerology','Chinese Zodiac Tools','Lucky Tools','Personality Tools','Tarot Tools','Guides'];
  const allTools = [
    { title:'Big Three Meaning Tool', description:'Interpret your Sun, Moon and Rising signs together as identity, emotional needs and outer style.', icon:<Star className="h-5 w-5"/>, view:'/tools/big-three-meaning', tag:'Advanced Astrology' },
    { title:'Planet Sign Meaning Tool', description:'Choose a planet and zodiac sign to generate a deeper interpretation of that placement.', icon:<Compass className="h-5 w-5"/>, view:'/tools/planet-sign-meaning', tag:'Advanced Astrology' },
    { title:'Moon Sign Meaning Tool', description:'Explore emotional needs, comfort patterns, stress responses and self-care themes by Moon sign.', icon:<Moon className="h-5 w-5"/>, view:'/tools/moon-sign-meaning', tag:'Advanced Astrology' },
    { title:'Venus Sign Love Style Tool', description:'Understand attraction, affection, relationship needs and love blind spots by Venus sign.', icon:<Heart className="h-5 w-5"/>, view:'/tools/venus-sign-love-style', tag:'Advanced Astrology' },
    { title:'Mars Sign Action Style Tool', description:'Explore motivation, conflict style, ambition, desire and stress reactions by Mars sign.', icon:<Sparkles className="h-5 w-5"/>, view:'/tools/mars-sign-action-style', tag:'Advanced Astrology' },
    { title:'Mercury Sign Communication Tool', description:'Understand thinking style, communication habits, learning rhythm by Mercury sign.', icon:<Wind className="h-5 w-5"/>, view:'/tools/mercury-sign-communication', tag:'Advanced Astrology' },
    { title:'Aspect Meaning Tool', description:'Understand conjunctions, squares, trines, sextiles and oppositions between two signs.', icon:<Sparkles className="h-5 w-5"/>, view:'/tools/aspect-meaning', tag:'Advanced Astrology' },
    { title:'Planet in House Meaning Tool', description:'Learn what a planet means when placed in each of the twelve astrological houses.', icon:<Mountain className="h-5 w-5"/>, view:'/tools/planet-in-house', tag:'Advanced Astrology' },
    { title:'Rising Sign Estimator', description:'A simplified educational rising-sign style prompt based on approximate birth time.', icon:<Eye className="h-5 w-5"/>, view:'/tools/rising-sign-estimator', tag:'Advanced Astrology' },
    { title:'Birth Chart Reading Checklist', description:'A practical step-by-step checklist for reading a natal chart in the right order.', icon:<ScrollText className="h-5 w-5"/>, view:'/tools/birth-chart-checklist', tag:'Guides' },
    { title:'Zodiac Sign Calculator', description:'Enter your birth date to find your zodiac sign with a detailed personality profile.', icon:<Calculator className="h-5 w-5"/>, view:'/tools/zodiac-calculator', tag:'Astrology Tools' },
    { title:'Daily Horoscope Generator', description:'Generate a light daily reflection prompt based on your zodiac sign.', icon:<Sun className="h-5 w-5"/>, view:'/tools/daily-horoscope', tag:'Astrology Tools' },
    { title:'2026 Horoscope Tool', description:'Explore a yearly reflection theme by zodiac sign for 2026.', icon:<Zap className="h-5 w-5"/>, view:'/tools/horoscope-2026', tag:'Astrology Tools' },
    { title:'Zodiac Compatibility Checker', description:'Check astrological compatibility between any two zodiac signs with detailed analysis.', icon:<Heart className="h-5 w-5"/>, view:'/tools/compatibility', tag:'Compatibility' },
    { title:'Love Compatibility Test', description:'Explore romantic compatibility between two signs with love-specific insights.', icon:<Heart className="h-5 w-5"/>, view:'/tools/love-compatibility', tag:'Compatibility' },
    { title:'Friendship Compatibility Calculator', description:'Understand platonic friendship dynamics between any two zodiac signs.', icon:<Users className="h-5 w-5"/>, view:'/tools/friendship-compatibility', tag:'Compatibility' },
    { title:'Life Path Number Calculator', description:'Calculate your numerology life path number from your birth date.', icon:<Hash className="h-5 w-5"/>, view:'/tools/life-path', tag:'Numerology' },
    { title:'Name Numerology Calculator', description:'Calculate the numerology vibration of any name using Pythagorean method.', icon:<Sparkles className="h-5 w-5"/>, view:'/tools/name-numerology', tag:'Numerology' },
    { title:'Personal Year Calculator', description:'Calculate a numerology personal year theme from your birth date.', icon:<Target className="h-5 w-5"/>, view:'/tools/personal-year', tag:'Numerology' },
    { title:'Angel Number Meaning Tool', description:'Look up a symbolic meaning for repeated numbers you keep seeing.', icon:<Globe className="h-5 w-5"/>, view:'/tools/angel-number', tag:'Numerology' },
    { title:'Chinese Zodiac Calculator', description:'Find your Chinese zodiac animal, traits, and compatibility from your birth year.', icon:<Users className="h-5 w-5"/>, view:'/tools/chinese-zodiac', tag:'Chinese Zodiac Tools' },
    { title:'Five Elements Calculator', description:'Explore a five-element personality theme from your Chinese zodiac birth year.', icon:<Rainbow className="h-5 w-5"/>, view:'/tools/five-elements', tag:'Chinese Zodiac Tools' },
    { title:'Lucky Color Calculator', description:'Get a symbolic color palette for focus, calm and confidence based on your zodiac sign.', icon:<Palette className="h-5 w-5"/>, view:'/tools/lucky-color', tag:'Lucky Tools' },
    { title:'Lucky Number Calculator', description:'Find a playful lucky number and reflection theme based on your zodiac sign.', icon:<Hash className="h-5 w-5"/>, view:'/tools/lucky-number', tag:'Lucky Tools' },
    { title:'Moon Phase Birthday Tool', description:'Find the moon phase on your birthday and what it reveals about your emotional nature.', icon:<Moon className="h-5 w-5"/>, view:'/tools/moon-phase', tag:'Lucky Tools' },
    { title:'Birthday Personality Calculator', description:'Turn a birthday into a gentle personality reflection based on zodiac sign.', icon:<Star className="h-5 w-5"/>, view:'/tools/birthday-personality', tag:'Personality Tools' },
    { title:'Career Personality Calculator', description:'Get career style prompts from personality inputs based on your zodiac sign.', icon:<Briefcase className="h-5 w-5"/>, view:'/tools/career-personality', tag:'Personality Tools' },
    { title:'Zodiac Money Style Calculator', description:'Reflect on spending, saving and comfort patterns by zodiac sign.', icon:<DollarSign className="h-5 w-5"/>, view:'/tools/zodiac-money-style', tag:'Personality Tools' },
    { title:'Birth Time Unknown Guide', description:'Learn what you can and cannot read accurately when birth time is unknown.', icon:<HelpCircle className="h-5 w-5"/>, view:'/tools/birth-time-unknown', tag:'Personality Tools' },
    { title:'Yes or No Tarot Picker', description:'Pick a symbolic card and receive a yes/no prompt for self-reflection.', icon:<Sparkles className="h-5 w-5"/>, view:'/tools/yes-no-tarot', tag:'Tarot Tools' },
  ];
  const seen = new Set<string>();
  const uniqueTools = allTools.filter(t => { if (seen.has(t.view)) return false; seen.add(t.view); return true; });
  const filtered = filter === 'All' ? uniqueTools : uniqueTools.filter(t => t.tag === filter);
  return (
    <div className="fade-in max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6"><Badge variant="secondary" className="mb-2">All Free Tools</Badge><h1 className="text-3xl font-bold mb-2">Astrology, Zodiac & Numerology Tools</h1><p className="text-muted-foreground">All tools are free, require no sign-up, and work directly in your browser. Choose a tool to get started.</p></div>
      <div className="flex flex-wrap gap-2 mb-6">{categories.map(c => (<Button key={c} variant={filter === c ? 'default' : 'outline'} size="sm" onClick={() => setFilter(c)}>{c}</Button>))}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">{filtered.map(t => <ToolCard key={t.view} {...t} navigate={navigate} />)}</div>
    </div>
  );
}
