import { statSync } from "node:fs";
import path from "node:path";

import type { Locale, LocalizedText } from "@/lib/i18n";
import { resolveLocalizedText } from "@/lib/i18n";

type ProjectGalleryImageDefinition = {
  src: string;
  alt: LocalizedText<string>;
  caption: LocalizedText<string>;
};

type ProjectDefinition = {
  slug: string;
  title: string;
  type: LocalizedText<string>;
  role: LocalizedText<string>;
  shortDescription: LocalizedText<string>;
  fullDescription: LocalizedText<string>;
  focus: LocalizedText<string[]>;
  highlights: LocalizedText<string[]>;
  stack: string[];
  imageUrl: string;
  imageAlt: LocalizedText<string>;
  gallery: ProjectGalleryImageDefinition[];
  technicalApproach: LocalizedText<string[]>;
  keyFeatures: LocalizedText<string[]>;
  githubUrl: string;
  liveUrl: string | null;
  status: LocalizedText<string>;
  featured: boolean;
  year: number;
};

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

const projectDefinitions: ProjectDefinition[] = [
  {
    slug: "dnd-manager",
    title: "DND Manager",
    type: { en: "System", es: "Sistema" },
    role: { en: "Full-Stack Developer", es: "Desarrollador Full-Stack" },
    shortDescription: {
      en: "Tabletop campaign platform focused on domain modeling, operational workflows, and maintainable full-stack architecture.",
      es: "Plataforma de gestión de campañas de rol centrada en modelado de dominio, flujos operativos y arquitectura full-stack mantenible.",
    },
    fullDescription: {
      en: "DND Manager is a web platform for tabletop campaign operations, combining campaign state, character workflows, compendium data, notes, and assets in a structure built for long-term growth. The repository is especially useful as a case study because it pairs product delivery with architecture documentation, migration history, deployment support, and a clear data model.",
      es: "DND Manager es una plataforma web para la gestión de campañas de rol de mesa que combina estado de campaña, flujos de personajes, compendios, notas y recursos dentro de una estructura pensada para crecer a largo plazo. El repositorio resulta especialmente útil como caso de estudio porque combina entrega de producto con documentación de arquitectura, historial de migraciones, soporte de despliegue y un modelo de datos claro.",
    },
    focus: {
      en: ["Domain modeling", "Workflow design", "Maintainability"],
      es: ["Modelado de dominio", "Diseño de flujos", "Mantenibilidad"],
    },
    highlights: {
      en: ["Campaign operations", "Compendium tooling", "Full-stack architecture"],
      es: ["Operaciones de campaña", "Herramientas de compendio", "Arquitectura full-stack"],
    },
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    imageUrl: "/projects/dnd-manager/cover.png",
    imageAlt: {
      en: "DND Manager product cover showing its tabletop management interface and structured navigation.",
      es: "Portada de DND Manager mostrando su interfaz de gestión de rol y su navegación estructurada.",
    },
    gallery: [
      {
        src: "/projects/dnd-manager/login.png",
        alt: {
          en: "DND Manager login interface with a clean authentication and entry flow.",
          es: "Interfaz de acceso de DND Manager con un flujo de autenticación y entrada limpio.",
        },
        caption: {
          en: "Authentication and entry flow designed with a clean product surface instead of a utility-first admin screen.",
          es: "Flujo de autenticación y acceso diseñado como una superficie de producto clara en lugar de un panel utilitario.",
        },
      },
      {
        src: "/projects/dnd-manager/character-manager.png",
        alt: {
          en: "DND Manager character management interface with structured character data and editing workflows.",
          es: "Interfaz de gestión de personajes de DND Manager con datos estructurados y flujos de edición.",
        },
        caption: {
          en: "Character management view focused on structured records, editing flows, and repeatable domain operations.",
          es: "Vista de gestión de personajes centrada en registros estructurados, flujos de edición y operaciones de dominio repetibles.",
        },
      },
      {
        src: "/projects/dnd-manager/world-manager.png",
        alt: {
          en: "DND Manager world management interface for organizing worldbuilding data and related content.",
          es: "Interfaz de gestión de mundo de DND Manager para organizar worldbuilding y contenido relacionado.",
        },
        caption: {
          en: "World management view showing how the product handles larger content structures without losing navigation clarity.",
          es: "Vista de gestión de mundo que muestra cómo el producto maneja estructuras de contenido amplias sin perder claridad de navegación.",
        },
      },
      {
        src: "/projects/dnd-manager/bestiary.png",
        alt: {
          en: "DND Manager bestiary view with structured records and maintainable content organization.",
          es: "Vista de bestiario de DND Manager con registros estructurados y organización de contenido mantenible.",
        },
        caption: {
          en: "Bestiary tooling that reinforces the system-heavy side of the project through searchable, structured content management.",
          es: "Herramienta de bestiario que refuerza el lado más sistémico del proyecto mediante gestión de contenido estructurada y consultable.",
        },
      },
    ],
    technicalApproach: {
      en: [
        "App Router composition separates public, auth, and product-facing areas so the codebase can grow without collapsing route concerns together.",
        "Prisma and PostgreSQL are used to support long-lived entities such as campaigns, characters, compendium records, notes, assets, and history-aware workflows.",
        "Architecture, folder-structure, endpoints, and migration docs are maintained alongside the product so implementation decisions stay legible over time.",
        "The repository includes test coverage, deployment support, and automation scripts, reinforcing that the project is structured for real product iteration.",
      ],
      es: [
        "La composición con App Router separa áreas públicas, de autenticación y de producto para que el código pueda crecer sin mezclar preocupaciones de routing.",
        "Prisma y PostgreSQL sostienen entidades de larga vida como campañas, personajes, compendios, notas, recursos y flujos con historial.",
        "La arquitectura, la estructura de carpetas, los endpoints y la documentación de migraciones se mantienen junto al producto para que las decisiones sigan siendo legibles con el tiempo.",
        "El repositorio incluye tests, soporte de despliegue y scripts de automatización, reforzando que el proyecto está preparado para iteración real de producto.",
      ],
    },
    keyFeatures: {
      en: [
        "Campaign-centered workflow with DM and player context built into the product surface.",
        "Character and compendium tooling shaped for repeated editing, filtering, and organization.",
        "Documentation-backed architecture with migration history and operational setup material.",
      ],
      es: [
        "Flujo centrado en campañas con contexto de director y jugador integrado en la superficie del producto.",
        "Herramientas de personajes y compendio pensadas para edición repetida, filtrado y organización.",
        "Arquitectura apoyada por documentación, historial de migraciones y material operativo de configuración.",
      ],
    },
    githubUrl: "https://github.com/Marpuchy/dnd-manager",
    liveUrl: null,
    status: { en: "In Development", es: "En desarrollo" },
    featured: true,
    year: 2026,
  },
  {
    slug: "disperson",
    title: "Disperson",
    type: { en: "Web App", es: "Aplicación web" },
    role: { en: "Full-Stack Developer", es: "Desarrollador Full-Stack" },
    shortDescription: {
      en: "Personality assessment platform built as a structured interactive product with persistent profiles, scoring logic, and character-based result mapping.",
      es: "Plataforma de evaluación de personalidad construida como producto interactivo estructurado con perfiles persistentes, lógica de puntuación y mapeo de resultados por personajes.",
    },
    fullDescription: {
      en: "Disperson is a final degree project built around a personality-test experience with more structure than a casual quiz application. The Symfony codebase combines authenticated profiles, persisted result data, question entities, and score-driven result mapping to frame the experience as a serious interactive product.",
      es: "Disperson es un proyecto de fin de grado construido alrededor de una experiencia de test de personalidad con más estructura que una aplicación tipo quiz casual. El código en Symfony combina perfiles autenticados, persistencia de resultados, entidades de preguntas y un mapeo de resultados guiado por puntuaciones para presentar la experiencia como un producto interactivo serio.",
    },
    focus: {
      en: ["Assessment flow", "Persistent user data", "Score mapping"],
      es: ["Flujo de evaluación", "Persistencia de usuario", "Mapeo de puntuaciones"],
    },
    highlights: {
      en: ["Quiz engine", "Profile state", "Result interpretation"],
      es: ["Motor de cuestionario", "Estado de perfil", "Interpretación de resultados"],
    },
    stack: ["Symfony", "PHP 8.1", "Doctrine ORM", "Twig", "EasyAdmin"],
    imageUrl: "/projects/disperson/cover.png",
    imageAlt: {
      en: "Disperson project composition showing assessment flow, character matching, and profile areas.",
      es: "Composición visual de Disperson mostrando el flujo de evaluación, el matching de personajes y las áreas de perfil.",
    },
    gallery: [
      {
        src: "/projects/disperson/gallery-1.png",
        alt: {
          en: "Disperson result flow image with OCEAN model, profile context, and questionnaire entry.",
          es: "Visual del flujo de resultados de Disperson con modelo OCEAN, contexto de perfil y entrada al cuestionario.",
        },
        caption: {
          en: "The product is built around a clear flow from questionnaire entry to stored profile state and interpretable trait output.",
          es: "El producto se articula alrededor de un flujo claro desde la entrada al cuestionario hasta el estado persistido del perfil y la salida interpretable de rasgos.",
        },
      },
      {
        src: "/projects/disperson/gallery-2.png",
        alt: {
          en: "Disperson character matching and interaction composition.",
          es: "Composición del matching de personajes y la interacción en Disperson.",
        },
        caption: {
          en: "Character-oriented result presentation gives the project personality without removing the more structured product framing.",
          es: "La presentación de resultados orientada a personajes aporta personalidad al proyecto sin perder un marco de producto más estructurado.",
        },
      },
    ],
    technicalApproach: {
      en: [
        "Symfony route handling and Twig views organize the main user paths around onboarding, quiz progression, results, and profile access.",
        "Doctrine-backed entities connect questions and scoring logic to user state so results are not ephemeral and can be revisited from the profile layer.",
        "The interface uses project-specific visual assets for quiz, profile, and personality references instead of depending on generic starter content.",
        "The overall structure turns an entertainment-oriented concept into a more serious interactive platform with server-rendered organization and reusable domain entities.",
      ],
      es: [
        "El manejo de rutas en Symfony y las vistas Twig organizan los recorridos principales alrededor del onboarding, la progresión del test, los resultados y el acceso al perfil.",
        "Las entidades respaldadas por Doctrine conectan preguntas y lógica de puntuación con el estado del usuario para que los resultados no sean efímeros y puedan revisitarse desde el perfil.",
        "La interfaz utiliza recursos visuales específicos del proyecto para cuestionario, perfil y referencias de personalidad en lugar de depender de contenido genérico de arranque.",
        "La estructura general convierte un concepto orientado al entretenimiento en una plataforma interactiva más seria, con organización server-rendered y entidades de dominio reutilizables.",
      ],
    },
    keyFeatures: {
      en: [
        "Guided questionnaire flow designed to feel intentional rather than disposable.",
        "Persisted user profiles and revisitable result state.",
        "Trait-based result interpretation combined with character-oriented matching output.",
      ],
      es: [
        "Flujo de cuestionario guiado diseñado para sentirse intencional y no desechable.",
        "Perfiles persistentes de usuario y estado de resultados revisitable.",
        "Interpretación de resultados basada en rasgos combinada con un resultado de matching orientado a personajes.",
      ],
    },
    githubUrl: "https://github.com/Marpuchy/disperson",
    liveUrl: null,
    status: { en: "Completed", es: "Completado" },
    featured: true,
    year: 2024,
  },
  {
    slug: "pactumx",
    title: "PactumX",
    type: { en: "Game", es: "Juego" },
    role: {
      en: "Gameplay Programmer & Systems Designer",
      es: "Programador de Gameplay y Diseñador de Sistemas",
    },
    shortDescription: {
      en: "Unity action roguelike prototype centered on pact systems, combat architecture, and reusable event-driven gameplay systems.",
      es: "Prototipo de action roguelike en Unity centrado en sistemas de pactos, arquitectura de combate y sistemas de gameplay reutilizables dirigidos por eventos.",
    },
    fullDescription: {
      en: "PactumX is a dark fantasy Unity project where combat, pact selection, entities, inventory, and runtime feedback are organized as separate gameplay systems instead of one-off scripts. The codebase uses ScriptableObject-driven definitions, pact pools, and event channels to keep combat and progression extensible as the prototype evolves.",
      es: "PactumX es un proyecto de fantasía oscura en Unity donde combate, selección de pactos, entidades, inventario y feedback en tiempo de ejecución están organizados como sistemas de gameplay separados en lugar de scripts aislados. El código utiliza definiciones guiadas por ScriptableObjects, pools de pactos y canales de eventos para mantener combate y progresión extensibles a medida que evoluciona el prototipo.",
    },
    focus: {
      en: ["Pact systems", "Combat architecture", "Gameplay events"],
      es: ["Sistemas de pactos", "Arquitectura de combate", "Eventos de gameplay"],
    },
    highlights: {
      en: ["Pact pools", "Entity systems", "Reusable combat logic"],
      es: ["Pools de pactos", "Sistemas de entidades", "Lógica de combate reutilizable"],
    },
    stack: ["Unity 6", "C#", "URP", "ScriptableObjects", "Input System"],
    imageUrl: "/projects/pactumx/cover.png",
    imageAlt: {
      en: "PactumX systems cover showing combat layer, dungeon visuals, and item-based feedback systems.",
      es: "Portada de sistemas de PactumX mostrando la capa de combate, visuales del dungeon y sistemas de feedback basados en items.",
    },
    gallery: [
      {
        src: "/projects/pactumx/gallery-1.png",
        alt: {
          en: "PactumX combat systems panel with attack system code and dungeon gameplay imagery.",
          es: "Panel de sistemas de combate de PactumX con código del sistema de ataque e imágenes del dungeon.",
        },
        caption: {
          en: "Attack requests are routed through strategy objects and projectile factories, which keeps combat behavior modular.",
          es: "Las peticiones de ataque se canalizan mediante objetos estrategia y fábricas de proyectiles, lo que mantiene modular el comportamiento de combate.",
        },
      },
      {
        src: "/projects/pactumx/gallery-2.png",
        alt: {
          en: "PactumX event architecture panel with ScriptableObject game events and runtime feedback elements.",
          es: "Panel de arquitectura de eventos de PactumX con eventos ScriptableObject y elementos de feedback en runtime.",
        },
        caption: {
          en: "ScriptableObject event channels help decouple entities, combat, and feedback systems so the runtime remains extensible.",
          es: "Los canales de eventos con ScriptableObjects ayudan a desacoplar entidades, combate y sistemas de feedback para que el runtime siga siendo extensible.",
        },
      },
    ],
    technicalApproach: {
      en: [
        "Combat requests are processed through interchangeable strategies and projectile factories instead of hardwiring one attack path per actor.",
        "ScriptableObject event channels and data definitions keep pact offers, entity state, and UI feedback loosely coupled.",
        "Gameplay concerns are separated into combat, inventory, interaction, camera, audio, and NPC systems, which supports iteration without collapsing everything into monolithic scripts.",
        "Pact pools, lines, and tagged effects are used to model progression rules and selection constraints at the data layer.",
      ],
      es: [
        "Las peticiones de combate se procesan mediante estrategias intercambiables y fábricas de proyectiles en lugar de fijar un único flujo de ataque por actor.",
        "Los canales de eventos con ScriptableObjects y las definiciones de datos mantienen ofertas de pactos, estado de entidades y feedback de UI débilmente acoplados.",
        "Las preocupaciones de gameplay se separan en sistemas de combate, inventario, interacción, cámara, audio y NPC, lo que favorece iteración sin colapsar todo en scripts monolíticos.",
        "Los pools, líneas y efectos etiquetados de pactos se utilizan para modelar reglas de progresión y restricciones de selección a nivel de datos.",
      ],
    },
    keyFeatures: {
      en: [
        "Pact selection flows backed by reusable definitions, lines, and pools.",
        "Combat behaviors routed through modular strategies and projectile systems.",
        "Event-driven connections between gameplay state, NPC interactions, and UI feedback.",
      ],
      es: [
        "Flujos de selección de pactos respaldados por definiciones, líneas y pools reutilizables.",
        "Comportamientos de combate canalizados mediante estrategias modulares y sistemas de proyectiles.",
        "Conexiones dirigidas por eventos entre estado de gameplay, interacciones con NPC y feedback de UI.",
      ],
    },
    githubUrl: "https://github.com/Marpuchy/Pactum3D",
    liveUrl: null,
    status: { en: "In Development", es: "En desarrollo" },
    featured: true,
    year: 2025,
  },
  {
    slug: "cellular-automata",
    title: "Cellular Automata Simulator",
    type: { en: "Tool", es: "Herramienta" },
    role: { en: "Frontend Developer", es: "Desarrollador Frontend" },
    shortDescription: {
      en: "Browser-based cellular automata simulator for exploring rule-driven cave generation, grid updates, and emergent behavior.",
      es: "Simulador de autómatas celulares en navegador para explorar generación de cuevas por reglas, actualización de rejillas y comportamiento emergente.",
    },
    fullDescription: {
      en: "Cellular Automata Simulator is a web tool for visualizing how simple local rules produce larger spatial patterns over time. The implementation focuses on deterministic grid evolution, configurable initialization parameters, and inspection utilities that make each simulation step legible instead of treating the algorithm as a black box.",
      es: "Cellular Automata Simulator es una herramienta web para visualizar cómo reglas locales simples producen patrones espaciales mayores a lo largo del tiempo. La implementación se centra en evolución determinista de la rejilla, parámetros configurables de inicialización y utilidades de inspección que hacen legible cada paso de la simulación en lugar de tratar el algoritmo como una caja negra.",
    },
    focus: {
      en: ["Grid simulation", "Algorithm visualization", "Emergent behavior"],
      es: ["Simulación de rejilla", "Visualización algorítmica", "Comportamiento emergente"],
    },
    highlights: {
      en: ["Canvas renderer", "Rule controls", "State inspection"],
      es: ["Renderizado en canvas", "Control de reglas", "Inspección de estado"],
    },
    stack: ["JavaScript", "HTML5 Canvas", "Web", "Visualization"],
    imageUrl: "/projects/cellular-automata/cover.png",
    imageAlt: {
      en: "Cellular Automata Simulator interface showing cave generation controls, main grid, and inspector panels.",
      es: "Interfaz de Cellular Automata Simulator mostrando controles de generación de cuevas, rejilla principal y paneles de inspección.",
    },
    gallery: [
      {
        src: "/projects/cellular-automata/gallery-1.png",
        alt: {
          en: "Cellular Automata Simulator full interface with controls, main map, inspector, and evolution timeline.",
          es: "Interfaz completa de Cellular Automata Simulator con controles, mapa principal, inspector y línea temporal de evolución.",
        },
        caption: {
          en: "The live simulation exposes parameters, grid playback, local cell inspection, and timeline state so the automata behavior stays understandable.",
          es: "La simulación expone parámetros, reproducción de la rejilla, inspección local de celdas y estado temporal para que el comportamiento del autómata siga siendo comprensible.",
        },
      },
    ],
    technicalApproach: {
      en: [
        "A canvas-backed renderer updates an 80 by 60 cell matrix and redraws each iteration as rule results propagate across the map.",
        "The simulator exposes random fill, target iterations, border behavior, and multiple rule sets so different cave-generation outcomes can be compared quickly.",
        "Timeline state and step controls keep the simulation inspectable, which is useful when validating rule changes instead of only watching autoplay.",
        "A cell inspector surfaces neighbor counts and next-state logic so the underlying automata rules remain understandable at the single-cell level.",
      ],
      es: [
        "Un renderer sobre canvas actualiza una matriz de 80 por 60 celdas y redibuja cada iteración a medida que los resultados de las reglas se propagan por el mapa.",
        "El simulador expone porcentaje de ruido inicial, número objetivo de iteraciones, comportamiento de bordes y múltiples reglas para comparar rápidamente distintos resultados de generación de cuevas.",
        "La línea temporal y los controles paso a paso mantienen la simulación inspeccionable, algo útil al validar cambios de reglas en lugar de limitarse al autoplay.",
        "Un inspector de celdas muestra conteos de vecinos y lógica de siguiente estado para que las reglas del autómata sigan siendo comprensibles a nivel de celda individual.",
      ],
    },
    keyFeatures: {
      en: [
        "Interactive step, play, reset, and regeneration controls.",
        "Rule-set switching for comparing alternative evolution behavior.",
        "Per-cell inspection with neighborhood and next-state feedback.",
      ],
      es: [
        "Controles interactivos para avanzar, reproducir, reiniciar y regenerar.",
        "Cambio de reglas para comparar comportamientos alternativos de evolución.",
        "Inspección por celda con vecindario y feedback del siguiente estado.",
      ],
    },
    githubUrl: "https://github.com/Marpuchy/Cellular-Automata-Cave-Generation-2D",
    liveUrl: "https://marpuchy.github.io/Cellular-Automata-Cave-Generation-2D/",
    status: { en: "Completed", es: "Completado" },
    featured: true,
    year: 2026,
  },
];

