import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "fleurig-thus",
    companyName: "Fleurig Thús",
    type: "Professional",
    category: ["Web Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Stijlvolle en gebruiksvriendelijke website voor een professioneel schoonmaakbedrijf.",
    websiteLink: "https://www.fleurigthus.nl/",
    techStack: [
      "Next.js",
      "React",
      "Typescript",
      "Tailwind CSS",
    ],
    startDate: new Date("2025-01-01"),
    endDate: new Date("2026-01-12"),
    companyLogoImg: "/projects/fleurig-thus/PlaatjeFleurigThusPerfect.png", 
    pagesInfoArr: [ 
      {
        title: "Homepagina",
        description:
          "Frisse en uitnodigende landingspagina met overzicht van schoonmaakdiensten",
        imgArr: [
          "/projects/fleurig-thus/HomePageFleurigThus.png",
        ],
      },
      {
        title: "Blogpagina",
        description:
          "Informatieve blogpagina met schoonmaaktips en huishoudelijke artikelen",
        imgArr: [
          "/projects/fleurig-thus/Showcase/BlogFleurigThus.png",
        ],
      },
      {
        title: "Prijzenpagina",
        description:
          "Overzichtelijke prijzenpagina met verschillende schoonmaakpakketten en diensten",
        imgArr: [
          "/projects/fleurig-thus/Showcase/PrijzenFleurigThus.png",
        ],
      },
      {
        title: "Contactpagina",
        description:
          "Contactpagina met e-mail, telefoonnummer en vrijblijvend kennismakingsgesprek",
        imgArr: [
          "/projects/fleurig-thus/Showcase/ContactFleurigThus.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Ik heb een moderne website ontwikkeld voor Fleurig Thús, een professioneel schoonmaakbedrijf gevestigd in Nederland. Het project was gericht op het creëren van een frisse, intuïtieve gebruikerservaring die de toewijding van het bedrijf aan kwalitatieve dienstverlening weerspiegelt.",
        "Daarnaast heeft de website een De website heeft een responsive design gebouwd met Next.js en React, wat zorgt voor optimale prestaties op alle apparaten. Ik heb TypeScript gebruikt voor type-veiligheid en onderhoudbaarheid, terwijl Tailwind CSS snelle ontwikkeling van een gepolijste, professionele interface mogelijk maakte.",
        "De site toont effectief de schoonmaakdiensten van het bedrijf en maakt het gemakkelijk voor potentiële klanten om contact op te nemen, waardoor Fleurig Thús een sterke online aanwezigheid heeft opgebouwd.",
      ],
      bullets: [
        "Ontwikkeling van een moderne, responsive website voor een schoonmaakbedrijf",
        "Gebouwd met Next.js en React voor optimale prestaties",
        "TypeScript geïmplementeerd voor betrouwbaarheid en onderhoudbaarheid",
        "Ontworpen met Tailwind CSS voor een strakke, professionele uitstraling",
        "Intuïtieve navigatie en contactopties voor klanten gecreëerd",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
