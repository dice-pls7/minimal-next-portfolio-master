"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

import { MagneticButton } from "./magnetic-button";
import { Marquee } from "./section-heading";
import { Icons } from "@/components/common/icons";
import { siteConfig } from "@/config/site";

export function AwwwardsFooter() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", href: siteConfig.links.github, icon: Icons.gitHub },
    { name: "LinkedIn", href: siteConfig.links.linkedin, icon: Icons.linkedin },
  ];

  return (
    <footer ref={ref} className="relative overflow-hidden bg-foreground text-background">
      {/* Large text marquee */}
      <Marquee speed={30} className="py-8 border-b border-background/10">
        <span className="text-[8rem] md:text-[12rem] font-heading font-bold text-background/5 whitespace-nowrap">
          Let&apos;s Work Together • Let&apos;s Work Together •{" "}
        </span>
      </Marquee>

      <div className="container py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left side - CTA */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Have a project in mind?
            </h2>
            <p className="text-background/60 text-lg max-w-md">
              Let&apos;s connect and create something amazing together. I&apos;m always open to
              discussing new projects and opportunities.
            </p>

            <MagneticButton strength={0.2}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 group"
              >
                <span className="text-xl font-medium">Get in Touch</span>
                <motion.div
                  className="w-16 h-16 rounded-full bg-background flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 45 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icons.chevronRight className="w-6 h-6 text-foreground" />
                </motion.div>
              </Link>
            </MagneticButton>
          </motion.div>

          {/* Right side - Contact info */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0.01, 0.05, 0.95] }}
          >
            {/* Email */}
            <div className="space-y-2">
              <span className="text-sm text-background/40 uppercase tracking-widest">
                Email
              </span>
              <MagneticButton strength={0.1}>
                <a
                  href="mailto:hello@example.com"
                  className="block text-2xl md:text-3xl font-medium hover:text-primary transition-colors"
                >
                  hello@example.com
                </a>
              </MagneticButton>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <span className="text-sm text-background/40 uppercase tracking-widest">
                Location
              </span>
              <p className="text-xl">Available Worldwide</p>
            </div>

            {/* Social links */}
            <div className="space-y-4">
              <span className="text-sm text-background/40 uppercase tracking-widest">
                Follow Me
              </span>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <MagneticButton key={social.name} strength={0.3}>
                    <motion.a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center hover:bg-background hover:text-foreground transition-colors"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  </MagneticButton>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="mt-20 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-background/40 text-sm">
            © {currentYear} {siteConfig.authorName}. All rights reserved.
          </p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-sm text-background/40 hover:text-background transition-colors"
            whileHover={{ y: -2 }}
          >
            <span>Back to top</span>
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Icons.chevronDown className="w-4 h-4 rotate-180" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary/20 to-transparent blur-3xl opacity-30 pointer-events-none" />
    </footer>
  );
}
