"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { Icons } from "@/components/common/icons";
import { ProjectInterface } from "@/config/projects";

interface AwwwardsProjectCardProps {
  project: ProjectInterface;
  index: number;
}

export function AwwwardsProjectCard({ project, index }: AwwwardsProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);
  const brightness = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["brightness(0.9)", "brightness(1.1)"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.6, 0.01, 0.05, 0.95],
      }}
      viewport={{ once: true, margin: "-50px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group cursor-pointer"
    >
      <Link href={`/projects/${project.id}`}>
        <motion.div
          className="relative overflow-hidden rounded-2xl bg-card border border-border"
          style={{ filter: brightness }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Image container */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={project.companyLogoImg}
                alt={project.companyName}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Overlay gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"
              initial={{ opacity: 0.5 }}
              whileHover={{ opacity: 0.8 }}
              transition={{ duration: 0.3 }}
            />

            {/* Project number */}
            <motion.span
              className="absolute top-4 left-4 text-8xl font-bold text-white/10 font-heading"
              style={{ transform: "translateZ(50px)" }}
            >
              {String(index + 1).padStart(2, "0")}
            </motion.span>

            {/* Project type badge */}
            <motion.div
              className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              {project.type}
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-6" style={{ transform: "translateZ(30px)" }}>
            <motion.h3
              className="text-2xl md:text-3xl font-heading font-bold mb-2 group-hover:text-primary transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              {project.companyName}
            </motion.h3>

            <motion.p
              className="text-muted-foreground line-clamp-2 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              {project.shortDescription}
            </motion.p>

            {/* Tags */}
            <motion.div
              className="flex flex-wrap gap-2 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              {project.category.slice(0, 3).map((cat, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs bg-muted rounded-full text-muted-foreground"
                >
                  {cat}
                </span>
              ))}
            </motion.div>

            {/* View project link */}
            <motion.div
              className="flex items-center gap-2 text-primary font-medium"
              initial={{ opacity: 0, x: -20 }}
              whileHover={{ x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span>Bekijk project</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Icons.chevronRight className="w-4 h-4" />
              </motion.div>
            </motion.div>
          </div>

          {/* Hover glow effect */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background:
                "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(var(--primary) / 0.1), transparent 40%)",
            }}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
}

// Large featured project card
interface FeaturedProjectCardProps {
  project: ProjectInterface;
}

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }}
      viewport={{ once: true }}
      className="relative group"
    >
      <Link href={`/projects/${project.id}`}>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image side */}
          <motion.div
            className="relative aspect-square rounded-3xl overflow-hidden"
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={project.companyLogoImg}
              alt={project.companyName}
              fill
              className="object-cover"
            />
            <motion.div
              className="absolute inset-0 bg-primary/20"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Content side */}
          <div className="space-y-6">
            <motion.span
              className="text-9xl font-bold text-foreground/5 font-heading block"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              01
            </motion.span>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold -mt-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {project.companyName}
            </motion.h2>

            <motion.p
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {project.shortDescription}
            </motion.p>

            <motion.div
              className="flex items-center gap-4 pt-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-xl font-medium group-hover:text-primary transition-colors">
                Explore Project
              </span>
              <motion.div
                className="w-12 h-12 rounded-full bg-primary flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 45 }}
                transition={{ duration: 0.3 }}
              >
                <Icons.chevronRight className="w-6 h-6 text-primary-foreground" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
