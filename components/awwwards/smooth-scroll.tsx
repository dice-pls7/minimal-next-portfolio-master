"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function Parallax({ children, speed = 0.5, className = "" }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 200]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div ref={ref} style={{ y: springY }} className={className}>
      {children}
    </motion.div>
  );
}

interface HorizontalScrollProps {
  children: ReactNode;
  className?: string;
}

export function HorizontalScroll({ children, className = "" }: HorizontalScrollProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  const springX = useSpring(x, { stiffness: 100, damping: 30 });

  return (
    <section ref={targetRef} className={`relative h-[300vh] ${className}`}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x: springX }} className="flex gap-8">
          {children}
        </motion.div>
      </div>
    </section>
  );
}

interface ScrollProgressProps {
  className?: string;
}

export function ScrollProgress({ className = "" }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[100] ${className}`}
      style={{ scaleX }}
    />
  );
}

interface ScaleOnScrollProps {
  children: ReactNode;
  className?: string;
}

export function ScaleOnScroll({ children, className = "" }: ScaleOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      ref={ref}
      style={{ scale: springScale, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface RotateOnScrollProps {
  children: ReactNode;
  className?: string;
  degrees?: number;
}

export function RotateOnScroll({ 
  children, 
  className = "", 
  degrees = 360 
}: RotateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, degrees]);
  const springRotate = useSpring(rotate, { stiffness: 100, damping: 30 });

  return (
    <motion.div ref={ref} style={{ rotate: springRotate }} className={className}>
      {children}
    </motion.div>
  );
}
