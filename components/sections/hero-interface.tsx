import Link from "next/link";

import { ProjectActions } from "@/components/projects/project-actions";
import { ProjectCompactMeta } from "@/components/projects/project-compact-meta";
import { ProjectMedia } from "@/components/projects/project-media";
import type { Project } from "@/data/projects";

type HeroInterfaceProps = {
  project: Project;
};

export function HeroInterface({ project }: HeroInterfaceProps) {
  const items = [
    { label: "Role", value: project.role },
    { label: "Stack", value: project.stack.slice(0, 3).join(" / ") },
    { label: "Focus", value: project.focus.slice(0, 2).join(" / ") },
  ];

  return (
    <div className="hero-panel depth-card">
      <div className="hero-panel__header">
        <div>
          <p className="eyebrow">Primary Module</p>
          <h2 className="mt-3 text-xl font-medium tracking-[-0.04em] text-[var(--foreground)] sm:text-2xl">
            Visible above the fold
          </h2>
        </div>
        <span className="hero-panel__status">{project.type}</span>
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
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="chip">Featured</span>
          <span className="chip">{project.status}</span>
        </div>

        <Link href={`/projects/${project.slug}`} className="mt-4 inline-block">
          <h3 className="text-[1.95rem] font-medium tracking-[-0.05em] text-[var(--foreground)] transition hover:text-[var(--accent-strong)] sm:text-[2.2rem]">
            {project.title}
          </h3>
        </Link>
        <p className="mt-3 truncate text-sm text-[var(--foreground-muted)]">
          {project.shortDescription}
        </p>

        <ProjectCompactMeta items={items} className="mt-4" />
        <ProjectActions project={project} className="mt-4" />
      </div>
    </div>
  );
}
