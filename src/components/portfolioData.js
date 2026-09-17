export const profile = {
  name: 'Divyansh Chaudhary',
  email: 'divi.v@outlook.com',
  phone: '+91 73829 71692',
  linkedin: 'https://www.linkedin.com/in/divyansh-chaudhary-887744119/',
  github: 'https://github.com/divyans7',
  portrait: '/portrait.jpg',
  summary: 'CSPO and Senior Business Analyst with 6+ years of experience connecting product strategy, user needs, and agile delivery across SaaS, B2B, and B2C products. I turn complex business problems into clear roadmaps, actionable backlogs, and releases that deliver measurable value.'
};

export const products = [
  {
    id: 'impexdocs', name: 'ImpexDocs', category: 'B2B SaaS', region: 'US · EMEA · APAC · AU',
    headline: 'Making global trade less complex.',
    description: 'A cloud-based platform simplifying export documentation, compliance, and logistics for businesses and service providers.',
    metric: '+30%', metricLabel: 'user engagement', color: 'teal', mark: 'I',
    role: 'Senior Business Analyst · Broadway Infotech',
    challenge: 'Translate complex export workflows and requirements from global clients into usable, release-ready capabilities.',
    contribution: 'Served as the primary client interface, managed 20+ agile sprints and a 200-item backlog, coordinated UAT and defect triage, and built onboarding documentation.',
    outcome: 'Drove a 30% increase in user engagement while supporting launches across four global regions.',
    tags: ['Backlog prioritization', 'Global stakeholders', 'UAT']
  },
  {
    id: 'venuemonk', name: 'Venuemonk', category: 'B2C Marketplace', region: 'India · UAE',
    headline: 'From venue discovery to a confident booking.',
    description: 'An event-booking platform connecting customers with venues, from browsing and shortlisting to reservation.',
    metric: '+150%', metricLabel: 'user growth', color: 'peach', mark: 'V',
    role: 'Assistant Product Manager · PurplePatch Technologies',
    challenge: 'Simplify the venue discovery and booking journey for customers in India and the UAE.',
    contribution: 'Owned roadmap planning and MVP release management. Used research, Figma prototypes, A/B tests, and feedback to shape the experience alongside engineering and QA.',
    outcome: 'Achieved 150% user growth and an 18% increase in conversion rates.',
    tags: ['MVP strategy', 'User research', 'Experimentation']
  },
  {
    id: 'axis-max-life', name: 'Axis Max Life', category: 'Fintech', region: 'India',
    headline: 'Bringing insurance journeys onto M-Pro.',
    description: 'Functional migration from mSales to M-Pro, aligning insurance journeys, APIs, and release readiness.',
    metric: '17', metricLabel: 'insurance products migrated', color: 'blue', mark: 'A',
    role: 'Associate Business Analyst · To The New',
    challenge: 'Move insurance product functionality to M-Pro while coordinating requirements, dependencies, and acceptance.',
    contribution: 'Led functional migration requirements for 17 products, defined dynamic redirection architecture and API specifications, and led UAT defect triage.',
    outcome: 'Enabled deployment through coordinated planning, stakeholder communication, and launch validation.',
    tags: ['Platform migration', 'API specifications', 'Release readiness']
  },
  {
    id: 'quivio', name: 'Quivio', category: 'B2B SaaS', region: 'Global',
    headline: 'A clearer view of multi-site operations.',
    description: 'A white-label analytics platform for car wash owners to track sales, labor hours, and performance across multiple sites in real time.',
    metric: 'Real-time', metricLabel: 'operational visibility', color: 'blue', mark: 'Q',
    role: 'Product delivery contribution',
    challenge: 'Give car wash owners visibility into performance across multiple locations.',
    contribution: 'Contributed to a white-label platform that brings sales and labor metrics into a shared operational view.',
    outcome: 'Delivered real-time analytics for multi-site car wash operations.',
    tags: ['KPI dashboards', 'Analytics', 'Multi-site operations']
  },
  {
    id: 'fibwave', name: 'Fibwave', category: 'Fintech', region: 'India · UAE',
    headline: 'Turning market signals into decision support.',
    description: 'A trading platform using Fibonacci analysis and algorithmic strategies to help traders and institutions identify market trends.',
    metric: 'Fintech', metricLabel: 'algorithmic trading product', color: 'peach', mark: 'F',
    role: 'Product development contribution',
    challenge: 'Support traders and institutions in interpreting market trends through algorithmic analysis.',
    contribution: 'Contributed to development of trading algorithms and a platform focused on market trend identification and diversified sectors.',
    outcome: 'Delivered a product for traders and institutions in India and the UAE; investment returns are not represented here.',
    tags: ['Market analysis', 'Trading workflows', 'Product development']
  }
];

export const experience = [
  { company: 'To The New', title: 'Associate Business Analyst', dates: 'Oct 2025 — Aug 2026', location: 'Noida, India', description: 'Client-facing delivery for Axis Max Life fintech products, from requirements and API documentation to sprint planning, UAT, and launch.', highlight: 'Functional migration of 17 insurance products to M-Pro' },
  { company: 'Appinventiv', title: 'Senior Business Analyst (Product Focus)', dates: 'Jul 2024 — Jan 2025', location: 'Noida, India', description: 'Led discovery, BRDs, user stories, wireframes, stakeholder demos, and acceptance with cross-functional Scrum teams.', highlight: '98% scope adherence and on-time releases' },
  { company: 'Broadway Infotech', title: 'Senior Business Analyst (Product Focus)', dates: 'Oct 2021 — Jan 2024', location: 'Noida, India', description: 'Primary client interface for ImpexDocs across global regions. Managed a 200-item backlog, 20+ sprints, UAT, and onboarding knowledge.', highlight: '30% increase in user engagement' },
  { company: 'PurplePatch Technologies', title: 'Assistant Product Manager · Venuemonk', dates: 'Dec 2019 — Oct 2021', location: 'Gurugram, India', description: 'Owned MVP roadmaps and releases, pairing research and A/B testing with prototypes, sprint planning, and user acceptance.', highlight: '150% user growth · 18% increase in conversion' },
  { company: 'AT&T', title: 'Associate Operations Executive', dates: 'Aug 2018 — Aug 2019', location: 'Gurugram, India', description: 'Managed enterprise SLAs and escalations, connecting delivery and post-sales teams through Salesforce.', highlight: '99.5% SLA compliance · 20% shorter service cycles' },
  { company: 'Accenture', title: 'Customer Service Associate', dates: 'Aug 2017 — Jul 2018', location: 'Gurugram, India', description: 'Used data-driven alerts to identify transaction risk and mentored new hires as a subject matter expert.', highlight: '15% fewer fraud cases · 25% higher team productivity' }
];

export const capabilities = [
  { number: '01', title: 'Discover the right problem', description: 'Connect user needs with business context before defining the solution.', skills: ['Discovery & research', 'Journey mapping', 'Gap analysis', 'Competitive analysis'] },
  { number: '02', title: 'Shape the product direction', description: 'Turn ambiguity into a focused roadmap with clear measures of success.', skills: ['MVP definition', 'Roadmap planning', 'Feature prioritization', 'KPI definition'] },
  { number: '03', title: 'Bring teams to the finish line', description: 'Build shared understanding from the first user story to the final release.', skills: ['Agile delivery', 'Stakeholder alignment', 'Backlog management', 'UAT & releases'] },
  { number: '04', title: 'Explore what comes next', description: 'Apply an informed, ethical lens to emerging AI capabilities and automation.', skills: ['Generative AI', 'Prompt engineering', 'RAG workflows', 'Agentic AI'] }
];
