type SiteFooterProps = {
  name: string;
};

export function SiteFooter({ name }: SiteFooterProps) {
  return (
    <footer className="relative z-10 border-t border-white/5 py-8">
      <div className="shell flex flex-col gap-4 px-4 text-sm text-[var(--foreground-soft)] sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>{name}</p>
        <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.28em]">
          Clean Systems. Interactive Products.
        </p>
      </div>
    </footer>
  );
}
