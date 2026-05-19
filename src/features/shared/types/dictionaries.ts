export interface JobEntry {
  company: string;
  role: string;
  period: string;
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
}
