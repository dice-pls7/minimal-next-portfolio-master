import { Metadata } from "next";

import { SectionHeading, SkillTags, ScrollProgress, Marquee } from "@/components/awwwards";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { pagesConfig } from "@/config/pages";
import { skills } from "@/config/skills";

export const metadata: Metadata = {
  title: pagesConfig.skills.metadata.title,
  description: pagesConfig.skills.metadata.description,
};

export default function SkillsPage() {
  // Group skills by rating level for better organization
  const expertSkills = skills.filter(s => s.rating === 5);
  const advancedSkills = skills.filter(s => s.rating === 4);
  const intermediateSkills = skills.filter(s => s.rating === 3);
  const basicSkills = skills.filter(s => s.rating <= 2);

  return (
    <ClientPageWrapper>
      <ScrollProgress />

      {/* Large header text */}
      <section className="py-24 md:py-32 overflow-hidden">
        <Marquee speed={20}>
          <span className="text-[8rem] md:text-[12rem] font-heading font-bold text-foreground/5 whitespace-nowrap px-8">
            Skills & Expertise • Skills & Expertise •{" "}
          </span>
        </Marquee>
      </section>

      <div className="container pb-24 md:pb-32">
        {/* Header */}
        <SectionHeading
          subtitle="What I Do"
          title={pagesConfig.skills.title}
          description={pagesConfig.skills.description}
        />

        {/* Skills by expertise level */}
        <div className="space-y-20">
          {expertSkills.length > 0 && (
            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-center">
                Expert ⭐⭐⭐⭐⭐
              </h3>
              <SkillTags skills={expertSkills.map(s => s.name)} />
            </div>
          )}

          {advancedSkills.length > 0 && (
            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-center">
                Advanced ⭐⭐⭐⭐
              </h3>
              <SkillTags skills={advancedSkills.map(s => s.name)} />
            </div>
          )}

          {intermediateSkills.length > 0 && (
            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-center">
                Intermediate ⭐⭐⭐
              </h3>
              <SkillTags skills={intermediateSkills.map(s => s.name)} />
            </div>
          )}

          {basicSkills.length > 0 && (
            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-center">
                Familiar ⭐⭐
              </h3>
              <SkillTags skills={basicSkills.map(s => s.name)} />
            </div>
          )}
        </div>
      </div>
    </ClientPageWrapper>
  );
}
