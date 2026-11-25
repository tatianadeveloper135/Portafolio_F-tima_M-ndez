"use client";

import { ArrowRight, Code2, Briefcase } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "@/components/layout/LanguageProvider";
import { ProfileImage } from "@/components/ui/ProfileImage";

export function Hero() {
  const { text } = useLanguage();

  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-slate-200/80 py-20 dark:border-slate-800/70 sm:py-24"
    >
      <div className="pointer-events-none absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <span className="inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 font-mono text-xs text-amber-600 dark:text-amber-400">
            {text.hero.badge}
          </span>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            {SITE_CONFIG.fullName}
          </h1>

          <p className="mt-3 text-lg font-medium text-cyan-600 dark:text-cyan-400 sm:text-xl">
            {text.hero.role}
          </p>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700 dark:text-slate-300">
            {text.hero.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
            >
              {text.hero.ctaProjects}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-cyan-500 dark:border-slate-700 dark:bg-[#131824] dark:text-white dark:hover:border-cyan-400"
            >
              {text.hero.ctaContact}
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-700 hover:border-cyan-500 hover:text-slate-900 dark:border-slate-800 dark:bg-[#131824] dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-white"
            >
              <Code2 className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
              {text.hero.github}
            </a>
            <a
              href={SITE_CONFIG.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-700 hover:border-violet-500 hover:text-slate-900 dark:border-slate-800 dark:bg-[#131824] dark:text-slate-300 dark:hover:border-violet-400 dark:hover:text-white"
            >
              <Briefcase className="h-4 w-4 text-violet-600 dark:text-violet-400" />
              {text.hero.linkedin}
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:col-span-5">
          <ProfileImage />
        </div>
      </div>
    </section>
  );
}