import { ContactSection } from "@/components/sections/contact-section";
import { ExpertiseSection } from "@/components/sections/expertise-section";
import { FeaturedProjectsSection } from "@/components/sections/featured-projects-section";
import { HeroSection } from "@/components/sections/hero-section";
import { getSiteContent } from "@/data/site-content";
import { getFeaturedProjects } from "@/data/projects";
import { getRequestLocale } from "@/lib/request-locale";

export default async function HomePage() {
  const locale = await getRequestLocale();
  const siteContent = getSiteContent(locale);
  const featuredProjects = getFeaturedProjects(locale);
  const [primaryProject, ...remainingProjects] = featuredProjects;
  const compactProjects = remainingProjects.filter(
    (project) => project.slug === "cellular-automata",
  );
  const secondaryProjects = remainingProjects.filter(
    (project) => project.slug !== "cellular-automata",
  );

  return (
    <>
      {primaryProject ? (
        <HeroSection
          profile={siteContent.profile}
          primaryProject={primaryProject}
          copy={siteContent.copy.hero}
          actionLabels={siteContent.copy.projectActions}
        />
      ) : null}
      <FeaturedProjectsSection
        projects={secondaryProjects}
        compactProjects={compactProjects}
        copy={siteContent.copy.featuredGrid}
        actionLabels={siteContent.copy.projectActions}
      />
      <ExpertiseSection
        areas={siteContent.dualProfileAreas}
        copy={siteContent.copy.expertise}
      />
      <ContactSection
        links={siteContent.contactLinks}
        copy={siteContent.copy.contact}
      />
    </>
  );
}
