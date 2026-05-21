"use client";

import { motion } from "framer-motion";

// ─────────────────────────────────────────────────────────────────────────────
// CV-variant: Traineeship / Young Professional / Brede junior IT-functies
//
// Waarom aparte positionering?
//   De developer-CV is smal gepositioneerd op .NET/React. Recruiters die zoeken
//   naar trainees of YP-kandidaten scannen op groeipotentieel, brede inzetbaar-
//   heid, communicatie en analytisch vermogen. Deze versie benadrukt die kanten.
// ─────────────────────────────────────────────────────────────────────────────

const resumeData = {
  name: "Vincent Bouwens",

  // Waarom gewijzigd: "Junior Software Engineer" sluit traineeships direct uit
  // voor recruiters die niet zoeken op development. "IT Professional in
  // Ontwikkeling" is breed en positief geladen.
  title: "Junior IT Professional",

  // Waarom: subtitle toont de doelgroep expliciet zodat recruiters en ATS
  // de kandidaat direct kunnen matchen op traineeship-zoekwoorden.
  subtitle: "Software • Analyse • Digitale Oplossingen • IT-Consultancy",

  // Waarom: "Landelijk inzetbaar" is een hard criterium bij veel traineeships —
  // vroeg vermelden verwijdert twijfel bij recruiters.
  location: "Leeuwarden · Landelijk inzetbaar / Bereid te verhuizen",

  email: "vincentbouwens@live.com",
  phone: "+31 6 2014 3432",
  linkedin: "linkedin.com/in/vincent-bouwens-1bb35325b",
  linkedinHref: "https://www.linkedin.com/in/vincent-bouwens-1bb35325b/",
  github: "github.com/dice-pls7",
  githubHref: "https://github.com/dice-pls7",

  // Waarom herschreven: de originele tekst klonk als een pure developer die
  // werk zoekt. Deze versie benadrukt leervermogen, brede interesse, stakeholder-
  // communicatie en groeipotentieel — kernwoorden bij traineeships.
  profile:
    "HBO-ICT afgestudeerde met een sterke technische basis én een brede interesse in IT-, proces- en organisatievraagstukken. Ik leer snel, neem verantwoordelijkheid en presteer goed in dynamische omgevingen. Tijdens stages en mijn huidige functie als IT Consultant heb ik aangetoond complexe problemen zelfstandig te analyseren, effectief te communiceren met uiteenlopende stakeholders en concrete waarde te leveren aan organisaties. Op zoek naar een traineeship of Young Professional-programma waar ik me breed kan ontwikkelen, technisch én organisatorisch. Landelijk inzetbaar en bereid te verhuizen.",

  experience: [
    {
      // Waarom herschreven: de originele bullets beschreven taken. Deze versie
      // beschrijft eigenaarschap, klantgerichte communicatie en consultancy-
      // vaardigheden — relevant voor IT-consultant en traineeship-rollen.
      title: "Software Developer / IT Consultant",
      company: "Amyyon",
      location: "Groningen, Nederland",
      period: "feb 2026 – heden",
      bullets: [
        "Lever end-to-end IT-oplossingen op voor klanten van requirements-analyse en ontwerp tot implementatie en deployment",
        "Schakel actief tussen technische uitvoering en klantgerichte communicatie over requirements, planning en oplossingsrichting",
        "Draag bij aan strategische beslissingen rondom architectuur, schaalbaarheid en softwarekwaliteit",
        "Toon eigenaarschap en lever resultaten in een professionele consultancy omgeving, zelfstandig én in teamverband",
      ],
    },
    {
      // Waarom herschreven: nadruk verlegd van wat er gebouwd is naar het
      // zelfstandig voeren van stakeholdergesprekken, probleemanalyse en
      // aantoonbare organisatorische impact — dit is wat traineeships zoeken.
      title: ".NET Software Developer — Afstudeerstage",
      company: "ChipSoft",
      location: "Heerenveen, Nederland",
      period: "sep 2025 – jan 2026",
      bullets: [
        "Leverde een productieklare oplossing op die handmatige ziekenhuisprocessen volledig verving door digitale automatisering",
        "Voerde zelfstandig stakeholdergesprekken met verpleegkundigen en afdelingshoofden om requirements scherp te stellen",
        "Vertaalde complexe organisatorische knelpunten naar een concrete, technische oplossing met meetbare procesimpact",
        "Presenteerde het eindresultaat aan management; oplossing direct overgenomen in productie",
      ],
    },
    {
      // Waarom herschreven: "usability-verbeteringen" klinkt vaag. "Analyseerde
      // en digitaliseerde processen" klinkt als een junior business/IT analist —
      // aantrekkelijker voor bredere IT-rollen.
      title: "Software Developer — Stage",
      company: "Technius Zwolle BV",
      location: "Staphorst, Nederland",
      period: "apr 2024 – sep 2024",
      bullets: [
        "Analyseerde en digitaliseerde klantinteractieprocessen die voorheen handmatig en foutgevoelig waren",
        "Leverde een webapplicatie op die gebruiksvriendelijkheid verbeterde en procesefficiëntie verhoogde",
      ],
    },
    {
      // Waarom herschreven: studentassistent toont niet alleen technische kennis
      // maar ook communicatieve vaardigheden en betrouwbaarheid over tijd —
      // beide waardevolle signalen voor traineeships.
      title: "Studentassistent",
      company: "Windesheim Hogeschool",
      location: "Zwolle, Nederland",
      period: "aug 2023 – sep 2025",
      bullets: [
        "Begeleidde eerstejaars HBO-ICT studenten bij SQL en PHP; maakte complexe technische concepten toegankelijk voor beginners",
        "Toonde verantwoordelijkheid, geduld en communicatieve vaardigheden over meerdere jaren",
      ],
    },
  ],

  education: [
    {
      degree: "BSc HBO-ICT",
      school: "Windesheim Hogeschool, Zwolle",
      period: "2022 – 2026",
      detail: "C#, PHP, Python, Java, JavaScript, SQL, HTML/CSS · Scrum/Agile",
    },
    {
      degree: "Bachelor, MBRT",
      school: "Hanzehogeschool Groningen",
      period: "2019 – 2022",
      detail: "",
    },
  ],

  skills: [
    // Waarom uitgesplitst in 4 categorieën: ATS-systemen en recruiters bij
    // traineeships zoeken op zowel harde technische skills als analytische en
    // persoonlijke competenties. Eén lange lijst met alleen programmeertalen
    // werkt averechts voor dit doelpubliek.
    {
      label: "Technisch",
      value: "C#, JavaScript, TypeScript, SQL, .NET, React, Next.js, REST API's, CI/CD, Git",
    },
    {
      label: "Analytisch & methodisch",
      value:
        "Probleemanalyse, procesverbetering, requirements-analyse, stakeholdermanagement, digitalisering",
    },
    {
      label: "Werkwijze",
      value: "Scrum/Agile, softwarearchitectuur, deployment, documentatie",
    },
    {
      // Waarom toegevoegd: soft skills zijn bij traineeships minstens zo
      // belangrijk als technische vaardigheden. Expliciete vermelding verhoogt
      // ATS-score op zoekwoorden als "communicatief", "teamspeler", "flexibel".
      label: "Persoonlijke competenties",
      value:
        "Snel lerend · Proactief · Resultaatgericht · Communicatief sterk · Teamspeler · Flexibel inzetbaar",
    },
  ],

  spokenLanguages: [
    { lang: "Nederlands", level: "Moedertaal" },
    { lang: "Engels", level: "Vloeiend" },
    { lang: "Duits", level: "B1" },
  ],

  certificates: [
    "Ask Better Questions – Build Better Relationships",
    "The Complete SQL Bootcamp: Zero to Hero",
  ],
};

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: EASE_OUT },
  }),
};

