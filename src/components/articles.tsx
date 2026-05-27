/* eslint-disable react/jsx-key */
'use client';

import React from 'react';
import { zodiacSigns, chineseZodiacAnimals, lifePathMeanings } from '@/lib/astro-data';
import { aspectInterpretations, houseInterpretations } from '@/lib/interpretations';
import { DisclaimerNote, RelatedTools } from '@/components/tools';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Star, Calculator, Compass, Sparkles, Clock, BookOpen,
  Moon, Mountain, Sun, Users, Globe, ArrowRight, Hash, Heart
} from 'lucide-react';

type View = string;

// ============================================================
// SHARED ARTICLE COMPONENTS
// ============================================================
function ArticleHeader({ badge, title, readTime, author }: { badge: string; title: string; readTime: string; author?: string }) {
  return (
    <div className="mb-6">
      <Badge variant="secondary">{badge}</Badge>
      <h1 className="text-3xl font-bold mt-2 mb-3">{title}</h1>
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <span>By {author || 'Astro Insight Tools Team'}</span>
        <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{readTime}</span>
      </div>
    </div>
  );
}

function ArticleBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose prose-stone dark:prose-invert max-w-none mt-8 space-y-6">{children}</div>
  );
}

function ToolCTA({ view, label, icon, navigate }: { view: string; label: string; icon: React.ReactNode; navigate: (v: View) => void }) {
  return (
    <div className="mt-8 p-4 rounded-lg border border-primary/20 bg-primary/5">
      <h3 className="font-semibold mb-2">Try the Tool</h3>
      <div className="flex flex-wrap gap-3">
        <Button onClick={() => navigate(view)}>{icon}{label}</Button>
      </div>
    </div>
  );
}

