// Static data for all new tools

// ============================================================
// LUCKY COLOR CALCULATOR
// ============================================================
export const luckyColorData: Record<string, { element: string; colors: { name: string; hex: string; meaning: string }[] }> = {
  Aries: { element: 'Fire', colors: [
    { name: 'Crimson Red', hex: '#DC143C', meaning: 'For energy, courage and taking bold action.' },
    { name: 'Orange', hex: '#FF8C00', meaning: 'For confidence, enthusiasm and creative spark.' },
    { name: 'Gold', hex: '#FFD700', meaning: 'For personal power, leadership and ambition.' },
    { name: 'Scarlet', hex: '#FF2400', meaning: 'For passion, drive and overcoming obstacles.' },
  ]},
  Taurus: { element: 'Earth', colors: [
    { name: 'Forest Green', hex: '#228B22', meaning: 'For growth, stability and financial well-being.' },
    { name: 'Cream', hex: '#FFFDD0', meaning: 'For comfort, calm and creating peaceful spaces.' },
    { name: 'Rose Gold', hex: '#B76E79', meaning: 'For self-care, beauty and enjoying the senses.' },
    { name: 'Earth Brown', hex: '#8B4513', meaning: 'For grounding, patience and staying rooted.' },
  ]},
  Gemini: { element: 'Air', colors: [
    { name: 'Sky Blue', hex: '#87CEEB', meaning: 'For clear thinking, calm communication and openness.' },
    { name: 'Lemon Yellow', hex: '#FFF44F', meaning: 'For mental clarity, curiosity and learning.' },
    { name: 'Silver', hex: '#C0C0C0', meaning: 'For adaptability, versatility and social charm.' },
    { name: 'Lavender', hex: '#E6E6FA', meaning: 'For calm focus and balancing mental energy.' },
  ]},
  Cancer: { element: 'Water', colors: [
    { name: 'Pearl White', hex: '#F0EAD6', meaning: 'For emotional clarity, purity and fresh starts.' },
    { name: 'Seafoam', hex: '#00FF7F', meaning: 'For healing, emotional balance and nurturing.' },
    { name: 'Moonlight Silver', hex: '#D4D4DC', meaning: 'For intuition, dreams and inner reflection.' },
    { name: 'Soft Peach', hex: '#FFCBA4', meaning: 'For comfort, warmth and family harmony.' },
  ]},
  Leo: { element: 'Fire', colors: [
    { name: 'Royal Gold', hex: '#DAA520', meaning: 'For confidence, recognition and self-expression.' },
    { name: 'Warm Orange', hex: '#FF7F50', meaning: 'For creativity, joy and generosity of spirit.' },
    { name: 'Regal Purple', hex: '#7851A9', meaning: 'For dignity, inner strength and leadership.' },
    { name: 'Sunshine Yellow', hex: '#FFD700', meaning: 'For vitality, optimism and personal magnetism.' },
  ]},
  Virgo: { element: 'Earth', colors: [
    { name: 'Sage Green', hex: '#B2AC88', meaning: 'For calm analysis, practical thinking and organization.' },
    { name: 'Oat', hex: '#DFC5A0', meaning: 'For simplicity, natural beauty and groundedness.' },
    { name: 'Teal', hex: '#008080', meaning: 'For clarity, precision and meaningful work.' },
    { name: 'Warm Grey', hex: '#BEBEBE', meaning: 'For balance, refinement and thoughtful decisions.' },
  ]},
  Libra: { element: 'Air', colors: [
    { name: 'Blush Pink', hex: '#FF91A4', meaning: 'For harmony, love and gentle connection.' },
    { name: 'Powder Blue', hex: '#B0E0E6', meaning: 'For diplomacy, peace and balanced thinking.' },
    { name: 'Champagne', hex: '#F7E7CE', meaning: 'For elegance, social grace and aesthetic beauty.' },
    { name: 'Lilac', hex: '#C8A2C8', meaning: 'For partnership, creativity and artistic expression.' },
  ]},
  Scorpio: { element: 'Water', colors: [
    { name: 'Deep Burgundy', hex: '#800020', meaning: 'For transformation, depth and inner power.' },
    { name: 'Obsidian Black', hex: '#0B0B0B', meaning: 'For protection, mystery and focused intention.' },
    { name: 'Dark Teal', hex: '#005F5F', meaning: 'For emotional healing, intuition and insight.' },
    { name: 'Plum', hex: '#8E4585', meaning: 'For passion, loyalty and spiritual depth.' },
  ]},
  Sagittarius: { element: 'Fire', colors: [
    { name: 'Turquoise', hex: '#30D5C8', meaning: 'For adventure, exploration and open horizons.' },
    { name: 'Indigo', hex: '#4B0082', meaning: 'For wisdom, philosophy and higher learning.' },
    { name: 'Burnt Orange', hex: '#CC5500', meaning: 'For optimism, freedom and bold exploration.' },
    { name: 'Navy', hex: '#000080', meaning: 'For truth-seeking, honesty and travel energy.' },
  ]},
  Capricorn: { element: 'Earth', colors: [
    { name: 'Charcoal', hex: '#36454F', meaning: 'For discipline, authority and serious focus.' },
    { name: 'Deep Green', hex: '#006400', meaning: 'For ambition, growth and long-term success.' },
    { name: 'Slate Grey', hex: '#708090', meaning: 'For reliability, professionalism and steady progress.' },
    { name: 'Espresso Brown', hex: '#3C1414', meaning: 'For grounding, resilience and practical wisdom.' },
  ]},
  Aquarius: { element: 'Air', colors: [
    { name: 'Electric Blue', hex: '#7DF9FF', meaning: 'For innovation, originality and visionary thinking.' },
    { name: 'Neon Violet', hex: '#CE00FF', meaning: 'For uniqueness, humanitarian energy and progress.' },
    { name: 'Steel Blue', hex: '#4682B4', meaning: 'For independence, intellect and social causes.' },
    { name: 'Cyan', hex: '#00FFFF', meaning: 'For communication, technology and fresh ideas.' },
  ]},
  Pisces: { element: 'Water', colors: [
    { name: 'Sea Green', hex: '#2E8B57', meaning: 'For compassion, healing and emotional flow.' },
    { name: 'Lavender Mist', hex: '#E6E6FA', meaning: 'For intuition, dreams and spiritual connection.' },
    { name: 'Aquamarine', hex: '#7FFFD4', meaning: 'For calm, creativity and emotional peace.' },
    { name: 'Amethyst', hex: '#9966CC', meaning: 'For imagination, artistic expression and inner wisdom.' },
  ]},
};

