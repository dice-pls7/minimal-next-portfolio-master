"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

import { MagneticButton } from "./magnetic-button";
import { LineReveal } from "./text-reveal";
import { SectionHeading } from "./section-heading";
import { Icons } from "@/components/common/icons";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function AwwwardsContactForm() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const inputFields = [
    { name: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
    { name: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
    { name: "subject", label: "Subject", type: "text", placeholder: "Project Inquiry" },
  ];

  if (isSubmitted) {
    return (
      <motion.div
        ref={ref}
        className="min-h-[60vh] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="text-center space-y-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] }}
        >
          <motion.div
            className="w-24 h-24 mx-auto bg-primary rounded-full flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
          >
            <Icons.check className="w-12 h-12 text-primary-foreground" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">Message Sent!</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Thank you for reaching out. I&apos;ll get back to you as soon as possible.
          </p>
          <MagneticButton>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ name: "", email: "", subject: "", message: "" });
              }}
              className="px-8 py-4 bg-muted rounded-full hover:bg-muted/80 transition-colors"
            >
              Send Another Message
            </button>
          </MagneticButton>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div ref={ref} className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-12">
        {/* Input fields */}
        {inputFields.map((field, index) => (
          <motion.div
            key={field.name}
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: [0.6, 0.01, 0.05, 0.95],
            }}
          >
            <motion.label
              className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                focusedField === field.name || formData[field.name as keyof FormData]
                  ? "-top-6 text-sm text-primary"
                  : "top-4 text-lg text-muted-foreground"
              }`}
            >
              {field.label}
            </motion.label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name as keyof FormData]}
              onChange={(e) =>
                setFormData({ ...formData, [field.name]: e.target.value })
              }
              onFocus={() => setFocusedField(field.name)}
              onBlur={() => setFocusedField(null)}
              className="w-full bg-transparent border-b-2 border-border py-4 text-lg focus:outline-none focus:border-primary transition-colors"
              required
            />
            {/* Animated underline */}
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-primary"
              initial={{ width: 0 }}
              animate={{
                width: focusedField === field.name ? "100%" : "0%",
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}

        {/* Message textarea */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: [0.6, 0.01, 0.05, 0.95],
          }}
        >
          <motion.label
            className={`absolute left-0 transition-all duration-300 pointer-events-none ${
              focusedField === "message" || formData.message
                ? "-top-6 text-sm text-primary"
                : "top-4 text-lg text-muted-foreground"
            }`}
          >
            Your Message
          </motion.label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            onFocus={() => setFocusedField("message")}
            onBlur={() => setFocusedField(null)}
            className="w-full bg-transparent border-b-2 border-border py-4 text-lg focus:outline-none focus:border-primary transition-colors resize-none"
            required
          />
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-primary"
            initial={{ width: 0 }}
            animate={{
              width: focusedField === "message" ? "100%" : "0%",
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Submit button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: [0.6, 0.01, 0.05, 0.95],
          }}
        >
          <MagneticButton strength={0.2}>
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative inline-flex items-center gap-4 px-8 py-4 bg-foreground text-background rounded-full overflow-hidden disabled:opacity-50"
            >
              {/* Button background animation */}
              <motion.span
                className="absolute inset-0 bg-primary"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              
              <span className="relative z-10 text-lg font-medium">
                {isSubmitting ? "Sending..." : "Send Message"}
              </span>
              
              <motion.div
                className="relative z-10"
                animate={isSubmitting ? { rotate: 360 } : { x: [0, 5, 0] }}
                transition={
                  isSubmitting
                    ? { duration: 1, repeat: Infinity, ease: "linear" }
                    : { duration: 1.5, repeat: Infinity }
                }
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full" />
                ) : (
                  <Icons.chevronRight className="w-5 h-5" />
                )}
              </motion.div>
            </button>
          </MagneticButton>
        </motion.div>
      </form>
    </div>
  );
}

// Contact page with layout
export function AwwwardsContactPage() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="min-h-screen py-24 md:py-32">
      <div className="container">
        {/* Header */}
        <div className="mb-20">
          <SectionHeading
            subtitle="Get in Touch"
            title="Let's Work Together"
            description="Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing."
            align="left"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Form */}
          <AwwwardsContactForm />

          {/* Contact Info */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.6, 0.01, 0.05, 0.95] }}
          >
            {/* Email */}
            <div className="space-y-2">
              <span className="text-sm uppercase tracking-widest text-muted-foreground">
                Email
              </span>
              <MagneticButton strength={0.1}>
                <a
                  href="mailto:hello@example.com"
                  className="block text-2xl md:text-3xl font-medium hover:text-primary transition-colors animated-underline"
                >
                  hello@example.com
                </a>
              </MagneticButton>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <span className="text-sm uppercase tracking-widest text-muted-foreground">
                Location
              </span>
              <p className="text-xl">Available Worldwide</p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <span className="text-sm uppercase tracking-widest text-muted-foreground">
                Connect
              </span>
              <div className="flex gap-4">
                {[
                  { name: "GitHub", icon: Icons.gitHub, href: "#" },
                  { name: "Twitter", icon: Icons.twitter, href: "#" },
                ].map((social) => (
                  <MagneticButton key={social.name} strength={0.3}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full border-2 border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all"
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  </MagneticButton>
                ))}
              </div>
            </div>

            {/* Decorative element */}
            <motion.div
              className="relative h-64 mt-12"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.div
                className="absolute top-0 right-0 w-48 h-48 border-2 border-foreground/10 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] font-bold text-foreground/5 font-heading">
                ?
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