function withAssetVersion(assetPath: string) {
  const normalizedPath = assetPath.startsWith("/") ? assetPath.slice(1) : assetPath;
  const filePath = path.join(process.cwd(), "public", normalizedPath);

  try {
    const { mtimeMs } = statSync(filePath);
    return `${assetPath}?v=${Math.floor(mtimeMs)}`;
  } catch {
    return assetPath;
  }
}

function resolveProject(project: ProjectDefinition, locale: Locale): Project {
  return {
    slug: project.slug,
    title: project.title,
    type: resolveLocalizedText(project.type, locale),
    role: resolveLocalizedText(project.role, locale),
    shortDescription: resolveLocalizedText(project.shortDescription, locale),
    fullDescription: resolveLocalizedText(project.fullDescription, locale),
    focus: resolveLocalizedText(project.focus, locale),
    highlights: resolveLocalizedText(project.highlights, locale),
    stack: project.stack,
    imageUrl: withAssetVersion(project.imageUrl),
    imageAlt: resolveLocalizedText(project.imageAlt, locale),
    gallery: project.gallery.map((item) => ({
      src: withAssetVersion(item.src),
      alt: resolveLocalizedText(item.alt, locale),
      caption: resolveLocalizedText(item.caption, locale),
    })),
    technicalApproach: resolveLocalizedText(project.technicalApproach, locale),
    keyFeatures: resolveLocalizedText(project.keyFeatures, locale),
    githubUrl: project.githubUrl,
    liveUrl: project.liveUrl,
    status: resolveLocalizedText(project.status, locale),
    featured: project.featured,
    year: project.year,
  };
}

export const projectSlugs = projectDefinitions.map((project) => project.slug);

export function getProjects(locale: Locale) {
  return projectDefinitions.map((project) => resolveProject(project, locale));
}

export function getFeaturedProjects(locale: Locale) {
  return getProjects(locale).filter((project) => project.featured);
}

export function getProjectBySlug(slug: string, locale: Locale) {
  const project = projectDefinitions.find((entry) => entry.slug === slug);

  if (!project) {
    return undefined;
  }

  return resolveProject(project, locale);
}
