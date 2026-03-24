import { Reveal } from "@/components/ui/reveal";
import { SectionShell } from "@/components/ui/section-shell";
import type { SiteContent } from "@/data/site-content";

type ExpertiseArea = {
  title: string;
  summary: string;
  capabilities: string[];
};

type ExpertiseSectionProps = {
  areas: ExpertiseArea[];
  copy: SiteContent["copy"]["expertise"];
};

export function ExpertiseSection({ areas, copy }: ExpertiseSectionProps) {
  return (
    <SectionShell
      id="expertise"
      label={copy.label}
      title={copy.title}
      className="pt-4"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {areas.map((area, index) => (
          <Reveal
            key={area.title}
            delay={index * 110}
            className="surface-muted depth-card h-full p-5 transition duration-300 hover:border-[var(--border-strong)] sm:p-6"
          >
            <h3 className="text-2xl font-medium tracking-[-0.04em] text-[var(--foreground)]">
              {area.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">{area.summary}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {area.capabilities.map((capability) => (
                <span key={capability} className="chip">
                  {capability}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
