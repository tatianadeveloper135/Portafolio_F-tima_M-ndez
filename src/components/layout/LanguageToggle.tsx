"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label="Cambiar idioma / Switch language"
      className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700/80 bg-surface-card px-2.5 py-2 font-mono text-xs font-semibold text-slate-200 transition hover:border-accent-cyan hover:text-accent-cyan"
    >
      <Languages className="h-4 w-4 text-accent-cyan" />
      <span>{lang === "es" ? "ES" : "EN"}</span>
    </button>
  );
}