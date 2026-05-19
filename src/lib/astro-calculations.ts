import { zodiacSigns, chineseZodiacAnimals, moonPhases, lifePathMeanings, compatibilityMatrix, elementDescriptions } from './astro-data';

// Calculate zodiac sign from birth date
export function calculateZodiacSign(month: number, day: number): typeof zodiacSigns[0] | null {
  // Special case for Capricorn which spans year boundary
  for (const sign of zodiacSigns) {
    if (sign.startMonth === 12 && sign.endMonth === 1) {
      // Capricorn: Dec 22 - Jan 19
      if ((month === 12 && day >= sign.startDay) || (month === 1 && day <= sign.endDay)) {
        return sign;
      }
    } else {
      if (
        (month === sign.startMonth && day >= sign.startDay) ||
        (month === sign.endMonth && day <= sign.endDay)
      ) {
        return sign;
      }
    }
  }
  return null;
}

// Calculate Chinese Zodiac from birth year
export function calculateChineseZodiac(year: number): typeof chineseZodiacAnimals[0] | null {
  // Chinese zodiac follows lunar calendar; base year is 2020 (Rat)
  const baseYear = 2020;
  const animals = chineseZodiacAnimals;
  const index = ((year - baseYear) % 12 + 12) % 12;
  return animals[index];
}

// Calculate Life Path Number from birth date
export function calculateLifePathNumber(month: number, day: number, year: number): number {
  const reduce = (n: number): number => {
    while (n > 9 && n !== 11 && n !== 22 && n !== 33) {
      n = String(n).split('').reduce((sum, d) => sum + parseInt(d), 0);
    }
    return n;
  };

  const sum = month + day + year;
  return reduce(reduce(sum));
}

// Get life path meaning
export function getLifePathMeaning(num: number): string {
  return lifePathMeanings[num] || "This is a master number with special significance in numerology.";
}

// Calculate moon phase from date (simplified astronomical calculation)
export function calculateMoonPhase(year: number, month: number, day: number): typeof moonPhases[0] {
  // Known new moon reference: January 6, 2000
  const knownNewMoon = new Date(2000, 0, 6, 18, 14, 0);
  const targetDate = new Date(year, month - 1, day, 12, 0, 0);
  
  // Synodic month is approximately 29.53059 days
  const synodicMonth = 29.53059;
  const diffMs = targetDate.getTime() - knownNewMoon.getTime();
  const diffDays = diffMs / (1000 * 60 * 60 * 24);
  
  // Calculate the phase age (days since last new moon)
  const phaseAge = ((diffDays % synodicMonth) + synodicMonth) % synodicMonth;
  
  // Map to 8 phases
  const phaseIndex = Math.floor(phaseAge / (synodicMonth / 8));
  const clampedIndex = Math.min(phaseIndex, 7);
  
  return moonPhases[clampedIndex];
}

// Calculate moon illumination percentage
export function calculateMoonIllumination(year: number, month: number, day: number): number {
  const knownNewMoon = new Date(2000, 0, 6, 18, 14, 0);
  const targetDate = new Date(year, month - 1, day, 12, 0, 0);
  const synodicMonth = 29.53059;
  const diffMs = targetDate.getTime() - knownNewMoon.getTime();
  const diffDays = diffMs / (1000 * 60 * 60 * 24);
  const phaseAge = ((diffDays % synodicMonth) + synodicMonth) % synodicMonth;
  const fraction = phaseAge / synodicMonth;
  
  // Approximate illumination using cosine curve
  return Math.round((1 - Math.cos(2 * Math.PI * fraction)) / 2 * 100);
}

// Calculate compatibility score between two signs
export function calculateCompatibility(sign1: string, sign2: string): { score: number; summary: string } {
  const matrix = compatibilityMatrix[sign1];
  if (matrix && matrix[sign2]) {
    return matrix[sign2];
  }
  return { score: 50, summary: "Compatibility analysis not available for this combination. Astrology is for entertainment and reflection only." };
}

// Calculate numerology from name
export function calculateNameNumerology(name: string): { number: number; meaning: string } {
  const letterValues: Record<string, number> = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9,
    j: 1, k: 2, l: 3, m: 4, n: 5, o: 6, p: 7, q: 8, r: 9,
    s: 1, t: 2, u: 3, v: 4, w: 5, x: 6, y: 7, z: 8
  };

  const cleanName = name.toLowerCase().replace(/[^a-z]/g, '');
  let sum = 0;
  for (const char of cleanName) {
    sum += letterValues[char] || 0;
  }

  // Reduce to single digit (keep 11, 22, 33 as master numbers)
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = String(sum).split('').reduce((s, d) => s + parseInt(d), 0);
  }

  const meaning = lifePathMeanings[sum] || "A unique numerological vibration with special characteristics.";

  return { number: sum, meaning };
}

// Calculate dominant element from multiple sign positions
export function calculateDominantElement(signs: string[]): { element: string; description: string } {
  const elementCount: Record<string, number> = { Fire: 0, Earth: 0, Air: 0, Water: 0 };
  
  for (const signName of signs) {
    const sign = zodiacSigns.find(s => s.name === signName);
    if (sign) {
      elementCount[sign.element]++;
    }
  }

  let dominant = 'Fire';
  let max = 0;
  for (const [element, count] of Object.entries(elementCount)) {
    if (count > max) {
      max = count;
      dominant = element;
    }
  }

  return {
    element: dominant,
    description: elementDescriptions[dominant].description
  };
}

// Get birth chart summary (simplified - based on date only, not precise ephemeris)
export function getBirthChartSummary(month: number, day: number, year: number) {
  const sunSign = calculateZodiacSign(month, day);
  const moonPhase = calculateMoonPhase(year, month, day);
  const lifePath = calculateLifePathNumber(month, day, year);
  const chineseZodiac = calculateChineseZodiac(year);
  const moonIllumination = calculateMoonIllumination(year, month, day);

  // Simplified moon sign estimation based on date
  const moonSigns = zodiacSigns;
  const moonIndex = Math.floor((year * 12 + month + day / 30) * 1.1) % 12;
  const estimatedMoonSign = moonSigns[moonIndex];

  // Simplified rising sign estimation (very rough)
  const risingIndex = (month * 2 + Math.floor(day / 15)) % 12;
  const estimatedRisingSign = moonSigns[risingIndex];

  return {
    sunSign,
    estimatedMoonSign,
    estimatedRisingSign,
    moonPhase,
    moonIllumination,
    lifePath,
    chineseZodiac,
    disclaimer: "This is a simplified estimate based on your birth date. For a precise birth chart, you would need your exact birth time and location. These tools are for entertainment and self-reflection only, not professional astrological advice."
  };
}
