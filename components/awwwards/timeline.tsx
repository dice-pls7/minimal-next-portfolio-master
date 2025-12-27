"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { ExperienceInterface } from "@/config/experience";

interface AwwwardsTimelineProps {
  experiences: ExperienceInterface[];
}

export function AwwwardsTimeline({ experiences }: AwwwardsTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative">
      {/* Animated timeline line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block">
        <motion.div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-primary to-transparent"
          style={{ height: lineHeight }}
        />
      </div>

      <div className="space-y-24">
        {experiences.map((experience, index) => (
          <TimelineItem
            key={experience.id}
            experience={experience}
            index={index}
            isLeft={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
}

interface TimelineItemProps {
  experience: ExperienceInterface;
  index: number;
  isLeft: boolean;
}

function formatDate(date: Date | "Present"): string {
  if (date === "Present") return "Present";
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function TimelineItem({ experience, index, isLeft }: TimelineItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={`relative grid md:grid-cols-2 gap-8 ${
        isLeft ? "" : "md:[&>*:first-child]:order-2"
      }`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Content side */}
      <motion.div
        className={`space-y-4 ${isLeft ? "md:text-right md:pr-16" : "md:pl-16"}`}
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0.01, 0.05, 0.95] }}
      >
        {/* Date */}
        <motion.span
          className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {formatDate(experience.startDate)} — {formatDate(experience.endDate)}
        </motion.span>

        {/* Company */}
        <motion.h3
          className="text-3xl md:text-4xl font-heading font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {experience.company}
        </motion.h3>

        {/* Role */}
        <motion.p
          className="text-xl text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {experience.position}
        </motion.p>

        {/* Location */}
        <motion.p
          className="text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          📍 {experience.location}
        </motion.p>

        {/* Description */}
        <motion.ul
          className={`text-muted-foreground leading-relaxed space-y-2 ${isLeft ? "md:text-right" : ""}`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {experience.description.slice(0, 2).map((desc, i) => (
            <li key={i} className="text-sm">{desc}</li>
          ))}
        </motion.ul>

        {/* Skills */}
        <motion.div
          className={`flex flex-wrap gap-2 ${isLeft ? "md:justify-end" : ""}`}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {experience.skills.map((skill, i) => (
            <motion.span
              key={skill}
              className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.8 + i * 0.05 }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Timeline dot */}
      <motion.div
        className="absolute left-0 md:left-1/2 top-0 -translate-x-1/2 hidden md:block"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.6, 0.01, 0.05, 0.95] }}
      >
        <div className="relative">
          <div className="w-4 h-4 bg-primary rounded-full" />
          <motion.div
            className="absolute inset-0 bg-primary rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Index number (empty side) */}
      <motion.div
        className={`hidden md:flex items-start ${isLeft ? "pl-16" : "pr-16 justify-end"}`}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <span className="text-[8rem] font-bold text-foreground/5 font-heading leading-none">
          {String(index + 1).padStart(2, "0")}
        </span>
      </motion.div>
    </motion.div>
  );
}

// Horizontal timeline variant
export function HorizontalTimeline({ experiences }: AwwwardsTimelineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="relative overflow-x-auto pb-8">
      {/* Timeline line */}
      <motion.div
        className="absolute top-1/2 left-0 right-0 h-px bg-border"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }}
      />

      <div className="flex gap-8 min-w-max px-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            className="relative flex flex-col items-center w-64"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            {/* Top content (alternating) */}
            {index % 2 === 0 && (
              <div className="text-center mb-8 space-y-2">
                <span className="text-xs text-muted-foreground">{formatDate(experience.startDate)}</span>
                <h4 className="font-heading font-bold">{experience.company}</h4>
                <p className="text-sm text-muted-foreground">{experience.position}</p>
              </div>
            )}

            {/* Dot */}
            <motion.div
              className="w-4 h-4 bg-primary rounded-full z-10"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
            />

            {/* Bottom content (alternating) */}
            {index % 2 !== 0 && (
              <div className="text-center mt-8 space-y-2">
                <span className="text-xs text-muted-foreground">{formatDate(experience.startDate)}</span>
                <h4 className="font-heading font-bold">{experience.company}</h4>
                <p className="text-sm text-muted-foreground">{experience.position}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
