'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import {
  calculateZodiacSign, calculateChineseZodiac, calculateLifePathNumber,
  calculateMoonPhase, calculateMoonIllumination, calculateCompatibility,
  calculateNameNumerology, getLifePathMeaning
} from '@/lib/astro-calculations';
import { zodiacSigns } from '@/lib/astro-data';
import { getPlanetSignInterpretation, aspectInterpretations, houseInterpretations } from '@/lib/interpretations';
import {
  DisclaimerNote, RelatedTools, ElementBadge, months, SignSelect,
  InterpretationToolPage, ResultPanel,
  BirthChartChecklistTool, BirthTimeUnknownTool, LuckyColorTool, BirthdayPersonalityTool,
  FiveElementsTool, DailyHoroscopeTool, Horoscope2026Tool, YesNoTarotTool,
  AngelNumberTool, LuckyNumberTool, RisingSignEstimatorTool, CareerPersonalityTool,
  PersonalYearTool, ZodiacMoneyStyleTool,
} from '@/components/tools';
import { ToolEducationSection } from '@/components/tool-education';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

type NavFn = (v: string) => void;
type ToolProps = { navigate: NavFn; slug: string };

function BigThreeTool({ navigate, slug }: ToolProps) {
  const [sun, setSun] = useState('Aries'); const [moon, setMoon] = useState('Cancer'); const [rising, setRising] = useState('Leo'); const [result, setResult] = useState<React.ReactNode>(null);
  const generate = () => {
    const sunData = zodiacSigns.find(s => s.name === sun); const moonData = zodiacSigns.find(s => s.name === moon); const risingData = zodiacSigns.find(s => s.name === rising); const moonInterp = getPlanetSignInterpretation('Moon', moon);
    setResult(<div className="space-y-4"><div className="p-4 rounded-lg border-l-4 border-primary/50 bg-primary/5"><div className="flex items-center gap-2 mb-2"><span className="text-2xl">{sunData?.symbol}</span><h3 className="font-bold">Sun in {sun} — Core Identity</h3></div><p className="text-sm leading-relaxed">{sunData?.description}</p></div><div className="p-4 rounded-lg border-l-4 border-indigo-400 bg-indigo-50 dark:bg-indigo-900/10"><div className="flex items-center gap-2 mb-2"><span className="text-2xl">{moonData?.symbol}</span><h3 className="font-bold">Moon in {moon} — Emotional Needs</h3><ElementBadge element={moonData?.element||''} /></div><p className="text-sm leading-relaxed">{moonInterp?.coreMeaning}</p><p className="text-sm text-muted-foreground mt-2"><strong>Emotional strengths:</strong> {moonInterp?.strengths.join(', ')}</p></div><div className="p-4 rounded-lg border-l-4 border-amber-400 bg-amber-50 dark:bg-amber-900/10"><div className="flex items-center gap-2 mb-2"><span className="text-2xl">{risingData?.symbol}</span><h3 className="font-bold">Rising in {rising} — Outer Style</h3><ElementBadge element={risingData?.element||''} /></div><p className="text-sm leading-relaxed">{risingData?.description}</p><p className="text-sm text-muted-foreground mt-2"><strong>First impression:</strong> Others initially perceive you as {risingData?.traits[0]?.toLowerCase()}, {risingData?.traits[1]?.toLowerCase()}, and {risingData?.traits[2]?.toLowerCase()}.</p></div><div className="p-3 rounded-lg bg-muted/50"><h4 className="font-semibold text-sm mb-1">How They Combine</h4><p className="text-sm">Your {sun} Sun drives your conscious identity, while your {moon} Moon shapes your emotional inner world. Your {rising} Rising acts as the filter through which both energies are expressed.</p></div></div>);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };
  return (<InterpretationToolPage title="Big Three Meaning Tool" subtitle="Interpret your Sun, Moon and Rising signs together as identity, emotional needs and outer style." tag="Advanced Astrology" navigate={navigate} slug={slug}><Card><CardContent className="pt-6 space-y-3"><h2 className="text-lg font-semibold">Your details</h2><SignSelect label="Sun Sign" value={sun} onChange={setSun} /><SignSelect label="Moon Sign" value={moon} onChange={setMoon} /><SignSelect label="Rising Sign" value={rising} onChange={setRising} /><Button onClick={generate} className="w-full">Generate Big Three Profile</Button><p className="text-xs text-muted-foreground"><strong>Note:</strong> This tool interprets information you provide.</p></CardContent></Card><ResultPanel result={result} /></InterpretationToolPage>);
}

