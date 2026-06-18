import { placeholders } from "./placeholders";

export const DEFAULT_LEAD_EMAIL = "tbesh@gmail.com";

export const site = {
  name: "Tbesh",
  legalName: "Tbesh Enterprise",
  tagline: "Linux System Administrator · Azure Administrator · Azure DevOps training.",
  description:
    "Tbesh Enterprise delivers Linux System Administrator, Azure Administrator, and Azure DevOps training — plus managed cloud infrastructure support for growing startups.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://tbesh.com",
  contactEmail: process.env.CONTACT_EMAIL ?? DEFAULT_LEAD_EMAIL,
  leadNotifyEmail: process.env.LEAD_NOTIFY_EMAIL ?? DEFAULT_LEAD_EMAIL,
  phone: "+1 (469) 592-1455",
  location: "Online batches & remote support",
} as const;

export const seoKeywords = [
  "Azure training",
  "Linux administration course",
  "DevOps training",
  "startup cloud support",
  "Tbesh Enterprise",
] as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/training", label: "Training" },
  { href: "/startup-support", label: "Startup Support" },
  { href: "/about", label: "About" },
] as const;

export const contactNav = {
  href: "/contact",
  label: "Contact Us",
} as const;

export const heroSlides = [
  {
    id: "azure-linux",
    eyebrow: "Training",
    title: "Azure & Linux Administration",
    lead: "Hands-on Azure and Linux administration for cloud administrator and system engineer roles — live online batches with practical labs.",
    cta: "View training program",
    href: "/training/azure-linux-administration",
    image: placeholders.heroAzure,
    imageAlt: "Azure and Linux administration training",
    imageLabel: "Azure / Linux training hero image",
  },
  {
    id: "devops",
    eyebrow: "Training",
    title: "DevOps & Cloud Engineering",
    lead: "Hands-on Git, CI/CD, containers, and Azure deployment pipelines — structured for DevOps and platform engineering careers with practical labs.",
    cta: "View DevOps program",
    href: "/training/devops-cloud-engineering",
    image: placeholders.heroDevops,
    imageAlt: "Azure DevOps toolchain and cloud adoption framework",
    imageLabel: "Azure DevOps toolchain hero",
  },
  {
    id: "startup",
    eyebrow: "Startup Support",
    title: "Cloud Infrastructure Support",
    lead: "Production-ready Azure environments, monitoring, and L1/L2 support for startups — your team builds product, we keep infrastructure reliable.",
    cta: "View support services",
    href: "/startup-support",
    image: placeholders.heroStartup,
    imageAlt: "Cloud computing and data transfer technology concept",
    imageLabel: "Cloud infrastructure support hero",
  },
] as const;

export const trainingOutlines = {
  eyebrow: "Training outlines",
  title: "Everything you need to launch your cloud career",
  items: [
    "Career Guidance",
    "Hands-on Learning",
    "Flexibility For Your Schedule",
    "Networking Opportunities",
  ],
} as const;

export const homeIntro = {
  eyebrow: "Tbesh Enterprise",
  title: "Cloud skills for professionals. Reliable Azure ops for startups.",
  lead:
    "We help professionals build job-ready Azure, Linux, and DevOps expertise — and we help startups run secure, well-monitored cloud infrastructure without the cost of a full internal ops team.",
  image: placeholders.intro,
  imageLabel: "Cloud engineering workspace",
  points: [
    "Instructor-led training with live labs, capstone projects, and interview preparation for cloud roles.",
    "Managed Azure support: architecture, L1/L2 incidents, patching, backups, and founder-friendly reporting.",
    "Practitioners with production experience — focused on skills and uptime you can demonstrate to employers and investors.",
  ],
} as const;