// ============================================================
// ANGEL NUMBER MEANINGS
// ============================================================
export const angelNumberMeanings: Record<number, { title: string; meaning: string; theme: string }> = {
  1: { title: 'New Beginnings', meaning: 'A reminder that you are starting a new chapter. Trust your instincts and take the first step forward. Your thoughts are manifesting quickly right now.', theme: 'Initiative and leadership' },
  2: { title: 'Trust and Patience', meaning: 'Have faith that things are working out, even if you cannot see it yet. Partnerships and cooperation are favored. Stay balanced and patient.', theme: 'Balance and harmony' },
  3: { title: 'Creative Expression', meaning: 'Your creativity and self-expression are amplified. The universe is supporting your artistic and communicative endeavors. Express yourself joyfully.', theme: 'Creativity and joy' },
  4: { title: 'Stability and Foundation', meaning: 'Focus on building solid foundations in your life. Hard work and determination are recognized. Your angels are supporting your practical efforts.', theme: 'Structure and diligence' },
  5: { title: 'Positive Change', meaning: 'Significant life changes are coming or already happening. Embrace them with an open mind. Freedom and adventure are calling you forward.', theme: 'Change and freedom' },
  6: { title: 'Love and Responsibility', meaning: 'Focus on home, family, and loving service. Balance your material concerns with emotional needs. Nurture yourself and others with compassion.', theme: 'Love and nurturing' },
  7: { title: 'Spiritual Awakening', meaning: 'You are on a deep spiritual path. Trust your inner wisdom and continue seeking truth. Mystical experiences and learning are highlighted.', theme: 'Wisdom and introspection' },
  8: { title: 'Abundance and Power', meaning: 'Financial and material abundance is flowing toward you. Step into your personal power and use it wisely. Success through effort is indicated.', theme: 'Prosperity and authority' },
  9: { title: 'Completion and Service', meaning: 'A chapter is closing to make room for something new. Focus on serving others and sharing your wisdom. Let go of what no longer serves you.', theme: 'Humanitarianism and closure' },
  10: { title: 'Divine Guidance', meaning: 'Your angels are confirming that you are on the right path. Trust the process and keep moving forward with confidence and optimism.', theme: 'Trust and alignment' },
  11: { title: 'Master Intuition', meaning: 'A master number of intuition and spiritual insight. Pay attention to your thoughts and feelings right now, as they carry powerful messages from the universe.', theme: 'Intuition and illumination' },
  12: { title: 'Positive Cycles', meaning: 'Stay positive as your thoughts are rapidly manifesting. Replace fears with faith and focus on what you want to create rather than what you fear.', theme: 'Optimism and manifestation' },
  13: { title: 'Transitions', meaning: 'Significant transitions are occurring. Your angels are helping you release old patterns and embrace new beginnings. Trust the transformation process.', theme: 'Transformation and growth' },
  14: { title: 'Inner Wisdom', meaning: 'Your angels are guiding you to trust your inner knowing. Make decisions that align with your true self. Balance practicality with intuition.', theme: 'Wisdom and balance' },
  15: { title: 'Life Changes', meaning: 'Positive changes related to your life purpose are unfolding. Stay optimistic and be open to new opportunities that align with your deeper calling.', theme: 'Purpose and change' },
  16: { title: 'Spiritual Strength', meaning: 'You are being asked to connect more deeply with your spiritual practice. Your inner strength will carry you through current challenges.', theme: 'Resilience and spirit' },
  17: { title: 'Good Fortune', meaning: 'You are on the right path and your efforts will be rewarded. Keep up the excellent work. Abundance and success are drawing near.', theme: 'Success and validation' },
  18: { title: 'Prosperity', meaning: 'Financial and material abundance is on the way. Stay positive about your finances and trust that your needs will be met abundantly.', theme: 'Abundance and provision' },
  19: { title: 'Purpose Fulfillment', meaning: 'You are being guided toward your life purpose. Trust that the universe is supporting your highest path. Your unique gifts are needed.', theme: 'Destiny and calling' },
  20: { title: 'Divine Protection', meaning: 'Your angels are surrounding you with protection and love. Trust that you are safe and supported. Faith is your greatest shield.', theme: 'Protection and faith' },
  21: { title: 'New Opportunities', meaning: 'New doors are opening for you. Stay alert for unexpected opportunities and be willing to step through them with courage and trust.', theme: 'Opportunity and courage' },
  22: { title: 'Master Builder', meaning: 'A master number of powerful manifestation. Your dreams are taking shape. Combine vision with practical action to build something lasting and meaningful.', theme: 'Creation and mastery' },
  23: { title: 'Support and Encouragement', meaning: 'Your angels are cheering you on. You have their full support in your current endeavors. Keep believing in yourself and your abilities.', theme: 'Encouragement and support' },
  24: { title: 'Dedication', meaning: 'Your hard work and dedication are recognized by the universe. Stay focused on your goals and trust that your efforts will yield results.', theme: 'Effort and perseverance' },
  25: { title: 'Life Lessons', meaning: 'Important life lessons are unfolding. Trust that every experience is teaching you something valuable. Embrace the growth process.', theme: 'Learning and wisdom' },
  26: { title: 'Resilience', meaning: 'Your ability to overcome challenges is being highlighted. Trust your inner strength and know that you can handle whatever comes your way.', theme: 'Strength and endurance' },
  27: { title: 'Trust the Process', meaning: 'Everything is happening in divine timing. Trust the journey even when the path is unclear. Your angels see the bigger picture.', theme: 'Patience and trust' },
  28: { title: 'Confidence', meaning: 'Your angels are boosting your confidence and self-belief. Step into your power and share your gifts with the world without hesitation.', theme: 'Empowerment and courage' },
  29: { title: 'Trust Your Gift', meaning: 'You have unique talents and abilities that the world needs. Trust in your gifts and find ways to express them authentically.', theme: 'Talent and authenticity' },
  30: { title: 'Divine Connection', meaning: 'Your connection to the divine is strong right now. Take time for prayer, meditation, or quiet reflection. Listen to the guidance flowing within.', theme: 'Spirituality and connection' },
  31: { title: 'Growth and Expansion', meaning: 'Your personal growth is accelerating. Embrace new learning opportunities and be open to expanding your perspective and understanding.', theme: 'Growth and expansion' },
  32: { title: 'Harmonious Action', meaning: 'Work with others cooperatively and harmoniously. Team efforts and partnerships are favored. Communication leads to breakthroughs.', theme: 'Cooperation and teamwork' },
  33: { title: 'Master Communication', meaning: 'A master number of creative expression and communication. Your words carry extra power right now. Use them wisely to uplift and inspire.', theme: 'Expression and inspiration' },
  44: { title: 'Master Foundation', meaning: 'A master number of building and structure. Your angels are helping you create something enduring and meaningful. Lay foundations with care.', theme: 'Structure and building' },
  55: { title: 'Master Freedom', meaning: 'A master number of freedom and transformation. Major life changes are divinely guided. Trust the journey of reinvention.', theme: 'Transformation and liberation' },
  66: { title: 'Master Love', meaning: 'A master number of unconditional love and compassion. Focus on healing relationships and opening your heart to deeper connections.', theme: 'Love and healing' },
  77: { title: 'Master Wisdom', meaning: 'A master number of deep spiritual wisdom. You are being called to share your knowledge and insight with others who need guidance.', theme: 'Wisdom and teaching' },
  88: { title: 'Master Abundance', meaning: 'A master number of infinite abundance. Financial and spiritual prosperity are both flowing. Use your resources wisely and generously.', theme: 'Prosperity and infinity' },
  99: { title: 'Master Completion', meaning: 'A master number of completion and new beginnings. A major life cycle is ending, making way for something far greater. Embrace the transition.', theme: 'Completion and renewal' },
  111: { title: 'Manifestation Portal', meaning: 'Your thoughts are manifesting at an accelerated rate. Focus on what you want, not what you fear. This is a powerful window for intention-setting.', theme: 'Manifestation and focus' },
  222: { title: 'Trust the Timing', meaning: 'Everything is unfolding perfectly. Have patience and trust that the seeds you have planted are growing, even beneath the surface.', theme: 'Patience and faith' },
  333: { title: 'Creative Surge', meaning: 'The Ascended Masters are near, supporting your creative expression. Express yourself fully and share your unique gifts with the world.', theme: 'Creativity and expression' },
  444: { title: 'Angel Presence', meaning: 'Angels surround you right now. You are protected, loved, and guided. Pay attention to signs and synchronicities in your daily life.', theme: 'Protection and guidance' },
  555: { title: 'Major Changes', meaning: 'Significant and positive changes are underway. Release what no longer serves you and welcome the new energy with open arms.', theme: 'Change and liberation' },
  666: { title: 'Balance Reminder', meaning: 'A gentle nudge to rebalance your life. Focus less on material worries and more on love, service, and inner peace. Trust that your needs are met.', theme: 'Balance and realignment' },
  777: { title: 'Spiritual Luck', meaning: 'You are in a deeply spiritual and fortunate phase. Miracles and synchronicities are happening. Stay open and grateful for the magic unfolding.', theme: 'Blessings and miracles' },
  888: { title: 'Infinite Flow', meaning: 'Abundance is flowing into your life from all directions. You are aligned with the energy of infinite prosperity and success.', theme: 'Prosperity and alignment' },
  999: { title: 'Chapter Closing', meaning: 'A significant chapter of your life is coming to a close. Honor what was, release with gratitude, and prepare for a beautiful new beginning.', theme: 'Completion and gratitude' },
};

