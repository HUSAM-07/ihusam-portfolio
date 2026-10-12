import type { JSX, SVGProps } from "react";
import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";
import { Python } from "@/components/ui/svgs/python";
import { Typescript } from "@/components/ui/svgs/typescript";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Docker } from "@/components/ui/svgs/docker";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Redis } from "@/components/ui/svgs/redis";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Supabase } from "@/components/ui/svgs/supabase";
import { AmazonWebServices } from "@/components/ui/svgs/amazonWebServices";
import { GoogleCloud } from "@/components/ui/svgs/googleCloud";
import { CloudflareWorkers } from "@/components/ui/svgs/cloudflareWorkers";
import { Datadog } from "@/components/ui/svgs/datadog";
import { ModelContextProtocol } from "@/components/ui/svgs/modelContextProtocol";
import { LangChain } from "@/components/ui/svgs/langchain";
import { Vercel } from "@/components/ui/svgs/vercel";
import { PostHog } from "@/components/ui/svgs/posthog";
import { Postman } from "@/components/ui/svgs/postman";
import { TensorFlow } from "@/components/ui/svgs/tensorflow";
import { FastAPI } from "@/components/ui/svgs/fastapi";
import { OpenAI } from "@/components/ui/svgs/openai";
import { ClaudeAI } from "@/components/ui/svgs/claude";
import { OpenRouter } from "@/components/ui/svgs/openrouter";
import { GitHub } from "@/components/ui/svgs/github";
import { Ngrok } from "@/components/ui/svgs/ngrok";
import { Nginx } from "@/components/ui/svgs/nginx";
import { ApacheKafka } from "@/components/ui/svgs/apacheKafka";

const BLOG_URL = "https://ihusam.tech/blog";
const NEWSLETTER_URL = "https://valuevault.beehiiv.com/";

type Skill = { name: string; icon: (props: SVGProps<SVGSVGElement>) => JSX.Element };

const SKILLS: readonly Skill[] = [
  { name: "React", icon: ReactLight },
  { name: "Next.js", icon: NextjsIconDark },
  { name: "TypeScript", icon: Typescript },
  { name: "Node.js", icon: Nodejs },
  { name: "Python", icon: Python },
  { name: "Go", icon: Golang },
  { name: "PostgreSQL", icon: Postgresql },
  { name: "Redis", icon: Redis },
  { name: "Docker", icon: Docker },
  { name: "Kubernetes", icon: Kubernetes },
  { name: "Java", icon: Java },
  { name: "C++", icon: Csharp },
  { name: "Supabase", icon: Supabase },
  { name: "AWS", icon: AmazonWebServices },
  { name: "GCP", icon: GoogleCloud },
  { name: "Cloudflare Workers", icon: CloudflareWorkers },
  { name: "Datadog", icon: Datadog },
  { name: "MCP", icon: ModelContextProtocol },
  { name: "OpenAI", icon: OpenAI },
  { name: "Claude", icon: ClaudeAI },
  { name: "OpenRouter", icon: OpenRouter },
  { name: "LangChain / LangGraph", icon: LangChain },
  { name: "Vercel", icon: Vercel },
  { name: "PostHog", icon: PostHog },
  { name: "Postman", icon: Postman },
  { name: "TensorFlow", icon: TensorFlow },
  { name: "FastAPI", icon: FastAPI },
  { name: "GitHub", icon: GitHub },
  { name: "nginx", icon: Nginx },
  { name: "ngrok", icon: Ngrok },
  { name: "Kafka", icon: ApacheKafka },
];

