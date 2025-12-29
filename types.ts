
export interface Experience {
  company: string;
  role: string;
  period: string;
  technologies: string[];
  achievements: string[];
}

export interface Project {
  title: string;
  problem: string;
  technologies: string[];
  impact: string;
  company?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface CVData {
  name: string;
  titles: string[];
  location: string;
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
  };
  summary: string;
  experience: Experience[];
  projects: Project[];
  skills: SkillCategory[];
  education: string;
  languages: {
    language: string;
    level: string;
  }[];
}
