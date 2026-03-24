export type ProjectGalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

export type Project = {
  slug: string;
  title: string;
  type: string;
  role: string;
  shortDescription: string;
  fullDescription: string;
  focus: string[];
  highlights: string[];
  stack: string[];
  imageUrl: string;
  imageAlt: string;
  gallery: ProjectGalleryImage[];
  technicalApproach: string[];
  keyFeatures: string[];
  githubUrl: string;
  liveUrl: string | null;
  status: string;
  featured: boolean;
  year: number;
};

export const projects: Project[] = [
  {
    slug: "dnd-manager",
    title: "DND Manager",
    type: "System",
    role: "Full-Stack Developer",
    shortDescription:
      "Tabletop campaign platform focused on domain modeling, operational workflows, and maintainable full-stack architecture.",
    fullDescription:
      "DND Manager is a web platform for tabletop campaign operations, combining campaign state, character workflows, compendium data, notes, and assets in a structure built for long-term growth. The repository is especially useful as a portfolio case study because it pairs product delivery with architecture documentation, migration history, deployment support, and a clear data model.",
    focus: ["Domain modeling", "Workflow design", "Maintainability"],
    highlights: ["Campaign operations", "Compendium tooling", "Full-stack architecture"],
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    imageUrl: "/projects/dnd-manager/cover.png",
    imageAlt: "DND Manager product cover showing its tabletop management interface and structured navigation.",
    gallery: [
      {
        src: "/projects/dnd-manager/login.png",
        alt: "DND Manager login interface with a clean authentication and entry flow.",
        caption:
          "Authentication and entry flow designed with a clean product surface instead of a utility-first admin screen.",
      },
      {
        src: "/projects/dnd-manager/character-manager.png",
        alt: "DND Manager character management interface with structured character data and editing workflows.",
        caption:
          "Character management view focused on structured records, editing flows, and repeatable domain operations.",
      },
      {
        src: "/projects/dnd-manager/world-manager.png",
        alt: "DND Manager world management interface for organizing worldbuilding data and related content.",
        caption:
          "World management module showing how the product handles larger content structures without losing navigation clarity.",
      },
      {
        src: "/projects/dnd-manager/bestiary.png",
        alt: "DND Manager bestiary view with structured records and maintainable content organization.",
        caption:
          "Bestiary tooling that reinforces the system-heavy side of the project through searchable, structured content management.",
      },
    ],
    technicalApproach: [
      "App Router composition separates public, auth, and product-facing modules so the codebase can grow without collapsing route concerns together.",
      "Prisma and PostgreSQL are used to support long-lived entities such as campaigns, characters, compendium records, notes, assets, and history-aware workflows.",
      "Architecture, folder-structure, endpoints, and migration docs are maintained alongside the product so implementation decisions stay legible over time.",
      "The repository includes test coverage, deployment support, and automation scripts, reinforcing that the project is structured for real product iteration.",
    ],
    keyFeatures: [
      "Campaign-centered workflow with DM and player context built into the product surface.",
      "Character and compendium tooling shaped for repeated editing, filtering, and organization.",
      "Documentation-backed architecture with migration history and operational setup material.",
    ],
    githubUrl: "https://github.com/Marpuchy/dnd-manager",
    liveUrl: null,
    status: "In Development",
    featured: true,
    year: 2026,
  },
  {
    slug: "disperson",
    title: "Disperson",
    type: "Web App",
    role: "Full-Stack Developer",
    shortDescription:
      "Personality assessment platform built as a structured interactive product with persistent profiles, scoring logic, and character-based result mapping.",
    fullDescription:
      "Disperson is a final degree project built around a personality-test experience with more structure than a casual quiz application. The Symfony codebase combines authenticated profiles, persisted result data, question entities, and score-driven result mapping to frame the experience as a serious interactive product.",
    focus: ["Assessment flow", "Persistent user data", "Score mapping"],
    highlights: ["Quiz engine", "Profile state", "Result interpretation"],
    stack: ["Symfony", "PHP 8.1", "Doctrine ORM", "Twig", "EasyAdmin"],
    imageUrl: "/projects/disperson/cover.png",
    imageAlt: "Disperson project composition showing assessment flow, character matching, and profile modules.",
    gallery: [
      {
        src: "/projects/disperson/gallery-1.png",
        alt: "Disperson result flow image with OCEAN model, profile context, and questionnaire entry.",
        caption:
          "The product is built around a clear flow from questionnaire entry to stored profile state and interpretable trait output.",
      },
      {
        src: "/projects/disperson/gallery-2.png",
        alt: "Disperson character matching and interaction module composition.",
        caption:
          "Character-oriented result presentation gives the project personality without removing the more structured product framing.",
      },
    ],
    technicalApproach: [
      "Symfony route handling and Twig views organize the main user paths around onboarding, quiz progression, results, and profile access.",
      "Doctrine-backed entities connect questions and scoring logic to user state so results are not ephemeral and can be revisited from the profile layer.",
      "The interface uses project-specific visual assets for quiz, profile, and personality references instead of depending on generic starter content.",
      "The overall structure turns an entertainment-oriented concept into a more serious interactive platform with server-rendered organization and reusable domain entities.",
    ],
    keyFeatures: [
      "Guided questionnaire flow designed to feel intentional rather than disposable.",
      "Persisted user profiles and revisitable result state.",
      "Trait-based result interpretation combined with character-oriented matching output.",
    ],
    githubUrl: "https://github.com/Marpuchy/disperson",
    liveUrl: null,
    status: "Completed",
    featured: true,
    year: 2024,
  },
  {
    slug: "pactumx",
    title: "PactumX",
    type: "Game",
    role: "Gameplay Programmer & Systems Designer",
    shortDescription:
      "Unity action roguelike prototype centered on pact systems, combat architecture, and reusable event-driven gameplay modules.",
    fullDescription:
      "PactumX is a dark fantasy Unity project where combat, pact selection, entities, inventory, and runtime feedback are organized as separate gameplay systems instead of one-off scripts. The codebase uses ScriptableObject-driven definitions, pact pools, and event channels to keep combat and progression extensible as the prototype evolves.",
    focus: ["Pact systems", "Combat architecture", "Gameplay events"],
    highlights: ["Pact pools", "Entity systems", "Reusable combat logic"],
    stack: ["Unity 6", "C#", "URP", "ScriptableObjects", "Input System"],
    imageUrl: "/projects/pactumx/cover.png",
    imageAlt: "PactumX systems cover showing combat layer, dungeon visuals, and item-based feedback modules.",
    gallery: [
      {
        src: "/projects/pactumx/gallery-1.png",
        alt: "PactumX combat systems panel with attack system code and dungeon gameplay imagery.",
        caption:
          "Attack requests are routed through strategy objects and projectile factories, which keeps combat behavior modular.",
      },
      {
        src: "/projects/pactumx/gallery-2.png",
        alt: "PactumX event architecture panel with ScriptableObject game events and runtime feedback elements.",
        caption:
          "ScriptableObject event channels help decouple entities, combat, and feedback systems so the runtime remains extensible.",
      },
    ],
    technicalApproach: [
      "Combat requests are processed through interchangeable strategies and projectile factories instead of hardwiring one attack path per actor.",
      "ScriptableObject event channels and data definitions keep pact offers, entity state, and UI feedback loosely coupled.",
      "Gameplay concerns are separated into combat, inventory, interaction, camera, audio, and NPC systems, which supports iteration without collapsing everything into monolithic scripts.",
      "Pact pools, lines, and tagged effects are used to model progression rules and selection constraints at the data layer.",
    ],
    keyFeatures: [
      "Pact selection flows backed by reusable definitions, lines, and pools.",
      "Combat behaviors routed through modular strategies and projectile systems.",
      "Event-driven connections between gameplay state, NPC interactions, and UI feedback.",
    ],
    githubUrl: "https://github.com/Marpuchy/Pactum3D",
    liveUrl: null,
    status: "In Development",
    featured: true,
    year: 2025,
  },
  {
    slug: "cellular-automata",
    title: "Cellular Automata Simulator",
    type: "Tool",
    role: "Frontend Developer",
    shortDescription:
      "Browser-based cellular automata simulator for exploring rule-driven cave generation, grid updates, and emergent behavior.",
    fullDescription:
      "Cellular Automata Simulator is a web tool for visualizing how simple local rules produce larger spatial patterns over time. The implementation focuses on deterministic grid evolution, configurable initialization parameters, and inspection utilities that make each simulation step legible instead of treating the algorithm as a black box.",
    focus: ["Grid simulation", "Algorithm visualization", "Emergent behavior"],
    highlights: ["Canvas renderer", "Rule controls", "State inspection"],
    stack: ["JavaScript", "HTML5 Canvas", "Web", "Visualization"],
    imageUrl: "/projects/cellular-automata/cover.png",
    imageAlt: "Cellular Automata Simulator interface showing cave generation controls, main grid, and inspector panels.",
    gallery: [
      {
        src: "/projects/cellular-automata/gallery-1.png",
        alt: "Cellular Automata Simulator full interface with controls, main map, inspector, and evolution timeline.",
        caption:
          "The live simulation exposes parameters, grid playback, local cell inspection, and timeline state so the automata behavior stays understandable.",
      },
    ],
    technicalApproach: [
      "A canvas-backed renderer updates an 80 by 60 cell matrix and redraws each iteration as rule results propagate across the map.",
      "The simulator exposes random fill, target iterations, border behavior, and multiple rule sets so different cave-generation outcomes can be compared quickly.",
      "Timeline state and step controls keep the simulation inspectable, which is useful when validating rule changes instead of only watching autoplay.",
      "A cell inspector surfaces neighbor counts and next-state logic so the underlying automata rules remain understandable at the single-cell level.",
    ],
    keyFeatures: [
      "Interactive step, play, reset, and regeneration controls.",
      "Rule-set switching for comparing alternative evolution behavior.",
      "Per-cell inspection with neighborhood and next-state feedback.",
    ],
    githubUrl: "https://github.com/Marpuchy/Cellular-Automata-Cave-Generation-2D",
    liveUrl: "https://marpuchy.github.io/Cellular-Automata-Cave-Generation-2D/",
    status: "Completed",
    featured: true,
    year: 2026,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const projectSlugs = projects.map((project) => project.slug);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
