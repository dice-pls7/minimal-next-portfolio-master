"use client";

import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Norican } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import { MagneticButton } from "./magnetic-button";
import { Icons } from "@/components/common/icons";
import { ModeToggle } from "@/components/common/mode-toggle";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const norican = Norican({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

interface NavItem {
  title: string;
  href: string;
}

interface AwwwardsNavProps {
  items: NavItem[];
}

export function AwwwardsNav({ items }: AwwwardsNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Main navigation bar */}
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
          isScrolled ? "bg-background/80 backdrop-blur-lg" : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] }}
      >
        <div className="container">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <MagneticButton strength={0.2}>
              <Link href="/" className="relative z-50">
                <motion.span
                  className={cn(norican.className, "text-2xl md:text-3xl")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {siteConfig.authorName}
                </motion.span>
              </Link>
            </MagneticButton>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {items.map((item, index) => (
                <MagneticButton key={item.href} strength={0.15}>
                  <Link
                    href={item.href}
                    className="relative group py-2"
                  >
                    <motion.span
                      className={cn(
                        "text-sm font-medium transition-colors",
                        pathname === item.href
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {item.title}
                    </motion.span>
                    {/* Underline animation */}
                    <motion.span
                      className="absolute bottom-0 left-0 h-px bg-primary"
                      initial={{ width: pathname === item.href ? "100%" : 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </MagneticButton>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-4">
              <ModeToggle />

              {/* Mobile menu button */}
              <motion.button
                className="relative z-50 md:hidden w-10 h-10 flex items-center justify-center"
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.9 }}
              >
                <div className="w-6 h-4 flex flex-col justify-between">
                  <motion.span
                    className="w-full h-0.5 bg-foreground origin-left"
                    animate={isOpen ? { rotate: 45, y: -2 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="w-full h-0.5 bg-foreground"
                    animate={isOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="w-full h-0.5 bg-foreground origin-left"
                    animate={isOpen ? { rotate: -45, y: 2 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background */}
            <motion.div
              className="absolute inset-0 bg-background"
              initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
              animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
              exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
              transition={{ duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] }}
            />

            {/* Menu content */}
            <div className="relative h-full flex flex-col justify-center items-center">
              <nav className="flex flex-col items-center gap-8">
                {items.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 + index * 0.1,
                      ease: [0.6, 0.01, 0.05, 0.95],
                    }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "text-4xl md:text-5xl font-heading font-bold transition-colors",
                        pathname === item.href
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      )}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Social links */}
              <motion.div
                className="absolute bottom-20 flex gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icons.gitHub className="w-6 h-6" />
                </a>
              
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
