import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";
import Image from 'next/image';

export const DATA = {
  name: "Mohammed Husamuddin",
  initials: "MHD",
  url: "https://www.mohusam.com",
  location: "Dubai, U.A.E",
  locationLink: "https://www.google.com/maps/place/Dubai",
  description:
    "Senior AI Engineer at Deriv. I lead applied AI products, from tool-using agents to real-time market intelligence.",
  summary:
    "I own product direction and engineering delivery for applied AI platforms at Deriv. My work spans real-time market intelligence, AI-assisted lifecycle engagement, and internal campaign automation. I work with lean engineering teams and domain experts to turn prototypes into measurable products.\n\nRecent work includes scaling TradersView to 500K unique visitors and over 1M all-time visits, improving Praxis conversions per 1,000 sends from 19 to 59 in a reported week, and automating campaign preparation through TriggerHub.",
  avatarUrl: "/me.jpg",
  skills: [
    "Python",
    "TypeScript",
    "SQL",
    "AI Agents",
    "Tool Use",
    "Sandboxed Execution",
    "LangGraph",
    "Retrieval-Augmented Generation",
    "Vector Search",
    "Next.js",
    "React",
    "FastAPI",
    "WebSockets",
    "PostgreSQL",
    "Redis",
    "Celery",
    "Kubernetes",
    "BigQuery",
    "Experimentation",
    "Product Ownership",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://ihusam.tech/", icon: NotebookIcon, label: "Blog" },
    { href: "https://projects.ihusam.tech/", icon: CodeIcon, label: "Projects" },
    { href: "/Mohammed Husamuddin Resume.pdf", icon: PencilLine, label: "Resume" },
  ],
  contact: {
    email: "workforhusam@gmail.com",
    tel: "+971526775009",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/HUSAM-07",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mohammedhusamuddin/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/HU_SAM007",
        icon: Icons.x,

        navbar: true,
      },
      Newsletter: {
        name: "Newsletter",
        url: "https://valuevault.beehiiv.com/",
        icon: Icons.newsletter,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Deriv",
      href: "https://www.deriv.com/",
      badges: [],
      location: "Dubai, UAE",
      title: "AI Engineering (now Senior AI Engineer / Applied AI Product Lead)",
      logoUrl: "/deriv.jpg",
      start: "February 2025",
      end: "Present",
      description: [
        "Own product direction and technical delivery for TradersView, Praxis, and TriggerHub.",
        "Scaled TradersView to 500K unique visitors and over 1M all-time visits with a lean core team of approximately 2–3 engineers.",
        "Built AI-assisted lifecycle and campaign systems that improved conversion efficiency and saved an estimated 8–18 staff-hours per week.",
      ],
    },
    {
      company: "Brio",
      href: "https://www.briotech.com/",
      badges: [],
      location: "Hyderabad, India",
      title: "Software Engineering Intern",
      logoUrl: "/brio.jpg",
      start: "July 2024",
      end: "August 2024",
      description: [
        "Built cloud pricing and AI-assisted sales tools with Python, Streamlit, Azure APIs, and GPT-4.",
        "The lead generation application automated a reported 80% of the process and increased sales productivity 40%.",
      ],
    },
    {
      company: "PropReturns",
      href: "https://www.propreturns.com/",
      badges: [],
      location: "Remote",
      title: "Full Stack & Data Science Engineer",
      logoUrl: "/propreturns.jpg",
      start: "June 2023",
      end: "Aug 2023",
      description:
        "Built a Python data pipeline for scraped real-estate data, an OpenCV image processing app, and reusable UI components. Image preprocessing time fell 50%.",
    },
    {
      company: "Google Developer Student Clubs",
      badges: [],
      href: "https://developers.google.com/",
      location: "On-Site",
      title: "Lead",
      logoUrl: "/gdsc.png",
      start: "Aug 2023",
      end: "Sep 2024",
      description: [
        "Led a 26-person team across five departments, grew the community to 350+ members, and supported 903+ student participations and certifications.",
      ],
    },
    {
      company: "Styx (B2B SaaS StartUp)",
      badges: [],
      href: "https://getstyx.io/",
      location: "On-Site",
      title: "Founders Office & Business Strategy Analyst",
      logoUrl: "/getstyx.jpg",
      start: "June 2023",
      end: "Jan 2024",
      description: [
        "Built a security compliance dashboard MVP and presented product and market analysis to investors and stakeholders.",
      ],
    },
  ],
  education: [
    {
      school: "Birla Institute of Technology & Sciences, Pilani",
      href: "https://www.bits-pilani.ac.in/dubai/",
      degree: "B.E. Computer Science",
      logoUrl: "/bits.png",
      start: "2021",
      end: "2025",
    },
    
  
  ],
  projects: [
    {
      title: "TradersView / SatoriX",
      href: "https://tradersview.deriv.com/",
      dates: "Deriv",
      active: true,
      description:
        "Led delivery of a real-time market intelligence platform reaching 500K unique visitors and over 1M all-time visits. Returning visitors reached 21.4%, with an average session of 3m 14s. Expanded news coverage from 4 to 53 instruments.",
      technologies: [
        "Next.js",
        "FastAPI",
        "WebSockets",
        "Redis",
        "Kubernetes",
        "AI Insights",
      ],
      links: [
        {
          type: "Visit TradersView",
          href: "https://tradersview.deriv.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: undefined,
      video: "",
    },
    {
      title: "Praxis",
      href: "",
      dates: "Deriv",
      active: true,
      description:
        "Owned AI-assisted lifecycle targeting across demo-to-real, real-to-deposit, and deposit-to-trade journeys. In the reported week, the program generated 1,086 conversions and raised conversions per 1,000 sends from 19 to 59 while cutting sends 69%.",
      technologies: [
        "LangGraph",
        "RAG",
        "Next.js",
        "PostgreSQL",
        "A/B Testing",
      ],
      links: [],
      image: undefined,
      video: "",
    },
    {
      title: "TriggerHub API",
      href: "",
      dates: "Deriv",
      active: true,
      description:
        "Automated campaign preparation and CRM handoffs, freeing an estimated 8–18 staff-hours each week. Bounded AI workflows, approvals, recipient-level status, and duplicate prevention keep operators in control.",
      technologies: [
        "FastAPI",
        "PostgreSQL",
        "Celery",
        "Redis",
        "LangGraph",
        "Vector Search",
      ],
      links: [],
      image: undefined,
      video: "",
    },
    {
      title: "Image Processing for Crack Detection using XFEM, Machine Learning & Deep Learning Techniques",
      href: "https://github.com/HUSAM-07/DL-Image-Processing-Crack-Detection",
      dates: "August 2024 - Jan 2025",
      active: true,
      description:
        "Engineered XFEM-based datasets with diverse defect configurations and trained VGG16 CNN models using transfer learning and supervised techniques to construct crack paths, achieving high accuracy while reducing computational costs of simulations",
      technologies: [
        "Python",
        "Abaqus CAE",
        "XFEM",
        "Deep Learning",
        "CNN",
        "VGG-16",
        "Reinforcement Learning",
        "Machine Learning"
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/HUSAM-07/DL-Image-Processing-Crack-Detection",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: {
        src: "/Image_CNN.png",
        width: 1200,
        height: 630,
      },
      video:
        "",
    },
    {
      title: "A Trade A Day",
      href: "https://atradeaday.com",
      dates: "March 2026 - Present",
      active: true,
      description:
        "Designed and built a real-time, AI-powered market intelligence PWA that streams live crypto and commodity data, detects technical patterns, and synthesizes quantitative indicators with multi-model analysis into clear, risk-defined trade plans.",
      technologies: [
        "Risk Management",
        "AI modeling",
        "Ticks Streaming",
        "Technical Analysis",
        "Technical Indicators",
      ],
      links: [
        {
          type: "Website",
          href: "https://atradeaday.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: {
        src: "/images/atradeaday.png",
        width: 1200,
        height: 630,
      },
      video:
        "",
    },
    {
      title: "UniDash — Founder & Developer",
      href: "https://unidash.mohammedhusamuddin.me/",
      dates: "July 2024 - Present",
      active: true,
      description:
        "Founded and developed UniDash, a student-centric All-in-One platform using that achieved an average of 2100+ daily active users.",
      technologies: [
        "Next.js",
        "Typescript",
        "NodeJs",
        "Firebase",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://unidash.mohammedhusamuddin.me/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/HUSAM-07/AccessX",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: {
        src: "/UniDash_Thumbnail.png",
        width: 1200,
        height: 630,
      },
      video: "",
    },
    {
      title: "Insight Hedge",
      href: "https://insight-hedge.ihusam.tech/",
      dates: "March 2025 - Present",
      active: true,
      description:
        "An AI-powered hedge fund analysis application built with Next.js and LangChain.js.",
      technologies: [
        "OpenAI Agents SDK",
        "NextJs",
        "Langchain",
        "LangGraph",
        "FastAPI",
        "Polygon API",
        "Python",
      ],
      links: [
        {
          type: "Website",
          href: "https://insight-hedge.ihusam.tech/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: {
        src: "/images/insight-hedge.png",
        width: 1200,
        height: 630,
      },
      video:
        "",
    },
    {
      title: "Equitum: Visualizing Principle Protected Notes",
      href: "https://ppn.ihusam.tech/",
      dates: "May 2023 - June 2023",
      active: true,
      description:
        "An interactive platform to design, simulate, and visualize the engineering behind Principal Protected Notes.",
      technologies: [
        "NextJs",
        "Python",
        "Pandas",
        "Finance APIs"
      ],
      links: [
        {
          type: "Website",
          href: "https://ppn.ihusam.tech/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: {
        src: "/images/ppn.png",
        width: 1200,
        height: 630,
      },
      video:
        "",
    },
    {
      title: "Gist",
      href: "https://www.gist.ihusam.tech/",
      dates: "December 2025 - Present",
      active: true,
      description:
        "Gist is a modern web application that transforms PDF documents into digestible summaries using Google's Gemini AI. It provides both technical and simplified explanations, along with visual concept maps powered by Mermaid diagrams.",
      technologies: [
        "Next.js",
        "Typescript",
        "NodeJs",
        "IndexedDB",
        "Google Gemini API",
        "Mermaid",
        "OpenRouter LLM API",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.gist.ihusam.tech/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/HUSAM-07/gist",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: {
        src: "/gist.png",
        width: 1200,
        height: 630,
      },
      video: "",
    },
    {
      title: "Prompt Console",
      href: "https://prompt-console.ihusam.tech/",
      dates: "December 2025 - Present",
      active: true,
      description:
        "A prompt engineering console for AI agents, Which is model agnostic and can be used with any LLM.",
      technologies: [
        "Next.js",
        "Typescript",
        "NodeJs",  
        "OpenAI",
        "Anthropic",
        "Google Gemini API",
        "OpenRouter LLM API",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://prompt-console.ihusam.tech/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/HUSAM-07/prompt-console",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: {
        src: "/prompt-console.png",
        width: 1200,
        height: 630,
      },
      video: "",
    },
    {
      title: "Security Compliance Dashboard",
      href: "https://www.behance.net/gallery/168506855/Security-Compliance-Dashboard",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed and designed a working prototype of a security compliance dashboard.",
      technologies: [
        "Next.js",
        "Figma",
      ],
      links: [
        {
          type: "Design",
          href: "https://www.behance.net/gallery/168506855/Security-Compliance-Dashboard",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://getstyx.io/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: {
        src: "/styx.png",
        width: 1200,
        height: 630,
      },
      video: "",
    },
  ],

} as const;
