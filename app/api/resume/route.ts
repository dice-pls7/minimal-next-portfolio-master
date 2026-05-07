import { NextResponse } from "next/server";
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  BorderStyle,
  Table,
  TableRow,
  TableCell,
  WidthType,
  ShadingType,
  UnderlineType,
  TabStopType,
 
} from "docx";

const NAVY = "1A1A2E";
const SLATE = "2E4A7A";
const MUTED = "6B7280";
const BLACK = "111111";

function spacer(lines = 1): Paragraph[] {
  return Array.from({ length: lines }, () => new Paragraph({ text: "" }));
}

function sectionHeading(text: string): Paragraph {
  return new Paragraph({
    text: text.toUpperCase(),
    heading: HeadingLevel.HEADING_3,
    border: {
      bottom: { style: BorderStyle.SINGLE, size: 6, color: SLATE, space: 3 },
    },
    spacing: { before: 160, after: 80 },
    run: {
      bold: true,
      color: SLATE,
      size: 17,
      font: "Calibri",
    },
  });
}

function roleHeader(title: string, period: string): Paragraph {
  return new Paragraph({
    tabStops: [{ type: TabStopType.RIGHT, position: 9200, leader: "dot" }],
    spacing: { before: 100, after: 20 },
    children: [
      new TextRun({ text: title, bold: true, size: 19, color: BLACK, font: "Calibri" }),
      new TextRun({ text: "\t", font: "Calibri" }),
      new TextRun({ text: period, color: MUTED, size: 17, font: "Calibri" }),
    ],
  });
}

function roleMeta(company: string, location: string): Paragraph {
  return new Paragraph({
    spacing: { after: 40 },
    children: [
      new TextRun({ text: company, color: SLATE, size: 17, font: "Calibri" }),
      new TextRun({ text: "  ·  " + location, color: MUTED, size: 17, font: "Calibri" }),
    ],
  });
}

function bullet(text: string): Paragraph {
  return new Paragraph({
    text,
    bullet: { level: 0 },
    spacing: { after: 20 },
    run: { size: 17, color: MUTED, font: "Calibri" },
  });
}

function skillRow(label: string, value: string): Paragraph {
  return new Paragraph({
    spacing: { after: 40 },
    children: [
      new TextRun({ text: label + ":  ", bold: true, size: 17, color: SLATE, font: "Calibri" }),
      new TextRun({ text: value, size: 17, color: MUTED, font: "Calibri" }),
    ],
  });
}

