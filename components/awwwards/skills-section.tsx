"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface AwwwardsSkillsProps {
  skills: Skill[];
}

export function AwwwardsSkills({ skills }: AwwwardsSkillsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <div ref={ref} className="space-y-16">
      {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
        <div key={category} className="space-y-8">
          <motion.h3
            className="text-sm uppercase tracking-[0.3em] text-muted-foreground"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
          >
            {category}
          </motion.h3>

          <div className="grid gap-6">
            {categorySkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                  duration: 0.6,
                  delay: categoryIndex * 0.2 + index * 0.1,
                }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg md:text-xl font-medium group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                  <motion.span
                    className="text-sm text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.2 + index * 0.1 + 0.3 }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>

                {/* Progress bar */}
                <div className="relative h-1 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-primary/60 rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{
                      duration: 1.2,
                      delay: categoryIndex * 0.2 + index * 0.1,
                      ease: [0.6, 0.01, 0.05, 0.95],
                    }}
                  />
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-primary/20 blur-sm rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{
                      duration: 1.2,
                      delay: categoryIndex * 0.2 + index * 0.1 + 0.1,
                      ease: [0.6, 0.01, 0.05, 0.95],
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// Circular skill visualization
interface CircularSkillProps {
  name: string;
  level: number;
  size?: number;
  delay?: number;
}

export function CircularSkill({ name, level, size = 120, delay = 0 }: CircularSkillProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const circumference = 2 * Math.PI * 45; // radius = 45
  const strokeDashoffset = circumference - (level / 100) * circumference;

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center gap-4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="relative" style={{ width: size, height: size }}>
        <svg className="transform -rotate-90" width={size} height={size}>
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={45}
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth="6"
          />
          {/* Progress circle */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={45}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset } : { strokeDashoffset: circumference }}
            transition={{ duration: 1.5, delay: delay + 0.3, ease: [0.6, 0.01, 0.05, 0.95] }}
          />
        </svg>
        {/* Percentage text */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: delay + 0.5 }}
        >
          <span className="text-2xl font-bold">{level}%</span>
        </motion.div>
      </div>
      <span className="text-sm font-medium text-center">{name}</span>
    </motion.div>
  );
}

// Skill tags cloud
interface SkillTagsProps {
  skills: string[];
}

export function SkillTags({ skills }: SkillTagsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="flex flex-wrap gap-3 justify-center"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.05,
          },
        },
      }}
    >
      {skills.map((skill, index) => (
        <motion.span
          key={skill}
          className="px-4 py-2 bg-muted rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
          variants={{
            hidden: { opacity: 0, scale: 0.8, y: 20 },
            visible: {
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                duration: 0.4,
                ease: [0.6, 0.01, 0.05, 0.95],
              },
            },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {skill}
        </motion.span>
      ))}
    </motion.div>
  );
}
