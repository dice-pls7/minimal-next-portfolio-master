import { NextResponse } from "next/server";
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  BorderStyle,
  Table,
  TableRow,
  TableCell,
  WidthType,
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
    run: { bold: true, color: SLATE, size: 17, font: "Calibri" },
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
                text: "IT Professional in Ontwikkeling  ·  Traineeship  ·  Young Professional  ·  IT-Consultancy",
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
              new TextRun({ text: "Leeuwarden  ·  Landelijk inzetbaar / Bereid te verhuizen  ", size: 17, color: MUTED, font: "Calibri" }),
              new TextRun({ text: "vincentbouwens@live.com  ", size: 17, color: MUTED, font: "Calibri" }),
              new TextRun({ text: "+31 6 20 14 34 32  ", size: 17, color: MUTED, font: "Calibri" }),
              new TextRun({ text: "linkedin.com/in/vincent-bouwens-1bb35325b  ", size: 17, color: MUTED, font: "Calibri" }),
              new TextRun({ text: "github.com/dice-pls7", size: 17, color: MUTED, font: "Calibri" }),
            ],
          }),

          // ── PROFIEL ─────────────────────────────────────────────
          sectionHeading("Profiel"),
          new Paragraph({
            spacing: { after: 60 },
            children: [
              new TextRun({
                text: "HBO-ICT afgestudeerde met een sterke technische basis én een brede interesse in IT-, proces- en organisatievraagstukken. Ik leer snel, neem verantwoordelijkheid en presteer goed in dynamische omgevingen. Tijdens stages en mijn huidige functie als IT Consultant heb ik aangetoond complexe problemen zelfstandig te analyseren, effectief te communiceren met uiteenlopende stakeholders en concrete waarde te leveren aan organisaties. Op zoek naar een traineeship of Young Professional-programma waar ik me breed kan ontwikkelen — technisch én organisatorisch. Landelijk inzetbaar en bereid te verhuizen.",
                size: 17,
                color: MUTED,
                font: "Calibri",
              }),
            ],
          }),

          // ── WERKERVARING ─────────────────────────────────────────
          sectionHeading("Werkervaring"),

          roleHeader("Software Developer / IT Consultant", "feb 2026 – heden"),
          roleMeta("Amyyon", "Groningen, Nederland"),
          bullet("Lever end-to-end IT-oplossingen op voor klanten — van requirements-analyse en ontwerp tot implementatie en deployment"),
          bullet("Schakel actief tussen technische uitvoering en klantgerichte communicatie over requirements, planning en oplossingsrichting"),
          bullet("Draag bij aan strategische beslissingen rondom architectuur, schaalbaarheid en softwarekwaliteit"),
          bullet("Toon eigenaarschap en lever resultaten in een professionele consultancy-omgeving, zelfstandig én in teamverband"),

          ...spacer(1),

          roleHeader(".NET Software Developer — Afstudeerstage", "sep 2025 – jan 2026"),
          roleMeta("ChipSoft", "Heerenveen, Nederland"),
          bullet("Leverde een productieklare oplossing op die handmatige ziekenhuisprocessen volledig verving door digitale automatisering"),
          bullet("Voerde zelfstandig stakeholdergesprekken met verpleegkundigen en afdelingshoofden om requirements scherp te stellen"),
          bullet("Vertaalde complexe organisatorische knelpunten naar een concrete, technische oplossing met meetbare procesimpact"),
          bullet("Presenteerde het eindresultaat aan management — oplossing direct overgenomen in productie"),

          ...spacer(1),

          roleHeader("Software Developer — Stage", "apr 2024 – sep 2024"),
          roleMeta("Technius Zwolle BV", "Staphorst, Nederland"),
          bullet("Analyseerde en digitaliseerde klantinteractieprocessen die voorheen handmatig en foutgevoelig waren"),
          bullet("Leverde een webapplicatie op die gebruiksvriendelijkheid verbeterde en procesefficiëntie verhoogde"),

          ...spacer(1),

          roleHeader("Studentassistent", "aug 2023 – sep 2025"),
          roleMeta("Windesheim Hogeschool", "Zwolle, Nederland"),
          bullet("Begeleidde eerstejaars HBO-ICT studenten bij SQL en PHP; maakte complexe technische concepten toegankelijk voor beginners"),
          bullet("Toonde verantwoordelijkheid, geduld en communicatieve vaardigheden over meerdere jaren"),

          // ── TWO-COLUMN BOTTOM ─────────────────────────────────────
          ...spacer(1),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            borders: {
              top: { style: BorderStyle.NONE },
              bottom: { style: BorderStyle.NONE },
              left: { style: BorderStyle.NONE },
              right: { style: BorderStyle.NONE },
            },
            rows: [
              new TableRow({
                children: [
                  // LEFT: Competenties + Opleiding
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
                        text: "KERNCOMPETENTIES",
                        spacing: { before: 0, after: 80 },
                        border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: SLATE, space: 3 } },
                        run: { bold: true, color: SLATE, size: 17, font: "Calibri" },
                      }),
                      skillRow("Technisch", "C#, JavaScript, TypeScript, SQL, .NET, React, Next.js, REST API's, CI/CD, Git"),
                      skillRow("Analytisch & methodisch", "Probleemanalyse, procesverbetering, requirements-analyse, stakeholdermanagement, digitalisering"),
                      skillRow("Werkwijze", "Scrum/Agile, softwarearchitectuur, deployment, documentatie"),
                      skillRow("Persoonlijke competenties", "Snel lerend · Proactief · Resultaatgericht · Communicatief sterk · Teamspeler · Flexibel inzetbaar"),

                      new Paragraph({
                        text: "OPLEIDING",
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
                        children: [new TextRun({ text: "Windesheim Hogeschool, Zwolle  ·  2022 – 2026", size: 17, color: MUTED, font: "Calibri" })],
                      }),
                      new Paragraph({
                        spacing: { after: 80 },
                        children: [new TextRun({ text: "C#, PHP, Python, Java, JavaScript, SQL, HTML/CSS  ·  Scrum/Agile", size: 16, color: MUTED, font: "Calibri" })],
                      }),
                      new Paragraph({
                        spacing: { after: 20 },
                        children: [new TextRun({ text: "Bachelor, MBRT", bold: true, size: 18, color: BLACK, font: "Calibri" })],
                      }),
                      new Paragraph({
                        spacing: { after: 10 },
                        children: [new TextRun({ text: "Hanzehogeschool Groningen  ·  2019 – 2022", size: 17, color: MUTED, font: "Calibri" })],
                      }),
                    ],
                  }),

                  // RIGHT: Talen + Certificaten
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
                        text: "TALEN",
                        spacing: { before: 0, after: 80 },
                        border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: SLATE, space: 3 } },
                        run: { bold: true, color: SLATE, size: 17, font: "Calibri" },
                      }),
                      new Paragraph({
                        spacing: { after: 20 },
                        children: [
                          new TextRun({ text: "Nederlands", size: 17, color: BLACK, font: "Calibri" }),
                          new TextRun({ text: "  —  Moedertaal", size: 17, color: MUTED, font: "Calibri" }),
                        ],
                      }),
                      new Paragraph({
                        spacing: { after: 20 },
                        children: [
                          new TextRun({ text: "Engels", size: 17, color: BLACK, font: "Calibri" }),
                          new TextRun({ text: "  —  Vloeiend", size: 17, color: MUTED, font: "Calibri" }),
                        ],
                      }),
                      new Paragraph({
                        spacing: { after: 80 },
                        children: [
                          new TextRun({ text: "Duits", size: 17, color: BLACK, font: "Calibri" }),
                          new TextRun({ text: "  —  B1", size: 17, color: MUTED, font: "Calibri" }),
                        ],
                      }),
                      new Paragraph({
                        text: "CERTIFICATEN",
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

  const buffer = await Packer.toBuffer(doc);

  return new NextResponse(new Uint8Array(buffer), {
    headers: {
      "Content-Disposition": 'attachment; filename="Vincent_Bouwens_CV_Traineeship.docx"',
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    },
  });
}
