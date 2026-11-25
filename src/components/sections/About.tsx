"use client";

import { useLanguage } from "@/components/layout/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function About() {
  const { text } = useLanguage();

  return (
    <section
      id="sobre-mi"
      className="border-b border-slate-200/80 py-20 dark:border-slate-800/70"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading kicker={text.about.kicker} title={text.about.title} />

        <AnimatedSection className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-[#131824]">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {text.about.whoTitle}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {text.about.whoAmI}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {text.about.whatIStudy}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {text.about.interests.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-700 dark:text-cyan-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-[#131824]">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {text.about.goalsTitle}
              </h3>
              <p className="mt-3 text-xs font-semibold uppercase text-amber-600 dark:text-amber-400">
                {text.about.personalLabel}
              </p>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                {text.about.personalGoal}
              </p>

              <p className="mt-4 text-xs font-semibold uppercase text-violet-600 dark:text-violet-400">
                {text.about.professionalLabel}
              </p>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                {text.about.professionalGoal}
              </p>
            </div>

            <ul className="space-y-1.5 border-t border-slate-200 pt-4 text-sm text-slate-700 dark:border-slate-800 dark:text-slate-300">
              {text.about.strengths.map((s) => (
                <li key={s}>• {s}</li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}