function PlanetSignTool({ navigate, slug }: ToolProps) {
  const [planet, setPlanet] = useState('Sun'); const [sign, setSign] = useState('Aries'); const [result, setResult] = useState<React.ReactNode>(null);
  const planetList = ['Sun','Moon','Mercury','Venus','Mars','Jupiter','Saturn'];
  const generate = () => {
    const interp = getPlanetSignInterpretation(planet, sign); if (!interp) return;
    setResult(<div className="space-y-4"><div className="p-4 rounded-lg border-l-4 border-primary/50 bg-primary/5"><h3 className="font-bold text-lg mb-2">{planet} in {sign}</h3><p className="text-sm leading-relaxed">{interp.coreMeaning}</p></div><div className="grid grid-cols-1 gap-3"><div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/10"><h4 className="font-medium text-green-700 dark:text-green-400 text-sm mb-2">Strengths</h4><ul className="text-sm space-y-1">{interp.strengths.map((s,i)=><li key={i} className="flex items-start gap-2"><span className="text-green-500">+</span>{s}</li>)}</ul></div><div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-900/10"><h4 className="font-medium text-amber-700 dark:text-amber-400 text-sm mb-2">Challenges</h4><ul className="text-sm space-y-1">{interp.challenges.map((c,i)=><li key={i} className="flex items-start gap-2"><span className="text-amber-500">~</span>{c}</li>)}</ul></div></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-3"><div className="p-3 rounded-lg border"><h4 className="font-semibold text-sm mb-1">In Love</h4><p className="text-sm text-muted-foreground">{interp.inLove}</p></div><div className="p-3 rounded-lg border"><h4 className="font-semibold text-sm mb-1">At Work</h4><p className="text-sm text-muted-foreground">{interp.atWork}</p></div></div><div className="p-3 rounded-lg bg-muted/50"><h4 className="font-semibold text-sm mb-1">Growth Area</h4><p className="text-sm">{interp.growthArea}</p></div><div className="p-3 rounded-lg bg-primary/5 border border-primary/10"><h4 className="font-semibold text-sm mb-1">Journal Prompt</h4><p className="text-sm italic">{interp.journalPrompt}</p></div></div>);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };
  return (<InterpretationToolPage title="Planet Sign Meaning Tool" subtitle="Choose a planet and zodiac sign to generate a deeper interpretation of that placement." tag="Advanced Astrology" navigate={navigate} slug={slug}><Card><CardContent className="pt-6 space-y-3"><h2 className="text-lg font-semibold">Your details</h2><div><Label>Planet</Label><select value={planet} onChange={e=>setPlanet(e.target.value)} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">{planetList.map(p=><option key={p} value={p}>{p}</option>)}</select></div><SignSelect label="Zodiac Sign" value={sign} onChange={setSign} /><Button onClick={generate} className="w-full">Generate Planet Sign Interpretation</Button></CardContent></Card><ResultPanel result={result} /></InterpretationToolPage>);
}

function GenericPlanetSignTool({ planetName, subtitle, viewTag, navigate, slug }: { planetName: string; subtitle: string; viewTag: string } & ToolProps) {
  const [sign, setSign] = useState('Aries'); const [result, setResult] = useState<React.ReactNode>(null);
  const generate = () => {
    const interp = getPlanetSignInterpretation(planetName, sign); if (!interp) return; const signData = zodiacSigns.find(s => s.name === sign);
    setResult(<div className="space-y-4"><div className="text-center mb-4"><ElementBadge element={signData?.element||''} /></div><div className="p-4 rounded-lg border-l-4 border-primary/50 bg-primary/5"><h3 className="font-bold text-lg mb-2">{planetName} in {sign}</h3><p className="text-sm leading-relaxed">{interp.coreMeaning}</p></div><div className="grid grid-cols-1 gap-3"><div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/10"><h4 className="font-medium text-green-700 dark:text-green-400 text-sm mb-2">Strengths</h4><ul className="text-sm space-y-1">{interp.strengths.map((s,i)=><li key={i}>{s}</li>)}</ul></div><div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-900/10"><h4 className="font-medium text-amber-700 dark:text-amber-400 text-sm mb-2">Challenges</h4><ul className="text-sm space-y-1">{interp.challenges.map((c,i)=><li key={i}>{c}</li>)}</ul></div></div><div className="p-3 rounded-lg border"><h4 className="font-semibold text-sm mb-1">Growth Area</h4><p className="text-sm">{interp.growthArea}</p></div><div className="p-3 rounded-lg bg-primary/5 border border-primary/10"><h4 className="font-semibold text-sm mb-1">Journal Prompt</h4><p className="text-sm italic">{interp.journalPrompt}</p></div></div>);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };
  return (<InterpretationToolPage title={`${planetName} Sign Meaning Tool`} subtitle={subtitle} tag={viewTag} navigate={navigate} slug={slug}><Card><CardContent className="pt-6 space-y-3"><h2 className="text-lg font-semibold">Your details</h2><SignSelect label={`${planetName} Sign`} value={sign} onChange={setSign} /><Button onClick={generate} className="w-full">Generate {planetName} in {sign} Interpretation</Button></CardContent></Card><ResultPanel result={result} /></InterpretationToolPage>);
}

function AspectTool({ navigate, slug }: ToolProps) {
  const [aspect, setAspect] = useState('0'); const [sign1, setSign1] = useState('Aries'); const [sign2, setSign2] = useState('Aries'); const [result, setResult] = useState<React.ReactNode>(null);
  const generate = () => {
    const interp = aspectInterpretations[parseInt(aspect)]; if (!interp) return; const s1 = zodiacSigns.find(s => s.name === sign1); const s2 = zodiacSigns.find(s => s.name === sign2);
    setResult(<div className="space-y-4"><div className="text-center mb-4"><span className="text-4xl">{interp.symbol}</span><h3 className="font-bold text-xl mt-2">{interp.name} ({interp.angle})</h3><Badge variant={interp.nature==='harmonious'?'default':interp.nature==='challenging'?'destructive':'secondary'} className="mt-2">{interp.nature}</Badge></div><div className="p-4 rounded-lg border-l-4 border-primary/50 bg-primary/5"><p className="text-sm leading-relaxed">{interp.description}</p></div><div className="p-4 rounded-lg bg-muted/50"><h4 className="font-semibold text-sm mb-1">Practical Advice</h4><p className="text-sm">{interp.advice}</p></div><div className="grid grid-cols-2 gap-3"><div className="p-3 rounded-lg border text-center"><div className="text-2xl">{s1?.symbol}</div><div className="font-medium text-sm">{s1?.name}</div><ElementBadge element={s1?.element||''} /></div><div className="p-3 rounded-lg border text-center"><div className="text-2xl">{s2?.symbol}</div><div className="font-medium text-sm">{s2?.name}</div><ElementBadge element={s2?.element||''} /></div></div></div>);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };
  return (<InterpretationToolPage title="Aspect Meaning Tool" subtitle="Understand conjunctions, squares, trines, sextiles and oppositions between two signs." tag="Advanced Astrology" navigate={navigate} slug={slug}><Card><CardContent className="pt-6 space-y-3"><h2 className="text-lg font-semibold">Your details</h2><div><Label>Aspect</Label><select value={aspect} onChange={e=>setAspect(e.target.value)} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">{aspectInterpretations.map((a,i)=><option key={i} value={i}>{a.symbol} {a.name} ({a.angle})</option>)}</select></div><SignSelect label="First Sign" value={sign1} onChange={setSign1} /><SignSelect label="Second Sign" value={sign2} onChange={setSign2} /><Button onClick={generate} className="w-full">Interpret Aspect</Button></CardContent></Card><ResultPanel result={result} /></InterpretationToolPage>);
}

function PlanetInHouseTool({ navigate, slug }: ToolProps) {
  const [houseIdx, setHouseIdx] = useState('0'); const [result, setResult] = useState<React.ReactNode>(null);
  const generate = () => { const house = houseInterpretations[parseInt(houseIdx)]; if (!house) return; setResult(<div className="space-y-4"><div className="text-center mb-4"><h3 className="font-bold text-xl">{house.name}</h3></div><div className="p-4 rounded-lg border-l-4 border-primary/50 bg-primary/5"><p className="text-sm leading-relaxed">{house.description}</p></div><div className="p-3 rounded-lg bg-muted/50"><h4 className="font-semibold text-sm mb-1">Key Themes</h4><p className="text-sm">{house.keyThemes}</p></div></div>); window.scrollTo({ top: 300, behavior: 'smooth' }); };
  return (<InterpretationToolPage title="Planet in House Meaning Tool" subtitle="Learn what a planet means when placed in each of the twelve astrological houses." tag="Advanced Astrology" navigate={navigate} slug={slug}><Card><CardContent className="pt-6 space-y-3"><h2 className="text-lg font-semibold">Select a House</h2><div><Label>Astrological House</Label><select value={houseIdx} onChange={e=>setHouseIdx(e.target.value)} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">{houseInterpretations.map((h,i)=><option key={i} value={i}>{h.name}</option>)}</select></div><Button onClick={generate} className="w-full">Interpret House</Button></CardContent></Card><ResultPanel result={result} /></InterpretationToolPage>);
}

function ZodiacCalculatorTool({ navigate, slug }: ToolProps) {
  const [month, setMonth] = useState(1); const [day, setDay] = useState(1); const [result, setResult] = useState<ReturnType<typeof calculateZodiacSign>|null>(null);
  const calc = () => { setResult(calculateZodiacSign(month, day)); window.scrollTo({ top: 300, behavior: 'smooth' }); };
  return (<div className="fade-in max-w-4xl mx-auto px-4 py-8"><div className="mb-6"><Badge variant="secondary" className="mb-2">Calculator</Badge><h1 className="text-3xl font-bold mb-2">Zodiac Sign Calculator</h1><p className="text-muted-foreground">Enter your birth date to find your zodiac sign.</p></div><Card className="mb-6"><CardContent className="pt-6"><div className="grid grid-cols-2 gap-4 mb-4"><div><Label>Month</Label><select value={month} onChange={e=>setMonth(Number(e.target.value))} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">{months.map((m,i)=><option key={i} value={i+1}>{m}</option>)}</select></div><div><Label>Day</Label><select value={day} onChange={e=>setDay(Number(e.target.value))} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">{Array.from({length:31},(_,i)=><option key={i} value={i+1}>{i+1}</option>)}</select></div></div><Button onClick={calc} className="w-full">Calculate My Sign</Button></CardContent></Card>{result && (<Card className="border-2 border-primary/20 fade-in"><CardContent className="pt-6"><div className="flex items-start gap-4 mb-4"><div className="text-5xl">{result.symbol}</div><div><h2 className="text-2xl font-bold">{result.name}</h2><p className="text-muted-foreground">{result.dateRange}</p><div className="flex gap-2 mt-2"><ElementBadge element={result.element} /><Badge variant="outline">{result.modality}</Badge><Badge variant="outline">{result.ruling_planet}</Badge></div></div></div><p className="mb-4 leading-relaxed">{result.description}</p><div className="grid grid-cols-1 md:grid-cols-2 gap-4"><div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/10"><h4 className="font-medium text-green-700 dark:text-green-400 text-sm mb-2">Strengths</h4><ul className="text-sm space-y-1">{result.strengths.map((s,i)=><li key={i}>{s}</li>)}</ul></div><div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-900/10"><h4 className="font-medium text-amber-700 dark:text-amber-400 text-sm mb-2">Challenges</h4><ul className="text-sm space-y-1">{result.weaknesses.map((w,i)=><li key={i}>{w}</li>)}</ul></div></div><div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"><div className="p-4 rounded-lg border"><h4 className="font-semibold mb-2 text-sm">Love & Relationships</h4><p className="text-sm text-muted-foreground">{result.loveStyle}</p></div><div className="p-4 rounded-lg border"><h4 className="font-semibold mb-2 text-sm">Career & Work</h4><p className="text-sm text-muted-foreground">{result.careerStyle}</p></div></div><div className="p-3 rounded-lg bg-muted/50 mt-4"><h4 className="font-semibold text-sm mb-2">Most Compatible With</h4><div className="flex flex-wrap gap-2">{result.compatibility.map(c=><Badge key={c} variant="secondary">{c}</Badge>)}</div></div></CardContent></Card>)}{slug && <ToolEducationSection slug={slug} />}<DisclaimerNote /><RelatedTools navigate={navigate} /></div>);
}

function MoonPhaseTool({ navigate, slug }: ToolProps) {
  const [year, setYear] = useState(2024); const [month, setMonth] = useState(1); const [day, setDay] = useState(1); const [result, setResult] = useState<{ phase: ReturnType<typeof calculateMoonPhase>; illumination: number }|null>(null);
  const calc = () => { setResult({ phase: calculateMoonPhase(year,month,day), illumination: calculateMoonIllumination(year,month,day) }); window.scrollTo({ top: 300, behavior: 'smooth' }); };
  return (<div className="fade-in max-w-4xl mx-auto px-4 py-8"><div className="mb-6"><Badge variant="secondary" className="mb-2">Calculator</Badge><h1 className="text-3xl font-bold mb-2">Moon Phase Birthday Tool</h1><p className="text-muted-foreground">Find the moon phase on your birthday.</p></div><Card className="mb-6"><CardContent className="pt-6"><div className="grid grid-cols-3 gap-4 mb-4"><div><Label>Year</Label><Input type="number" value={year} onChange={e=>setYear(Number(e.target.value))} className="mt-1" /></div><div><Label>Month</Label><select value={month} onChange={e=>setMonth(Number(e.target.value))} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">{months.map((m,i)=><option key={i} value={i+1}>{m}</option>)}</select></div><div><Label>Day</Label><Input type="number" value={day} onChange={e=>setDay(Number(e.target.value))} className="mt-1" /></div></div><Button onClick={calc} className="w-full">Calculate Moon Phase</Button></CardContent></Card>{result && (<Card className="border-2 border-primary/20 fade-in"><CardContent className="pt-6 text-center"><div className="text-6xl mb-4">{result.phase.emoji}</div><h2 className="text-2xl font-bold mb-1">{result.phase.name}</h2><p className="text-muted-foreground mb-4">{result.phase.energy}</p><div className="w-full bg-muted rounded-full h-4 mb-4 max-w-xs mx-auto"><div className="bg-primary h-4 rounded-full score-bar-fill" style={{width:`${result.illumination}%`}} /></div><p className="text-sm text-muted-foreground">Illumination: <strong>{result.illumination}%</strong></p><p className="max-w-lg mx-auto text-sm leading-relaxed mt-4">{result.phase.description}</p></CardContent></Card>)}{slug && <ToolEducationSection slug={slug} />}<DisclaimerNote /><RelatedTools navigate={navigate} /></div>);
}

function LifePathTool({ navigate, slug }: ToolProps) {
  const [month, setMonth] = useState(1); const [day, setDay] = useState(1); const [year, setYear] = useState(1990); const [result, setResult] = useState<number|null>(null);
  const calc = () => { setResult(calculateLifePathNumber(month,day,year)); window.scrollTo({ top: 300, behavior: 'smooth' }); };
  return (<div className="fade-in max-w-4xl mx-auto px-4 py-8"><div className="mb-6"><Badge variant="secondary" className="mb-2">Numerology</Badge><h1 className="text-3xl font-bold mb-2">Life Path Number Calculator</h1><p className="text-muted-foreground">Calculate your numerology life path number from your birth date.</p></div><Card className="mb-6"><CardContent className="pt-6"><div className="grid grid-cols-3 gap-4 mb-4"><div><Label>Month</Label><select value={month} onChange={e=>setMonth(Number(e.target.value))} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">{months.map((m,i)=><option key={i} value={i+1}>{m}</option>)}</select></div><div><Label>Day</Label><Input type="number" value={day} onChange={e=>setDay(Number(e.target.value))} className="mt-1" /></div><div><Label>Year</Label><Input type="number" value={year} onChange={e=>setYear(Number(e.target.value))} className="mt-1" /></div></div><Button onClick={calc} className="w-full">Calculate</Button></CardContent></Card>{result!==null && (<Card className="border-2 border-primary/20 fade-in"><CardContent className="pt-6 text-center"><p className="text-sm text-muted-foreground mb-2">Your Life Path Number</p><div className="text-6xl font-bold text-primary mb-4">{result}</div><p className="max-w-lg mx-auto leading-relaxed">{getLifePathMeaning(result)}</p></CardContent></Card>)}{slug && <ToolEducationSection slug={slug} />}<DisclaimerNote /><RelatedTools navigate={navigate} /></div>);
}

function NameNumerologyTool({ navigate, slug }: ToolProps) {
  const [name, setName] = useState(''); const [result, setResult] = useState<ReturnType<typeof calculateNameNumerology>|null>(null);
  const calc = () => { if(name.trim().length>0){ setResult(calculateNameNumerology(name)); window.scrollTo({ top: 300, behavior: 'smooth' }); } };
  return (<div className="fade-in max-w-4xl mx-auto px-4 py-8"><div className="mb-6"><Badge variant="secondary" className="mb-2">Numerology</Badge><h1 className="text-3xl font-bold mb-2">Name Numerology Calculator</h1><p className="text-muted-foreground">Calculate the numerology vibration of any name.</p></div><Card className="mb-6"><CardContent className="pt-6"><div className="mb-4"><Label>Enter a Name</Label><Input value={name} onChange={e=>setName(e.target.value)} placeholder="Enter full name" className="mt-1" /></div><Button onClick={calc} className="w-full" disabled={name.trim().length===0}>Calculate</Button></CardContent></Card>{result && (<Card className="border-2 border-primary/20 fade-in"><CardContent className="pt-6 text-center"><p className="text-sm text-muted-foreground mb-2">Name Number</p><div className="text-6xl font-bold text-primary mb-4">{result.number}</div><p className="max-w-lg mx-auto leading-relaxed">{result.meaning}</p></CardContent></Card>)}{slug && <ToolEducationSection slug={slug} />}<DisclaimerNote /><RelatedTools navigate={navigate} /></div>);
}

function ChineseZodiacTool({ navigate, slug }: ToolProps) {
  const [year, setYear] = useState(1990); const [result, setResult] = useState<ReturnType<typeof calculateChineseZodiac>|null>(null);
  const calc = () => { setResult(calculateChineseZodiac(year)); window.scrollTo({ top: 300, behavior: 'smooth' }); };
  return (<div className="fade-in max-w-4xl mx-auto px-4 py-8"><div className="mb-6"><Badge variant="secondary" className="mb-2">Calculator</Badge><h1 className="text-3xl font-bold mb-2">Chinese Zodiac Calculator</h1><p className="text-muted-foreground">Find your Chinese zodiac animal from your birth year.</p></div><Card className="mb-6"><CardContent className="pt-6"><div className="mb-4"><Label>Birth Year</Label><Input type="number" value={year} onChange={e=>setYear(Number(e.target.value))} className="mt-1" /></div><Button onClick={calc} className="w-full">Calculate</Button></CardContent></Card>{result && (<Card className="border-2 border-primary/20 fade-in"><CardContent className="pt-6"><div className="flex items-start gap-4 mb-4"><div className="text-5xl">{result.symbol}</div><div><h2 className="text-2xl font-bold">Year of the {result.animal}</h2><p className="text-muted-foreground">Element: {result.element}</p></div></div><p className="mb-4 leading-relaxed">{result.description}</p><div className="grid grid-cols-2 gap-4"><div className="p-3 rounded-lg border"><h4 className="font-semibold text-sm mb-2">Traits</h4><div className="flex flex-wrap gap-1">{result.traits.map(t=><Badge key={t} variant="secondary">{t}</Badge>)}</div></div><div className="p-3 rounded-lg border"><h4 className="font-semibold text-sm mb-2">Compatible</h4><div className="flex flex-wrap gap-1">{result.compatibility.map(c=><Badge key={c} variant="secondary">{c}</Badge>)}</div></div></div></CardContent></Card>)}{slug && <ToolEducationSection slug={slug} />}<DisclaimerNote /><RelatedTools navigate={navigate} /></div>);
}

function CompatibilityTool({ navigate, slug }: ToolProps) {
  const [s1, setS1] = useState('Aries'); const [s2, setS2] = useState('Leo'); const [result, setResult] = useState<ReturnType<typeof calculateCompatibility>|null>(null);
  const calc = () => { setResult(calculateCompatibility(s1,s2)); window.scrollTo({ top: 300, behavior: 'smooth' }); };
  return (<div className="fade-in max-w-4xl mx-auto px-4 py-8"><div className="mb-6"><Badge variant="secondary" className="mb-2">Compatibility</Badge><h1 className="text-3xl font-bold mb-2">Zodiac Compatibility Checker</h1><p className="text-muted-foreground">Check astrological compatibility between any two zodiac signs.</p></div><Card className="mb-6"><CardContent className="pt-6"><div className="grid grid-cols-2 gap-4 mb-4"><SignSelect label="First Sign" value={s1} onChange={setS1} /><SignSelect label="Second Sign" value={s2} onChange={setS2} /></div><Button onClick={calc} className="w-full">Check Compatibility</Button></CardContent></Card>{result && (<Card className="border-2 border-primary/20 fade-in"><CardContent className="pt-6"><div className="flex items-center justify-between mb-4"><h2 className="text-xl font-bold">{s1} & {s2}</h2><div className="text-3xl font-bold text-primary">{result.score}%</div></div><div className="w-full bg-muted rounded-full h-3 mb-4"><div className={`h-3 rounded-full score-bar-fill ${result.score>=80?'bg-green-500':result.score>=60?'bg-amber-500':'bg-red-500'}`} style={{width:`${result.score}%`}} /></div><p className="leading-relaxed">{result.summary}</p></CardContent></Card>)}{slug && <ToolEducationSection slug={slug} />}<DisclaimerNote /><RelatedTools navigate={navigate} /></div>);
}

function LoveCompatibilityTool({ navigate, slug }: ToolProps) {
  const [s1, setS1] = useState('Aries'); const [s2, setS2] = useState('Leo'); const [result, setResult] = useState<ReturnType<typeof calculateCompatibility>|null>(null);
  const calc = () => { setResult(calculateCompatibility(s1,s2)); window.scrollTo({ top: 300, behavior: 'smooth' }); };
  const interp1 = getPlanetSignInterpretation('Venus', s1); const interp2 = getPlanetSignInterpretation('Venus', s2);
  return (<div className="fade-in max-w-4xl mx-auto px-4 py-8"><div className="mb-6"><Badge variant="secondary" className="mb-2">Compatibility</Badge><h1 className="text-3xl font-bold mb-2">Love Compatibility Test</h1><p className="text-muted-foreground">Explore romantic compatibility with love-specific insights.</p></div><Card className="mb-6"><CardContent className="pt-6"><div className="grid grid-cols-2 gap-4 mb-4"><SignSelect label="Your Sign" value={s1} onChange={setS1} /><SignSelect label="Partner Sign" value={s2} onChange={setS2} /></div><Button onClick={calc} className="w-full">Test Love Compatibility</Button></CardContent></Card>{result && (<Card className="border-2 border-primary/20 fade-in"><CardContent className="pt-6"><div className="flex items-center justify-between mb-4"><h2 className="text-xl font-bold">Love: {s1} & {s2}</h2><div className="text-3xl font-bold text-primary">{result.score}%</div></div><div className="w-full bg-muted rounded-full h-3 mb-4"><div className={`h-3 rounded-full score-bar-fill ${result.score>=80?'bg-green-500':result.score>=60?'bg-amber-500':'bg-red-500'}`} style={{width:`${result.score}%`}} /></div><p className="leading-relaxed mb-4">{result.summary}</p><div className="grid grid-cols-1 sm:grid-cols-2 gap-4"><div className="p-3 rounded-lg border"><h4 className="font-semibold text-sm mb-1">{s1} Love Style (Venus)</h4><p className="text-sm text-muted-foreground">{interp1?.inLove}</p></div><div className="p-3 rounded-lg border"><h4 className="font-semibold text-sm mb-1">{s2} Love Style (Venus)</h4><p className="text-sm text-muted-foreground">{interp2?.inLove}</p></div></div></CardContent></Card>)}{slug && <ToolEducationSection slug={slug} />}<DisclaimerNote /><RelatedTools navigate={navigate} /></div>);
}

function FriendshipCompatTool({ navigate, slug }: ToolProps) {
  const [s1, setS1] = useState('Aries'); const [s2, setS2] = useState('Leo'); const [result, setResult] = useState<ReturnType<typeof calculateCompatibility>|null>(null);
  const calc = () => { setResult(calculateCompatibility(s1,s2)); window.scrollTo({ top: 300, behavior: 'smooth' }); };
  return (<div className="fade-in max-w-4xl mx-auto px-4 py-8"><div className="mb-6"><Badge variant="secondary" className="mb-2">Compatibility</Badge><h1 className="text-3xl font-bold mb-2">Friendship Compatibility Calculator</h1><p className="text-muted-foreground">Understand platonic friendship dynamics between any two zodiac signs.</p></div><Card className="mb-6"><CardContent className="pt-6"><div className="grid grid-cols-2 gap-4 mb-4"><SignSelect label="Your Sign" value={s1} onChange={setS1} /><SignSelect label="Friend Sign" value={s2} onChange={setS2} /></div><Button onClick={calc} className="w-full">Check Friendship</Button></CardContent></Card>{result && (<Card className="border-2 border-primary/20 fade-in"><CardContent className="pt-6"><div className="flex items-center justify-between mb-4"><h2 className="text-xl font-bold">Friendship: {s1} & {s2}</h2><div className="text-3xl font-bold text-primary">{result.score}%</div></div><div className="w-full bg-muted rounded-full h-3 mb-4"><div className={`h-3 rounded-full score-bar-fill ${result.score>=80?'bg-green-500':result.score>=60?'bg-amber-500':'bg-red-500'}`} style={{width:`${result.score}%`}} /></div><p className="leading-relaxed">{result.summary}</p></CardContent></Card>)}{slug && <ToolEducationSection slug={slug} />}<DisclaimerNote /><RelatedTools navigate={navigate} /></div>);
}

const slugToTool: Record<string, (props: ToolProps) => React.ReactElement> = {
  'big-three-meaning': (p) => <BigThreeTool {...p} />,
  'planet-sign-meaning': (p) => <PlanetSignTool {...p} />,
  'moon-sign-meaning': (p) => <GenericPlanetSignTool planetName="Moon" subtitle="Explore emotional needs, comfort patterns, stress responses and self-care themes by Moon sign." viewTag="Advanced Astrology" {...p} />,
  'venus-sign-love-style': (p) => <GenericPlanetSignTool planetName="Venus" subtitle="Understand attraction, affection, relationship needs and love blind spots by Venus sign." viewTag="Advanced Astrology" {...p} />,
  'mars-sign-action-style': (p) => <GenericPlanetSignTool planetName="Mars" subtitle="Explore motivation, conflict style, ambition, desire and stress reactions by Mars sign." viewTag="Advanced Astrology" {...p} />,
  'mercury-sign-communication': (p) => <GenericPlanetSignTool planetName="Mercury" subtitle="Understand thinking style, communication habits, learning rhythm and conflict language by Mercury sign." viewTag="Advanced Astrology" {...p} />,
  'aspect-meaning': (p) => <AspectTool {...p} />,
  'planet-in-house': (p) => <PlanetInHouseTool {...p} />,
  'rising-sign-estimator': (p) => <RisingSignEstimatorTool navigate={p.navigate} slug={p.slug} />,
  'birth-chart-checklist': (p) => (
    <div>
      <BirthChartChecklistTool navigate={p.navigate} />
      <ToolEducationSection slug={p.slug} />
    </div>
  ),
  'zodiac-calculator': (p) => <ZodiacCalculatorTool {...p} />,
  'moon-phase': (p) => <MoonPhaseTool {...p} />,
  'daily-horoscope': (p) => <DailyHoroscopeTool navigate={p.navigate} slug={p.slug} />,
  'horoscope-2026': (p) => <Horoscope2026Tool navigate={p.navigate} slug={p.slug} />,
  'compatibility': (p) => <CompatibilityTool {...p} />,
  'love-compatibility': (p) => <LoveCompatibilityTool {...p} />,
  'friendship-compatibility': (p) => <FriendshipCompatTool {...p} />,
  'life-path': (p) => <LifePathTool {...p} />,
  'name-numerology': (p) => <NameNumerologyTool {...p} />,
  'personal-year': (p) => <PersonalYearTool navigate={p.navigate} slug={p.slug} />,
  'angel-number': (p) => <AngelNumberTool navigate={p.navigate} slug={p.slug} />,
  'chinese-zodiac': (p) => <ChineseZodiacTool {...p} />,
  'five-elements': (p) => <FiveElementsTool navigate={p.navigate} slug={p.slug} />,
  'lucky-color': (p) => <LuckyColorTool navigate={p.navigate} slug={p.slug} />,
  'lucky-number': (p) => <LuckyNumberTool navigate={p.navigate} slug={p.slug} />,
  'birthday-personality': (p) => <BirthdayPersonalityTool navigate={p.navigate} slug={p.slug} />,
  'career-personality': (p) => <CareerPersonalityTool navigate={p.navigate} slug={p.slug} />,
  'zodiac-money-style': (p) => <ZodiacMoneyStyleTool navigate={p.navigate} slug={p.slug} />,
  'birth-time-unknown': (p) => (
    <div>
      <BirthTimeUnknownTool navigate={p.navigate} />
      <ToolEducationSection slug={p.slug} />
    </div>
  ),
  'yes-no-tarot': (p) => (
    <div>
      <YesNoTarotTool navigate={p.navigate} />
      <ToolEducationSection slug={p.slug} />
    </div>
  ),
};


export default function ToolSlugPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;
  const navigate = (v: string) => { router.push(v); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  const ToolComponent = slugToTool[slug];
  if (!ToolComponent) {
    return <div className="max-w-3xl mx-auto px-4 py-8 text-center"><h1 className="text-2xl font-bold mb-4">Tool Not Found</h1><p className="text-muted-foreground">The tool you are looking for does not exist.</p></div>;
  }
  return <ToolComponent navigate={navigate} slug={slug} />;
}
