import type {
  ContactInfo,
  SkillCategory,
  ExperienceItem,
  ProjectItem,
  EducationItem,
  CertificationItem,
  FooterInfo,
  ResumeData,
} from '../types/portfolio.types';

export const contactDetails: ContactInfo = {
  name: 'NARRENDRAN POORANGAVEL',
  roleTitle: 'ZOHO DEVELOPER · FULL STACK ERP ENGINEER',
  phone: '+91 7868843874',
  email: 'narrendranpoorangavel@gmail.com',
  location: 'Dindigul, Tamil Nadu',
  linkedin: {
    label: 'linkedin.com/in/narrendranpoorangavel',
    url: 'https://linkedin.com/in/narrendranpoorangavel',
  },
  github: {
    label: 'github.com/Narrendran1306',
    url: 'https://github.com/Narrendran1306',
  },
  portfolio: {
    label: 'narrendran-poorangavel.vercel.app',
    url: 'https://narrendran-poorangavel.vercel.app',
  },
  badges: ['IMMEDIATE JOINER', 'OPEN TO RELOCATION'],
};

export const summaryText: string =
  'Proactive Zoho & Full-Stack Developer with hands-on expertise in **Zoho CRM customization**, **Deluge scripting**, **Zoho Creator**, and **workflow automations** alongside building **enterprise-grade ERP solutions**. Proven track record in automating **lead qualification pipelines**, implementing **custom business logic**, **REST API integrations**, and **scalable database schemas**. Quick learner equipped to rapidly configure, deploy, and maintain robust business solutions across the **Zoho ecosystem**.';

export const skillsData: SkillCategory[] = [
  {
    category: 'Zoho Ecosystem',
    skills: [
      'Zoho CRM',
      'Zoho Creator',
      'Deluge Scripting',
      'Custom Functions',
      'Workflow Automation',
      'Webhooks & REST APIs',
    ],
  },
  {
    category: 'Programming & Web',
    skills: [
      'JavaScript (ES6+)',
      'TypeScript',
      'Deluge',
      'HTML5',
      'CSS3',
      'Java (Basics)',
      'Python (Basics)',
    ],
  },
  {
    category: 'Full Stack & ERP',
    skills: [
      'React.js',
      'Redux',
      'Redux Saga',
      'MUI',
      'NestJS',
      'REST APIs',
      'JWT Auth',
      'Inventory & Order Workflows',
    ],
  },
  {
    category: 'Databases & Tools',
    skills: [
      'MongoDB',
      'Mongoose',
      'MySQL / PL-SQL',
      'Git/GitHub',
      'Postman',
      'Axios',
    ],
  },
  {
    category: 'Languages',
    skills: [
      'Tamil (Native)',
      'English (Professional Working)',
      'Hindi (Conversational)',
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    role: 'Zoho Developer Intern',
    company: 'Elite Tech Park',
    period: 'Mar 2024 – Jul 2024',
    location: 'Coimbatore, India',
    highlights: [
      'Automated end-to-end data entry and lead qualification pipelines utilizing **Zoho CRM** and custom **Deluge scripting**, reducing manual effort significantly.',
      'Engineered custom business logic, validation rules, and automated notifications to streamline CRM workflows and improve operational efficiency.',
      'Designed, tested, and deployed business process automation modules using **Zoho Creator** and CRM toolsets.',
      'Collaborated with senior developers to troubleshoot, optimize, and document reusable automation routines and integration workflows.',
    ],
  },
  {
    role: 'Junior Developer',
    company: 'GWAYERP Tech Solutions',
    period: 'Dec 2024 – Oct 2025',
    location: 'Chennai, India',
    highlights: [
      'Architected and delivered end-to-end ERP modules (Sales Shipment, Services, Sales Return, Transit) integrating React, TypeScript, Redux Saga, NestJS, and REST APIs.',
      'Implemented Sales Shipment validation workflows against Sales Orders, preventing excess shipments while synchronizing physical, committed, and in-transit stocks.',
      'Re-engineered inventory tracking (Physical, Committed, In-Transit, Quantity-on-Hand), updating MongoDB schemas and backend services.',
      'Engineered an enterprise Audit Trail with React, Redux Saga, NestJS, and MongoDB schemas for tracking user and module modifications.',
      'Built a reusable TypeScript utility for automated field-level change detection by comparing database records with incoming update payloads.',
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    title: 'Modular HRMS & Operations Management System',
    type: 'Personal Implementation',
    techStack: ['React.js', 'TypeScript', 'Redux Saga', 'NestJS', 'REST APIs', 'MongoDB', 'Mongoose', 'MUI'],
    highlights: [
      'Architected a modular HRMS platform featuring granular Role-Based Access Control (RBAC), structural teams, departments, and department-integrated designations.',
      'Built a flexible shift management module supporting custom shift creation, dynamic timing adjustments, and tailored scheduling based on organizational needs.',
      'Engineered attendance tracking with automated overtime (OT) workflows that detect post-session punch-ins, prompt user confirmation, and route approval requests.',
      'Implemented end-to-end leave management, task delegation, and project tracking with standardized list, detail, and form views, dynamic pagination, and secure JWT authentication.',
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    degree: 'B.Tech – Information Technology',
    institution: 'Karpagam Institute of Technology',
    period: '2020 – 2024',
    score: 'CGPA: 7.49 / 10',
    location: 'Coimbatore, India',
    coursework: ['Data Structures & Algorithms', 'Web Development', 'Database Management Systems (DBMS)'],
  },
];

export const certificationsData: CertificationItem[] = [
  {
    title: 'MongoDB Essentials - A Complete MongoDB Guide',
    issuer: 'Infosys',
    date: 'Nov 2022',
  },
  {
    title: 'Node.js Certification',
    issuer: 'Infosys',
    date: 'Nov 2022',
  },
  {
    title: 'Python with Machine Learning',
    issuer: 'FITA',
    date: 'Apr 2026',
  },
];

export const coreCompetenciesData: string[] = [
  'Business Process Logic',
  'API Integration',
  'Problem Solving',
  'Agile Development',
  'Team Collaboration',
];

export const footerData: FooterInfo = {
  leftText: 'Narrendran Poorangavel — Zoho Developer Resume',
  rightText: 'Available for Immediate On-site Engagement',
};

export const resumeData: ResumeData = {
  contact: contactDetails,
  summary: summaryText,
  skills: skillsData,
  experience: experienceData,
  projects: projectsData,
  education: educationData,
  certifications: certificationsData,
  coreCompetencies: coreCompetenciesData,
  footer: footerData,
};

export default resumeData;