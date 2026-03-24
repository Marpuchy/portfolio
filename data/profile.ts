export type Profile = {
  name: string;
  role: string;
  tagline: string;
  summary: string;
};

export const profile: Profile = {
  name: "Marc Ib\u00e1\u00f1ez",
  role: "Web Developer & Game Developer",
  tagline: "Interactive systems built with scalable architecture and a professional product mindset.",
  summary:
    "I focus on building interactive experiences and well-structured, scalable systems, combining web development and game development principles.",
};

export const navigationItems = [
  { label: "Projects", href: "/#projects" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Contact", href: "/#contact" },
];

export const dualProfileAreas = [
  {
    title: "Web Systems",
    summary:
      "Data-driven products, administration workflows, and structured frontends built with an emphasis on scalability and clarity.",
    capabilities: [
      "App Router interfaces with clean component composition.",
      "Domain-focused data models for products that need to grow.",
      "Professional UX shaped by hierarchy, readability, and maintainable code.",
    ],
  },
  {
    title: "Interactive / Game Systems",
    summary:
      "Gameplay-focused development that treats interaction, runtime behavior, and system design as first-class concerns.",
    capabilities: [
      "Gameplay systems organized around reusable mechanics and event flows.",
      "Interaction design that balances responsiveness with technical structure.",
      "Tooling and implementation patterns that support iteration without chaos.",
    ],
  },
];

export const contactLinks = [
  {
    label: "Email",
    value: "mibanezp0709@gmail.com",
    href: "mailto:mibanezp0709@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/Marpuchy",
    href: "https://github.com/Marpuchy",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/marc-ibanez",
    href: "https://www.linkedin.com/in/marc-ib%C3%A0%C3%B1ez-0932502aa/",
  },
];
