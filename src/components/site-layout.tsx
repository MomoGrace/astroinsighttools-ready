'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Star, Calculator, BookOpen, Menu, Info, Mail, Home, Compass, Moon, Heart, Flame, Wind, Users } from 'lucide-react';

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
  return (
    <footer className="mt-auto bg-black text-slate-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3"><Star className="h-5 w-5 text-primary" /><span className="font-bold text-white">Astro Insight Tools</span></div>
            <p className="text-sm text-slate-300">Free astrology, zodiac, numerology, compatibility and personality tools for entertainment and self-reflection.</p>
            <p className="mt-2 text-sm text-slate-400">Support: AstroInsightTools@proton.me</p>
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
            </div>
          </div>
        </div>
        <Separator className="my-8 bg-slate-700/70" />
        <p className="text-center text-xs text-slate-400">&copy; {new Date().getFullYear()} Astro Insight Tools. All rights reserved. For entertainment and self-reflection only.</p>
      </div>
    </footer>
  );
}

export function CookieConsent() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const c = localStorage.getItem('cookie-consent');
    if (!c) { const id = requestAnimationFrame(() => setShow(true)); return () => cancelAnimationFrame(id); }
  }, []);
  if (!show) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-card border-t shadow-lg p-4 cookie-slide-up">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-4">
        <p className="text-sm flex-1">We use cookies to improve your experience and analyze site traffic. By continuing, you agree to our <Link href="/privacy" className="underline text-primary">Privacy Policy</Link>.</p>
        <div className="flex gap-2"><Button size="sm" variant="outline" onClick={() => { localStorage.setItem('cookie-consent','declined'); setShow(false); }}>Decline</Button><Button size="sm" onClick={() => { localStorage.setItem('cookie-consent','accepted'); setShow(false); }}>Accept</Button></div>
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
