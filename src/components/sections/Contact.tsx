"use client";

import { FormEvent, useState } from "react";
import { Mail, Code2, Briefcase, Send } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "@/components/layout/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  const { text } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const json = await res.json();

      if (!res.ok || !json.ok) {
        setStatus("error");
        setFeedback(json.error || text.contact.networkError);
        return;
      }

      setStatus("success");
      setFeedback(json.message);
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setFeedback(text.contact.networkError);
    }
  }

  return (
    <section id="contacto" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading kicker={text.contact.kicker} title={text.contact.title} />

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-[#131824] lg:col-span-2">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {text.contact.channelsTitle}
            </h3>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700 hover:border-cyan-500 dark:border-slate-800 dark:bg-[#0B0E14] dark:text-slate-300 dark:hover:border-cyan-400"
            >
              <Mail className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
              <span>{SITE_CONFIG.email}</span>
            </a>
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700 hover:border-cyan-500 dark:border-slate-800 dark:bg-[#0B0E14] dark:text-slate-300 dark:hover:border-cyan-400"
            >
              <Code2 className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
              <span>{text.hero.github}</span>
            </a>
            <a
              href={SITE_CONFIG.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700 hover:border-violet-500 dark:border-slate-800 dark:bg-[#0B0E14] dark:text-slate-300 dark:hover:border-violet-400"
            >
              <Briefcase className="h-4 w-4 text-violet-600 dark:text-violet-400" />
              <span>{text.hero.linkedin}</span>
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-[#131824] lg:col-span-3"
          >
            <div>
              <label
                htmlFor="contact-name"
                className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
              >
                {text.contact.nameLabel}
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-cyan-500 focus:outline-none dark:border-slate-700 dark:bg-[#0B0E14] dark:text-white dark:focus:border-cyan-400"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
              >
                {text.contact.emailLabel}
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-cyan-500 focus:outline-none dark:border-slate-700 dark:bg-[#0B0E14] dark:text-white dark:focus:border-cyan-400"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
              >
                {text.contact.messageLabel}
              </label>
              <textarea
                id="contact-message"
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-cyan-500 focus:outline-none dark:border-slate-700 dark:bg-[#0B0E14] dark:text-white dark:focus:border-cyan-400"
              />
            </div>

            {status === "success" && (
              <p className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-3 text-xs text-emerald-700 dark:text-emerald-300">
                {feedback}
              </p>
            )}
            {status === "error" && (
              <p className="rounded-xl border border-rose-500/40 bg-rose-500/10 p-3 text-xs text-rose-700 dark:text-rose-300">
                {feedback}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {status === "loading" ? text.contact.submitLoading : text.contact.submitIdle}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}