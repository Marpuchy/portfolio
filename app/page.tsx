import { ContactSection } from "@/components/sections/contact-section";
import { ExpertiseSection } from "@/components/sections/expertise-section";
import { FeaturedProjectsSection } from "@/components/sections/featured-projects-section";
import { HeroSection } from "@/components/sections/hero-section";
import {
  contactLinks,
  dualProfileAreas,
  profile,
} from "@/data/profile";
import { featuredProjects } from "@/data/projects";

export default function HomePage() {
  const [primaryProject, ...secondaryProjects] = featuredProjects;

  return (
    <>
      {primaryProject ? (
        <HeroSection
          profile={profile}
          projectCount={featuredProjects.length}
          primaryProject={primaryProject}
        />
      ) : null}
      <FeaturedProjectsSection projects={secondaryProjects} />
      <ExpertiseSection areas={dualProfileAreas} />
      <ContactSection links={contactLinks} />
    </>
  );
}
