import { Reveal } from "@/components/ui/reveal";
import { SectionShell } from "@/components/ui/section-shell";
import type { SiteContent } from "@/data/site-content";

type ContactLink = {
  label: string;
  value: string;
  href: string;
};

type ContactSectionProps = {
  links: ContactLink[];
  copy: SiteContent["copy"]["contact"];
};

export function ContactSection({ links, copy }: ContactSectionProps) {
  return (
    <SectionShell
      id="contact"
      label={copy.label}
      title={copy.title}
      className="pb-12 pt-4"
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
              {copy.open}
            </a>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
