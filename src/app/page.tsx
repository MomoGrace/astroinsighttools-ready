'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Star, Calculator, Moon, Heart, Sparkles, BookOpen, Compass, Flame, Wind, Clock, ChevronRight } from 'lucide-react';
import { ToolCard } from '@/components/tools';

const topTools = [
  { title:'Big Three Meaning Tool', description:'Interpret your Sun, Moon and Rising signs together as identity, emotional needs and outer style.', icon:<Star className="h-5 w-5"/>, view:'/tools/big-three-meaning', tag:'Advanced Astrology' },
  { title:'Planet Sign Meaning Tool', description:'Choose a planet and zodiac sign to generate a deeper interpretation of that placement.', icon:<Compass className="h-5 w-5"/>, view:'/tools/planet-sign-meaning', tag:'Advanced Astrology' },
  { title:'Moon Sign Meaning Tool', description:'Explore emotional needs, comfort patterns, stress responses and self-care themes by Moon sign.', icon:<Moon className="h-5 w-5"/>, view:'/tools/moon-sign-meaning', tag:'Advanced Astrology' },
  { title:'Venus Sign Love Style Tool', description:'Understand attraction, affection, relationship needs and love blind spots by Venus sign.', icon:<Heart className="h-5 w-5"/>, view:'/tools/venus-sign-love-style', tag:'Advanced Astrology' },
  { title:'Mars Sign Action Style Tool', description:'Explore motivation, conflict style, ambition, desire and stress reactions by Mars sign.', icon:<Flame className="h-5 w-5"/>, view:'/tools/mars-sign-action-style', tag:'Advanced Astrology' },
  { title:'Mercury Sign Communication Tool', description:'Understand thinking style, communication habits, learning rhythm and conflict language by Mercury sign.', icon:<Wind className="h-5 w-5"/>, view:'/tools/mercury-sign-communication', tag:'Advanced Astrology' },
];

const topArticles = [
  { title:'Big Three Astrology Guide: Sun, Moon and Rising', description:'Understand how Sun, Moon and Rising signs work together in a birth chart.', tag:'Guide', readTime:'10 min read', view:'/articles/big-three-guide' },
  { title:'Planet Sign Placements Guide', description:'Learn what it means when a planet is in a zodiac sign.', tag:'Guide', readTime:'12 min read', view:'/articles/planet-sign-placements' },
  { title:'Astrology Aspects Beginner Guide', description:'Understand conjunctions, squares, trines, sextiles and oppositions in simple language.', tag:'Guide', readTime:'11 min read', view:'/articles/astrology-aspects-guide' },
];

function ArticleCard({ title, description, tag, readTime, view }: { title: string; description: string; tag: string; readTime: string; view: string }) {
  return (
    <Link href={view} className="block">
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

export default function HomePage() {
  const router = useRouter();
  const navigate = (v: string) => { router.push(v); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <div className="fade-in">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
          <span className="inline-block mb-4 text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">✦ Advanced astrology interpretation tools</span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 max-w-3xl mx-auto">Deeper astrology insight tools for curious minds.</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">Explore zodiac signs, compatibility, numerology, Big Three meanings, planet signs, houses and aspects. Built as a calm, useful tool hub for entertainment, journaling and self-reflection.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" onClick={() => navigate('/tools')}>Explore Free Tools</Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/tools/big-three-meaning')}>Try Big Three Tool</Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-2xl mx-auto">
            {[{v:'30',l:'Tools'},{v:'30',l:'Guides'},{v:'Free',l:'Browser tools'},{v:'No',l:'Sign-up needed'}].map(s=>(<div key={s.l} className="text-center p-4"><div className="text-2xl md:text-3xl font-bold text-primary">{s.v}</div><div className="text-xs text-muted-foreground mt-1">{s.l}</div></div>))}
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <div><h2 className="text-2xl font-bold">Advanced tools</h2><p className="text-muted-foreground text-sm">Report-style astrology interpretation tools that users can use after they know parts of their chart.</p></div>
          <Button variant="outline" onClick={() => navigate('/tools')}>View all tools →</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{topTools.map(t => <ToolCard key={t.view} {...t} navigate={navigate} />)}</div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <div><h2 className="text-2xl font-bold">Advanced guides</h2><p className="text-muted-foreground text-sm">Readable chart interpretation guides with tables, examples, FAQs and safe-use reminders.</p></div>
          <Button variant="outline" onClick={() => navigate('/articles')}>Read all guides →</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{topArticles.map(a => <ArticleCard key={a.view} {...a} />)}</div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1"><AccordionTrigger>Are Astro Insight Tools free to use?</AccordionTrigger><AccordionContent className="text-sm leading-7 text-muted-foreground">Yes. The tools on Astro Insight Tools are free to use for personal entertainment, reflection, and self-discovery.</AccordionContent></AccordionItem>
            <AccordionItem value="q2"><AccordionTrigger>Do I need my exact birth time for every tool?</AccordionTrigger><AccordionContent className="text-sm leading-7 text-muted-foreground">No. Some tools can work with your birth date or zodiac sign only. Tools that involve deeper astrology-style calculations may give more interesting results when you include the correct birth time.</AccordionContent></AccordionItem>
            <AccordionItem value="q3"><AccordionTrigger>Are these results professional advice?</AccordionTrigger><AccordionContent className="text-sm leading-7 text-muted-foreground">No. The results are for entertainment and self-reflection only. They are not financial, medical, legal, psychological, relationship, or spiritual advice.</AccordionContent></AccordionItem>
            <AccordionItem value="q4"><AccordionTrigger>Why do different tools give different results?</AccordionTrigger><AccordionContent className="text-sm leading-7 text-muted-foreground">Each tool looks at a different angle, such as zodiac signs, numerology, compatibility, or personality patterns. The results are meant to be explored as prompts, not as fixed predictions.</AccordionContent></AccordionItem>
            <AccordionItem value="q5"><AccordionTrigger>Can I use these tools without creating an account?</AccordionTrigger><AccordionContent className="text-sm leading-7 text-muted-foreground">Yes. You can use the tools directly in your browser without signing up.</AccordionContent></AccordionItem>
            <AccordionItem value="q6"><AccordionTrigger>Do you store my birth details or personal information?</AccordionTrigger><AccordionContent className="text-sm leading-7 text-muted-foreground">Astro Insight Tools is designed for simple browser-based use. Avoid entering sensitive personal information, and do not use the tools as a place to store private data.</AccordionContent></AccordionItem>
            <AccordionItem value="q7"><AccordionTrigger>How should I use the results?</AccordionTrigger><AccordionContent className="text-sm leading-7 text-muted-foreground">Use the results as a fun starting point for reflection. They can help you think about your personality, relationships, timing, and life patterns, but your own judgment should always come first.</AccordionContent></AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
