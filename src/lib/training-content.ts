import { placeholders } from "./placeholders";

/** Training-only content — do not mix startup copy here */

export const trainingMeta = {
  eyebrow: "Cloud training",
  title: "Azure, Linux & DevOps cloud programs",
  intro:
    "Live online batches for fresh graduates and working engineers moving into cloud roles. Two tracks, six modules each, with hands-on labs, mentorship, and career support.",
  seoDescription:
    "Azure Linux administration training and DevOps cloud engineering courses — modules, labs, and career support from Tbesh Enterprise.",
  bannerImage: placeholders.trainingBanner,
  bannerLabel: "Training programs banner",
} as const;

export const trainingHowItWorks = {
  eyebrow: "Enrollment process",
  title: "From enquiry to your first live class",
  steps: [
    { step: "01", title: "Select your track", description: "Azure/Linux Administration or DevOps & Cloud Engineering — based on your career goal." },
    { step: "02", title: "Consultation call", description: "Discuss batch dates, fees, and lab access. Evening and weekend slots available." },
    { step: "03", title: "Start learning", description: "Attend live sessions, complete labs, and receive mentor feedback each module." },
  ],
} as const;

export const trainingWhy = {
  eyebrow: "Why Tbesh",
  title: "Training built for cloud careers",
  items: [
    { title: "Real labs", description: "Every module includes tasks you do on real cloud tools." },
    { title: "Clear modules", description: "Six modules per track. You always know what is next." },
    { title: "Career help", description: "Resume tips and interview practice for cloud roles." },
    { title: "Flexible batches", description: "Evening and weekend options for working people." },
  ],
} as const;

export const trainingPrograms = [
  {
    id: "azure-linux",
    slug: "azure-linux-administration",
    title: "Azure / Linux Administration",
    duration: "8–10 weeks",
    audience: "Freshers, support engineers, system admins",
    summary:
      "Learn Azure portal, VMs, storage, networking, RBAC, and Linux server admin. Prepare for cloud administrator jobs.",
    image: placeholders.programAzure,
    imageLabel: "Azure Linux track photo",
    highlights: [
      "Azure subscriptions and resource groups",
      "Linux users, permissions, and services",
      "VMs, disks, NSGs, and DNS",
      "Monitoring, backup, and cost control",
      "Troubleshooting in production style labs",
    ],
    modules: [
      { name: "Cloud basics", topics: "Azure regions, SLAs, and admin portal" },
      { name: "Linux for admins", topics: "Shell, packages, logs, SSH" },
      { name: "Compute & storage", topics: "VMs, disks, Blob storage" },
      { name: "Networking", topics: "VNet, subnets, NSG, public IP" },
      { name: "Identity & security", topics: "RBAC, Entra ID, Key Vault intro" },
      { name: "Operations", topics: "Alerts, backup, patching, runbooks" },
    ],
    careerOutcomes: ["Cloud Administrator", "Linux Admin", "Azure Support Engineer"],
  },
  {
    id: "devops-cloud",
    slug: "devops-cloud-engineering",
    title: "DevOps / Cloud Engineering",
    duration: "10–12 weeks",
    audience: "Developers and admins moving to DevOps",
    summary:
      "Learn Git, CI/CD, containers, IaC basics, and safe releases on Azure. Built for DevOps and platform engineer roles.",
    image: placeholders.programDevops,
    imageLabel: "DevOps track photo",
    highlights: [
      "Git workflows and pull requests",
      "CI/CD with GitHub Actions and Azure DevOps",
      "Docker and container hosting on Azure",
      "Infrastructure as Code intro (Bicep/Terraform)",
      "Secrets, environments, and rollback drills",
    ],
    modules: [
      { name: "DevOps basics", topics: "Culture, tooling, and delivery flow" },
      { name: "Git & collaboration", topics: "Branches, reviews, trunk workflow" },
      { name: "CI/CD pipelines", topics: "Build, test, deploy stages" },
      { name: "Containers", topics: "Docker, ACR, App Service, AKS intro" },
      { name: "Infrastructure as Code", topics: "Modules, state, environments" },
      { name: "Releases & monitoring", topics: "Logs, metrics, blue-green deploys" },
    ],
    careerOutcomes: ["DevOps Engineer", "Cloud Engineer", "Platform Engineer"],
  },
] as const;

