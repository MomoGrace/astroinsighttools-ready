'use client';

import React from 'react';
import type { ToolContent } from '@/lib/tool-content';
import { toolContentData } from '@/lib/tool-content';
import { BookOpen, Lightbulb, AlertTriangle, Info, HelpCircle } from 'lucide-react';

export function ToolEducationSection({ slug }: { slug: string }) {
  const content = toolContentData[slug];
  if (!content) return null;

  return (
    <div className="mt-10 max-w-3xl mx-auto px-4">
      <div className="border-t pt-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          About This Tool
        </h2>

        <div className="prose prose-stone dark:prose-invert max-w-none space-y-6">
          <section>
            <h3 className="text-lg font-semibold mb-2">What Is This Tool?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{content.whatIsThis}</p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">How to Use This Tool</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{content.howToUse}</p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">How to Interpret Your Result</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{content.howToInterpret}</p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">Example Reading</h3>
            <p className="text-sm text-muted-foreground leading-relaxed italic">{content.exampleReading}</p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">Limitations</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{content.limitations}</p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-500" />
              Common Mistakes
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              {content.commonMistakes.map((mistake, i) => (
                <li key={i} className="text-sm text-muted-foreground">{mistake}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-primary" />
              Frequently Asked Questions
            </h2>
            <div className="w-full">
              {content.faqs.map((faq, i) => (
                <details key={i} className="group border-b">
                  <summary className="flex items-center justify-between py-4 text-sm font-medium cursor-pointer outline-none hover:underline [&::-webkit-details-marker]:hidden list-none">
                    {faq.q}
                    <svg className="text-muted-foreground h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="pb-4 text-sm leading-7 text-muted-foreground">{faq.a}</div>
                </details>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

// Export a helper to get FAQ data for JSON-LD
export function getToolFAQData(slug: string): { question: string; answer: string }[] | null {
  const content = toolContentData[slug];
  if (!content) return null;
  return content.faqs.map(f => ({ question: f.q, answer: f.a }));
}
