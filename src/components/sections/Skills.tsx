"use client";

import { useLanguage } from "@/components/layout/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { TechBadge } from "@/components/ui/TechBadge";

export function Skills() {
  const { text } = useLanguage();

  return (
    <section
      id="habilidades"
      className="border-b border-slate-200/80 py-20 dark:border-slate-800/70"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading kicker={text.skills.kicker} title={text.skills.title} />

        <AnimatedSection className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {text.skills.groups.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-[#131824]"
            >
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <TechBadge key={skill} label={skill} />
                ))}
              </div>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}