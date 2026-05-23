'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Star, Calculator, BookOpen, Menu, Info, Mail, Home } from 'lucide-react';

type CookieConsentPreferences = {
  essential: true;
  analytics: boolean;
  advertising: boolean;
};

type CookieConsentState = {
  version: 1;
  selectedAt: string;
  mode: 'accept_all' | 'reject_non_essential' | 'manage_preferences';
  preferences: CookieConsentPreferences;
};

const COOKIE_KEY = 'astroinsighttools_cookie_consent_v1';
const OPEN_PREFERENCES_EVENT = 'astroinsighttools:open-cookie-preferences';

const headerLinks = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Tools', href: '/tools', icon: Calculator },
  { label: 'Articles', href: '/articles', icon: BookOpen },
  { label: 'About', href: '/about', icon: Info },
  { label: 'Contact', href: '/contact', icon: Mail },
];

const footerExploreLinks = [
  ['All Tools', '/tools'],
  ['Big Three Tool', '/tools/big-three-meaning'],
  ['Zodiac Calculator', '/tools/zodiac-calculator'],
  ['Compatibility', '/tools/compatibility'],
  ['Articles', '/articles'],
] as const;

const footerSiteLinks = [
  ['About', '/about'],
  ['Contact', '/contact'],
  ['Privacy Policy', '/privacy'],
  ['Terms', '/terms'],
  ['Disclaimer', '/disclaimer'],
] as const;

function sendConsentUpdate(preferences: CookieConsentPreferences) {
  if (typeof window === 'undefined') return;

  const gtag = (window as typeof window & {
    gtag?: (...args: unknown[]) => void;
  }).gtag;

  if (!gtag) return;

  gtag('consent', 'update', {
    analytics_storage: preferences.analytics ? 'granted' : 'denied',
    ad_storage: preferences.advertising ? 'granted' : 'denied',
    ad_user_data: preferences.advertising ? 'granted' : 'denied',
    ad_personalization: preferences.advertising ? 'granted' : 'denied',
  });
}

