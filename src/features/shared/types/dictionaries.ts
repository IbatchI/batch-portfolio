export interface JobEntry {
  company: string;
  role: string;
  period: string;
}

export interface ProjectEntry {
  name: string;
  description: string;
}

export interface AchievementLabels {
  teamLeadership: string;
  clientCommunication: string;
  sprintPlanning: string;
  reengineering: string;
  i18n: string;
  animations: string;
  performance: string;
  monorepo: string;
  mobile: string;
  testing: string;
  cicd: string;
  formValidation: string;
  containerization: string;
  codeQuality: string;
  dashboardArchitecture: string;
  rbacMiddleware: string;
  multiCurrency: string;
  reportDownloads: string;
  mobileDetection: string;
  e2eLeadership: string;
  featureArchitecture: string;
  codeStandards: string;
  authRbac: string;
  cartCheckout: string;
  stockControl: string;
  crossFeature: string;
  complexForms: string;
  businessValidations: string;
  multipartIntegration: string;
  multiEndpoint: string;
  roleBasedFlows: string;
  uxConsistency: string;
  componentReuse: string;
  asyncErrorHandling: string;
  mobileFromScratch: string;
  tiktokUx: string;
  curatedFeed: string;
  scalableMobileArch: string;
  videoStreaming: string;
  multiProfileOnboarding: string;
  localPersistence: string;
  observability: string;
  metaAudit: string;
}

export interface EducationEntry {
  title: string;
  institution: string;
  period: string;
}

export interface Dictionary {
  boot: {
    initializing: string;
    modulesLoaded: string;
    stack: string;
    loadingPortfolio: string;
  };
  title: {
    pressStart: string;
  };
  menu: {
    select: string;
    about: string;
    experience: string;
    skills: string;
    education: string;
    contact: string;
  };
  content: {
    description: string;
  };
  about: {
    description: string;
    tags: string[];
  };
  experience: {
    questLog: string;
    statusActive: string;
    statusComplete: string;
    jobs: JobEntry[];
    projects: Record<string, ProjectEntry>;
    achievements: AchievementLabels;
    lootObtained: string;
    achievementsUnlocked: string;
  };
  skills: {
    title: string;
    level: string;
    frontend: string;
    toolsAndBackend: string;
  };
  education: {
    codex: string;
    entries: EducationEntry[];
  };
  contact: {
    command: string;
    establishing: string;
  };
  game: {
    backToTitle: string;
  };
  konami: {
    title: string;
    subtitle: string;
    secret: string;
  };
  meta: {
    title: string;
    description: string;
  };
  notFound: {
    terminalTitle: string;
    boot: Array<{ text: string; suffix: string; style: "muted" | "error" | "dim" }>;
    subtitle: string;
    hint: string;
    goHome: string;
    goBack: string;
    prompt: string;
  };
}
