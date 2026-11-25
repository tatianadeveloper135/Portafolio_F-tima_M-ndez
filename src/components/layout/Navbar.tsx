"use client";

import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "./LanguageProvider";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { text } = useLanguage();

  const navLinks = [
    { label: text.nav.inicio, href: "#inicio" },
    { label: text.nav.sobreMi, href: "#sobre-mi" },
    { label: text.nav.experiencia, href: "#experiencia" },
    { label: text.nav.proyectos, href: "#proyectos" },
    { label: text.nav.habilidades, href: "#habilidades" },
    { label: text.nav.formacion, href: "#formacion" },
    { label: text.nav.historia, href: "#historia" },
    { label: text.nav.contacto, href: "#contacto" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur-md dark:border-slate-800/80 dark:bg-[#0B0E14]/85">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-cyan-500 to-violet-500 text-slate-950">
            <Sparkles className="h-4 w-4" />
          </span>
          <span>
            {SITE_CONFIG.shortName}
            <span className="text-cyan-500 dark:text-cyan-400">.lab</span>
          </span>
        </a>

        <nav className="hidden items-center gap-5 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}
          <LanguageToggle />
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
            className="rounded-xl border border-slate-300 p-2 text-slate-700 dark:border-slate-800 dark:text-slate-300"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-[#131824] md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-cyan-600 dark:text-slate-300 dark:hover:bg-[#1A2132] dark:hover:text-cyan-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}