type ProjectListPanelProps = {
  label: string;
  title: string;
  items: string[];
};

export function ProjectListPanel({
  label,
  title,
  items,
}: ProjectListPanelProps) {
  return (
    <section className="surface-muted depth-card p-5 sm:p-6">
      <p className="eyebrow">{label}</p>
      <h2 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-[var(--foreground)]">
        {title}
      </h2>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-[1.2rem] border border-[var(--border-soft)] bg-[rgba(8,12,20,0.72)] px-4 py-4 text-sm leading-7 text-[var(--foreground-muted)]"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