export const DATA = {
  name: "Husam",
  fullName: "Mohammed Husamuddin",
  initials: "MH",
  url: "https://www.mohusam.com",
  location: "Dubai, U.A.E",
  locationLink: "https://www.google.com/maps/place/Dubai",
  description:
    "Product builder turned AI engineer. I build AI agents at Deriv, ship my own products on the side, and write about whatever I can't stop thinking about.",
  summary: `I started out building products. [UniDash](https://unidash.mohammedhusamuddin.me/), a dashboard for university students, grew to 2,100+ daily users. Along the way I studied computer science at [BITS Pilani, Dubai](/#education) and grew our [Google Developer Student Club](/#work) to 350+ members.

Now I'm a Senior AI Engineer at [Deriv](https://www.deriv.com/). I build the AI tools and agents that internal teams use to get real work done, with less of it done by hand.

I still ship my own things. [A Trade A Day](https://atradeaday.com) turns live market data into risk-defined trade plans. [Gist](https://www.gist.ihusam.tech/) turns long PDFs into something you'll actually read. And I [write](${BLOG_URL}) about LLMOps, markets, leverage and anything else that holds my attention.`,
  avatarUrl: "/me.jpg",

  // Plain-language positioning used for metadata, JSON-LD and /llms.txt (what search engines and agents read).
  jobTitle: "Senior AI Engineer",
  headline:
    "Product builder turned AI engineer. Builds AI agents and tools at Deriv in Dubai, ships his own products, and writes about whatever interests him.",
  bio: [
    "Mohammed Husamuddin (Husam) is an AI engineer and software engineer based in Dubai, U.A.E. He started as a product builder, taking products from idea and design to code, launch and users.",
    "Today he is a Senior AI Engineer at Deriv, building AI tools and agents that internal teams use to cut manual work and deliver faster.",
    "He keeps shipping his own products: UniDash (a student dashboard with 2,100+ daily active users), A Trade A Day (a real-time AI market-intelligence PWA), Gist (AI PDF summaries), Prompt Console (a model-agnostic prompt-engineering console) and Insight Hedge (AI hedge-fund analysis).",
    "He is also a writer. He writes about whatever interests him (AI engineering, LLMOps, markets, building products and ideas) on his blog and in his newsletter, Value Vault.",
  ],
  keywords: [
    "AI engineer",
    "senior AI engineer",
    "LLM engineer",
    "AI agents",
    "applied AI",
    "software engineer",
    "product builder",
    "builder",
    "founding engineer",
    "full-stack engineer",
    "Next.js",
    "Python",
    "writer",
    "Dubai",
    "UAE",
  ],

  skills: SKILLS,
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: BLOG_URL, icon: NotebookIcon, label: "Blog" },
    { href: "https://projects.ihusam.tech/", icon: CodeIcon, label: "Projects" },
    { href: "/Mohammed Husamuddin Resume.pdf", icon: PencilLine, label: "Resume" },
  ],
  contact: {
    email: "workforhusam@gmail.com",
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
        url: NEWSLETTER_URL,
        icon: Icons.newsletter,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:workforhusam@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Deriv",
      href: "https://www.deriv.com/",
      location: "Dubai, UAE",
      title: "Senior AI Engineer",
      logoUrl: "/deriv.jpg",
      start: "Feb 2025",
      end: "Present",
      description: [
        "Build AI tools and agents for Deriv's internal teams: find the slow, manual parts of how work gets done and replace them with software people actually use.",
      ],
    },
    {
      company: "Brio",
      href: "https://www.briotech.com/",
      location: "Hyderabad, India",
      title: "Software Engineering Intern",
      logoUrl: "/brio.jpg",
      start: "Jul 2024",
      end: "Aug 2024",
      description: [
        "Built a sales-lead email generator on GPT-4 and LinkedIn data (RapidAPI) that automated ~80% of lead generation and made the sales team 40% more productive.",
        "Built a cloud pricing calculator (Python, Streamlit, Azure APIs) so clients could compare migration costs across cloud providers side by side.",
        "Connected both apps to Google Cloud through service accounts, so they reach GCP securely with no user sign-in. That meant hands-on IAM and auth in production.",
      ],
    },
    {
      company: "Google Developer Student Clubs",
      href: "https://developers.google.com/community/gdsc",
      location: "BITS Pilani, Dubai",
      title: "Lead",
      logoUrl: "/gdsc.png",
      start: "Aug 2023",
      end: "Sep 2024",
      description: [
        "Grew the chapter into the largest community on campus: 350+ members, a 26-person team across 5 departments, and 900+ student participations and certifications.",
        "Shipped 4 internal and community tools plus 40+ reusable assets (scripts, internal web apps, SOPs). Website traffic went up 73%.",
      ],
    },
    {
      company: "Styx",
      href: "https://getstyx.io/",
      location: "On-site",
      title: "Founder's Office & Business Strategy Analyst",
      logoUrl: "/getstyx.jpg",
      start: "Jun 2023",
      end: "Jan 2024",
      description: [
        "Designed and built the security compliance dashboard MVP. It won stakeholder sign-off and lifted the company's valuation by 27%.",
        "Pitched local and international investors on unit economics (LTV) and market analysis, part of a round that raised $500K.",
        "Dug through financial and operational metrics to find cost savings and levers for revenue growth.",
      ],
    },
    {
      company: "PropReturns",
      href: "https://www.propreturns.com/",
      location: "Remote",
      title: "Full Stack & Data Science Engineer",
      logoUrl: "/propreturns.jpg",
      start: "Jun 2023",
      end: "Aug 2023",
      description: [
        "Built a Python data pipeline that cleaned web-scraped property data and cut manual data entry by 73%.",
        "Built a reusable UI component library that made the team ~40% faster and the product more consistent.",
      ],
    },
  ],
  education: [
    {
      school: "Birla Institute of Technology & Science, Pilani",
      href: "https://www.bits-pilani.ac.in/dubai/",
      degree: "B.Tech, Computer Science Engineering",
      logoUrl: "/bits.png",
      start: "2021",
      end: "2025",
    },
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s2",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "Delhi Private School, Sharjah",
      href: "https://website.dpssharjah.com/",
      degree: "High school (CBSE), through Grade 12",
      logoUrl: "/dps.jpg",
      start: "2007",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "A Trade A Day",
      href: "https://atradeaday.com",
      dates: "Mar 2026 - Present",
      active: true,
      description:
        "Live crypto and commodity prices go in. A risk-defined trade plan comes out. It streams ticks in real time, spots technical patterns and cross-checks the indicators with multiple AI models.",
      technologies: [
        "Next.js",
        "Real-time streaming",
        "Technical analysis",
        "Multi-model AI",
        "Risk management",
        "PWA",
      ],
      links: [
        {
          type: "Website",
          href: "https://atradeaday.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/atradeaday.png",
      video: "",
    },
    {
      title: "UniDash",
      href: "https://unidash.mohammedhusamuddin.me/",
      dates: "Jul 2024 - Present",
      active: true,
      description:
        "One dashboard for everything a university student needs, instead of ten open tabs. I founded and built it, and it averages **2,100+ daily active users**.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "Firebase",
        "Prisma",
        "Stripe",
        "Tailwind CSS",
        "shadcn/ui",
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
      image: "/UniDash_Thumbnail.png",
      video: "",
    },
    {
      title: "Gist",
      href: "https://www.gist.ihusam.tech/",
      dates: "Dec 2025 - Present",
      active: true,
      description:
        "Drop in a PDF and get the gist: a technical summary, a plain-English version and a concept map drawn as a Mermaid diagram. Runs on Gemini.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Gemini API",
        "OpenRouter",
        "Mermaid",
        "IndexedDB",
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
      image: "/gist.png",
      video: "",
    },
    {
      title: "Prompt Console",
      href: "https://prompt-console.ihusam.tech/",
      dates: "Dec 2025 - Present",
      active: true,
      description:
        "A workbench for writing and testing prompts for AI agents. It isn't tied to one model: use OpenAI, Anthropic, Gemini or anything on OpenRouter.",
      technologies: [
        "Next.js",
        "TypeScript",
        "OpenAI",
        "Anthropic",
        "Gemini API",
        "OpenRouter",
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
      image: "/prompt-console.png",
      video: "",
    },
    {
      title: "Insight Hedge",
      href: "https://insight-hedge.ihusam.tech/",
      dates: "Mar 2025 - Present",
      active: true,
      description:
        "Hedge-fund-style analysis on demand. AI agents pull market data from Polygon and write it up as an analysis you can act on.",
      technologies: [
        "OpenAI Agents SDK",
        "LangGraph",
        "LangChain",
        "FastAPI",
        "Next.js",
        "Polygon API",
      ],
      links: [
        {
          type: "Website",
          href: "https://insight-hedge.ihusam.tech/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/insight-hedge.png",
      video: "",
    },
    {
      title: "Equitum",
      href: "https://ppn.ihusam.tech/",
      dates: "May 2023 - Jun 2023",
      active: true,
      description:
        "Design a Principal Protected Note, then watch how it behaves. It's an interactive simulator that shows the engineering behind PPNs.",
      technologies: ["Next.js", "Python", "Pandas", "Finance APIs"],
      links: [
        {
          type: "Website",
          href: "https://ppn.ihusam.tech/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/ppn.png",
      video: "",
    },
    {
      title: "Crack Detection with Deep Learning",
      href: "https://github.com/HUSAM-07/DL-Image-Processing-Crack-Detection",
      dates: "Aug 2024 - Jan 2025",
      active: true,
      description:
        "Trained VGG-16 CNNs with transfer learning on XFEM-simulated defect data to predict crack paths. The accuracy stayed high at a fraction of the simulation cost.",
      technologies: [
        "Python",
        "Deep Learning",
        "CNN / VGG-16",
        "XFEM",
        "Abaqus CAE",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/HUSAM-07/DL-Image-Processing-Crack-Detection",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Image_CNN.png",
      video: "",
    },
    {
      title: "Security Compliance Dashboard",
      href: "https://www.behance.net/gallery/168506855/Security-Compliance-Dashboard",
      dates: "Apr 2023 - Sep 2023",
      active: true,
      description:
        "The MVP I designed and built at Styx: a single view of a company's security compliance status. It helped lift the startup's valuation by 27%.",
      technologies: ["Next.js", "Figma"],
      links: [
        {
          type: "Design",
          href: "https://www.behance.net/gallery/168506855/Security-Compliance-Dashboard",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/styx.png",
      video: "",
    },
  ],

  writing: {
    blog: BLOG_URL,
    newsletter: NEWSLETTER_URL,
    posts: [
      {
        title: "Agent Experience",
        href: `${BLOG_URL}/agent-experience`,
        date: "Oct 2026",
        summary:
          "UX is for people, DX is for developers, AX is for agents. Why setting agents up for success deserves far more of our time.",
      },
      {
        title: "Arbitrage: The Art of Risk-Free Profit",
        href: `${BLOG_URL}/arbitrage-the-art-of-risk-free-profit`,
        date: "Feb 2026",
        summary:
          "How traders find and exploit price gaps across markets, and the math that makes the profit risk-free.",
      },
      {
        title: "Dutch Books, Dutching & Why Your Model Is Lying to You",
        href: `${BLOG_URL}/dutch-books-and-ai-calibration`,
        date: "Feb 2026",
        summary:
          "What 18th-century bookmakers can teach you about LLMs that sound more confident than they are.",
      },
      {
        title: "If Things Aren't Obvious",
        href: `${BLOG_URL}/if-things-arent-obvious`,
        date: "Feb 2026",
        summary:
          "The third wave of the internet, the death of SaaS, and what it means to build in 2026.",
      },
      {
        title: "Particle Filters in Robotics",
        href: `${BLOG_URL}/particle-filter`,
        date: "Oct 2024",
        summary: "The key formulas behind particle filters, from Bayes' rule to resampling, in plain language.",
      },
      {
        title: "Building Leverage",
        href: `${BLOG_URL}/building-leverage`,
        date: "Sep 2024",
        summary: "One shift in what you work on that multiplies the impact of everything else.",
      },
      {
        title: "Overcomplication and Action",
        href: `${BLOG_URL}/complication`,
        date: "Sep 2024",
        summary: "Why the basics are enough to start, and why action beats overthinking.",
      },
    ],
  },
} as const;
