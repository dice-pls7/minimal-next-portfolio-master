import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "chipsoft",
    position: "Software Engineering Intern",
    company: "Chipsoft",
    location: "Heerenveen, Netherlands",
    startDate: new Date("2025-09-01"),
    endDate: new Date("2026-01-23"),
    description: [
      "Developed a cleaning module for hospital management systems using HiX EPD software.",
      "Implemented automated bed cleaning triggers after patient discharge to improve nurse workflows.",
      "Enhanced quality of life features for healthcare staff through software optimization.",
    ],
    achievements: [
      "Created a specialized cleaning module for hospital environments using HiX (EPD SOFTWARE).",
      "Implemented automated cleaning triggers that activate after patient discharge, reducing manual coordination.",
      "Developed quality of life improvements that enhanced nursing staff efficiency and working conditions.",
      "Contributed to healthcare software solutions that directly impact patient care quality.",
    ],

      skills: ["Javascript", "SQL", "Healthcare Systems", "HiX EPD", "Full Stack"],
      companyUrl: "https://www.chipsoft.nl",
      logo: "/experience/chipsoft-logo.png",
  },
  {
    id: "builtdesign",
    position: "Software Engineering Intern",
    company: "Ultraware",
    location: "Assen, Netherlands",
    startDate: new Date("2024-09-01"),
    endDate: new Date("2025-01-23"),
    description: [
      "Worked on software engineering projects and full-stack development.",
      "Contributed to various application development tasks and improvements.",
      "Gained experience with professional software development practices.",
    ],
    achievements: [
      "Participated in full-stack software development projects.",
      "Contributed to application development and software improvements.",
      "Collaborated with development team on multiple engineering initiatives.",
    ],
    skills: [
      "Javascript",
      "React",
      "Node.js",
      "SQL",
      "Full Stack",
    ],
    companyUrl: "https://builtdesign.in",
    logo: "/experience/builtdesign-logo.png",

  },
   {
    id: "stagair-it",
    position: "Software Engineering Intern",
    company: "Stagair IT (Technius Zwolle BV)",
    location: "Staphorst, Overijssel, Netherlands",
    startDate: new Date("2024-04-01"),
    endDate: new Date("2024-07-01"),
    description: [
      "Developed web applications aimed at improving and automating business processes.",
      "Worked with database design and optimization using SQL.",
      "Contributed to full-stack development with JavaScript and modern web technologies.",
    ],
    achievements: [
      "Developed a web application focused on improving and automating critical business processes.",
      "Implemented efficient database solutions using SQL for improved data management.",
      "Collaborated with team members to deliver high-quality software solutions.",
      "Gained hands-on experience with modern web development practices and technologies.",
    ],
    skills: ["Javascript", "SQL", "React", "HTML 5", "CSS 3"],
    companyUrl: "https://www.technius.nl",
    logo: "/experience/technius-logo.png",
  },
  {
      id: "windesheim",
      position: "Teaching Assistant",
      company: "Windesheim University of Applied Sciences",
      location: "Zwolle, Netherlands",
      startDate: new Date("2023-08-01"),  
      endDate: new Date("2025-10-15"),
      description: [
        "Provided instructional support for HBO-level computer science students.",
        "Assisted with SQL and PHP programming coursework.",  
        "Helped students understand fundamental concepts in database management and web development.",
      ],
      achievements: [
        "Supported students in learning SQL and PHP programming languages.",
        "Provided one-on-one and group tutoring for first-year HBO students.",
        "Helped improve student comprehension of database management and backend development concepts.",
      ],
      skills: ["SQL", "PHP", "Education", "Mentoring", "Web Development"],
      companyUrl: "https://www.windesheim.nl",
      logo: "/experience/windesheim-logo.png",
    },  

    
  
];
