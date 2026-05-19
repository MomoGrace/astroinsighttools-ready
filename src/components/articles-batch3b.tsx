/* eslint-disable react/jsx-key */
'use client';

import React from 'react';
import { zodiacSigns, moonPhases, planets } from '@/lib/astro-data';
import { DisclaimerNote, RelatedTools } from '@/components/tools';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Clock, Star, Calculator, Compass, Sparkles, Moon, Heart, Flame, Mountain, Sun, Users, Globe, ArrowRight, Hash, Wind, BookOpen } from 'lucide-react';

type View = string;

// ============================================================
// SHARED ARTICLE COMPONENTS
// ============================================================
function ArticleHeader({ badge, title, readTime }: { badge: string; title: string; readTime: string }) {
  return (
    <div className="mb-6">
      <Badge variant="secondary">{badge}</Badge>
      <h1 className="text-3xl font-bold mt-2 mb-3">{title}</h1>
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <span>By Astro Insight Tools Team</span>
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
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger>{faq.q}</AccordionTrigger>
            <AccordionContent>{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
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
// ARTICLE 1: MOON PHASES AND THEIR MEANINGS GUIDE
// ============================================================
export function MoonPhasesArticle({ navigate }: { navigate: (v: View) => void }) {
  return (
    <article className="fade-in max-w-3xl mx-auto px-4 py-8">
      <ArticleHeader badge="Reference" title="Moon Phases and Their Meanings: A Complete Guide to the Lunar Cycle" readTime="11 min read" />
      <DisclaimerNote />
      <ArticleBody>
        <p>The Moon has fascinated humanity for millennia. Ancient civilizations tracked its phases to guide agriculture, spiritual rituals, and daily life. Today, the lunar cycle continues to captivate people around the world, offering a framework for understanding natural rhythms, setting intentions, and reflecting on personal growth. Whether you are a seasoned astrology enthusiast or simply curious about the Moon&rsquo;s influence, understanding the eight distinct phases of the lunar cycle can bring deeper meaning to your relationship with time, nature, and your own emotional landscape.</p>

        <h2>What Are Moon Phases?</h2>
        <p>Moon phases are the different appearances the Moon takes on as it orbits the Earth over the course of approximately 29.5 days — a period known as the synodic month or lunar cycle. The Moon does not produce its own light; instead, it reflects sunlight. As the Moon orbits our planet, the angle between the Sun, Earth, and Moon changes, causing different portions of the Moon&rsquo;s surface to be illuminated from our perspective. This creates the characteristic sequence of phases that has been observed and celebrated by cultures throughout human history.</p>
        <p>The lunar cycle is divided into eight distinct phases, each lasting roughly 3.7 days. These phases follow a predictable pattern: the Moon waxes (grows in light) from New Moon to Full Moon, and then wanes (decreases in light) from Full Moon back to New Moon. Each phase carries its own unique energy, symbolism, and set of associations that astrologers, spiritual practitioners, and nature-based traditions have long used as a guide for intention-setting, decision-making, and self-reflection.</p>
        <p>Understanding moon phases goes beyond astronomy. In astrology, the Moon governs emotions, instincts, habits, and the subconscious mind. The phase of the Moon at any given time is believed to influence collective moods, energy levels, and the general emotional tone of the period. Many people find that tracking lunar phases helps them attune to natural rhythms and make more mindful choices about when to start projects, release old patterns, or focus on self-care.</p>

        <h2>All 8 Lunar Phases Explained</h2>
        <DataTable
          headers={['Phase', 'Symbol', 'Light', 'Core Energy', 'Best For']}
          rows={[
            [<strong>New Moon</strong>, '🌑', '0%', 'Intention, new beginnings, planting seeds', 'Setting goals, starting fresh, meditation'],
            [<strong>Waxing Crescent</strong>, '🌒', '0–50%', 'Hope, determination, nurturing growth', 'Taking first steps, building momentum, affirming intentions'],
            [<strong>First Quarter</strong>, '🌓', '50%', 'Action, decision, overcoming obstacles', 'Making decisions, pushing through challenges, committing'],
            [<strong>Waxing Gibbous</strong>, '🌔', '50–99%', 'Refinement, patience, adjustment', 'Editing plans, fine-tuning, trusting the process'],
            [<strong>Full Moon</strong>, '🌕', '100%', 'Illumination, completion, celebration', 'Harvesting results, releasing what no longer serves, gratitude'],
            [<strong>Waning Gibbous</strong>, '🌖', '99–50%', 'Gratitude, sharing, introspection', 'Giving back, teaching others, reflecting on lessons'],
            [<strong>Last Quarter</strong>, '🌗', '50%', 'Release, forgiveness, letting go', 'Breaking bad habits, forgiving, decluttering'],
            [<strong>Waning Crescent</strong>, '🌘', '50–0%', 'Rest, surrender, deep healing', 'Resting, meditating, preparing for the next cycle'],
          ]}
        />

        <h3>New Moon: The Seed of Potential</h3>
        <p>The New Moon occurs when the Moon is positioned between the Earth and the Sun, rendering its illuminated side invisible from our perspective. This is the darkest point in the lunar cycle and represents a powerful moment of stillness and potential. In many spiritual traditions, the New Moon is the ideal time to set intentions for the coming cycle. Think of it as planting a seed in dark, fertile soil — the intention is present but not yet visible. Energy during this phase tends to be introspective, quiet, and contemplative. Many people use the New Moon for journaling, meditation, and quiet planning rather than bold outward action.</p>

        <h3>Waxing Crescent: Nurturing New Growth</h3>
        <p>As a thin sliver of light appears on the Moon&rsquo;s right side, the Waxing Crescent phase begins. This phase carries the energy of hope and determination. The intentions you set during the New Moon begin to take root, and you may feel the first stirrings of motivation and clarity. This is a time for nurturing your goals, taking small but meaningful steps, and staying committed to the vision you planted. Doubt may arise during this phase, but the key is to push through uncertainty with faith and perseverance. Symbolically, the Waxing Crescent represents the young sprout pushing through the soil toward sunlight.</p>

        <h3>First Quarter: The Challenge of Action</h3>
        <p>The First Quarter Moon — sometimes called the Half Moon — occurs when exactly half of the Moon&rsquo;s face is illuminated. This is a pivotal moment in the lunar cycle, characterized by action, decision-making, and the need to overcome obstacles. The energy shifts from planning to doing, and you may encounter challenges that test your commitment to your intentions. The First Quarter is often associated with a crisis of action: do you have the courage and determination to push through resistance, or will you let your goals fade? This phase rewards decisive action, persistence, and a willingness to face difficulty head-on.</p>

        <h3>Waxing Gibbous: The Art of Refinement</h3>
        <p>During the Waxing Gibbous phase, the Moon is almost fully illuminated, with only a small dark sliver remaining. This phase carries an energy of refinement, patience, and adjustment. It is a time to review your progress, fine-tune your plans, and make necessary corrections before the culmination of the Full Moon. The Waxing Gibbous asks you to be patient and trust the process — your goals are close to fruition, but they may need a final round of attention and care. This is an excellent phase for editing creative work, perfecting a project, or adjusting your approach based on what you have learned so far.</p>

        <h3>Full Moon: Illumination and Completion</h3>
        <p>The Full Moon is perhaps the most celebrated and visible of all lunar phases. Occurring when the Earth is between the Sun and Moon, the entire face of the Moon is illuminated, creating a dramatic and powerful sight. The Full Moon represents culmination, revelation, and heightened energy. Intentions set during the New Moon often come to fruition or reach a significant milestone during this phase. The Full Moon is also associated with illumination — truths that were hidden may be revealed, emotions may surface with greater intensity, and situations may reach a turning point. Many traditions honor the Full Moon as a time for celebration, gratitude, and release. It is an ideal moment to acknowledge what you have achieved, express gratitude, and consciously release what no longer serves your growth.</p>

        <h3>Waning Gibbous: Sharing and Reflection</h3>
        <p>After the peak brightness of the Full Moon, the Waning Gibbous phase begins as the Moon&rsquo;s light slowly decreases. This phase carries the energy of gratitude, sharing wisdom, and introspective reflection. Having experienced the culmination of the Full Moon, this is a time to give back, share what you have learned, and process the insights gained during the peak of the cycle. The Waning Gibbous invites you to be generous with your knowledge and experience, and to reflect on the meaning of what has unfolded. It is also a period for deepening understanding and integrating lessons into your daily life.</p>

        <h3>Last Quarter: The Power of Release</h3>
        <p>The Last Quarter Moon — also called the Third Quarter — occurs when half of the Moon is illuminated on the left side, mirroring the First Quarter but in the waning half of the cycle. This phase is all about release, forgiveness, and letting go. Just as the First Quarter challenged you to take action, the Last Quarter challenges you to surrender — to release old habits, grudges, beliefs, and situations that are holding you back. The energy of this phase can be intense and emotionally charged, as letting go often requires courage. However, it is essential for creating space for the new intentions that will be planted at the next New Moon.</p>

        <h3>Waning Crescent: Surrender and Preparation</h3>
        <p>The Waning Crescent — sometimes called the Balsamic Moon — is the final phase before the cycle begins again with a New Moon. Only a thin crescent of light remains, and the energy is deeply introspective, restful, and surrendering. This is the most yin phase of the lunar cycle, a time for rest, deep meditation, spiritual practice, and quiet preparation. The Waning Crescent asks you to let go of the last remnants of the previous cycle and enter a state of openness and receptivity. Dreams may be more vivid during this phase, intuition may be heightened, and you may feel a natural pull toward solitude and stillness.</p>

        <h2>How to Find the Moon Phase on Your Birthday</h2>
        <p>Finding the moon phase on the day you were born is a fascinating way to connect with lunar energy on a personal level. The Moon takes approximately 29.5 days to complete one full cycle, which means the phase on your birthday changes from year to year. To find your birth moon phase, you need your exact birth date. You can use our Moon Phase Birthday Tool, which calculates the lunar phase for any given date and provides a detailed interpretation of what that phase means for your personality and life path. Simply enter your birthday, and the tool will reveal which of the eight phases was active when you were born.</p>

        <h2>What Your Birth Moon Phase Reveals About Personality</h2>
        <p>In astrological and spiritual traditions, the moon phase under which you were born is believed to shape fundamental aspects of your personality and life approach. Just as your Sun sign and Moon sign offer insights into different dimensions of who you are, your birth moon phase provides a lens for understanding your natural rhythm, your approach to new beginnings, and how you handle cycles of growth and release in your life.</p>
        <DataTable
          headers={['Birth Phase', 'Personality Themes', 'Life Approach', 'Growth Opportunity']}
          rows={[
            [<strong>New Moon</strong>, 'Instinctive, impulsive, drawn to fresh starts', 'Naturally initiates new projects and ventures', 'Learning patience and seeing things through to completion'],
            [<strong>Waxing Crescent</strong>, 'Determined, ambitious, deeply committed to growth', 'Nurtures ideas and builds steadily toward goals', 'Managing doubt and trusting the early stages of development'],
            [<strong>First Quarter</strong>, 'Action-oriented, decisive, thrives under pressure', 'Confronts challenges head-on and makes bold choices', 'Developing flexibility and considering others\' perspectives'],
            [<strong>Waxing Gibbous</strong>, 'Perfectionist, detail-oriented, deeply analytical', 'Refines and improves everything they touch', 'Accepting imperfection and knowing when good enough is enough'],
            [<strong>Full Moon</strong>, 'Illuminating, expressive, emotionally aware', 'Seeks completion, revelation, and meaningful connections', 'Finding balance between giving and receiving attention'],
            [<strong>Waning Gibbous</strong>, 'Philosophical, generous, wisdom-seeking', 'Shares knowledge and reflects on life\'s deeper meaning', 'Applying insights rather than just thinking about them'],
            [<strong>Last Quarter</strong>, 'Transformative, releasing, deeply courageous', 'Letting go of the old and embracing change', 'Balancing release with self-compassion and patience'],
            [<strong>Waning Crescent</strong>, 'Intuitive, spiritual, deeply sensitive', 'Rests, dreams, and trusts inner guidance', 'Grounding spiritual insights into practical daily life'],
          ]}
        />

        <h2>Lunar Cycles and Emotions</h2>
        <p>The Moon has a well-documented association with emotions in astrology, and many people report feeling the influence of lunar phases in their daily moods and energy levels. During the waxing half of the cycle (New Moon to Full Moon), energy tends to build, motivation increases, and people often feel more outgoing and proactive. During the waning half (Full Moon to New Moon), energy naturally decreases, and people may feel more reflective, tired, or inward-focused. The Full Moon is particularly associated with heightened emotions, vivid dreams, and a general sense of intensity. Many healthcare workers, first responders, and teachers anecdotally report that Full Moon nights feel busier or more eventful, and research into lunar effects on sleep patterns has produced mixed but intriguing results.</p>
        <p>Whether or not you believe the Moon directly influences human behavior, tracking lunar phases can be a powerful mindfulness practice. By aligning your activities with the natural rhythm of the lunar cycle — starting new projects at the New Moon, taking action at the First Quarter, celebrating and releasing at the Full Moon, and resting during the Waning Crescent — you create a structured yet flexible framework for personal growth that connects you to an ancient, natural rhythm observed by your ancestors for thousands of years.</p>

        <h2>Moon Phase Traditions Around the World</h2>
        <p>Lunar traditions span virtually every culture on Earth. In Chinese culture, the Mid-Autumn Festival celebrates the harvest moon with lanterns, mooncakes, and family gatherings. In Hindu tradition, festivals like Diwali and Holi are timed to specific lunar phases. Many indigenous cultures hold Full Moon ceremonies for healing, prayer, and community bonding. In Wiccan and modern pagan traditions, each Full Moon is celebrated as an Esbat, a time for ritual, magic, and connection to the divine feminine. Islamic months begin with the sighting of the New Moon, and Ramadan fasting is timed to the lunar calendar. Jewish holidays including Passover and Rosh Hashanah are also based on the lunar cycle. These diverse traditions all point to a shared human recognition of the Moon&rsquo;s power as a natural clock, a spiritual symbol, and a guide for living in harmony with natural cycles.</p>

        <ToolCTA view="/tools/moon-phase" label="Moon Phase Birthday Tool" icon={<Moon className="mr-2 h-4 w-4" />} navigate={navigate} />
      </ArticleBody>
      <FAQSection faqs={[
        { q: 'How long does each moon phase last?', a: 'Each of the eight lunar phases lasts approximately 3.7 days. The complete lunar cycle from one New Moon to the next takes about 29.5 days, which is known as the synodic month.' },
        { q: 'Does the moon phase on my birthday change every year?', a: 'Yes. Since the lunar cycle is roughly 29.5 days long and a calendar year is 365 days, the moon phase on your birthday shifts each year. This means you experience different lunar energies on successive birthdays.' },
        { q: 'Is there a scientific basis for moon phases affecting emotions?', a: 'Research on lunar effects is mixed. Some studies suggest the Full Moon may influence sleep patterns, while others find no significant correlation. Many people report subjective experiences of lunar influence, and tracking lunar phases remains a popular mindfulness practice regardless of the scientific debate.' },
        { q: 'Can I use moon phases for manifesting goals?', a: 'Many people use the lunar cycle as a framework for setting and reviewing intentions. The New Moon is traditionally used for setting goals, the waxing phases for taking action, the Full Moon for celebrating progress, and the waning phases for releasing obstacles. This is a symbolic practice rather than a guaranteed method.' },
        { q: 'How do I find out what moon phase I was born under?', a: 'You can use our Moon Phase Birthday Tool — simply enter your birth date and the tool will calculate the exact lunar phase on that day, along with a detailed personality interpretation based on your birth moon phase.' },
      ]} />
      <RelatedTools navigate={navigate} />
    </article>
  );
}

// ============================================================
// ARTICLE 2: NAME NUMEROLOGY GUIDE
// ============================================================
export function NameNumerologyArticle({ navigate }: { navigate: (v: View) => void }) {
  return (
    <article className="fade-in max-w-3xl mx-auto px-4 py-8">
      <ArticleHeader badge="Numerology" title="Name Numerology Guide: Unlocking the Hidden Power in Your Name" readTime="11 min read" />
      <DisclaimerNote />
      <ArticleBody>
        <p>Your name is more than just a label — it is a vibration, an energetic signature that carries deep significance in the ancient practice of numerology. Name numerology, also known as numerological name analysis, is the practice of converting the letters of your name into numbers and interpreting those numbers to reveal insights about your personality, destiny, soul purpose, and the image you project to the world. Whether you are exploring your given name for self-understanding, considering a name change, or choosing a name for a new baby or business, name numerology offers a fascinating framework for understanding the power of words and their hidden numerical meanings.</p>

        <h2>What Is Name Numerology?</h2>
        <p>Name numerology is a branch of numerology — the ancient esoteric system that assigns meaning to numbers — that focuses specifically on the numerical vibrations of names. The core principle is that each letter of the alphabet corresponds to a specific number, and that the numbers derived from your name reveal important information about your character, life path, and destiny. While Life Path numerology (calculated from your birth date) describes the journey you are on, name numerology describes who you are and how you express yourself in the world.</p>
        <p>The most widely used system in Western name numerology is the Pythagorean system, which was developed by the ancient Greek mathematician Pythagoras and later refined by numerological scholars. In this system, the 26 letters of the English alphabet are assigned to the numbers 1 through 9 in a specific sequence. By adding together the numbers corresponding to each letter in a name, you arrive at a series of core numerological numbers that offer detailed insights into different aspects of your identity.</p>
        <p>Name numerology is used for a variety of purposes: understanding personality traits, exploring compatibility in relationships, choosing baby names with favorable vibrations, evaluating business names for success potential, and even guiding decisions about legal name changes. It is a tool for self-reflection and personal insight, offering a unique perspective on the relationship between language, numbers, and identity.</p>

        <h2>The Pythagorean Letter-to-Number Conversion Table</h2>
        <p>The Pythagorean system assigns each letter of the alphabet to a number from 1 to 9 based on its position in the following sequence. This is the standard conversion table used in Western numerology:</p>
        <DataTable
          headers={['Number', 'Letters', 'Keywords']}
          rows={[
            ['1', 'A, J, S', 'Leadership, independence, originality'],
            ['2', 'B, K, T', 'Cooperation, sensitivity, balance'],
            ['3', 'C, L, U', 'Creativity, expression, joy'],
            ['4', 'D, M, V', 'Stability, discipline, hard work'],
            ['5', 'E, N, W', 'Freedom, change, adventure'],
            ['6', 'F, O, X', 'Responsibility, nurturing, harmony'],
            ['7', 'G, P, Y', 'Analysis, spirituality, wisdom'],
            ['8', 'H, Q, Z', 'Power, abundance, authority'],
            ['9', 'I, R', 'Compassion, completion, humanitarianism'],
          ]}
        />

        <h2>Core Name Numbers: Expression, Soul Urge, and Personality</h2>
        <p>In name numerology, three core numbers are derived from your name, each revealing a different dimension of your identity:</p>

        <h3>Expression Number (Destiny Number)</h3>
        <p>The Expression Number — also called the Destiny Number — is calculated by converting every letter of your full birth name (first, middle, and last) into its corresponding number and adding them together, then reducing to a single digit or master number (11, 22, or 33). Your Expression Number reveals your natural talents, abilities, and ultimate potential. It describes who you are destined to become and the gifts you bring into this lifetime. This is one of the most important numbers in name numerology because it reveals the core of your identity and the path of self-actualization that will bring you the greatest fulfillment.</p>

        <h3>Soul Urge Number (Heart&rsquo;s Desire Number)</h3>
        <p>The Soul Urge Number — also called the Heart&rsquo;s Desire Number — is calculated using only the vowels in your full birth name (A, E, I, O, U, and sometimes Y). Your Soul Urge Number reveals your innermost desires, motivations, and what truly drives you at the deepest level of your being. While your Expression Number shows what you express outwardly, your Soul Urge Number reveals what you secretly yearn for and what gives your life meaning on a soul level. This number often describes the emotional and spiritual needs that must be met for you to feel truly fulfilled and content.</p>

        <h3>Personality Number</h3>
        <p>The Personality Number is calculated using only the consonants in your full birth name. This number describes the image you project to the world — how other people perceive you, especially upon first impression. Your Personality Number represents the outer layer of your identity, the mask or persona that you wear in social situations. While it may or may not reflect your true inner self, it has a powerful influence on how you are received by others, the opportunities that come your way, and your social interactions. Understanding your Personality Number can help you become more aware of how you present yourself and make conscious choices about the impression you want to create.</p>

        <h2>Meanings for Numbers 1–9 and Master Numbers</h2>
        <DataTable
          headers={['Number', 'Title', 'Expression (Talents)', 'Soul Urge (Inner Drive)', 'Personality (Outer Image)']}
          rows={[
            ['1', 'The Leader', 'Independence, innovation, pioneering spirit', 'Desire for autonomy and self-determination', 'Projects confidence, strength, and originality'],
            ['2', 'The Diplomat', 'Cooperation, sensitivity, mediation', 'Desire for harmony, partnership, and peace', 'Projects gentleness, approachability, and grace'],
            ['3', 'The Creator', 'Communication, artistic expression, joy', 'Desire for creative self-expression and happiness', 'Projects charm, wit, and social warmth'],
            ['4', 'The Builder', 'Organization, reliability, practical skill', 'Desire for security, order, and solid foundations', 'Projects dependability, discipline, and competence'],
            ['5', 'The Adventurer', 'Versatility, resourcefulness, freedom', 'Desire for variety, change, and new experiences', 'Projects energy, magnetism, and excitement'],
            ['6', 'The Nurturer', 'Responsibility, compassion, aesthetic sense', 'Desire to love, care for, and protect others', 'Projects warmth, reliability, and kindness'],
            ['7', 'The Seeker', 'Analysis, research, spiritual depth', 'Desire for truth, knowledge, and inner wisdom', 'Projects mystery, intelligence, and reserve'],
            ['8', 'The Powerhouse', 'Business acumen, authority, ambition', 'Desire for achievement, recognition, and material success', 'Projects authority, competence, and success'],
            ['9', 'The Humanitarian', 'Compassion, wisdom, creative vision', 'Desire to serve humanity and make a difference', 'Projects generosity, sophistication, and warmth'],
            ['11', 'The Intuitive', 'Inspiration, spiritual leadership, insight', 'Desire for spiritual enlightenment and illumination', 'Projects charisma, idealism, and inspiration'],
            ['22', 'The Master Builder', 'Visionary achievement, practical idealism', 'Desire to build something lasting and meaningful', 'Projects power, capability, and vision'],
            ['33', 'The Master Teacher', 'Compassionate wisdom, healing, teaching', 'Desire to uplift, heal, and serve selflessly', 'Projects love, understanding, and nurturing energy'],
          ]}
        />

        <h2>Choosing Baby Names with Numerology</h2>
        <p>Many parents use name numerology when choosing a name for their child, believing that a name with favorable numerical vibrations can support the child&rsquo;s natural talents, personality development, and life path. The process involves calculating the Expression, Soul Urge, and Personality numbers for potential names and evaluating whether the resulting numbers align with the qualities the parents wish to cultivate in their child.</p>
        <p>For example, parents who want their child to develop strong leadership qualities might favor names that produce an Expression Number of 1. Those who value creativity and communication might look for names yielding a 3. Some parents also consider whether the child&rsquo;s name number is compatible with their birth date Life Path Number, seeking harmony between the name vibration and the life journey. While there are no scientific studies validating name numerology, it remains a popular and meaningful practice for many families around the world, adding a layer of intention and symbolism to the deeply personal act of naming a child.</p>

        <h2>Business Name Numerology</h2>
        <p>Name numerology is also widely used in the business world. Entrepreneurs, brand consultants, and numerologists often analyze the numerical vibration of business names, product names, and even domain names to assess their potential for success. In business numerology, the Expression Number of the business name is considered the most important, as it reveals the company&rsquo;s public identity, inherent strengths, and the energy it projects into the marketplace.</p>
        <p>Numbers associated with abundance and achievement (such as 8) are often favored for financial businesses, while numbers associated with creativity and communication (such as 3 and 5) are popular for media and marketing companies. Numbers linked to service and nurturing (such as 6) may be favored for healthcare or education brands. Some numerologists also analyze the compatibility between a business owner&rsquo;s personal numbers and the numbers of their business name, seeking alignment between the founder&rsquo;s energy and the company&rsquo;s mission.</p>

        <ToolCTA view="/tools/name-numerology" label="Name Numerology Calculator" icon={<Calculator className="mr-2 h-4 w-4" />} navigate={navigate} />
      </ArticleBody>
      <FAQSection faqs={[
        { q: 'What is the difference between Expression, Soul Urge, and Personality numbers?', a: 'Your Expression Number is calculated from all letters in your name and reveals your natural talents and life potential. Your Soul Urge Number comes from the vowels only and reveals your innermost desires and motivations. Your Personality Number uses consonants only and describes the image you project to others.' },
        { q: 'Do I use my full legal name for name numerology?', a: 'Traditionally, your full birth name as recorded on your birth certificate is used, as this is considered the name vibration you were born with. However, nicknames, married names, and stage names also carry their own numerological vibrations and can be analyzed separately for additional insight.' },
        { q: 'What are master numbers in numerology?', a: 'Master numbers are 11, 22, and 33. In numerology, these double-digit numbers are considered especially powerful and are usually not reduced to single digits. They carry the energy of their base number (1, 2, 3 and 4, 5, 6 respectively) amplified and elevated to a higher spiritual octave.' },
        { q: 'Can I change my name to improve my numerology?', a: 'Many people choose to modify or change their name for numerological reasons. A new name does introduce a different vibration into your life, and some people report meaningful shifts after a name change. However, your birth name is always considered your core vibration in traditional numerology.' },
        { q: 'How accurate is name numerology?', a: 'Name numerology is an esoteric practice intended for self-reflection and entertainment rather than scientific prediction. Many people find it insightful and meaningful, but it should not be used as a substitute for professional advice in important life decisions.' },
      ]} />
      <RelatedTools navigate={navigate} />
    </article>
  );
}

// ============================================================
// ARTICLE 3: CAREER ASTROLOGY GUIDE
// ============================================================
export function CareerAstrologyArticle({ navigate }: { navigate: (v: View) => void }) {
  return (
    <article className="fade-in max-w-3xl mx-auto px-4 py-8">
      <ArticleHeader badge="Career" title="Career Astrology Guide: Discover Your Professional Strengths Through the Stars" readTime="13 min read" />
      <DisclaimerNote />
      <ArticleBody>
        <p>Astrology has been used for centuries as a tool for understanding not only personality and relationships but also professional strengths, career aptitudes, and vocational calling. Career astrology examines the placements and aspects in your birth chart that relate to work, ambition, public achievement, and professional fulfillment. Whether you are choosing a career path, considering a career change, seeking advancement in your current field, or simply wanting to understand why certain types of work energize you while others drain you, career astrology offers a rich framework for self-discovery and professional development.</p>

        <h2>How Astrology Informs Career Choices</h2>
        <p>In astrology, multiple factors in the birth chart contribute to your professional profile. Your Sun sign reveals your core identity and the qualities you are here to develop, which naturally influence the types of work that feel authentic and fulfilling. Your Midheaven (Medium Coeli, or MC) — one of the most important career indicators in astrology — describes your public image, your professional reputation, and the type of career that will bring you the greatest sense of achievement and recognition. Your sixth house reveals your daily work environment and work habits. The tenth house governs your career trajectory, professional ambitions, and relationship with authority. The second house relates to your relationship with money, personal resources, and self-worth as it applies to earning.</p>
        <p>Beyond individual placements, the elements and modalities present in your chart paint a picture of your natural work style. A chart dominated by Fire signs may thrive in leadership, entrepreneurship, and creative fields. Earth sign emphasis suggests aptitude for business, finance, and practical professions. Air sign dominance points toward communication, technology, and intellectual work. Water sign emphasis indicates strength in healing, creative, and emotionally demanding professions. By understanding these astrological indicators, you can make more informed and aligned career choices that honor your natural gifts and working style.</p>

        <h2>The Midheaven (MC): Your Career Compass</h2>
        <p>The Midheaven, abbreviated as MC (from the Latin Medium Coeli, meaning &ldquo;middle of the sky&rdquo;), is one of the four major angles in the birth chart and sits at the very top of the chart wheel. In astrology, the MC represents your highest aspirations, your public standing, your professional reputation, and the type of career path that aligns with your life purpose. It is one of the most significant indicators for career direction and vocational calling.</p>
        <p>The sign on your Midheaven describes the energy and qualities you project into the professional world and the type of work environment in which you are most likely to thrive and achieve recognition. For example, someone with Aries on the MC may be drawn to entrepreneurial ventures, competitive fields, or leadership roles that allow them to pioneer new initiatives. Someone with Libra on the MC may excel in law, diplomacy, design, or partnership-based professions. The MC also describes how others perceive you in a professional context — the reputation you build and the legacy you leave in your career.</p>
        <p>The ruling planet of your Midheaven sign adds another layer of detail. For instance, if Taurus is on your MC, its ruling planet Venus becomes important, suggesting careers involving beauty, art, luxury, or finance. Understanding the MC and its ruling planet provides a nuanced and personalized view of your career potential that goes far beyond simple Sun sign career descriptions.</p>

        <h2>Career Strengths Table for All 12 Signs</h2>
        <DataTable
          headers={['Zodiac Sign', 'Element', 'Top Career Strengths', 'Ideal Work Environments', 'Potential Careers']}
          rows={[
            [<strong>Aries</strong>, 'Fire', 'Leadership, initiative, courage, competitive drive', 'Fast-paced, independent, challenging', 'Entrepreneurship, athletics, military, emergency services, sales'],
            [<strong>Taurus</strong>, 'Earth', 'Patience, financial acumen, reliability, aesthetic sense', 'Stable, comfortable, results-oriented', 'Finance, real estate, agriculture, culinary arts, luxury goods'],
            [<strong>Gemini</strong>, 'Air', 'Communication, adaptability, networking, quick learning', 'Dynamic, varied, intellectually stimulating', 'Journalism, marketing, teaching, PR, media, writing'],
            [<strong>Cancer</strong>, 'Water', 'Empathy, intuition, nurturing, strong memory', 'Supportive, safe, emotionally meaningful', 'Healthcare, counseling, education, social work, hospitality'],
            [<strong>Leo</strong>, 'Fire', 'Creativity, confidence, charisma, leadership', 'Creative, visible, appreciative', 'Entertainment, fashion, management, performing arts, event planning'],
            [<strong>Virgo</strong>, 'Earth', 'Analysis, precision, service, problem-solving', 'Organized, purposeful, improvement-focused', 'Medicine, research, editing, data analysis, quality assurance'],
            [<strong>Libra</strong>, 'Air', 'Diplomacy, design sense, negotiation, fairness', 'Collaborative, balanced, aesthetically pleasing', 'Law, design, HR, diplomacy, public relations, arts'],
            [<strong>Scorpio</strong>, 'Water', 'Investigation, strategy, emotional depth, resilience', 'Private, intense, high-stakes', 'Psychology, finance, research, crisis management, surgery'],
            [<strong>Sagittarius</strong>, 'Fire', 'Teaching, vision, cultural fluency, optimism', 'Expansive, freedom-oriented, educational', 'Education, travel, publishing, international relations, coaching'],
            [<strong>Capricorn</strong>, 'Earth', 'Strategic thinking, discipline, long-term planning', 'Professional, structured, goal-oriented', 'Business, finance, engineering, law, government, management'],
            [<strong>Aquarius</strong>, 'Air', 'Innovation, humanitarian vision, technology', 'Progressive, collaborative, forward-thinking', 'Technology, science, activism, aerospace, social innovation'],
            [<strong>Pisces</strong>, 'Water', 'Creativity, empathy, spiritual insight, artistry', 'Creative, compassionate, flexible', 'Arts, music, healing, counseling, charity, spiritual work'],
          ]}
        />

        <h2>Work Styles by Element</h2>

        <h3>Fire Signs in Leadership and Entrepreneurship</h3>
        <p>Fire signs (Aries, Leo, Sagittarius) bring passion, energy, and a pioneering spirit to their professional lives. They are natural leaders who inspire others through their enthusiasm, confidence, and willingness to take risks. Fire signs thrive in environments that offer challenge, autonomy, and the opportunity to make a significant impact. They are energized by competition, creative freedom, and the chance to blaze new trails. However, Fire signs can struggle with routine, patience, and the sustained attention to detail that some roles require. They are most fulfilled when they have a vision to pursue and the freedom to pursue it their own way.</p>
        <p>In leadership roles, Fire signs are bold decision-makers who are not afraid to take calculated risks. They motivate teams through charisma and lead by example. Aries excels at starting new ventures and initiating projects. Leo shines in roles that involve public speaking, creative direction, or brand representation. Sagittarius brings a visionary quality to leadership, always looking at the bigger picture and inspiring others with their sense of possibility.</p>

        <h3>Earth Signs in Business and Finance</h3>
        <p>Earth signs (Taurus, Virgo, Capricorn) are the practical builders of the zodiac, bringing reliability, discipline, and a results-oriented approach to their work. They excel in business, finance, and any field that rewards patience, consistency, and attention to detail. Earth signs understand the material world intuitively and have a natural talent for managing resources, creating systems, and building lasting structures. They are the people who get things done reliably and who can be counted on to follow through.</p>
        <p>Taurus brings financial acumen, aesthetic sensibility, and a patient approach to building wealth. Virgo contributes analytical precision, organizational skill, and a genuine desire to improve processes and systems. Capricorn offers strategic vision, long-term planning ability, and an unmatched capacity for sustained effort toward ambitious goals. Together, Earth signs form the backbone of successful businesses and organizations, providing the stability and practical know-how that every enterprise needs.</p>

        <h3>Air Signs in Communication and Technology</h3>
        <p>Air signs (Gemini, Libra, Aquarius) are the intellectual communicators of the zodiac, thriving in careers that involve ideas, information, social connection, and innovation. They are natural networkers, thinkers, and problem-solvers who excel in roles that require mental agility, communication skills, and the ability to see situations from multiple perspectives. Air signs are energized by learning, discussion, collaboration, and the exchange of ideas.</p>
        <p>Gemini excels in journalism, writing, teaching, marketing, and any role that involves processing and communicating information quickly and engagingly. Libra brings diplomatic skill, aesthetic judgment, and a talent for mediation and negotiation to professional environments. Aquarius contributes visionary thinking, technological aptitude, and a humanitarian perspective that drives innovation in science, technology, and social progress. Air signs are particularly well-suited to the modern knowledge economy, where intellectual capital, communication, and innovation are paramount.</p>

        <h3>Water Signs in Healing and Creative Professions</h3>
        <p>Water signs (Cancer, Scorpio, Pisces) bring emotional intelligence, intuition, and creative depth to their professional lives. They excel in healing, counseling, creative arts, and any field that requires empathy, emotional perception, or the ability to connect with people on a deep, authentic level. Water signs understand the invisible currents that run beneath the surface of human experience, making them exceptionally gifted at reading people, situations, and emotional dynamics.</p>
        <p>Cancer brings nurturing energy, protective instincts, and a strong intuition to professions in healthcare, education, social work, and hospitality. Scorpio contributes investigative skill, strategic thinking, and emotional resilience to roles in psychology, finance, research, and crisis management. Pisces offers creative vision, artistic talent, and compassionate wisdom to careers in the arts, healing, spiritual work, and charitable organizations. Water signs are the emotional heart of any organization, providing the empathy and depth that create meaningful human connections.</p>

        <h2>Finding Career Satisfaction Through Your Chart</h2>
        <p>Career satisfaction in astrology is not just about what you do — it is about how you do it, who you do it with, and whether your work aligns with the deeper purpose indicated by your birth chart. A fulfilling career honors your natural strengths (Sun sign and MC), provides the right work environment (sixth house), offers meaningful challenges (Saturn), and connects to something larger than yourself (Jupiter and North Node). When these elements align, work feels energizing rather than draining, and professional growth feels natural rather than forced.</p>
        <p>If you are feeling unfulfilled in your career, astrology can help you identify which of these elements may be out of alignment. You may be in the right field but the wrong environment. You may be using your strengths but not addressing your deeper purpose. Or you may be ignoring an important placement that points toward a career path you have not yet considered. Our Career Personality Calculator analyzes your zodiac sign and provides a personalized career profile with specific recommendations based on your astrological profile.</p>

        <ToolCTA view="/tools/career-personality" label="Career Personality Calculator" icon={<Compass className="mr-2 h-4 w-4" />} navigate={navigate} />
      </ArticleBody>
      <FAQSection faqs={[
        { q: 'Can astrology really tell me what career to choose?', a: 'Astrology provides insights into your natural strengths, work style, and vocational tendencies — not definitive career prescriptions. It is a tool for self-reflection that can help you identify career paths that align with your personality, but it should be combined with practical considerations like education, experience, and market demand.' },
        { q: 'What is the most important placement for career in astrology?', a: 'The Midheaven (MC) is considered the most important career indicator in the birth chart, as it represents your public image, professional reputation, and vocational calling. The tenth house, Sun sign, and sixth house are also significant for understanding career aptitudes and work style.' },
        { q: 'Do all Fire signs make good leaders?', a: 'Fire signs (Aries, Leo, Sagittarius) generally have natural leadership qualities, but leadership styles vary. Aries leads through boldness and initiative, Leo through inspiration and charisma, and Sagittarius through vision and teaching. Leadership effectiveness also depends on other chart placements and individual development.' },
        { q: 'What if my Sun sign and MC suggest different career paths?', a: 'This is very common and actually reflects a rich professional identity. Your Sun sign represents your core essence and natural talents, while your MC describes the type of career path and public reputation that will bring you fulfillment. The most satisfying careers often find a way to honor both energies.' },
        { q: 'Can career astrology help me if I am considering a career change?', a: 'Yes. Career astrology is especially valuable during career transitions because it can help you identify what has been missing from your current work, what your natural strengths and needs are, and which types of roles and environments would be more fulfilling. Use our Career Personality Calculator for personalized guidance.' },
      ]} />
      <RelatedTools navigate={navigate} />
    </article>
  );
}

// ============================================================
// ARTICLE 4: FRIENDSHIP COMPATIBILITY GUIDE
// ============================================================
export function FriendshipCompatibilityArticle({ navigate }: { navigate: (v: View) => void }) {
  return (
    <article className="fade-in max-w-3xl mx-auto px-4 py-8">
      <ArticleHeader badge="Compatibility" title="Friendship Compatibility Guide: Find Your Zodiac Best Friend Match" readTime="12 min read" />
      <DisclaimerNote />
      <ArticleBody>
        <p>Friendship is one of the most important and meaningful dimensions of human life, and astrology offers a fascinating lens for understanding why we click with certain people and clash with others. While much of the focus in astrology is on romantic compatibility, the same principles that govern romantic attraction and relationship dynamics also apply to friendships — often with even more nuance, because friendships come in so many different forms. From your closest confidant to your work bestie, your adventure buddy to your lifelong childhood friend, astrology can help you understand the cosmic chemistry behind your most valued platonic bonds.</p>

        <h2>How Zodiac Friendship Compatibility Works</h2>
        <p>Zodiac friendship compatibility is based on several astrological factors that determine how naturally two people connect, communicate, and sustain a friendship over time. The most significant factor is element compatibility — whether two signs share the same element (Fire with Fire, Earth with Earth, Air with Air, Water with Water) or belong to complementary elements (Fire with Air, Earth with Water). Signs in the same element share a fundamental approach to life and emotional expression, which creates an immediate sense of familiarity and understanding. Complementary elements create a dynamic of mutual growth, where each person brings qualities that the other lacks.</p>
        <p>Beyond elements, modality (Cardinal, Fixed, Mutable) plays an important role in friendship dynamics. Signs of the same modality share a similar energy and approach to action, which can create either harmony or competition depending on the signs involved. Cardinal signs (Aries, Cancer, Libra, Capricorn) are initiators who like to start things together. Fixed signs (Taurus, Leo, Scorpio, Aquarius) value loyalty and shared commitments. Mutable signs (Gemini, Virgo, Sagittarius, Pisces) are adaptable and enjoy variety in their friendships.</p>
        <p>The Moon sign is particularly important in friendship compatibility because it governs emotional needs, comfort levels, and the private self that you share with close friends. Two people with compatible Moon signs — for example, both in Water signs or in complementary Earth-Water combinations — often find it easier to be emotionally vulnerable with each other, which is the foundation of deep, lasting friendship. Sun sign compatibility provides the initial spark and shared interests, but Moon sign compatibility determines whether a friendship can go beyond surface-level connection and become truly intimate.</p>

        <h2>Best Friend Matches for All 12 Signs</h2>
        <DataTable
          headers={['Sign', 'Best Friend Matches', 'Why It Works', 'Friendship Dynamic']}
          rows={[
            [<strong>Aries</strong>, 'Leo, Sagittarius, Gemini, Aquarius', 'Shared fire energy and love of adventure', 'Action-oriented, competitive, always planning the next exciting thing'],
            [<strong>Taurus</strong>, 'Virgo, Capricorn, Cancer, Pisces', 'Shared values of loyalty and reliability', 'Comfortable, low-maintenance, built on trust and shared pleasures'],
            [<strong>Gemini</strong>, 'Libra, Aquarius, Aries, Leo', 'Endless conversation and shared curiosity', 'Social, fun, intellectually stimulating, always discovering new interests'],
            [<strong>Cancer</strong>, 'Scorpio, Pisces, Taurus, Virgo', 'Deep emotional understanding and mutual nurturing', 'Emotionally supportive, homey, fiercely protective of each other'],
            [<strong>Leo</strong>, 'Aries, Sagittarius, Gemini, Libra', 'Mutual admiration and shared enthusiasm', 'Dramatic, fun, generous, lots of celebration and creative adventures'],
            [<strong>Virgo</strong>, 'Taurus, Capricorn, Cancer, Scorpio', 'Shared standards and practical care', 'Helpful, growth-oriented, built on acts of service and honest advice'],
            [<strong>Libra</strong>, 'Gemini, Aquarius, Leo, Sagittarius', 'Love of social life and aesthetic harmony', 'Social, culturally engaged, intellectually stimulating, diplomatic'],
            [<strong>Scorpio</strong>, 'Cancer, Pisces, Virgo, Capricorn', 'Shared depth and mutual loyalty', 'Intense, private, transformational, built on absolute trust'],
            [<strong>Sagittarius</strong>, 'Aries, Leo, Libra, Aquarius', 'Shared love of freedom and exploration', 'Adventurous, philosophical, fun, always expanding each other\'s horizons'],
            [<strong>Capricorn</strong>, 'Taurus, Virgo, Scorpio, Pisces', 'Shared ambition and respect for commitment', 'Loyal, supportive, long-lasting, built on mutual respect and shared goals'],
            [<strong>Aquarius</strong>, 'Gemini, Libra, Aries, Sagittarius', 'Intellectual bond and shared humanitarian values', 'Unconventional, idea-driven, supportive of each other\'s individuality'],
            [<strong>Pisces</strong>, 'Cancer, Scorpio, Taurus, Capricorn', 'Emotional depth and spiritual connection', 'Empathetic, creative, intuitive, deeply caring and spiritually supportive'],
          ]}
        />

        <h2>Why Certain Signs Click: Shared Element vs. Complementary Energy</h2>

        <h3>Same-Element Friendships: Instant Understanding</h3>
        <p>When two signs share the same element, there is an immediate, almost instinctive recognition and comfort between them. Fire sign friends (Aries, Leo, Sagittarius) understand each other&rsquo;s need for excitement, directness, and creative self-expression. They fuel each other&rsquo;s passions and rarely judge each other for being too intense or too bold. Earth sign friends (Taurus, Virgo, Capricorn) share a practical, grounded approach to life that creates stable, reliable friendships. They understand each other&rsquo;s need for consistency, quality, and tangible results. Air sign friends (Gemini, Libra, Aquarius) bond through ideas, conversation, and social connection. They thrive on mental stimulation and enjoy bouncing thoughts off each other. Water sign friends (Cancer, Scorpio, Pisces) connect through emotional depth, intuition, and empathy. They create friendships that feel soul-level deep and emotionally safe.</p>

        <h3>Complementary-Element Friendships: Dynamic Growth</h3>
        <p>Friendships between complementary elements — Fire and Air, Earth and Water — create a dynamic of mutual attraction and growth. Fire (Aries, Leo, Sagittarius) and Air (Gemini, Libra, Aquarius) energize each other: Fire provides passion and inspiration, while Air provides ideas, social connections, and intellectual stimulation. These friendships are often vibrant, sociable, and full of exciting plans and activities. Earth (Taurus, Virgo, Capricorn) and Water (Cancer, Scorpio, Pisces) nourish each other: Earth provides stability, practicality, and grounding, while Water provides emotional depth, intuition, and creative sensitivity. These friendships tend to be deeply supportive, loyal, and built on a foundation of mutual care and understanding.</p>
        <p>While complementary-element friendships can be incredibly enriching, they also require more conscious effort and mutual respect for differences. A Fire sign friend may sometimes feel that their Air sign friend is too detached or intellectual, while the Air sign may feel that the Fire sign is too impulsive. Similarly, an Earth sign may feel that their Water sign friend is too emotional or impractical, while the Water sign may feel that the Earth sign is too rigid or unfeeling. Awareness of these differences is the key to building strong, lasting complementary-element friendships.</p>

        <h2>Friendship by Element Groups</h2>
        <DataTable
          headers={['Element Group', 'Friendship Style', 'Strengths', 'Potential Challenges']}
          rows={[
            [<strong>Fire + Fire</strong>, 'Energetic, adventurous, competitive', 'Mutual inspiration, shared excitement, bold plans', 'Ego clashes, burnout from constant activity, impulsiveness'],
            [<strong>Earth + Earth</strong>, 'Stable, practical, enduring', 'Reliability, shared values, long-term loyalty', 'Stubbornness, resistance to change, may become too routine-bound'],
            [<strong>Air + Air</strong>, 'Social, intellectual, communicative', 'Endless conversation, shared ideas, fun social life', 'Lack of emotional depth, may stay superficial, avoidance of heavy topics'],
            [<strong>Water + Water</strong>, 'Deep, intuitive, emotionally rich', 'Profound empathy, emotional safety, creative synergy', 'Emotional intensity, boundary issues, may become codependent'],
            [<strong>Fire + Air</strong>, 'Dynamic, exciting, growth-oriented', 'Energy + ideas, social adventure, mutual motivation', 'Fire may find Air detached; Air may find Fire overwhelming'],
            [<strong>Earth + Water</strong>, 'Nurturing, supportive, complementary', 'Stability + emotion, practical care, deep loyalty', 'Earth may seem cold; Water may seem impractical or overly sensitive'],
          ]}
        />

        <h2>How Moon Sign Affects Friendship</h2>
        <p>While Sun sign compatibility determines whether you enjoy someone&rsquo;s company and share common interests, Moon sign compatibility determines how comfortable you feel being emotionally vulnerable with them. Two friends with harmonious Moon signs — whether the same element or complementary elements — naturally understand each other&rsquo;s emotional needs and rhythms. They instinctively know when to offer support, when to give space, and how to be present for each other during difficult times.</p>
        <p>For example, a friend with a Cancer Moon needs emotional safety, nurturing, and reassurance. A friend with a Capricorn Moon needs respect, consistency, and practical support. If these two people are close friends, the Cancer Moon person can provide the emotional warmth and empathy that the Capricorn Moon person secretly craves, while the Capricorn Moon person can provide the stability and grounded advice that helps the Cancer Moon person feel secure. Understanding Moon sign dynamics can transform friendships from pleasant acquaintances into deep, supportive bonds.</p>
        <p>Challenging Moon sign combinations — such as Fire and Water — can still produce wonderful friendships, but they require more conscious communication and mutual respect for different emotional styles. A Fire Moon friend may need to learn patience and gentleness with their Water Moon friend, while the Water Moon friend may need to communicate their needs more directly rather than expecting the Fire Moon friend to intuit them.</p>

        <h2>Navigating Friendship Challenges by Sign</h2>
        <p>Every friendship faces challenges, and astrology can offer insight into the specific patterns of conflict that may arise between different signs. Aries may struggle with patience and listening in friendships, while Libra may avoid necessary confrontation. Taurus can be stubborn about changing routines, while Gemini may be perceived as flaky or inconsistent. Cancer may become overly dependent or moody, while Sagittarius may seem emotionally unavailable during difficult times. Understanding these patterns — and recognizing that they are expressions of each sign&rsquo;s natural energy rather than personal failures — is the first step toward resolving conflicts and building stronger, more resilient friendships.</p>
        <p>The key to navigating friendship challenges astrologically is not to use sign differences as excuses or limitations, but as starting points for deeper understanding and empathy. When you understand why your friend communicates the way they do, why they need what they need, and why certain situations trigger them, you can respond with compassion rather than frustration. This awareness transforms astrology from a party trick into a genuine tool for building better, more authentic human connections.</p>

        <ToolCTA view="/tools/friendship-compatibility" label="Friendship Compatibility Calculator" icon={<Users className="mr-2 h-4 w-4" />} navigate={navigate} />
      </ArticleBody>
      <FAQSection faqs={[
        { q: 'Is friendship compatibility the same as romantic compatibility?', a: 'The same astrological principles apply, but the emphasis is different. In romantic compatibility, Venus and Mars placements are particularly important. In friendship compatibility, the Moon sign (emotional connection) and Sun sign (shared interests and personality style) are often more significant, while romantic chemistry indicators play a lesser role.' },
        { q: 'Can signs that are considered incompatible still be good friends?', a: 'Absolutely. Astrological compatibility describes tendencies and natural affinities, not absolute rules. Many of the strongest friendships exist between supposedly incompatible signs because the individuals involved have developed mutual understanding, respect, and communication skills that transcend astrological differences.' },
        { q: 'Does Moon sign matter more than Sun sign in friendship?', a: 'They matter in different ways. Sun sign compatibility creates the initial bond — shared interests, similar energy, and enjoyable interaction. Moon sign compatibility creates emotional depth — the ability to be vulnerable, supportive, and truly intimate. The best friendships often have strong compatibility in both.' },
        { q: 'How do I find my friend\'s Moon sign?', a: 'You need your friend\'s date, time, and location of birth to determine their Moon sign accurately. Without the exact birth time, there is a margin of error since the Moon moves through signs approximately every two and a half days.' },
        { q: 'Can friendship compatibility change over time?', a: 'Your natal chart placements do not change, but your understanding of and ability to work with astrological differences evolves over time. As people mature and develop communication skills, many initially challenging sign combinations become strengths that offer complementary perspectives and mutual growth.' },
      ]} />
      <RelatedTools navigate={navigate} />
    </article>
  );
}

// ============================================================
// ARTICLE 5: JUPITER AND SATURN GUIDE
// ============================================================
export function JupiterSaturnArticle({ navigate }: { navigate: (v: View) => void }) {
  return (
    <article className="fade-in max-w-3xl mx-auto px-4 py-8">
      <ArticleHeader badge="Guide" title="Jupiter and Saturn Guide: The Great Benefic and Great Teacher of Astrology" readTime="11 min read" />
      <DisclaimerNote />
      <ArticleBody>
        <p>In astrology, Jupiter and Saturn are known as the two social planets — positioned between the personal planets (Sun through Mars) and the outer planets (Uranus, Neptune, and Pluto). Together, they form one of the most important planetary pairs in the birth chart, representing a fundamental duality that shapes every life: expansion versus contraction, freedom versus structure, optimism versus realism, and abundance versus limitation. Understanding Jupiter and Saturn in your chart — and in their current movements through the sky — provides powerful insight into where life flows easily and where it demands effort, where you are blessed with luck and where you are called to build mastery through discipline.</p>

        <h2>Jupiter: The Planet of Growth, Luck, and Expansion</h2>
        <p>Jupiter is the largest planet in our solar system, and in astrology it carries correspondingly large themes: growth, abundance, wisdom, optimism, luck, opportunity, and the expansion of consciousness. Named after the king of the Roman gods, Jupiter represents the principle of increase — wherever Jupiter touches in your chart, that area of life tends to grow, sometimes beyond what you expected or even wanted. Jupiter is traditionally called the Great Benefic, meaning the &ldquo;great doer of good,&rdquo; because its influence is generally associated with positive outcomes, fortune, and favorable circumstances.</p>
        <p>Jupiter takes approximately 12 years to orbit the zodiac, spending about one year in each sign. This means that everyone born within the same year shares the same Jupiter sign, making it somewhat generational, but its house placement and aspects in the individual chart add significant personal nuance. Jupiter&rsquo;s sign shows how you seek growth, meaning, and wisdom. Jupiter&rsquo;s house shows the life area where opportunities tend to arise and abundance flows most naturally. Understanding your Jupiter placement helps you identify where your natural luck lies, what kinds of experiences expand your horizons, and where you can most easily find meaning and fulfillment.</p>
        <p>However, Jupiter&rsquo;s influence is not always purely positive. When Jupiter&rsquo;s expansive energy is unbalanced, it can manifest as excess, overconfidence, indulgence, and a tendency to overpromise and underdeliver. Jupiter can make things too easy, which sometimes leads to complacency or taking blessings for granted. The key to working with Jupiter energy is gratitude paired with conscious intention — appreciating the abundance it brings while remaining grounded and responsible.</p>

        <h2>Saturn: The Planet of Discipline, Structure, and Mastery</h2>
        <p>Saturn is the sixth planet from the Sun and in astrology it represents the opposite principle to Jupiter: limitation, structure, discipline, responsibility, time, and the building of lasting achievements through sustained effort. Named after the Roman god of time and agriculture, Saturn is traditionally called the Great Malefic, meaning the &ldquo;great doer of difficulty,&rdquo; because its influence often brings challenges, delays, and hard lessons. However, modern astrologers understand Saturn not as a punisher but as a wise teacher — the planet that shows you where you need to grow up, take responsibility, and develop real mastery.</p>
        <p>Saturn takes approximately 29.5 years to orbit the zodiac, spending about two and a half years in each sign. This long orbital period means that Saturn&rsquo;s transits are among the most significant and life-shaping events in astrology, marking major milestones of maturity and personal development. Saturn&rsquo;s sign shows the cultural values around discipline and responsibility during your formative years. Saturn&rsquo;s house shows the life area where you face your greatest challenges and where, through sustained effort, you can build your most enduring achievements.</p>
        <p>Saturn&rsquo;s influence, while often experienced as difficult, is ultimately empowering. The areas of life where Saturn is strong in your chart are the areas where you have the potential to become truly excellent. Saturn does not give you anything for free — everything it offers must be earned through patience, hard work, and the willingness to confront your limitations. But what Saturn gives, it gives permanently. The achievements built under Saturn&rsquo;s influence are the ones that last a lifetime.</p>

        <h2>Jupiter in All 12 Signs</h2>
        <DataTable
          headers={['Jupiter Sign', 'Growth Theme', 'Areas of Abundance', 'Where You Seek Meaning', 'Watch Out For']}
          rows={[
            [<strong>Aries</strong>, 'Bold initiative and courageous growth', 'Leadership, competition, new ventures', 'Through challenge, adventure, and self-discovery', 'Overconfidence, impulsiveness, burning bridges'],
            [<strong>Taurus</strong>, 'Material growth and sensory abundance', 'Finances, nature, physical comfort, beauty', 'Through building security and enjoying life\'s pleasures', 'Overindulgence, materialism, resistance to change'],
            [<strong>Gemini</strong>, 'Intellectual expansion and communication', 'Learning, writing, teaching, social connections', 'Through ideas, curiosity, and diverse experiences', 'Scattered focus, superficial knowledge, restlessness'],
            [<strong>Cancer</strong>, 'Emotional growth and domestic abundance', 'Family, home, emotional security, nurturing', 'Through creating a safe, loving environment', 'Emotional overexpansion, clinging to comfort, smothering'],
            [<strong>Leo</strong>, 'Creative expansion and joyful self-expression', 'Creativity, romance, children, performance', 'Through self-expression, recognition, and generosity', 'Arrogance, need for attention, dramatic excess'],
            [<strong>Virgo</strong>, 'Growth through service and skill development', 'Health, daily routines, work, self-improvement', 'Through helping others and mastering practical skills', 'Perfectionism, over-criticism, health anxiety'],
            [<strong>Libra</strong>, 'Growth through relationships and harmony', 'Partnerships, beauty, justice, social grace', 'Through cooperation, aesthetics, and creating balance', 'People-pleasing, indecision, dependency on others'],
            [<strong>Scorpio</strong>, 'Transformative growth and psychological depth', 'Psychology, shared resources, regeneration, research', 'Through exploring the depths of life and emotional truth', 'Intensity, obsession, power struggles, secrecy'],
            [<strong>Sagittarius</strong>, 'Philosophical growth and expansive vision', 'Travel, education, spirituality, freedom', 'Through exploring beliefs, cultures, and big ideas', 'Exaggeration, overcommitment, restlessness, dogmatism'],
            [<strong>Capricorn</strong>, 'Growth through ambition and achievement', 'Career, authority, structure, long-term goals', 'Through building something lasting and meaningful', 'Workaholism, rigidity, excessive focus on status'],
            [<strong>Aquarius</strong>, 'Growth through innovation and community', 'Technology, social causes, friendship, humanitarianism', 'Through progressive ideas and collective progress', 'Rebelliousness, emotional detachment, unrealistic idealism'],
            [<strong>Pisces</strong>, 'Spiritual growth and compassionate expansion', 'Spirituality, art, healing, compassion, dreams', 'Through transcending the ego and connecting to the divine', 'Escapism, boundary issues, victim mentality, confusion'],
          ]}
        />

        <h2>Saturn in All 12 Signs</h2>
        <DataTable
          headers={['Saturn Sign', 'Life Lesson', 'Area of Challenge', 'Path to Mastery', 'Generational Theme']}
          rows={[
            [<strong>Aries</strong>, 'Patient courage', 'Impatience, recklessness, anger management', 'Learning to act with discipline and sustained effort', 'Pioneering spirit tempered by wisdom'],
            [<strong>Taurus</strong>, 'Self-worth beyond materialism', 'Attachment to comfort, stubbornness, fear of change', 'Building stable foundations through patient effort', 'Redefining security and values'],
            [<strong>Gemini</strong>, 'Focused communication', 'Scattered thinking, superficiality, inconsistency', 'Developing depth of thought and reliable expression', 'Navigating information overload with discernment'],
            [<strong>Cancer</strong>, 'Emotional responsibility', 'Fear of vulnerability, emotional suppression, insecurity', 'Creating emotional security through self-reliance', 'Redefining family and emotional bonds'],
            [<strong>Leo</strong>, 'Authentic self-expression', 'Need for validation, fear of rejection, creative blocks', 'Expressing oneself without needing external approval', 'Authentic leadership versus ego-driven authority'],
            [<strong>Virgo</strong>, 'Service without self-criticism', 'Perfectionism, anxiety, overwork, harsh self-judgment', 'Serving others while maintaining healthy boundaries', 'Balancing high standards with self-compassion'],
            [<strong>Libra</strong>, 'Commitment without dependency', 'People-pleasing, fear of conflict, indecision', 'Building partnerships based on equality and authenticity', 'Redefining relationships and social justice'],
            [<strong>Scorpio</strong>, 'Emotional courage and trust', 'Control issues, fear of vulnerability, power struggles', 'Transforming through facing shadow and embracing change', 'Navigating power, intimacy, and societal transformation'],
            [<strong>Sagittarius</strong>, 'Grounded wisdom', 'Over-optimism, commitment issues, philosophical rigidity', 'Finding meaning through disciplined study and practice', 'Balancing freedom with responsibility'],
            [<strong>Capricorn</strong>, 'Authority with integrity', 'Workaholism, emotional coldness, excessive ambition', 'Leading with wisdom, responsibility, and genuine care', 'Redefining success and societal structures'],
            [<strong>Aquarius</strong>, 'Humanitarian action', 'Emotional detachment, rebelliousness, utopian thinking', 'Turning progressive ideals into tangible results', 'Technology, social change, and collective responsibility'],
            [<strong>Pisces</strong>, 'Spiritual grounding', 'Escapism, boundary issues, victim consciousness', 'Integrating spirituality into practical daily life', 'Compassion, healing, and spiritual awareness'],
          ]}
        />

        <h2>Jupiter Return: A New 12-Year Cycle</h2>
        <p>A Jupiter return occurs when transiting Jupiter returns to the exact position it occupied at your birth, which happens approximately every 12 years. Jupiter returns mark the beginning of a new 12-year cycle of growth, opportunity, and expansion. They typically occur around ages 12, 24, 36, 48, 60, and 72 — each one initiating a new chapter of possibility and meaning in your life.</p>
        <p>During a Jupiter return, you may feel a surge of optimism, a desire to expand your horizons, and a sense that new doors are opening. Opportunities that align with your Jupiter sign and house tend to present themselves during this time. People often experience significant positive developments — a new job, a move to a new city, a meaningful relationship, a spiritual awakening, or the launch of a creative project. Jupiter returns are favorable times for setting intentions, taking calculated risks, and embracing the spirit of growth and adventure.</p>
        <p>However, the quality of a Jupiter return depends on how you work with its energy. If you approach it with gratitude, intention, and a willingness to grow, it can be one of the most expansive and rewarding periods of your life. If you approach it with complacency, entitlement, or recklessness, the excess of Jupiter energy can lead to overextension, poor decisions, or missed opportunities. The key is to stay open to possibility while remaining grounded in your values and commitments.</p>

        <h2>Saturn Return: The Cosmic Coming of Age</h2>
        <p>The Saturn return is one of the most talked-about and significant events in astrology. It occurs when transiting Saturn returns to the exact position it occupied at your birth, which happens approximately every 29.5 years. The first Saturn return (ages 27–30) is widely considered the most significant, marking the transition from youth to true adulthood. The second Saturn return (ages 57–60) marks another major life transition, often related to retirement, legacy, and the integration of life experience.</p>
        <p>The first Saturn return is famous — and sometimes feared — because it often brings a period of intense self-evaluation, challenge, and restructuring. During this time, you may face major life decisions about career, relationships, and identity. Situations and structures that no longer serve your growth may collapse or demand transformation. Saturn strips away illusions, forces you to confront reality, and demands that you take full responsibility for your life. While this process can be uncomfortable and even painful, it is ultimately one of the most powerful periods of personal growth and maturation you will experience.</p>
        <p>People who resist their Saturn return — who cling to outdated situations, refuse to take responsibility, or try to avoid the challenges it presents — often experience the most difficulty. Those who embrace it, who are willing to do the hard work of self-examination and make necessary changes, emerge from the Saturn return with a stronger, more authentic sense of self and a clearer direction for their lives. The Saturn return is not a punishment — it is an initiation into a more mature, powerful, and self-aware version of yourself.</p>

        <h2>Jupiter and Saturn as a Pair: The Cosmic Balance</h2>
        <p>In astrology, Jupiter and Saturn are understood as a complementary pair that together represent the fundamental balance of expansion and contraction, ease and effort, freedom and structure. A well-balanced chart integrates both energies: the optimism and openness of Jupiter with the discipline and realism of Saturn, the willingness to dream big with the commitment to do the work, and the capacity to enjoy abundance with the wisdom to build something lasting.</p>
        <p>In your birth chart, the relationship between Jupiter and Saturn — their signs, house placements, and any aspects between them — reveals how you balance these fundamental life energies. A strong Jupiter with a weak Saturn may indicate someone who is naturally lucky but struggles with follow-through and discipline. A strong Saturn with a weak Jupiter may indicate someone who is hardworking and responsible but struggles to see opportunities, take risks, or allow themselves to enjoy life. The ideal is a dynamic balance where both energies support each other: Jupiter provides the vision and optimism, while Saturn provides the structure and perseverance to make that vision real.</p>

        <h2>Jupiter-Saturn Conjunctions and Their Significance</h2>
        <p>Every 20 years, Jupiter and Saturn meet in a conjunction — one of the most significant and widely watched astrological events. These conjunctions mark the beginning of a new 20-year social, economic, and political cycle and have historically coincided with major shifts in society. The element of the conjunction changes approximately every 200 years, with the 2020 conjunction in Aquarius marking the beginning of a new 200-year cycle in Air signs (following roughly 200 years of Earth sign conjunctions). This shift from Earth to Air is believed to signal a collective transition from material, industrial priorities toward intellectual, communicative, and technology-focused values.</p>
        <p>Historical Jupiter-Saturn conjunctions have coincided with events such as the founding of nations, major economic shifts, technological revolutions, and cultural transformations. While individual experiences of these conjunctions vary, they always carry a sense of collective transition — the end of one era and the beginning of another. Understanding the Jupiter-Saturn cycle provides context for the large-scale changes happening in the world and helps individuals situate their personal experiences within a broader historical and cultural narrative.</p>

        <ToolCTA view="/tools/planet-sign-meaning" label="Planet Sign Meaning Tool" icon={<Globe className="mr-2 h-4 w-4" />} navigate={navigate} />
      </ArticleBody>
      <FAQSection faqs={[
        { q: 'Are Jupiter and Saturn always opposite in meaning?', a: 'Not exactly opposite, but complementary. Jupiter represents expansion, growth, and abundance, while Saturn represents contraction, discipline, and structure. They are two sides of the same coin — both are necessary for a balanced life. Jupiter opens doors, and Saturn ensures you have the skills and commitment to walk through them.' },
        { q: 'What happens if Jupiter and Saturn are both strong in my chart?', a: 'This is generally considered a powerful combination. You likely have both the vision and optimism to dream big (Jupiter) and the discipline and perseverance to achieve your goals (Saturn). The key is balancing these energies so that neither becomes extreme — Jupiter without Saturn can be reckless, and Saturn without Jupiter can be overly restrictive.' },
        { q: 'Is the Saturn return really as difficult as people say?', a: 'The Saturn return is challenging but not necessarily catastrophic. It is a period of maturation that demands you take responsibility for your life and make adult decisions. For some people, this is relatively smooth; for others, it involves significant upheaval. How you experience it depends on your chart and how willing you are to grow and change.' },
        { q: 'How often does Jupiter return to my birth position?', a: 'Jupiter returns approximately every 12 years. These returns typically occur around ages 12, 24, 36, 48, 60, and 72. Each return marks the beginning of a new 12-year cycle of growth and opportunity.' },
        { q: 'What does a Jupiter-Saturn conjunction mean for individuals?', a: 'For individuals born during a Jupiter-Saturn conjunction, these two planets are linked in their chart, creating a powerful tension and potential between expansion and discipline. For everyone, a Jupiter-Saturn transit conjunction (which happens every 20 years) marks a significant collective turning point that may coincide with personal transitions in career, beliefs, and life direction.' },
      ]} />
      <RelatedTools navigate={navigate} />
    </article>
  );
}
