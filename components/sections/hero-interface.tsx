import Link from "next/link";

import { ProjectActions } from "@/components/projects/project-actions";
import { ProjectCompactMeta } from "@/components/projects/project-compact-meta";
import { ProjectMedia } from "@/components/projects/project-media";
import type { Project } from "@/data/projects";
import type { SiteContent } from "@/data/site-content";

type HeroInterfaceProps = {
  project: Project;
  copy: SiteContent["copy"]["hero"];
  actionLabels: SiteContent["copy"]["projectActions"];
};

export function HeroInterface({ project, copy, actionLabels }: HeroInterfaceProps) {
  const items = [
    { label: copy.roleLabel, value: project.role },
    { label: copy.stackLabel, value: project.stack.slice(0, 3).join(" / ") },
    { label: copy.focusLabel, value: project.focus.slice(0, 2).join(" / ") },
  ];

  return (
    <div className="hero-panel depth-card">
      <div className="hero-panel__header">
        <span className="hero-panel__status">{project.type}</span>
        <span className="chip">{project.status}</span>
      </div>

      <Link
        href={`/projects/${project.slug}`}
        className="group/media mt-4 block focus-visible:rounded-[1.3rem]"
      >
        <ProjectMedia
          imageUrl={project.imageUrl}
          imageAlt={project.imageAlt}
          priority
          className="aspect-[16/10]"
          sizes="(max-width: 1023px) 100vw, 36vw"
        />
      </Link>

      <div className="mt-4">
        <Link href={`/projects/${project.slug}`} className="inline-block">
          <h3 className="text-[1.95rem] font-medium tracking-[-0.05em] text-[var(--foreground)] transition hover:text-[var(--accent-strong)] sm:text-[2.2rem]">
            {project.title}
          </h3>
        </Link>
        <p className="mt-3 truncate text-sm text-[var(--foreground-muted)]">
          {project.shortDescription}
        </p>

        <ProjectCompactMeta items={items} className="mt-4" />
        <ProjectActions project={project} className="mt-4" labels={actionLabels} />
      </div>
    </div>
  );
}
