"use client";

import { useState } from "react";
import { ExternalLink, Eye, X, Image as ImageIcon } from "lucide-react";
import { useLanguage } from "@/components/layout/LanguageProvider";
import { ProjectItem } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";

export function Projects() {
  const { text } = useLanguage();
  const [filter, setFilter] = useState<string>("ALL");
  const [selected, setSelected] = useState<ProjectItem | null>(null);
  const [modalImgError, setModalImgError] = useState(false);

  const visibleProjects =
    filter === "ALL"
      ? text.projects.items
      : text.projects.items.filter((p) => p.category === filter);

  const openEvidenceModal = (project: ProjectItem) => {
    setModalImgError(false);
    setSelected(project);
  };

  const closeEvidenceModal = () => {
    setSelected(null);
    setModalImgError(false);
  };

  return (
    <section
      id="proyectos"
      className="border-b border-slate-200/80 py-20 dark:border-slate-800/70"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <SectionHeading
            kicker={text.projects.kicker}
            title={text.projects.title}
            subtitle={text.projects.subtitle}
          />

          <div className="mb-10 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setFilter("ALL")}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                filter === "ALL"
                  ? "bg-cyan-500 text-slate-950"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-cyan-500 dark:border-slate-800 dark:bg-[#131824] dark:text-slate-300"
              }`}
            >
              {text.projects.allFilter}
            </button>
            {text.projects.categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                  filter === cat
                    ? "bg-cyan-500 text-slate-950"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-cyan-500 dark:border-slate-800 dark:bg-[#131824] dark:text-slate-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {visibleProjects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-cyan-500/50 dark:border-slate-800 dark:bg-[#131824]"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded bg-violet-500/15 px-2.5 py-1 font-mono text-xs text-violet-700 dark:text-violet-300">
                    {project.weekOrTag}
                  </span>
                  <span className="text-xs text-amber-600 dark:text-amber-400">
                    {project.category}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                  {project.shortDescription}
                </p>

                {project.metrics && (
                  <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-[#0B0E14]">
                    {project.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                          {m.label}
                        </p>
                        <p className="font-mono text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                          {m.value}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <TechBadge key={tech} label={tech} />
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => openEvidenceModal(project)}
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-500/15 px-4 py-2 text-xs font-semibold text-cyan-700 transition hover:bg-cyan-500 hover:text-slate-950 dark:text-cyan-400"
                >
                  <Eye className="h-4 w-4" />
                  {text.projects.viewEvidence}
                </button>

                <a
                  href={project.repoOrColabUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                >
                  {text.projects.externalLink}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={closeEvidenceModal}
        >
          <div
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-[#131824] sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="font-mono text-xs text-cyan-600 dark:text-cyan-400">
                  {selected.weekOrTag}
                </span>
                <h3 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                  {selected.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={closeEvidenceModal}
                aria-label="Cerrar"
                className="rounded-lg border border-slate-200 p-2 text-slate-600 hover:text-slate-900 dark:border-slate-700 dark:text-slate-400 dark:hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 space-y-4 text-sm text-slate-700 dark:text-slate-300">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-[#0B0E14]">
                  <p className="font-semibold text-amber-600 dark:text-amber-400">
                    {text.projects.modalProblem}
                  </p>
                  <p className="mt-1">{selected.problem}</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-[#0B0E14]">
                  <p className="font-semibold text-cyan-600 dark:text-cyan-400">
                    {text.projects.modalObjective}
                  </p>
                  <p className="mt-1">{selected.objective}</p>
                </div>
              </div>

              <div>
                <p className="font-semibold text-slate-900 dark:text-white">
                  {text.projects.modalSolution}
                </p>
                <p className="mt-1 leading-relaxed">{selected.solutionExplanation}</p>
              </div>

              <div>
                <p className="font-semibold text-slate-900 dark:text-white">
                  {text.projects.modalResults}
                </p>
                <ul className="mt-1.5 space-y-1">
                  {selected.results.map((r) => (
                    <li key={r}>• {r}</li>
                  ))}
                </ul>
              </div>

              {!modalImgError ? (
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-[#0B0E14]">
                  <img
                    src={selected.imagePath}
                    alt={selected.title}
                    onError={() => setModalImgError(true)}
                    className="max-h-72 w-full object-contain"
                  />
                </div>
              ) : (
                <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 text-center dark:border-slate-700 dark:bg-[#0B0E14]/70">
                  <ImageIcon className="mx-auto h-6 w-6 text-slate-500" />
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                    {text.projects.modalEvidenceNotePrefix}{" "}
                    <span className="font-mono text-cyan-600 dark:text-cyan-400">
                      public{selected.imagePath}
                    </span>
                  </p>
                </div>
              )}

              <div className="flex justify-end pt-2">
                <a
                  href={selected.repoOrColabUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-2.5 text-xs font-semibold text-slate-950"
                >
                  {text.projects.modalOpenLink}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}