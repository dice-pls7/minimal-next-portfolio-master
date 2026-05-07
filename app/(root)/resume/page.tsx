"use client";

import { motion } from "framer-motion";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { cn } from "@/lib/utils";

const profileText =
  "HBO-ICT afgestudeerde met praktische ervaring in het ontwikkelen van webapplicaties en SaaS-oplossingen met .NET en moderne frontend frameworks zoals React en Next.js. Tijdens mijn stages en werkervaring heb ik gewerkt aan het bouwen en verbeteren van applicaties, met focus op onderhoudbare code, gebruiksvriendelijkheid en procesoptimalisatie. Ik heb ervaring met oplossingen die in de praktijk worden gebruikt en werk graag samen binnen een team om tot duurzame oplossingen te komen. Op zoek naar een junior software engineering rol waarin ik mij verder kan ontwikkelen en verantwoordelijkheid kan nemen.";

const workExperience = [
  {
    role: "Software Developer / IT Consultant",
    company: "Amyyon",
    location: "Groningen",
    period: "feb 2026 – heden",
    points: [
      "Ontwikkelen en onderhouden van webapplicaties en SaaS-oplossingen met C#/.NET en Next.js",
      "SaaS landingpage gebouwd in Next.js en frontend componenten gekoppeld aan API's",
      "Bijgedragen aan CI/CD en deployment; betrokken bij afwegingen rondom schaalbaarheid en softwarearchitectuur",
      "Focus op onderhoudbaarheid en duurzame softwarekwaliteit in de codebase",
    ],
  },
  {
    role: ".NET Software Developer (Afstudeerstage)",
    company: "ChipSoft",
    location: "Heerenveen",
    period: "sep 2025 – jan 2026",
    points: [
      "Productieklare .NET-oplossing ontwikkeld binnen HiX om het beddenreinigingsproces in ziekenhuizen te digitaliseren en te automatiseren",
      "End-to-end gewerkt: probleemanalyse, stakeholdergesprekken, ontwerpkeuzes en implementatie",
      "Handmatige stappen verminderd door betere proceszichtbaarheid en operationele automatisering",
    ],
  },
  {
    role: "Software Developer (Stage)",
    company: "Technius Zwolle BV",
    location: "Staphorst",
    period: "apr 2024 – sep 2024",
    points: [
      "Webapplicatie ontwikkeld om klantinteractieprocessen te moderniseren en te digitaliseren",
      "Usability-verbeteringen en procesdigitalisering als kern van het project opgeleverd",
    ],
  },
  {
    role: "Studentassistent",
    company: "Windesheim",
    location: "Zwolle",
    period: "aug 2023 – sep 2025",
    points: [
      "Eerstejaars HBO-ICT studenten begeleid bij SQL en PHP; technische onderwerpen helder uitgelegd aan beginners",
    ],
  },
];

const education = [
  {
    title: "BSc HBO-ICT",
    institution: "Windesheim University of Applied Sciences, Zwolle",
    period: "2022 – 2026",
    detail: "C#, PHP, Python, Java, JavaScript, SQL, HTML/CSS · Scrum / Agile",
  },
  {
    title: "Bachelor MBRT",
    institution: "Hanze University of Applied Sciences, Groningen",
    period: "2019 – 2022",
  },
];

const skillGroups = [
  {
    title: "Languages",
    values: ["C#", "JavaScript", "TypeScript", "SQL", "Python", "Java", "HTML/CSS"],
  },
  {
    title: "Frameworks & technology",
    values: [".NET", "React", "Next.js"],
  },
  {
    title: "Concepts & workflow",
    values: [
      "REST API's",
      "CI/CD",
      "deployment",
      "software architecture",
      "Scrum/Agile",
      "process improvement",
    ],
  },
];

const certificates = [
  "Ask Better Questions – Build Better Relationships",
  "The Complete SQL Bootcamp: Zero to Hero",
];

const languages = [
  "Nederlands — moedertaal",
  "Engels — vloeiend",
  "Duits — B1",
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.6, 0.01, 0.05, 0.95] as const,
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.6, 0.01, 0.05, 0.95] as const },
  },
};

function SectionDivider() {
  return (
    <div className="h-px w-full bg-gradient-to-r from-transparent via-foreground/20 to-transparent print:my-2" />
  );
}