function saveConsent(mode: CookieConsentState['mode'], preferences: CookieConsentPreferences) {
  const consent: CookieConsentState = {
    version: 1,
    selectedAt: new Date().toISOString(),
    mode,
    preferences,
  };

  localStorage.setItem(COOKIE_KEY, JSON.stringify(consent));
  sendConsentUpdate(preferences);
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Star className="h-6 w-6 text-primary" /><span className="font-bold text-lg">Astro Insight Tools</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {headerLinks.map(l => (
            <Link key={l.href} href={l.href} className={`px-3 py-2 text-sm font-medium rounded-md hover:bg-muted transition-colors ${pathname === l.href ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>{l.label}</Link>
          ))}
        </nav>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden"><Button variant="ghost" size="icon"><Menu className="h-5 w-5" /></Button></SheetTrigger>
          <SheetContent side="right" className="w-72">
            <nav className="flex flex-col gap-2 mt-8">
              {headerLinks.map(l => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="flex items-center gap-3 px-3 py-3 text-sm font-medium hover:bg-muted rounded-lg transition-colors">
                  <l.icon className="h-4 w-4" />{l.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const openCookiePreferences = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT));
    }
  };

  return (
    <footer className="mt-auto bg-black text-slate-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3"><Star className="h-5 w-5 text-primary" /><span className="font-bold text-white">Astro Insight Tools</span></div>
            <p className="text-sm text-slate-300">Free astrology, zodiac, numerology, compatibility and personality tools for entertainment and self-reflection.</p>
            <p className="mt-2 text-sm text-slate-300">Support: AstroInsightTools@proton.me</p>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-white">Explore</h3>
            <div className="flex flex-col gap-2 text-sm">
              {footerExploreLinks.map(([label, href]) => (
                <Link key={href} href={href} className="text-slate-300 transition-colors hover:text-white">{label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-white">Site</h3>
            <div className="flex flex-col gap-2 text-sm">
              {footerSiteLinks.map(([label, href]) => (
                <Link key={href} href={href} className="text-slate-300 transition-colors hover:text-white">{label}</Link>
              ))}
              <button type="button" onClick={openCookiePreferences} className="text-left text-slate-300 transition-colors hover:text-white">
                Cookie Preferences
              </button>
            </div>
          </div>
        </div>
        <Separator className="my-8 border-slate-700" />
        <p className="text-center text-xs text-slate-400">&copy; {new Date().getFullYear()} Astro Insight Tools. All rights reserved. For entertainment and self-reflection only.</p>
      </div>
    </footer>
  );
}

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [advertisingEnabled, setAdvertisingEnabled] = useState(false);

  const loadStoredPreferences = () => {
    const raw = localStorage.getItem(COOKIE_KEY);
    if (!raw) return { analytics: false, advertising: false };

    try {
      const parsed = JSON.parse(raw) as CookieConsentState;
      return {
        analytics: Boolean(parsed.preferences?.analytics),
        advertising: Boolean(parsed.preferences?.advertising),
      };
    } catch {
      localStorage.removeItem(COOKIE_KEY);
      return { analytics: false, advertising: false };
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const gtag = (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag;
    if (gtag) {
      gtag('consent', 'default', {
        ad_storage: 'denied',
        analytics_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      });
    }

    const raw = localStorage.getItem(COOKIE_KEY);
    if (raw) {
      const storedPreferences = loadStoredPreferences();
      sendConsentUpdate({
        essential: true,
        analytics: storedPreferences.analytics,
        advertising: storedPreferences.advertising,
      });
    } else {
      requestAnimationFrame(() => setShowBanner(true));
    }

    const handleOpenPreferences = () => {
      const storedPreferences = loadStoredPreferences();
      setAnalyticsEnabled(storedPreferences.analytics);
      setAdvertisingEnabled(storedPreferences.advertising);
      setShowBanner(true);
      setShowPreferences(true);
    };

    window.addEventListener(OPEN_PREFERENCES_EVENT, handleOpenPreferences);

    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, handleOpenPreferences);
  }, []);

  const acceptAll = () => {
    setAnalyticsEnabled(true);
    setAdvertisingEnabled(true);
    saveConsent('accept_all', { essential: true, analytics: true, advertising: true });
    setShowBanner(false);
    setShowPreferences(false);
  };

  const rejectNonEssential = () => {
    setAnalyticsEnabled(false);
    setAdvertisingEnabled(false);
    saveConsent('reject_non_essential', { essential: true, analytics: false, advertising: false });
    setShowBanner(false);
    setShowPreferences(false);
  };

  const savePreferences = () => {
    saveConsent('manage_preferences', {
      essential: true,
      analytics: analyticsEnabled,
      advertising: advertisingEnabled,
    });
    setShowBanner(false);
    setShowPreferences(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-3 left-1/2 z-[70] w-[calc(100%-24px)] max-w-[860px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:bottom-4 sm:p-5">
      <p className="text-sm text-slate-700">
        We use cookies to improve your browsing experience, understand site usage, and support ads. You can accept all cookies, reject non-essential cookies, or manage your preferences.
      </p>
      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
        <Link href="/privacy" className="underline text-primary">Privacy Policy</Link>
        <span className="text-slate-300" aria-hidden="true">|</span>
        <Link href="/terms" className="underline text-primary">Terms</Link>
      </div>

      {showPreferences && (
        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 sm:p-4">
          <h3 className="text-sm font-semibold text-slate-900">Cookie Preferences</h3>
          <div className="mt-3 space-y-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-slate-900">Essential Cookies</p>
                <p className="text-xs text-slate-600">Required for core site functionality.</p>
              </div>
              <span className="rounded-full bg-slate-200 px-2 py-1 text-xs font-medium text-slate-700">Always On</span>
            </div>
            <label className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-slate-900">Analytics Cookies</p>
                <p className="text-xs text-slate-600">Help us understand traffic and improve the site.</p>
              </div>
              <input type="checkbox" checked={analyticsEnabled} onChange={(e) => setAnalyticsEnabled(e.target.checked)} className="mt-1 h-4 w-4" />
            </label>
            <label className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-slate-900">Advertising Cookies</p>
                <p className="text-xs text-slate-600">Used to support and personalize advertising.</p>
              </div>
              <input type="checkbox" checked={advertisingEnabled} onChange={(e) => setAdvertisingEnabled(e.target.checked)} className="mt-1 h-4 w-4" />
            </label>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button size="sm" onClick={savePreferences}>Save Preferences</Button>
            <Button size="sm" variant="outline" onClick={() => setShowPreferences(false)}>Back</Button>
          </div>
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        <Button size="sm" onClick={acceptAll}>Accept All</Button>
        <Button size="sm" variant="outline" onClick={rejectNonEssential}>Reject Non-Essential</Button>
        <Button size="sm" variant="secondary" onClick={() => setShowPreferences(true)}>Manage Preferences</Button>
      </div>
    </div>
  );
}

// Navigate helper for components that still use the navigate prop
export function useNavigate() {
  const router = useRouter();
  return (path: string) => {
    router.push(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
}
