export function SectionHeading({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10">
      <span className="font-mono text-xs uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
        {kicker}
      </span>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-400">{subtitle}</p>
      )}
    </div>
  );
}