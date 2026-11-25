"use client";

import { useLanguage } from "@/components/layout/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Education() {
  const { text } = useLanguage();

  return (
    <section
      id="formacion"
      className="border-b border-slate-200/80 py-20 dark:border-slate-800/70"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker={text.education.kicker}
          title={text.education.title}
          subtitle={text.education.languages}
        />

        <AnimatedSection className="grid gap-6 md:grid-cols-2">
          {text.education.items.map((edu) => (
            <div
              key={edu.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-[#131824]"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs text-cyan-600 dark:text-cyan-400">
                  {edu.institution}
                </span>
                <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                  {edu.period}
                </span>
              </div>
              <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                {edu.title}
              </h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                {edu.details}
              </p>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}