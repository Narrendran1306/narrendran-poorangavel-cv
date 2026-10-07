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
    id: 'fullstack-developer',
    label: 'Full-Stack Developer',
    shortLabel: 'Full-Stack',
    badge: 'React & NestJS',
    tagline: 'React, TypeScript, NestJS, MongoDB, REST APIs & State Management',
    accentColor: '#0d9488',
  },
  {
    id: 'backend-developer',
    label: 'Backend Developer',
    shortLabel: 'Backend Dev',
    badge: 'NestJS & Node',
    tagline: 'NestJS, Node.js, MongoDB, REST APIs, Microservices & RBAC',
    accentColor: '#10b981',
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
];

export const profilesData: Record<RoleKey, ProfileConfig> = {
  // 1. ZOHO DEVELOPER & AUTOMATION SPECIALIST
  'zoho-developer': {
    id: 'zoho-developer',
    targetRoleTitle: 'ZOHO DEVELOPER · AUTOMATION SPECIALIST',
    customSummary: 'Proactive **Zoho & Full-Stack Developer** with hands-on expertise in **Zoho CRM customization**, **Deluge scripting**, **Zoho Creator**, and **workflow automations** alongside building enterprise-grade ERP solutions. Proven track record in automating lead qualification pipelines, implementing custom business logic, REST API integrations, and scalable database schemas. Quick learner equipped to rapidly configure, deploy, and maintain robust business solutions across the Zoho ecosystem.',
    skillsPriority: [
      {
        category: 'Zoho Ecosystem',
        skills: [
          'Zoho CRM Customization',
          'Zoho Creator Application Dev',
          'Deluge Scripting',
          'Custom Functions & Buttons',
          'Workflow Automation Rules',
          'Webhooks & Third-Party Integrations',
          'Lead Qualification Pipelines',
          'Blueprint & Approval Processes',
        ],
      },
      {
        category: 'Programming & Web',
        skills: [
          'JavaScript (ES6+)',
          'TypeScript',
          'HTML5 / CSS3',
          'Java (Basics)',
          'Python (Basics)',
        ],
      },
      {
        category: 'Full Stack & ERP',
        skills: [
          'React.js',
          'NestJS',
          'Redux / Redux Saga',
          'Material UI (MUI)',
          'RESTful Web Services',
          'JWT Authentication & RBAC',
          'Inventory & Order Workflows',
        ],
      },
      {
        category: 'Databases & Developer Tools',
        skills: [
          'MongoDB',
          'Mongoose ODM',
          'MySQL / Relational Schemas',
          'Postman (API Debugging)',
          'Axios Client',
          'Git / GitHub',
          'VS Code',
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
      {
        role: 'Zoho Developer Intern',
        company: 'Elite Tech Park',
        period: 'Mar 2024 – Jul 2024',
        location: 'Coimbatore, India',
        highlights: [
          'Automated end-to-end data entry and lead qualification pipelines utilizing **Zoho CRM** and custom **Deluge scripting**, reducing manual effort significantly.',
          'Engineered custom business logic, validation rules, and automated notifications to streamline CRM workflows and improve operational efficiency.',
          'Designed, tested, and deployed business process automation modules using Zoho Creator and CRM toolsets.',
          'Collaborated with senior developers to troubleshoot, optimize, and document reusable automation routines and integration workflows.',
        ],
      },
    ],
    featuredProjects: [
      {
        title: 'Custom Zoho Creator & CRM Automation Suite',
        type: 'CRM & Creator Automation',
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
          'Developed relational forms, subforms, and schedule-triggered functions in Zoho Creator for real-time service ticket lifecycle tracking.',
          'Configured bidirectional REST webhooks between Zoho applications and external endpoints to synchronize transactional statuses seamlessly.',
        ],
      },
      {
        title: 'Workforce Hub — Leave & Approval Automation',
        type: 'Zoho Creator Business Application',
        techStack: ['Zoho Creator', 'Deluge', 'Workflows', 'Approval Matrices'],
        highlights: [
          'Architected an automated leave request application with multi-level approval workflows and dynamic leave balance deductions.',
          'Built custom Deluge functions to handle overlapping date restrictions and automated notification triggers.',
        ],
      },
      {
        title: 'Modular HRMS & Operations Management System',
        type: 'Enterprise Platform Implementation',
        techStack: [
          'React.js',
          'TypeScript',
          'Redux Saga',
          'NestJS',
          'REST APIs',
          'MongoDB',
          'Mongoose',
          'MUI',
        ],
        highlights: [
          'Architected a modular HRMS platform with granular Role-Based Access Control (RBAC), structural teams, departments, and department-integrated designations.',
          'Engineered attendance tracking and shift scheduling with automated overtime (OT) workflows that trigger confirmation prompts and approval requests when clocking in after regular sessions.',
          'Implemented end-to-end leave management, task delegation, and project tracking with standardized list, detail, and form views, dynamic pagination, and secure JWT authentication.',
        ],
      },
    ],
    coreCompetencies: [
      'Deluge Scripting',
      'Zoho CRM Customization',
      'Business Process Automation',
      'REST Webhooks & Integration',
      'ERP Workflow Architecture',
    ],
    footer: {
      leftText: 'Narrendran Poorangavel — Zoho Developer Resume',
      rightText: 'Available for Immediate On-site Engagement',
    },
  },

  // 2. FULL-STACK DEVELOPER (REACT / NESTJS / MONGODB)
  'fullstack-developer': {
    id: 'fullstack-developer',
    targetRoleTitle: 'FULL-STACK DEVELOPER · REACT / NESTJS / MONGODB',
    customSummary: 'Versatile **Full-Stack Developer** with solid hands-on experience in **React.js**, **TypeScript**, **NestJS**, and **MongoDB**. Proven track record in designing scalable RESTful APIs, architecting fine-grained **Role-Based Access Control (RBAC)**, and coordinating complex asynchronous state management with **Redux Saga**. Strong knack for designing end-to-end features—from performant database schemas to intuitive, responsive user interfaces.',
    skillsPriority: [
      {
        category: 'Backend Architecture',
        skills: [
          'NestJS Framework',
          'Node.js (ES6+)',
          'RESTful API Architecture',
          'JWT Authentication & Refresh Tokens',
          'Role-Based Access Control (RBAC)',
          'DTO & Class-Validator Pipelines',
          'NestJS Interceptors & Middleware',
        ],
      },
      {
        category: 'Frontend Engineering',
        skills: [
          'React.js',
          'TypeScript',
          'Redux & Redux Saga',
          'Material UI (MUI)',
          'Responsive UI / CSS3 / HTML5',
          'Axios Client & Interceptors',
          'Component Lifecycle Optimization',
        ],
      },
      {
        category: 'Databases & Data Modeling',
        skills: [
          'MongoDB',
          'Mongoose ODM',
          'Aggregation Pipelines',
          'Schema Design & Indexing',
          'MySQL / Relational Modeling',
          'Multi-State Inventory Ledger Schemas',
        ],
      },
      {
        category: 'Programming & Core Tech',
        skills: [
          'JavaScript (ES6+)',
          'TypeScript',
          'Python (Basics)',
          'Java (Basics)',
          'Data Structures & Algorithms',
        ],
      },
      {
        category: 'DevOps & Tooling',
        skills: [
          'Git / GitHub (Branching & PRs)',
          'Postman API Client',
          'Vite & Build Tooling',
          'npm / Package Management',
          'VS Code',
          'Agile / Scrum Methodologies',
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
        role: 'Junior Developer',
        company: 'GWAYERP Tech Solutions',
        period: 'Dec 2024 – Oct 2025',
        location: 'Chennai, India',
        highlights: [
          'Architected and delivered end-to-end ERP modules (Sales Shipment, Services, Sales Return, Transit) integrating **React**, **TypeScript**, **Redux Saga**, **NestJS**, and **REST APIs**.',
          'Implemented **Sales Shipment validation workflows** against Sales Orders, preventing excess shipments while synchronizing physical, committed, and in-transit stocks.',
          'Re-engineered inventory tracking (Physical, Committed, In-Transit, Quantity-on-Hand), updating MongoDB schemas and backend services.',
          'Engineered an enterprise **Audit Trail** with React, Redux Saga, NestJS, and MongoDB schemas for tracking user and module modifications.',
          'Built a reusable TypeScript utility for automated field-level change detection by comparing database records with incoming update payloads.',
        ],
      },
      {
        role: 'Zoho Developer Intern',
        company: 'Elite Tech Park',
        period: 'Mar 2024 – Jul 2024',
        location: 'Coimbatore, India',
        highlights: [
          'Automated end-to-end data entry and lead qualification pipelines utilizing Zoho CRM and custom Deluge scripting, reducing manual effort significantly.',
          'Engineered custom business logic, validation rules, and automated notifications to streamline CRM workflows and improve operational efficiency.',
          'Collaborated with senior developers to troubleshoot, optimize, and document reusable automation routines and integration workflows.',
        ],
      },
    ],
    featuredProjects: [
      {
        title: 'Modular HRMS & Operations Management System',
        type: 'Full-Stack Enterprise Platform',
        techStack: [
          'React.js',
          'TypeScript',
          'Redux Saga',
          'NestJS',
          'REST APIs',
          'MongoDB',
          'Mongoose',
          'MUI',
          'JWT Auth',
        ],
        highlights: [
          'Architected a modular HRMS platform with granular **Role-Based Access Control (RBAC)**, structural teams, departments, and department-integrated designations.',
          'Engineered attendance tracking and shift scheduling with automated overtime (OT) workflows that trigger confirmation prompts and approval requests when clocking in after regular sessions.',
          'Implemented end-to-end leave management, task delegation, and project tracking with standardized list, detail, and form views, dynamic pagination, and secure JWT authentication.',
        ],
      },
      {
        title: 'Enterprise Multi-Module ERP Core Engine',
        type: 'Full-Stack Web Application',
        techStack: [
          'NestJS',
          'React.js',
          'TypeScript',
          'MongoDB',
          'REST APIs',
          'Redux Saga',
          'Mongoose',
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
      'React & Redux Saga',
      'MongoDB & Mongoose',
      'RBAC & Auth Flows',
    ],
    footer: {
      leftText: 'Narrendran Poorangavel — Full-Stack Developer Resume',
      rightText: 'Available for Immediate On-site Engagement',
    },
  },

  // 3. BACKEND DEVELOPER (NESTJS / NODE.JS / MONGODB)
  'backend-developer': {
    id: 'backend-developer',
    targetRoleTitle: 'BACKEND DEVELOPER · NESTJS / NODE.JS / MONGODB',
    customSummary: 'Engineered for scalability: **Full-Stack Developer** with a clear specialization and deep knack for **Backend Architecture**, **NestJS**, **Node.js**, and **MongoDB**. Proven in architecting secure **Role-Based Access Control (RBAC)**, structuring high-throughput **Mongoose schemas**, and building automated interceptor-based audit trail engines. Experienced in enforcing data integrity via validation pipelines, diffing utilities, and token-based security schemes.',
    skillsPriority: [
      {
        category: 'Backend Core & Architecture',
        skills: [
          'NestJS Framework',
          'Node.js (ES6+)',
          'RESTful API Architecture',
          'JWT Authentication & Session Security',
          'RBAC Authorization Guards',
          'DTO & Class-Validator Pipelines',
          'Microservices Architecture Concepts',
          'Dependency Injection Patterns',
        ],
      },
      {
        category: 'Databases & Modeling',
        skills: [
          'MongoDB',
          'Mongoose ODM',
          'Aggregation Pipelines',
          'Schema Optimization & Indexing',
          'MySQL / Relational Schemas',
          'Transactional Stock Ledgers',
        ],
      },
      {
        category: 'Interceptors, Logic & Security',
        skills: [
          'NestJS Interceptors & Filters',
          'Payload Diffing & Auditing Utilities',
          'Bcrypt Password Hashing',
          'Token Rotation Lifecycle',
          'Axios Client Integration',
          'Error Handling Pipelines',
        ],
      },
      {
        category: 'Programming Languages',
        skills: [
          'TypeScript',
          'JavaScript (ES6+)',
          'Python (Basics)',
          'Java (Basics)',
        ],
      },
      {
        category: 'DevOps & Tooling',
        skills: [
          'Postman API Testing',
          'Git / GitHub',
          'VS Code',
          'npm / Yarn',
          'Agile Development',
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
        role: 'Junior Developer',
        company: 'GWAYERP Tech Solutions',
        period: 'Dec 2024 – Oct 2025',
        location: 'Chennai, India',
        highlights: [
          'Architected and delivered end-to-end ERP modules (Sales Shipment, Services, Sales Return, Transit) integrating React, TypeScript, Redux Saga, NestJS, and REST APIs.',
          'Implemented Sales Shipment validation workflows against Sales Orders, preventing excess shipments while synchronizing physical, committed, and in-transit stocks.',
          'Re-engineered inventory tracking (Physical, Committed, In-Transit, Quantity-on-Hand), updating MongoDB schemas and backend services.',
          'Engineered an enterprise **Audit Trail engine** using React, Redux Saga, NestJS, and MongoDB schemas for tracking user and module modifications.',
          'Built a reusable TypeScript utility for automated field-level change detection by comparing database records with incoming update payloads.',
        ],
      },
      {
        role: 'Zoho Developer Intern',
        company: 'Elite Tech Park',
        period: 'Mar 2024 – Jul 2024',
        location: 'Coimbatore, India',
        highlights: [
          'Engineered webhook listeners and API client wrappers to automate lead ingestion and cross-platform transactional data synchronization.',
          'Developed custom validation logic, business rules, and automated notifications to streamline payload processing across external interfaces.',
          'Collaborated with senior developers to troubleshoot, optimize, and document reusable automation routines and integration workflows.',
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
          'Engineered secure JWT authentication featuring short-lived access tokens, refresh token rotation, and password hashing.',
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
      'Server-Side Business Logic',
    ],
    footer: {
      leftText: 'Narrendran Poorangavel — Backend Developer Resume',
      rightText: 'Available for Immediate On-site Engagement',
    },
  },

  // 4. FRONTEND DEVELOPER (REACT / REDUX SAGA / TYPESCRIPT)
  'frontend-developer': {
    id: 'frontend-developer',
    targetRoleTitle: 'FRONTEND DEVELOPER · REACT / REDUX SAGA',
    customSummary: 'User-centric **Full-Stack Developer** with a specialized knack for **Frontend Engineering**, **React.js**, **TypeScript**, and **Redux Saga**. Experienced in transforming intricate backend business processes and ERP data flows into performant, pixel-perfect, and accessible user interfaces. Highly adept at complex form validations, side-effect management, dynamic state sync, and building reusable UI design systems with **MUI**.',
    skillsPriority: [
      {
        category: 'Frontend Core',
        skills: [
          'React.js',
          'TypeScript',
          'JavaScript (ES6+)',
          'HTML5 / CSS3',
          'Responsive Web Layouts',
          'Component Architecture',
        ],
      },
      {
        category: 'State & Async Flow',
        skills: [
          'Redux & Redux Toolkit',
          'Redux Saga (Generators & Effects)',
          'Context API',
          'Axios Client & Error Handling',
          'REST API Consumption',
          'Optimistic UI Updates',
        ],
      },
      {
        category: 'UI Components & Systems',
        skills: [
          'Material UI (MUI)',
          'Component Modularization',
          'Dynamic Data Grids & Tables',
          'Pagination & Filtering Systems',
          'Complex Multi-Step Form Controls',
        ],
      },
      {
        category: 'Programming & Web',
        skills: [
          'JavaScript (ES6+)',
          'TypeScript',
          'Java (Basics)',
          'Python (Basics)',
        ],
      },
      {
        category: 'Tooling & Environment',
        skills: [
          'Vite',
          'Git / GitHub',
          'Chrome DevTools & Performance Profiling',
          'Postman',
          'npm',
          'VS Code',
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
        role: 'Junior Developer',
        company: 'GWAYERP Tech Solutions',
        period: 'Dec 2024 – Oct 2025',
        location: 'Chennai, India',
        highlights: [
          'Architected and delivered end-to-end ERP modules (Sales Shipment, Services, Sales Return, Transit) integrating **React**, **TypeScript**, **Redux Saga**, **NestJS**, and **REST APIs**.',
          'Implemented scalable client-side state architectures with **Redux Saga** to handle complex asynchronous transactions, optimistic UI updates, and loading states.',
          'Built an interactive enterprise **Audit Trail timeline UI** displaying field-level difference diffs, user avatars, and status badges.',
          'Designed responsive, accessible data tables with dynamic pagination, column sorting, and custom filtering routines.',
        ],
      },
      {
        role: 'Zoho Developer Intern',
        company: 'Elite Tech Park',
        period: 'Mar 2024 – Jul 2024',
        location: 'Coimbatore, India',
        highlights: [
          'Constructed responsive client portal interfaces and interactive web forms with rigorous client-side validation logic.',
          'Optimized layout styling and ergonomic responsiveness across desktop, tablet, and mobile viewports.',
          'Collaborated with design and backend peers to translate functional specifications into clean, reusable UI components.',
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
          'REST APIs',
          'MongoDB',
          'JWT',
        ],
        highlights: [
          'Constructed comprehensive UI modules for shift configuration, employee profiles, department hierarchies, and designations.',
          'Engineered intuitive attendance tracking screens with interactive modals for overtime (OT) verification and manager approval workflows.',
          'Designed sleek, consistent UI layouts featuring dynamic pagination, collapsible side navigation, and standardized list, detail, and form views.',
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
      'REST Integration & UI Sync',
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
    customSummary: 'Domain-driven **Full-Stack Developer & ERP Systems Engineer** with practical mastery over **supply chain modules**, **multi-state stock validation**, **automated audit trails**, and **business process logic**. Experienced in delivering mission-critical workflows across Sales Shipments, Services, Returns, and Transit operations. Skilled in enforcing strict data integrity, designing scalable **MongoDB schemas**, and engineering automated field-level diff utilities for enterprise transparency.',
    skillsPriority: [
      {
        category: 'ERP Workflows & Core Logic',
        skills: [
          'Inventory & Order Workflows',
          'Sales Shipment & Returns Validation',
          'Transit Tracking & Goods In-Transit Logic',
          'Multi-State Inventory Accounting',
          'Audit Trail Architecture',
          'Business Rule Enforcement',
        ],
      },
      {
        category: 'Full-Stack Architecture',
        skills: [
          'React.js',
          'NestJS',
          'TypeScript',
          'Redux Saga',
          'RESTful API Endpoints',
          'JWT Authentication',
        ],
      },
      {
        category: 'Databases & Data Integrity',
        skills: [
          'MongoDB',
          'Mongoose ODM',
          'Field-Level Change Detection Utilities',
          'Payload Diffing Algorithms',
          'MySQL / Relational Schemas',
          'Transactional State Consistency',
        ],
      },
      {
        category: 'Programming & Web',
        skills: [
          'JavaScript (ES6+)',
          'TypeScript',
          'Deluge',
          'HTML5 / CSS3',
          'Python (Basics)',
          'Java (Basics)',
        ],
      },
      {
        category: 'DevOps & Tools',
        skills: [
          'Postman',
          'Axios',
          'Git / GitHub',
          'VS Code',
          'Agile Development',
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
        role: 'Junior Developer',
        company: 'GWAYERP Tech Solutions',
        period: 'Dec 2024 – Oct 2025',
        location: 'Chennai, India',
        highlights: [
          'Architected and delivered end-to-end ERP modules (Sales Shipment, Services, Sales Return, Transit) integrating **React**, **TypeScript**, **Redux Saga**, **NestJS**, and **REST APIs**.',
          'Implemented **Sales Shipment validation workflows** against Sales Orders, preventing excess shipments while synchronizing physical, committed, and in-transit stocks.',
          'Re-engineered inventory tracking (Physical, Committed, In-Transit, Quantity-on-Hand), updating MongoDB schemas and backend services.',
          'Engineered an enterprise **Audit Trail** with React, Redux Saga, NestJS, and MongoDB schemas for tracking user and module modifications.',
          'Built a reusable TypeScript utility for automated field-level change detection by comparing database records with incoming update payloads.',
        ],
      },
      {
        role: 'Zoho Developer Intern',
        company: 'Elite Tech Park',
        period: 'Mar 2024 – Jul 2024',
        location: 'Coimbatore, India',
        highlights: [
          'Automated end-to-end data entry and lead qualification pipelines utilizing Zoho CRM and custom Deluge scripting, reducing manual effort significantly.',
          'Engineered custom business logic, validation rules, and automated notifications to streamline CRM workflows and improve operational efficiency.',
          'Designed, tested, and deployed business process automation modules using Zoho Creator and CRM toolsets.',
          'Collaborated with senior developers to troubleshoot, optimize, and document reusable automation routines and integration workflows.',
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
          'Redux Saga',
          'NestJS',
          'REST APIs',
          'MongoDB',
          'Mongoose',
          'MUI',
        ],
        highlights: [
          'Architected a modular HRMS platform with granular Role-Based Access Control (RBAC), structural teams, departments, and department-integrated designations.',
          'Engineered attendance tracking and shift scheduling with automated overtime (OT) workflows that trigger confirmation prompts and approval requests when clocking in after regular sessions.',
          'Implemented end-to-end leave management, task delegation, and project tracking with standardized list, detail, and form views, dynamic pagination, and secure JWT authentication.',
        ],
      },
    ],
    coreCompetencies: [
      'ERP Workflow Engineering',
      'Inventory & Stock Validation',
      'Audit Trail Architecture',
      'REST API Integration',
      'Field-Level Change Detection',
    ],
    footer: {
      leftText: 'Narrendran Poorangavel — ERP Systems Engineer Resume',
      rightText: 'Available for Immediate On-site Engagement',
    },
  },
  'technical-support': undefined,
  'qa-engineer': undefined
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