// ============================================================
// CAREER PERSONALITY PROFILES
// ============================================================
export const careerProfiles: Record<string, { element: string; modality: string; strengths: string[]; idealEnvironments: string[]; careerThemes: { field: string; description: string }[]; challenge: string; growthTip: string }> = {
  Aries: { element: 'Fire', modality: 'Cardinal', strengths: ['Natural leader', 'Thrives under pressure', 'Quick decision-maker', 'Competitive drive'], idealEnvironments: ['Fast-paced startups', 'Competitive industries', 'Independent roles', 'Entrepreneurial ventures'], careerThemes: [
    { field: 'Entrepreneurship & Leadership', description: 'You excel at starting new ventures and rallying teams around a vision. Your natural authority inspires others to follow.' },
    { field: 'Sports & Fitness', description: 'Your competitive nature and physical energy make you thrive in athletic, coaching, or fitness training roles.' },
    { field: 'Emergency Services & Military', description: 'High-pressure, action-oriented environments bring out your best. You think fast and act decisively.' },
    { field: 'Sales & Business Development', description: 'Your boldness and confidence make you a natural at pitching ideas, closing deals, and expanding markets.' },
  ], challenge: 'Developing patience with long-term projects and learning to collaborate rather than always leading.', growthTip: 'Practice active listening and build patience through activities that require sustained effort over time.' },
  Taurus: { element: 'Earth', modality: 'Fixed', strengths: ['Reliable and consistent', 'Strong financial acumen', 'Patient and thorough', 'Excellent with quality'], idealEnvironments: ['Stable organizations', 'Creative industries', 'Finance and banking', 'Luxury and hospitality'], careerThemes: [
    { field: 'Finance & Banking', description: 'Your natural talent with money, patience for growth, and conservative approach make you excellent in financial roles.' },
    { field: 'Architecture & Design', description: 'You have an eye for beauty and structure. Creating things that are both beautiful and lasting fulfills you deeply.' },
    { field: 'Culinary Arts & Agriculture', description: 'Your connection to the physical world and sensory appreciation makes you thrive in food and land-based careers.' },
    { field: 'Real Estate & Property', description: 'Your patience, persistence, and appreciation for tangible assets make real estate a natural fit.' },
  ], challenge: 'Resistance to change and tendency to get stuck in comfort zones.', growthTip: 'Challenge yourself with one new learning experience each quarter to stay adaptable and growing.' },
  Gemini: { element: 'Air', modality: 'Mutable', strengths: ['Exceptional communicator', 'Quick learner', 'Adaptable and versatile', 'Natural networker'], idealEnvironments: ['Media and publishing', 'Tech startups', 'Education', 'Marketing agencies'], careerThemes: [
    { field: 'Journalism & Media', description: 'Your curiosity and communication skills make you a natural storyteller. You thrive on gathering and sharing information.' },
    { field: 'Marketing & Public Relations', description: 'Your ability to understand different audiences and craft compelling messages makes you invaluable in marketing.' },
    { field: 'Technology & Communications', description: 'You adapt quickly to new tools and platforms. Tech roles that require constant learning suit you perfectly.' },
    { field: 'Education & Training', description: 'Your enthusiasm for learning is contagious. Teaching, coaching, and mentoring roles allow you to share knowledge widely.' },
  ], challenge: 'Maintaining focus and depth rather than constantly jumping between interests.', growthTip: 'Choose one area to specialize in deeply while keeping your other interests as side projects.' },
  Cancer: { element: 'Water', modality: 'Cardinal', strengths: ['Deep empathy', 'Strong intuition', 'Excellent memory', 'Natural caretaker'], idealEnvironments: ['Healthcare settings', 'Education', 'Human resources', 'Home-based businesses'], careerThemes: [
    { field: 'Healthcare & Counseling', description: 'Your deep empathy and intuitive understanding of others make you exceptional in healing and helping professions.' },
    { field: 'Education & Childcare', description: 'Your nurturing instinct and patience make you a natural teacher and caregiver.' },
    { field: 'Human Resources & People Operations', description: 'Your ability to understand emotional needs and create supportive environments is invaluable in HR roles.' },
    { field: 'Hospitality & Real Estate', description: 'Your talent for creating comfortable, welcoming spaces serves you well in hospitality and home-related fields.' },
  ], challenge: 'Setting emotional boundaries and not taking workplace challenges too personally.', growthTip: 'Practice separating your emotional self from your professional role to maintain resilience.' },
  Leo: { element: 'Fire', modality: 'Fixed', strengths: ['Charismatic leader', 'Creative visionary', 'Warm and generous', 'Natural performer'], idealEnvironments: ['Creative industries', 'Entertainment', 'Leadership roles', 'Brand-focused companies'], careerThemes: [
    { field: 'Entertainment & Performing Arts', description: 'Your natural charisma and love of the spotlight make you shine on stage, screen, or any public-facing role.' },
    { field: 'Fashion & Design', description: 'Your creative vision and appreciation for beauty drive you to create bold, memorable designs and brands.' },
    { field: 'Management & Executive Leadership', description: 'Your warmth and confidence inspire teams. You lead not through authority but through genuine enthusiasm.' },
    { field: 'Event Planning & Hospitality', description: 'Your talent for creating memorable experiences makes you exceptional at organizing events and celebrations.' },
  ], challenge: 'Need for recognition can become dependency; learning to share the spotlight.', growthTip: 'Practice celebrating others achievements as enthusiastically as your own to become a more balanced leader.' },
  Virgo: { element: 'Earth', modality: 'Mutable', strengths: ['Exceptional attention to detail', 'Analytical thinker', 'Reliable problem-solver', 'Service-oriented'], idealEnvironments: ['Research institutions', 'Healthcare', 'Quality-focused organizations', 'Consulting firms'], careerThemes: [
    { field: 'Medicine & Health Sciences', description: 'Your precision, analytical mind, and genuine desire to help make you an excellent healthcare professional.' },
    { field: 'Research & Data Analysis', description: 'You excel at finding patterns, organizing information, and drawing meaningful conclusions from complex data.' },
    { field: 'Editing, Writing & Publishing', description: 'Your eye for detail and love of quality make you an exceptional editor, proofreader, or content strategist.' },
    { field: 'Quality Assurance & Operations', description: 'You naturally see how to improve systems and processes. You ensure quality and efficiency everywhere you work.' },
  ], challenge: 'Perfectionism that can lead to burnout and being overly critical of yourself and others.', growthTip: 'Practice "good enough" thinking for non-critical tasks and save your perfectionism for what truly matters.' },
  Libra: { element: 'Air', modality: 'Cardinal', strengths: ['Natural diplomat', 'Aesthetic sense', 'Fair-minded', 'Excellent communicator'], idealEnvironments: ['Legal profession', 'Design agencies', 'Diplomatic services', 'Creative collaborations'], careerThemes: [
    { field: 'Law & Mediation', description: 'Your sense of justice, ability to see multiple perspectives, and diplomatic nature make you a natural mediator or attorney.' },
    { field: 'Design & Architecture', description: 'Your refined aesthetic sense and eye for balance make you excel in visual design, interior design, and architecture.' },
    { field: 'Public Relations & Diplomacy', description: 'Your social grace and ability to navigate complex interpersonal dynamics serve you in PR and diplomatic roles.' },
    { field: 'Human Resources & Counseling', description: 'Your ability to create harmony and understand different viewpoints makes you effective in people-focused roles.' },
  ], challenge: 'Indecisiveness and tendency to avoid necessary confrontation.', growthTip: 'Set decision deadlines for yourself and practice having difficult conversations with kindness and clarity.' },
  Scorpio: { element: 'Water', modality: 'Fixed', strengths: ['Deep perception', 'Strategic thinking', 'Emotional courage', 'Research talent'], idealEnvironments: ['Investigation & research', 'Psychology', 'Crisis management', 'Strategic consulting'], careerThemes: [
    { field: 'Psychology & Therapy', description: 'Your emotional depth and perceptive nature make you an exceptional therapist, counselor, or psychologist.' },
    { field: 'Investigation & Research', description: 'Your ability to see beneath the surface and your persistence in finding truth serve you in investigative roles.' },
    { field: 'Finance & Investment', description: 'Your strategic thinking and comfort with depth make you skilled at financial analysis and investment strategy.' },
    { field: 'Crisis Management & Emergency Response', description: 'You thrive under pressure and can navigate complex, high-stakes situations with remarkable composure.' },
  ], challenge: 'Trust issues and tendency toward control and secrecy.', growthTip: 'Practice vulnerability with trusted people and learn that sharing information builds stronger teams than hoarding it.' },
  Sagittarius: { element: 'Fire', modality: 'Mutable', strengths: ['Natural teacher', 'Optimistic visionary', 'Culturally curious', 'Philosophical thinker'], idealEnvironments: ['International organizations', 'Universities', 'Travel industry', 'Publishing'], careerThemes: [
    { field: 'Education & Academia', description: 'Your love of learning and natural teaching ability make you an inspiring professor, coach, or educational leader.' },
    { field: 'Travel & International Relations', description: 'Your cultural curiosity and adventurous spirit are perfectly suited to roles involving travel and global connections.' },
    { field: 'Publishing & Media', description: 'Your ability to see the big picture and communicate vision makes you excellent in publishing and content leadership.' },
    { field: 'Entrepreneurship', description: 'Your optimism and willingness to take calculated risks make you a natural entrepreneur with global vision.' },
  ], challenge: 'Commitment issues and tendency to overpromise or scatter energy.', growthTip: 'Practice finishing what you start before taking on new adventures. Depth beats breadth in the long run.' },
  Capricorn: { element: 'Earth', modality: 'Cardinal', strengths: ['Strategic planner', 'Exceptional discipline', 'Long-term vision', 'Natural authority'], idealEnvironments: ['Corporate leadership', 'Government', 'Finance', 'Engineering'], careerThemes: [
    { field: 'Business Management & Executive Leadership', description: 'Your strategic thinking, discipline, and patience make you an exceptional CEO or senior executive.' },
    { field: 'Engineering & Architecture', description: 'Your systematic approach and respect for structure make you excel in building both physical and organizational structures.' },
    { field: 'Government & Public Administration', description: 'Your sense of responsibility and long-term thinking serve the public good in governance roles.' },
    { field: 'Finance & Investment Banking', description: 'Your patience, strategic mind, and comfort with complexity make you a powerful force in finance.' },
  ], challenge: 'Workaholic tendencies and difficulty with emotional expression.', growthTip: 'Schedule regular downtime and practice expressing feelings verbally, not just through actions.' },
  Aquarius: { element: 'Air', modality: 'Fixed', strengths: ['Innovative thinker', 'Humanitarian values', 'Independent spirit', 'System-level problem solver'], idealEnvironments: ['Tech companies', 'Nonprofits', 'Research labs', 'Social enterprises'], careerThemes: [
    { field: 'Technology & Innovation', description: 'Your ability to see the future and think outside conventional frameworks makes you a natural innovator and tech leader.' },
    { field: 'Social Activism & Nonprofits', description: 'Your deep humanitarian values drive you to create systems that benefit everyone, not just the privileged few.' },
    { field: 'Science & Research', description: 'Your unconventional thinking and intellectual independence make you excellent at groundbreaking research.' },
    { field: 'Environmental & Sustainability', description: 'Your concern for collective well-being aligns naturally with environmental and sustainability work.' },
  ], challenge: 'Emotional detachment and resistance to intimate collaboration.', growthTip: 'Practice expressing feelings directly and building one-on-one relationships alongside your group-oriented work.' },
  Pisces: { element: 'Water', modality: 'Mutable', strengths: ['Deep empathy', 'Rich imagination', 'Artistic talent', 'Spiritual awareness'], idealEnvironments: ['Creative studios', 'Healthcare', 'Spiritual organizations', 'Charitable work'], careerThemes: [
    { field: 'Creative Arts & Entertainment', description: 'Your rich imagination and artistic sensitivity make you exceptional in music, film, writing, and visual arts.' },
    { field: 'Healthcare & Healing Professions', description: 'Your empathy and intuitive understanding of suffering make you a compassionate healer and caregiver.' },
    { field: 'Spiritual & Charitable Work', description: 'Your spiritual awareness and desire to serve make you naturally drawn to meaningful charitable and spiritual roles.' },
    { field: 'Counseling & Psychology', description: 'Your ability to sense emotions and your non-judgmental nature make you an effective counselor or therapist.' },
  ], challenge: 'Boundary issues and tendency to escape reality through daydreaming or avoidance.', growthTip: 'Build daily routines and practice saying no. Structure supports your creativity rather than constraining it.' },
};

