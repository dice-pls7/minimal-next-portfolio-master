import { Metadata } from "next";
import Script from "next/script";

import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import {
  HeroSection,
  SectionHeading,
  AwwwardsProjectCard,
  FeaturedProjectCard,
  SkillTags,
  AwwwardsTimeline,
  Marquee,
  ScrollProgress,
  Parallax,
} from "@/components/awwwards";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { featuredProjects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { featuredSkills } from "@/config/skills";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: `${pagesConfig.home.metadata.title} | Modern Next.js Developer Portfolio Template`,
  description: `${pagesConfig.home.metadata.description} This open-source Next.js portfolio template is customizable to showcase your skills and projects.`,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function IndexPage() {
  // Structured data for personal portfolio
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "Full Stack Developer",
    sameAs: [siteConfig.links.github],
  };

  // Structured data for website as a software application (template)
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Next.js Portfolio Template",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: siteConfig.authorName,
      url: siteConfig.url,
    },
  };

  // Extract all skill names for the tags cloud
  const allSkillNames = featuredSkills.map((skill) => skill.name);

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="schema-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Hero Section with Big Typography */}
      <HeroSection
        name={siteConfig.authorName}
        title="Full Stack Developer"
        description="Creating digital experiences that blend creativity with technical excellence. Passionate about building products that make a difference."
        profileImage="/profile-img.jpg"
      />

      {/* Marquee Text Divider */}
      <div className="py-8 border-y border-border overflow-hidden">
        <Marquee speed={25}>
          <span className="text-4xl md:text-6xl font-heading font-bold text-foreground/10 whitespace-nowrap px-8">
            React • Next.js • TypeScript • Node.js • Tailwind • PostgreSQL • AWS • Docker •{" "}
          </span>
        </Marquee>
      </div>

      {/* Skills Section */}
      <section className="container py-24 md:py-32" id="skills">
        <SectionHeading
          number="01"
          subtitle="Expertise"
          title={pagesConfig.skills.title}
          description={pagesConfig.skills.description}
        />
        <Parallax speed={-0.2}>
          <SkillTags skills={allSkillNames} />
        </Parallax>
      </section>

      {/* Featured Project Section */}
      {featuredProjects[0] && (
        <section className="container py-24 md:py-32">
          <FeaturedProjectCard project={featuredProjects[0]} />
        </section>
      )}

      {/* Projects Grid Section */}
      <section className="container py-24 md:py-32" id="projects">
        <SectionHeading
          number="02"
          subtitle="Portfolio"
          title={pagesConfig.projects.title}
          description={pagesConfig.projects.description}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.slice(1).map((project, index) => (
            <AwwwardsProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Large Text Divider */}
      <section className="py-24 md:py-32 overflow-hidden">
        <div className="container">
          <h2 className="text-display font-heading font-bold text-center text-foreground/5">
            Experience
          </h2>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="container py-24 md:py-32" id="experience">
        <SectionHeading
          number="03"
          subtitle="Career"
          title={pagesConfig.experience.title}
          description={pagesConfig.experience.description}
        />
        <AwwwardsTimeline experiences={experiences} />
      </section>

      
    </ClientPageWrapper>
  );
}

