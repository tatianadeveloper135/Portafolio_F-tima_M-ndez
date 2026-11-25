"use client";

import { ExternalLink, PlayCircle, Newspaper } from "lucide-react";
import { useLanguage } from "@/components/layout/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Story() {
  const { text } = useLanguage();

  return (
    <section
      id="historia"
      className="border-b border-slate-200/80 py-20 dark:border-slate-800/70"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker={text.story.kicker}
          title={text.story.title}
          subtitle={text.story.subtitle}
        />

        <AnimatedSection className="grid gap-6 md:grid-cols-2">
          {text.story.items.map((item) => {
            const isVideo = item.format === "Video";
            return (
              <article
                key={item.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-cyan-500/50 dark:border-slate-800 dark:bg-[#131824]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs text-cyan-600 dark:text-cyan-400">
                      {item.outlet}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-violet-500/15 px-3 py-0.5 font-mono text-xs text-violet-700 dark:text-violet-300">
                      {isVideo ? (
                        <PlayCircle className="h-3.5 w-3.5" />
                      ) : (
                        <Newspaper className="h-3.5 w-3.5" />
                      )}
                      {item.format}
                    </span>
                  </div>

                  <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-5 border-t border-slate-200 pt-4 dark:border-slate-800">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 hover:underline dark:text-cyan-400"
                  >
                    {text.story.watchLabel}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </AnimatedSection>
      </div>
    </section>
  );
}