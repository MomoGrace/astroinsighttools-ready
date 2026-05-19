// Zodiac sign date ranges and comprehensive data
export interface ZodiacSign {
  name: string;
  symbol: string;
  element: string;
  modality: string;
  ruling_planet: string;
  dateRange: string;
  startMonth: number;
  startDay: number;
  endMonth: number;
  endDay: number;
  traits: string[];
  strengths: string[];
  weaknesses: string[];
  compatibility: string[];
  description: string;
  loveStyle: string;
  careerStyle: string;
}

export const zodiacSigns: ZodiacSign[] = [
  {
    name: "Aries",
    symbol: "\u2648",
    element: "Fire",
    modality: "Cardinal",
    ruling_planet: "Mars",
    dateRange: "Mar 21 \u2013 Apr 19",
    startMonth: 3, startDay: 21, endMonth: 4, endDay: 19,
    traits: ["Courageous", "Energetic", "Optimistic", "Impulsive"],
    strengths: ["Natural leader", "Highly motivated", "Honest and direct", "Enthusiastic"],
    weaknesses: ["Can be impatient", "May act before thinking", "Struggles with long-term focus", "Competitive to a fault"],
    compatibility: ["Leo", "Sagittarius", "Gemini", "Aquarius"],
    description: "Aries is the first sign of the zodiac and represents the raw energy of new beginnings. People born under this sign are known for their bold, pioneering spirit and natural confidence. They approach life with enthusiasm and are often the first to take action in any situation. Aries energy is direct and assertive \u2014 they prefer to lead rather than follow, and their competitive nature drives them to excel in challenges. In relationships, Aries values honesty and can be protective of those they care about. Their ruling planet Mars gives them a strong physical drive and a warrior-like approach to obstacles.",
    loveStyle: "Aries falls in love quickly and passionately. They enjoy the thrill of the chase and prefer partners who match their energy and independence. They need someone who can keep up with their fast-paced lifestyle while also providing emotional warmth. Aries partners are loyal and protective, though they may struggle with routine in long-term relationships.",
    careerStyle: "Aries thrives in dynamic, fast-paced work environments. They excel as entrepreneurs, athletes, military personnel, emergency responders, and leaders in competitive fields. Their natural confidence makes them effective at pitching ideas and motivating teams, though they may need to develop patience with slower-moving projects."
  },
  {
    name: "Taurus",
    symbol: "\u2649",
    element: "Earth",
    modality: "Fixed",
    ruling_planet: "Venus",
    dateRange: "Apr 20 \u2013 May 20",
    startMonth: 4, startDay: 20, endMonth: 5, endDay: 20,
    traits: ["Reliable", "Patient", "Practical", "Devoted"],
    strengths: ["Extremely dependable", "Patient and persistent", "Excellent with finances", "Loyal and grounded"],
    weaknesses: ["Can be stubborn", "Resistant to change", "May be possessive", "Slow to adapt"],
    compatibility: ["Virgo", "Capricorn", "Cancer", "Pisces"],
    description: "Taurus is an earth sign known for its grounded, practical approach to life. Ruled by Venus, Taureans have a deep appreciation for beauty, comfort, and the finer things in life. They are among the most reliable signs in the zodiac, valued for their steadfast nature and ability to see projects through to completion. Taurus individuals build their lives carefully, preferring stability and security over risk and uncertainty. Their patience is legendary, and they are willing to work steadily toward long-term goals. In their personal lives, Taureans are devoted partners who create warm, comfortable homes and lasting friendships.",
    loveStyle: "Taurus loves deeply and consistently. They express love through acts of service, physical affection, and creating comfortable experiences for their partner. They seek stability in relationships and are attracted to partners who share their values around loyalty and commitment. Taurus can be slow to open up but is fiercely loyal once committed.",
    careerStyle: "Taurus excels in careers involving finance, real estate, agriculture, luxury goods, culinary arts, and any field that rewards patience and consistency. They are excellent managers who create stable work environments and are valued for their reliability and practical problem-solving."
  },
  {
    name: "Gemini",
    symbol: "\u264A",
    element: "Air",
    modality: "Mutable",
    ruling_planet: "Mercury",
    dateRange: "May 21 \u2013 Jun 20",
    startMonth: 5, startDay: 21, endMonth: 6, endDay: 20,
    traits: ["Adaptable", "Curious", "Communicative", "Witty"],
    strengths: ["Quick learner", "Excellent communicator", "Versatile and adaptable", "Socially skilled"],
    weaknesses: ["Can be inconsistent", "May overthink", "Struggles with deep focus", "Restless nature"],
    compatibility: ["Libra", "Aquarius", "Aries", "Leo"],
    description: "Gemini is the zodiac's communicator, ruled by Mercury, the planet of intellect and expression. People born under Gemini are known for their quick wit, versatility, and insatiable curiosity about the world. They thrive on mental stimulation and are often skilled conversationalists who can discuss virtually any topic with enthusiasm and insight. Gemini energy is adaptable and changeable, which allows them to navigate diverse social situations with ease. They are natural networkers who collect experiences, ideas, and connections throughout their lives. While their versatility is a strength, Geminis sometimes struggle with maintaining focus on a single pursuit for extended periods.",
    loveStyle: "Gemini needs mental stimulation in love. They are attracted to intelligent, witty partners who can engage in lively conversation. They value personal freedom within relationships and need a partner who understands their need for variety and social connection. Communication is the foundation of any successful relationship with a Gemini.",
    careerStyle: "Gemini excels in communication-based careers: journalism, writing, teaching, marketing, public relations, sales, and media. Their adaptability allows them to thrive in fast-changing industries, and their natural curiosity makes them excellent researchers and content creators."
  },
  {
    name: "Cancer",
    symbol: "\u264B",
    element: "Water",
    modality: "Cardinal",
    ruling_planet: "Moon",
    dateRange: "Jun 21 \u2013 Jul 22",
    startMonth: 6, startDay: 21, endMonth: 7, endDay: 22,
    traits: ["Nurturing", "Intuitive", "Protective", "Emotional"],
    strengths: ["Deeply empathetic", "Strong intuition", "Loyal and protective", "Excellent memory"],
    weaknesses: ["Can be moody", "May be overly sensitive", "Fear of rejection", "Tendency to withdraw"],
    compatibility: ["Scorpio", "Pisces", "Taurus", "Virgo"],
    description: "Cancer is a water sign ruled by the Moon, which gives its natives a deep emotional intelligence and powerful intuition. People born under Cancer are the natural caretakers of the zodiac, known for their nurturing nature and ability to create emotional safety for those around them. They experience emotions deeply and are often the first to notice when someone in their circle needs support. Cancer individuals are fiercely protective of their loved ones and their home life. They build emotional bonds slowly but form attachments that last a lifetime. Their connection to the Moon makes them sensitive to cycles and changes, which can manifest as strong moods but also gives them remarkable empathy.",
    loveStyle: "Cancer loves with their whole heart. They seek emotional depth and security in relationships, and they express love through caring for their partner's needs. They are romantic and devoted, creating a nurturing home environment. Cancer needs reassurance and emotional honesty from their partner, and they can be deeply hurt by betrayal or inconsistency.",
    careerStyle: "Cancer excels in caring professions: healthcare, counseling, education, social work, and human resources. They are also excellent in real estate, hospitality, and any field that involves creating comfort for others. Their strong intuition serves them well in psychology, research, and creative fields."
  },
  {
    name: "Leo",
    symbol: "\u264C",
    element: "Fire",
    modality: "Fixed",
    ruling_planet: "Sun",
    dateRange: "Jul 23 \u2013 Aug 22",
    startMonth: 7, startDay: 23, endMonth: 8, endDay: 22,
    traits: ["Confident", "Generous", "Creative", "Charismatic"],
    strengths: ["Natural leadership", "Warm and generous", "Creative vision", "Infectious enthusiasm"],
    weaknesses: ["Can be prideful", "Needs recognition", "May be dramatic", "Struggles with criticism"],
    compatibility: ["Aries", "Sagittarius", "Gemini", "Libra"],
    description: "Leo is ruled by the Sun, the center of our solar system, and Leos often feel a natural pull toward the center of attention. They are among the most charismatic and confident signs of the zodiac, blessed with a warm, generous spirit that draws people toward them. Leos have a creative fire that expresses itself through art, performance, leadership, and self-expression. They take genuine pride in their achievements and the achievements of those they love, celebrating success with heartfelt enthusiasm. Under their confident exterior, Leos have a deeply loyal and protective nature, especially toward family and close friends. They value honor and respect, and they are willing to fight for the people and causes they believe in.",
    loveStyle: "Leo loves grandly and generously. They enjoy romantic gestures and appreciate a partner who celebrates them. They are warm, playful, and deeply loyal in relationships. Leo needs to feel admired and valued, and they return that devotion with fierce loyalty and protective care. They thrive in relationships where both partners shine.",
    careerStyle: "Leo excels in leadership, entertainment, fashion, creative arts, and any field that puts them in the spotlight. They make inspiring managers and team leaders who motivate others through enthusiasm. Their creative vision serves them well in design, theater, event planning, and entrepreneurship."
  },
  {
    name: "Virgo",
    symbol: "\u264D",
    element: "Earth",
    modality: "Mutable",
    ruling_planet: "Mercury",
    dateRange: "Aug 23 \u2013 Sep 22",
    startMonth: 8, startDay: 23, endMonth: 9, endDay: 22,
    traits: ["Analytical", "Practical", "Diligent", "Detail-oriented"],
    strengths: ["Exceptional attention to detail", "Strong analytical mind", "Reliable and hardworking", "Problem solver"],
    weaknesses: ["Can be overly critical", "Perfectionist tendencies", "May overthink", "Self-critical nature"],
    compatibility: ["Taurus", "Capricorn", "Cancer", "Scorpio"],
    description: "Virgo is an earth sign ruled by Mercury, combining practical earth energy with Mercurial intellect. People born under Virgo are known for their analytical minds, attention to detail, and genuine desire to be of service to others. They are the problem-solvers of the zodiac, approaching challenges with a systematic, methodical approach that often yields impressive results. Virgos have a natural talent for organization and improvement, always seeing how things could be done better, more efficiently, or more beautifully. Despite their reputation for being critical, Virgos are often hardest on themselves. Their high standards come from a genuine desire for excellence and a deep care for quality in everything they do.",
    loveStyle: "Virgo expresses love through practical acts of service. They show they care by noticing the small details, helping with tasks, and ensuring their partner's comfort. They seek a partner who appreciates their thoughtfulness and shares their values of loyalty and commitment. Virgo may take time to open up emotionally but proves deeply devoted once committed.",
    careerStyle: "Virgo excels in analytical and service-oriented careers: medicine, research, accounting, editing, quality assurance, data analysis, health sciences, and administration. Their detail-oriented nature makes them exceptional in any role that requires precision, and they are valued for their ability to improve systems and processes."
  },
  {
    name: "Libra",
    symbol: "\u264E",
    element: "Air",
    modality: "Cardinal",
    ruling_planet: "Venus",
    dateRange: "Sep 23 \u2013 Oct 22",
    startMonth: 9, startDay: 23, endMonth: 10, endDay: 22,
    traits: ["Diplomatic", "Fair-minded", "Social", "Aesthetic"],
    strengths: ["Natural peacemaker", "Excellent taste", "Strong sense of justice", "Charming communicator"],
    weaknesses: ["Can be indecisive", "Avoids confrontation", "May people-please", "Struggles with being alone"],
    compatibility: ["Gemini", "Aquarius", "Leo", "Sagittarius"],
    description: "Libra is an air sign ruled by Venus, combining intellectual air energy with Venusian appreciation for beauty and harmony. People born under Libra are the diplomats of the zodiac, gifted with a natural ability to see multiple perspectives and find common ground between opposing viewpoints. They have a refined aesthetic sense and a deep appreciation for art, music, and design. Libras value fairness and justice above almost everything else, and they will go to great lengths to ensure that everyone around them is treated equitably. Their social grace makes them excellent mediators and conversationalists who can put almost anyone at ease. While their desire for harmony is admirable, Libras sometimes struggle with making decisions and may avoid necessary confrontation.",
    loveStyle: "Libra is one of the most romantic signs of the zodiac. They seek partnership and companionship, thriving in balanced, harmonious relationships. They express love through romance, thoughtful gestures, and creating beautiful experiences. Libra needs a partner who appreciates aesthetics, values communication, and is willing to work through conflicts constructively.",
    careerStyle: "Libra excels in careers involving negotiation, design, law, human resources, diplomacy, public relations, and the arts. Their sense of balance and fairness makes them excellent judges, mediators, and advisors. They thrive in collaborative environments where their social skills and aesthetic sensibilities are valued."
  },
  {
    name: "Scorpio",
    symbol: "\u264F",
    element: "Water",
    modality: "Fixed",
    ruling_planet: "Pluto",
    dateRange: "Oct 23 \u2013 Nov 21",
    startMonth: 10, startDay: 23, endMonth: 11, endDay: 21,
    traits: ["Intense", "Passionate", "Resourceful", "Perceptive"],
    strengths: ["Deeply loyal", "Exceptional perception", "Emotional courage", "Transformative power"],
    weaknesses: ["Can be secretive", "Struggles with trust", "May be possessive", "Holds grudges"],
    compatibility: ["Cancer", "Pisces", "Virgo", "Capricorn"],
    description: "Scorpio is a water sign ruled by Pluto, the planet of transformation and the underworld. People born under Scorpio are among the most intense and perceptive individuals in the zodiac. They experience life at a profound emotional depth and have an almost uncanny ability to see beyond surface appearances to the truth beneath. Scorpios value authenticity above all else and have zero tolerance for deception or superficiality. Their emotional courage allows them to face life's darkest moments with resilience, and their capacity for transformation is unmatched. When a Scorpio commits to something \u2014 whether a relationship, a project, or a personal goal \u2014 they pursue it with total dedication and intensity.",
    loveStyle: "Scorpio loves with rare intensity and depth. They seek transformative, soul-level connections in relationships. Trust is paramount for Scorpio, and once earned, their loyalty is absolute. They are passionate, deeply emotional partners who value authenticity above all else. Scorpio needs a partner willing to explore emotional depths and who won't shy away from difficult conversations.",
    careerStyle: "Scorpio excels in careers involving investigation, psychology, research, finance, crisis management, surgery, and any field requiring depth and persistence. Their ability to see beneath the surface makes them excellent detectives, therapists, and strategists. They thrive in challenging environments that require emotional resilience."
  },
  {
    name: "Sagittarius",
    symbol: "\u2650",
    element: "Fire",
    modality: "Mutable",
    ruling_planet: "Jupiter",
    dateRange: "Nov 22 \u2013 Dec 21",
    startMonth: 11, startDay: 22, endMonth: 12, endDay: 21,
    traits: ["Adventurous", "Optimistic", "Philosophical", "Independent"],
    strengths: ["Natural teacher", "Boundless optimism", "Cultural curiosity", "Honest and direct"],
    weaknesses: ["Can be tactless", "Restless nature", "May overcommit", "Struggles with details"],
    compatibility: ["Aries", "Leo", "Libra", "Aquarius"],
    description: "Sagittarius is a fire sign ruled by Jupiter, the planet of expansion and wisdom. People born under Sagittarius are the explorers and philosophers of the zodiac, driven by an insatiable hunger for knowledge, experience, and understanding. They approach life with infectious optimism and an open-minded curiosity that takes them to new places, both physical and intellectual. Sagittarians value freedom above almost everything else, and they resist anything that feels restrictive or limiting. Their honesty can sometimes be blunt, but it comes from a genuine desire for truth and authenticity. Sagittarius individuals are natural storytellers who can inspire others with their visions of what's possible. They find meaning through travel, learning, and expanding their understanding of the world.",
    loveStyle: "Sagittarius approaches love with the same adventurous spirit they bring to everything else. They need a partner who values independence and shares their love of exploration. They are generous, fun-loving, and open-minded in relationships. Sagittarius values intellectual connection and shared adventures over traditional romantic structures.",
    careerStyle: "Sagittarius excels in careers involving travel, education, publishing, philosophy, outdoor leadership, international relations, and entrepreneurship. Their natural teaching ability makes them excellent professors, coaches, and mentors. They thrive in roles that allow them to explore, learn, and share knowledge."
  },
  {
    name: "Capricorn",
    symbol: "\u2651",
    element: "Earth",
    modality: "Cardinal",
    ruling_planet: "Saturn",
    dateRange: "Dec 22 \u2013 Jan 19",
    startMonth: 12, startDay: 22, endMonth: 1, endDay: 19,
    traits: ["Disciplined", "Ambitious", "Responsible", "Strategic"],
    strengths: ["Exceptional self-discipline", "Strategic thinking", "Long-term vision", "Reliable and dependable"],
    weaknesses: ["Can be overly serious", "Workaholic tendencies", "May seem cold", "Struggles with vulnerability"],
    compatibility: ["Taurus", "Virgo", "Scorpio", "Pisces"],
    description: "Capricorn is an earth sign ruled by Saturn, the planet of structure, responsibility, and time. People born under Capricorn are the architects of the zodiac, known for their ambition, discipline, and strategic approach to achieving their goals. They understand that lasting success requires patience, hard work, and careful planning, and they are willing to invest years of effort into building something meaningful. Capricorns are often described as old souls who carry a natural sense of authority and maturity. Their humor is dry and understated, and their loyalty is unwavering. While their serious exterior can make them seem reserved, those who earn a Capricorn's trust discover a warm, deeply caring individual with a sharp wit.",
    loveStyle: "Capricorn approaches love with seriousness and commitment. They seek a partner who shares their values of loyalty, ambition, and stability. They express love through providing security, planning for the future, and being a reliable presence. Capricorn may take time to open up emotionally but builds some of the most enduring relationships in the zodiac.",
    careerStyle: "Capricorn excels in business, finance, management, engineering, architecture, law, government, and any field that rewards strategic thinking and persistence. They are natural leaders who build lasting institutions and are valued for their ability to manage complex projects and make sound long-term decisions."
  },
  {
    name: "Aquarius",
    symbol: "\u2652",
    element: "Air",
    modality: "Fixed",
    ruling_planet: "Uranus",
    dateRange: "Jan 20 \u2013 Feb 18",
    startMonth: 1, startDay: 20, endMonth: 2, endDay: 18,
    traits: ["Innovative", "Humanitarian", "Independent", "Intellectual"],
    strengths: ["Visionary thinking", "Strong humanitarian values", "Independent spirit", "Problem-solving ability"],
    weaknesses: ["Can be emotionally detached", "Stubbornly independent", "May seem aloof", "Resistance to intimacy"],
    compatibility: ["Gemini", "Libra", "Aries", "Sagittarius"],
    description: "Aquarius is an air sign ruled by Uranus, the planet of innovation and revolution. People born under Aquarius are the visionaries and humanitarians of the zodiac, known for their unconventional thinking and genuine concern for the welfare of humanity. They see the world not just as it is, but as it could be, and they are often driven by ideals that may seem ahead of their time. Aquarians value intellectual freedom and individuality above conformity, and they are willing to challenge established norms when those norms no longer serve the greater good. Despite their reputation for being emotionally detached, Aquarians care deeply about people at a collective level. They express their caring through activism, innovation, and the creation of systems that benefit everyone.",
    loveStyle: "Aquarius approaches love with intellectual curiosity and a need for friendship first. They seek a partner who respects their need for independence and shares their humanitarian values. They are loyal but unconventional in relationships, valuing mental connection and shared ideals over traditional romantic structures. Aquarius needs space and stimulation to feel fulfilled in love.",
    careerStyle: "Aquarius excels in technology, science, social activism, humanitarian work, innovation, aerospace, environmental fields, and any cutting-edge industry. Their ability to think outside conventional frameworks makes them natural innovators and disruptors. They thrive in collaborative environments focused on positive change."
  },
  {
    name: "Pisces",
    symbol: "\u2653",
    element: "Water",
    modality: "Mutable",
    ruling_planet: "Neptune",
    dateRange: "Feb 19 \u2013 Mar 20",
    startMonth: 2, startDay: 19, endMonth: 3, endDay: 20,
    traits: ["Compassionate", "Intuitive", "Creative", "Empathetic"],
    strengths: ["Deep empathy", "Rich imagination", "Artistic talent", "Spiritual awareness"],
    weaknesses: ["Can be overly idealistic", "Boundary issues", "May escape reality", "Easily overwhelmed"],
    compatibility: ["Cancer", "Scorpio", "Taurus", "Capricorn"],
    description: "Pisces is a water sign ruled by Neptune, the planet of dreams, imagination, and spirituality. People born under Pisces are the most intuitive and empathetic signs of the zodiac, gifted with an almost psychic ability to sense the emotions and needs of others. They experience life through a rich inner world of imagination, creativity, and spiritual awareness that can produce extraordinary art, music, and literature. Pisceans have a chameleon-like ability to adapt to their surroundings, absorbing the energy of people and environments around them. This sensitivity is both their greatest gift and their greatest challenge, as they can become overwhelmed by the emotions they absorb. Pisces individuals are natural healers and artists who find meaning through creative expression and service to others.",
    loveStyle: "Pisces loves with deep, selfless devotion. They seek soulmate-level connections and are drawn to partners who appreciate their emotional depth and creativity. They express love through romantic gestures, creative expression, and emotional support. Pisces needs a partner who provides stability without dampening their imagination and who understands their need for spiritual and emotional connection.",
    careerStyle: "Pisces excels in creative and healing professions: music, art, writing, film, counseling, healthcare, spiritual work, charity, and any field that allows them to express their imagination and compassion. Their intuition serves them well in psychology, social work, and roles that require emotional intelligence."
  }
];

