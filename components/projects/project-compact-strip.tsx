import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/data/projects";
import type { SiteContent } from "@/data/site-content";

export type CompactProjectItem =
  | {
      kind: "project";
      id: string;
      project: Project;
    }
  | {
      kind: "placeholder";
      id: string;
      title: string;
      description: string;
      status: string;
      stack: string;
    };

type ProjectCompactStripProps = {
  item: CompactProjectItem;
  actionLabels: SiteContent["copy"]["projectActions"];
};

export function ProjectCompactStrip({ item, actionLabels }: ProjectCompactStripProps) {
  if (item.kind === "placeholder") {
    return (
      <article className="tertiary-card">
        <div className="tertiary-card__layout">
          <div className="tertiary-card__thumb tertiary-card__thumb--placeholder" aria-hidden="true" />

          <div className="min-w-0">
            <p className="tertiary-card__meta">
              <span>Future</span>
              <span aria-hidden="true"> / </span>
              <span>{item.status}</span>
            </p>
            <h3 className="tertiary-card__title">{item.title}</h3>
            <p className="tertiary-card__description">{item.description}</p>
            <p className="tertiary-card__stack">{item.stack}</p>
          </div>
        </div>
      </article>
    );
  }

  const { project } = item;

  return (
    <article className="tertiary-card">
      <div className="tertiary-card__layout">
        <Link href={`/projects/${project.slug}`} className="tertiary-card__thumb">
          <Image
            src={project.imageUrl}
            alt={project.imageAlt}
            fill
            sizes="3.2rem"
            draggable={false}
            className="tertiary-card__thumb-image"
          />
        </Link>

        <div className="min-w-0">
          <p className="tertiary-card__meta">
            <span>{project.type}</span>
            <span aria-hidden="true"> / </span>
            <span>{project.status}</span>
          </p>
          <Link href={`/projects/${project.slug}`} className="inline-block max-w-full">
            <h3 className="tertiary-card__title transition hover:text-[var(--foreground)]">
              {project.title}
            </h3>
          </Link>
          <p className="tertiary-card__description">{project.shortDescription}</p>
          <p className="tertiary-card__stack">{project.stack.slice(0, 2).join(" / ")}</p>
          <div className="tertiary-card__links">
            <Link
              href={`/projects/${project.slug}`}
              className="text-[var(--foreground)] transition hover:text-[var(--accent-strong)]"
            >
              {actionLabels.caseStudy}
            </Link>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--foreground-soft)] transition hover:text-[var(--foreground-muted)]"
            >
              {actionLabels.github}
            </a>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[var(--foreground-soft)] transition hover:text-[var(--foreground-muted)]"
              >
                {actionLabels.liveDemo}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