export const homeServices = {
  eyebrow: "Our services",
  title: "Cloud training and infrastructure support",
  lead: "Choose the path that fits your goals. Explore program details below or speak with our team for a tailored recommendation.",
  training: {
    title: "Cloud Training",
    tagline: "Azure · Linux · DevOps",
    description:
      "Live online programs — Azure/Linux Administration (8–10 weeks) and DevOps & Cloud Engineering (10–12 weeks), each with six modules and hands-on labs.",
    points: [
      "6 modules per track with hands-on labs",
      "Azure portal, Linux CLI, CI/CD, containers, IaC basics",
      "Capstone project and interview preparation",
      "Evening and weekend-friendly schedules",
    ],
    href: "/training",
    image: placeholders.serviceTraining,
    imageLabel: "Training service photo",
  },
  startup: {
    title: "Startup Support",
    tagline: "Azure infrastructure & operations",
    description:
      "End-to-end cloud setup and ongoing operations for startups — monitoring, incident response, security baselines, and weekly executive summaries.",
    points: [
      "End-to-end cloud setup (dev, staging, production)",
      "L1 triage and L2 deep support with runbooks",
      "Server maintenance, backups, and cost reviews",
      "Scale support up or down with your growth stage",
    ],
    href: "/startup-support",
    image: placeholders.serviceStartup,
    imageLabel: "Startup support service photo",
  },
} as const;

export const homeTrainingPreview = {
  eyebrow: "Training programs",
  title: "Industry-aligned cloud curricula",
  lead: "Two career-focused tracks with six modules each, live instruction, and practical lab work.",
  programs: [
    {
      name: "Azure / Linux Administration",
      summary: "Azure VMs, networking, RBAC, Linux administration, monitoring, and production troubleshooting.",
      href: "/training/azure-linux-administration",
      image: placeholders.programAzure,
      imageLabel: "Azure Linux program photo",
    },
    {
      name: "DevOps / Cloud Engineering",
      summary: "Git workflows, CI/CD pipelines, containers on Azure, infrastructure as code, and safe release practices.",
      href: "/training/devops-cloud-engineering",
      image: placeholders.programDevops,
      imageLabel: "Isometric DevOps and cloud engineering illustration",
    },
  ],
} as const;

export const homeStartupPreview = {
  eyebrow: "Startup support",
  title: "Infrastructure your product team can rely on",
  lead: "End-to-end Azure operations so founders and engineers can stay focused on building.",
  items: [
    {
      title: "Cloud infrastructure",
      summary: "Environment design, DNS, SSL, databases, and security baselines on Azure.",
      image: placeholders.cloudInfra,
      imageLabel: "Cloud infrastructure photo",
    },
    {
      title: "L1 & L2 support",
      summary: "Alert triage, ticket handling, access management, escalation, and weekly founder updates.",
      image: placeholders.l1l2,
      imageLabel: "L1/L2 support photo",
    },
    {
      title: "Server & cloud ops",
      summary: "VM lifecycle, patching, performance tuning, and optional on-call for product launches.",
      image: placeholders.servers,
      imageLabel: "Server operations photo",
    },
  ],
} as const;

export const homeImpact = {
  image: placeholders.team,
  imageLabel: "DevOps and cloud engineering",
} as const;

export const homeProcess = {
  eyebrow: "Getting started",
  title: "A straightforward path to working with us",
  steps: [
    { title: "Explore your options", description: "Review training programs or infrastructure services and note what fits your timeline and goals." },
    { title: "Book a consultation", description: "Speak with our team about scope, schedule, and investment. The initial call is complimentary." },
    { title: "Begin your engagement", description: "Join your batch or start onboarding with documentation, access, and a clear delivery plan." },
  ],
} as const;

export const homeWhy = {
  eyebrow: "Why Tbesh",
  title: "Built for real-world cloud work",
  items: [
    { title: "Hands-on learning", description: "Every training module includes lab exercises on live cloud environments." },
    { title: "Clear communication", description: "Progress updates and ops reports in plain language — no unnecessary jargon." },
    { title: "Dedicated specialists", description: "Training is led by experienced instructors; support is delivered by infrastructure engineers." },
    { title: "Proven track record", description: "120+ professionals trained, 45+ projects delivered, 30+ startups supported." },
  ],
} as const;

