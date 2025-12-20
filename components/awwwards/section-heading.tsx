"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

import { LineReveal, TextReveal } from "./text-reveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  number?: string;
  align?: "left" | "center" | "right";
}

export function SectionHeading({
  title,
  subtitle,
  description,
  number,
  align = "center",
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const alignClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  return (
    <div ref={ref} className={`flex flex-col ${alignClasses[align]} mb-16 md:mb-24`}>
      {/* Section number */}
      {number && (
        <motion.span
          className="text-sm font-mono text-muted-foreground mb-4 tracking-widest"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {number}
        </motion.span>
      )}

      {/* Subtitle */}
      {subtitle && (
        <motion.span
          className="text-sm md:text-base uppercase tracking-[0.3em] text-primary mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {subtitle}
        </motion.span>
      )}

      {/* Main title */}
      <div className="overflow-hidden">
        <motion.h2
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight"
          initial={{ y: "100%" }}
          animate={isInView ? { y: 0 } : { y: "100%" }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.6, 0.01, 0.05, 0.95],
          }}
        >
          {title}
        </motion.h2>
      </div>

      {/* Description */}
      {description && (
        <motion.p
          className="max-w-2xl text-muted-foreground text-base md:text-lg mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {description}
        </motion.p>
      )}

      {/* Animated line */}
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent w-full max-w-md mt-8"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </div>
  );
}

// Marquee text component
interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
}

export function Marquee({
  children,
  speed = 20,
  direction = "left",
  className = "",
}: MarqueeProps) {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-flex"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <span className="inline-flex">{children}</span>
        <span className="inline-flex">{children}</span>
      </motion.div>
    </div>
  );
}

// Split section component
interface SplitSectionProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
  reverse?: boolean;
  className?: string;
}

export function SplitSection({
  leftContent,
  rightContent,
  reverse = false,
  className = "",
}: SplitSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      } ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: reverse ? 50 : -50 }}
        transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
      >
        {leftContent}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: reverse ? -50 : 50 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0.01, 0.05, 0.95] }}
      >
        {rightContent}
      </motion.div>
    </div>
  );
}

// Stagger container for animated children
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export const staggerChildVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  },
};