// ============================================================
// MONEY STYLE PROFILES
// ============================================================
export const moneyStyles: Record<string, { spendingStyle: string; savingStyle: string; comfortStyle: string; moneyStrengths: string[]; moneyChallenges: string[]; moneyTip: string }> = {
  Aries: { spendingStyle: 'Bold and impulsive. You spend on experiences, adventures, and things that excite you. Spontaneous purchases are common.', savingStyle: 'Saving feels slow and boring to you, but you can accumulate quickly when motivated by a clear goal. Competitive savings challenges work well for you.', comfortStyle: 'You spend freely on things that boost your energy and confidence: fitness, travel, and bold experiences.', moneyStrengths: ['Natural ability to generate income', 'Bold financial decisions that pay off', 'Earning through competition and drive'], moneyChallenges: ['Impulse buying', 'Difficulty sticking to budgets', 'Boredom with routine savings plans'], moneyTip: 'Set up automatic savings and use your competitive nature by challenging yourself to hit financial milestones.' },
  Taurus: { spendingStyle: 'Deliberate and quality-focused. You prefer to spend more on fewer, high-quality items rather than many cheap ones. You love luxury and comfort.', savingStyle: 'You are a natural saver who finds security in watching accounts grow. Patient accumulation over time is your strength.', comfortStyle: 'You invest in comfort: beautiful home furnishings, good food, quality clothing, and anything that appeals to your senses.', moneyStrengths: ['Patient, long-term wealth building', 'Excellent taste that preserves value', 'Natural financial instinct'], moneyChallenges: ['Can overspend on luxury', 'Stubborn about changing financial habits', 'May be possessive about money'], moneyTip: 'Create a "luxury fund" alongside your savings so you can enjoy quality without guilt or overindulgence.' },
  Gemini: { spendingStyle: 'Curious and varied. You spend on interesting experiences, courses, gadgets, and social activities. Budgets often have many categories.', savingStyle: 'You understand financial concepts easily but struggle with consistency. Multiple savings accounts or varied investment approaches keep you engaged.', comfortStyle: 'You spend on learning, communication tools, social outings, and anything that feeds your curiosity and keeps life interesting.', moneyStrengths: ['Quick understanding of financial concepts', 'Multiple income streams through versatility', 'Networking that creates opportunities'], moneyChallenges: ['Inconsistent saving habits', 'Easily distracted by new financial trends', 'May spread investments too thin'], moneyTip: 'Automate your finances as much as possible and limit active investment accounts to three or fewer.' },
  Cancer: { spendingStyle: 'Emotionally driven and home-focused. You spend most on home, family, and anything that creates emotional security and comfort.', savingStyle: 'You save for emotional security. Having a financial safety net is deeply important to your peace of mind. Emergency funds are your priority.', comfortStyle: 'You invest in creating a warm, comfortable home and memorable experiences with family and loved ones.', moneyStrengths: ['Strong instinct for financial security', 'Protective of family financial wellbeing', 'Excellent at creating comfortable spaces within budget'], moneyChallenges: ['Emotional spending when stressed', 'Difficulty investing aggressively', 'May hoard money out of fear'], moneyTip: 'Build a generous emergency fund first, then gradually learn to invest with a trusted advisor to grow your wealth.' },
  Leo: { spendingStyle: 'Generous and expressive. You spend on experiences that make you and others feel special. Quality, brand, and presentation matter to you.', savingStyle: 'You can save impressively when motivated by a grand vision or lifestyle goal. You save for experiences and status, not just security.', comfortStyle: 'You spend generously on entertainment, fashion, gifts, and anything that allows you to express yourself and celebrate life.', moneyStrengths: ['Charisma that attracts financial opportunities', 'Generosity that builds valuable networks', 'Bold investment instincts'], moneyChallenges: ['Overspending on image and status', 'Difficulty with financial discipline', 'May give away too much'], moneyTip: 'Set a monthly "generosity budget" so you can express your natural generosity without compromising your own financial goals.' },
  Virgo: { spendingStyle: 'Practical and research-driven. You compare prices, read reviews, and make informed decisions. Impulse buys are rare for you.', savingStyle: 'You are methodical about saving, often with detailed spreadsheets or tracking systems. Every dollar has a purpose and a category.', comfortStyle: 'You spend on health, wellness, quality tools, and things that improve efficiency and quality of life in practical ways.', moneyStrengths: ['Exceptional budgeting and tracking skills', 'Research-driven investment decisions', 'Ability to live below means comfortably'], moneyChallenges: ['May be too frugal with self-care', 'Analysis paralysis with financial decisions', 'Difficulty enjoying money'], moneyTip: 'Create a "joy fund" for guilt-free spending on things that bring you happiness without needing a practical justification.' },
  Libra: { spendingStyle: 'Aesthetic and social. You spend on beauty, fashion, dining out, and social experiences. You value quality and presentation.', savingStyle: 'You prefer balanced approaches to saving and may rely on partners or advisors for financial planning. Joint finances often suit you well.', comfortStyle: 'You invest in art, beauty treatments, stylish clothing, elegant dining, and creating beautiful shared experiences.', moneyStrengths: ['Fair approach to shared finances', 'Ability to negotiate good deals', 'Talent for creating value through aesthetics'], moneyChallenges: ['Indecisive about major purchases', 'May overspend to maintain social image', 'Reliance on others for financial decisions'], moneyTip: 'Develop your own financial literacy and set clear personal spending limits before social outings.' },
  Scorpio: { spendingStyle: 'Strategic and private. You spend on things with lasting value and deep personal meaning. You rarely make frivolous purchases.', savingStyle: 'You are a powerful accumulator who understands the psychology of money. Long-term, compounding wealth strategies appeal to you.', comfortStyle: 'You invest in things that give you power, knowledge, or privacy: research, education, quality investments, and meaningful experiences.', moneyStrengths: ['Strategic long-term wealth building', 'Excellent at spotting undervalued opportunities', 'Powerful financial discipline'], moneyChallenges: ['Can be secretive about finances', 'Difficulty trusting financial advisors', 'May use money for control'], moneyTip: 'Practice transparency with trusted partners and consider diversifying with professional guidance to complement your instincts.' },
  Sagittarius: { spendingStyle: 'Adventurous and optimistic. You spend on travel, education, philosophy, and experiences that broaden your horizons.', savingStyle: 'You save for freedom, not security. Travel funds and "adventure money" motivate you more than traditional savings accounts.', comfortStyle: 'You spend on travel, learning, outdoor gear, cultural experiences, and anything that feeds your sense of adventure and discovery.', moneyStrengths: ['Optimistic risk-taking that pays off', 'Global perspective on opportunities', 'Ability to earn through teaching and consulting'], moneyChallenges: ['Restless spending on travel and experiences', 'Difficulty with financial routine', 'May neglect long-term planning'], moneyTip: 'Set up a dedicated travel fund and automate long-term investments so you can enjoy adventures without sacrificing future security.' },
  Capricorn: { spendingStyle: 'Disciplined and purposeful. Every expense has a reason. You view spending as an investment and avoid waste.', savingStyle: 'You are perhaps the best natural saver of the zodiac. Long-term financial planning, retirement accounts, and wealth building come naturally.', comfortStyle: 'You invest in quality, status-appropriate items that project professionalism and durability. You appreciate fine craftsmanship.', moneyStrengths: ['Exceptional long-term financial planning', 'Natural ability to build wealth over time', 'Disciplined approach to spending'], moneyChallenges: ['Can be overly frugal', 'Difficulty enjoying money', 'May measure self-worth by net worth'], moneyTip: 'Schedule regular "enjoyment spending" to remind yourself that wealth is meant to enhance life, not just accumulate.' },
  Aquarius: { spendingStyle: 'Unconventional and values-driven. You spend on technology, causes, innovations, and anything that aligns with your ideals.', savingStyle: 'You may use innovative or unconventional savings methods. You are drawn to ethical investing and socially responsible financial products.', comfortStyle: 'You spend on tech gadgets, subscriptions, charitable donations, community projects, and anything that serves the greater good.', moneyStrengths: ['Visionary investment thinking', 'Early adoption of financial technology', 'Values-driven wealth building'], moneyChallenges: ['Inconsistent financial habits', 'May prioritize ideals over personal finances', 'Resistance to traditional financial advice'], moneyTip: 'Combine your innovative thinking with traditional financial fundamentals for the best of both worlds.' },
  Pisces: { spendingStyle: 'Intuitive and emotionally driven. You spend on things that feel right: art, music, charity, spiritual experiences, and helping others.', savingStyle: 'Saving requires conscious effort and structure for you. Automatic transfers and visual savings goals help you stay on track.', comfortStyle: 'You spend on creative supplies, spiritual tools, charitable giving, music, film, and anything that nourishes your soul.', moneyStrengths: ['Intuitive sense of financial flow', 'Generosity that creates goodwill', 'Creative approach to earning income'], moneyChallenges: ['Boundary issues with lending money', 'Escapism through spending', 'Difficulty with financial details'], moneyTip: 'Set clear boundaries around lending money and use automatic savings to build security without relying on willpower.' },
};

