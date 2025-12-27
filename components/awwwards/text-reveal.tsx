"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}

const containerVariants: Variants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: {
      staggerChildren: 0.03,
      delayChildren: delay,
    },
  }),
};

const childVariants: Variants = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  },
};

export function TextReveal({
  children,
  className = "",
  delay = 0,
  once = true,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-10%" });

  const text = children?.toString() || "";
  const words = text.split(" ");

  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={delay}
    >
      <span className="flex flex-wrap">
        {words.map((word, i) => (
          <span key={i} className="overflow-hidden mr-2">
            <motion.span className="inline-block" variants={childVariants}>
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    </motion.div>
  );
}

// Character by character reveal animation
interface CharRevealProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}

export function CharReveal({
  children,
  className = "",
  delay = 0,
  stagger = 0.02,
  once = true,
}: CharRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-10%" });

  const characters = children.split("");

  return (
    <motion.div ref={ref} className={`overflow-hidden ${className}`}>
      <span className="flex flex-wrap">
        {characters.map((char, i) => (
          <motion.span
            key={i}
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
            transition={{
              duration: 0.5,
              delay: delay + i * stagger,
              ease: [0.6, 0.01, 0.05, 0.95],
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    </motion.div>
  );
}

// Line by line reveal with mask
interface LineRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}

export function LineReveal({
  children,
  className = "",
  delay = 0,
  once = true,
}: LineRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-10%" });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        animate={isInView ? { y: 0 } : { y: "100%" }}
        transition={{
          duration: 1,
          delay,
          ease: [0.6, 0.01, 0.05, 0.95],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