export const homeCta = {
  title: "Ready to start your cloud career?",
  description:
    "Join our next Linux System Administrator batch — Azure Administrator and Azure DevOps tracks available. Reach out and we will connect you within one business day.",
  trainingButton: "Join Now",
  startupButton: "Enquire about support",
} as const;

export const about = {
  eyebrow: "About Tbesh",
  title: "Empowering talent and strengthening cloud operations",
  lead:
    "Tbesh Enterprise combines professional cloud training with managed infrastructure services — helping individuals advance their careers and helping startups scale with confidence on Azure.",
  mission:
    "Our mission is to deliver measurable outcomes: job-ready skills for training graduates, and stable, well-documented cloud operations for the startups we support.",
  image: placeholders.about,
  imageLabel: "Data center and cloud infrastructure",
  storySection: {
    eyebrow: "Our story",
    title: "From certification courses to production-ready cloud work",
  },
  storyImage: placeholders.aboutStory,
  storyImageLabel: "Software development and cloud training",
  story:
    "Tbesh started with a clear goal: close the gap between certification-style cloud courses and the day-to-day work employers expect in Azure and Linux operations. Today we train professionals for cloud and DevOps roles while running production environments for growing startups.",
  values: [
    {
      title: "Clarity",
      description: "Transparent scope, timelines, and expectations before any engagement begins.",
      image: placeholders.valueClarity,
    },
    {
      title: "Practice",
      description: "Real-world labs in training; production-grade runbooks and monitoring in support.",
      image: placeholders.valuePractice,
    },
    {
      title: "Responsiveness",
      description: "Every enquiry receives a thoughtful reply within one business day.",
      image: placeholders.valueResponsiveness,
    },
  ],
  stats: [
    { value: "120+", label: "Professionals trained" },
    { value: "45+", label: "Projects delivered" },
    { value: "30+", label: "Startups supported" },
    { value: "98%", label: "Client satisfaction" },
  ],
  highlights: [
    "Hands-on labs in every training module",
    "Documented runbooks for startup clients",
    "Fast response on all enquiries",
    "Simple English — no jargon overload",
  ],
} as const;

export const contactHub = {
  title: "Get in touch",
  lead: "Tell us whether you are interested in cloud training or managed infrastructure support. We will route your enquiry to the right team.",
  image: placeholders.contact,
  imageLabel: "Cloud and DevOps consultation",
  training: {
    title: "Training enquiries",
    description: "Azure/Linux administration and DevOps engineering programs for individuals and teams.",
    href: "/contact/training",
    image: placeholders.contactTraining,
    imageLabel: "Training enquiry photo",
    cta: "Enquire about training",
  },
  startup: {
    title: "Infrastructure support enquiries",
    description: "Azure architecture, monitoring, L1/L2 support, and ongoing cloud operations for startups.",
    href: "/contact/startup-support",
    image: placeholders.contactStartup,
    imageLabel: "Software architecture and cloud infrastructure",
    cta: "Enquire about support",
  },
} as const;

export const aboutContact = {
  eyebrow: "Contact",
  title: "Speak with our team",
  description:
    "Whether you are planning a training batch or need infrastructure support for your startup, we are happy to discuss requirements, timelines, and next steps.",
  trainingButton: "Training enquiries",
  startupButton: "Support enquiries",
} as const;

export const aboutFaq = {
  eyebrow: "FAQ",
  title: "Frequently asked questions",
  description: "Common questions about our training programs and infrastructure support services.",
  trainingHeading: "Training programs",
  startupHeading: "Startup infrastructure support",
  trainingCta: "Enquire about training",
  startupCta: "Enquire about support",
} as const;