// ============================================================
// FIVE ELEMENTS (Chinese)
// ============================================================
export const fiveElementsData: Record<string, { element: string; elementEmoji: string; personality: string; strengths: string[]; challenges: string[]; advice: string; seasons: string; directions: string }> = {
  Rat: { element: 'Water', elementEmoji: '💧', personality: 'Rat individuals embody the flowing, adaptable energy of Water. You are naturally intuitive, quick-thinking, and able to navigate any situation with grace. Your mind works like a flowing river — always moving, always finding the path of least resistance toward your goals.', strengths: ['Highly adaptable to change', 'Strong intuition and perception', 'Excellent problem-solving ability', 'Natural diplomacy and charm'], challenges: ['Can be overly cautious', 'May dwell on emotions', 'Difficulty with commitment', 'Tendency to overthink'], advice: 'Like water, find the balance between flowing freely and holding your ground. Practice decisive action when your intuition speaks clearly.', seasons: 'Winter', directions: 'North' },
  Ox: { element: 'Earth', elementEmoji: '🌍', personality: 'Ox individuals carry the steady, grounding energy of Earth. You are the rock that others lean on — reliable, patient, and deeply rooted in your values. Your determination is legendary, and once you set your mind to something, nothing can divert you from your path.', strengths: ['Exceptional patience and persistence', 'Deeply reliable and trustworthy', 'Strong work ethic and discipline', 'Grounded and practical approach'], challenges: ['Can be stubborn and inflexible', 'Slow to adapt to change', 'May suppress emotions', 'Difficulty expressing vulnerability'], advice: 'Earth needs rain to stay fertile. Allow yourself to be vulnerable and embrace change as nourishment rather than threat.', seasons: 'Transitional seasons', directions: 'Center' },
  Tiger: { element: 'Wood', elementEmoji: '🌿', personality: 'Tiger individuals embody the expansive, growing energy of Wood. You are bold, ambitious, and always reaching upward like a tree stretching toward sunlight. Your natural courage and leadership inspire others to grow alongside you.', strengths: ['Natural leadership and courage', 'Generous and warm-hearted', 'Strong sense of justice', 'Infectious enthusiasm and energy'], challenges: ['Can be impulsive and reckless', 'Difficulty with authority', 'May act without thinking', 'Struggles with patience'], advice: 'Even the tallest tree needs deep roots. Practice grounding your bold visions with careful planning and patient execution.', seasons: 'Spring', directions: 'East' },
  Rabbit: { element: 'Wood', elementEmoji: '🌿', personality: 'Rabbit individuals carry the gentle, flexible energy of Wood in its most refined form. Like bamboo, you bend without breaking, adapting to circumstances with grace and elegance. Your artistic sensibility and diplomatic nature create harmony wherever you go.', strengths: ['Exceptional diplomatic skills', 'Refined artistic taste', 'Patient and persistent', 'Natural peacemaker'], challenges: ['Can be overly passive', 'May avoid necessary confrontation', 'Tendency to worry', 'Difficulty making firm decisions'], advice: 'Bamboo is flexible but incredibly strong. Know when to be gentle and when to stand firm. Your inner strength is greater than you realize.', seasons: 'Spring', directions: 'East' },
  Dragon: { element: 'Earth', elementEmoji: '🌍', personality: 'Dragon individuals embody Earth energy in its most powerful expression — like a mountain that commands respect and admiration. You are naturally authoritative, visionary, and capable of building something extraordinary. Your presence alone inspires confidence in others.', strengths: ['Natural authority and charisma', 'Visionary thinking', 'Exceptional confidence', 'Powerful presence and influence'], challenges: ['Can be overwhelming to others', 'Perfectionist tendencies', 'May demand too much from self and others', 'Difficulty delegating'], advice: 'The strongest mountains also nurture life on their slopes. Balance your drive for achievement with nurturing the people around you.', seasons: 'Transitional seasons', directions: 'Center' },
  Snake: { element: 'Fire', elementEmoji: '🔥', personality: 'Snake individuals carry the transformative, passionate energy of Fire tempered with deep wisdom. Your inner fire burns steadily rather than explosively, giving you intensity without volatility. You see beneath surfaces and understand the alchemy of transformation.', strengths: ['Deep wisdom and insight', 'Strategic and patient', 'Exceptional intuition', 'Elegant and sophisticated manner'], challenges: ['Can be secretive and suspicious', 'May hold grudges', 'Tendency toward jealousy', 'Difficulty trusting others'], advice: 'Fire illuminates when shared. Practice letting your inner light shine openly rather than keeping your gifts hidden behind a reserved exterior.', seasons: 'Summer', directions: 'South' },
  Horse: { element: 'Fire', elementEmoji: '🔥', personality: 'Horse individuals embody the free-spirited, energetic essence of Fire at its most dynamic. You are always moving forward, always seeking the next horizon. Your enthusiasm and warmth draw people to you like moths to a flame.', strengths: ['Boundless energy and enthusiasm', 'Natural warmth and generosity', 'Excellent social skills', 'Strong independent spirit'], challenges: ['Restless and impatient', 'Difficulty with commitment', 'May scatter energy', 'Can be impulsive with decisions'], advice: 'Even wildfire needs containment sometimes. Practice channeling your incredible energy into focused, sustained efforts.', seasons: 'Summer', directions: 'South' },
  Sheep: { element: 'Earth', elementEmoji: '🌍', personality: 'Sheep individuals embody the nurturing, creative energy of Earth at its gentlest. Like a fertile valley, you provide sustenance and beauty to those around you. Your creative spirit and compassionate nature create an atmosphere of peace and inspiration.', strengths: ['Deeply creative and artistic', 'Compassionate and empathetic', 'Strong aesthetic sense', 'Natural ability to create harmony'], challenges: ['Can be indecisive', 'Overly sensitive to criticism', 'May be too passive', 'Tendency toward worry'], advice: 'Fertile earth produces most when tended. Take active steps to nurture your dreams rather than waiting for them to bloom on their own.', seasons: 'Transitional seasons', directions: 'Center' },
  Monkey: { element: 'Metal', elementEmoji: '⚙️', personality: 'Monkey individuals carry the sharp, clever energy of Metal. Like a precision instrument, your mind works with remarkable accuracy and speed. You see patterns others miss and find innovative solutions to complex problems.', strengths: ['Exceptional intelligence and wit', 'Innovative problem-solving', 'Versatile and adaptable', 'Natural talent for strategy'], challenges: ['Can be manipulative', 'May be restless or unreliable', 'Tendency to show off', 'Difficulty with emotional depth'], advice: 'Metal is strongest when forged with purpose. Channel your brilliant mind toward meaningful goals rather than clever distractions.', seasons: 'Autumn', directions: 'West' },
  Rooster: { element: 'Metal', elementEmoji: '⚙️', personality: 'Rooster individuals embody Metal energy in its most refined and disciplined form. Like a well-crafted blade, you are precise, observant, and uncompromising in your standards. Your attention to detail and commitment to excellence set you apart.', strengths: ['Exceptional attention to detail', 'Strong organizational skills', 'Honest and straightforward', 'Hardworking and dedicated'], challenges: ['Can be overly critical', 'Perfectionist to a fault', 'May be blunt or tactless', 'Difficulty relaxing'], advice: 'Even the finest blade needs to rest in its sheath. Practice self-compassion and allow yourself moments of imperfection and joy.', seasons: 'Autumn', directions: 'West' },
  Dog: { element: 'Earth', elementEmoji: '🌍', personality: 'Dog individuals carry Earth energy in its most loyal and protective form. Like the ground beneath our feet, you provide stability, security, and unwavering support to those you love. Your integrity and sense of justice are unshakeable.', strengths: ['Deeply loyal and trustworthy', 'Strong sense of justice', 'Excellent judgment of character', 'Reliable and consistent'], challenges: ['Can be anxious or pessimistic', 'May be overly protective', 'Difficulty with change', 'Tendency to worry excessively'], advice: 'The earth supports all life without discrimination. Practice extending your loyalty and care beyond your immediate circle to find greater peace.', seasons: 'Transitional seasons', directions: 'Center' },
  Pig: { element: 'Water', elementEmoji: '💧', personality: 'Pig individuals embody Water energy in its most generous and flowing expression. Like a deep, nourishing river, you bring abundance, kindness, and good fortune wherever you flow. Your genuine warmth and big heart make the world a better place.', strengths: ['Generous and compassionate', 'Excellent taste and appreciation for beauty', 'Natural good fortune', 'Warm and sincere nature'], challenges: ['Can be naive or trusting', 'May overindulge', 'Difficulty with discipline', 'Can be taken advantage of'], advice: 'Flowing water nourishes everything but also knows where to go. Develop discernment about where to direct your generous spirit.', seasons: 'Winter', directions: 'North' },
};

// ============================================================
// TAROT YES/NO CARDS
// ============================================================
export const tarotCards = [
  { name: 'The Sun', emoji: '☀️', answer: 'Yes', meaning: 'A clear and positive signal. The energy around your question is bright and favorable. Move forward with confidence and optimism.', detail: 'This card suggests clarity, success, and a positive outcome. Your intentions are aligned with favorable energy. This is a strong "yes" — trust your instincts and take action.' },
  { name: 'The Star', emoji: '⭐', answer: 'Yes', meaning: 'Hope and healing surround your question. Trust the process and maintain faith — things are moving in a positive direction.', detail: 'The Star brings guidance, inspiration, and renewed hope. While the path may still unfold gradually, the underlying energy is deeply supportive. Trust in positive outcomes.' },
  { name: 'The Fool', emoji: '🃏', answer: 'Yes, with openness', meaning: 'A new beginning is indicated. Say yes to the adventure, but stay open-minded about the form the answer takes.', detail: 'The Fool encourages you to take a leap of faith. The answer leans positive, but it invites you to embrace uncertainty and approach the situation with fresh eyes and an adventurous spirit.' },
  { name: 'The High Priestess', emoji: '🌙', answer: 'Not yet', meaning: 'The answer is not clear right now. Trust your intuition and wait for more information before making a decision.', detail: 'This card suggests that deeper wisdom is needed. The timing may not be right, or there are hidden factors to consider. Listen to your inner voice and be patient.' },
  { name: 'The Hermit', emoji: '🏔️', answer: 'Reflect first', meaning: 'Before saying yes or no, take time for quiet reflection. The answer will come through inner contemplation, not external advice.', detail: 'The Hermit asks you to withdraw briefly from the noise and seek your own truth. This is not a "no" — it is an invitation to go deeper before deciding.' },
  { name: 'Two of Swords', emoji: '⚔️', answer: 'Uncertain', meaning: 'The situation is balanced between possibilities. Neither yes nor no is clearly indicated. Seek more clarity before deciding.', detail: 'This card represents a difficult choice with valid arguments on both sides. It encourages you to gather more information and look at the situation from a different angle.' },
  { name: 'Three of Swords', emoji: '💔', answer: 'No, reconsider', meaning: 'This path may lead to heartache or disappointment. Consider whether this is truly the right direction for you.', detail: 'While not always negative, this card suggests that painful truths may need to be faced. It may indicate that the current approach will not lead to the outcome you desire.' },
  { name: 'The Tower', emoji: '🌩️', answer: 'No, prepare for change', meaning: 'Unexpected changes may disrupt your plans. This is not the right time to proceed as currently planned.', detail: 'The Tower indicates that the foundation of this situation may be unstable. Rather than pushing forward, consider stepping back and reassessing the entire situation.' },
  { name: 'Death', emoji: '🦋', answer: 'No, but transform', meaning: 'The current form of this question needs to end before something better can begin. Let go and allow transformation.', detail: 'This card rarely means literal "no." Instead, it suggests that something old must die for something new to be born. The answer to your question involves fundamental change.' },
];