// Chinese Zodiac data
export interface ChineseZodiac {
  animal: string;
  symbol: string;
  years: number[];
  element: string;
  yin_yang: string;
  traits: string[];
  compatibility: string[];
  description: string;
}

export const chineseZodiacAnimals: ChineseZodiac[] = [
  { animal: "Rat", symbol: "\ud83d\udc00", years: [2020, 2008, 1996, 1984, 1972, 1960], element: "Water", yin_yang: "Yang",
    traits: ["Quick-witted", "Resourceful", "Versatile", "Kind"],
    compatibility: ["Dragon", "Monkey", "Ox"],
    description: "People born in the Year of the Rat are clever, quick-thinking, and successful but content with living a quiet and peaceful life. They are very adaptable and creative, with strong intuition that helps them anticipate and quickly respond to changes. Rats are natural problem-solvers who can find opportunities where others see obstacles. Their social nature makes them popular, and they maintain extensive networks of friends and acquaintances. Financially savvy, Rats tend to accumulate wealth through careful planning and keen observation of market trends." },
  { animal: "Ox", symbol: "\ud83d\udc02", years: [2021, 2009, 1997, 1985, 1973, 1961], element: "Earth", yin_yang: "Yin",
    traits: ["Diligent", "Dependable", "Strong", "Determined"],
    compatibility: ["Rat", "Snake", "Rooster"],
    description: "Ox people are known for diligence, dependability, strength, and determination. They are honest and earnest, patient and tireless in their work. Ox individuals are not easily influenced by others or their environment, and they persist in doing things according to their ideals and capabilities. Before taking action, Ox people will have a definite plan with detailed steps. They are not easily distracted from their goals and are respected for their integrity and reliability in both personal and professional relationships." },
  { animal: "Tiger", symbol: "\ud83d\udc2f", years: [2022, 2010, 1998, 1986, 1974, 1962], element: "Wood", yin_yang: "Yang",
    traits: ["Brave", "Competitive", "Confident", "Charismatic"],
    compatibility: ["Dragon", "Horse", "Pig"],
    description: "Tiger people are brave, competitive, unpredictable, and confident. They are very charming and well-liked by others. Tigers are natural born leaders and love a good challenge. They are candid, adventurous, and ambitious, with a strong sense of justice and a willingness to fight for what they believe is right. Their courage and confidence inspire others, though their bold nature can sometimes lead to impulsive decisions. Tigers are generous and possess a great sense of humor." },
  { animal: "Rabbit", symbol: "\ud83d\udc30", years: [2023, 2011, 1999, 1987, 1975, 1963], element: "Wood", yin_yang: "Yin",
    traits: ["Gentle", "Quiet", "Elegant", "Alert"],
    compatibility: ["Sheep", "Monkey", "Dog", "Pig"],
    description: "Rabbits are gentle, quiet, elegant, and alert, as well as quick, skillful, kind, and patient. They are particularly artistic and have excellent taste. Rabbit people enjoy being surrounded by beauty and comfort. They are compassionate and empathetic, often putting others' needs before their own. Their diplomatic nature helps them navigate social situations with grace, and they avoid conflict whenever possible. Rabbits are thorough and detail-oriented, making them excellent in roles that require precision." },
  { animal: "Dragon", symbol: "\ud83d\udc32", years: [2024, 2012, 2000, 1988, 1976, 1964], element: "Earth", yin_yang: "Yang",
    traits: ["Confident", "Intelligent", "Enthusiastic", "Ambitious"],
    compatibility: ["Rooster", "Rat", "Monkey"],
    description: "Dragons are the most revered sign in Chinese astrology, symbolizing power, nobility, honor, luck, and success. Dragon people are energetic, fearless, warm-hearted, and charismatic. They are natural leaders who inspire others with their vision and enthusiasm. Dragons are confident and ambitious, setting high standards for themselves and those around them. They possess an innate charisma that draws people to them, and they often find themselves in leadership positions." },
  { animal: "Snake", symbol: "\ud83d\udc0d", years: [2025, 2013, 2001, 1989, 1977, 1965], element: "Fire", yin_yang: "Yin",
    traits: ["Wise", "Intuitive", "Elegant", "Mysterious"],
    compatibility: ["Dragon", "Rooster", "Ox"],
    description: "Snake people are wise, mysterious, intuitive, and elegant. They are deep thinkers who prefer to work behind the scenes rather than in the spotlight. Snakes are sophisticated and charming, with a natural elegance that others find captivating. They are strategic and patient, waiting for the right moment to act. Snake individuals value privacy and can be secretive about their plans and thoughts, but they are extremely loyal to their inner circle." },
  { animal: "Horse", symbol: "\ud83d\udc34", years: [2026, 2014, 2002, 1990, 1978, 1966], element: "Fire", yin_yang: "Yang",
    traits: ["Energetic", "Independent", "Warm-hearted", "Outgoing"],
    compatibility: ["Tiger", "Sheep", "Rabbit"],
    description: "Horse people are energetic, independent, impatient, and enjoy traveling. They are warm-hearted and easygoing, making them popular among friends. Horse individuals love being in the spotlight and have a natural talent for entertaining. They are incredibly hardworking and independent, with a strong desire for freedom. Their enthusiasm is infectious, and they motivate others with their positive outlook and energetic approach to life's challenges." },
  { animal: "Sheep", symbol: "\ud83d\udc11", years: [2027, 2015, 2003, 1991, 1979, 1967], element: "Earth", yin_yang: "Yin",
    traits: ["Calm", "Gentle", "Creative", "Compassionate"],
    compatibility: ["Horse", "Rabbit", "Pig"],
    description: "Sheep (Goat) people are calm, gentle, and sympathetic. They are creative and have a strong appreciation for art and beauty. Sheep individuals are kind-hearted and compassionate, always willing to help others in need. They prefer a peaceful environment and avoid confrontation. Their gentle nature makes them excellent mediators, and they have a natural ability to create harmony in group settings. Sheep are also known for their perseverance and resilience." },
  { animal: "Monkey", symbol: "\ud83d\udc35", years: [2028, 2016, 2004, 1992, 1980, 1968], element: "Metal", yin_yang: "Yang",
    traits: ["Sharp", "Smart", "Curious", "Creative"],
    compatibility: ["Ox", "Rabbit", "Dragon"],
    description: "Monkey people are sharp, smart, curiosity-driven, and creative. They are natural entertainers who can adapt to any situation. Monkeys are incredibly clever and resourceful, able to solve complex problems with innovative approaches. They are social butterflies who enjoy being the center of attention. Their quick wit and sense of humor make them popular wherever they go. Monkeys are also strategic thinkers who plan several steps ahead." },
  { animal: "Rooster", symbol: "\ud83d\udc13", years: [2029, 2017, 2005, 1993, 1981, 1969], element: "Metal", yin_yang: "Yin",
    traits: ["Observant", "Hardworking", "Courageous", "Talented"],
    compatibility: ["Ox", "Snake", "Dragon"],
    description: "Rooster people are very observant, hardworking, and courageous. They are talented and very devoted to their work. Roosters have a keen eye for detail and are perfectionists who take great pride in their appearance and work. They are honest and straightforward, sometimes to a fault. Rooster individuals are organized, responsible, and excellent at managing their time and resources. Their confidence and self-assurance make them natural leaders." },
  { animal: "Dog", symbol: "\ud83d\udc36", years: [2030, 2018, 2006, 1994, 1982, 1970], element: "Earth", yin_yang: "Yang",
    traits: ["Loyal", "Honest", "Amiable", "Prudent"],
    compatibility: ["Rabbit", "Tiger", "Horse"],
    description: "Dog people are loyal, honest, amiable, kind, cautious, and prudent. They are deeply devoted to their family and friends, and will go to great lengths to protect those they love. Dog individuals have a strong sense of justice and fair play. They are reliable, hardworking, and have excellent judgment of character. Their loyalty is unwavering, and they make some of the most trusted friends and partners in the zodiac." },
  { animal: "Pig", symbol: "\ud83d\udc37", years: [2031, 2019, 2007, 1995, 1983, 1971], element: "Water", yin_yang: "Yin",
    traits: ["Compassionate", "Generous", "Diligent", "Warm-hearted"],
    compatibility: ["Tiger", "Rabbit", "Sheep"],
    description: "Pig people are compassionate, generous, diligent, and warm-hearted. They have a beautiful personality and are blessed with good fortune in life. Pig individuals are known for their generosity and big hearts, always willing to share what they have with others. They enjoy life's pleasures and have a natural ability to find happiness in simple things. Despite their easygoing nature, Pigs are hardworking and dedicated to achieving their goals." }
];

