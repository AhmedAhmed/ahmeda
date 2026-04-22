interface ExperienceItemProps {
    title: string;
    description: string;
    location: string;
    date: string;
    role: string;
    type: string;
    bullets: string[];
    url?: string;
}

export const ExperienceItems: ExperienceItemProps[] = [
  {
    title: "Prizmsol",
    description:
      "Designed and built a client-facing AI-powered search portal with real-time results, secure authentication, and cross-platform mobile support. Responsible for full architecture, documentation, and deployment.",
    location: "Toronto, ON",
    date: "Sep 2023 - Present",
    role: "Lead Software Engineer",
    type: "Remote",
    url:  "https://www.prizmsol.com",
    bullets: [
      "Developed SPA frontend in Next.js with REST API integration to Supabase and Postgres",
      "Authored technical specifications, system design documents, and implementation guides",
      "Implemented secure data handling through authenticated forms and protected API routes",
      "Conducted unit, integration, and regression testing; tracked and resolved defects",
      "Ensured WCAG 2.x AA and WAI-ARIA accessibility compliance across web and mobile",
      "Built cross-platform mobile apps in React Native (iOS & Android)",
      "Developed native iOS modules (Swift, Objective-C) and Android features (Java)",
      "Managed deployment (Vercel, Railway), architecture, risk assessment, and QA documentation",
    ],
  },
  {
    title: "Hexus AI",
    description:
      "Led a rewrite and maintenance of the web application using Next.js server components, focusing on accessibility and performance for enterprise users.",
    location: "Remote (San Francisco)",
    date: "Oct 2024 - Feb 2025",
    role: "Frontend Engineer",
    type: "Remote",
    url: "https://www.hexus.ai",
    bullets: [
      "Redesigned frontend with WCAG-compliant accessible components",
      "Improved Core Web Vitals via SSR and code splitting",
      "Launched AI chatbot (Hexus Hive) with full component architecture and QA oversight",
      "Collaborated with stakeholders on requirements, scope, and implementation",
    ],
  },
  {
    title: "Como",
    description:
      "Led frontend and mobile development for a customer-facing registration portal and React Native app integrated with a .NET backend.",
    location: "Dubai, UAE",
    date: "Aug 2022 - Sep 2023",
    role: "Team Lead Engineer (Frontend / Mobile)",
    url: "https://www.comosense.com/",
    type: "On-site",
    bullets: [
      "Architected portal using Next.js, Tailwind CSS, and REST APIs",
      "Stabilized React Native app by 90% through refactoring and bug resolution",
      "Maintained system design docs, integration specs, and onboarding guides",
      "Developed React Native features and native iOS/Android modules",
      "Led accessibility reviews ensuring WCAG and WAI-ARIA compliance",
      "Mentored developers and participated in Agile sprint planning",
    ],
  },
  {
    title: "Emirates Airlines",
    description:
      "Core contributor to a large-scale B2B/B2C portal serving millions of users globally.",
    location: "Dubai, UAE",
    date: "Apr 2019 - Feb 2022",
    role: "Senior Frontend Engineer",
    type: "On-site",
    url: "https://www.emirates.com/ca/english/dubai-experience/",
    bullets: [
      "Owned UI development, accessibility fixes, and frontend bug resolution",
      "Integrated multiple REST APIs (JSON/XML) for booking and search flows",
      "Authored technical documentation and onboarding guides",
      "Performed root cause analysis for production issues and outages",
      "Worked across React, Backbone.js, jQuery, and Node.js in Agile sprints",
      "Trained new developers on internal frameworks and architecture",
    ],
  },
  {
    title: "Walmart Labs",
    description:
      "Built and maintained scalable frontend features for high-traffic consumer applications.",
    location: "Toronto, ON",
    date: "Sep 2017 - Apr 2019",
    role: "Senior Frontend Engineer",
    type: "On-site",
    url: "https://www.walmart.ca/",
    bullets: [
      "Developed reusable React components with Redux and REST API integration",
      "Conducted performance testing and documented optimization findings",
      "Collaborated across frontend, backend, and QA teams in Agile environments",
    ],
  },
  {
    title: "ProntoShop",
    description:
      "Developed frontend and mobile applications for a cloud computing startup.",
    location: "Toronto, ON",
    date: "July 2018 - April 2019",
    role: "Lead Developer",
    type: "On-site",
    url: "http://www.prontoshop.ca",
    bullets: [
      "Built SPA using ReactJS and React Native",
      "Integrated Node.js and Go-based REST APIs",
      "Authored API integration documentation",
    ],
  },
  {
    title: "BarberNet",
    description:
      "Delivered a full React Native mobile application from design to production.",
    location: "Toronto, ON",
    date: "Oct 2016 - Apr 2017",
    role: "Lead Frontend Developer",
    type: "On-site",
    bullets: [
      "Built and shipped iOS and Android app from Photoshop mockups",
      "Implemented camera and image processing using native APIs",
    ],
  },
  {
    title: "Eventburst",
    description:
      "Developed web and mobile applications with modern frontend architecture.",
    location: "Toronto, ON",
    date: "Jan 2016 - Apr 2016",
    role: "Lead Frontend Engineer",
    type: "On-site",
    bullets: [
      "Built SPA using React (Flux), SASS, and Webpack",
      "Developed mobile frontend in React Native",
      "Designed UI/UX layouts and responsive interfaces",
    ],
  },
  {
    title: "Pearson Embanet",
    description:
      "Provided frontend and platform support across multiple LMS systems.",
    location: "Toronto, ON",
    date: "Oct 2014 - Jun 2016",
    role: "Frontend Support (HTML/CSS/JS)",
    type: "On-site",
    url: "https://www.pearson.com/en-us/higher-education/products-services/mylab-and-mastering-login.html",
    bullets: [
      "Resolved frontend issues across Blackboard, Moodle, and Canvas",
      "Handled user access issues and data integrity investigations",
      "Managed escalations for server downtime and platform outages",
    ],
  },
];
