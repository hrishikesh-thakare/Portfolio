export const SITE_URL = "https://hrishikeshthakare.dev";
export const CV_VIEW_URL =
  "https://drive.google.com/file/d/1x4rHSJsXmmza-mwbG5-HuTrrpVS3AmM7/view?usp=sharing";
export const CV_DOWNLOAD_URL =
  "https://drive.google.com/file/d/1x4rHSJsXmmza-mwbG5-HuTrrpVS3AmM7/view?usp=sharing";

export const personal = {
  name: "Hrishikesh Thakare",
  short: "HRISHIKESH",
  initials: "HT",
  title: "Full Stack Developer",
  location: "Mumbai, India",
  email: "hrishikeshthakare0809@gmail.com",
  phone: "+91 9594443558",
  linkedin: "linkedin.com/in/hrishikesh-thakare",
  summary:
    "Detail-oriented Full Stack Developer specializing in MERN, Next.js, and React Native. Experienced in building scalable web and mobile applications with REST APIs, databases, and modern development tools. Passionate about delivering production-ready solutions and continuously learning new technologies.",
};

export const projects = [
  {
    num: "01",
    title: "FitLedger – Personal Gym Workout Tracker",
    desc: "Routine-first fitness tracking app enabling users to create workout routines, log exercises (sets, reps, weight), track workout history, monitor body-weight progress, with seamless workout logging and progress visualization.",
    tags: ["React Native", "Expo", "Payload CMS", "PostgreSQL", "TypeScript"],
    year: "2026",
    slug: "fitledger",
    images: [
      "/images/projects/fitledger/preview1.jpg",
      "/images/projects/fitledger/preview2.jpg",
    ],
    href: "https://github.com/hrishikesh-thakare/Fit-Ledger",
    featured: true,
    company: "Personal Project",
    logo: "FL",
    logoUrl: "",
    logoColor: "#1a3a1a",
  },
  {
    num: "02",
    title: "Xpire - Smart Product Warranty Tracker",
    desc: "Mobile warranty-management app that helps users digitize receipts, track product warranty periods, receive timely reminders, and manage purchase records. Integrates intelligent receipt parsing, secure document storage, and AI-assisted warranty claim email generation.",
    tags: ["React Native", "Firebase", "Google Document AI", "Gemini API"],
    year: "2026",
    slug: "smart-product-warranty-tracker",
    images: [
      "/images/projects/smart-product-warranty-tracker/preview1.png",
      "/images/projects/smart-product-warranty-tracker/preview2.png",
    ],
    href: "https://github.com/hrishikesh-thakare/warranty-reminder-app",
    featured: true,
    company: "Hackathon Project",
    logo: "SW",
    logoUrl: "",
    logoColor: "#1a1a3a",
  },
  {
    num: "03",
    title: "Multilingual Text Summarizer",
    desc: "Web-based NLP system that automatically summarizes English text and translates it into Indian languages (Hindi and Marathi) for enhanced accessibility and comprehension. Uses TF-IDF-based extractive summarization with positional weighting and length normalization.",
    tags: ["React.js", "Flask", "NLTK", "Scikit-learn", "Googletrans API"],
    year: "2025",
    slug: "multilingual-text-summarizer",
    images: [
      "/images/projects/multilingual-text-summarizer/preview1.png",
      "/images/projects/multilingual-text-summarizer/preview2.png",
    ],
    href: "https://github.com/hrishikesh-thakare/Multilingual-Text-Summarizer",
    featured: true,
    company: "Academic Project",
    logo: "MT",
    logoUrl: "",
    logoColor: "#3a1a1a",
  },
  {
    num: "04",
    title: "ThePuranik – Blog Website",
    desc: "Manuscript-themed blog platform with a structured content management system featuring posts, tags, media management, and role-based access control, enabling non-technical users to create and publish content independently.",
    tags: ["Payload CMS", "Next.js", "TypeScript", "Tailwind CSS"],
    year: "2026",
    slug: "thepuranik",
    images: [
      "/images/projects/thepuranik/preview1.png",
      "/images/projects/thepuranik/preview2.png",
    ],
    href: "https://github.com/hrishikesh-thakare/puranic-blog",
    featured: true,
    company: "Internship Project",
    logo: "TP",
    logoUrl: "",
    logoColor: "#2a1a2a",
  },
];

import spriteGenixLogo from "../public/images/spritegenix-logo.jpg";

export const experience = [
  {
    role: "Full Stack Developer (Project-Based)",
    company: "SpriteGenix",
    location: "Remote",
    period: "Dec 2025 – Mar 2026",
    stack: ["Payload CMS", "Next.js", "TypeScript", "Tailwind CSS"],
    desc: "Built ThePuranik, a manuscript-themed blog platform using Next.js, TypeScript, Tailwind CSS, and Payload CMS. Configured Payload CMS collections, media management, and the admin interface, enabling seamless content creation and publishing. Implemented authentication and role-based access control to secure content management and administrative features.",
    logo: "SG",
    logoUrl: spriteGenixLogo,
    logoColor: "#1a3a1a",
    domain: "spritegenix.com",
  },
];

export const skills = [
  // Languages
  "Java",
  "SQL",
  "JavaScript",
  "TypeScript",

  // Frontend
  "React.js",
  "React Native",
  "Next.js",
  "Tailwind CSS",

  // Backend
  "Node.js",
  "Express.js",
  "Flask",
  "Payload CMS",
  "REST APIs",

  // Databases
  "PostgreSQL",
  "MongoDB",

  // Cloud & Tools
  "Firebase",
  "Supabase",
  "Vercel",
  "Render",
  "Git",
  "GitHub",
  "Postman",
  "Linux",
];

export const socials = [
  {
    label: "GitHub",
    href: "https://github.com/hrishikesh-thakare",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/hrishikesh-thakare",
    icon: "linkedin",
  },
];

export const GITHUB_USERNAME = "hrishikesh-thakare";