// ============================================================
// RISING SIGN ESTIMATOR DATA
// ============================================================
export const risingSignEstimates = [
  { timeRange: '12:00 AM – 2:00 AM', sign: 'Capricorn', emoji: '♑', note: 'Late night births often carry the ambitious, disciplined energy of Capricorn rising.' },
  { timeRange: '2:00 AM – 4:00 AM', sign: 'Aquarius', emoji: '♒', note: 'Early morning births often bring the innovative, independent energy of Aquarius rising.' },
  { timeRange: '4:00 AM – 6:00 AM', sign: 'Pisces', emoji: '♓', note: 'Pre-dawn births often carry the intuitive, dreamy energy of Pisces rising.' },
  { timeRange: '6:00 AM – 8:00 AM', sign: 'Aries', emoji: '♈', note: 'Sunrise births often bring the bold, direct energy of Aries rising — the pioneer waking up with the sun.' },
  { timeRange: '8:00 AM – 10:00 AM', sign: 'Taurus', emoji: '♉', note: 'Mid-morning births often carry the grounded, steady energy of Taurus rising.' },
  { timeRange: '10:00 AM – 12:00 PM', sign: 'Gemini', emoji: '♊', note: 'Late morning births often bring the communicative, curious energy of Gemini rising.' },
  { timeRange: '12:00 PM – 2:00 PM', sign: 'Cancer', emoji: '♋', note: 'Midday births often carry the nurturing, protective energy of Cancer rising.' },
  { timeRange: '2:00 PM – 4:00 PM', sign: 'Leo', emoji: '♌', note: 'Early afternoon births often bring the expressive, confident energy of Leo rising — at the peak of the day.' },
  { timeRange: '4:00 PM – 6:00 PM', sign: 'Virgo', emoji: '♍', note: 'Late afternoon births often carry the analytical, practical energy of Virgo rising.' },
  { timeRange: '6:00 PM – 8:00 PM', sign: 'Libra', emoji: '♎', note: 'Early evening births often bring the diplomatic, aesthetic energy of Libra rising.' },
  { timeRange: '8:00 PM – 10:00 PM', sign: 'Scorpio', emoji: '♏', note: 'Night births often carry the intense, perceptive energy of Scorpio rising.' },
  { timeRange: '10:00 PM – 12:00 AM', sign: 'Sagittarius', emoji: '♐', note: 'Late evening births often bring the adventurous, philosophical energy of Sagittarius rising.' },
];

// ============================================================
// PERSONAL YEAR THEMES
// ============================================================
export const personalYearThemes: Record<number, { title: string; theme: string; description: string; focus: string; challenges: string; opportunity: string }> = {
  1: { title: 'New Beginnings Year', theme: 'Initiation and fresh starts', description: 'Personal Year 1 marks the beginning of a new nine-year cycle. This is a year of planting seeds, starting new projects, and asserting your independence. The energy supports bold moves, new directions, and self-discovery.', focus: 'Starting new ventures, asserting independence, setting intentions for the next nine years.', challenges: 'Impatience, feeling like you are starting from scratch, self-doubt about new directions.', opportunity: 'A rare window to redefine your path and set powerful intentions that will shape the next decade of your life.' },
  2: { title: 'Partnership Year', theme: 'Cooperation and balance', description: 'Personal Year 2 slows the pace and focuses on relationships, partnerships, and emotional harmony. This is a year for diplomacy, patience, and learning to work with others. Key connections may form or deepen.', focus: 'Building partnerships, developing patience, improving communication, finding balance.', challenges: 'Indecision, sensitivity to others opinions, feeling dependent, avoiding necessary confrontation.', opportunity: 'Building the supportive relationships and emotional foundations that will sustain you through the entire nine-year cycle.' },
  3: { title: 'Creative Expression Year', theme: 'Joy, creativity, and communication', description: 'Personal Year 3 is a vibrant, social year focused on creative expression, communication, and joyful experiences. This is a time to express yourself, share your ideas, and embrace the lighter side of life.', focus: 'Creative projects, social connections, self-expression, communication, and having fun.', challenges: 'Scattered energy, superficial interactions, avoiding deeper issues, emotional volatility.', opportunity: 'Discovering and expressing your authentic creative voice, which can open doors you never imagined.' },
  4: { title: 'Foundation Year', theme: 'Structure, discipline, and hard work', description: 'Personal Year 4 is a serious, productive year focused on building solid foundations. This is a time for discipline, organization, and putting in the steady work needed to create lasting results.', focus: 'Building structures, organizing your life, career advancement, health routines, financial planning.', challenges: 'Overwork, rigidity, feeling restricted, frustration with slow progress.', opportunity: 'Creating the stable, organized foundation that will support major achievements in years to come.' },
  5: { title: 'Freedom and Change Year', theme: 'Adventure, change, and expansion', description: 'Personal Year 5 brings dynamic energy, unexpected changes, and a thirst for freedom and adventure. This is a year to break routines, explore new horizons, and embrace the unexpected with curiosity.', focus: 'Travel, learning new skills, embracing change, taking calculated risks, expanding your world.', challenges: 'Restlessness, overcommitment, scattered focus, resistance to commitment, impulsive decisions.', opportunity: 'Breaking free from limitations and discovering aspects of yourself and the world you never knew existed.' },
  6: { title: 'Responsibility Year', theme: 'Love, family, and service', description: 'Personal Year 6 focuses on home, family, responsibility, and service to others. This is a year for deepening relationships, creating harmony in your home, and accepting responsibilities with grace.', focus: 'Family relationships, home improvement, community service, health and wellness, creative expression.', challenges: 'Over-responsibility, self-sacrifice, boundary issues, perfectionism in caregiving.', opportunity: 'Creating the loving, harmonious home and community life that will nourish you for years to come.' },
  7: { title: 'Inner Wisdom Year', theme: 'Spirituality, study, and reflection', description: 'Personal Year 7 is a year of introspection, spiritual growth, and deep learning. This is a time to go inward, seek truth, develop your inner wisdom, and connect with something larger than yourself.', focus: 'Spiritual practice, study and research, solitude and reflection, developing expertise.', challenges: 'Isolation, over-analysis, disconnection from others, spiritual bypassing of practical issues.', opportunity: 'Developing the inner wisdom and expertise that will become your greatest asset in the years ahead.' },
  8: { title: 'Abundance Year', theme: 'Power, achievement, and material success', description: 'Personal Year 8 is a powerful year of achievement, recognition, and material abundance. This is a time to step into your power, reap rewards from past efforts, and develop mastery in your chosen field.', focus: 'Career advancement, financial growth, leadership, personal empowerment, achieving goals.', challenges: 'Workaholism, materialism, power struggles, difficulty balancing work and personal life.', opportunity: 'Achieving a level of mastery and success that can provide lasting security and the resources to make a meaningful impact.' },
  9: { title: 'Completion Year', theme: 'Release, wisdom, and transformation', description: 'Personal Year 9 marks the end of the nine-year cycle. This is a year for completion, letting go, forgiveness, and preparing for the powerful new beginning that awaits in the next cycle.', focus: 'Completing unfinished business, letting go of what no longer serves, sharing wisdom, humanitarian service.', challenges: 'Difficulty letting go, nostalgia, grief, uncertainty about the future, emotional release.', opportunity: 'Releasing everything that has been holding you back, making space for the extraordinary new chapter that begins next year.' },
};

// ============================================================
// BIRTH CHART READING CHECKLIST
// ============================================================
export const birthChartChecklist = [
  { step: 1, title: 'Identify Your Big Three', description: 'Start with your Sun sign (identity), Moon sign (emotions), and Rising sign (outer personality). These three placements form the foundation of your chart reading.' },
  { step: 2, title: 'Note the Elements Distribution', description: 'Count how many planets fall in Fire, Earth, Air, and Water signs. A dominant element reveals your overall energy and approach to life.' },
  { step: 3, title: 'Check the Modalities', description: 'Look at the balance of Cardinal (initiating), Fixed (sustaining), and Mutable (adapting) energy. This reveals how you take action and handle change.' },
  { step: 4, title: 'Examine Personal Planets', description: 'Study Mercury (communication), Venus (love and values), and Mars (action and desire). These describe your daily personality and how you interact with the world.' },
  { step: 5, title: 'Explore Social Planets', description: 'Consider Jupiter (growth and luck) and Saturn (discipline and challenges). These reveal your opportunities for expansion and areas requiring effort.' },
  { step: 6, title: 'Identify Key Aspects', description: 'Look at the major angles between planets: conjunctions, squares, trines, sextiles, and oppositions. These reveal how different parts of your personality interact.' },
  { step: 7, title: 'Read the Houses', description: 'Each house represents a life area (self, money, communication, home, etc.). The planets in each house show where energy is focused in your life.' },
  { step: 8, title: 'Find Chart Patterns', description: 'Look for patterns like stelliums (three or more planets in one sign or house), t-squares, or grand trines. These add important themes to your reading.' },
  { step: 9, title: 'Note the North and South Nodes', description: 'The lunar nodes represent your life direction (North Node) and past patterns (South Node). They reveal your evolutionary path and growth edge.' },
  { step: 10, title: 'Synthesize the Reading', description: 'Bring all the pieces together into a coherent narrative. Look for repeated themes, contradictions, and the overall story your chart tells about who you are and who you are becoming.' },
  { step: 11, title: 'Identify Strengths and Challenges', description: 'Based on your reading, list three key strengths and three growth areas. This practical summary is more useful than a general personality description.' },
  { step: 12, title: 'Form Reflection Questions', description: 'Turn your findings into actionable questions for self-reflection. For example: "How can I balance my need for independence with my desire for partnership?"' },
];

