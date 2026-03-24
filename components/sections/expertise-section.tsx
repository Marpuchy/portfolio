import { Reveal } from "@/components/ui/reveal";
import { SectionShell } from "@/components/ui/section-shell";

type ExpertiseArea = {
  title: string;
  summary: string;
  capabilities: string[];
};

type ExpertiseSectionProps = {
  areas: ExpertiseArea[];
};

export function ExpertiseSection({ areas }: ExpertiseSectionProps) {
  return (
    <SectionShell
      id="expertise"
      label="Expertise"
      title="Dual profile, one delivery standard."
      className="pt-4"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {areas.map((area, index) => (
          <Reveal
            key={area.title}
            delay={index * 110}
            className="surface-muted depth-card h-full p-5 transition duration-300 hover:border-[var(--border-strong)] sm:p-6"
          >
            <p className="eyebrow">Track 0{index + 1}</p>

            <h3 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-[var(--foreground)]">
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