const lineReveal = {
  hidden: { scaleX: 0 },
  show: (i: number) => ({
    scaleX: 1,
    transition: { duration: 0.6, delay: i * 0.06, ease: EASE_OUT },
  }),
};

export default function TraineeshipResumePage() {
  return (
    <>
      <style>{`
        @media print {
          @page { size: A4; margin: 0; }
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            box-sizing: border-box !important;
          }
          html, body {
            background: #080810 !important;
            color: #fff !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: hidden !important;
          }
          nav, footer, #cv-grain, #cv-print-btn { display: none !important; }
          #cv-screen {
            min-height: auto !important;
            padding: 10mm 14mm !important;
            background: #080810 !important;
            width: 100% !important;
            max-width: 100% !important;
            overflow: hidden !important;
          }
          #cv-screen > div {
            max-width: 100% !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          #cv-name {
            font-size: 28pt !important;
            line-height: 0.9 !important;
            margin-bottom: 4px !important;
          }
          #cv-header { margin-bottom: 10px !important; }
          #cv-body { column-gap: 2rem !important; row-gap: 0 !important; }
          #cv-left > * + * { margin-top: 1.25rem !important; }
          #cv-right > * + * { margin-top: 0.875rem !important; }
          #cv-exp-list > * + * { margin-top: 0.625rem !important; }
        }
      `}</style>

      <div id="cv-screen" className="min-h-screen bg-[#080810] text-white px-6 md:px-16 xl:px-28 py-16 pb-32">
        {/* grain overlay */}
        <div
          id="cv-grain"
          className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* ── HEADER ──────────────────────────────────── */}
          <motion.div id="cv-header" initial="hidden" animate="show" className="mb-14 md:mb-20">
            {/* variant badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              className="mb-4 flex items-center gap-3"
            >
              <span className="font-mono text-xs tracking-[0.3em] text-[#c9ff6b] uppercase">
                Curriculum Vitae — {new Date().getFullYear()}
              </span>
              
            </motion.div>

            {/* name */}
            <motion.h1
              id="cv-name"
              custom={1}
              variants={fadeUp}
              className="font-heading text-[clamp(3.5rem,10vw,9rem)] leading-[0.88] tracking-[-0.04em] text-white mb-4"
            >
              {resumeData.name.split(" ").map((word, i) => (
                <span key={i} className={i === 1 ? "text-[#c9ff6b]" : ""}>
                  {i > 0 ? " " : ""}
                  {word}
                </span>
              ))}
            </motion.h1>

            {/* title row */}
            <motion.div
              custom={2}
              variants={fadeUp}
              className="flex flex-wrap items-center gap-3 mt-5 mb-8"
            >
              <span className="text-sm md:text-base text-white/80 font-light tracking-wide">
                {resumeData.title}
              </span>
              <span className="w-1 h-1 rounded-full bg-[#c9ff6b]" />
              <span className="text-sm md:text-base text-white/50 tracking-wide font-mono">
                {resumeData.subtitle}
              </span>
            </motion.div>

            {/* divider */}
            <motion.div
              custom={3}
              variants={lineReveal}
              style={{ originX: 0 }}
              className="h-px bg-white/10 mb-6"
            />

            {/* contact */}
            <motion.div
              custom={4}
              variants={fadeUp}
              className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-white/40"
            >
              <span>{resumeData.location}</span>
              <a href={`mailto:${resumeData.email}`} className="hover:text-[#c9ff6b] transition-colors">
                {resumeData.email}
              </a>
              <a href={`tel:${resumeData.phone}`} className="hover:text-[#c9ff6b] transition-colors">
                {resumeData.phone}
              </a>
              <a href={resumeData.linkedinHref} target="_blank" rel="noopener noreferrer" className="hover:text-[#c9ff6b] transition-colors">
                {resumeData.linkedin}
              </a>
              <a href={resumeData.githubHref} target="_blank" rel="noopener noreferrer" className="hover:text-[#c9ff6b] transition-colors">
                {resumeData.github}
              </a>
            </motion.div>
          </motion.div>

          {/* ── BODY GRID ───────────────────────────────── */}
          <div id="cv-body" className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-x-20 gap-y-14">
            {/* LEFT COL */}
            <div id="cv-left" className="space-y-14">
              {/* Profile */}
              <motion.section initial="hidden" animate="show">
                <SectionLabel index="01" label="Profiel" delay={5} />
                <motion.p
                  custom={6}
                  variants={fadeUp}
                  className="text-white/60 leading-relaxed text-sm md:text-base max-w-prose"
                >
                  {resumeData.profile}
                </motion.p>
              </motion.section>

              {/* Experience */}
              <motion.section initial="hidden" animate="show">
                <SectionLabel index="02" label="Werkervaring" delay={7} />
                <div id="cv-exp-list" className="space-y-10">
                  {resumeData.experience.map((exp, i) => (
                    <motion.div
                      key={exp.company + exp.period}
                      custom={8 + i}
                      variants={fadeUp}
                      className="relative pl-5 border-l border-white/10 hover:border-[#c9ff6b]/40 transition-colors group"
                    >
                      <div className="absolute -left-[3px] top-0 w-[5px] h-[5px] rounded-full bg-[#c9ff6b] group-hover:scale-150 transition-transform" />
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                        <span className="text-white font-semibold text-sm md:text-base leading-tight">
                          {exp.title}
                        </span>
                        <span className="font-mono text-[10px] text-white/30 shrink-0">
                          {exp.period}
                        </span>
                      </div>
                      <div className="font-mono text-xs text-[#c9ff6b]/70 mb-3">
                        {exp.company} &nbsp;·&nbsp; {exp.location}
                      </div>
                      <ul className="space-y-1.5">
                        {exp.bullets.map((b, j) => (
                          <li key={j} className="flex gap-2 text-xs text-white/50 leading-relaxed">
                            <span className="mt-[5px] shrink-0 w-1 h-1 rounded-full bg-white/20" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            </div>

            {/* RIGHT COL */}
            <div id="cv-right" className="space-y-10">
              {/* Skills */}
              <motion.section initial="hidden" animate="show">
                <SectionLabel index="03" label="Kerncompetenties" delay={9} />
                <div className="space-y-5">
                  {resumeData.skills.map((s, i) => (
                    <motion.div key={s.label} custom={10 + i} variants={fadeUp}>
                      <div className="font-mono text-[10px] tracking-widest text-[#c9ff6b]/60 uppercase mb-1">
                        {s.label}
                      </div>
                      <div className="text-white/60 text-xs leading-relaxed">{s.value}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Education */}
              <motion.section initial="hidden" animate="show">
                <SectionLabel index="04" label="Opleiding" delay={14} />
                <div className="space-y-5">
                  {resumeData.education.map((e, i) => (
                    <motion.div key={e.degree} custom={15 + i} variants={fadeUp}>
                      <div className="text-white font-semibold text-sm">{e.degree}</div>
                      <div className="font-mono text-[11px] text-white/40 mt-0.5">{e.school}</div>
                      <div className="font-mono text-[11px] text-[#c9ff6b]/50">{e.period}</div>
                      {e.detail && (
                        <div className="text-xs text-white/30 mt-1">{e.detail}</div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Languages */}
              <motion.section initial="hidden" animate="show">
                <SectionLabel index="05" label="Talen" delay={17} />
                <div className="space-y-2">
                  {resumeData.spokenLanguages.map((l, i) => (
                    <motion.div
                      key={l.lang}
                      custom={18 + i}
                      variants={fadeUp}
                      className="flex items-center justify-between"
                    >
                      <span className="text-white/70 text-sm">{l.lang}</span>
                      <span className="font-mono text-xs text-white/30">{l.level}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Certificates */}
              <motion.section initial="hidden" animate="show">
                <SectionLabel index="06" label="Certificaten" delay={21} />
                <ul className="space-y-2">
                  {resumeData.certificates.map((c, i) => (
                    <motion.li
                      key={i}
                      custom={22 + i}
                      variants={fadeUp}
                      className="flex gap-2 text-xs text-white/50"
                    >
                      <span className="mt-[5px] shrink-0 w-1 h-1 rounded-full bg-[#c9ff6b]/40" />
                      {c}
                    </motion.li>
                  ))}
                </ul>
              </motion.section>
            </div>
          </div>

          {/* ── ACTIONS ─────────────────────────────────── */}
          <motion.div
            id="cv-print-btn"
            custom={25}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-20 flex flex-wrap justify-center gap-4"
          >
            <button
              onClick={() => window.print()}
              className="group flex items-center gap-3 border border-white/10 hover:border-[#c9ff6b]/60 text-white/40 hover:text-[#c9ff6b] font-mono text-xs tracking-widest uppercase px-8 py-4 transition-all duration-300"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:scale-110 transition-transform">
                <path d="M6 9V2h12v7" /><rect x="6" y="14" width="12" height="8" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
              </svg>
              Print / Save as PDF
            </button>
            <a
              href="/api/resume/traineeship"
              download="Vincent_Bouwens_CV_Traineeship.docx"
              className="group flex items-center gap-3 border border-white/10 hover:border-[#c9ff6b]/60 text-white/40 hover:text-[#c9ff6b] font-mono text-xs tracking-widest uppercase px-8 py-4 transition-all duration-300"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:scale-110 transition-transform">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download .docx
            </a>
            <a
              href="/resume"
              className="group flex items-center gap-3 border border-white/10 hover:border-white/30 text-white/20 hover:text-white/50 font-mono text-xs tracking-widest uppercase px-8 py-4 transition-all duration-300"
            >
              ← Developer CV
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
}

function SectionLabel({
  index,
  label,
  delay,
}: {
  index: string;
  label: string;
  delay: number;
}) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <motion.span
        custom={delay}
        variants={fadeUp}
        className="font-mono text-[10px] text-[#c9ff6b]/60"
      >
        {index}
      </motion.span>
      <motion.div
        custom={delay}
        variants={lineReveal}
        style={{ originX: 0 }}
        className="h-px flex-1 bg-white/10"
      />
      <motion.span
        custom={delay}
        variants={fadeUp}
        className="font-mono text-[10px] tracking-[0.2em] text-white/30 uppercase"
      >
        {label}
      </motion.span>
    </div>
  );
}
