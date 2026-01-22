import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Vincent Bouwens's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        "Vincent Bouwens's key skills that define his professional identity.",
    },
  },
  projects: {
    title: "Projecten",
    description: "Gemaakte projecten en technische prestaties.",
    metadata: {
      title: "Projecten",
      description: "Vincent Bouwens's projecten in het bouwen van webapplicaties.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Vincent Bouwens.",
    },
  },
  resume: {
    title: "Resume",
    description: "Vincent Bouwens's resume.",
    metadata: {
      title: "Resume",
      description: "Vincent Bouwens's resume.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey and career timeline.",
    metadata: {
      title: "Experience",
      description:
        "Vincent Bouwens's professional journey and experience timeline.",
    },
  },
};
