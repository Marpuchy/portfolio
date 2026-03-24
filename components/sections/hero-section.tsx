import { HeroInterface } from "@/components/sections/hero-interface";
import { LinkButton } from "@/components/ui/link-button";
import { Reveal } from "@/components/ui/reveal";
import type { Project } from "@/data/projects";
import type { SiteContent } from "@/data/site-content";

type HeroSectionProps = {
  profile: SiteContent["profile"];
  primaryProject: Project;
  copy: SiteContent["copy"]["hero"];
  actionLabels: SiteContent["copy"]["projectActions"];
};

export function HeroSection({
  profile,
  primaryProject,
  copy,
  actionLabels,
}: HeroSectionProps) {
  return (
    <section
      id="projects"
      className="shell scroll-mt-28 px-4 pb-4 pt-5 sm:px-6 sm:pb-5 sm:pt-8 lg:pb-6 lg:pt-10"
    >
      <div className="surface hero-shell px-5 py-5 sm:px-7 sm:py-7 lg:px-8 lg:py-8">
        <div className="hero-shell__core-anchor" data-system-core-anchor aria-hidden="true" />

        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.82fr),minmax(20rem,1.18fr)] lg:items-start lg:gap-6">
          <Reveal className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.22em] text-[var(--foreground-soft)]">
                {profile.role}
              </p>
              <h1 className="max-w-4xl text-[2.95rem] font-medium leading-none tracking-[-0.07em] text-[var(--foreground)] sm:text-[4.55rem] lg:text-[5.1rem]">
                {profile.name}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[var(--foreground-muted)] sm:text-[1.35rem]">
                <span className="text-gradient">{profile.tagline}</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <LinkButton href="/#featured-grid" variant="primary" className="min-w-[10.5rem]">
                {copy.viewProjects}
              </LinkButton>
              <LinkButton href={profile.cvUrl} variant="secondary" className="min-w-[8rem]">
                {copy.viewCv}
              </LinkButton>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <HeroInterface project={primaryProject} copy={copy} actionLabels={actionLabels} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
