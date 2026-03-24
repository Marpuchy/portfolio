import { Reveal } from "@/components/ui/reveal";
import { SectionShell } from "@/components/ui/section-shell";

type ContactLink = {
  label: string;
  value: string;
  href: string;
};

type ContactSectionProps = {
  links: ContactLink[];
};

export function ContactSection({ links }: ContactSectionProps) {
  return (
    <SectionShell
      id="contact"
      label="Contact"
      title="Direct links, no friction."
      className="pb-12 pt-4"
    >
      <div className="grid gap-4 md:grid-cols-3">
        {links.map((link, index) => (
          <Reveal
            key={link.label}
            delay={index * 90}
            className="surface-muted depth-card flex h-full flex-col items-start justify-between gap-4 p-5 transition duration-300 hover:border-[var(--border-strong)]"
          >
            <div>
              <p className="eyebrow text-[0.62rem]">{link.label}</p>
              <p className="mt-2 text-sm text-[var(--foreground)] sm:text-base">{link.value}</p>
            </div>

            <a
              className="rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--foreground-muted)] transition hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:text-[var(--foreground)]"
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              Open
            </a>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
