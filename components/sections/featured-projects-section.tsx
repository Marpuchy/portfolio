import { ProjectCompactCarousel } from "@/components/projects/project-compact-carousel";
import type { CompactProjectItem } from "@/components/projects/project-compact-strip";
import { ProjectShowcaseCard } from "@/components/projects/project-showcase-card";
import { SectionShell } from "@/components/ui/section-shell";
import type { SiteContent } from "@/data/site-content";
import type { Project } from "@/data/projects";

type FeaturedProjectsSectionProps = {
  projects: Project[];
  compactProjects?: Project[];
  copy: SiteContent["copy"]["featuredGrid"];
  actionLabels: SiteContent["copy"]["projectActions"];
};

export function FeaturedProjectsSection({
  projects,
  compactProjects = [],
  copy,
  actionLabels,
}: FeaturedProjectsSectionProps) {
  if (projects.length === 0 && compactProjects.length === 0) {
    return null;
  }

  const compactItems: CompactProjectItem[] = [
    ...compactProjects.map((project) => ({
      kind: "project" as const,
      id: project.slug,
      project,
    })),
    ...Array.from({ length: 3 }, (_, index) => ({
      kind: "placeholder" as const,
      id: `placeholder-${index + 1}`,
      title: `${copy.placeholderTitlePrefix} 0${index + 1}`,
      description: copy.placeholderDescription,
      status: copy.placeholderStatus,
      stack: copy.placeholderStack,
    })),
  ];

  return (
    <SectionShell
      id="featured-grid"
      label={copy.label}
      title={copy.title}
      className="pt-3"
    >
      {projects.length > 0 ? (
        <div className="grid gap-4 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectShowcaseCard
              key={project.slug}
              project={project}
              index={index}
              copy={copy}
              actionLabels={actionLabels}
            />
          ))}
        </div>
      ) : null}

      {compactItems.length > 0 ? (
        <div className="mt-3 border-t border-[var(--border-soft)] pt-3">
          <div className="mb-2 flex items-center gap-3">
            <p className="eyebrow shrink-0">{copy.compactLabel}</p>
            <div className="h-px flex-1 bg-[var(--border-soft)]" aria-hidden="true" />
          </div>
          <ProjectCompactCarousel items={compactItems} actionLabels={actionLabels} />
        </div>
      ) : null}
    </SectionShell>
  );
}