// Planet data for interpretations
export const planets = [
  { name: "Sun", symbol: "\u2609", domain: "Identity, ego, vitality" },
  { name: "Moon", symbol: "\u263D", domain: "Emotions, instincts, habits" },
  { name: "Mercury", symbol: "\u263F", domain: "Communication, thinking, learning" },
  { name: "Venus", symbol: "\u2640", domain: "Love, beauty, values" },
  { name: "Mars", symbol: "\u2642", domain: "Action, desire, courage" },
  { name: "Jupiter", symbol: "\u2643", domain: "Growth, wisdom, abundance" },
  { name: "Saturn", symbol: "\u2644", domain: "Discipline, structure, responsibility" }
];

// Numerology data
export const lifePathMeanings: Record<number, string> = {
  1: "The Leader \u2014 Independent, original, and ambitious. Life Path 1 individuals are natural pioneers who forge their own path. They possess strong leadership qualities, creative vision, and the determination to achieve their goals. Their challenge is learning to balance independence with collaboration.",
  2: "The Diplomat \u2014 Sensitive, cooperative, and balanced. Life Path 2 individuals are natural peacemakers who excel in partnerships and group settings. They have heightened intuition and empathy, making them excellent mediators. Their challenge is avoiding indecision and learning to assert their own needs.",
  3: "The Communicator \u2014 Creative, expressive, and joyful. Life Path 3 individuals are blessed with natural creativity and communication skills. They bring joy and inspiration to others through art, words, and social interaction. Their challenge is maintaining focus and not scattering their creative energy.",
  4: "The Builder \u2014 Practical, organized, and reliable. Life Path 4 individuals are the foundation-builders of numerology. They excel at creating stable structures, whether in business, relationships, or personal development. Their challenge is remaining flexible and not becoming too rigid in their thinking.",
  5: "The Adventurer \u2014 Versatile, curious, and freedom-loving. Life Path 5 individuals crave variety, travel, and new experiences. They are adaptable and resourceful, thriving in dynamic environments. Their challenge is committing to one path long enough to build lasting achievements.",
  6: "The Nurturer \u2014 Responsible, caring, and harmonious. Life Path 6 individuals are the caretakers who find deep fulfillment in service to family and community. They have strong aesthetic sensibilities and create beauty around them. Their challenge is setting healthy boundaries and avoiding self-sacrifice.",
  7: "The Seeker \u2014 Analytical, spiritual, and introspective. Life Path 7 individuals are drawn to knowledge, truth, and deeper understanding. They are natural researchers and philosophers who question everything. Their challenge is connecting with others emotionally and not becoming too isolated in their pursuit of knowledge.",
  8: "The Powerhouse \u2014 Ambitious, business-minded, and authoritative. Life Path 8 individuals are natural managers who understand the material world and how to create abundance. They have strong leadership abilities and a talent for organizing people and resources. Their challenge is finding balance between material success and inner fulfillment.",
  9: "The Humanitarian \u2014 Compassionate, generous, and wise. Life Path 9 individuals are the old souls of numerology who have experienced much and carry deep wisdom. They are naturally compassionate and drawn to service on a global scale. Their challenge is letting go of the past and embracing new beginnings."
};

