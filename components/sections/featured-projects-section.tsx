import { ProjectShowcaseCard } from "@/components/projects/project-showcase-card";
import { SectionShell } from "@/components/ui/section-shell";
import type { Project } from "@/data/projects";

type FeaturedProjectsSectionProps = {
  projects: Project[];
};

export function FeaturedProjectsSection({ projects }: FeaturedProjectsSectionProps) {
  if (projects.length === 0) {
    return null;
  }

  return (
    <SectionShell
      id="featured-grid"
      label="Secondary Modules"
      title="More work, immediately scannable."
      className="pt-3"
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectShowcaseCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </SectionShell>
  );
}