export async function GET() {
  const doc = new Document({
    styles: {
      paragraphStyles: [
        {
          id: "Normal",
          name: "Normal",
          run: { font: "Calibri", size: 18, color: BLACK },
        },
      ],
    },
    sections: [
      {
        properties: {
          page: {
            margin: { top: 720, bottom: 720, left: 900, right: 900 },
          },
        },
        children: [
          // ── NAME ────────────────────────────────────────────────
          new Paragraph({
            spacing: { after: 40 },
            children: [
              new TextRun({
                text: "Vincent Bouwens",
                bold: true,
                size: 52,
                color: NAVY,
                font: "Calibri",
              }),
            ],
          }),
          new Paragraph({
            spacing: { after: 60 },
            children: [
              new TextRun({
                text: "Junior Software Engineer  ·  .NET  ·  React  ·  Next.js",
                size: 20,
                color: SLATE,
                font: "Calibri",
              }),
            ],
          }),

          // ── CONTACT LINE ────────────────────────────────────────
          new Paragraph({
            spacing: { after: 20 },
            children: [
              new TextRun({ text: "Leeuwarden, Netherlands  ", size: 17, color: MUTED, font: "Calibri" }),
              new TextRun({ text: "vincentbouwens@live.com  ", size: 17, color: MUTED, font: "Calibri" }),
              new TextRun({ text: "+31 6 20 14 34 32  ", size: 17, color: MUTED, font: "Calibri" }),
              new TextRun({ text: "linkedin.com/in/vincent-bouwens-1bb35325b  ", size: 17, color: MUTED, font: "Calibri" }),
              new TextRun({ text: "github.com/dice-pls7", size: 17, color: MUTED, font: "Calibri" }),
            ],
          }),

          // ── PROFILE ─────────────────────────────────────────────
          sectionHeading("Profile"),
          new Paragraph({
            spacing: { after: 60 },
            children: [
              new TextRun({
                text: "HBO-ICT graduate with hands-on experience building web applications and SaaS solutions using .NET and modern frontend frameworks like React and Next.js. I have worked on solutions used in production, with a focus on maintainable code, usability, and process optimisation. I enjoy collaborating within a team to build durable software and I am looking for a junior software engineering role where I can grow and take responsibility.",
                size: 17,
                color: MUTED,
                font: "Calibri",
              }),
            ],
          }),

          // ── EXPERIENCE ──────────────────────────────────────────
          sectionHeading("Experience"),

          roleHeader("Software Developer / IT Consultant", "Feb 2026 – Present"),
          roleMeta("Amyyon", "Groningen, Netherlands"),
          bullet("Developing and maintaining web applications and SaaS solutions with C#/.NET and Next.js"),
          bullet("Built a SaaS landing page in Next.js and connected frontend components to APIs"),
          bullet("Contributed to CI/CD and deployment; involved in decisions around scalability and software architecture"),
          bullet("Focus on maintainability and durable software quality in the codebase"),

          ...spacer(1),

          roleHeader(".NET Software Developer — Graduation Internship", "Sep 2025 – Jan 2026"),
          roleMeta("ChipSoft", "Heerenveen, Netherlands"),
          bullet("Developed a production-ready .NET solution within HiX to digitalise and automate the bed-cleaning process in hospitals"),
          bullet("End-to-end ownership: problem analysis, stakeholder interviews, design decisions and implementation"),
          bullet("Reduced manual steps through better process visibility and operational automation"),

          ...spacer(1),

          roleHeader("Software Developer — Internship", "Apr 2024 – Sep 2024"),
          roleMeta("Technius Zwolle BV", "Staphorst, Netherlands"),
          bullet("Developed a web application to modernise and digitalise customer interaction processes"),
          bullet("Delivered usability improvements and process digitalisation as core project outcomes"),

          ...spacer(1),

          roleHeader("Student Teaching Assistant", "Aug 2023 – Sep 2025"),
          roleMeta("Windesheim University", "Zwolle, Netherlands"),
          bullet("Guided first-year HBO-ICT students with SQL and PHP; explained technical topics clearly to beginners"),

          // ── TWO-COLUMN: Skills + Education ──────────────────────
          ...spacer(1),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            borders: {
              top: { style: BorderStyle.NONE },
              bottom: { style: BorderStyle.NONE },
              left: { style: BorderStyle.NONE },
              right: { style: BorderStyle.NONE },
            //   insideH: { style: BorderStyle.NONE },
            //   insideV: { style: BorderStyle.NONE },
            },
            rows: [
              new TableRow({
                children: [
                  // LEFT: Skills
                  new TableCell({
                    width: { size: 55, type: WidthType.PERCENTAGE },
                    margins: { right: 300 },
                    borders: {
                      top: { style: BorderStyle.NONE },
                      bottom: { style: BorderStyle.NONE },
                      left: { style: BorderStyle.NONE },
                      right: { style: BorderStyle.NONE },
                    },
                    children: [
                      new Paragraph({
                        text: "SKILLS",
                        spacing: { before: 0, after: 80 },
                        border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: SLATE, space: 3 } },
                        run: { bold: true, color: SLATE, size: 17, font: "Calibri" },
                      }),
                      skillRow("Languages", "C#, JavaScript, TypeScript, SQL, Python, Java, HTML/CSS"),
                      skillRow("Frameworks & Technology", ".NET, React, Next.js"),
                      skillRow("Concepts & Practices", "REST APIs, CI/CD, Deployment, Software Architecture, Scrum/Agile, Process Improvement"),

                      new Paragraph({
                        text: "EDUCATION",
                        spacing: { before: 160, after: 80 },
                        border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: SLATE, space: 3 } },
                        run: { bold: true, color: SLATE, size: 17, font: "Calibri" },
                      }),
                      new Paragraph({
                        spacing: { after: 20 },
                        children: [new TextRun({ text: "BSc HBO-ICT", bold: true, size: 18, color: BLACK, font: "Calibri" })],
                      }),
                      new Paragraph({
                        spacing: { after: 10 },
                        children: [new TextRun({ text: "Windesheim University of Applied Sciences, Zwolle  ·  2022 – 2026", size: 17, color: MUTED, font: "Calibri" })],
                      }),
                      new Paragraph({
                        spacing: { after: 80 },
                        children: [new TextRun({ text: "C#, PHP, Python, Java, JavaScript, SQL, HTML/CSS  ·  Scrum/Agile", size: 16, color: MUTED, font: "Calibri" })],
                      }),
                      new Paragraph({
                        spacing: { after: 20 },
                        children: [new TextRun({ text: "Bachelor, Medical Imaging & Radiation Therapy", bold: true, size: 18, color: BLACK, font: "Calibri" })],
                      }),
                      new Paragraph({
                        spacing: { after: 10 },
                        children: [new TextRun({ text: "Hanze University of Applied Sciences, Groningen  ·  2019 – 2022", size: 17, color: MUTED, font: "Calibri" })],
                      }),
                    ],
                  }),

                  // RIGHT: Languages + Certificates
                  new TableCell({
                    width: { size: 45, type: WidthType.PERCENTAGE },
                    margins: { left: 300 },
                    borders: {
                      top: { style: BorderStyle.NONE },
                      bottom: { style: BorderStyle.NONE },
                      left: { style: BorderStyle.NONE },
                      right: { style: BorderStyle.NONE },
                    },
                    children: [
                      new Paragraph({
                        text: "LANGUAGES",
                        spacing: { before: 0, after: 80 },
                        border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: SLATE, space: 3 } },
                        run: { bold: true, color: SLATE, size: 17, font: "Calibri" },
                      }),
                      new Paragraph({
                        spacing: { after: 20 },
                        children: [
                          new TextRun({ text: "Dutch", size: 17, color: BLACK, font: "Calibri" }),
                          new TextRun({ text: "  —  Native", size: 17, color: MUTED, font: "Calibri" }),
                        ],
                      }),
                      new Paragraph({
                        spacing: { after: 20 },
                        children: [
                          new TextRun({ text: "English", size: 17, color: BLACK, font: "Calibri" }),
                          new TextRun({ text: "  —  Fluent", size: 17, color: MUTED, font: "Calibri" }),
                        ],
                      }),
                      new Paragraph({
                        spacing: { after: 80 },
                        children: [
                          new TextRun({ text: "German", size: 17, color: BLACK, font: "Calibri" }),
                          new TextRun({ text: "  —  B1", size: 17, color: MUTED, font: "Calibri" }),
                        ],
                      }),
                      new Paragraph({
                        text: "CERTIFICATES",
                        spacing: { before: 160, after: 80 },
                        border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: SLATE, space: 3 } },
                        run: { bold: true, color: SLATE, size: 17, font: "Calibri" },
                      }),
                      new Paragraph({
                        text: "Ask Better Questions – Build Better Relationships",
                        bullet: { level: 0 },
                        spacing: { after: 20 },
                        run: { size: 17, color: MUTED, font: "Calibri" },
                      }),
                      new Paragraph({
                        text: "The Complete SQL Bootcamp: Zero to Hero",
                        bullet: { level: 0 },
                        spacing: { after: 20 },
                        run: { size: 17, color: MUTED, font: "Calibri" },
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      },
    ],
  });

}
