import { placeholders } from "./placeholders";

/** Startup support-only content — do not mix training copy here */

export const startupMeta = {
  eyebrow: "Infrastructure support",
  title: "Azure operations for startups",
  intro:
    "We partner with founders and engineering teams to design, run, and support production Azure workloads — so you can ship product without building a full in-house SRE function on day one.",
  seoDescription:
    "Startup cloud support — end-to-end Azure infrastructure, L1 L2 tickets, and server maintenance from Tbesh Enterprise.",
  bannerImage: placeholders.startupBanner,
  bannerLabel: "Startup support banner",
} as const;

export const startupHowItWorks = {
  eyebrow: "Engagement model",
  title: "How we onboard and support your stack",
  steps: [
    { step: "01", title: "Discovery session", description: "We review your architecture, compliance needs, and uptime targets in a complimentary call." },
    { step: "02", title: "Implementation plan", description: "You receive environment diagrams, access controls, monitoring, and a shared support channel." },
    { step: "03", title: "Managed operations", description: "Our engineers handle alerts, tickets, patching, and weekly status updates in plain English." },
  ],
} as const;

export const startupWhy = {
  eyebrow: "Why Tbesh",
  title: "Why startups choose us",
  items: [
    { title: "No full SRE hire needed", description: "Get senior-level ops before you can afford a full-time hire." },
    { title: "Clear documentation", description: "Runbooks and diagrams — not only one person’s memory." },
    { title: "Faster incidents", description: "L1 triage and L2 deep fixes with defined escalation." },
    { title: "Cost-aware Azure", description: "Regular reviews to avoid surprise cloud bills." },
  ],
} as const;

export const startupOfferingsSection = {
  eyebrow: "Capabilities",
  title: "Core infrastructure services",
  lead: "Modular support you can adopt together or phase in as your startup matures.",
} as const;

export const startupOfferings = [
  {
    id: "cloud-infra",
    title: "Cloud infrastructure (end to end)",
    description:
      "Design and build your Azure environment: networks, DNS, SSL, databases, and prod/staging split.",
    image: placeholders.cloudInfra,
    imageLabel: "Cloud infrastructure photo",
    includes: [
      "Architecture and security baseline",
      "Dev, staging, and production setup",
      "IaC templates and handover docs",
      "Backup and logging configuration",
    ],
  },
  {
    id: "l1-l2",
    title: "L1 & L2 support",
    description:
      "First-line alert handling and second-line fixes for logs, patches, and access issues.",
    image: placeholders.l1l2,
    imageLabel: "L1/L2 support photo",
    includes: [
      "Shared Slack, Teams, or email queue",
      "SLAs for critical vs normal tickets",
      "Escalation matrix and runbooks",
      "Weekly summary for founders",
    ],
  },
  {
    id: "server-cloud",
    title: "Server & cloud support",
    description:
      "Daily care for VMs and PaaS: updates, certs, scaling, and performance checks.",
    image: placeholders.servers,
    imageLabel: "Server support photo",
    includes: [
      "VM lifecycle and patch windows",
      "Database health checks",
      "Rightsizing and cost reports",
      "Optional on-call for launches",
    ],
  },
] as const;

export const startupBenefits = [
  "Stable production during growth spikes",
  "Founders spend time on product, not firefighting",
  "Support scales up or down with your stage",
  "Plain-English updates — no confusing jargon",
] as const;

export const startupIdealFor = [
  "Early startups on Azure or hybrid cloud",
  "Teams without a dedicated DevOps hire",
  "Founders who need L1/L2 without agency fees",
] as const;

export const startupFaq = [
  {
    q: "What is included in startup support?",
    a: "Cloud setup, monitoring, L1/L2 tickets, and server maintenance. Scope is agreed on the discovery call.",
  },
  {
    q: "Do you offer training as part of support?",
    a: "Training is delivered by our learning team. Infrastructure support is handled by our operations team. Both are available through Tbesh — your consultant will guide you to the right service.",
  },
  {
    q: "How fast do you respond to incidents?",
    a: "SLAs are defined during onboarding. Critical issues get priority handling.",
  },
  {
    q: "How do I request support?",
    a: "Submit an infrastructure support enquiry on our website. We will arrange a discovery call within one business day.",
  },
] as const;

export const startupOverview = {
  eyebrow: "Service overview",
  title: "What managed infrastructure support includes",
  paragraphs: [
    "Tbesh acts as your extended cloud operations team on Microsoft Azure — from initial architecture through daily production care.",
    "We set up dev, staging, and production environments, configure monitoring and backups, and respond to incidents with documented runbooks.",
    "Founders receive clear weekly summaries covering uptime, tickets resolved, risks, and cost — without needing to decode technical jargon.",
  ],
} as const;

export const startupTiers = {
  eyebrow: "Support levels",
  title: "Typical phases of engagement",
  tiers: [
    { name: "Setup phase", description: "Architecture, dev/staging/prod, DNS, SSL, IaC templates, documentation handover." },
    { name: "Ongoing L1", description: "Alert triage, restarts, access requests, known-issue runbooks." },
    { name: "Ongoing L2", description: "Log analysis, patches, vendor coordination, performance tuning." },
  ],
} as const;

export const startupOnboarding = {
  eyebrow: "Onboarding",
  title: "Information to get started",
  items: [
    "Current cloud provider and rough architecture (even a diagram sketch)",
    "List of critical services and uptime expectations",
    "Preferred channel: Slack, Teams, or email",
    "Point of contact on your side for approvals",
  ],
} as const;

export const startupDeliverables = {
  eyebrow: "Deliverables",
  title: "What your team receives each month",
  items: [
    "Architecture and environment documentation",
    "Runbooks for common incidents",
    "Weekly ops summary (uptime, tickets closed, risks)",
    "Monthly cost and rightsizing notes",
  ],
} as const;

export const startupTiersImage = {
  image: placeholders.startupBanner,
  imageLabel: "Cloud infrastructure planning",
} as const;

export const startupOnboardingImage = {
  image: placeholders.contactStartup,
  imageLabel: "Software architecture and cloud systems",
} as const;

export const startupSignup = {
  title: "Infrastructure support enquiry",
  lead: "Describe your cloud environment and support needs. We will arrange a complimentary discovery call to define scope, SLAs, and engagement options.",
  trust: ["Free discovery call", "Reply within 1 business day", "Scope agreed before start"],
  sideImage: placeholders.contactStartup,
  sideImageLabel: "Startup sign-up sidebar image",
} as const;
