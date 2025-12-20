"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const variants = {
  initial: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    y: 0,
  },
  animate: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    y: 0,
  },
  exit: {
    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    y: 0,
  },
};

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        {/* Page content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.6, 0.01, 0.05, 0.95] }}
        >
          {children}
        </motion.div>

        {/* Slide overlay effect */}
        <motion.div
          className="fixed inset-0 z-[100] bg-primary origin-bottom pointer-events-none"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
        />
        <motion.div
          className="fixed inset-0 z-[99] bg-muted origin-bottom pointer-events-none"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.6, 0.01, 0.05, 0.95] }}
        />
      </motion.div>
    </AnimatePresence>
  );
}

// Alternative curtain transition
export function CurtainTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>

        {/* Left curtain */}
        <motion.div
          className="fixed top-0 left-0 w-1/2 h-full bg-foreground z-[100] origin-left pointer-events-none"
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] }}
        />
        {/* Right curtain */}
        <motion.div
          className="fixed top-0 right-0 w-1/2 h-full bg-foreground z-[100] origin-right pointer-events-none"
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
