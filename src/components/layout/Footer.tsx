"use client";

import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "./LanguageProvider";

export function Footer() {
  const { text } = useLanguage();

  return (
    <footer className="border-t border-slate-200/80 bg-slate-100 py-8 text-center text-xs text-slate-600 dark:border-slate-800/80 dark:bg-[#07090E] dark:text-slate-400">
      <p className="font-medium text-slate-900 dark:text-slate-200">
        {SITE_CONFIG.fullName} · {text.footer.line1}
      </p>
      <p className="mt-1">{text.footer.line2}</p>
    </footer>
  );
}