"use client";

import { useLanguage } from "@/components/layout/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Experience() {
  const { text } = useLanguage();

  return (
    <section
      id="experiencia"
      className="border-b border-slate-200/80 py-20 dark:border-slate-800/70"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading kicker={text.experience.kicker} title={text.experience.title} />

        <AnimatedSection className="grid gap-6 md:grid-cols-2">
          {text.experience.items.map((item) => (
            <article
              key={item.role}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-violet-500/50 dark:border-slate-800 dark:bg-[#131824]"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs text-cyan-600 dark:text-cyan-400">
                  {item.organization}
                </span>
                <span className="rounded-full bg-amber-500/10 px-3 py-0.5 font-mono text-xs text-amber-600 dark:text-amber-400">
                  {item.period}
                </span>
              </div>
              <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                {item.role}
              </h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                {item.description}
              </p>
              <ul className="mt-3 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                {item.achievements.map((ach) => (
                  <li key={ach}>• {ach}</li>
                ))}
              </ul>
            </article>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}