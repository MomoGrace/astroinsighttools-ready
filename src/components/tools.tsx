'use client';

import React, { useState, useMemo } from 'react';
import { zodiacSigns } from '@/lib/astro-data';
import { calculateZodiacSign, calculateChineseZodiac, calculateLifePathNumber } from '@/lib/astro-calculations';
import {
  luckyColorData, angelNumberMeanings, careerProfiles, moneyStyles,
  fiveElementsData, tarotCards, risingSignEstimates, personalYearThemes,
  birthChartChecklist, birthTimeUnknownGuide, dailyReflections, horoscope2026,
} from '@/lib/tool-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Star, Calculator, Moon, Heart, Sparkles, BookOpen,
  ChevronRight, ArrowRight, AlertTriangle, Compass, Flame,
  Palette, Rainbow, User, Hash, Sun, Clock, DollarSign, Briefcase,
  Eye, BookCheck, HelpCircle, TrendingUp, CheckCircle2, Info, Globe, Zap, Shield, Target, ScrollText
} from 'lucide-react';
import { ToolEducationSection } from '@/components/tool-education';

type View = string;

// ============================================================
// SHARED COMPONENTS (exported for page.tsx)
// ============================================================
export function DisclaimerNote() {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800 flex gap-3 dark:bg-amber-900/10 dark:text-amber-400">
      <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5" />
      <div><strong>Important:</strong> This tool interprets information you provide for entertainment and self-reflection only. It is not medical, legal, financial, or psychological advice.</div>
    </div>
  );
}

