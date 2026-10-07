import type {
  ContactInfo,
  EducationItem,
  CertificationItem,
  ResumeData,
  RoleKey,
  ProfileConfig,
  ProfileMetadata,
  CentralizedResumeData,
} from '../types/portfolio.types';

export const baseContactDetails: ContactInfo = {
  name: 'NARRENDRAN POORANGAVEL',
  roleTitle: 'ZOHO DEVELOPER & AUTOMATION SPECIALIST',
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

export const baseEducation: EducationItem[] = [
  {
    degree: 'B.Tech – Information Technology',
    institution: 'Karpagam Institute of Technology',
    period: '2020 – 2024',
    score: 'CGPA: 7.49 / 10',
    location: 'Coimbatore, India',
    coursework: [
      'Data Structures & Algorithms',
      'Web Development',
      'Database Management Systems (DBMS)',
      'Object Oriented Programming',
    ],
  },
];

export const baseCertifications: CertificationItem[] = [
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

export const roleMetadataList: ProfileMetadata[] = [
  {
    id: 'zoho-developer',
    label: 'Zoho Developer & Automation',
    shortLabel: 'Zoho Dev',
    badge: 'Deluge & CRM',
    tagline: 'Zoho CRM, Creator, Deluge Scripting, Webhooks & Automated Workflows',
    accentColor: '#0284c7',
  },
  {
    id: 'backend-developer',
    label: 'Backend Developer',
    shortLabel: 'Backend Dev',
    badge: 'Node & NestJS',
    tagline: 'NestJS, Node.js, MongoDB, REST APIs, Microservices & RBAC',
    accentColor: '#10b981',
  },
  {
    id: 'fullstack-developer',
    label: 'Full-Stack Developer',
    shortLabel: 'Full-Stack',
    badge: 'MERN & NestJS',
    tagline: 'React, TypeScript, NestJS, MongoDB, REST APIs & State Management',
    accentColor: '#0d9488',
  },
  {
    id: 'frontend-developer',
    label: 'Frontend Developer',
    shortLabel: 'Frontend Dev',
    badge: 'React & Redux',
    tagline: 'React.js, Redux Saga, MUI, Responsive Design & UI Systems',
    accentColor: '#6366f1',
  },
  {
    id: 'erp-engineer',
    label: 'ERP Systems Engineer',
    shortLabel: 'ERP Engineer',
    badge: 'Supply Chain & Logic',
    tagline: 'Inventory Reconciliation, Audit Trails, Stock Validation & Workflows',
    accentColor: '#d97706',
  },
  {
    id: 'technical-support',
    label: 'Technical Support Specialist',
    shortLabel: 'Tech Support',
    badge: 'L2/L3 & App Support',
    tagline: 'Incident Troubleshooting, CRM/ERP Diagnostics, RCA & API Debugging',
    accentColor: '#ec4899',
  },
  {
    id: 'qa-engineer',
    label: 'QA / SDET & Software Testing',
    shortLabel: 'QA / SDET',
    badge: 'API & Automation',
    tagline: 'API Testing (Postman), DB State Verification, STLC, Test Automation & Defect Lifecycle',
    accentColor: '#0ea5e9',
  },
];

export const profilesData: Record<RoleKey, ProfileConfig> = {
  // 1. ZOHO DEVELOPER & AUTOMATION SPECIALIST
  'zoho-developer': {
    id: 'zoho-developer',
    targetRoleTitle: 'ZOHO DEVELOPER · AUTOMATION SPECIALIST',
    customSummary:
      'Proactive Zoho Developer & Automation Specialist with hands-on expertise in **Zoho CRM customization**, **Deluge scripting**, **Zoho Creator apps**, and **workflow automations** alongside building **enterprise ERP integrations**. Proven track record in automating **lead qualification pipelines**, implementing **custom validation rules**, **REST API integrations**, and **relational data models**. Quick learner equipped to rapidly configure, deploy, and maintain robust business solutions across the **Zoho ecosystem**.',
    skillsPriority: [
      {
        category: 'Zoho Ecosystem',
        skills: [
          'Zoho CRM Customization',
          'Zoho Creator',
          'Deluge Scripting',
          'Custom Functions',
          'Workflow Automation Rules',
          'Webhooks & REST APIs',
          'Blueprints & Approvals',
        ],
      },
      {
        category: 'Integration & APIs',
        skills: [
          'RESTful APIs',
          'JSON/XML Payloads',
          'Postman Testing',
          'Third-Party API Integrations',
          'Webhook Handlers',
          'Axios Client',
        ],
      },
      {
        category: 'Programming & Web',
        skills: [
          'JavaScript (ES6+)',
          'TypeScript',
          'HTML5 / CSS3',
          'React.js Basics',
          'Node.js (Basics)',
          'Python (Basics)',
          'Java (Basics)',
        ],
      },
      {
        category: 'Databases & Tools',
        skills: [
          'MongoDB',
          'Mongoose ODM',
          'MySQL / PL-SQL',
          'Git/GitHub',
          'VS Code',
          'Zoho Developer Console',
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
    ],
    experienceBullets: [
      {
        role: 'Zoho Developer Intern',
        company: 'Elite Tech Park',
        period: 'Mar 2024 – Jul 2024',
        location: 'Coimbatore, India',
        highlights: [
          'Automated end-to-end data entry and lead qualification pipelines utilizing **Zoho CRM** and custom **Deluge scripting**, reducing manual turnaround time by over 45%.',
          'Engineered custom business logic, validation rules, and automated multi-channel notifications to streamline lead progression and improve pipeline throughput.',
          'Designed, tested, and deployed relational business process automation apps using **Zoho Creator**, incorporating subforms, lookups, and schedule-triggered functions.',
          'Collaborated with senior engineers to configure webhooks, troubleshoot external integration endpoints, and document reusable Deluge automation routines.',
        ],
      },
      {
        role: 'Junior Developer',
        company: 'GWAYERP Tech Solutions',
        period: 'Dec 2024 – Oct 2025',
        location: 'Chennai, India',
        highlights: [
          'Architected ERP order fulfillment validation logic enforcing strict validation rules similar to CRM workflows, preventing process deviations and data discrepancies.',
          'Integrated operational module data with REST APIs and third-party webhook endpoints for real-time order status tracking and inventory synchronization.',
          'Built reusable TypeScript utilities for automated field-level change detection by comparing database records with incoming update payloads.',
          'Maintained detailed documentation on API contracts, workflow specifications, and data normalization models across internal tools.',
        ],
      },
    ],
    featuredProjects: [
      {
        title: 'Custom Zoho Creator & CRM Automation Engine',
        type: 'Enterprise Workflow Implementation',
        techStack: [
          'Zoho CRM',
          'Zoho Creator',
          'Deluge',
          'REST APIs',
          'Webhooks',
          'Postman',
        ],
        highlights: [
          'Constructed custom Deluge scripts to auto-assign incoming leads, calculate score urgency, and trigger instant SLA task delegations.',
          'Developed relational forms, subforms, and schedule-triggered functions in **Zoho Creator** for real-time service ticket lifecycle tracking.',
          'Configured bidirectional REST webhooks between Zoho applications and external databases to synchronize transactional statuses seamlessly.',
        ],
      },
      {
        title: 'Modular HRMS & Operations Management System',
        type: 'Full-Stack Enterprise Implementation',
        techStack: [
          'React.js',
          'TypeScript',
          'NestJS',
          'MongoDB',
          'REST APIs',
          'MUI',
        ],
        highlights: [
          'Architected modular operations platform with automated overtime approval workflows detecting post-session punch-ins and routing manager alerts.',
          'Implemented end-to-end leave management, task delegation, and role-based permissions with dynamic pagination and secure JWT authentication.',
        ],
      },
    ],
    coreCompetencies: [
      'Deluge Scripting',
      'Zoho CRM Workflows',
      'Zoho Creator Apps',
      'API Integration',
      'Business Process Automation',
    ],
    footer: {
      leftText: 'Narrendran Poorangavel — Zoho Developer & Automation Resume',
      rightText: 'Available for Immediate On-site Engagement',
    },
  },

  // 2. BACKEND DEVELOPER (NODE.JS / NESTJS / MONGODB / REST APIS)
  'backend-developer': {
    id: 'backend-developer',
    targetRoleTitle: 'BACKEND DEVELOPER · NESTJS / NODE.JS / MONGODB',
    customSummary:
      'Analytical Backend Developer with hands-on expertise in **NestJS**, **Node.js**, **MongoDB**, and **RESTful API engineering**. Experienced in architecting robust **Role-Based Access Control (RBAC)**, designing optimized **Mongoose database schemas**, and implementing automated audit trail engines. Proven track record in building fault-tolerant state-machine validation workflows, field-level change detection utilities, and secure JWT authentication with refresh token rotations.',
    skillsPriority: [
      {
        category: 'Backend Core & Architecture',
        skills: [
          'NestJS Framework',
          'Node.js (ES6+)',
          'RESTful API Design',
          'Microservices Concepts',
          'JWT Authentication',
          'RBAC Authorization',
          'DTO & Class-Validator',
        ],
      },
      {
        category: 'Databases & Modeling',
        skills: [
          'MongoDB',
          'Mongoose ODM',
          'Schema Optimization',
          'Aggregation Pipelines',
          'Indexing & Query Optimization',
          'MySQL / PL-SQL',
        ],
      },
      {
        category: 'API Security & Validation',
        skills: [
          'NestJS Interceptors',
          'Exception Filters',
          'Payload Diffing & Auditing',
          'CORS & Helmet',
          'Bcrypt Hashing',
          'Token Rotation',
        ],
      },
      {
        category: 'DevOps & Tooling',
        skills: [
          'Postman API Testing',
          'Git/GitHub',
          'Axios Client',
          'npm / Yarn',
          'Linux CLI Basics',
          'Docker Basics',
          'Vite',
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
    ],
    experienceBullets: [
      {
        role: 'Junior Backend Developer',
        company: 'GWAYERP Tech Solutions',
        period: 'Dec 2024 – Oct 2025',
        location: 'Chennai, India',
        highlights: [
          'Architected and deployed high-performance NestJS REST endpoints and service layers for enterprise supply chain modules (Sales Shipment, Services, Returns, Transit).',
          'Engineered an enterprise **Audit Trail engine** using NestJS interceptors and MongoDB collections to log every field-level state change with user attribution.',
          'Re-engineered MongoDB inventory schemas (Physical, Committed, In-Transit, On-Hand) and backend transactional services, eliminating race conditions during fulfillment.',
          'Authored an automated field-level change detection utility in TypeScript to diff incoming update payloads against database states prior to commits.',
          'Implemented strict DTO validations using class-validator and class-transformer, ensuring 100% type safety and preventing malformed payload injection.',
        ],
      },
      {
        role: 'Backend & Automation Intern',
        company: 'Elite Tech Park',
        period: 'Mar 2024 – Jul 2024',
        location: 'Coimbatore, India',
        highlights: [
          'Engineered webhook listeners and API client wrappers in JavaScript to automate lead ingestion and cross-platform transactional data synchronization.',
          'Developed custom database validation routines and query optimization scripts to streamline payload transfer and eliminate operational bottlenecks.',
          'Collaborated with senior backend architects to troubleshoot API integration endpoints and optimize database query structures.',
        ],
      },
    ],
    featuredProjects: [
      {
        title: 'Modular HRMS & Operations Backend Engine',
        type: 'Enterprise REST API Architecture',
        techStack: [
          'NestJS',
          'TypeScript',
          'MongoDB',
          'Mongoose',
          'JWT',
          'REST APIs',
          'Postman',
        ],
        highlights: [
          'Architected granular Role-Based Access Control (RBAC) supporting multi-tier organization hierarchies, departmental access rules, and designation permissions.',
          'Built automated overtime (OT) approval state machine detecting post-session punch-ins, calculating differential hours, and routing manager notifications.',
          'Engineered secure JWT authentication featuring short-lived access tokens, refresh token rotation, and BCrypt password hashing.',
        ],
      },
      {
        title: 'Enterprise Supply Chain & Multi-Warehouse Stock Engine',
        type: 'Production Transactional Microservice',
        techStack: [
          'NestJS',
          'TypeScript',
          'MongoDB',
          'Mongoose',
          'REST APIs',
        ],
        highlights: [
          'Implemented dual-entry stock balance ledger tracking committed allocations vs available inventory to eliminate negative stock errors.',
          'Designed transit goods lifecycle tracker maintaining precise custody chains between dispatch warehouses and destination clients.',
        ],
      },
    ],
    coreCompetencies: [
      'NestJS REST APIs',
      'MongoDB & Mongoose',
      'Database Schema Design',
      'RBAC & Security',
      'API Performance Optimization',
    ],
    footer: {
      leftText: 'Narrendran Poorangavel — Backend Developer Resume',
      rightText: 'Available for Immediate On-site Engagement',
    },
  },

  // 3. FULL-STACK DEVELOPER (MERN / NESTJS)
  'fullstack-developer': {
    id: 'fullstack-developer',
    targetRoleTitle: 'FULL-STACK DEVELOPER · MERN / NESTJS',
    customSummary:
      'Versatile Full-Stack Developer specializing in **React.js**, **TypeScript**, **NestJS**, and **MongoDB**. Proven experience in engineering robust **RESTful APIs**, architecting **Role-Based Access Control (RBAC)**, and building scalable full-stack enterprise systems. Adept at coordinating complex state management with **Redux Saga**, optimizing database schemas with **Mongoose**, and delivering secure, high-performance web applications from database layer to responsive UI.',
    skillsPriority: [
      {
        category: 'Backend & APIs',
        skills: [
          'NestJS',
          'Node.js',
          'RESTful APIs',
          'JWT Authentication',
          'RBAC Architecture',
          'DTO Validation',
          'Axios',
        ],
      },
      {
        category: 'Frontend & UI',
        skills: [
          'React.js',
          'TypeScript',
          'JavaScript (ES6+)',
          'Redux & Redux Saga',
          'MUI (Material UI)',
          'HTML5 / CSS3',
          'Responsive Design',
        ],
      },
      {
        category: 'Databases & ORM',
        skills: [
          'MongoDB',
          'Mongoose ODM',
          'Schema Design',
          'MySQL / PL-SQL',
          'Aggregation Pipelines',
          'Data Indexing',
        ],
      },
      {
        category: 'Tools & DevOps',
        skills: [
          'Git/GitHub',
          'Postman',
          'Vite',
          'npm / Yarn',
          'Linux CLI',
          'Agile / Scrum',
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
    ],
    experienceBullets: [
      {
        role: 'Junior Full-Stack Developer',
        company: 'GWAYERP Tech Solutions',
        period: 'Dec 2024 – Oct 2025',
        location: 'Chennai, India',
        highlights: [
          'Architected and delivered end-to-end ERP modules (Sales Shipment, Services, Returns, Transit) integrating **React**, **TypeScript**, **Redux Saga**, and **NestJS REST APIs**.',
          'Engineered an enterprise **Audit Trail engine** using NestJS interceptors and MongoDB collections to log every field-level state change with user attribution.',
          'Re-engineered MongoDB inventory schemas (Physical, Committed, In-Transit, On-Hand) and backend services to ensure strict transactional consistency.',
          'Built reusable TypeScript utilities for automated field-level change detection by comparing database records with incoming update payloads.',
        ],
      },
      {
        role: 'Developer Intern',
        company: 'Elite Tech Park',
        period: 'Mar 2024 – Jul 2024',
        location: 'Coimbatore, India',
        highlights: [
          'Developed automated data entry pipelines and backend scripts using JavaScript and RESTful integration endpoints.',
          'Constructed custom business logic and validation routines to eliminate operational bottlenecks and streamline payload transfers.',
          'Collaborated with engineering mentors to troubleshoot API integration endpoints and optimize database query structures.',
        ],
      },
    ],
    featuredProjects: [
      {
        title: 'Modular HRMS & Operations Management System',
        type: 'Full-Stack Enterprise Implementation',
        techStack: [
          'React.js',
          'TypeScript',
          'NestJS',
          'MongoDB',
          'Mongoose',
          'Redux Saga',
          'MUI',
          'JWT',
        ],
        highlights: [
          'Architected modular HRMS platform with granular **Role-Based Access Control (RBAC)**, team hierarchies, and department-integrated designations.',
          'Built flexible shift management with dynamic scheduling and attendance tracking with automated overtime (OT) approval routing.',
          'Engineered end-to-end leave management, task delegation, and audit logging with standardized views, dynamic pagination, and secure JWT auth.',
        ],
      },
      {
        title: 'Enterprise Multi-Module ERP Core Engine',
        type: 'Production Web Application',
        techStack: [
          'NestJS',
          'React.js',
          'TypeScript',
          'MongoDB',
          'REST APIs',
          'Redux Saga',
        ],
        highlights: [
          'Implemented Sales Shipment validation against Sales Orders, preventing excess shipments while syncing physical and in-transit stocks in real time.',
          'Designed modular NestJS controller-service-repository patterns with class-validator DTOs for 100% type-safe endpoint communication.',
        ],
      },
    ],
    coreCompetencies: [
      'Full-Stack Architecture',
      'NestJS REST APIs',
      'React & TypeScript',
      'MongoDB & Mongoose',
      'RBAC & Security',
    ],
    footer: {
      leftText: 'Narrendran Poorangavel — Full-Stack Developer Resume',
      rightText: 'Available for Immediate On-site Engagement',
    },
  },

  // 4. FRONTEND DEVELOPER (REACT / REDUX)
  'frontend-developer': {
    id: 'frontend-developer',
    targetRoleTitle: 'FRONTEND DEVELOPER · REACT / REDUX',
    customSummary:
      'Detail-oriented Frontend Developer with strong proficiency in **React.js**, **TypeScript**, **Redux Saga**, and modern UI frameworks (**MUI**, **CSS3**). Experienced in engineering responsive, accessible, pixel-perfect user interfaces for enterprise systems. Skilled in managing asynchronous side-effects, component lifecycle optimization, complex transactional form validation, and building reusable UI component libraries that enhance user productivity.',
    skillsPriority: [
      {
        category: 'Frontend Core',
        skills: [
          'React.js',
          'TypeScript',
          'JavaScript (ES6+)',
          'HTML5',
          'CSS3',
          'CSS Modules',
          'Responsive UI Design',
        ],
      },
      {
        category: 'State & Async',
        skills: [
          'Redux',
          'Redux Saga',
          'Context API',
          'Axios',
          'REST Client Integration',
          'Side-Effect Management',
        ],
      },
      {
        category: 'UI Component Libraries',
        skills: [
          'Material UI (MUI)',
          'Lucide Icons',
          'Tailwind Concepts',
          'Formik / React Hook Form',
          'Custom Design Systems',
        ],
      },
      {
        category: 'Tooling & Environment',
        skills: [
          'Vite',
          'Git/GitHub',
          'Chrome DevTools',
          'Postman',
          'npm',
          'Cross-Browser Optimization',
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
    ],
    experienceBullets: [
      {
        role: 'Junior Frontend Developer',
        company: 'GWAYERP Tech Solutions',
        period: 'Dec 2024 – Oct 2025',
        location: 'Chennai, India',
        highlights: [
          'Engineered rich, reactive web UIs for multi-step ERP workflows (Sales Shipment, Services, Sales Return, Transit) using **React.js**, **TypeScript**, and **MUI**.',
          'Implemented scalable client-side state architectures with **Redux Saga** to handle complex asynchronous transactions and optimistic UI updates.',
          'Built an interactive enterprise **Audit Trail timeline UI** displaying field-level difference diffs, user avatars, and status badges.',
          'Designed responsive, accessible data tables with dynamic pagination, column sorting, and custom filtering routines.',
        ],
      },
      {
        role: 'Frontend / Automation Intern',
        company: 'Elite Tech Park',
        period: 'Mar 2024 – Jul 2024',
        location: 'Coimbatore, India',
        highlights: [
          'Developed responsive form interfaces and interactive web portals with rigorous client-side validation logic.',
          'Optimized UI styling and layout responsiveness across desktop, tablet, and mobile viewports for enhanced operational ergonomics.',
          'Collaborated with design and backend peers to translate functional requirements into polished, reusable React components.',
        ],
      },
    ],
    featuredProjects: [
      {
        title: 'Modular HRMS & Operations Dashboard',
        type: 'Single Page Application (SPA)',
        techStack: [
          'React.js',
          'TypeScript',
          'Redux Saga',
          'MUI',
          'CSS3',
          'REST APIs',
        ],
        highlights: [
          'Constructed comprehensive UI modules for shift configuration, employee profiles, department hierarchies, and designations.',
          'Engineered intuitive attendance tracking screens with interactive modals for overtime (OT) verification and manager approval workflows.',
          'Designed sleek, consistent UI layouts featuring dynamic pagination, collapsible side navigation, and dark/light accents.',
        ],
      },
      {
        title: 'Interactive ERP Supply Chain Explorer',
        type: 'Enterprise Web Portal',
        techStack: [
          'React.js',
          'TypeScript',
          'MUI Data Grid',
          'Redux Saga',
          'Axios',
        ],
        highlights: [
          'Built real-time stock inspection dashboards visualizing Physical, Committed, and In-Transit item quantities with zero UI latency.',
          'Created reusable form wizards with step-by-step progress tracking and instant field-level validation feedback.',
        ],
      },
    ],
    coreCompetencies: [
      'React & TypeScript',
      'Redux Saga State Flow',
      'MUI Component Systems',
      'Responsive Web Design',
      'Asynchronous APIs',
    ],
    footer: {
      leftText: 'Narrendran Poorangavel — Frontend Developer Resume',
      rightText: 'Available for Immediate On-site Engagement',
    },
  },

  // 5. ERP / ENTERPRISE SYSTEMS ENGINEER
  'erp-engineer': {
    id: 'erp-engineer',
    targetRoleTitle: 'ERP / ENTERPRISE SYSTEMS ENGINEER',
    customSummary:
      'Analytical ERP & Enterprise Systems Engineer with specialized expertise in **supply chain modules**, **multi-state stock validation**, **automated audit trails**, and **business process logic**. Experienced in delivering mission-critical workflows across Sales Shipments, Services, Returns, and Transit operations. Skilled in enforcing strict data integrity, designing scalable **MongoDB schemas**, and engineering automated field-level diff utilities for enterprise transparency.',
    skillsPriority: [
      {
        category: 'ERP & Supply Chain',
        skills: [
          'Inventory Tracking (Physical/Committed/In-Transit)',
          'Sales Order Fulfillment',
          'Sales Shipment & Returns',
          'Transit Workflows',
          'Stock Reconciliation',
        ],
      },
      {
        category: 'System Architecture',
        skills: [
          'Audit Trail Architecture',
          'Field-Level Change Detection',
          'State Machines',
          'NestJS',
          'REST APIs',
          'RBAC Governance',
        ],
      },
      {
        category: 'Data & Databases',
        skills: [
          'MongoDB',
          'Mongoose ODM',
          'MySQL / PL-SQL',
          'Data Normalization',
          'Transactional Integrity',
          'Payload Diffing',
        ],
      },
      {
        category: 'Enterprise UI & Tools',
        skills: [
          'React.js',
          'TypeScript',
          'Redux Saga',
          'MUI',
          'Postman',
          'Git/GitHub',
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
    ],
    experienceBullets: [
      {
        role: 'Junior ERP Developer',
        company: 'GWAYERP Tech Solutions',
        period: 'Dec 2024 – Oct 2025',
        location: 'Chennai, India',
        highlights: [
          'Architected and delivered end-to-end ERP modules (Sales Shipment, Services, Sales Return, Transit) integrating **React**, **TypeScript**, **Redux Saga**, **NestJS**, and **REST APIs**.',
          'Implemented **Sales Shipment validation workflows** against Sales Orders, preventing excess shipments while synchronizing physical, committed, and in-transit stocks.',
          'Re-engineered inventory tracking schemas (Physical, Committed, In-Transit, Quantity-on-Hand), updating MongoDB schemas and backend services to avoid discrepancies.',
          'Engineered an enterprise **Audit Trail** with React, Redux Saga, NestJS, and MongoDB for comprehensive user and module modification logs.',
          'Built a reusable TypeScript utility for automated field-level change detection by comparing database records with incoming update payloads.',
        ],
      },
      {
        role: 'Systems & Automation Intern',
        company: 'Elite Tech Park',
        period: 'Mar 2024 – Jul 2024',
        location: 'Coimbatore, India',
        highlights: [
          'Automated data validation pipelines and process routing rules, ensuring clean handoffs between commercial and operational workflows.',
          'Constructed custom verification logic and structured data templates to enforce operational compliance.',
          'Assisted senior architects in auditing process exceptions and establishing reliable integration checkpoints.',
        ],
      },
    ],
    featuredProjects: [
      {
        title: 'Enterprise Supply Chain & Stock Tracking Subsystem',
        type: 'Production ERP Module',
        techStack: [
          'NestJS',
          'React.js',
          'TypeScript',
          'MongoDB',
          'Mongoose',
          'Redux Saga',
          'MUI',
        ],
        highlights: [
          'Engineered multi-state stock ledger calculating Committed vs Available units to eliminate over-allocation in high-volume fulfillment cycles.',
          'Created automated field-level difference detector generating detailed human-readable audit logs for every system transaction.',
          'Enforced transactional integrity across order fulfillment, shipment dispatches, and warehouse transfer states.',
        ],
      },
      {
        title: 'Modular HRMS & Operations Management System',
        type: 'Enterprise Platform',
        techStack: [
          'React.js',
          'TypeScript',
          'NestJS',
          'MongoDB',
          'REST APIs',
          'JWT',
        ],
        highlights: [
          'Engineered enterprise Role-Based Access Control (RBAC) with organizational departmental hierarchies and designation access matrices.',
          'Built attendance tracking with automated overtime approval workflows detecting post-session punch-ins and routing alerts.',
        ],
      },
    ],
    coreCompetencies: [
      'ERP Workflow Logic',
      'Inventory Reconciliation',
      'Audit Trail Systems',
      'Stock Validation Rules',
      'Field Change Detection',
    ],
    footer: {
      leftText: 'Narrendran Poorangavel — ERP Systems Engineer Resume',
      rightText: 'Available for Immediate On-site Engagement',
    },
  },

  // 6. TECHNICAL SUPPORT SPECIALIST (L2/L3 & APPLICATION SUPPORT)
  'technical-support': {
    id: 'technical-support',
    targetRoleTitle: 'TECHNICAL SUPPORT SPECIALIST · APPLICATION & SYSTEM SUPPORT',
    customSummary:
      'Dedicated Technical Support Specialist and Application Engineer with hands-on experience in **production incident troubleshooting**, **CRM workflow diagnostics**, **ERP operational support**, and **database record reconciliation**. Adept at performing root cause analysis (RCA), debugging **REST API integration webhooks**, verifying **field-level audit logs**, and resolving critical user tickets within strict SLAs. Proven communicator adept at bridging the gap between non-technical end users, business stakeholders, and core engineering teams.',
    skillsPriority: [
      {
        category: 'Application & Support',
        skills: [
          'L2/L3 Technical Support',
          'Incident Management',
          'Production Troubleshooting',
          'Root Cause Analysis (RCA)',
          'SLA Compliance',
          'User Access Provisioning',
        ],
      },
      {
        category: 'CRM & ERP Diagnostics',
        skills: [
          'Zoho CRM Diagnostics',
          'Zoho Creator Workflow Debugging',
          'Deluge Script Troubleshooting',
          'Inventory & Order Tracking',
          'Audit Log Inspection',
        ],
      },
      {
        category: 'Database & Querying',
        skills: [
          'MongoDB Querying & Compass',
          'Mongoose ODM',
          'MySQL / SQL Queries',
          'Data Discrepancy Reconciliation',
          'Payload Verification',
        ],
      },
      {
        category: 'API & Network Debugging',
        skills: [
          'REST API Debugging',
          'Postman Request Inspection',
          'Webhook Failure Analysis',
          'HTTP Status Diagnostics',
          'Browser DevTools',
          'Git / Version Control',
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
    ],
    experienceBullets: [
      {
        role: 'Junior Developer & ERP Application Support',
        company: 'GWAYERP Tech Solutions',
        period: 'Dec 2024 – Oct 2025',
        location: 'Chennai, India',
        highlights: [
          'Provided L2/L3 technical support for enterprise ERP modules (Sales Shipment, Services, Returns, Transit), resolving operational roadblocks and data sync issues.',
          'Utilized the enterprise **Audit Trail subsystem** to trace anomalous user actions, identify data entry discrepancies, and restore corrupted inventory balances.',
          'Debugged and resolved stock validation errors between Sales Orders and Shipments, reconciling committed allocations with on-hand physical stock.',
          'Monitored REST API transactions and webhook communication payloads using Postman and server logs, reducing system downtime across client deployments.',
          'Authored clear technical documentation, issue escalation SOPs, and user troubleshooting guides that reduced repetitive support tickets by 35%.',
        ],
      },
      {
        role: 'Zoho Support & Automation Intern',
        company: 'Elite Tech Park',
        period: 'Mar 2024 – Jul 2024',
        location: 'Coimbatore, India',
        highlights: [
          'Triaged, diagnosed, and resolved user support tickets regarding Zoho CRM lead pipelines, validation rule triggers, and automated notification failures.',
          'Debugged custom Deluge scripts and Zoho Creator workflows to fix script runtime errors, incorrect field mappings, and webhook timeout issues.',
          'Assisted end users in configuring custom CRM reports, data views, and access privileges while maintaining strict data governance standards.',
        ],
      },
    ],
    featuredProjects: [
      {
        title: 'Enterprise Audit Trail & System Diagnostics Portal',
        type: 'Support & Incident Investigation Tool',
        techStack: [
          'React.js',
          'NestJS',
          'MongoDB',
          'TypeScript',
          'REST APIs',
          'Postman',
        ],
        highlights: [
          'Built interactive audit timeline viewer enabling support engineers to inspect before-and-after record snapshots and isolate faulty data modifications.',
          'Implemented field-level discrepancy analysis tool that cross-checks incoming API update payloads against active MongoDB document states.',
        ],
      },
      {
        title: 'Zoho Creator Incident Ticketing & Escalation App',
        type: 'Support Operations Workflow',
        techStack: [
          'Zoho Creator',
          'Deluge',
          'Zoho CRM',
          'Webhooks',
          'REST APIs',
        ],
        highlights: [
          'Constructed custom ticket management portal featuring automated SLA urgency tagging, department-based routing, and customer status alerts.',
          'Automated recurring health-check routines and webhook response validation to identify integration failures before end-user escalation.',
        ],
      },
    ],
    coreCompetencies: [
      'Incident Troubleshooting',
      'Root Cause Analysis (RCA)',
      'ERP & CRM Diagnostics',
      'API & Webhook Debugging',
      'SLA & Ticket Management',
    ],
    footer: {
      leftText: 'Narrendran Poorangavel — Technical Support Specialist Resume',
      rightText: 'Available for Immediate On-site Engagement',
    },
  },

  // 7. QA / SDET & SOFTWARE TESTING
  'qa-engineer': {
    id: 'qa-engineer',
    targetRoleTitle: 'JUNIOR QA ENGINEER · SDET & SOFTWARE TESTING',
    contactOverride: {
      location: 'Chennai / Dindigul, Tamil Nadu',
    },
    customSummary:
      'Technical, detail-oriented **Software Quality Assurance Engineer** with 1.3+ years of experience across web and enterprise application domains. Leverages a code-level engineering background in **TypeScript, JavaScript, React, and NestJS** to bridge the gap between functional QA and automation. Proven expertise in **RESTful API testing with Postman**, backend **database state verification** using **MySQL and MongoDB**, end-to-end **business logic validation** across complex ERP modules, and mobile/web cross-platform verification. Highly proficient in **STLC**, **defect lifecycles**, and rapid test automation ramp-up using TypeScript test frameworks (**Cucumber/BDD, Playwright, Cypress**).',
    skillsPriority: [
      {
        category: 'Testing Disciplines',
        skills: [
          'Functional Testing',
          'API & Integration Testing',
          'Regression Testing',
          'Smoke/Sanity Testing',
          'Cross-Browser & Mobile UI Validation',
          'Defect Life Cycle',
          'Test Case Design & Execution',
          'STLC & RTM',
        ],
      },
      {
        category: 'Languages & Frameworks',
        skills: [
          'TypeScript',
          'JavaScript (ES6+)',
          'React.js',
          'React Native',
          'NestJS',
          'Node.js',
        ],
      },
      {
        category: 'Test Automation & Tools',
        skills: [
          'Postman (REST API Assertions & Collections)',
          'Cucumber BDD with TypeScript',
          'Playwright / Cypress (Exposure)',
          'Chrome DevTools',
          'Git / GitHub',
        ],
      },
      {
        category: 'Databases & Querying',
        skills: [
          'MySQL / PL-SQL',
          'MongoDB & Mongoose ODM',
          'Backend Data Persistence Verification',
          'State Transitions & Payload Schema Validation',
        ],
      },
      {
        category: 'Core Principles',
        skills: [
          'Edge-Case Detection',
          'Boundary Value Analysis',
          'Equivalence Partitioning',
          'Agile/Scrum',
          'Defect Triage',
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
    ],
    experienceBullets: [
      {
        role: 'Junior Developer / Software Engineer (QA & Product Validation)',
        company: 'GWAYERP Tech Solutions',
        period: 'Dec 2024 — Oct 2025',
        location: 'Chennai, India',
        highlights: [
          'Formulated and executed **150+ comprehensive manual and API test scenarios** for high-stakes enterprise ERP modules, including **Sales Shipment**, **Inventory Management**, and **Audit Trail**.',
          'Conducted deep-dive **REST API testing using Postman**—validating HTTP status codes, headers, token-based authentication flows, JSON payloads, and error-handling edge cases.',
          'Executed strict database-level validation using **MySQL and MongoDB** to verify backend data persistence, inventory decrement math, and state integrity across order fulfillment stages.',
          'Validated complex business logic, such as **preventing duplicate dispatches** and detecting race conditions in simultaneous inventory updates.',
          'Championed **defect tracking and triage**, reporting reproducible issues with structured logs, network payloads, and severity/priority tags to decrease regression cycle time.',
          'Conducted **cross-browser compatibility and responsive UI testing** across modern desktop engines and mobile viewport profiles.',
        ],
      },
      {
        role: 'Zoho Developer & Automation Intern',
        company: 'Elite Tech Park',
        period: 'Mar 2024 — Jul 2024',
        location: 'Coimbatore, India',
        highlights: [
          'Validated business process workflows, data integrity constraints, and automated **Deluge scripts** across **Zoho CRM** and **Zoho Creator**.',
          'Designed edge-case test data sets to verify **form validation rules**, **approval escalation matrixes**, and **webhook integrations**.',
          'Identified and resolved logic gaps in **lead routing and record assignment automations** prior to production deployment.',
        ],
      },
    ],
    featuredProjects: [
      {
        title: 'enthran — HRMS & CRM Platform (Full-Stack & Integration Testing)',
        type: 'Enterprise Platform QA & Validation',
        techStack: [
          'React.js',
          'NestJS',
          'MongoDB',
          'Postman',
          'TypeScript',
          'REST APIs',
        ],
        highlights: [
          'Architected and tested an enterprise web platform built on **React, NestJS, and MongoDB**.',
          'Created end-to-end integration and API test suites in **Postman** for **RBAC (Role-Based Access Control)**, JWT session lifecycles, and tenant permission boundaries.',
          'Performed rigorous schema and payload structure validation to eliminate backend serialization errors.',
        ],
      },
      {
        title: 'Workforce Hub — Leave Management Automation',
        type: 'Workflow & State Validation',
        techStack: [
          'React.js',
          'Node.js',
          'TypeScript',
          'MongoDB',
          'Postman',
        ],
        highlights: [
          'Built and tested multi-stage approval workflows, testing conditional logic, **leave-balance state transitions**, and edge scenarios (e.g., duplicate date collisions, insufficient balances).',
        ],
      },
    ],
    coreCompetencies: [
      'Edge-Case Detection',
      'Boundary Value Analysis',
      'Equivalence Partitioning',
      'REST API Testing (Postman)',
      'STLC & RTM',
      'Database State Verification',
    ],
    footer: {
      leftText: 'Narrendran Poorangavel — Junior QA / SDET Resume',
      rightText: 'Immediate Joiner • Open to Relocation',
    },
  },
};

export const defaultRoleKey: RoleKey = 'zoho-developer';

/**
 * Returns a complete, fully-hydrated ResumeData object dynamically compiled for the requested role.
 */
export const getResumeForRole = (roleKey: RoleKey = defaultRoleKey): ResumeData => {
  const profile = profilesData[roleKey] || profilesData[defaultRoleKey];

  return {
    contact: {
      ...baseContactDetails,
      roleTitle: profile.targetRoleTitle,
      ...(profile.contactOverride || {}),
    },
    summary: profile.customSummary,
    skills: profile.skillsPriority,
    experience: profile.experienceBullets,
    projects: profile.featuredProjects,
    education: baseEducation,
    certifications: baseCertifications,
    coreCompetencies: profile.coreCompetencies || [
      'Business Process Logic',
      'API Integration',
      'Problem Solving',
      'Agile Development',
      'Team Collaboration',
    ],
    footer: profile.footer || {
      leftText: `Narrendran Poorangavel — ${profile.targetRoleTitle} Resume`,
      rightText: 'Available for Immediate On-site Engagement',
    },
  };
};

export const centralizedResumeData: CentralizedResumeData = {
  contact: baseContactDetails,
  education: baseEducation,
  certifications: baseCertifications,
  defaultRole: defaultRoleKey,
  profiles: profilesData,
};

export const resumeData = getResumeForRole(defaultRoleKey);

export default resumeData;
