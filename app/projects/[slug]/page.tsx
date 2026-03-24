import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProjectActions } from "@/components/projects/project-actions";
import { ProjectFact, ProjectFacts } from "@/components/projects/project-facts";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { ProjectListPanel } from "@/components/projects/project-list-panel";
import { ProjectMedia } from "@/components/projects/project-media";
import { LinkButton } from "@/components/ui/link-button";
import { Reveal } from "@/components/ui/reveal";
import { featuredProjects, getProjectBySlug, projectSlugs } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Marc Ib\u00e1\u00f1ez",
    };
  }

  return {
    title: `${project.title} | Marc Ib\u00e1\u00f1ez`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = featuredProjects.filter(
    (featuredProject) => featuredProject.slug !== project.slug,
  );

  const quickFacts: ProjectFact[] = [
    { label: "Role", value: project.role },
    { label: "Type", value: project.type },
    { label: "Status", value: project.status },
    { label: "Focus", value: project.focus.join(" / ") },
    { label: "Year", value: String(project.year), mono: true },
    { label: "Route", value: `/${project.slug}`, mono: true },
  ];

  return (
    <section className="shell px-4 pb-10 pt-8 sm:px-6 sm:pb-14 sm:pt-12 lg:pb-16 lg:pt-16">
      <div className="grid gap-5 xl:grid-cols-[minmax(0,0.86fr),minmax(0,1.14fr)]">
        <Reveal className="surface depth-card p-5 sm:p-7">
          <div className="flex flex-wrap items-center gap-3">
            <LinkButton href="/" variant="ghost" className="px-0 py-0 hover:translate-y-0">
              <span aria-hidden="true">{"<"}</span>
              Back to home
            </LinkButton>
            <LinkButton href="/#projects" variant="secondary" className="px-4 py-2.5">
              View projects
            </LinkButton>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <span className="eyebrow label-line">Case Study</span>
            <span className="chip">{project.type}</span>
            <span className="chip">{project.status}</span>
          </div>

          <div className="mt-6 space-y-4">
            <h1 className="max-w-3xl text-4xl font-medium tracking-[-0.06em] text-[var(--foreground)] sm:text-5xl">
              {project.title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--foreground-muted)]">
              {project.shortDescription}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.focus.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <ProjectActions project={project} showDetails={false} />
          </div>
        </Reveal>

        <Reveal className="surface depth-card p-4 sm:p-5">
          <ProjectMedia
            imageUrl={project.imageUrl}
            imageAlt={project.imageAlt}
            priority
            className="aspect-[16/10] sm:aspect-[16/9]"
            sizes="(max-width: 1279px) 100vw, 58vw"
          />
        </Reveal>
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1.06fr),minmax(20rem,0.94fr)]">
        <Reveal className="surface-muted depth-card p-5 sm:p-6">
          <p className="eyebrow">Overview</p>
          <h2 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-[var(--foreground)]">
            Concise product context
          </h2>
          <p className="mt-5 max-w-4xl text-sm leading-8 text-[var(--foreground-muted)] sm:text-[0.98rem]">
            {project.fullDescription}
          </p>
        </Reveal>

        <Reveal delay={100} className="surface-muted depth-card p-5 sm:p-6">
          <p className="eyebrow">Quick Facts</p>
          <h2 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-[var(--foreground)]">
            Role, status, focus, and stack
          </h2>
          <ProjectFacts facts={quickFacts} compact className="mt-5" />
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={120} className="surface-muted depth-card mt-5 p-5 sm:p-6">
        <p className="eyebrow">Gallery</p>
        <h2 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-[var(--foreground)]">
          Real project media and supporting visuals
        </h2>
        <ProjectGallery items={project.gallery} className="mt-5" />
      </Reveal>

      <div className="mt-5 grid gap-5 xl:grid-cols-2">
        <Reveal>
          <ProjectListPanel
            label="Technical Approach"
            title="How the implementation is structured"
            items={project.technicalApproach}
          />
        </Reveal>

        <Reveal delay={100}>
          <ProjectListPanel
            label="Key Features"
            title="What the project needs to communicate quickly"
            items={project.keyFeatures}
          />
        </Reveal>
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(18rem,0.7fr),minmax(0,1.3fr)]">
        <Reveal className="surface-muted depth-card p-5 sm:p-6">
          <p className="eyebrow">External Links</p>
          <h2 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-[var(--foreground)]">
            Direct access
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--foreground-muted)]">
            Repository access stays visible so recruiters and technical reviewers can jump from
            the case study to the implementation immediately.
          </p>
          <ProjectActions project={project} showDetails={false} className="mt-5" />
        </Reveal>

        <Reveal delay={110} className="surface-muted depth-card p-5 sm:p-6">
          <p className="eyebrow">Other Featured Projects</p>
          <h2 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-[var(--foreground)]">
            Related modules in the portfolio
          </h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {relatedProjects.map((relatedProject) => (
              <Link
                key={relatedProject.slug}
                href={`/projects/${relatedProject.slug}`}
                className="rounded-[1.2rem] border border-[var(--border-soft)] bg-[rgba(8,12,20,0.72)] px-4 py-4 transition hover:-translate-y-0.5 hover:border-[var(--border-strong)]"
              >
                <p className="text-base font-medium text-[var(--foreground)]">
                  {relatedProject.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                  {relatedProject.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