// Moon phase data
export const moonPhases = [
  { name: "New Moon", emoji: "\ud83c\udf11", description: "New beginnings, setting intentions, fresh starts. This is a time of darkness before the light returns, making it ideal for planting seeds of intention.", energy: "Introspective, planning" },
  { name: "Waxing Crescent", emoji: "\ud83c\udf12", description: "Growth, intention, and determination. As the moon begins to show its light, it's a time to nurture the intentions set during the new moon.", energy: "Hopeful, building" },
  { name: "First Quarter", emoji: "\ud83c\udf13", description: "Action, decision, and commitment. This phase challenges you to take decisive action toward your goals and push through obstacles.", energy: "Active, challenging" },
  { name: "Waxing Gibbous", emoji: "\ud83c\udf14", description: "Refinement, adjustment, and patience. As the moon nears fullness, it's time to refine your plans and adjust your approach.", energy: "Refining, adjusting" },
  { name: "Full Moon", emoji: "\ud83c\udf15", description: "Illumination, completion, and celebration. The full moon reveals what was hidden and marks a peak of energy and clarity.", energy: "Illuminating, completing" },
  { name: "Waning Gibbous", emoji: "\ud83c\udf16", description: "Gratitude, sharing, and reflection. As the moon begins to wane, it's a time to share what you've learned and express gratitude.", energy: "Grateful, sharing" },
  { name: "Last Quarter", emoji: "\ud83c\udf17", description: "Release, forgiveness, and letting go. This phase asks you to release what no longer serves you and make space for new growth.", energy: "Releasing, forgiving" },
  { name: "Waning Crescent", emoji: "\ud83c\udf18", description: "Rest, surrender, and preparation. As the cycle nears its end, it's a time for deep rest, meditation, and preparing for renewal.", energy: "Restful, surrendering" }
];