export const trainingOutcomes = [
  "Lab access for each module",
  "Capstone deployment project",
  "Certificate of completion",
  "Interview question practice",
  "Batch recordings for revision",
] as const;

export const trainingFaq = [
  {
    q: "Who should join Azure/Linux training?",
    a: "Anyone targeting cloud admin or Linux admin roles. Basic computer skills are enough.",
  },
  {
    q: "Who should join DevOps training?",
    a: "Developers or admins who want CI/CD, containers, and automated deploy skills.",
  },
  {
    q: "Are classes online?",
    a: "Yes. Live online batches with recordings. Schedules are shared on the consultation call.",
  },
  {
    q: "How do I enroll?",
    a: "Submit a training enquiry through our website. A consultant will contact you within one business day to discuss batches and enrollment.",
  },
] as const;

export const trainingOverview = {
  eyebrow: "Program details",
  title: "What you will learn and how batches run",
  paragraphs: [
    "Each track follows six structured modules with weekly live classes, hands-on Azure and Linux labs, and assignments reviewed by working cloud engineers.",
    "You receive session recordings, a capstone project for your portfolio, and guidance on resumes and interviews for cloud and DevOps roles.",
    "Batches are scheduled for working professionals — including evening and weekend options after your consultation.",
  ],
} as const;

export const trainingAudience = {
  eyebrow: "Who it is for",
  title: "Ideal candidates for each track",
  groups: [
    { title: "Azure / Linux track", items: ["IT freshers", "Support engineers", "System administrators", "Career switchers to cloud admin"] },
    { title: "DevOps track", items: ["Developers moving to DevOps", "Admins learning CI/CD", "Platform engineer aspirants"] },
  ],
} as const;

export const trainingBatchFormat = {
  eyebrow: "Delivery",
  title: "How classes are delivered",
  items: [
    { label: "Mode", value: "Live online + recordings" },
    { label: "Labs", value: "Cloud lab tasks every module" },
    { label: "Reviews", value: "Mentor feedback on assignments" },
    { label: "Duration", value: "8–12 weeks per track" },
  ],
} as const;

export const trainingTools = {
  eyebrow: "Curriculum",
  title: "Technologies covered in the labs",
  list: ["Microsoft Azure", "Linux CLI & systemd", "Git & GitHub", "GitHub Actions / Azure DevOps", "Docker & ACR", "Bicep / Terraform intro", "Azure Monitor & alerts"],
} as const;

export const trainingAudienceImage = {
  image: placeholders.trainingBanner,
  imageLabel: "Cloud training lab",
} as const;

export const trainingToolsImage = {
  image: placeholders.programDevops,
  imageLabel: "DevOps lab environment",
} as const;

export const programPageSections = {
  overviewEyebrow: "Curriculum",
  overviewTitle: "Modules and learning outcomes",
  modulesEyebrow: "Syllabus",
  modulesTitle: "Module-by-module breakdown",
  skillsEyebrow: "Skills",
  skillsTitle: "Key competencies you will gain",
  careersEyebrow: "Careers",
  careersTitle: "Roles this program prepares you for",
} as const;

export const trainingSignup = {
  title: "Training enquiry",
  lead: "Share your background and preferred track. We will schedule a complimentary consultation to discuss batches, fees, and start dates.",
  trust: ["Free consultation", "Reply within 1 business day", "Azure or DevOps tracks"],
  sideImage: placeholders.contactTraining,
  sideImageLabel: "Training sign-up sidebar image",
} as const;
