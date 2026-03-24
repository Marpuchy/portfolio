import type { Locale } from "@/lib/i18n";
import { resolveLocalizedText } from "@/lib/i18n";

type NavigationItemDefinition = {
  label: { en: string; es: string };
  href: string;
};

type ContactLinkDefinition = {
  label: { en: string; es: string };
  value: string;
  href: string;
};

type ExpertiseAreaDefinition = {
  title: { en: string; es: string };
  summary: { en: string; es: string };
  capabilities: { en: string[]; es: string[] };
};

const profileDefinition = {
  name: "Marc Ibáñez",
  role: {
    en: "Web Developer & Game Developer",
    es: "Desarrollador Web y de Videojuegos",
  },
  tagline: {
    en: "Building scalable web systems, clean architecture, and technically grounded interactive products.",
    es: "Construyendo sistemas web escalables, arquitectura limpia y productos interactivos con base técnica sólida.",
  },
  summary: {
    en: "I build scalable products, maintainable interfaces, and interaction systems with a strong engineering focus.",
    es: "Construyo productos escalables, interfaces mantenibles y sistemas de interacción con un fuerte foco en ingeniería.",
  },
  cvUrl: "https://marpuchy.github.io/curriculum/",
} as const;

const navigationDefinitions: NavigationItemDefinition[] = [
  { label: { en: "Projects", es: "Proyectos" }, href: "/#projects" },
  { label: { en: "Expertise", es: "Especialización" }, href: "/#expertise" },
  { label: { en: "Contact", es: "Contacto" }, href: "/#contact" },
];

const expertiseAreaDefinitions: ExpertiseAreaDefinition[] = [
  {
    title: { en: "Web Systems", es: "Sistemas Web" },
    summary: {
      en: "Data-driven products and structured interfaces built for scale.",
      es: "Productos guiados por datos e interfaces estructuradas pensadas para escalar.",
    },
    capabilities: {
      en: [
        "App Router interfaces with clean component composition.",
        "Domain-focused data models for products that need to grow.",
        "Professional UX shaped by hierarchy, readability, and maintainable code.",
      ],
      es: [
        "Interfaces con App Router y composición limpia de componentes.",
        "Modelos de dominio pensados para productos que necesitan crecer.",
        "UX profesional centrada en jerarquía, legibilidad y código mantenible.",
      ],
    },
  },
  {
    title: { en: "Interactive / Game Systems", es: "Sistemas Interactivos / Gameplay" },
    summary: {
      en: "Runtime behavior, mechanics, and interaction systems designed to stay coherent.",
      es: "Comportamiento en tiempo de ejecución, mecánicas y sistemas de interacción diseñados para mantenerse coherentes.",
    },
    capabilities: {
      en: [
        "Gameplay systems organized around reusable mechanics and event flows.",
        "Interaction design that balances responsiveness with technical structure.",
        "Tooling and implementation patterns that support iteration without chaos.",
      ],
      es: [
        "Sistemas de gameplay organizados alrededor de mecánicas reutilizables y flujos de eventos.",
        "Diseño de interacción que equilibra respuesta inmediata y estructura técnica.",
        "Patrones de tooling e implementación que permiten iterar sin caos.",
      ],
    },
  },
];

const contactLinkDefinitions: ContactLinkDefinition[] = [
  {
    label: { en: "Email", es: "Email" },
    value: "mibanezp0709@gmail.com",
    href: "mailto:mibanezp0709@gmail.com",
  },
  {
    label: { en: "GitHub", es: "GitHub" },
    value: "github.com/Marpuchy",
    href: "https://github.com/Marpuchy",
  },
  {
    label: { en: "LinkedIn", es: "LinkedIn" },
    value: "linkedin.com/in/marc-ibanez",
    href: "https://www.linkedin.com/in/marc-ib%C3%A0%C3%B1ez-0932502aa/",
  },
  {
    label: { en: "CV", es: "CV" },
    value: "marpuchy.github.io/curriculum",
    href: "https://marpuchy.github.io/curriculum/",
  },
];