// Compatibility matrix
export const compatibilityMatrix: Record<string, Record<string, { score: number; summary: string }>> = {
  "Aries": { "Leo": { score: 95, summary: "A passionate fire-fire match filled with excitement, mutual admiration, and shared adventure. Both signs bring energy and enthusiasm." }, "Sagittarius": { score: 93, summary: "An adventurous and freedom-loving match. Both fire signs value independence and exploration, creating a dynamic, exciting partnership." }, "Gemini": { score: 85, summary: "A lively match of fire and air. Aries brings action while Gemini brings ideas. Communication flows easily, though depth may need work." }, "Aquarius": { score: 82, summary: "An exciting and unconventional match. Both value independence and originality, creating a partnership built on mutual respect for freedom." }, "Taurus": { score: 55, summary: "A challenging match of fire and earth. Aries moves fast while Taurus prefers stability. Both can learn from each other but need patience." }, "Cancer": { score: 50, summary: "A difficult match of fire and water. Aries is direct while Cancer is sensitive. With effort, Aries can learn gentleness and Cancer can learn directness." }, "Libra": { score: 60, summary: "An intriguing match of opposites. Aries charges ahead while Libra balances. Their different approaches can complement each other or create tension." }, "Capricorn": { score: 45, summary: "A challenging match that requires work. Aries is impulsive while Capricorn is deliberate. Both are cardinal signs with leadership energy, which can clash or create a power couple." }, "Scorpio": { score: 58, summary: "An intense and magnetic match. Both are passionate but express it differently. Trust is the key challenge and the greatest reward." }, "Virgo": { score: 52, summary: "A match that requires mutual adjustment. Aries is bold while Virgo is detail-oriented. With effort, they can balance each other's strengths." }, "Pisces": { score: 48, summary: "A challenging match of fire and water. Aries is direct while Pisces is sensitive and intuitive. Compassion from both sides can bridge the gap." }, "Aries": { score: 70, summary: "A passionate but potentially competitive match. Two Aries together create high energy but may struggle with compromise. Leadership needs to be shared." } },
  "Taurus": { "Virgo": { score: 92, summary: "A harmonious earth-earth match built on shared values, practical goals, and mutual reliability. Both appreciate stability and quality." }, "Capricorn": { score: 90, summary: "A grounded and ambitious earth-earth match. Both value hard work, loyalty, and building something lasting. Strong foundation for a serious commitment." }, "Cancer": { score: 88, summary: "A nurturing earth-water match. Taurus provides stability while Cancer provides emotional depth. Both value home, family, and loyalty." }, "Pisces": { score: 85, summary: "A gentle and romantic match. Taurus grounds Pisces' dreams while Pisces brings creativity and emotional richness. Both value love and beauty." }, "Taurus": { score: 75, summary: "A stable but potentially stubborn match. Two Taureans create comfort and luxury but may resist necessary change. Shared routines bring peace." }, "Scorpio": { score: 72, summary: "An intense and transformative match. Both are fixed signs with deep loyalty, but Taurus's calm can clash with Scorpio's intensity. Trust is essential." }, "Aries": { score: 55, summary: "A challenging match of fire and earth. Aries moves fast while Taurus prefers stability. Both can learn from each other but need patience." }, "Leo": { score: 53, summary: "A match of fixed determination. Both are strong-willed and loyal, but Taurus's practicality can clash with Leo's need for attention." }, "Gemini": { score: 48, summary: "A challenging match. Taurus craves stability while Gemini craves variety. Communication and compromise are key to making this work." }, "Libra": { score: 55, summary: "Both ruled by Venus, this match shares a love of beauty and pleasure. But Taurus is practical while Libra is intellectual. Finding common ground is possible." }, "Sagittarius": { score: 45, summary: "A difficult match. Taurus needs roots while Sagittarius needs wings. Without significant compromise, these needs are hard to reconcile." }, "Aquarius": { score: 42, summary: "A challenging match. Taurus is traditional while Aquarius is revolutionary. Both are fixed signs, which can lead to stubborn standoffs." } },
  "Gemini": { "Libra": { score: 93, summary: "A brilliant air-air match built on communication, shared social interests, and intellectual stimulation. Both love ideas, conversation, and beauty." }, "Aquarius": { score: 91, summary: "An innovative and stimulating air-air match. Both value intellectual freedom, social causes, and unconventional thinking. Never a dull moment." }, "Aries": { score: 85, summary: "A lively match of fire and air. Aries brings action while Gemini brings ideas. Communication flows easily, though depth may need work." }, "Leo": { score: 82, summary: "A fun and creative match. Leo brings warmth and leadership while Gemini brings wit and variety. Both enjoy socializing and creative expression." }, "Gemini": { score: 72, summary: "A social and mentally stimulating match. Two Geminis create endless conversation and variety, but may struggle with commitment and follow-through." }, "Sagittarius": { score: 80, summary: "An adventurous match of two mutable signs. Both love freedom, learning, and exploration. A great match for travel, ideas, and shared adventures." }, "Taurus": { score: 48, summary: "A challenging match. Taurus craves stability while Gemini craves variety. Communication and compromise are key to making this work." }, "Cancer": { score: 45, summary: "A difficult match of air and water. Gemini's logic can feel cold to Cancer's emotions. Both need to develop the other's language." }, "Virgo": { score: 58, summary: "Both ruled by Mercury, this match shares communication skills but differs in approach. Gemini is broad while Virgo is deep. Mutual respect is key." }, "Scorpio": { score: 40, summary: "A very challenging match. Gemini's lightness clashes with Scorpio's intensity. Trust and depth are the main challenges in this pairing." }, "Capricorn": { score: 42, summary: "A challenging match. Gemini is playful while Capricorn is serious. Both are clever but approach life from very different angles." }, "Pisces": { score: 52, summary: "A match of complementary elements. Gemini brings logic while Pisces brings intuition. Both are mutable and adaptable, which helps bridge differences." } },
  "Cancer": { "Scorpio": { score: 95, summary: "A deeply emotional water-water match. Both value emotional depth, loyalty, and intimacy. One of the most passionate and transformative combinations." }, "Pisces": { score: 92, summary: "A deeply intuitive water-water match. Both are emotionally sensitive and empathetic, creating a relationship of mutual understanding and care." }, "Taurus": { score: 88, summary: "A nurturing earth-water match. Taurus provides stability while Cancer provides emotional depth. Both value home, family, and loyalty." }, "Virgo": { score: 82, summary: "A practical and caring match. Virgo's attention to detail complements Cancer's emotional intuition. Both are devoted and hardworking." }, "Cancer": { score: 70, summary: "An emotionally rich but potentially moody match. Two Cancers create deep understanding but may reinforce each other's insecurities." }, "Capricorn": { score: 78, summary: "An opposition match that can create balance. Cancer is emotional while Capricorn is practical. Together they can build a secure, nurturing home life." }, "Aries": { score: 50, summary: "A difficult match of fire and water. Aries is direct while Cancer is sensitive. With effort, Aries can learn gentleness and Cancer can learn directness." }, "Leo": { score: 55, summary: "An intriguing match. Leo needs applause while Cancer needs emotional security. Both are loyal and protective, which can be a strong foundation." }, "Gemini": { score: 45, summary: "A difficult match of air and water. Gemini's logic can feel cold to Cancer's emotions. Both need to develop the other's language." }, "Libra": { score: 48, summary: "A challenging match. Cancer seeks emotional depth while Libra seeks intellectual balance. Both value relationships but approach them differently." }, "Sagittarius": { score: 40, summary: "A very challenging match. Cancer needs roots while Sagittarius needs wings. Their fundamental needs for security and freedom conflict." }, "Aquarius": { score: 38, summary: "A difficult match. Cancer is emotionally focused while Aquarius is intellectually focused. Both are caring but express it very differently." } },
  "Leo": { "Aries": { score: 93, summary: "A passionate fire-fire match filled with excitement, mutual admiration, and shared adventure. Both signs bring energy and enthusiasm." }, "Sagittarius": { score: 92, summary: "An enthusiastic and optimistic fire-fire match. Both love adventure, growth, and living life to the fullest. A joyful and expansive partnership." }, "Gemini": { score: 82, summary: "A fun and creative match. Leo brings warmth and leadership while Gemini brings wit and variety. Both enjoy socializing and creative expression." }, "Libra": { score: 80, summary: "A romantic and aesthetically pleasing match. Both ruled by different aspects of creativity and beauty. Leo's warmth complements Libra's grace." }, "Leo": { score: 72, summary: "A dramatic and passionate match. Two Leos create warmth, generosity, and creativity, but may compete for the spotlight. Shared attention is key." }, "Virgo": { score: 52, summary: "A match of opposites. Leo craves attention while Virgo prefers behind-the-scenes. Both are capable and hardworking but express it differently." }, "Taurus": { score: 53, summary: "A match of fixed determination. Both are strong-willed and loyal, but Taurus's practicality can clash with Leo's need for attention." }, "Cancer": { score: 55, summary: "An intriguing match. Leo needs applause while Cancer needs emotional security. Both are loyal and protective, which can be a strong foundation." }, "Scorpio": { score: 58, summary: "An intense and powerful match. Both are fixed signs with strong wills. Leo's warmth can melt Scorpio's defenses, creating deep loyalty." }, "Capricorn": { score: 55, summary: "A challenging but potentially powerful match. Both are ambitious leaders who approach goals differently. Mutual respect is the foundation." }, "Aquarius": { score: 50, summary: "A challenging match. Leo is personal while Aquarius is impersonal. Both are fixed signs with strong opinions, which can create stubborn conflicts." }, "Pisces": { score: 55, summary: "A creative and compassionate match. Leo's warmth helps Pisces' confidence, while Pisces' empathy softens Leo's ego. Both are generous." } },
  "Virgo": { "Taurus": { score: 92, summary: "A harmonious earth-earth match built on shared values, practical goals, and mutual reliability. Both appreciate stability and quality." }, "Capricorn": { score: 90, summary: "A practical and ambitious earth-earth match. Both value hard work, competence, and achievement. A power couple built on mutual respect." }, "Cancer": { score: 82, summary: "A practical and caring match. Virgo's attention to detail complements Cancer's emotional intuition. Both are devoted and hardworking." }, "Scorpio": { score: 85, summary: "An intense and transformative match. Both value depth and authenticity. Virgo's analysis meets Scorpio's intuition in a powerful combination." }, "Virgo": { score: 72, summary: "A practical and supportive match. Two Virgos create efficiency and high standards, but may reinforce each other's perfectionism." }, "Gemini": { score: 58, summary: "Both ruled by Mercury, this match shares communication skills but differs in approach. Gemini is broad while Virgo is deep. Mutual respect is key." }, "Pisces": { score: 70, summary: "A complementary match of mutable signs. Virgo brings practicality while Pisces brings imagination. Both are caring and willing to serve others." }, "Aries": { score: 52, summary: "A match that requires mutual adjustment. Aries is bold while Virgo is detail-oriented. With effort, they can balance each other's strengths." }, "Leo": { score: 52, summary: "A match of opposites. Leo craves attention while Virgo prefers behind-the-scenes. Both are capable and hardworking but express it differently." }, "Libra": { score: 50, summary: "A challenging match. Virgo is critical while Libra avoids conflict. Both care about aesthetics but approach them from different angles." }, "Sagittarius": { score: 45, summary: "A difficult match. Virgo needs order while Sagittarius needs freedom. Both are mutable, which provides some flexibility for adaptation." }, "Aquarius": { score: 48, summary: "A challenging match. Virgo is practical while Aquarius is idealistic. Both are intellectual but focus their minds on very different things." } },
  "Libra": { "Gemini": { score: 93, summary: "A brilliant air-air match built on communication, shared social interests, and intellectual stimulation. Both love ideas, conversation, and beauty." }, "Aquarius": { score: 91, summary: "An intellectual and progressive air-air match. Both value fairness, social connections, and innovative thinking. A modern and stimulating partnership." }, "Leo": { score: 80, summary: "A romantic and aesthetically pleasing match. Both ruled by different aspects of creativity and beauty. Leo's warmth complements Libra's grace." }, "Sagittarius": { score: 78, summary: "A socially engaging match. Both love people, ideas, and new experiences. Libra brings balance while Sagittarius brings adventure." }, "Libra": { score: 70, summary: "A harmonious but potentially indecisive match. Two Libras create beauty and grace but may struggle with decision-making together." }, "Aries": { score: 60, summary: "An intriguing match of opposites. Aries charges ahead while Libra balances. Their different approaches can complement each other or create tension." }, "Taurus": { score: 55, summary: "Both ruled by Venus, this match shares a love of beauty and pleasure. But Taurus is practical while Libra is intellectual." }, "Cancer": { score: 48, summary: "A challenging match. Cancer seeks emotional depth while Libra seeks intellectual balance. Both value relationships but approach them differently." }, "Virgo": { score: 50, summary: "A challenging match. Virgo is critical while Libra avoids conflict. Both care about aesthetics but approach them from different angles." }, "Scorpio": { score: 42, summary: "A challenging match. Libra is open while Scorpio is private. Both are relationship-oriented but have very different emotional styles." }, "Capricorn": { score: 45, summary: "A challenging match. Libra is social while Capricorn is serious. Both are cardinal leaders who approach leadership differently." }, "Pisces": { score: 58, summary: "A romantic and creative match. Both appreciate beauty and art. Libra brings logic while Pisces brings emotion, creating a balanced connection." } },
  "Scorpio": { "Cancer": { score: 95, summary: "A deeply emotional water-water match. Both value emotional depth, loyalty, and intimacy. One of the most passionate and transformative combinations." }, "Pisces": { score: 90, summary: "A deeply intuitive and emotional water-water match. Scorpio provides strength while Pisces provides compassion. A mystical and transformative bond." }, "Virgo": { score: 85, summary: "An intense and transformative match. Both value depth and authenticity. Virgo's analysis meets Scorpio's intuition in a powerful combination." }, "Capricorn": { score: 82, summary: "A powerful and ambitious match. Both are determined and value loyalty. Scorpio provides emotional depth while Capricorn provides structure." }, "Taurus": { score: 72, summary: "An intense and transformative match. Both are fixed signs with deep loyalty, but Taurus's calm can clash with Scorpio's intensity." }, "Scorpio": { score: 68, summary: "An intensely passionate but potentially volatile match. Two Scorpios create unmatched depth but may trigger each other's fears and jealousy." }, "Leo": { score: 58, summary: "An intense and powerful match. Both are fixed signs with strong wills. Leo's warmth can melt Scorpio's defenses, creating deep loyalty." }, "Aries": { score: 58, summary: "An intense and magnetic match. Both are passionate but express it differently. Trust is the key challenge and the greatest reward." }, "Gemini": { score: 40, summary: "A very challenging match. Gemini's lightness clashes with Scorpio's intensity. Trust and depth are the main challenges." }, "Libra": { score: 42, summary: "A challenging match. Libra is open while Scorpio is private. Both are relationship-oriented but have very different emotional styles." }, "Sagittarius": { score: 42, summary: "A challenging match. Scorpio needs depth while Sagittarius needs freedom. Both are passionate but direct it toward very different goals." }, "Aquarius": { score: 45, summary: "A challenging match. Scorpio is emotional while Aquarius is intellectual. Both are fixed signs with strong convictions, which can clash." } },
  "Sagittarius": { "Aries": { score: 93, summary: "An adventurous and freedom-loving match. Both fire signs value independence and exploration, creating a dynamic, exciting partnership." }, "Leo": { score: 92, summary: "An enthusiastic and optimistic fire-fire match. Both love adventure, growth, and living life to the fullest. A joyful and expansive partnership." }, "Libra": { score: 78, summary: "A socially engaging match. Both love people, ideas, and new experiences. Libra brings balance while Sagittarius brings adventure." }, "Aquarius": { score: 82, summary: "A progressive and adventurous match. Both value freedom, truth, and expanding horizons. Great travel companions and intellectual partners." }, "Sagittarius": { score: 70, summary: "An adventurous and optimistic match. Two Sagittarians create excitement and growth, but may struggle with commitment and follow-through." }, "Gemini": { score: 80, summary: "An adventurous match of two mutable signs. Both love freedom, learning, and exploration. A great match for travel, ideas, and shared adventures." }, "Taurus": { score: 45, summary: "A difficult match. Taurus needs roots while Sagittarius needs wings. Without significant compromise, these needs are hard to reconcile." }, "Cancer": { score: 40, summary: "A very challenging match. Cancer needs roots while Sagittarius needs wings. Their fundamental needs for security and freedom conflict." }, "Virgo": { score: 45, summary: "A difficult match. Virgo needs order while Sagittarius needs freedom. Both are mutable, which provides some flexibility for adaptation." }, "Scorpio": { score: 42, summary: "A challenging match. Scorpio needs depth while Sagittarius needs freedom. Both are passionate but direct it toward very different goals." }, "Capricorn": { score: 40, summary: "A challenging match. Sagittarius is free-spirited while Capricorn is disciplined. Both are mutable and cardinal respectively, creating tension." }, "Pisces": { score: 55, summary: "A match of mutable signs. Sagittarius brings fire while Pisces brings water. Both are spiritual and philosophical, which can create connection." } },
  "Capricorn": { "Taurus": { score: 90, summary: "A grounded and ambitious earth-earth match. Both value hard work, loyalty, and building something lasting. Strong foundation for a serious commitment." }, "Virgo": { score: 90, summary: "A practical and ambitious earth-earth match. Both value hard work, competence, and achievement. A power couple built on mutual respect." }, "Scorpio": { score: 82, summary: "A powerful and ambitious match. Both are determined and value loyalty. Scorpio provides emotional depth while Capricorn provides structure." }, "Pisces": { score: 75, summary: "A complementary match of opposites. Capricorn provides structure while Pisces provides creativity and emotion. Together they create balance." }, "Capricorn": { score: 72, summary: "A stable and ambitious match. Two Capricorns create an empire of shared goals, but may struggle to prioritize relationship over achievement." }, "Cancer": { score: 78, summary: "An opposition match that can create balance. Cancer is emotional while Capricorn is practical. Together they can build a secure, nurturing home life." }, "Aries": { score: 45, summary: "A challenging match that requires work. Aries is impulsive while Capricorn is deliberate. Both are cardinal signs with leadership energy, which can clash." }, "Leo": { score: 55, summary: "A challenging but potentially powerful match. Both are ambitious leaders who approach goals differently. Mutual respect is the foundation." }, "Gemini": { score: 42, summary: "A challenging match. Gemini is playful while Capricorn is serious. Both are clever but approach life from very different angles." }, "Libra": { score: 45, summary: "A challenging match. Libra is social while Capricorn is serious. Both are cardinal leaders who approach leadership differently." }, "Sagittarius": { score: 40, summary: "A challenging match. Sagittarius is free-spirited while Capricorn is disciplined. Both are mutable and cardinal respectively, creating tension." }, "Aquarius": { score: 48, summary: "A challenging but interesting match. Both are rules-breakers in different ways. Capricorn works within systems while Aquarius challenges them." } },
  "Aquarius": { "Gemini": { score: 91, summary: "An innovative and stimulating air-air match. Both value intellectual freedom, social causes, and unconventional thinking. Never a dull moment." }, "Libra": { score: 91, summary: "An intellectual and progressive air-air match. Both value fairness, social connections, and innovative thinking. A modern and stimulating partnership." }, "Aries": { score: 82, summary: "An exciting and unconventional match. Both value independence and originality, creating a partnership built on mutual respect for freedom." }, "Sagittarius": { score: 82, summary: "A progressive and adventurous match. Both value freedom, truth, and expanding horizons. Great travel companions and intellectual partners." }, "Aquarius": { score: 70, summary: "An intellectually stimulating but emotionally detached match. Two Aquarians create innovation but may struggle with emotional intimacy." }, "Leo": { score: 50, summary: "A challenging match. Leo is personal while Aquarius is impersonal. Both are fixed signs with strong opinions, which can create stubborn conflicts." }, "Taurus": { score: 42, summary: "A challenging match. Taurus is traditional while Aquarius is revolutionary. Both are fixed signs, which can lead to stubborn standoffs." }, "Cancer": { score: 38, summary: "A difficult match. Cancer is emotionally focused while Aquarius is intellectually focused. Both are caring but express it very differently." }, "Virgo": { score: 48, summary: "A challenging match. Virgo is practical while Aquarius is idealistic. Both are intellectual but focus their minds on very different things." }, "Scorpio": { score: 45, summary: "A challenging match. Scorpio is emotional while Aquarius is intellectual. Both are fixed signs with strong convictions, which can clash." }, "Capricorn": { score: 48, summary: "A challenging but interesting match. Both are rules-breakers in different ways. Capricorn works within systems while Aquarius challenges them." }, "Pisces": { score: 50, summary: "A match of contrasts. Aquarius is intellectual while Pisces is emotional. Both are humanitarian but express it differently. Compassion bridges the gap." } },
  "Pisces": { "Cancer": { score: 92, summary: "A deeply intuitive water-water match. Both are emotionally sensitive and empathetic, creating a relationship of mutual understanding and care." }, "Scorpio": { score: 90, summary: "A deeply intuitive and emotional water-water match. Scorpio provides strength while Pisces provides compassion. A mystical and transformative bond." }, "Taurus": { score: 85, summary: "A gentle and romantic match. Taurus grounds Pisces' dreams while Pisces brings creativity and emotional richness. Both value love and beauty." }, "Capricorn": { score: 75, summary: "A complementary match of opposites. Capricorn provides structure while Pisces provides creativity and emotion. Together they create balance." }, "Virgo": { score: 70, summary: "A complementary match of mutable signs. Virgo brings practicality while Pisces brings imagination. Both are caring and willing to serve others." }, "Pisces": { score: 70, summary: "A deeply empathetic but potentially escapist match. Two Pisces create an ocean of emotion and creativity, but may struggle with practical reality." }, "Leo": { score: 55, summary: "A creative and compassionate match. Leo's warmth helps Pisces' confidence, while Pisces' empathy softens Leo's ego. Both are generous." }, "Libra": { score: 58, summary: "A romantic and creative match. Both appreciate beauty and art. Libra brings logic while Pisces brings emotion, creating a balanced connection." }, "Sagittarius": { score: 55, summary: "A match of mutable signs. Sagittarius brings fire while Pisces brings water. Both are spiritual and philosophical, which can create connection." }, "Aries": { score: 48, summary: "A challenging match of fire and water. Aries is direct while Pisces is sensitive and intuitive. Compassion from both sides can bridge the gap." }, "Aquarius": { score: 50, summary: "A match of contrasts. Aquarius is intellectual while Pisces is emotional. Both are humanitarian but express it differently." }, "Gemini": { score: 52, summary: "A match of complementary elements. Gemini brings logic while Pisces brings intuition. Both are mutable and adaptable, which helps bridge differences." } }
};