function FAQSection({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="w-full">
        {faqs.map((faq, i) => (
          <details key={i} className="group border-b">
            <summary className="flex items-center justify-between py-4 text-sm font-medium cursor-pointer outline-none hover:underline [&::-webkit-details-marker]:hidden list-none">
              {faq.q}
              <svg className="text-muted-foreground h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </summary>
            <div className="pb-4 text-sm leading-7 text-muted-foreground">{faq.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}

function DataTable({ headers, rows }: { headers: string[]; rows: React.ReactNode[][] }) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b bg-muted/50">
            {headers.map((h, i) => <th key={i} className="text-left p-3 font-semibold">{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b hover:bg-muted/30">
              {row.map((cell, j) => <td key={j} className="p-3">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ============================================================
// 1. BIG THREE ARTICLE
// ============================================================
export function BigThreeArticle({ navigate }: { navigate: (v: View) => void }) {
  return (
    <article className="fade-in max-w-3xl mx-auto px-4 py-8">
      <ArticleHeader badge="Beginner Guide" title="Big Three Astrology Guide: Sun, Moon and Rising" readTime="10 min read" />
      <DisclaimerNote />
      <ArticleBody>
        <p>The Big Three in astrology refer to your Sun sign, Moon sign, and Rising sign (also called Ascendant). Together, these three placements form the foundation of your astrological profile and reveal the most important layers of your personality. While a full natal chart contains dozens of planetary placements and aspects, the Big Three are widely regarded as the most influential factors in shaping who you are, how you feel, and how others perceive you.</p>

        <h2>What Is the Big Three in Astrology?</h2>
        <p>In astrology, your birth chart is a snapshot of where every planet was positioned at the exact moment and location of your birth. While each planet carries its own significance, the Sun, Moon, and Rising sign are considered the three pillars of personality because they represent the three most fundamental dimensions of human experience: conscious identity (Sun), emotional inner life (Moon), and social persona (Rising).</p>
        <p>Understanding your Big Three gives you a much richer and more nuanced picture of yourself than your Sun sign alone. Many people who feel their Sun sign does not fully describe them often find that their Moon and Rising signs fill in the missing pieces. For example, someone with a gentle Cancer Sun but an assertive Aries Rising may come across as bold and direct, while internally they are deeply sensitive and nurturing.</p>

        <h2>The Sun Sign: Your Core Identity</h2>
        <p>Your Sun sign is determined by where the Sun was located at the time of your birth. It is the most well-known astrological placement because it is easy to calculate — you only need your birth date to find it. The Sun represents your conscious identity, your sense of self, your vitality, and the direction you are growing toward throughout your life.</p>
        <p>Think of your Sun sign as the protagonist of your life story. It represents the qualities you are developing, the ways you shine, and the central themes of your personal journey. When someone asks &ldquo;What&rsquo;s your sign?&rdquo; they are asking about your Sun sign. It is the core of who you are becoming, but it is not the whole picture.</p>
        <p>For instance, a Leo Sun is learning about creativity, leadership, and self-expression. A Virgo Sun is developing skills in analysis, service, and self-improvement. Your Sun sign shows what energizes you and what makes you feel truly alive.</p>

        <h2>The Moon Sign: Your Emotional Inner World</h2>
        <p>Your Moon sign represents your emotional nature, your instincts, your habits, and your subconscious needs. While the Sun shows who you are becoming, the Moon reveals who you already are at the deepest emotional level. Your Moon sign describes how you process feelings, what makes you feel safe, how you respond to stress, and what you need in order to feel nurtured and secure.</p>
        <p>Because the Moon changes signs approximately every two and a half days, you need to know your exact birth date (and ideally your birth time and location) to determine your Moon sign accurately. The Moon is considered one of the most personal and sensitive points in the chart.</p>
        <p>For example, a Moon in Taurus needs physical comfort, consistency, and sensory pleasure to feel secure. A Moon in Gemini processes emotions through conversation, writing, and mental analysis. Understanding your Moon sign can help you develop healthier emotional habits, communicate your needs to partners, and create a self-care routine that genuinely nourishes you.</p>

        <h2>The Rising Sign: Your Outer Persona and First Impressions</h2>
        <p>Your Rising sign, or Ascendant, is the zodiac sign that was rising on the eastern horizon at the exact moment of your birth. It is determined by your precise birth time and location, making it one of the most personal placements in your chart. Your Rising sign represents your social persona — the way others perceive you, the first impression you make, and the lens through which you approach the world.</p>
        <p>While your Sun sign is who you truly are and your Moon sign is how you feel, your Rising sign is how you appear. It influences your physical appearance, your style of communication, the way you dress, and the energy you project when you walk into a room. It also acts as a filter for the rest of your chart — it colors how your Sun and Moon express themselves outwardly.</p>
        <p>For example, someone with a Scorpio Rising might project intensity, mystery, and a penetrating gaze, regardless of their Sun sign. A Libra Rising might appear charming, diplomatic, and aesthetically refined. Your Rising sign is often the sign people guess you are before they learn your actual Sun sign.</p>

        <h2>How the Big Three Work Together</h2>
        <p>The real power of the Big Three lies in understanding how the three placements interact with each other. They create a dynamic three-part system:</p>
        <DataTable
          headers={['Placement', 'What It Describes', 'Reflection Question']}
          rows={[
            [<strong>Sun Sign</strong>, 'Your conscious identity, vitality, life direction, and sense of self', 'Who am I becoming? What makes me feel alive?'],
            [<strong>Moon Sign</strong>, 'Your emotional needs, instincts, habits, stress responses, and inner comfort', 'What helps me feel safe? How do I process my feelings?'],
            [<strong>Rising Sign</strong>, 'Your outer persona, first impressions, physical style, and approach to life', 'How do others perceive me? How do I enter the world?'],
          ]}
        />
        <p>When your Sun and Moon are in compatible elements (for example, both in Fire signs), your inner and outer lives tend to flow in the same direction. When they are in conflicting elements (for example, a Fire Sun with a Water Moon), you may experience internal tension between what you want to express and what you actually feel.</p>
        <p>Your Rising sign adds another layer: it determines how the energy of your Sun and Moon is expressed to the outside world. A person with a quiet Pisces Sun and a bold Aries Rising will express that Piscean sensitivity in a much more assertive, visible way than a Pisces Sun with a shy Cancer Rising.</p>

        <h2>How to Find Your Big Three</h2>
        <p>Finding your Sun sign is straightforward — you only need your birth date. However, finding your Moon and Rising signs requires a bit more information. You will need your date of birth, your exact time of birth (as precise as possible), and your location of birth. With these three pieces of information, you can generate a free natal chart online or use our tools to explore what each placement means for you.</p>
        <p>If you do not know your exact birth time, you can still work with your Sun and an estimated Moon sign. Some of our interpretation tools allow you to enter placements you already know, so you can explore their meanings without needing a precise birth chart.</p>

        <h2>Common Mistakes When Reading the Big Three</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Treating them as fixed personality boxes.</strong> The Big Three describe energies and tendencies, not rigid limitations. People are far more complex than three sign placements.</li>
          <li><strong>Ignoring real behavior and life history.</strong> Astrology is a symbolic language for reflection, not a substitute for understanding the real psychological, cultural, and situational factors that shape a person.</li>
          <li><strong>Assuming one sign cancels another.</strong> A gentle Cancer Sun does not cancel an assertive Aries Rising. They coexist and create a more complex, multifaceted person.</li>
          <li><strong>Over-identifying with one placement.</strong> Some people relate strongly to their Sun sign but ignore their Moon and Rising. To get the most accurate picture, consider all three together.</li>
          <li><strong>Using astrology to avoid personal responsibility.</strong> Your chart does not dictate your choices. It can highlight tendencies, but you always have agency over your actions and growth.</li>
        </ul>

        <h2>Examples of Big Three Combinations</h2>
        <DataTable
          headers={['Sun', 'Moon', 'Rising', 'Likely Impression']}
          rows={[
            ['Aries', 'Cancer', 'Leo', 'Bold and protective leader who is internally nurturing and deeply emotional'],
            ['Taurus', 'Pisces', 'Virgo', 'Practical and grounded on the outside, with a rich, imaginative inner world'],
            ['Gemini', 'Capricorn', 'Libra', 'Social and charming communicator who is privately disciplined and ambitious'],
            ['Scorpio', 'Leo', 'Aquarius', 'Intense and private individual who appears friendly, unique, and intellectually driven'],
            ['Sagittarius', 'Virgo', 'Taurus', 'Adventurous philosopher who appears calm, reliable, and down-to-earth'],
          ]}
        />

        <ToolCTA view="/tools/big-three-meaning" label="Big Three Meaning Tool" icon={<Star className="mr-2 h-4 w-4" />} navigate={navigate} />
      </ArticleBody>
      <FAQSection faqs={[
        { q: 'Can my Big Three all be the same sign?', a: 'It is possible but uncommon for your Sun, Moon, and Rising to all be in the same sign. This happens when you are born around sunrise on a day when the Moon is also in that sign. People with this configuration often express that sign\'s energy very consistently across all areas of life.' },
        { q: 'Is my Rising sign more important than my Sun sign?', a: 'Neither is more important — they describe different dimensions of your personality. Your Sun sign represents your core identity and life direction, while your Rising sign represents how you appear to others. Some astrologers believe the Rising sign becomes more influential as you mature, because it represents the persona you develop through life experience.' },
        { q: 'What if I don\'t know my birth time?', a: 'Without an exact birth time, your Rising sign cannot be determined with certainty. However, you can still work with your Sun sign and an approximate Moon sign. Our Big Three Meaning Tool allows you to enter the placements you already know to explore their meanings.' },
        { q: 'Do my Big Three change over time?', a: 'Your Sun, Moon, and Rising signs are calculated from your birth data and do not change. They are fixed placements that describe core tendencies throughout your life. However, planetary transits and progressions can activate different parts of your chart at different times, bringing certain placements into focus.' },
        { q: 'How accurate are Big Three descriptions?', a: 'Astrology is a symbolic system used for entertainment and self-reflection, not a scientifically validated personality assessment. Big Three descriptions are general themes that may or may not resonate with your experience. Use them as prompts for reflection rather than definitive statements about who you are.' },
      ]} />
      <RelatedTools navigate={navigate} />
    </article>
  );
}

// ============================================================
// 2. PLANET SIGN PLACEMENTS ARTICLE
// ============================================================
export function PlanetSignArticle({ navigate }: { navigate: (v: View) => void }) {
  const planetDescriptions = [
    { name: 'Sun', symbol: '☉', domain: 'Identity, vitality, ego, life direction', description: 'The Sun represents your core self, your conscious identity, and the central theme of your life. It shows where you shine, what energizes you, and the qualities you are here to develop. The Sun\'s sign reveals the style through which you express your fundamental nature.' },
    { name: 'Moon', symbol: '☽', domain: 'Emotions, instincts, habits, inner needs', description: 'The Moon represents your emotional inner world, your subconscious patterns, and what you need to feel secure. It governs your instinctive reactions, your comfort zones, and the private self that others may not see. The Moon\'s sign reveals how you process and express emotions.' },
    { name: 'Mercury', symbol: '☿', domain: 'Communication, thinking, learning, information', description: 'Mercury represents your mental processes, communication style, and how you learn and process information. It governs speech, writing, reasoning, and the way you connect ideas. Mercury\'s sign reveals whether you think in details or big pictures, and how you express yourself verbally.' },
    { name: 'Venus', symbol: '♀', domain: 'Love, beauty, values, attraction, relationships', description: 'Venus represents your approach to love, beauty, pleasure, and what you value most. It governs romantic attraction, aesthetic preferences, financial attitudes, and how you express affection. Venus\'s sign reveals what you find beautiful and how you behave in relationships.' },
    { name: 'Mars', symbol: '♂', domain: 'Action, desire, courage, conflict, drive', description: 'Mars represents your energy, drive, ambition, and how you take action. It governs courage, anger, sexuality, and the way you pursue what you want. Mars\'s sign reveals your motivation style, how you handle conflict, and where you direct your physical and emotional energy.' },
    { name: 'Jupiter', symbol: '♃', domain: 'Growth, wisdom, abundance, opportunity, belief', description: 'Jupiter represents expansion, optimism, learning, and the areas of life where you experience growth and abundance. It governs higher education, philosophy, travel, and your belief systems. Jupiter\'s sign reveals where you find meaning and where life tends to offer you opportunities.' },
    { name: 'Saturn', symbol: '♄', domain: 'Discipline, structure, responsibility, limitation', description: 'Saturn represents structure, discipline, responsibility, and the areas of life where you face challenges that lead to growth. It governs authority, time, commitment, and the lessons you must master. Saturn\'s sign reveals where you need to develop maturity and where you face your greatest tests.' },
  ];

  return (
    <article className="fade-in max-w-3xl mx-auto px-4 py-8">
      <ArticleHeader badge="Guide" title="Planet Sign Placements Guide" readTime="12 min read" />
      <DisclaimerNote />
      <ArticleBody>
        <p>In astrology, every planet in your birth chart occupies a specific zodiac sign. These planet-in-sign combinations — called placements — describe how each planetary energy is expressed through the qualities of that sign. Understanding your planet sign placements is one of the most rewarding parts of exploring your birth chart, because each placement reveals a different dimension of your personality, needs, and potential.</p>

        <h2>What Are Planet Sign Placements?</h2>
        <p>A planet sign placement tells you which zodiac sign a particular planet was in at the time of your birth. For example, if Mercury was in Virgo when you were born, you have &ldquo;Mercury in Virgo.&rdquo; Each placement describes how the energy of that planet filters through the style, element, and modality of its sign. Mercury in Virgo thinks analytically and pays attention to detail, while Mercury in Pisces thinks intuitively and sees the big picture through imagination.</p>
        <p>The seven traditional visible planets — Sun, Moon, Mercury, Venus, Mars, Jupiter, and Saturn — each govern a different area of life and a different function of the personality. When you explore all seven placements, you get a remarkably detailed portrait of your communication style, love nature, career drives, emotional needs, and personal growth themes.</p>

        <h2>The Seven Visible Planets and What They Govern</h2>
        <DataTable
          headers={['Planet', 'Symbol', 'Domain', 'Key Question']}
          rows={planetDescriptions.map(p => [
            <strong>{p.name}</strong>,
            <span className="text-lg">{p.symbol}</span>,
            p.domain,
            p.name === 'Sun' ? 'Who am I becoming?' : p.name === 'Moon' ? 'What do I need to feel safe?' : p.name === 'Mercury' ? 'How do I think and communicate?' : p.name === 'Venus' ? 'What do I value and desire?' : p.name === 'Mars' ? 'How do I take action?' : p.name === 'Jupiter' ? 'Where do I grow and find meaning?' : 'Where must I build discipline and mastery?',
          ])}
        />

        <h2>Detailed Planet Descriptions</h2>
        {planetDescriptions.map(p => (
          <React.Fragment key={p.name}>
            <h3>{p.symbol} {p.name}: {p.domain.split(',')[0]}</h3>
            <p>{p.description}</p>
          </React.Fragment>
        ))}

        <h2>How Planets Interact with Zodiac Signs</h2>
        <p>When a planet is in a sign that shares its natural element, the energy flows easily. For example, Mars in Aries (both fiery) creates strong, direct, confident action. When a planet is in a sign of a different element, the expression is more complex. Mars in Cancer (fire planet in water sign) can create emotional defensiveness or indirect action styles.</p>
        <p>The modality of the sign also matters. A planet in a Cardinal sign (Aries, Cancer, Libra, Capricorn) expresses that planet&rsquo;s energy through initiative and leadership. A planet in a Fixed sign (Taurus, Leo, Scorpio, Aquarius) expresses it through persistence and stability. A planet in a Mutable sign (Gemini, Virgo, Sagittarius, Pisces) expresses it through adaptability and learning.</p>

        <h2>How to Read Your Placements</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Start with the Sun.</strong> Your Sun sign is your baseline — it describes your overall identity and the core theme of your life.</li>
          <li><strong>Explore the Moon.</strong> Your Moon sign reveals your emotional world and inner needs. It is often the placement that surprises people the most.</li>
          <li><strong>Look at personal planets.</strong> Mercury, Venus, and Mars describe your communication style, love nature, and drive respectively. These placements have a direct, daily impact on how you interact with the world.</li>
          <li><strong>Consider the social planets.</strong> Jupiter and Saturn describe your growth patterns, beliefs, responsibilities, and life lessons. These placements have a more long-term, developmental influence.</li>
          <li><strong>Use interpretation tools.</strong> You can use our Planet Sign Meaning Tool to get a detailed interpretation of any individual placement, including strengths, challenges, love and work perspectives, and journal prompts.</li>
        </ol>

        <h2>Elements and Planet Sign Compatibility</h2>
        <DataTable
          headers={['Element', 'Signs', 'Qualities', 'How Planets Express Here']}
          rows={[
            [<strong>Fire</strong>, 'Aries, Leo, Sagittarius', 'Enthusiastic, action-oriented, inspiring', 'Planets express energy boldly, directly, and with passion'],
            [<strong>Earth</strong>, 'Taurus, Virgo, Capricorn', 'Practical, grounded, reliable', 'Planets express energy steadily, patiently, and through tangible results'],
            [<strong>Air</strong>, 'Gemini, Libra, Aquarius', 'Intellectual, communicative, social', 'Planets express energy through ideas, conversation, and social connection'],
            [<strong>Water</strong>, 'Cancer, Scorpio, Pisces', 'Emotional, intuitive, deep', 'Planets express energy through feelings, intuition, and emotional connection'],
          ]}
        />

        <ToolCTA view="/tools/planet-sign-meaning" label="Planet Sign Meaning Tool" icon={<Compass className="mr-2 h-4 w-4" />} navigate={navigate} />
      </ArticleBody>
      <FAQSection faqs={[
        { q: 'How many planet sign placements do I have?', a: 'A standard birth chart includes ten planetary placements: Sun, Moon, Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune, and Pluto. However, the seven visible planets (Sun through Saturn) are the most commonly referenced and have the most detailed traditional interpretations.' },
        { q: 'What does it mean when a planet is in its ruling sign?', a: 'When a planet is in the zodiac sign it naturally rules (called "dignity"), it is considered especially strong and comfortable. For example, the Moon in Cancer is in its ruling sign, making emotional intuition and nurturing especially pronounced. Mars in Aries is another example of a planet in its home sign.' },
        { q: 'Can two people have the same planet sign placement but express it differently?', a: 'Absolutely. The same placement can express very differently depending on the other placements in the chart, house positions, aspects to other planets, and the individual\'s life experiences, culture, and personal development. Astrological placements describe energies and tendencies, not fixed outcomes.' },
        { q: 'Do I need my birth time to know all my planet sign placements?', a: 'The Sun sign only requires your birth date. The Moon sign can usually be determined with your birth date and year, though the exact time helps confirm it. Mercury, Venus, and Mars move quickly enough that their signs can sometimes vary within a single day, so knowing your birth time helps. Jupiter and Saturn change signs less frequently, so their signs are easier to determine.' },
      ]} />
      <RelatedTools navigate={navigate} />
    </article>
  );
}

// ============================================================
// 3. ASPECTS ARTICLE
// ============================================================
export function AspectsArticle({ navigate }: { navigate: (v: View) => void }) {
  return (
    <article className="fade-in max-w-3xl mx-auto px-4 py-8">
      <ArticleHeader badge="Guide" title="Astrology Aspects Beginner Guide" readTime="11 min read" />
      <DisclaimerNote />
      <ArticleBody>
        <p>In astrology, aspects are the angular relationships between planets in your birth chart. They describe how different planetary energies interact with each other — whether they cooperate, challenge, or stimulate one another. Understanding aspects is essential for reading a birth chart with depth, because while individual planet sign placements tell you about each energy in isolation, aspects reveal the dynamic relationships between those energies.</p>

        <h2>What Are Astrology Aspects?</h2>
        <p>Imagine your birth chart as a circle with the planets placed around it. The angular distance between any two planets creates a specific geometric relationship, and that relationship is called an aspect. Each aspect has its own character — some are harmonious and flowing, others are tense and challenging, and still others are neutral and activating.</p>
        <p>Aspects are measured in degrees, and most astrologers use an orb (a range of allowed deviation) when determining whether two planets form an aspect. For example, a square aspect is exactly 90 degrees, but most astrologers consider planets within about 8-10 degrees of a perfect square to still form that aspect.</p>

        <h2>The Five Major Aspects</h2>
        <p>While there are many minor aspects used by advanced astrologers, the five major aspects are the ones most commonly referenced in birth chart readings. They are the conjunction, sextile, square, trine, and opposition. Each one describes a fundamentally different type of relationship between two planetary energies.</p>
        <DataTable
          headers={['Aspect', 'Angle', 'Nature', 'Symbol', 'Key Theme']}
          rows={[
            [<strong>Conjunction</strong>, '0°', <Badge variant="secondary">Neutral</Badge>, '☌', 'Fusion of energies; two planets blend their forces together'],
            [<strong>Sextile</strong>, '60°', <Badge variant="default">Harmonious</Badge>, '⌭', 'Easy cooperation; opportunities that require some effort to activate'],
            [<strong>Square</strong>, '90°', <Badge variant="destructive">Challenging</Badge>, '□', 'Dynamic tension; conflict that drives growth and action'],
            [<strong>Trine</strong>, '120°', <Badge variant="default">Harmonious</Badge>, '△', 'Natural flow; effortless harmony between planetary energies'],
            [<strong>Opposition</strong>, '180°', <Badge variant="destructive">Challenging</Badge>, '☌', 'Polarity and balance; tension between opposing forces requiring integration'],
          ]}
        />

        <h2>Understanding Each Aspect in Detail</h2>

        <h3>Conjunction (0°)</h3>
        <p>The conjunction occurs when two planets are at approximately the same degree in the zodiac. This is the most powerful aspect because the two planetary energies merge completely. A conjunction can be tremendously creative when the planets are compatible, or internally tense when they represent conflicting energies. For example, Sun conjunct Venus can create natural charm and artistic talent, while Mars conjunct Saturn can create frustration between the desire for action and the need for caution.</p>

        <h3>Sextile (60°)</h3>
        <p>The sextile represents an opportunity for cooperation between two planetary energies. Unlike the trine, which flows effortlessly, the sextile requires some conscious effort to activate its potential. Think of it as an open door — the opportunity is there, but you need to walk through it. Sextiles often represent talents or abilities that you can develop with practice. They are considered gently positive and indicate areas where growth comes relatively naturally.</p>

        <h3>Square (90°)</h3>
        <p>The square is one of the most dynamic and growth-oriented aspects in astrology. It creates internal tension between two planetary energies that seem to pull in different directions. While squares can be uncomfortable, they are also the engine of personal development. Many of the most accomplished, driven, and resilient people have prominent squares in their charts. The key is learning to channel the tension productively rather than letting it manifest as frustration or conflict.</p>

        <h3>Trine (120°)</h3>
        <p>The trine is the most harmonious aspect. It creates an effortless flow between two planetary energies, often manifesting as natural talents, ease, and good fortune in the areas governed by those planets. However, trines can also lead to complacency — when things come too easily, there may be little motivation to develop or refine the talent. The challenge with trines is not managing conflict but rather appreciating and actively utilizing the natural gifts they represent.</p>

        <h3>Opposition (180°)</h3>
        <p>The opposition creates a dynamic of polarity and tension between two planetary energies. Planets in opposition sit directly across the chart from each other, creating a tug-of-war effect. This aspect often manifests in relationships (the Descendant, which governs partnerships, is always opposite the Ascendant). Oppositions require you to find a balance between two opposing needs or perspectives. When integrated well, they create extraordinary awareness, objectivity, and the ability to see both sides of any situation.</p>

        <h2>How Aspects Interact with Signs and Elements</h2>
        <p>The nature of an aspect is influenced by the elements of the planets involved. A square between two planets in compatible elements (like a Fire planet squaring an Air planet) tends to be more energizing and creative than a square between planets in incompatible elements (like a Fire planet squaring a Water planet), which can feel more frustrating and confusing.</p>
        <p>Similarly, trines between planets in the same element (called an &ldquo;elemental grand trine&rdquo;) can create extraordinary talent and flow in that element&rsquo;s domain, but may also lead to over-reliance on that element&rsquo;s approach to life.</p>

        <h2>Tips for Interpreting Aspects</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Do not fear challenging aspects.</strong> Squares and oppositions are sources of growth, resilience, and achievement. They describe where you are pushed to develop strength.</li>
          <li><strong>Do not take harmonious aspects for granted.</strong> Trines and sextiles describe gifts, but you still need to cultivate them consciously.</li>
          <li><strong>Consider the whole chart.</strong> No single aspect tells the whole story. Aspects work together as part of a complex system.</li>
          <li><strong>Use aspects for reflection, not prediction.</strong> Aspects describe energetic tendencies, not fixed events or outcomes.</li>
        </ol>

        <ToolCTA view="/tools/aspect-meaning" label="Aspect Meaning Tool" icon={<Sparkles className="mr-2 h-4 w-4" />} navigate={navigate} />
      </ArticleBody>
      <FAQSection faqs={[
        { q: 'Are hard aspects always bad?', a: 'No. While squares and oppositions create tension, that tension is often the catalyst for personal growth, achievement, and resilience. Many highly successful and driven people have prominent challenging aspects in their charts. The key is how you work with the energy.' },
        { q: 'What is an orb in astrology?', a: 'An orb is the range of degrees within which an aspect is considered active. For example, a square is exactly 90 degrees, but most astrologers use an orb of about 8 degrees, meaning planets that are 82-98 degrees apart would still be considered to form a square aspect.' },
        { q: 'Can I have no major aspects in my chart?', a: 'It is extremely unlikely to have no aspects at all. Every chart has multiple aspects between planets. However, some planets may have fewer major aspects than others, which can make that planet\'s energy more concentrated or more isolated in its expression.' },
        { q: 'Do aspects change over time?', a: 'Your natal (birth) aspects are fixed for your entire life. However, the planets continue to move after you are born, and they form aspects (called transits) to your natal planets. These transiting aspects can activate different energies at different times in your life.' },
      ]} />
      <RelatedTools navigate={navigate} />
    </article>
  );
}

// ============================================================
// 4. HOUSES ARTICLE
// ============================================================
export function HousesArticle({ navigate }: { navigate: (v: View) => void }) {
  return (
    <article className="fade-in max-w-3xl mx-auto px-4 py-8">
      <ArticleHeader badge="Guide" title="Astrology Houses Beginner Guide" readTime="10 min read" />
      <DisclaimerNote />
      <ArticleBody>
        <p>The twelve astrological houses are one of the three fundamental building blocks of astrology, alongside zodiac signs and planets. While signs describe qualities of energy and planets describe functions, houses describe the areas of life where those energies and functions manifest. Understanding houses is essential for reading a birth chart, because the same planet can express very differently depending on which house it occupies.</p>

        <h2>What Are Astrology Houses?</h2>
        <p>An astrological chart is divided into twelve sections called houses. Each house represents a specific domain of life experience — from your sense of self and personal identity to your career, relationships, home, health, and spiritual growth. Think of the houses as the stage on which the planetary actors (your planets in their signs) perform.</p>
        <p>The houses are based on the time and location of your birth. The sign that was rising on the eastern horizon at your moment of birth determines your First House, and the remaining houses follow in order around the chart. This means that houses are highly individualized — two people born on the same day but at different times or in different locations will have different house placements, even if their planetary sign placements are similar.</p>

        <h2>The Twelve Houses Explained</h2>
        <DataTable
          headers={['House', 'Name', 'Life Area', 'Key Themes']}
          rows={houseInterpretations.map(h => [
            <strong>{h.name}</strong>,
            h.name.split(' ')[1] || h.name,
            h.keyThemes.split(',').slice(0, 2).join(', '),
            h.keyThemes,
          ])}
        />

        <h2>The Three House Groups</h2>
        <p>The twelve houses can be divided into three groups based on the type of energy they represent:</p>

        <h3>Angular Houses (1, 4, 7, 10) — Action and Identity</h3>
        <p>These are the most powerful houses in the chart, located at the four angles. Planets in angular houses express their energy directly and visibly. The First House governs self and appearance, the Fourth House governs home and family, the Seventh House governs partnerships, and the Tenth House governs career and public standing. These houses are associated with Cardinal signs (Aries, Cancer, Libra, Capricorn) and represent areas where you take initiative.</p>

        <h3>Succedent Houses (2, 5, 8, 11) — Stability and Values</h3>
        <p>These houses build on the angular houses and represent areas of stability, accumulation, and personal values. The Second House governs money and possessions, the Fifth House governs creativity and children, the Eighth House governs transformation and shared resources, and the Eleventh House governs friendships and aspirations. These houses are associated with Fixed signs (Taurus, Leo, Scorpio, Aquarius) and represent areas where you build and sustain.</p>

        <h3>Cadent Houses (3, 6, 9, 12) — Learning and Adaptation</h3>
        <p>These houses represent areas of learning, communication, and adaptation. The Third House governs communication and siblings, the Sixth House governs health and daily work, the Ninth House governs higher education and travel, and the Twelfth House governs the subconscious and spiritual life. These houses are associated with Mutable signs (Gemini, Virgo, Sagittarius, Pisces) and represent areas where you process, adapt, and grow.</p>

        <h2>How Houses Interact with Signs and Planets</h2>
        <p>The sign on the cusp (beginning) of each house colors how that house&rsquo;s themes are expressed. For example, if you have Taurus on the Second House cusp (the house of money), you likely approach finances with Taurean qualities — patience, practicality, and a desire for material security. If Gemini is on the cusp, you may approach finances more flexibly and rely on communication skills or multiple income streams.</p>
        <p>Planets located within a house bring their energy to that house&rsquo;s themes. For example, Venus in the Seventh House emphasizes love, beauty, and harmony in partnerships. Mars in the Tenth House brings drive and ambition to career matters. The combination of which planet is in which house, and which sign is on the cusp, creates a rich, nuanced picture of how different life areas are experienced.</p>

        <h2>What You Can Learn Without Exact Birth Time</h2>
        <p>Because houses are time-dependent, you need a reasonably accurate birth time to determine your house placements with confidence. Without a birth time, the houses cannot be calculated reliably. However, you can still work extensively with your planetary sign placements (your Sun, Moon, and other planets in their signs), which do not require a precise birth time. Many of our interpretation tools are designed to work with the information you already know.</p>

        <ToolCTA view="/tools/planet-in-house" label="Planet in House Tool" icon={<Mountain className="mr-2 h-4 w-4" />} navigate={navigate} />
      </ArticleBody>
      <FAQSection faqs={[
        { q: 'Why do I need my birth time for houses?', a: 'The houses are calculated from the exact time and location of your birth, specifically from the position of the Rising sign (Ascendant) on the eastern horizon. Without a birth time, the Rising sign cannot be determined, and consequently the house system cannot be established. This is why astrologers always ask for your birth time.' },
        { q: 'What is the difference between a house and a sign?', a: 'Signs are 30-degree divisions of the zodiac belt and describe qualities of energy (Fire, Earth, Air, Water and their modalities). Houses are divisions of the local sky at your birth time and location, representing areas of life experience. A sign describes HOW energy expresses, while a house describes WHERE in life that energy manifests.' },
        { q: 'Are there different house systems?', a: 'Yes, there are several house systems used in astrology, including Placidus, Whole Sign, Koch, Equal House, and others. Placidus is the most widely used in Western astrology. The choice of house system can affect house placements, especially for people born at extreme latitudes or near house cusps.' },
        { q: 'What does it mean to have an empty house?', a: 'Having no planets in a house does not mean that area of life is empty or unimportant. The sign on the house cusp still describes how you approach that life area, and the house\'s ruling planet (the planet that rules the sign on the cusp) provides additional information. Empty houses are completely normal — most charts have several empty houses.' },
      ]} />
      <RelatedTools navigate={navigate} />
    </article>
  );
}

// ============================================================
// 5. ZODIAC SIGNS GUIDE ARTICLE
// ============================================================
export function ZodiacSignsGuideArticle({ navigate }: { navigate: (v: View) => void }) {
  return (
    <article className="fade-in max-w-3xl mx-auto px-4 py-8">
      <ArticleHeader badge="Reference Guide" title="Zodiac Sign Dates and Meanings" readTime="15 min read" />
      <DisclaimerNote />
      <ArticleBody>
        <p>The zodiac is a circle of twelve 30-degree divisions along the ecliptic — the apparent path the Sun travels across the sky over the course of a year. Each division is associated with a zodiac sign, and each sign carries specific qualities, an element, a modality, and a ruling planet. Together, these characteristics create a rich symbolic language that has been used for thousands of years as a tool for self-reflection, personality exploration, and understanding the rhythms of nature.</p>
        <p>Whether you are completely new to astrology or looking to deepen your understanding, this guide covers everything you need to know about the twelve zodiac signs — their dates, elements, modalities, key traits, and what they represent.</p>

        <h2>The Four Elements</h2>
        <p>Each zodiac sign belongs to one of four elements: Fire, Earth, Air, or Water. The element describes the fundamental quality of the sign&rsquo;s energy and is one of the most important factors in understanding how different signs relate to each other.</p>
        <DataTable
          headers={['Element', 'Signs', 'Keywords', 'Approach to Life']}
          rows={[
            [<strong>Fire</strong>, 'Aries, Leo, Sagittarius', 'Passion, energy, inspiration, action', 'Intuitive, enthusiastic, driven by vision and excitement'],
            [<strong>Earth</strong>, 'Taurus, Virgo, Capricorn', 'Practicality, stability, patience, material', 'Sensory, methodical, focused on tangible results and security'],
            [<strong>Air</strong>, 'Gemini, Libra, Aquarius', 'Intellect, communication, ideas, social', 'Mental, communicative, driven by thought and connection'],
            [<strong>Water</strong>, 'Cancer, Scorpio, Pisces', 'Emotion, intuition, depth, empathy', 'Emotional, perceptive, driven by feelings and inner experience'],
          ]}
        />

        <h2>The Three Modalities</h2>
        <p>Each sign also belongs to one of three modalities (also called qualities): Cardinal, Fixed, or Mutable. The modality describes how the sign initiates action, maintains momentum, or adapts to change.</p>
        <DataTable
          headers={['Modality', 'Signs', 'Keywords', 'Role']}
          rows={[
            [<strong>Cardinal</strong>, 'Aries, Cancer, Libra, Capricorn', 'Initiative, leadership, new beginnings', 'The initiators who start things and take charge'],
            [<strong>Fixed</strong>, 'Taurus, Leo, Scorpio, Aquarius', 'Stability, persistence, determination', 'The sustainers who build, maintain, and deepen'],
            [<strong>Mutable</strong>, 'Gemini, Virgo, Sagittarius, Pisces', 'Adaptability, flexibility, learning', 'The adapters who adjust, communicate, and transform'],
          ]}
        />

        <h2>All 12 Zodiac Signs</h2>
        <DataTable
          headers={['Sign', 'Dates', 'Element', 'Modality', 'Ruler', 'Key Traits']}
          rows={zodiacSigns.map(s => [
            <span><strong>{s.symbol} {s.name}</strong></span>,
            s.dateRange,
            s.element,
            s.modality,
            s.ruling_planet,
            s.traits.slice(0, 3).join(', '),
          ])}
        />

        <h2>Detailed Sign Descriptions</h2>
        {zodiacSigns.map(s => (
          <React.Fragment key={s.name}>
            <h3>{s.symbol} {s.name} ({s.dateRange})</h3>
            <p>{s.description}</p>
            <p><strong>Strengths:</strong> {s.strengths.slice(0, 3).join('. ')}. <strong>Growth areas:</strong> {s.weaknesses.slice(0, 2).join('. ')}. <strong>Compatible signs:</strong> {s.compatibility.join(', ')}.</p>
          </React.Fragment>
        ))}

        <h2>Zodiac Compatibility Overview</h2>
        <p>Compatibility in astrology is often simplified to element harmony. Signs of the same element tend to understand each other naturally, while signs of complementary elements (Fire with Air, Earth with Water) can create dynamic, growth-oriented relationships. Here is a quick compatibility reference:</p>
        <DataTable
          headers={['Sign', 'Most Compatible', 'Generally Compatible', 'May Require Work']}
          rows={zodiacSigns.map(s => [
            <strong>{s.name}</strong>,
            s.compatibility.slice(0, 2).join(', '),
            s.compatibility.slice(2).join(', ') || 'Various signs',
            'Signs of conflicting elements may require more understanding and communication',
          ])}
        />

        <h2>Finding Your Zodiac Sign</h2>
        <p>Your zodiac (Sun) sign is determined by your date of birth. Simply find your birthday in the date ranges above, or use our Zodiac Calculator tool to find your sign along with a detailed personality profile. Remember that your Sun sign is just one layer of your astrological profile — your Moon sign, Rising sign, and other planetary placements all contribute to a more complete picture.</p>

        <ToolCTA view="/tools/zodiac-calculator" label="Zodiac Calculator" icon={<Calculator className="mr-2 h-4 w-4" />} navigate={navigate} />
      </ArticleBody>
      <FAQSection faqs={[
        { q: 'What is the difference between my zodiac sign and my Sun sign?', a: 'They are the same thing. Your zodiac sign is your Sun sign — the sign the Sun was in at the time of your birth. When people ask "What is your sign?" they are referring to your Sun sign.' },
        { q: 'Are zodiac dates exact or approximate?', a: 'The date ranges provided are approximate and can vary by a day depending on the year and your exact time and location of birth. If you were born on or near a cusp (the transition between two signs), you may want to check an ephemeris or use a chart calculator for the most accurate determination.' },
        { q: 'What does it mean to be born on a cusp?', a: 'Being born on a cusp means your birthday falls near the transition between two signs. In technical astrology, you can only have one Sun sign — the Sun can only be in one sign at a time. However, people born near cusps may feel they relate to qualities of both signs.' },
        { q: 'Which element is my sign?', a: 'Fire signs are Aries, Leo, and Sagittarius. Earth signs are Taurus, Virgo, and Capricorn. Air signs are Gemini, Libra, and Aquarius. Water signs are Cancer, Scorpio, and Pisces.' },
        { q: 'Is zodiac compatibility real?', a: 'Astrological compatibility is a symbolic framework for entertainment and self-reflection. It is not scientifically validated. Real relationship compatibility depends on communication, shared values, mutual respect, emotional maturity, and many other factors beyond astrological signs.' },
      ]} />
      <RelatedTools navigate={navigate} />
    </article>
  );
}

// ============================================================
// 6. ASTROLOGY BEGINNERS ARTICLE
// ============================================================
export function AstroBeginnersArticle({ navigate }: { navigate: (v: View) => void }) {
  return (
    <article className="fade-in max-w-3xl mx-auto px-4 py-8">
      <ArticleHeader badge="Beginner" title="The Beginner Guide to Astrology" readTime="12 min read" />
      <DisclaimerNote />
      <ArticleBody>
        <p>Astrology is one of the oldest symbolic systems in human history, with roots stretching back thousands of years across cultures including Babylonian, Hellenistic, Indian, Chinese, and Mesoamerican traditions. At its core, astrology is the study of the positions and movements of celestial bodies and the symbolic meanings attributed to those positions. It is used as a tool for self-reflection, personality exploration, timing, and understanding cycles and patterns in life.</p>
        <p>This guide is designed for complete beginners who want to understand the foundational concepts of astrology, learn how to start exploring their own birth chart, and use astrology tools responsibly and thoughtfully.</p>

        <h2>The Four Pillars of Astrology</h2>
        <p>Western astrology is built on four interconnected systems. Understanding all four is essential for reading a birth chart with any depth:</p>

        <h3>1. Zodiac Signs (The Qualities of Energy)</h3>
        <p>The zodiac is a circle of twelve signs, each spanning 30 degrees along the ecliptic (the Sun&rsquo;s apparent path through the sky). Each sign is associated with an element (Fire, Earth, Air, Water), a modality (Cardinal, Fixed, Mutable), a ruling planet, and a set of archetypal qualities. Signs describe the style or flavor through which planetary energies are expressed.</p>
        <p>For example, Fire signs (Aries, Leo, Sagittarius) express energy through passion, initiative, and inspiration. Earth signs (Taurus, Virgo, Capricorn) express energy through practicality, patience, and tangible results. Air signs (Gemini, Libra, Aquarius) express energy through intellect, communication, and social connection. Water signs (Cancer, Scorpio, Pisces) express energy through emotion, intuition, and depth.</p>

        <h3>2. Planets (The Functions of Personality)</h3>
        <p>In astrology, planets represent different functions or drives within the human psyche. The Sun represents identity and vitality, the Moon represents emotions and instincts, Mercury represents communication and thinking, Venus represents love and values, Mars represents action and drive, Jupiter represents growth and expansion, and Saturn represents discipline and structure. Each planet&rsquo;s sign placement describes how that function is expressed.</p>

        <h3>3. Houses (The Areas of Life)</h3>
        <p>The twelve houses represent different areas of life experience. The First House governs self and appearance, the Second House governs money and values, the Third House governs communication, the Fourth House governs home and family, the Fifth House governs creativity and romance, the Sixth House governs health and daily work, the Seventh House governs partnerships, the Eighth House governs transformation, the Ninth House governs travel and philosophy, the Tenth House governs career, the Eleventh House governs friendships and aspirations, and the Twelfth House governs the subconscious and spirituality.</p>

        <h3>4. Aspects (The Relationships Between Planets)</h3>
        <p>Aspects describe the angular relationships between planets in your birth chart. The five major aspects are the conjunction (0°), sextile (60°), square (90°), trine (120°), and opposition (180°). Aspects reveal how different planetary energies interact — whether they cooperate harmoniously, create productive tension, or challenge each other. Understanding aspects is what transforms a list of placements into a dynamic, interconnected personality portrait.</p>

        <h2>How to Get Started with Astrology</h2>
        <ol className="list-decimal pl-6 space-y-3">
          <li><strong>Find your Sun sign.</strong> This is the easiest starting point. Your Sun sign is determined by your birth date and represents your core identity. Use our Zodiac Calculator to find yours.</li>
          <li><strong>Explore your Big Three.</strong> Your Sun, Moon, and Rising signs form the foundation of your astrological profile. Each represents a different layer of your personality. You will need your birth date, time, and location to find all three. Use our Big Three Meaning Tool to explore their combined meaning.</li>
          <li><strong>Learn about individual planet placements.</strong> Once you know your Big Three, explore where other planets fall in your chart. Our Planet Sign Meaning Tool provides detailed interpretations for each placement.</li>
          <li><strong>Understand aspects and houses.</strong> As you become more comfortable, learn about how planets relate to each other through aspects and how they manifest in different life areas through the houses.</li>
          <li><strong>Use astrology as a reflection tool, not a prediction system.</strong> The most constructive way to use astrology is as a framework for self-inquiry, not as a way to predict or control outcomes.</li>
        </ol>

        <h2>How to Use Astrology Responsibly</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Treat it as reflection, not prediction.</strong> Astrology works best as a tool for self-exploration and journaling, not as a way to foretell the future or make life decisions.</li>
          <li><strong>Do not use it to avoid responsibility.</strong> Your chart describes tendencies and themes, not fixed outcomes. You always have agency over your choices and actions.</li>
          <li><strong>Never use it as professional advice.</strong> Astrology is not a substitute for medical, legal, financial, or psychological advice. Always consult qualified professionals for important decisions.</li>
          <li><strong>Respect individual complexity.</strong> No one is fully defined by their astrological placements. Culture, upbringing, life experience, and personal choice all play far greater roles in shaping who someone is.</li>
          <li><strong>Keep an open but critical mind.</strong> It is fine to enjoy astrology and find it meaningful without believing it is scientifically literal. Many people use it as a creative, reflective practice.</li>
        </ul>

        <h2>Understanding Your Birth Chart</h2>
        <p>A birth chart (also called a natal chart) is a map of where all the planets were positioned at the exact moment and location of your birth. It is a complex symbolic portrait that reveals the positions of all ten major planets, their sign placements, their house placements, and the aspects between them. Reading a birth chart takes practice, but starting with the Big Three and gradually exploring additional placements is the best approach for beginners.</p>

        <h2>Recommended Starting Steps</h2>
        <DataTable
          headers={['Step', 'What to Do', 'Tools to Use']}
          rows={[
            ['1', 'Find your zodiac sign and read its profile', 'Zodiac Calculator'],
            ['2', 'Explore your Big Three (Sun, Moon, Rising)', 'Big Three Meaning Tool'],
            ['3', 'Look up individual planet sign meanings', 'Planet Sign Meaning Tool'],
            ['4', 'Explore your love and relationship style', 'Venus Sign Love Style Tool'],
            ['5', 'Understand your communication patterns', 'Mercury Sign Communication Tool'],
            ['6', 'Check compatibility with friends or partners', 'Compatibility Checker'],
            ['7', 'Explore your numerology life path number', 'Life Path Number Calculator'],
            ['8', 'Use a birth chart reading checklist for deeper study', 'Birth Chart Reading Checklist'],
          ]}
        />

        <div className="mt-8 flex flex-wrap gap-3">
          <Button onClick={() => navigate('/tools/zodiac-calculator')}><Calculator className="mr-2 h-4 w-4" />Zodiac Calculator</Button>
          <Button variant="outline" onClick={() => navigate('/tools/big-three-meaning')}><Star className="mr-2 h-4 w-4" />Big Three Tool</Button>
          <Button variant="outline" onClick={() => navigate('/tools')}>View All Tools →</Button>
        </div>
      </ArticleBody>
      <FAQSection faqs={[
        { q: 'Is astrology a science?', a: 'Astrology is not recognized as a science by the mainstream scientific community. It is a symbolic system that many people find meaningful as a tool for self-reflection, entertainment, and exploring personality patterns. It should not be treated as scientifically validated or used as a substitute for professional advice.' },
        { q: 'Do I need to believe in astrology to find it useful?', a: 'No. Many people enjoy astrology as a reflective or creative practice without believing it has literal predictive power. It can be a useful framework for asking interesting questions about yourself and your life, regardless of your beliefs about its metaphysical validity.' },
        { q: 'What is the difference between Western and Vedic astrology?', a: 'Western astrology uses the tropical zodiac (based on the seasons) and is the system most commonly practiced in Europe and the Americas. Vedic (Jyotish) astrology uses the sidereal zodiac (based on the fixed stars) and is practiced primarily in India. The two systems can differ by about 24 degrees in planetary positions, which means your Sun sign might be different in each system.' },
        { q: 'How long does it take to learn astrology?', a: 'You can learn the basics (signs, planets, houses, aspects) in a few weeks of study. Developing fluency in reading charts takes months to years of practice. Like any complex symbolic system, the more you work with it, the deeper your understanding becomes.' },
      ]} />
      <RelatedTools navigate={navigate} />
    </article>
  );
}

// ============================================================
// 7. LIFE PATH NUMBER ARTICLE
// ============================================================
export function LifePathArticle({ navigate }: { navigate: (v: View) => void }) {
  const lpDescriptions: Record<string, { archetype: string; meaning: string; strengths: string; challenge: string }> = {
    '1': { archetype: 'The Leader', meaning: 'Life Path 1 represents independence, originality, and the drive to lead. People with this life path are natural pioneers who forge their own path and inspire others through their courage and determination. They possess strong creative vision and the willpower to turn their ideas into reality.', strengths: 'Leadership, creativity, self-motivation, determination, originality', challenge: 'Learning to balance independence with collaboration and patience' },
    '2': { archetype: 'The Diplomat', meaning: 'Life Path 2 represents sensitivity, cooperation, and the desire for harmony. People with this life path are natural peacemakers who excel in partnerships and group settings. They have heightened intuition and empathy, making them excellent mediators and supportive friends.', strengths: 'Diplomacy, empathy, patience, cooperation, intuition', challenge: 'Avoiding indecision and learning to assert their own needs' },
    '3': { archetype: 'The Communicator', meaning: 'Life Path 3 represents creativity, self-expression, and joy. People with this life path are blessed with natural creative talents and the ability to communicate ideas in engaging ways. They bring inspiration and lightness to others through art, humor, and social interaction.', strengths: 'Creativity, communication, optimism, social skills, artistic talent', challenge: 'Maintaining focus and not scattering their creative energy' },
    '4': { archetype: 'The Builder', meaning: 'Life Path 4 represents stability, hard work, and practical achievement. People with this life path are the foundation-builders who excel at creating lasting structures in business, relationships, and personal development. They are valued for their reliability, discipline, and attention to quality.', strengths: 'Reliability, discipline, organization, practicality, loyalty', challenge: 'Remaining flexible and not becoming too rigid in their thinking' },
    '5': { archetype: 'The Adventurer', meaning: 'Life Path 5 represents freedom, change, and the desire for diverse experiences. People with this life path crave variety, travel, and new adventures. They are adaptable and resourceful, thriving in dynamic environments and inspiring others with their enthusiasm for life.', strengths: 'Versatility, adaptability, curiosity, resourcefulness, charisma', challenge: 'Committing to one path long enough to build lasting achievements' },
    '6': { archetype: 'The Nurturer', meaning: 'Life Path 6 represents responsibility, love, and service to others. People with this life path find deep fulfillment in caring for family, community, and the people around them. They have strong aesthetic sensibilities and create beauty and harmony wherever they go.', strengths: 'Responsibility, compassion, creativity, reliability, warmth', challenge: 'Setting healthy boundaries and avoiding self-sacrifice' },
    '7': { archetype: 'The Seeker', meaning: 'Life Path 7 represents analysis, spirituality, and the pursuit of truth. People with this life path are drawn to knowledge, wisdom, and deeper understanding of the world. They are natural researchers, philosophers, and spiritual seekers who question everything and value depth over surface appearances.', strengths: 'Analytical ability, spiritual awareness, intuition, wisdom, perceptiveness', challenge: 'Connecting with others emotionally and not becoming too isolated' },
    '8': { archetype: 'The Powerhouse', meaning: 'Life Path 8 represents ambition, authority, and material mastery. People with this life path have a natural talent for business, leadership, and creating abundance. They understand the material world and have the drive and organizational skills to build wealth and influence.', strengths: 'Business acumen, leadership, ambition, organization, resilience', challenge: 'Finding balance between material success and inner fulfillment' },
    '9': { archetype: 'The Humanitarian', meaning: 'Life Path 9 represents compassion, wisdom, and global awareness. People with this life path are old souls who carry deep life experience and natural wisdom. They are drawn to service on a broad scale and feel a genuine responsibility to contribute to the welfare of humanity.', strengths: 'Compassion, generosity, wisdom, creativity, broad vision', challenge: 'Letting go of the past and embracing new beginnings' },
  };

  return (
    <article className="fade-in max-w-3xl mx-auto px-4 py-8">
      <ArticleHeader badge="Numerology" title="Life Path Number Meanings" readTime="10 min read" />
      <DisclaimerNote />
      <ArticleBody>
        <p>In numerology, your Life Path number is one of the most significant numbers in your chart. Calculated from your date of birth, it reveals your overarching life purpose, the themes you are here to explore, and the natural talents and challenges that will shape your journey. Unlike your zodiac sign, which changes monthly, your Life Path number is uniquely yours and remains constant throughout your entire life.</p>

        <h2>What Is a Life Path Number?</h2>
        <p>The Life Path number is derived by reducing your full date of birth to a single digit (or a master number). It represents the central theme of your life — the lessons you are here to learn, the challenges you will face, and the natural abilities you possess. Think of it as the numerological equivalent of your Sun sign: a broad-stroke description of your life&rsquo;s direction and purpose.</p>

        <h2>How to Calculate Your Life Path Number</h2>
        <p>To calculate your Life Path number, add together the digits of your birth date until you reach a single digit (or 11, 22, or 33 — the master numbers). Here is the step-by-step process:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Write down your full date of birth (for example: March 15, 1992 → 03/15/1992).</li>
          <li>Add each component separately: Month (0 + 3 = 3), Day (1 + 5 = 6), Year (1 + 9 + 9 + 2 = 21).</li>
          <li>Add the resulting numbers together: 3 + 6 + 21 = 30.</li>
          <li>Reduce to a single digit: 3 + 0 = 3. Your Life Path number is 3.</li>
        </ol>
        <p>If you want to find your number quickly, use our Life Path Number Calculator.</p>

        <h2>All Life Path Numbers</h2>
        <DataTable
          headers={['Number', 'Archetype', 'Core Meaning', 'Key Strengths']}
          rows={Object.entries(lpDescriptions).map(([num, data]) => [
            <strong className="text-lg text-primary">{num}</strong>,
            data.archetype,
            data.meaning.split('.').slice(0, 2).join('.') + '.',
            data.strengths,
          ])}
        />

        <h2>Detailed Number Descriptions</h2>
        {Object.entries(lpDescriptions).map(([num, data]) => (
          <React.Fragment key={num}>
            <h3>Life Path {num}: {data.archetype}</h3>
            <p>{data.meaning}</p>
            <p><strong>Strengths:</strong> {data.strengths}. <strong>Challenge:</strong> {data.challenge}.</p>
          </React.Fragment>
        ))}

        <h2>Master Numbers: 11, 22, and 33</h2>
        <p>In numerology, the numbers 11, 22, and 33 are called Master Numbers. They are not reduced to single digits because they carry intensified vibrations and represent higher spiritual potential:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Master Number 11 (The Intuitive):</strong> Represents heightened intuition, spiritual insight, and inspirational leadership. People with this life path are natural visionaries who can inspire others through their sensitivity and depth of understanding. They carry the energy of both 1 (leadership) and 2 (intuition), amplified.</li>
          <li><strong>Master Number 22 (The Master Builder):</strong> Represents the ability to turn lofty dreams into practical reality. People with this life path combine the vision of 11 with the practical mastery of 4, giving them extraordinary potential to build lasting institutions, create innovative systems, and make a significant impact on the world.</li>
          <li><strong>Master Number 33 (The Master Teacher):</strong> Represents selfless service, compassion, and the ability to uplift humanity. This is the rarest and most spiritually significant life path number. People with this vibration are natural healers and teachers who carry a deep sense of responsibility for the welfare of others.</li>
        </ul>

        <ToolCTA view="/tools/life-path" label="Life Path Number Calculator" icon={<Hash className="mr-2 h-4 w-4" />} navigate={navigate} />
      </ArticleBody>
      <FAQSection faqs={[
        { q: 'Can my Life Path number change?', a: 'No. Your Life Path number is calculated from your date of birth and remains the same for your entire life. It is a constant theme that runs through your life experiences, though the way it expresses may evolve as you grow and develop.' },
        { q: 'What if my calculation gives me 11, 22, or 33?', a: 'These are Master Numbers and should not be reduced further. They carry intensified energies and are considered especially significant in numerology. For example, if your calculation results in 11, you keep it as 11 rather than reducing it to 2.' },
        { q: 'Is numerology related to astrology?', a: 'Numerology and astrology are separate symbolic systems, though they share some philosophical roots. Numerology works with numbers and their vibrational meanings, while astrology works with planetary positions and zodiac signs. Many people find both systems useful for self-reflection.' },
        { q: 'Is Life Path number the same as Destiny number?', a: 'No. The Life Path number is calculated from your date of birth and represents your life purpose and direction. The Destiny number (also called Expression number) is calculated from the letters of your full birth name and represents your natural abilities and how you express yourself to the world.' },
      ]} />
      <RelatedTools navigate={navigate} />
    </article>
  );
}

// ============================================================
// 8. CHINESE ZODIAC GUIDE ARTICLE
// ============================================================
export function ChineseZodiacGuideArticle({ navigate }: { navigate: (v: View) => void }) {
  return (
    <article className="fade-in max-w-3xl mx-auto px-4 py-8">
      <ArticleHeader badge="Reference" title="Chinese Zodiac for Global Readers" readTime="11 min read" />
      <DisclaimerNote />
      <ArticleBody>
        <p>The Chinese zodiac is one of the oldest and most widely recognized astrological systems in the world. Based on a twelve-year cycle (rather than the twelve-month cycle of Western astrology), each year is associated with an animal sign that carries specific personality traits, strengths, challenges, and compatibility patterns. The Chinese zodiac has been used for thousands of years across East Asia and has gained enormous popularity worldwide as a framework for self-understanding, relationship insight, and cultural celebration.</p>
        <p>This guide provides a comprehensive overview of the Chinese zodiac system, including the history and symbolism of all twelve animals, the five-element system that adds further nuance, and practical information about how to find your Chinese zodiac sign.</p>

        <h2>History and Origins</h2>
        <p>The Chinese zodiac, known as Shengxiao (meaning &ldquo;born resembling&rdquo;), has its origins in ancient Chinese astronomy and calendrical science. According to legend, the Jade Emperor organized a race across a river to determine the order of the zodiac animals. The clever Rat hitched a ride on the Ox and jumped ahead at the last moment to claim first place, followed by the Ox, Tiger, Rabbit, Dragon, Snake, Horse, Sheep (Goat), Monkey, Rooster, Dog, and Pig.</p>
        <p>Historically, the Chinese zodiac was used not only for personality analysis but also for agricultural planning, social compatibility matching, and identifying auspicious dates for important events. Today, it is an integral part of Lunar New Year celebrations and remains deeply embedded in Chinese and East Asian culture.</p>

        <h2>The Twelve Animals</h2>
        <p>Each of the twelve animal signs carries a distinct personality archetype, a set of strengths and challenges, and compatibility patterns with other signs. Your Chinese zodiac animal is determined by your birth year according to the Chinese lunar calendar (which typically begins in late January or early February).</p>
        <DataTable
          headers={['Animal', 'Symbol', 'Recent Years', 'Key Traits', 'Compatible With']}
          rows={chineseZodiacAnimals.map(a => [
            <strong>{a.animal}</strong>,
            <span className="text-2xl">{a.symbol}</span>,
            a.years.slice(0, 3).join(', '),
            a.traits.slice(0, 3).join(', '),
            a.compatibility.join(', '),
          ])}
        />

        <h2>Detailed Animal Descriptions</h2>
        {chineseZodiacAnimals.map(a => (
          <React.Fragment key={a.animal}>
            <h3>{a.symbol} Year of the {a.animal}</h3>
            <p>{a.description}</p>
            <p><strong>Key traits:</strong> {a.traits.join(', ')}. <strong>Compatible animals:</strong> {a.compatibility.join(', ')}.</p>
          </React.Fragment>
        ))}

        <h2>The Five Elements System</h2>
        <p>In addition to the twelve animal signs, Chinese astrology also uses a five-element system (Wu Xing) that adds another layer of meaning. Each year is associated with one of five elements: Wood, Fire, Earth, Metal, and Water. The element modifies the animal&rsquo;s characteristics, creating a sixty-year cycle (12 animals × 5 elements).</p>
        <DataTable
          headers={['Element', 'Qualities', 'Direction', 'Season', 'Personality Style']}
          rows={[
            [<strong>Wood</strong>, 'Growth, flexibility, creativity', 'East', 'Spring', 'Expansive, idealistic, cooperative, generous'],
            [<strong>Fire</strong>, 'Passion, energy, dynamism', 'South', 'Summer', 'Enthusiastic, charismatic, impulsive, expressive'],
            [<strong>Earth</strong>, 'Stability, nourishment, patience', 'Center', 'Transitional', 'Grounded, practical, reliable, nurturing'],
            [<strong>Metal</strong>, 'Strength, precision, determination', 'West', 'Autumn', 'Ambitious, disciplined, organized, focused'],
            [<strong>Water</strong>, 'Wisdom, flexibility, depth', 'North', 'Winter', 'Intuitive, adaptable, diplomatic, perceptive'],
          ]}
        />
        <p>For example, a Wood Dragon is more creative and idealistic than a Metal Dragon, who is more disciplined and determined. Understanding your element adds depth to your Chinese zodiac profile.</p>

        <h2>Chinese Zodiac Compatibility</h2>
        <p>Chinese zodiac compatibility is based on several factors, including the natural compatibility between animal signs and the interactions between elements. Signs that are four years apart (such as Rat and Dragon, Ox and Rooster) are considered highly compatible, while signs that are six years apart (directly opposite on the zodiac wheel) may experience more tension. The element system also plays a role: compatible elements (Wood with Fire, Earth with Metal, etc.) tend to create smoother relationships.</p>
        <p>However, as with Western astrology, compatibility frameworks are best used as starting points for reflection rather than rigid rules. Real relationship success depends on communication, mutual respect, shared values, and the willingness to grow together.</p>

        <h2>How to Find Your Chinese Zodiac Sign</h2>
        <p>Your Chinese zodiac animal is determined by your birth year according to the Chinese lunar calendar. The Chinese New Year typically falls between January 21 and February 20, so if you were born in January or early February, you may need to check the exact date of the Chinese New Year for your birth year to determine your correct animal. Use our Chinese Zodiac Calculator to find your animal sign along with traits and compatibility information.</p>

        <ToolCTA view="/tools/chinese-zodiac" label="Chinese Zodiac Calculator" icon={<Users className="mr-2 h-4 w-4" />} navigate={navigate} />
      </ArticleBody>
      <FAQSection faqs={[
        { q: 'Why does the Chinese New Year date change every year?', a: 'The Chinese calendar is based on lunar cycles, so the New Year falls on different dates each year, always between January 21 and February 20. If you were born in January or early February, check the exact Chinese New Year date for your birth year to confirm your animal sign.' },
        { q: 'What is the difference between the Chinese and Western zodiacs?', a: 'The Western zodiac is based on a twelve-month cycle tied to the Sun\'s position, while the Chinese zodiac is based on a twelve-year cycle tied to the lunar calendar. The Western system uses planets, houses, and aspects, while the Chinese system uses animal signs, elements, and yin-yang polarities. Both are symbolic systems for personality reflection.' },
        { q: 'Can I be born in a Year of the Dragon but not act like one?', a: 'Absolutely. Chinese zodiac signs describe broad archetypal tendencies, not fixed personality traits. Your actual personality is shaped by many factors including culture, upbringing, life experiences, education, and personal choices. Use the Chinese zodiac as a fun framework for reflection, not a definitive personality test.' },
        { q: 'What happens when my zodiac year comes around?', a: 'In Chinese culture, when your zodiac year comes around (every 12 years), it is called your Ben Ming Nian. Tradition holds that this can be a challenging year, and people often wear red clothing or accessories for protection and good luck. However, it can also be a year of significant growth and new beginnings.' },
      ]} />
      <RelatedTools navigate={navigate} />
    </article>
  );
}
