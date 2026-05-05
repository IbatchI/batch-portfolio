export const portfolioData = {
  name: "LUCAS",
  lastName: "HERNANDEZ",
  title: "FRONTEND DEVELOPER",
  version: "v4.0",

  about: {
    description: "Desarrollador Frontend. Especialista en React, Next.js y TypeScript. Mendoza (remoto).",
    tags: ["React", "Next.js", "TS", "+3 años"],
  },

  skills: {
    frontend: [
      { name: "React", level: 92 },
      { name: "Next.js", level: 88 },
      { name: "TypeScript", level: 85 },
      { name: "TailwindCSS", level: 88 },
      { name: "SCSS", level: 78 },
    ],
    toolsAndBackend: [
      { name: "Git", level: 90 },
      { name: "Node.js", level: 78 },
      { name: "Storybook", level: 82 },
      { name: "React Native", level: 72 },
      { name: "Django", level: 68 },
    ],
  },

  experience: [
    {
      company: "Midas Consultores",
      role: "Liderazgo, micro-frontends, clean code",
      xp: "+2400 XP",
      period: "May 2021 - Presente",
      status: "ACTIVA" as const,
      icon: "⚡",
      color: "yellow",
    },
    {
      company: "Caramel Point",
      role: "React Native · monorepo · mobile",
      xp: "+900 XP",
      period: "Dic 2024 - Apr 2025",
      status: "COMPLETA" as const,
      icon: "📦",
      color: "pink",
    },
    {
      company: "Agripay",
      role: "TypeScript · Cypress · CI/CD",
      xp: "+600 XP",
      period: "Sep 2021 - May 2022",
      status: "COMPLETA" as const,
      icon: "💰",
      color: "green",
    },
  ],

  education: [
    {
      title: "Ingeniería en Sistemas",
      institution: "Universidad Tecnológica Nacional",
      period: "2018 - 2023",
    },
    {
      title: "Certified React Developer",
      institution: "Meta",
      period: "2022",
    },
  ],

  contact: {
    email: "lucashernandez904@gmail.com",
    phone: "+54 9 2302 354906",
    linkedin: "linkedin/lucasmateohernandez",
  },

  easterEggs: {
    konamiCode: ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"],
  },
} as const;