// Element descriptions
export const elementDescriptions: Record<string, { traits: string; signs: string[]; description: string }> = {
  Fire: { traits: "Passionate, energetic, courageous, spontaneous", signs: ["Aries", "Leo", "Sagittarius"], description: "Fire signs are known for their passion, enthusiasm, and dynamic energy. They are natural leaders who inspire others with their courage and optimism. Fire signs approach life with directness and vitality, often acting on instinct and intuition. They thrive on challenge and adventure, and their warmth draws people to them naturally." },
  Earth: { traits: "Practical, reliable, patient, grounded", signs: ["Taurus", "Virgo", "Capricorn"], description: "Earth signs are the foundation of the zodiac, known for their practicality, reliability, and patience. They build their lives carefully and value stability, security, and material well-being. Earth signs excel at turning ideas into reality through steady effort and persistence. They are deeply connected to the physical world and have a strong appreciation for nature, beauty, and sensory experiences." },
  Air: { traits: "Intellectual, communicative, social, adaptable", signs: ["Gemini", "Libra", "Aquarius"], description: "Air signs are the intellectual communicators of the zodiac, known for their sharp minds, social skills, and love of ideas. They process the world through thought and language, excelling at communication, analysis, and creative problem-solving. Air signs value mental stimulation, social connection, and the free exchange of ideas. They are often the most socially skilled and verbally gifted members of any group." },
  Water: { traits: "Emotional, intuitive, empathetic, deep", signs: ["Cancer", "Scorpio", "Pisces"], description: "Water signs are the emotional depth of the zodiac, known for their intuition, empathy, and emotional intelligence. They experience life at a profound emotional level and can sense what others are feeling with remarkable accuracy. Water signs value emotional connection, authenticity, and inner growth. Their sensitivity is their greatest gift, allowing them to navigate the complexities of human emotion with grace and understanding." }
};