const copy = {
  metadata: {
    siteName: {
      en: "Marc Ibáñez",
      es: "Marc Ibáñez",
    },
    siteTitle: {
      en: "Marc Ibáñez | Web Developer & Game Developer",
      es: "Marc Ibáñez | Desarrollador Web y de Videojuegos",
    },
    siteDescription: {
      en: "Marc Ibáñez builds scalable web systems, clean architectures, and technically grounded interactive products.",
      es: "Marc Ibáñez desarrolla sistemas web escalables, arquitecturas limpias y productos interactivos con base técnica sólida.",
    },
    socialImageAlt: {
      en: "Marc Ibáñez website preview.",
      es: "Vista previa de la web de Marc Ibáñez.",
    },
  },
  header: {
    interfaceLabel: {
      en: "Web systems / Interactive products",
      es: "Sistemas web / Productos interactivos",
    },
    primaryNavAria: {
      en: "Primary",
      es: "Principal",
    },
    primaryMobileNavAria: {
      en: "Primary Mobile",
      es: "Principal móvil",
    },
    localeSwitcherLabel: {
      en: "Language switcher",
      es: "Selector de idioma",
    },
  },
  footer: {
    tagline: {
      en: "Clean Systems. Interactive Products.",
      es: "Sistemas limpios. Productos interactivos.",
    },
  },
  hero: {
    viewProjects: {
      en: "View Projects",
      es: "Ver Proyectos",
    },
    viewCv: {
      en: "View CV",
      es: "Ver CV",
    },
    roleLabel: {
      en: "Role",
      es: "Rol",
    },
    stackLabel: {
      en: "Stack",
      es: "Stack",
    },
    focusLabel: {
      en: "Focus",
      es: "Foco",
    },
  },
  featuredGrid: {
    label: {
      en: "Projects",
      es: "Proyectos",
    },
    title: {
      en: "More selected work.",
      es: "Más trabajo seleccionado.",
    },
    roleLabel: {
      en: "Role",
      es: "Rol",
    },
    stackLabel: {
      en: "Stack",
      es: "Stack",
    },
    focusLabel: {
      en: "Focus",
      es: "Foco",
    },
    compactLabel: {
      en: "Also",
      es: "También",
    },
    compactTitle: {
      en: "Algorithm visualization and simulation.",
      es: "Visualización algorítmica y simulación.",
    },
    placeholderTitlePrefix: {
      en: "Future Project",
      es: "Proyecto futuro",
    },
    placeholderStatus: {
      en: "In Planning",
      es: "En planificación",
    },
    placeholderDescription: {
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      es: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    placeholderStack: {
      en: "TBD",
      es: "Por definir",
    },
  },
  expertise: {
    label: {
      en: "Expertise",
      es: "Especialización",
    },
    title: {
      en: "Web architecture, interaction systems, and technical delivery.",
      es: "Arquitectura web, sistemas de interacción y ejecución técnica.",
    },
  },
  contact: {
    label: {
      en: "Contact",
      es: "Contacto",
    },
    title: {
      en: "Direct access to contact and code.",
      es: "Acceso directo a contacto y código.",
    },
    open: {
      en: "Open",
      es: "Abrir",
    },
  },
  projectActions: {
    caseStudy: {
      en: "Case Study",
      es: "Caso de estudio",
    },
    github: {
      en: "GitHub",
      es: "GitHub",
    },
    liveDemo: {
      en: "Live / Demo",
      es: "Live / Demo",
    },
  },
  projectPage: {
    notFoundTitle: {
      en: "Project Not Found | Marc Ibáñez",
      es: "Proyecto no encontrado | Marc Ibáñez",
    },
    backHome: {
      en: "Back to home",
      es: "Volver al inicio",
    },
    viewProjects: {
      en: "View projects",
      es: "Ver proyectos",
    },
    caseStudy: {
      en: "Case Study",
      es: "Caso de estudio",
    },
    overviewLabel: {
      en: "Overview",
      es: "Resumen",
    },
    overviewTitle: {
      en: "Concise product context",
      es: "Contexto conciso del producto",
    },
    quickFactsLabel: {
      en: "Quick Facts",
      es: "Datos rápidos",
    },
    quickFactsTitle: {
      en: "Role, status, focus, and stack",
      es: "Rol, estado, foco y stack",
    },
    galleryLabel: {
      en: "Gallery",
      es: "Galería",
    },
    galleryTitle: {
      en: "Real project media and supporting visuals",
      es: "Media real del proyecto y visuales de apoyo",
    },
    technicalApproachLabel: {
      en: "Technical Approach",
      es: "Enfoque técnico",
    },
    technicalApproachTitle: {
      en: "How the implementation is structured",
      es: "Cómo está estructurada la implementación",
    },
    keyFeaturesLabel: {
      en: "Key Features",
      es: "Funciones clave",
    },
    keyFeaturesTitle: {
      en: "What the project needs to communicate quickly",
      es: "Lo que el proyecto debe comunicar rápidamente",
    },
    externalLinksLabel: {
      en: "External Links",
      es: "Enlaces externos",
    },
    externalLinksTitle: {
      en: "Direct access",
      es: "Acceso directo",
    },
    externalLinksDescription: {
      en: "Repository access stays visible so recruiters and technical reviewers can jump from the case study to the implementation immediately.",
      es: "El acceso al repositorio se mantiene visible para que recruiters y perfiles técnicos puedan pasar del caso de estudio a la implementación inmediatamente.",
    },
    otherFeaturedLabel: {
      en: "Other Featured Projects",
      es: "Otros proyectos destacados",
    },
    otherFeaturedTitle: {
      en: "More selected projects",
      es: "Más proyectos seleccionados",
    },
    facts: {
      role: { en: "Role", es: "Rol" },
      type: { en: "Type", es: "Tipo" },
      status: { en: "Status", es: "Estado" },
      focus: { en: "Focus", es: "Foco" },
      year: { en: "Year", es: "Año" },
      route: { en: "Route", es: "Ruta" },
    },
  },
} as const;

export function getSiteContent(locale: Locale) {
  return {
    locale,
    profile: {
      name: profileDefinition.name,
      role: resolveLocalizedText(profileDefinition.role, locale),
      tagline: resolveLocalizedText(profileDefinition.tagline, locale),
      summary: resolveLocalizedText(profileDefinition.summary, locale),
      cvUrl: profileDefinition.cvUrl,
    },
    navigationItems: navigationDefinitions.map((item) => ({
      label: resolveLocalizedText(item.label, locale),
      href: item.href,
    })),
    dualProfileAreas: expertiseAreaDefinitions.map((area) => ({
      title: resolveLocalizedText(area.title, locale),
      summary: resolveLocalizedText(area.summary, locale),
      capabilities: resolveLocalizedText(area.capabilities, locale),
    })),
    contactLinks: contactLinkDefinitions.map((link) => ({
      label: resolveLocalizedText(link.label, locale),
      value: link.value,
      href: link.href,
    })),
    copy: {
      metadata: {
        siteName: resolveLocalizedText(copy.metadata.siteName, locale),
        siteTitle: resolveLocalizedText(copy.metadata.siteTitle, locale),
        siteDescription: resolveLocalizedText(copy.metadata.siteDescription, locale),
        socialImageAlt: resolveLocalizedText(copy.metadata.socialImageAlt, locale),
      },
      header: {
        interfaceLabel: resolveLocalizedText(copy.header.interfaceLabel, locale),
        primaryNavAria: resolveLocalizedText(copy.header.primaryNavAria, locale),
        primaryMobileNavAria: resolveLocalizedText(copy.header.primaryMobileNavAria, locale),
        localeSwitcherLabel: resolveLocalizedText(copy.header.localeSwitcherLabel, locale),
      },
      footer: {
        tagline: resolveLocalizedText(copy.footer.tagline, locale),
      },
      hero: {
        viewProjects: resolveLocalizedText(copy.hero.viewProjects, locale),
        viewCv: resolveLocalizedText(copy.hero.viewCv, locale),
        roleLabel: resolveLocalizedText(copy.hero.roleLabel, locale),
        stackLabel: resolveLocalizedText(copy.hero.stackLabel, locale),
        focusLabel: resolveLocalizedText(copy.hero.focusLabel, locale),
      },
      featuredGrid: {
        label: resolveLocalizedText(copy.featuredGrid.label, locale),
        title: resolveLocalizedText(copy.featuredGrid.title, locale),
        roleLabel: resolveLocalizedText(copy.featuredGrid.roleLabel, locale),
        stackLabel: resolveLocalizedText(copy.featuredGrid.stackLabel, locale),
        focusLabel: resolveLocalizedText(copy.featuredGrid.focusLabel, locale),
        compactLabel: resolveLocalizedText(copy.featuredGrid.compactLabel, locale),
        compactTitle: resolveLocalizedText(copy.featuredGrid.compactTitle, locale),
        placeholderTitlePrefix: resolveLocalizedText(copy.featuredGrid.placeholderTitlePrefix, locale),
        placeholderStatus: resolveLocalizedText(copy.featuredGrid.placeholderStatus, locale),
        placeholderDescription: resolveLocalizedText(copy.featuredGrid.placeholderDescription, locale),
        placeholderStack: resolveLocalizedText(copy.featuredGrid.placeholderStack, locale),
      },
      expertise: {
        label: resolveLocalizedText(copy.expertise.label, locale),
        title: resolveLocalizedText(copy.expertise.title, locale),
      },
      contact: {
        label: resolveLocalizedText(copy.contact.label, locale),
        title: resolveLocalizedText(copy.contact.title, locale),
        open: resolveLocalizedText(copy.contact.open, locale),
      },
      projectActions: {
        caseStudy: resolveLocalizedText(copy.projectActions.caseStudy, locale),
        github: resolveLocalizedText(copy.projectActions.github, locale),
        liveDemo: resolveLocalizedText(copy.projectActions.liveDemo, locale),
      },
      projectPage: {
        notFoundTitle: resolveLocalizedText(copy.projectPage.notFoundTitle, locale),
        backHome: resolveLocalizedText(copy.projectPage.backHome, locale),
        viewProjects: resolveLocalizedText(copy.projectPage.viewProjects, locale),
        caseStudy: resolveLocalizedText(copy.projectPage.caseStudy, locale),
        overviewLabel: resolveLocalizedText(copy.projectPage.overviewLabel, locale),
        overviewTitle: resolveLocalizedText(copy.projectPage.overviewTitle, locale),
        quickFactsLabel: resolveLocalizedText(copy.projectPage.quickFactsLabel, locale),
        quickFactsTitle: resolveLocalizedText(copy.projectPage.quickFactsTitle, locale),
        galleryLabel: resolveLocalizedText(copy.projectPage.galleryLabel, locale),
        galleryTitle: resolveLocalizedText(copy.projectPage.galleryTitle, locale),
        technicalApproachLabel: resolveLocalizedText(copy.projectPage.technicalApproachLabel, locale),
        technicalApproachTitle: resolveLocalizedText(copy.projectPage.technicalApproachTitle, locale),
        keyFeaturesLabel: resolveLocalizedText(copy.projectPage.keyFeaturesLabel, locale),
        keyFeaturesTitle: resolveLocalizedText(copy.projectPage.keyFeaturesTitle, locale),
        externalLinksLabel: resolveLocalizedText(copy.projectPage.externalLinksLabel, locale),
        externalLinksTitle: resolveLocalizedText(copy.projectPage.externalLinksTitle, locale),
        externalLinksDescription: resolveLocalizedText(copy.projectPage.externalLinksDescription, locale),
        otherFeaturedLabel: resolveLocalizedText(copy.projectPage.otherFeaturedLabel, locale),
        otherFeaturedTitle: resolveLocalizedText(copy.projectPage.otherFeaturedTitle, locale),
        facts: {
          role: resolveLocalizedText(copy.projectPage.facts.role, locale),
          type: resolveLocalizedText(copy.projectPage.facts.type, locale),
          status: resolveLocalizedText(copy.projectPage.facts.status, locale),
          focus: resolveLocalizedText(copy.projectPage.facts.focus, locale),
          year: resolveLocalizedText(copy.projectPage.facts.year, locale),
          route: resolveLocalizedText(copy.projectPage.facts.route, locale),
        },
      },
    },
  };
}

export type SiteContent = ReturnType<typeof getSiteContent>;
