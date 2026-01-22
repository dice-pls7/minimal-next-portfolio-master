import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@dice-pls7",
    icon: Icons.gitHub,
    link: "https://github.com/dice-pls7",
  },
  {
    name: "LinkedIn",
    username: "Vincent Bouwens",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/vincent-bouwens-1bb35325b/",
  },
  {
    name: "Email",
    username: "Vincent Bouwens",
    icon: Icons.gmail,
    link: "mailto:vincenbouwens@live.com",
  },
];