// ============================================================
// BIRTH TIME UNKNOWN GUIDE
// ============================================================
export const birthTimeUnknownGuide = {
  intro: 'Not everyone knows their exact time of birth. Whether it was lost, never recorded, or simply unknown, you can still extract meaningful insights from your birth chart. This guide explains what you can and cannot read accurately without a birth time.',
  whatWorks: [
    { title: 'Sun Sign — Fully Accurate', description: 'Your Sun sign only requires your birth date. It reveals your core identity, ego, and life direction. This is the foundation of astrological interpretation.' },
    { title: 'Moon Sign — Usually Accurate', description: 'The Moon changes signs approximately every 2.5 days. If you know your date, your Moon sign can usually be determined with reasonable accuracy, though it may be off by one sign near sign boundaries.' },
    { title: 'Mercury, Venus, Mars Signs — Accurate', description: 'These inner planets are determined primarily by your birth date and year. They reveal your communication style (Mercury), love nature (Venus), and drive (Mars).' },
    { title: 'Jupiter and Saturn Signs — Accurate', description: 'These outer planets change signs roughly once per year. Their signs are determined by your birth year and reveal themes of growth (Jupiter) and discipline (Saturn).' },
    { title: 'Planet-to-Planet Aspects — Mostly Accurate', description: 'The angular relationships between planets (conjunctions, squares, trines, etc.) are largely determined by date alone. Only aspects involving the Moon or angles may be affected by unknown birth time.' },
    { title: 'Element and Modality Balance — Mostly Accurate', description: 'The distribution of Fire, Earth, Air, and Water energy, along with Cardinal, Fixed, and Modal energy, is primarily determined by birth date. This reveals your overall energetic makeup.' },
  ],
  whatCannot: [
    { title: 'Rising Sign (Ascendant) — Cannot Determine', description: 'The Rising sign changes approximately every two hours and requires both birth time and location. Without it, you cannot know your outer personality mask or which zodiac sign governs your first house.' },
    { title: 'House Placements — Cannot Determine', description: 'House positions change rapidly with birth time. Without it, you cannot know which life area each planet influences. This is one of the most significant losses.' },
    { title: 'Midheaven (MC) — Cannot Determine', description: 'Your Midheaven, which relates to career and public reputation, is calculated from birth time. Without it, career-related chart interpretation is limited.' },
    { title: 'Exact Moon Sign — May Be Uncertain', description: 'If you were born on a day when the Moon changed signs, your Moon sign could be one of two possibilities. This affects emotional interpretation.' },
    { title: 'House-Based Aspects — Cannot Determine', description: 'Aspects that involve house cusps or the angles (like a planet conjunct the Ascendant) cannot be read without birth time.' },
  ],
  alternatives: [
    { title: 'Use Noon as a Default', description: 'Many astrologers use 12:00 PM as a default birth time for solar charts. This gives a general sense of house positions, though it should not be treated as precise.' },
    { title: 'Try Birth Time Rectification', description: 'Professional astrologers can sometimes rectify (estimate) your birth time by analyzing major life events and working backward. This requires significant expertise.' },
    { title: 'Focus on Planetary Placements', description: 'Without houses, focus your reading on the signs each planet is in, element and modality balance, and planet-to-planet aspects. These provide a rich interpretation even without birth time.' },
    { title: 'Explore Your Big Three', description: 'Even without your Rising sign, the combination of Sun and Moon signs provides a powerful two-layer personality profile. Use our Big Three tool with an estimated Rising sign for reflection.' },
  ],
};

// ============================================================
// DAILY HOROSCOPE REFLECTIONS
// ============================================================
export const dailyReflections: Record<string, string[]> = {
  Aries: [
    'Today is a day for bold action. Trust your first instinct and move quickly on opportunities that excite you. Your energy is amplified when you take the lead.',
    'Channel your competitive spirit into something constructive today. A challenge at work or in your personal life is actually an invitation to grow.',
    'Practice patience today. Not every battle needs to be fought immediately. Sometimes the wisest warrior knows when to wait for the right moment.',
    'Your natural enthusiasm is contagious today. Share your vision with someone who needs encouragement. Your words carry extra weight.',
    'Focus on starting something new today. Whether it is a project, a conversation, or a personal habit, your initiatory energy is at its peak.',
    'Collaborate with someone different from you today. Your independent spirit grows stronger when combined with others perspectives.',
    'Reflect on what you are truly passionate about. Your fire burns brightest when aligned with genuine purpose, not just external pressure.',
  ],
  Taurus: [
    'Today favors slow, steady progress. Your patience is an asset, not a weakness. Trust that consistent effort will yield results.',
    'Treat yourself to something beautiful or comforting today. Your well-being benefits from sensory pleasures and environments that feel harmonious.',
    'Financial clarity may come today. Take a practical look at your resources and make a grounded decision about spending or saving.',
    'Nature is especially healing for you today. A walk outdoors, time in a garden, or simply opening a window can restore your inner balance.',
    'Someone may need your reliable support today. Your steady presence is more valuable than you realize.',
    'Resist the urge to dig in your heels about something minor. Flexibility is not weakness; it is the art of choosing your battles wisely.',
    'Reflect on what truly provides security for you. Is it money, relationships, routines, or something deeper? Understanding this helps you make better choices.',
  ],
  Gemini: [
    'Your mind is especially sharp today. Use it for learning, writing, or having a conversation that matters. Ideas flow easily.',
    'Connect with someone new or reach out to an old friend. Your social energy is heightened, and meaningful exchanges are likely.',
    'Today is ideal for tackling communication tasks. Emails, calls, presentations, and writing projects all benefit from your current mental clarity.',
    'Practice listening more than speaking today. Your natural talkativeness is a gift, but deeper understanding comes from quiet reception.',
    'Explore a new topic or learn a new skill today. Your curiosity is your superpower when channeled into focused learning.',
    'Avoid spreading yourself too thin. Choose one or two priorities and give them your full attention for better results.',
    'Reflect on what you truly want to communicate to the world. Your voice matters, and today is a good day to clarify your message.',
  ],
  Cancer: [
    'Today favors emotional reflection and self-care. Create a nurturing space for yourself, whether physical or emotional.',
    'A family matter may come into focus today. Approach it with compassion and clear boundaries. You can care deeply without losing yourself.',
    'Your intuition is heightened. Pay attention to your gut feelings today, especially about people and situations.',
    'Cook a nourishing meal or create something cozy in your home space. These simple acts replenish your emotional reserves.',
    'Someone close to you may need your empathy today. Your ability to understand others emotions is a rare gift.',
    'Be gentle with yourself today. You tend to absorb others emotions easily. Practice distinguishing between what is yours and what belongs to others.',
    'Reflect on what makes you feel truly at home. Security comes from within, not just from your physical environment.',
  ],
  Leo: [
    'Your natural warmth and charisma are amplified today. Step into a leadership role or share your creative vision with confidence.',
    'Express yourself creatively today. Whether through art, performance, conversation, or how you dress, let your inner light shine.',
    'Recognize someone else achievements today. Your generosity of spirit grows when you celebrate others alongside yourself.',
    'A creative project may gain momentum. Trust your artistic instincts and do not be afraid to take bold creative risks.',
    'Focus on what brings you genuine joy today. Authentic happiness is your most magnetic quality.',
    'Practice humility alongside confidence today. The strongest leaders are those who listen as much as they speak.',
    'Reflect on where you are seeking external validation versus internal fulfillment. True confidence comes from knowing your own worth.',
  ],
  Virgo: [
    'Today favors organization and attention to detail. Tackle a task that requires precision, and take satisfaction in doing it well.',
    'Your analytical mind is especially sharp. Use it to solve a problem, improve a system, or understand a complex situation.',
    'Practice self-compassion today. Your high standards are admirable, but you deserve the same kindness you give to others.',
    'Help someone with a practical task today. Your service-oriented nature finds fulfillment in being genuinely useful.',
    'Health and wellness are highlighted. Pay attention to what your body needs today, whether rest, movement, or nourishment.',
    'Avoid getting lost in small details at the expense of the bigger picture. Step back occasionally to see the whole landscape.',
    'Reflect on what "good enough" means to you. Perfection is an ideal, not a requirement for worthiness or happiness.',
  ],
  Libra: [
    'Today favors partnership and collaboration. Seek out someone whose perspective complements yours for richer results.',
    'Create something beautiful today, whether in your physical space, through art, or by arranging a meaningful social gathering.',
    'A relationship matter may come into focus. Approach it with your natural diplomacy and genuine desire for fairness.',
    'Practice making a decision today, even a small one. Your ability to see all sides is a gift, but action requires choosing.',
    'Surround yourself with beauty and harmony today. Your aesthetic sensitivity is a genuine source of well-being.',
    'Address a conflict or imbalance in a relationship. Your diplomatic skills are needed, and the timing is right.',
    'Reflect on where you are seeking external harmony versus internal peace. True balance begins within.',
  ],
  Scorpio: [
    'Today favors deep thinking and strategic action. Your perceptive nature can see beneath the surface of situations.',
    'Trust your instincts about a person or situation today. Your ability to read between the lines is heightened.',
    'Let go of something you have been holding onto. Release, whether emotional, mental, or physical, creates space for transformation.',
    'A research or investigation task benefits from your focused intensity. Channel your determination into uncovering truth.',
    'Be vulnerable with someone you trust today. Your intensity is a strength, but connection requires letting your guard down.',
    'Practice forgiveness, whether for yourself or someone else. Holding onto past hurts weighs you down more than the other person.',
    'Reflect on where you are using control as a substitute for trust. Letting go is not weakness; it is profound strength.',
  ],
  Sagittarius: [
    'Today favors exploration and learning. Whether through travel, reading, or conversation, expand your horizons.',
    'Share your enthusiasm and optimism with someone who needs it. Your ability to see the bigger picture is contagious.',
    'A philosophical question or life meaning topic may capture your attention. Follow that curiosity where it leads.',
    'Practice commitment to one thing today, even when the grass looks greener elsewhere. Depth comes from staying, not leaving.',
    'Connect with someone from a different background or culture. Your open-mindedness grows through diverse perspectives.',
    'Be honest but kind in your communication today. Your directness is refreshing, but delivery matters.',
    'Reflect on what adventure means to you. It is not always about geography — sometimes the greatest journeys are internal.',
  ],
  Capricorn: [
    'Today favors focused work and strategic planning. Your disciplined approach yields impressive results when applied consistently.',
    'Take a step toward a long-term goal today. Even a small action builds momentum toward something meaningful.',
    'Balance your ambition with moments of rest and reflection. Sustainable success requires both effort and recovery.',
    'Your natural authority is respected today. Lead by example rather than through command.',
    'Financial or career matters benefit from your careful attention. Review your plans and make adjustments where needed.',
    'Allow yourself to express emotion today. Your serious exterior conceals deep feelings that deserve acknowledgment.',
    'Reflect on what success truly means to you. Is it measured by external achievements or internal fulfillment?',
  ],
  Aquarius: [
    'Today favors innovative thinking and humanitarian action. Your unique perspective is needed more than ever.',
    'Connect with your community or a cause you believe in. Your ability to see systemic patterns helps create meaningful change.',
    'An unusual idea or approach may come to you. Honor it. What seems strange today may be visionary tomorrow.',
    'Practice emotional presence with someone close to you. Your intellectual gifts are powerful, but heart connection matters too.',
    'Technology and forward-thinking tools may play a helpful role today. Embrace innovation that simplifies or improves life.',
    'Balance your independence with interdependence. The strongest changes happen through both individual vision and collective action.',
    'Reflect on where you can be more open-minded. Even the most progressive thinkers have blind spots worth examining.',
  ],
  Pisces: [
    'Today favors creativity, intuition, and spiritual connection. Your inner world is rich with inspiration waiting to be expressed.',
    'Create something artistic or write down your dreams. Your imagination is a powerful tool for self-understanding and healing.',
    'Practice setting healthy boundaries today. Your empathy is a gift, but it needs protection from being depleted.',
    'A spiritual practice or quiet meditation may bring unexpected clarity. Stillness reveals what activity obscures.',
    'Help someone in need today. Your compassion is not just a feeling — it is a force for positive change in the world.',
    'Ground yourself in practical reality alongside your rich inner world. Both the dreamer and the builder are needed.',
    'Reflect on where you are escaping versus engaging. True freedom comes from facing reality with compassion, not avoiding it.',
  ],
};

