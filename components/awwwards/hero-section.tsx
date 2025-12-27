"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { MagneticButton } from "./magnetic-button";
import { CharReveal, LineReveal, TextReveal } from "./text-reveal";
import { Icons } from "@/components/common/icons";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface HeroSectionProps {
  name: string;
  title: string;
  description?: string;
  profileImage?: string;
}

export function HeroSection({
  name,
  title,
  description,
  profileImage,
}: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ opacity }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-accent/20 via-transparent to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border-2 border-foreground/10 rounded-full"
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-32 h-32 border-2 border-foreground/10"
        animate={{
          y: [20, -20, 20],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-4 h-4 bg-primary rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main content */}
      <motion.div
        className="relative z-10 container flex flex-col items-center text-center"
        style={{ y: springY, scale }}
      >
        {/* Profile image with glow effect */}
        {profileImage && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.6, 0.01, 0.05, 0.95],
            }}
            className="relative mb-8"
          >
            <div className="absolute inset-0 bg-primary/50 rounded-full blur-2xl animate-pulse" />
            <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary">
              <Image
                src={profileImage}
                alt={name}
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Rotating ring */}
            <motion.div
              className="absolute -inset-4 border-2 border-dashed border-primary/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        )}

        {/* Name with large typography */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-bold tracking-tighter"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.6, 0.01, 0.05, 0.95],
            }}
          >
            {name.split(" ").map((word, i) => (
              <motion.span
                key={i}
                className="inline-block"
                whileHover={{
                  scale: 1.05,
                  color: "hsl(var(--primary))",
                }}
                transition={{ duration: 0.3 }}
              >
                {word}
                {i < name.split(" ").length - 1 && "\u00A0"}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Title with reveal animation */}
        <LineReveal delay={0.8} className="mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-light tracking-wide">
            {title}
          </h2>
        </LineReveal>

        {/* Description */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="max-w-2xl text-muted-foreground text-base md:text-lg mb-10"
          >
            {description}
          </motion.p>
        )}

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 mt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <MagneticButton strength={0.3}>
            <Link
              href="https://github.com/dice-pls7"
              target="_blank"
              className={cn(
                buttonVariants({ size: "lg" }),
                "text-lg px-8 py-6 rounded-full group relative overflow-hidden"
              )}
              data-cursor
              data-cursor-text="View"
            >
              <motion.span
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <Icons.gitHub className="w-5 h-5 mr-2" />
              <span className="relative z-10">GitHub</span>
            </Link>
          </MagneticButton>
          <MagneticButton strength={0.3}>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "text-lg px-8 py-6 rounded-full group relative overflow-hidden border-2"
              )}
              data-cursor
              data-cursor-text="Say Hi"
            >
              <Icons.contact className="w-5 h-5 mr-2" />
              <span>Get in Touch</span>
            </Link>
          </MagneticButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => {
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
            }}
          >
            <span className="text-sm text-muted-foreground uppercase tracking-widest">
              Scroll
            </span>
            <motion.div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2">
              <motion.div
                className="w-1.5 h-1.5 bg-muted-foreground rounded-full"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
