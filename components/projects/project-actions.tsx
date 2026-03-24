import { LinkButton } from "@/components/ui/link-button";
import type { SiteContent } from "@/data/site-content";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectActionsProps = {
  project: Project;
  className?: string;
  showDetails?: boolean;
  labels?: SiteContent["copy"]["projectActions"];
};

export function ProjectActions({
  project,
  className,
  showDetails = true,
  labels,
}: ProjectActionsProps) {
  return (
    <div className={cn("flex flex-wrap gap-2.5", className)}>
      {showDetails ? (
        <LinkButton href={`/projects/${project.slug}`} variant="primary">
          {labels?.caseStudy ?? "Case Study"}
        </LinkButton>
      ) : null}
      <LinkButton href={project.githubUrl}>{labels?.github ?? "GitHub"}</LinkButton>
      {project.liveUrl ? (
        <LinkButton href={project.liveUrl} variant="ghost" className="px-0 py-3">
          {labels?.liveDemo ?? "Live / Demo"}
        </LinkButton>
      ) : null}
    </div>
  );
}