function Watermark({ text }: { text: string }) {
  return (
    <span className="pointer-events-none absolute right-0 top-0 -z-10 hidden select-none font-heading text-[7rem] font-bold leading-none tracking-tight text-foreground/5 md:block print:hidden">
      {text}
    </span>
  );
}

export default function ResumePage() {
  return (
    <main className="noise relative isolate overflow-hidden pb-20 pt-10 print:bg-white print:pb-0 print:pt-0">
      <style jsx global>{`
        @page {
          size: A4 portrait;
          margin: 10mm;
        }

        @media print {
          html,
          body {
            background: white !important;
            color: #111827 !important;
          }

          nav,
          footer,
          [data-no-print="true"] {
            display: none !important;
          }

          * {
            animation: none !important;
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }

          .resume-print {
            width: 100% !important;
            max-width: none !important;
            padding: 0 !important;
            gap: 0.75rem !important;
          }

          .resume-card {
            background: white !important;
            border-color: #d1d5db !important;
            box-shadow: none !important;
            backdrop-filter: none !important;
          }
        }
      `}</style>

      <div aria-hidden className="absolute inset-0 overflow-hidden print:hidden">
        <motion.div
          className="absolute -left-48 -top-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
          animate={{ x: [0, 80, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-3xl"
          animate={{ x: [0, -90, 0], y: [0, -30, 0], scale: [1.15, 1, 1.15] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[12%] top-[14%] h-14 w-14 rounded-full border border-foreground/20"
          animate={{ y: [-15, 15, -15], rotate: [0, 180, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[9%] top-[40%] h-20 w-20 border border-foreground/20"
          animate={{ y: [20, -20, 20], rotate: [0, -90, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <button
        type="button"
        data-no-print="true"
        onClick={() => window.print()}
        className="fixed right-6 top-24 z-40 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-2 text-sm font-medium backdrop-blur transition hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
      >
        <Download className="h-4 w-4" />
        Download PDF
      </button>

      <div className="resume-print container relative z-10 mx-auto max-w-6xl space-y-12 print:space-y-2 print:px-0">
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="resume-card relative overflow-hidden rounded-3xl border border-border/60 bg-background/60 p-8 backdrop-blur-xl print:rounded-none print:border-none print:bg-transparent print:p-0"
        >
          <span className="pointer-events-none absolute -right-4 top-2 hidden select-none font-heading text-[7.5rem] font-bold tracking-tighter text-foreground/5 lg:block print:hidden">
            RESUME
          </span>
          <motion.h1
            variants={itemVariants}
            className="font-heading text-5xl font-bold tracking-tighter sm:text-7xl lg:text-8xl print:text-4xl"
          >
            Vincent Bouwens
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-3 text-lg text-muted-foreground sm:text-2xl print:mt-1 print:text-base print:text-gray-700"
          >
            Junior Software Engineer · .NET · React · Next.js
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-6 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2 lg:grid-cols-3 print:mt-2 print:gap-1 print:text-[11px] print:text-gray-700"
          >
            <a href="mailto:vincentbouwens@live.com" className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary print:hidden" />vincentbouwens@live.com
            </a>
            <a href="tel:+31620143432" className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary print:hidden" />+31 6 20 14 34 32
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary print:hidden" />Leeuwarden, Nederland
            </span>
            <a
              href="https://www.linkedin.com/in/vincent-bouwens-1bb35325b/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Linkedin className="h-4 w-4 text-primary print:hidden" />LinkedIn
            </a>
            <a
              href="https://github.com/dice-pls7"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Github className="h-4 w-4 text-primary print:hidden" />GitHub
            </a>
          </motion.div>
        </motion.section>

        <SectionDivider />

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="resume-card relative rounded-3xl border border-border/60 bg-background/40 p-8 print:rounded-none print:border-none print:bg-transparent print:p-0"
        >
          <Watermark text="PROFILE" />
          <motion.h2 variants={itemVariants} className="font-heading text-3xl tracking-tight print:text-xl">
            Profiel
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-5xl text-base leading-relaxed text-muted-foreground print:mt-1 print:max-w-none print:text-[11px] print:leading-snug print:text-gray-700"
          >
            {profileText}
          </motion.p>
        </motion.section>

        <SectionDivider />

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="resume-card relative rounded-3xl border border-border/60 bg-background/40 p-8 print:rounded-none print:border-none print:bg-transparent print:p-0"
        >
          <Watermark text="EXPERIENCE" />
          <motion.h2 variants={itemVariants} className="font-heading text-3xl tracking-tight print:text-xl">
            Werkervaring
          </motion.h2>
          <motion.ol className="mt-6 space-y-5 print:mt-2 print:space-y-2">
            {workExperience.map((job, index) => (
              <motion.li
                key={job.company + job.role}
                variants={itemVariants}
                className="relative border-l border-primary/45 pl-5 print:pl-3"
              >
                <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary print:hidden" />
                <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold print:text-sm">
                      {index + 1}. {job.role}
                    </h3>
                    <p className="text-sm text-muted-foreground print:text-[11px] print:text-gray-700">
                      {job.company}, {job.location}
                    </p>
                  </div>
                  <p className="text-sm text-primary md:text-right print:text-[11px] print:text-gray-700">
                    {job.period}
                  </p>
                </div>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground print:mt-1 print:space-y-0.5 print:text-[10.5px] print:leading-snug print:text-gray-700">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/80 print:hidden" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </motion.ol>
        </motion.section>

        <SectionDivider />

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 lg:grid-cols-2 print:gap-2"
        >
          <motion.article
            variants={itemVariants}
            className="resume-card relative rounded-3xl border border-border/60 bg-background/40 p-8 print:rounded-none print:border-none print:bg-transparent print:p-0"
          >
            <Watermark text="EDUCATION" />
            <h2 className="font-heading text-3xl tracking-tight print:text-xl">Opleiding</h2>
            <div className="mt-5 space-y-4 print:mt-2 print:space-y-1.5">
              {education.map((item) => (
                <div key={item.title}>
                  <h3 className="text-lg font-semibold print:text-sm">{item.title}</h3>
                  <p className="text-sm text-muted-foreground print:text-[11px] print:text-gray-700">
                    {item.institution} · {item.period}
                  </p>
                  {item.detail ? (
                    <p className="mt-1 text-sm text-muted-foreground print:text-[10.5px] print:leading-snug print:text-gray-700">
                      {item.detail}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </motion.article>

          <motion.article
            variants={itemVariants}
            className="resume-card relative rounded-3xl border border-border/60 bg-background/40 p-8 print:rounded-none print:border-none print:bg-transparent print:p-0"
          >
            <Watermark text="SKILLS" />
            <h2 className="font-heading text-3xl tracking-tight print:text-xl">Skills</h2>
            <div className="mt-5 space-y-4 print:mt-2 print:space-y-1.5">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-sm uppercase tracking-widest text-primary print:text-[10px] print:text-gray-700">
                    {group.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2 print:mt-1 print:gap-1">
                    {group.values.map((skill) => (
                      <span
                        key={skill}
                        className={cn(
                          "rounded-full border border-border/80 bg-background/70 px-3 py-1 text-xs text-muted-foreground",
                          "print:rounded-sm print:border-gray-300 print:bg-white print:px-1.5 print:py-0.5 print:text-[10px] print:text-gray-700"
                        )}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.article>
        </motion.section>

        <SectionDivider />

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 lg:grid-cols-2 print:gap-2"
        >
          <motion.article
            variants={itemVariants}
            className="resume-card relative rounded-3xl border border-border/60 bg-background/40 p-8 print:rounded-none print:border-none print:bg-transparent print:p-0"
          >
            <Watermark text="CERTS" />
            <h2 className="font-heading text-3xl tracking-tight print:text-xl">Certificaten</h2>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-muted-foreground print:mt-2 print:space-y-0.5 print:pl-4 print:text-[10.5px] print:leading-snug print:text-gray-700">
              {certificates.map((certificate) => (
                <li key={certificate}>{certificate}</li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            variants={itemVariants}
            className="resume-card relative rounded-3xl border border-border/60 bg-background/40 p-8 print:rounded-none print:border-none print:bg-transparent print:p-0"
          >
            <Watermark text="LANG" />
            <h2 className="font-heading text-3xl tracking-tight print:text-xl">Talen</h2>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground print:mt-2 print:space-y-0.5 print:text-[10.5px] print:leading-snug print:text-gray-700">
              {languages.map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
          </motion.article>
        </motion.section>
      </div>
    </main>
  );
}
