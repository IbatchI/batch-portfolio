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

  skillsCatalog: [
    { id: "react", name: "React", icon: "/skills/react.svg" },
    { id: "nextjs", name: "Next.js", icon: "/skills/nextjs.svg", invert: true },
    { id: "typescript", name: "TypeScript", icon: "/skills/typescript.svg" },
    { id: "javascript", name: "JavaScript", icon: "/skills/javascript.svg" },
    { id: "tailwind", name: "Tailwind CSS", icon: "/skills/tailwind.svg" },
    { id: "git", name: "Git", icon: "/skills/git.svg" },
    { id: "github", name: "GitHub", icon: "/skills/github.svg" },
    { id: "gitlab", name: "GitLab", icon: "/skills/gitlab.svg" },
    { id: "reactNative", name: "React Native", icon: "/skills/reactnative.svg" },
    { id: "storybook", name: "Storybook", icon: "/skills/storybook.svg" },
    { id: "testingLibrary", name: "React Testing Library", icon: "/skills/testing-library.svg" },
    { id: "vitest", name: "Vitest", icon: "/skills/vitest.svg" },
    { id: "reactQuery", name: "React Query", icon: "/skills/react-query.svg" },
    { id: "zustand", name: "Zustand", icon: "/skills/zustand.png" },
    { id: "zod", name: "Zod", icon: "/skills/zod.svg" },
    { id: "reactHookForm", name: "React Hook Form", icon: "/skills/react-hook-form.svg" },
  ] as const,

  experience: [
    {
      company: "Mindata",
      xp: "+400 XP",
      period: "May 2026 - Presente",
      status: "ACTIVA" as const,
      icon: "🌐",
      logo: "/experience/mindata-logo.svg",
      color: "blue" as const,
      projects: [
        {
          name: "RIU Hotels Website",
          url: "https://www.riu.com/es",
          achievements: ["i18n", "performance", "codeStandards", "featureArchitecture"],
          tech: ["Angular", "TypeScript", "Jest"],
        },
      ],
    },
    {
      company: "Midas Consultores",
      xp: "+2400 XP",
      period: "May 2021 - Abr 2026",
      status: "COMPLETA" as const,
      icon: "⚡",
      color: "yellow" as const,
      projects: [
        {
          name: "YClick",
          url: "https://yclick-home.ypf.com/#/",
          achievements: ["teamLeadership", "clientCommunication", "sprintPlanning", "reengineering"],
          tech: ["React", "TypeScript", "Micro-frontends", "Screaming Architecture", "Scrum"],
        },
        {
          name: "CGI Capital Landing",
          url: "https://www.cgi-capital.com/en",
          achievements: ["teamLeadership", "i18n", "animations", "performance", "formValidation", "codeQuality"],
          tech: ["Next.js", "TypeScript", "Framer Motion", "i18next", "Zod", "React Hook Form", "shadcn/ui", "SonarQube"],
        },
        {
          name: "CGI Capital Platform",
          url: "https://plataforma.cgi-capital.com",
          achievements: ["dashboardArchitecture", "rbacMiddleware", "multiCurrency", "teamLeadership", "mobileDetection"],
          tech: ["Next.js 14", "TypeScript", "TanStack Query", "TanStack Table", "NextAuth", "shadcn/ui", "Recharts", "Zod", "Vitest"],
        },
        {
          name: "Midas Filters Commerce",
          achievements: ["teamLeadership", "e2eLeadership", "reengineering", "featureArchitecture", "codeStandards", "authRbac", "cartCheckout", "stockControl", "codeQuality", "sprintPlanning", "clientCommunication"],
          tech: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "TanStack Query", "TanStack Table", "Zustand", "Axios", "React Hook Form", "Zod", "Vitest", "Testing Library", "Husky", "Screaming Architecture", "Scrum"],
        },
        {
          name: "EDEMSA Contratistas",
          achievements: ["crossFeature", "complexForms", "roleBasedFlows", "componentReuse", "asyncErrorHandling", "teamLeadership"],
          tech: ["React", "Material UI", "Axios", "Formik", "Yup", "React Table", "date-fns", "Sass", "Styled Components", "Zustand", "Husky"],
        },
      ],
    },
    {
      company: "Caramel Point",
      xp: "+900 XP",
      period: "Dic 2024 - Apr 2025",
      status: "COMPLETA" as const,
      icon: "📦",
      logo: "/experience/caramel-point.png",
      color: "pink" as const,
      projects: [
        {
          name: "UP App",
          achievements: ["mobileFromScratch", "scalableMobileArch", "videoStreaming", "multiProfileOnboarding", "i18n", "localPersistence", "observability", "metaAudit"],
          tech: ["Expo", "React Native", "TypeScript", "Expo Router", "TanStack Query", "Zustand", "React Hook Form", "i18next", "react-native-mmkv", "react-native-reanimated", "react-native-gesture-handler", "react-native-video", "Mux", "Sentry", "Jest", "React Native Testing Library"],
        },
        {
          name: "Core DAO Ecosystem",
          url: "https://coredao.org/",
          achievements: ["scrollStorytelling", "animationSystems", "heroImplementation", "cmsIntegration", "crossRepoConsistency", "i18n", "performance"],
          tech: ["Next.js 14", "React 18", "TypeScript", "GSAP", "Lenis", "Spline", "SCSS", "Framer Motion", "Vue 3", "Strapi", "TanStack Query", "Wagmi"],
        },
      ],
    },
    {
      company: "Agripay",
      xp: "+600 XP",
      period: "Sep 2021 - May 2022",
      status: "COMPLETA" as const,
      icon: "💰",
      color: "green" as const,
      projects: [
        {
          name: "Agripay Back Office",
          url: "https://agripay.ar/",
          achievements: ["e2eLeadership", "codeStandards", "featureArchitecture", "businessValidations", "testing", "cicd"],
          tech: ["Angular", "TypeScript", "Cypress", "Jest", "GitHub Actions"],
        },
      ],
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

export type ExperienceColor = "yellow" | "pink" | "green" | "blue";
export type ExperienceStatus = "ACTIVA" | "COMPLETA";
