type SiteFooterProps = {
  name: string;
  tagline: string;
};

export function SiteFooter({ name, tagline }: SiteFooterProps) {
  return (
    <footer className="relative z-10 border-t border-white/5 py-8">
      <div className="shell flex flex-col gap-4 px-4 text-sm text-[var(--foreground-soft)] sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>{name}</p>
        <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.28em]">{tagline}</p>
      </div>
    </footer>
  );
}
