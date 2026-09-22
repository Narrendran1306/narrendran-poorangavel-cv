export interface ContactLink {
  label: string;
  url: string;
}

export interface ContactInfo {
  name: string;
  roleTitle: string;
  phone: string;
  email: string;
  location: string;
  linkedin: ContactLink;
  github: ContactLink;
  portfolio: ContactLink;
  badges: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface ProjectItem {
  title: string;
  type: string;
  techStack: string[];
  description?: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  score: string;
  coursework?: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date?: string;
}

export interface FooterInfo {
  leftText: string;
  rightText: string;
}

export interface ResumeData {
  contact: ContactInfo;
  summary: string;
  skills: SkillCategory[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  coreCompetencies: string[];
  footer: FooterInfo;
}
