import { LinkButton } from "@/components/ui/link-button";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectActionsProps = {
  project: Project;
  className?: string;
  showDetails?: boolean;
};

export function ProjectActions({
  project,
  className,
  showDetails = true,
}: ProjectActionsProps) {
  return (
    <div className={cn("flex flex-wrap gap-2.5", className)}>
      {showDetails ? (
        <LinkButton href={`/projects/${project.slug}`} variant="primary">
          Case Study
        </LinkButton>
      ) : null}
      <LinkButton href={project.githubUrl}>GitHub</LinkButton>
      {project.liveUrl ? (
        <LinkButton href={project.liveUrl} variant="ghost" className="px-0 py-3">
          Live / Demo
        </LinkButton>
      ) : null}
    </div>
  );
}
