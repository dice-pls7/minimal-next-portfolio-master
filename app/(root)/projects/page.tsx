import { Metadata } from "next";

import { AwwwardsProjectCard, SectionHeading, ScrollProgress } from "@/components/awwwards";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { pagesConfig } from "@/config/pages";
import { Projects } from "@/config/projects";

export const metadata: Metadata = {
  title: pagesConfig.projects.metadata.title,
  description: pagesConfig.projects.metadata.description,
};

export default function ProjectsPage() {
  return (
    <ClientPageWrapper>
      <ScrollProgress />
      
      <div className="container py-24 md:py-32">
        {/* Header */}
        <SectionHeading
          subtitle="Portfolio"
          title={pagesConfig.projects.title}
          description={pagesConfig.projects.description}
        />

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Projects.map((project, index) => (
            <AwwwardsProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </ClientPageWrapper>
  );
}
