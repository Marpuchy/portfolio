import Link from "next/link";

import { ProjectActions } from "@/components/projects/project-actions";
import { ProjectCompactMeta } from "@/components/projects/project-compact-meta";
import { ProjectMedia } from "@/components/projects/project-media";
import { Reveal } from "@/components/ui/reveal";
import type { Project } from "@/data/projects";

type ProjectShowcaseCardProps = {
  project: Project;
  index: number;
};

export function ProjectShowcaseCard({ project, index }: ProjectShowcaseCardProps) {
  const metaItems = [
    { label: "Role", value: project.role },
    { label: "Stack", value: project.stack.slice(0, 3).join(" / ") },
    { label: "Focus", value: project.focus.slice(0, 2).join(" / ") },
  ];

  return (
    <Reveal delay={index * 90} className="h-full">
      <article className="surface-muted depth-card h-full p-4 sm:p-5">
        <Link
          href={`/projects/${project.slug}`}
          className="group/media block focus-visible:rounded-[1.35rem]"
          aria-label={`Open case study for ${project.title}`}
        >
          <ProjectMedia
            imageUrl={project.imageUrl}
            imageAlt={project.imageAlt}
            className="aspect-[16/10]"
            sizes="(max-width: 1023px) 100vw, 44vw"
          />
        </Link>

        <div className="mt-4 space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="eyebrow">Module {String(index + 2).padStart(2, "0")}</span>
            <span className="chip">{project.type}</span>
            <span className="chip">{project.status}</span>
          </div>

          <div className="space-y-2">
            <Link href={`/projects/${project.slug}`} className="inline-block">
              <h3 className="text-[1.7rem] font-medium tracking-[-0.04em] text-[var(--foreground)] transition hover:text-[var(--accent-strong)]">
                {project.title}
              </h3>
            </Link>
            <p className="truncate text-sm text-[var(--foreground-muted)]">
              {project.shortDescription}
            </p>
          </div>

          <ProjectCompactMeta items={metaItems} />
          <ProjectActions project={project} />
        </div>
      </article>
    </Reveal>
  );
}
