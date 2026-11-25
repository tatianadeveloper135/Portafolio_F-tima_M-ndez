export function TechBadge({ label }: { label: string }) {
  return (
    <span className="rounded-md border border-slate-200 bg-slate-100 px-2.5 py-0.5 font-mono text-xs text-slate-700 dark:border-slate-700/80 dark:bg-[#0B0E14] dark:text-slate-300">
      {label}
    </span>
  );
}