// ============================================================
// 2026 HOROSCOPE THEMES
// ============================================================
export const horoscope2026: Record<string, { yearTheme: string; keyFocus: string; growthArea: string; luckyMonths: number[]; challenge: string; opportunity: string }> = {
  Aries: { yearTheme: 'Year of Bold Initiatives', keyFocus: 'Launching new projects, asserting leadership, and breaking through barriers that have held you back. 2026 rewards courage.', growthArea: 'Learning patience and building sustainable momentum behind your initial burst of enthusiasm.', luckyMonths: [3, 7, 11], challenge: 'Maintaining energy and focus through the entire year rather than just the exciting beginnings.', opportunity: 'A major career or personal initiative launched in early 2026 could define the next several years of your life.' },
  Taurus: { yearTheme: 'Year of Steady Abundance', keyFocus: 'Building financial security, deepening relationships, and creating lasting value through patience and quality.', growthArea: 'Embracing necessary changes rather than clinging to comfortable but outdated patterns.', luckyMonths: [5, 6, 10], challenge: 'Letting go of something familiar to make room for something better that has not yet arrived.', opportunity: 'A financial or creative investment made with patience and care in 2026 could yield significant long-term returns.' },
  Gemini: { yearTheme: 'Year of Expanded Communication', keyFocus: 'Sharing your ideas with a wider audience, learning new skills, and building connections across diverse fields.', growthArea: 'Choosing depth over breadth and committing fully to your most promising opportunities.', luckyMonths: [1, 5, 9], challenge: 'Avoiding the temptation to spread yourself too thin across too many interests or social circles.', opportunity: 'A writing, teaching, or media project could reach an audience you never expected, amplifying your voice significantly.' },
  Cancer: { yearTheme: 'Year of Emotional Breakthrough', keyFocus: 'Deepening self-understanding, strengthening family bonds, and creating a nurturing foundation for future growth.', growthArea: 'Developing emotional independence alongside your natural tendency to care for others.', luckyMonths: [2, 6, 7], challenge: 'Learning to set boundaries with love rather than through withdrawal or self-sacrifice.', opportunity: 'A deeper understanding of your emotional patterns could transform your closest relationships for the better.' },
  Leo: { yearTheme: 'Year of Creative Power', keyFocus: 'Expressing yourself authentically, stepping into leadership, and creating something that showcases your unique gifts.', growthArea: 'Learning to share the spotlight and celebrate others achievements alongside your own.', luckyMonths: [4, 8, 12], challenge: 'Balancing your need for recognition with genuine humility and collaborative spirit.', opportunity: 'A creative project or leadership role in 2026 could bring the recognition you have been working toward.' },
  Virgo: { yearTheme: 'Year of Mastery and Service', keyFocus: 'Perfecting your craft, optimizing systems, and finding deeper meaning in your daily work and routines.', growthArea: 'Celebrating your achievements rather than immediately moving to the next improvement.', luckyMonths: [3, 8, 9], challenge: 'Releasing perfectionism enough to enjoy the journey and appreciate progress over flawlessness.', opportunity: 'Your attention to detail and analytical skills could lead to a breakthrough solution for a complex problem.' },
  Libra: { yearTheme: 'Year of Harmonious Partnerships', keyFocus: 'Building meaningful partnerships, creating beauty in your environment, and finding balance between self and others.', growthArea: 'Making decisions with confidence rather than endlessly weighing all perspectives.', luckyMonths: [5, 9, 10], challenge: 'Choosing a direction and committing to it, even when other options still seem appealing.', opportunity: 'A significant partnership — personal or professional — formed or deepened in 2026 could be transformative.' },
  Scorpio: { yearTheme: 'Year of Transformation', keyFocus: 'Releasing old patterns, embracing deep change, and reinventing key areas of your life with courage and intention.', growthArea: 'Learning to trust others and build vulnerability-based connections rather than power-based ones.', luckyMonths: [1, 8, 11], challenge: 'Letting go of control and trusting the transformation process even when it feels uncomfortable.', opportunity: 'A significant release — of a habit, relationship, or belief — could open the door to profound personal growth.' },
  Sagittarius: { yearTheme: 'Year of Expansion and Wisdom', keyFocus: 'Exploring new philosophies, traveling or learning broadly, and sharing your wisdom with a growing audience.', growthArea: 'Committing to one path deeply enough to master it, rather than sampling many superficially.', luckyMonths: [2, 6, 12], challenge: 'Grounding your expansive vision in practical action and consistent follow-through.', opportunity: 'Teaching, publishing, or sharing your knowledge in 2026 could establish you as an authority in your field.' },
  Capricorn: { yearTheme: 'Year of Achievement and Recognition', keyFocus: 'Reaching major career milestones, building lasting structures, and earning the respect and recognition you deserve.', growthArea: 'Making space for play, joy, and emotional expression alongside your professional ambitions.', luckyMonths: [1, 4, 10], challenge: 'Avoiding workaholic patterns that sacrifice health and relationships for professional advancement.', opportunity: 'A long-term project or career investment made in 2026 could reach a significant milestone or breakthrough.' },
  Aquarius: { yearTheme: 'Year of Innovation and Impact', keyFocus: 'Developing innovative solutions, contributing to causes you believe in, and connecting with like-minded visionaries.', growthArea: 'Balancing your idealistic vision with practical execution and genuine human connection.', luckyMonths: [3, 7, 11], challenge: 'Translating your innovative ideas into tangible results rather than keeping them in the realm of concepts.', opportunity: 'A technology, social, or environmental initiative you champion in 2026 could gain meaningful traction and impact.' },
  Pisces: { yearTheme: 'Year of Creative and Spiritual Awakening', keyFocus: 'Deepening your spiritual practice, expressing your artistic vision, and finding meaning through service and compassion.', growthArea: 'Building practical structures to support your creative and spiritual gifts rather than relying on inspiration alone.', luckyMonths: [2, 5, 9], challenge: 'Setting boundaries between your empathy and others needs, and grounding your dreams in actionable plans.', opportunity: 'A creative or spiritual project pursued with both inspiration and discipline in 2026 could reach a wide audience.' },
};