export function RelatedTools({ navigate }: { navigate: (v: View) => void }) {
  const tools = [
    { title: 'Big Three Meaning Tool', desc: 'Interpret Sun, Moon and Rising together.', view: '/tools/big-three-meaning', icon: <Star className="h-4 w-4" /> },
    { title: 'Planet Sign Meaning Tool', desc: 'Explore planets in zodiac signs.', view: '/tools/planet-sign-meaning', icon: <Compass className="h-4 w-4" /> },
    { title: 'Aspect Meaning Tool', desc: 'Understand planetary aspects.', view: '/tools/aspect-meaning', icon: <Sparkles className="h-4 w-4" /> },
    { title: 'Compatibility Checker', desc: 'Check compatibility between signs.', view: '/tools/compatibility', icon: <Heart className="h-4 w-4" /> },
  ];
  return (
    <div className="mt-10"><h3 className="text-lg font-semibold mb-4">Related Tools</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {tools.map(t => (<button key={t.view} onClick={() => navigate(t.view)} className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted transition-colors text-left"><div className="p-1.5 rounded bg-primary/10 text-primary">{t.icon}</div><div><div className="text-sm font-medium">{t.title}</div><div className="text-xs text-muted-foreground">{t.desc}</div></div></button>))}
      </div>
    </div>
  );
}

export function ElementBadge({ element }: { element: string }) {
  const c: Record<string,string> = { Fire:'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', Earth:'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', Air:'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400', Water:'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400' };
  const e: Record<string,string> = { Fire:'🔥', Earth:'🌍', Air:'💨', Water:'💧' };
  return <Badge className={`${c[element]||''} border-0`}>{e[element]} {element}</Badge>;
}

export const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

export function SignSelect({ value, onChange, label }: { value: string; onChange: (v: string) => void; label: string }) {
  return (
    <div><Label>{label}</Label>
      <select value={value} onChange={e => onChange(e.target.value)} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
        {zodiacSigns.map(s => <option key={s.name} value={s.name}>{s.symbol} {s.name} ({s.dateRange})</option>)}
      </select>
    </div>
  );
}

export function ToolCard({ title, description, icon, view, navigate, tag }: { title: string; description: string; icon: React.ReactNode; view: string; navigate: (v: View) => void; tag?: string }) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-200 cursor-pointer border-border/50 h-full" onClick={() => navigate(view)}>
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">{icon}</div>
          <div className="flex-1">
            {tag && <Badge variant="secondary" className="mb-1 text-xs">{tag}</Badge>}
            <CardTitle className="text-base group-hover:text-primary transition-colors">{title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm">{description}</CardDescription>
        <div className="mt-3 text-xs font-medium text-primary flex items-center gap-1">Open tool <ArrowRight className="h-3 w-3" /></div>
      </CardContent>
    </Card>
  );
}

export function InterpretationToolPage({ title, subtitle, tag, children, navigate, articleContent, slug }: { title: string; subtitle: string; tag: string; children: React.ReactNode; navigate: (v: View) => void; articleContent?: React.ReactNode; slug?: string }) {
  return (
    <div className="fade-in max-w-5xl mx-auto px-4 py-8">
      <div className="mb-6"><Badge variant="secondary">{tag}</Badge><h1 className="text-3xl font-bold mt-2 mb-2">{title}</h1><p className="text-muted-foreground">{subtitle}</p></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">{children}</div>
      {articleContent}
      {slug && <ToolEducationSection slug={slug} />}
      <DisclaimerNote />
      <RelatedTools navigate={navigate} />
    </div>
  );
}

export function ResultPanel({ result }: { result: React.ReactNode }) {
  return (
    <Card className="h-fit"><CardContent className="pt-6"><h2 className="text-lg font-semibold mb-3">Your interpretation</h2><div className="fade-in">{result || <p className="text-muted-foreground text-sm">Choose your options and generate an interpretation.</p>}</div></CardContent></Card>
  );
}

// ============================================================
// 1. BIRTH CHART READING CHECKLIST
// ============================================================
export function BirthChartChecklistTool({ navigate }: { navigate: (v: View) => void }) {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const toggle = (n: number) => setChecked(prev => { const s = new Set(prev); if (s.has(n)) s.delete(n); else s.add(n); return s; });

  return (
    <div className="fade-in max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6"><Badge variant="secondary" className="mb-2">Guide</Badge><h1 className="text-3xl font-bold mt-2 mb-2">Birth Chart Reading Checklist</h1><p className="text-muted-foreground">A practical step-by-step checklist for reading a natal chart. Follow these steps in order for a thorough interpretation.</p></div>
      <div className="mb-8"><div className="w-full bg-muted rounded-full h-3 mb-2"><div className="bg-primary h-3 rounded-full transition-all" style={{width: `${(checked.size / birthChartChecklist.length) * 100}%`}} /></div><p className="text-sm text-muted-foreground">{checked.size} of {birthChartChecklist.length} steps completed</p></div>
      <div className="space-y-3">
        {birthChartChecklist.map(item => (
          <Card key={item.step} className={`transition-all cursor-pointer ${checked.has(item.step) ? 'opacity-70' : ''}`} onClick={() => toggle(item.step)}>
            <CardContent className="py-4 flex gap-4">
              <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${checked.has(item.step) ? 'bg-primary border-primary text-primary-foreground' : 'border-muted-foreground/30'}`}>
                {checked.has(item.step) ? <CheckCircle2 className="h-4 w-4" /> : <span className="text-sm font-medium">{item.step}</span>}
              </div>
              <div className={checked.has(item.step) ? 'line-through' : ''}>
                <h3 className="font-semibold text-sm">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <DisclaimerNote />
      <RelatedTools navigate={navigate} />
    </div>
  );
}

// ============================================================
// 2. BIRTH TIME UNKNOWN GUIDE
// ============================================================
export function BirthTimeUnknownTool({ navigate }: { navigate: (v: View) => void }) {
  return (
    <div className="fade-in max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6"><Badge variant="secondary" className="mb-2">Guide</Badge><h1 className="text-3xl font-bold mt-2 mb-2">Birth Time Unknown Guide</h1><p className="text-muted-foreground">Learn what you can and cannot read accurately when your birth time is unknown.</p></div>
      <div className="prose prose-stone dark:prose-invert max-w-none space-y-8">
        <p>{birthTimeUnknownGuide.intro}</p>
        <section>
          <h2 className="text-xl font-bold flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-green-600" /> What You CAN Read Accurately</h2>
          <div className="space-y-3 mt-4">
            {birthTimeUnknownGuide.whatWorks.map((item, i) => (
              <Card key={i}><CardContent className="py-4"><h3 className="font-semibold text-sm">{item.title}</h3><p className="text-sm text-muted-foreground mt-1">{item.description}</p></CardContent></Card>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-xl font-bold flex items-center gap-2"><AlertTriangle className="h-5 w-5 text-amber-600" /> What You CANNOT Determine</h2>
          <div className="space-y-3 mt-4">
            {birthTimeUnknownGuide.whatCannot.map((item, i) => (
              <Card key={i} className="border-amber-200 dark:border-amber-800"><CardContent className="py-4"><h3 className="font-semibold text-sm">{item.title}</h3><p className="text-sm text-muted-foreground mt-1">{item.description}</p></CardContent></Card>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-xl font-bold flex items-center gap-2"><Sparkles className="h-5 w-5 text-primary" /> What You Can Do Instead</h2>
          <div className="space-y-3 mt-4">
            {birthTimeUnknownGuide.alternatives.map((item, i) => (
              <Card key={i}><CardContent className="py-4"><h3 className="font-semibold text-sm">{item.title}</h3><p className="text-sm text-muted-foreground mt-1">{item.description}</p></CardContent></Card>
            ))}
          </div>
        </section>
      </div>
      <div className="mt-8"><Button onClick={() => navigate('/tools/big-three-meaning')}><Compass className="mr-2 h-4 w-4" />Try the Big Three Tool</Button></div>
      <DisclaimerNote />
      <RelatedTools navigate={navigate} />
    </div>
  );
}

// ============================================================
// 3. LUCKY COLOR CALCULATOR
// ============================================================
export function LuckyColorTool({ navigate, slug }: { navigate: (v: View) => void; slug?: string }) {
  const [sign, setSign] = useState('Aries');
  const [result, setResult] = useState<React.ReactNode>(null);
  const generate = () => {
    const data = luckyColorData[sign];
    if (!data) return;
    const signData = zodiacSigns.find(s => s.name === sign);
    setResult(
      <div className="space-y-4">
        <div className="text-center mb-2"><span className="text-3xl">{signData?.symbol}</span><h3 className="font-bold text-lg">{sign} Lucky Colors</h3><ElementBadge element={data.element} /></div>
        <div className="grid grid-cols-2 gap-3">
          {data.colors.map((c, i) => (
            <div key={i} className="p-3 rounded-lg border text-center">
              <div className="w-12 h-12 rounded-full mx-auto mb-2 border-2" style={{ backgroundColor: c.hex }} />
              <h4 className="font-semibold text-sm">{c.name}</h4>
              <p className="text-xs text-muted-foreground mt-1">{c.meaning}</p>
            </div>
          ))}
        </div>
        <div className="p-3 rounded-lg bg-muted/50"><h4 className="font-semibold text-sm mb-1">How to Use These Colors</h4><p className="text-sm">Wear or surround yourself with these colors when you need the specific energy they represent. Use the first color for energy and focus, the second for calm and comfort, and the third for confidence and strength.</p></div>
      </div>
    );
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };
  return (
    <InterpretationToolPage title="Lucky Color Calculator" subtitle="Get a symbolic color palette for focus, calm and confidence based on your zodiac sign." tag="Lucky Tools" navigate={navigate} slug={slug}>
      <Card><CardContent className="pt-6 space-y-3"><h2 className="text-lg font-semibold">Your zodiac sign</h2><SignSelect label="Zodiac Sign" value={sign} onChange={setSign} /><Button onClick={generate} className="w-full">Generate Lucky Colors</Button></CardContent></Card>
      <ResultPanel result={result} />
    </InterpretationToolPage>
  );
}

// ============================================================
// 4. BIRTHDAY PERSONALITY CALCULATOR
// ============================================================
export function BirthdayPersonalityTool({ navigate, slug }: { navigate: (v: View) => void; slug?: string }) {
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);
  const [result, setResult] = useState<React.ReactNode>(null);

  const generate = () => {
    const sign = calculateZodiacSign(month, day);
    if (!sign) return;
    const dayNum = day > 9 ? day : day; // Keep as day number
    const traits = sign.traits;
    const strengths = sign.strengths;
    const weakness = sign.weaknesses;
    const dayReflections: Record<number, string> = {
      1: 'You have strong independent energy and natural leadership ability.',
      2: 'You value partnership, sensitivity, and emotional connection.',
      3: 'You are creative, expressive, and have a gift for communication.',
      4: 'You are practical, disciplined, and build solid foundations.',
      5: 'You are adventurous, adaptable, and crave variety and freedom.',
      6: 'You are nurturing, responsible, and find meaning through service.',
      7: 'You are analytical, spiritual, and drawn to deeper understanding.',
      8: 'You are ambitious, authoritative, and have natural business instincts.',
      9: 'You are compassionate, wise, and have a broad humanitarian perspective.',
      10: 'You combine independence with sensitivity and strong intuition.',
      11: 'You are intuitive, idealistic, and have a deep spiritual side.',
      12: 'You are creative, expressive, and have natural leadership abilities.',
      13: 'You are practical, hardworking, and deeply committed to your goals.',
      14: 'You are curious, adaptable, and have a talent for learning.',
      15: 'You are nurturing, creative, and value family and home life.',
      16: 'You are analytical, detail-oriented, and have strong problem-solving skills.',
      17: 'You are ambitious, determined, and have natural leadership qualities.',
      18: 'You are compassionate, artistic, and have a broad vision for humanity.',
      19: 'You are independent, determined, and have strong emotional courage.',
      20: 'You are sensitive, intuitive, and value emotional security deeply.',
      21: 'You are creative, communicative, and have natural social charm.',
      22: 'You are practical, reliable, and have a talent for building stability.',
      23: 'You are adventurous, expressive, and thrive on variety and change.',
      24: 'You are nurturing, responsible, and have strong aesthetic sensibilities.',
      25: 'You are analytical, intuitive, and drawn to understanding life mysteries.',
      26: 'You are ambitious, cooperative, and have natural diplomatic skills.',
      27: 'You are compassionate, creative, and have strong intuitive abilities.',
      28: 'You are determined, independent, and have natural leadership energy.',
      29: 'You are intuitive, empathetic, and have a deep emotional nature.',
      30: 'You are creative, expressive, and have natural communication gifts.',
      31: 'You are independent, practical, and have strong determination.',
    };
    const dayReflection = dayReflections[day] || 'You have a unique birthday energy that combines personal initiative with depth.';

    setResult(
      <div className="space-y-4">
        <div className="text-center mb-2"><span className="text-3xl">{sign.symbol}</span><h3 className="font-bold text-lg">{months[month-1]} {day}</h3><ElementBadge element={sign.element} /><Badge variant="outline" className="ml-2">{sign.modality}</Badge></div>
        <div className="p-4 rounded-lg border-l-4 border-primary/50 bg-primary/5"><h4 className="font-bold mb-1">Core Personality: {sign.name}</h4><p className="text-sm leading-relaxed">{sign.description}</p></div>
        <div className="grid grid-cols-1 gap-3">
          <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/10"><h4 className="font-medium text-green-700 dark:text-green-400 text-sm mb-2">Key Traits</h4><div className="flex flex-wrap gap-1">{traits.map(t => <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>)}</div></div>
          <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/10"><h4 className="font-medium text-green-700 dark:text-green-400 text-sm mb-2">Strengths</h4><ul className="text-sm space-y-1">{strengths.map((s,i) => <li key={i}>+ {s}</li>)}</ul></div>
          <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-900/10"><h4 className="font-medium text-amber-700 dark:text-amber-400 text-sm mb-2">Growth Areas</h4><ul className="text-sm space-y-1">{weakness.slice(0,3).map((w,i) => <li key={i}>~ {w}</li>)}</ul></div>
        </div>
        <div className="p-3 rounded-lg bg-muted/50"><h4 className="font-semibold text-sm mb-1">Birthday Number Reflection (Day {day})</h4><p className="text-sm">{dayReflection}</p></div>
        <div className="p-3 rounded-lg bg-primary/5 border border-primary/10"><h4 className="font-semibold text-sm mb-1">Journal Prompt</h4><p className="text-sm italic">How do my {sign.name} traits show up in my daily life? Where do I see my strengths, and where do I notice patterns I want to shift?</p></div>
      </div>
    );
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };
  return (
    <InterpretationToolPage title="Birthday Personality Calculator" subtitle="Turn a birthday into a gentle personality reflection based on zodiac sign and birthday number." tag="Personality Tools" navigate={navigate} slug={slug}>
      <Card><CardContent className="pt-6 space-y-3"><h2 className="text-lg font-semibold">Your birthday</h2><div className="grid grid-cols-2 gap-4"><div><Label>Month</Label><select value={month} onChange={e=>setMonth(Number(e.target.value))} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">{months.map((m,i)=><option key={i} value={i+1}>{m}</option>)}</select></div><div><Label>Day</Label><select value={day} onChange={e=>setDay(Number(e.target.value))} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">{Array.from({length:31},(_,i)=><option key={i} value={i+1}>{i+1}</option>)}</select></div></div><Button onClick={generate} className="w-full">Generate Birthday Reflection</Button></CardContent></Card>
      <ResultPanel result={result} />
    </InterpretationToolPage>
  );
}

// ============================================================
// 5. FIVE ELEMENTS CALCULATOR
// ============================================================
export function FiveElementsTool({ navigate, slug }: { navigate: (v: View) => void; slug?: string }) {
  const [year, setYear] = useState(1990);
  const [result, setResult] = useState<React.ReactNode>(null);
  const generate = () => {
    const animal = calculateChineseZodiac(year);
    if (!animal) return;
    const data = fiveElementsData[animal.animal];
    if (!data) return;
    setResult(
      <div className="space-y-4">
        <div className="text-center mb-2"><span className="text-4xl">{animal.symbol}</span><h3 className="font-bold text-lg">Year of the {animal.animal} — {data.element} Element</h3><p className="text-2xl">{data.elementEmoji}</p></div>
        <div className="p-4 rounded-lg border-l-4 border-primary/50 bg-primary/5"><h4 className="font-bold mb-1">Five Element Personality</h4><p className="text-sm leading-relaxed">{data.personality}</p></div>
        <div className="grid grid-cols-1 gap-3">
          <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/10"><h4 className="font-medium text-green-700 dark:text-green-400 text-sm mb-2">Element Strengths</h4><ul className="text-sm space-y-1">{data.strengths.map((s,i) => <li key={i}>+ {s}</li>)}</ul></div>
          <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-900/10"><h4 className="font-medium text-amber-700 dark:text-amber-400 text-sm mb-2">Growth Areas</h4><ul className="text-sm space-y-1">{data.challenges.map((c,i) => <li key={i}>~ {c}</li>)}</ul></div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-lg border text-center"><h4 className="font-semibold text-sm">Season</h4><p className="text-sm text-muted-foreground">{data.seasons}</p></div>
          <div className="p-3 rounded-lg border text-center"><h4 className="font-semibold text-sm">Direction</h4><p className="text-sm text-muted-foreground">{data.directions}</p></div>
        </div>
        <div className="p-3 rounded-lg bg-muted/50"><h4 className="font-semibold text-sm mb-1">Element Wisdom</h4><p className="text-sm">{data.advice}</p></div>
      </div>
    );
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };
  return (
    <InterpretationToolPage title="Five Elements Calculator" subtitle="Explore a five-element personality theme from your Chinese zodiac birth year." tag="Chinese Zodiac Tools" navigate={navigate} slug={slug}>
      <Card><CardContent className="pt-6 space-y-3"><h2 className="text-lg font-semibold">Your birth year</h2><div><Label>Birth Year</Label><Input type="number" value={year} onChange={e=>setYear(Number(e.target.value))} className="mt-1" /></div><Button onClick={generate} className="w-full">Calculate Five Elements</Button></CardContent></Card>
      <ResultPanel result={result} />
    </InterpretationToolPage>
  );
}

// ============================================================
// 6. DAILY HOROSCOPE GENERATOR
// ============================================================
export function DailyHoroscopeTool({ navigate, slug }: { navigate: (v: View) => void; slug?: string }) {
  const [sign, setSign] = useState('Aries');
  const result = useMemo(() => {
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    const reflections = dailyReflections[sign];
    if (!reflections) return null;
    const index = dayOfYear % reflections.length;
    const reflection = reflections[index];
    const signData = zodiacSigns.find(s => s.name === sign);
    return (
      <div className="space-y-4">
        <div className="text-center mb-2"><span className="text-3xl">{signData?.symbol}</span><h3 className="font-bold text-lg">{sign} — Daily Reflection</h3><p className="text-sm text-muted-foreground">{today.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p><ElementBadge element={signData?.element || ''} /></div>
        <div className="p-4 rounded-lg border-l-4 border-primary/50 bg-primary/5"><p className="text-sm leading-relaxed">{reflection}</p></div>
        <div className="p-3 rounded-lg bg-primary/5 border border-primary/10"><h4 className="font-semibold text-sm mb-1">Journal Prompt</h4><p className="text-sm italic">How can I apply this reflection to my day? What is one small action I can take right now?</p></div>
        <p className="text-xs text-muted-foreground text-center">This reflection is deterministic based on today's date and your zodiac sign — the same result appears for the same day.</p>
      </div>
    );
  }, [sign]);

  return (
    <InterpretationToolPage title="Daily Horoscope Generator" subtitle="Generate a light daily reflection prompt based on your zodiac sign." tag="Astrology Tools" navigate={navigate} slug={slug}>
      <Card><CardContent className="pt-6 space-y-3"><h2 className="text-lg font-semibold">Your zodiac sign</h2><SignSelect label="Zodiac Sign" value={sign} onChange={setSign} /><p className="text-xs text-muted-foreground">Your daily reflection updates automatically each day.</p></CardContent></Card>
      <ResultPanel result={result} />
    </InterpretationToolPage>
  );
}

// ============================================================
// 7. 2026 HOROSCOPE TOOL
// ============================================================
export function Horoscope2026Tool({ navigate, slug }: { navigate: (v: View) => void; slug?: string }) {
  const [sign, setSign] = useState('Aries');
  const [result, setResult] = useState<React.ReactNode>(null);
  const generate = () => {
    const data = horoscope2026[sign];
    if (!data) return;
    const signData = zodiacSigns.find(s => s.name === sign);
    setResult(
      <div className="space-y-4">
        <div className="text-center mb-2"><span className="text-3xl">{signData?.symbol}</span><h3 className="font-bold text-lg">{sign} in 2026</h3><ElementBadge element={signData?.element || ''} /><Badge variant="outline" className="ml-2">{signData?.modality}</Badge></div>
        <div className="p-4 rounded-lg border-l-4 border-primary/50 bg-primary/5"><h4 className="font-bold mb-1">{data.yearTheme}</h4><p className="text-sm leading-relaxed">{data.keyFocus}</p></div>
        <div className="grid grid-cols-1 gap-3">
          <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/10"><h4 className="font-medium text-green-700 dark:text-green-400 text-sm mb-2">Growth Area</h4><p className="text-sm">{data.growthArea}</p></div>
          <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-900/10"><h4 className="font-medium text-amber-700 dark:text-amber-400 text-sm mb-2">Key Challenge</h4><p className="text-sm">{data.challenge}</p></div>
          <div className="p-3 rounded-lg bg-primary/5 border border-primary/10"><h4 className="font-medium text-primary text-sm mb-2">Opportunity</h4><p className="text-sm">{data.opportunity}</p></div>
        </div>
        <div className="p-3 rounded-lg bg-muted/50"><h4 className="font-semibold text-sm mb-1">Most Favorable Months</h4><div className="flex flex-wrap gap-2 mt-1">{data.luckyMonths.map(m => <Badge key={m} variant="secondary">{months[m-1]}</Badge>)}</div></div>
      </div>
    );
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };
  return (
    <InterpretationToolPage title="2026 Horoscope Tool" subtitle="Explore a yearly reflection theme by zodiac sign for 2026." tag="Astrology Tools" navigate={navigate} slug={slug}>
      <Card><CardContent className="pt-6 space-y-3"><h2 className="text-lg font-semibold">Your zodiac sign</h2><SignSelect label="Zodiac Sign" value={sign} onChange={setSign} /><Button onClick={generate} className="w-full">Generate 2026 Horoscope</Button></CardContent></Card>
      <ResultPanel result={result} />
    </InterpretationToolPage>
  );
}

// ============================================================
// 8. YES OR NO TAROT PICKER
// ============================================================
export function YesNoTarotTool({ navigate }: { navigate: (v: View) => void }) {
  const [picked, setPicked] = useState<number | null>(null);
  const [flipped, setFlipped] = useState(false);
  const shuffled = useMemo(() => {
    const arr = [...tarotCards];
    for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; }
    return arr;
  }, [picked]);

  const pickCard = (idx: number) => { setPicked(idx); setFlipped(false); };
  const reveal = () => { setFlipped(true); window.scrollTo({ top: 300, behavior: 'smooth' }); };
  const reset = () => { setPicked(null); setFlipped(false); };

  return (
    <div className="fade-in max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6"><Badge variant="secondary" className="mb-2">Tarot Tools</Badge><h1 className="text-3xl font-bold mt-2 mb-2">Yes or No Tarot Picker</h1><p className="text-muted-foreground">Pick a symbolic card and receive a yes/no prompt for self-reflection. Think of your question, then choose a card.</p></div>
      {picked === null ? (
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4 text-center">Think of your question, then choose a card</h2>
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {shuffled.slice(0, 3).map((card, i) => (
              <button key={i} onClick={() => pickCard(i)} className="p-6 rounded-xl border-2 border-dashed border-muted-foreground/30 hover:border-primary hover:bg-primary/5 transition-all text-center cursor-pointer group">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">🂠</div>
                <p className="text-xs text-muted-foreground">Card {i + 1}</p>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Your chosen card</h2>
            <Button variant="outline" size="sm" onClick={reset}>Pick again</Button>
          </div>
          {!flipped ? (
            <div className="text-center">
              <button onClick={reveal} className="p-8 rounded-xl border-2 border-primary/30 hover:border-primary bg-primary/5 transition-all cursor-pointer group">
                <div className="text-5xl mb-2 group-hover:scale-110 transition-transform">🂠</div>
                <p className="text-sm font-medium text-primary">Click to reveal</p>
              </button>
            </div>
          ) : (
            <Card className="border-2 border-primary/20 fade-in">
              <CardContent className="pt-6 text-center">
                <div className="text-5xl mb-3">{shuffled[picked].emoji}</div>
                <h3 className="text-xl font-bold mb-1">{shuffled[picked].name}</h3>
                <Badge variant={shuffled[picked].answer.startsWith('Yes') ? 'default' : shuffled[picked].answer.startsWith('No') ? 'destructive' : 'secondary'} className="mb-4">{shuffled[picked].answer}</Badge>
                <p className="text-sm leading-relaxed mb-4 max-w-lg mx-auto">{shuffled[picked].meaning}</p>
                <div className="p-3 rounded-lg bg-muted/50 text-left"><p className="text-sm">{shuffled[picked].detail}</p></div>
              </CardContent>
            </Card>
          )}
        </div>
      )}
      <DisclaimerNote />
      <RelatedTools navigate={navigate} />
    </div>
  );
}

// ============================================================
// 9. ANGEL NUMBER MEANING TOOL
// ============================================================
export function AngelNumberTool({ navigate, slug }: { navigate: (v: View) => void; slug?: string }) {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState<React.ReactNode>(null);

  const lookup = () => {
    const num = parseInt(number);
    if (isNaN(num) || num < 1) return;
    // Try exact match first, then check if it starts with a known master number pattern
    let data = angelNumberMeanings[num];
    if (!data) {
      // For numbers 1-99 without direct match, use digit sum
      if (num < 100) {
        const sum = String(num).split('').reduce((a, b) => a + parseInt(b), 0);
        data = angelNumberMeanings[sum];
      } else {
        // For 100+, try the first two digits
        const prefix = parseInt(String(num).substring(0, 2));
        data = angelNumberMeanings[prefix];
      }
    }
    if (!data) {
      data = { title: 'Unique Sequence', meaning: `The number ${num} carries a unique vibration. In numerology, all numbers can be reduced to their root digits for deeper understanding. Pay attention to how this number appears in your life and what you were thinking or feeling when you noticed it.`, theme: 'Personal numerological significance' };
    }
    setResult(
      <div className="space-y-4">
        <div className="text-center mb-2"><div className="text-5xl font-bold text-primary mb-2">{num}</div><h3 className="font-bold text-lg">{data.title}</h3><Badge variant="secondary">{data.theme}</Badge></div>
        <div className="p-4 rounded-lg border-l-4 border-primary/50 bg-primary/5"><h4 className="font-bold mb-1">Symbolic Meaning</h4><p className="text-sm leading-relaxed">{data.meaning}</p></div>
        <div className="p-3 rounded-lg bg-muted/50"><h4 className="font-semibold text-sm mb-1">Reflection</h4><p className="text-sm italic">What were you thinking about when you first noticed this number? The answer often lies in the question itself.</p></div>
      </div>
    );
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <InterpretationToolPage title="Angel Number Meaning Tool" subtitle="Look up a symbolic meaning for repeated numbers you keep seeing." tag="Numerology Tools" navigate={navigate} slug={slug}>
      <Card><CardContent className="pt-6 space-y-3"><h2 className="text-lg font-semibold">Enter a number</h2><div><Label>Angel Number</Label><Input type="number" value={number} onChange={e=>setNumber(e.target.value)} placeholder="e.g. 111, 444, 777" className="mt-1" /></div><Button onClick={lookup} className="w-full" disabled={!number || parseInt(number) < 1}>Look Up Meaning</Button><p className="text-xs text-muted-foreground">Try common sequences like 111, 222, 333, 444, 555, 777, or 1111.</p></CardContent></Card>
      <ResultPanel result={result} />
    </InterpretationToolPage>
  );
}

// ============================================================
// 10. LUCKY NUMBER CALCULATOR
// ============================================================
export function LuckyNumberTool({ navigate, slug }: { navigate: (v: View) => void; slug?: string }) {
  const [sign, setSign] = useState('Aries');
  const [result, setResult] = useState<React.ReactNode>(null);

  const generate = () => {
    const signData = zodiacSigns.find(s => s.name === sign);
    if (!signData) return;
    // Deterministic lucky numbers based on sign index and ruling planet
    const signIndex = zodiacSigns.findIndex(s => s.name === sign);
    const planetValues: Record<string, number> = { Mars: 9, Venus: 6, Mercury: 5, Moon: 2, Sun: 1, Jupiter: 3, Saturn: 8, Uranus: 4, Neptune: 7, Pluto: 0 };
    const planetVal = planetValues[signData.ruling_planet] || 0;
    const elementVal = { Fire: 1, Earth: 2, Air: 3, Water: 4 }[signData.element] || 1;
    const luckyNumbers = [
      ((signIndex * 3 + planetVal + 7) % 49) + 1,
      ((signIndex * 7 + elementVal * 5 + 3) % 49) + 1,
      ((signIndex * 11 + planetVal * elementVal + 13) % 49) + 1,
      ((signIndex * 5 + elementVal * 9 + 17) % 49) + 1,
      ((signIndex * 13 + planetVal * 3 + 23) % 49) + 1,
    ];
    const uniqueNums = [...new Set(luckyNumbers)].sort((a,b) => a - b);
    const numMeanings: Record<number, string> = {
      1: 'Independence and leadership', 2: 'Partnership and harmony', 3: 'Creativity and joy', 4: 'Stability and foundation',
      5: 'Change and freedom', 6: 'Love and responsibility', 7: 'Spiritual wisdom', 8: 'Abundance and power',
      9: 'Completion and service',
    };
    setResult(
      <div className="space-y-4">
        <div className="text-center mb-2"><span className="text-3xl">{signData.symbol}</span><h3 className="font-bold text-lg">{sign} Lucky Numbers</h3><ElementBadge element={signData.element} /><Badge variant="outline" className="ml-2">Ruled by {signData.ruling_planet}</Badge></div>
        <div className="flex justify-center gap-3 flex-wrap">
          {uniqueNums.map((n, i) => (
            <div key={i} className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center bg-primary/5">
              <span className="text-2xl font-bold text-primary">{n}</span>
            </div>
          ))}
        </div>
        <div className="p-3 rounded-lg bg-muted/50"><h4 className="font-semibold text-sm mb-1">How These Numbers Were Derived</h4><p className="text-sm">Your lucky numbers are calculated from your ruling planet ({signData.ruling_planet}), element ({signData.element}), and zodiac position. Number {uniqueNums[0]} represents your primary vibration.</p></div>
        <div className="p-3 rounded-lg bg-primary/5 border border-primary/10"><h4 className="font-semibold text-sm mb-1">Primary Number Meaning</h4><p className="text-sm">{numMeanings[uniqueNums[0] % 9 || 9] || 'A unique numerological vibration'}</p></div>
      </div>
    );
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };
  return (
    <InterpretationToolPage title="Lucky Number Calculator" subtitle="Find a playful lucky number and reflection theme based on your zodiac sign." tag="Lucky Tools" navigate={navigate} slug={slug}>
      <Card><CardContent className="pt-6 space-y-3"><h2 className="text-lg font-semibold">Your zodiac sign</h2><SignSelect label="Zodiac Sign" value={sign} onChange={setSign} /><Button onClick={generate} className="w-full">Generate Lucky Numbers</Button></CardContent></Card>
      <ResultPanel result={result} />
    </InterpretationToolPage>
  );
}

// ============================================================
// 11. RISING SIGN ESTIMATOR
// ============================================================
export function RisingSignEstimatorTool({ navigate, slug }: { navigate: (v: View) => void; slug?: string }) {
  const [hour, setHour] = useState(12);
  const [result, setResult] = useState<React.ReactNode>(null);
  const generate = () => {
    const idx = Math.min(Math.floor(hour / 2), 11);
    const data = risingSignEstimates[idx];
    if (!data) return;
    const signData = zodiacSigns.find(s => s.name === data.sign);
    setResult(
      <div className="space-y-4">
        <div className="text-center mb-2"><span className="text-4xl">{data.emoji}</span><h3 className="font-bold text-lg">Estimated Rising Sign: {data.sign}</h3><p className="text-sm text-muted-foreground">Based on birth time: {data.timeRange}</p>{signData && <ElementBadge element={signData.element} />}</div>
        <div className="p-4 rounded-lg border-l-4 border-primary/50 bg-primary/5"><h4 className="font-bold mb-1">About {data.sign} Rising</h4><p className="text-sm leading-relaxed">{signData?.description}</p></div>
        <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/10"><h4 className="font-medium text-green-700 dark:text-green-400 text-sm mb-2">How Others See You</h4><p className="text-sm">With {data.sign} rising, people initially perceive you as {signData?.traits[0]?.toLowerCase()}, {signData?.traits[1]?.toLowerCase()}, and {signData?.traits[2]?.toLowerCase()}.</p></div>
        <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-900/10"><h4 className="font-medium text-amber-700 dark:text-amber-400 text-sm mb-2">Time Range Note</h4><p className="text-sm">{data.note}</p></div>
        <div className="p-3 rounded-lg bg-muted/50"><h4 className="font-semibold text-sm mb-1">Important Disclaimer</h4><p className="text-sm">This is a very rough educational estimate. Your actual Rising sign requires your exact birth time and location. The Rising sign changes approximately every two hours and varies by geographic location.</p></div>
      </div>
    );
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };
  return (
    <InterpretationToolPage title="Rising Sign Estimator" subtitle="A simplified educational rising-sign style prompt based on approximate birth time." tag="Advanced Astrology" navigate={navigate}>
      <Card><CardContent className="pt-6 space-y-3"><h2 className="text-lg font-semibold">Your approximate birth time</h2><div><Label>Birth Hour (0-23)</Label><select value={hour} onChange={e=>setHour(Number(e.target.value))} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">{Array.from({length:24},(_,i)=>{const h=i%12||12;const ampm=i<12?'AM':'PM';return <option key={i} value={i}>{i}:00 ({h}:00 {ampm})</option>;})}</select></div><Button onClick={generate} className="w-full">Estimate Rising Sign</Button><p className="text-xs text-muted-foreground"><strong>Note:</strong> This is a rough educational estimate, not a precise calculation.</p></CardContent></Card>
      <ResultPanel result={result} />
    </InterpretationToolPage>
  );
}

// ============================================================
// 12. CAREER PERSONALITY CALCULATOR
// ============================================================
export function CareerPersonalityTool({ navigate, slug }: { navigate: (v: View) => void; slug?: string }) {
  const [sign, setSign] = useState('Aries');
  const [result, setResult] = useState<React.ReactNode>(null);
  const generate = () => {
    const data = careerProfiles[sign];
    if (!data) return;
    const signData = zodiacSigns.find(s => s.name === sign);
    setResult(
      <div className="space-y-4">
        <div className="text-center mb-2"><span className="text-3xl">{signData?.symbol}</span><h3 className="font-bold text-lg">{sign} Career Profile</h3><ElementBadge element={data.element} /><Badge variant="outline" className="ml-2">{data.modality}</Badge></div>
        <div className="p-4 rounded-lg border-l-4 border-primary/50 bg-primary/5"><h4 className="font-bold mb-2">Career Strengths</h4><div className="flex flex-wrap gap-1">{data.strengths.map(s => <Badge key={s} variant="secondary" className="text-xs">{s}</Badge>)}</div></div>
        <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/10"><h4 className="font-medium text-green-700 dark:text-green-400 text-sm mb-2">Ideal Career Fields</h4><div className="space-y-3">{data.careerThemes.map((c, i) => (<div key={i}><h5 className="font-semibold text-sm">{c.field}</h5><p className="text-xs text-muted-foreground">{c.description}</p></div>))}</div></div>
        <div className="p-3 rounded-lg bg-muted/50"><h4 className="font-semibold text-sm mb-1">Ideal Work Environments</h4><div className="flex flex-wrap gap-1">{data.idealEnvironments.map(e => <Badge key={e} variant="outline" className="text-xs">{e}</Badge>)}</div></div>
        <div className="grid grid-cols-1 gap-3">
          <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-900/10"><h4 className="font-medium text-amber-700 dark:text-amber-400 text-sm mb-2">Career Challenge</h4><p className="text-sm">{data.challenge}</p></div>
          <div className="p-3 rounded-lg bg-primary/5 border border-primary/10"><h4 className="font-medium text-primary text-sm mb-2">Growth Tip</h4><p className="text-sm">{data.growthTip}</p></div>
        </div>
      </div>
    );
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };
  return (
    <InterpretationToolPage title="Career Personality Calculator" subtitle="Get career style prompts from personality inputs based on your zodiac sign." tag="Personality Tools" navigate={navigate} slug={slug}>
      <Card><CardContent className="pt-6 space-y-3"><h2 className="text-lg font-semibold">Your zodiac sign</h2><SignSelect label="Zodiac Sign" value={sign} onChange={setSign} /><Button onClick={generate} className="w-full">Generate Career Profile</Button></CardContent></Card>
      <ResultPanel result={result} />
    </InterpretationToolPage>
  );
}

// ============================================================
// 13. PERSONAL YEAR CALCULATOR
// ============================================================
export function PersonalYearTool({ navigate, slug }: { navigate: (v: View) => void; slug?: string }) {
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);
  const [year, setYear] = useState(2000);
  const [result, setResult] = useState<React.ReactNode>(null);

  const generate = () => {
    const currentYear = new Date().getFullYear();
    const personalYear = calculateLifePathNumber(month, day, currentYear);
    const data = personalYearThemes[personalYear];
    if (!data) return;
    setResult(
      <div className="space-y-4">
        <div className="text-center mb-2"><p className="text-sm text-muted-foreground">Your Personal Year for</p><h3 className="text-2xl font-bold">{currentYear}</h3><div className="text-5xl font-bold text-primary mt-2">{personalYear}</div><p className="text-lg font-semibold mt-1">{data.title}</p><Badge variant="secondary">{data.theme}</Badge></div>
        <div className="p-4 rounded-lg border-l-4 border-primary/50 bg-primary/5"><h4 className="font-bold mb-1">Year Overview</h4><p className="text-sm leading-relaxed">{data.description}</p></div>
        <div className="grid grid-cols-1 gap-3">
          <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/10"><h4 className="font-medium text-green-700 dark:text-green-400 text-sm mb-2">Focus Areas</h4><p className="text-sm">{data.focus}</p></div>
          <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-900/10"><h4 className="font-medium text-amber-700 dark:text-amber-400 text-sm mb-2">Challenges</h4><p className="text-sm">{data.challenges}</p></div>
          <div className="p-3 rounded-lg bg-primary/5 border border-primary/10"><h4 className="font-medium text-primary text-sm mb-2">Opportunity</h4><p className="text-sm">{data.opportunity}</p></div>
        </div>
        <div className="p-3 rounded-lg bg-muted/50"><h4 className="font-semibold text-sm mb-1">Calculation</h4><p className="text-sm">Your Personal Year is calculated by reducing (birth month {month} + birth day {day} + current year {currentYear}) to a single digit: {month} + {day} + {currentYear} = {personalYear}</p></div>
      </div>
    );
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };
  return (
    <InterpretationToolPage title="Personal Year Calculator" subtitle="Calculate a numerology personal year theme from your birth date." tag="Numerology Tools" navigate={navigate} slug={slug}>
      <Card><CardContent className="pt-6 space-y-3"><h2 className="text-lg font-semibold">Your birth date</h2><div className="grid grid-cols-3 gap-4"><div><Label>Month</Label><select value={month} onChange={e=>setMonth(Number(e.target.value))} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">{months.map((m,i)=><option key={i} value={i+1}>{m}</option>)}</select></div><div><Label>Day</Label><Input type="number" value={day} onChange={e=>setDay(Number(e.target.value))} className="mt-1" /></div><div><Label>Year</Label><Input type="number" value={year} onChange={e=>setYear(Number(e.target.value))} className="mt-1" /></div></div><Button onClick={generate} className="w-full">Calculate Personal Year</Button></CardContent></Card>
      <ResultPanel result={result} />
    </InterpretationToolPage>
  );
}

// ============================================================
// 14. ZODIAC MONEY STYLE CALCULATOR
// ============================================================
export function ZodiacMoneyStyleTool({ navigate, slug }: { navigate: (v: View) => void; slug?: string }) {
  const [sign, setSign] = useState('Aries');
  const [result, setResult] = useState<React.ReactNode>(null);
  const generate = () => {
    const data = moneyStyles[sign];
    if (!data) return;
    const signData = zodiacSigns.find(s => s.name === sign);
    setResult(
      <div className="space-y-4">
        <div className="text-center mb-2"><span className="text-3xl">{signData?.symbol}</span><h3 className="font-bold text-lg">{sign} Money Style</h3><ElementBadge element={signData?.element || ''} /></div>
        <div className="grid grid-cols-1 gap-3">
          <div className="p-3 rounded-lg border-l-4 border-green-400 bg-green-50 dark:bg-green-900/10"><h4 className="font-medium text-green-700 dark:text-green-400 text-sm mb-1">Spending Style</h4><p className="text-sm">{data.spendingStyle}</p></div>
          <div className="p-3 rounded-lg border-l-4 border-blue-400 bg-blue-50 dark:bg-blue-900/10"><h4 className="font-medium text-blue-700 dark:text-blue-400 text-sm mb-1">Saving Style</h4><p className="text-sm">{data.savingStyle}</p></div>
          <div className="p-3 rounded-lg border-l-4 border-purple-400 bg-purple-50 dark:bg-purple-900/10"><h4 className="font-medium text-purple-700 dark:text-purple-400 text-sm mb-1">Comfort Style</h4><p className="text-sm">{data.comfortStyle}</p></div>
        </div>
        <div className="grid grid-cols-1 gap-3">
          <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/10"><h4 className="font-medium text-green-700 dark:text-green-400 text-sm mb-2">Money Strengths</h4><ul className="text-sm space-y-1">{data.moneyStrengths.map((s,i) => <li key={i}>+ {s}</li>)}</ul></div>
          <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-900/10"><h4 className="font-medium text-amber-700 dark:text-amber-400 text-sm mb-2">Money Challenges</h4><ul className="text-sm space-y-1">{data.moneyChallenges.map((c,i) => <li key={i}>~ {c}</li>)}</ul></div>
        </div>
        <div className="p-3 rounded-lg bg-primary/5 border border-primary/10"><h4 className="font-semibold text-sm mb-1">Financial Growth Tip</h4><p className="text-sm">{data.moneyTip}</p></div>
      </div>
    );
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };
  return (
    <InterpretationToolPage title="Zodiac Money Style Calculator" subtitle="Reflect on spending, saving and comfort patterns by zodiac sign." tag="Personality Tools" navigate={navigate} slug={slug}>
      <Card><CardContent className="pt-6 space-y-3"><h2 className="text-lg font-semibold">Your zodiac sign</h2><SignSelect label="Zodiac Sign" value={sign} onChange={setSign} /><Button onClick={generate} className="w-full">Generate Money Style</Button></CardContent></Card>
      <ResultPanel result={result} />
    </InterpretationToolPage>
  );
}
