type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
};

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-3.5">
      <p className="eyebrow label-line">{label}</p>
      <div className="space-y-2.5">
        <h2 className="text-3xl font-medium tracking-[-0.03em] text-[var(--foreground)] sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-base leading-7 text-[var(--foreground-muted)] sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
