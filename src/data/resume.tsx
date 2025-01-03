import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";
import Image from 'next/image';

export const DATA = {
  name: "Husam",
  initials: "MHD",
  url: "https://www.mohammedhusamuddin.me/",
  location: "Dubai, U.A.E",
  locationLink: "https://www.google.com/maps/place/Dubai",
  description:
    "Business Transformation using Software Engineering, AI, and Data Science. I love building things and helping people.",
  summary:
    "I am a computer science engineering student and a **[freelance software engineer](#/projects)**. I interned at **[Brio Technologies](#/work)** and **[PropReturns](#/work)** as a Software Engineering and Data Science Intern. My passion for software lies with dreaming up ideas and making them come true with elegant interfaces. I take great care in the experience, architecture, and code quality of the things I build.",
  avatarUrl: "/me.jpg",
  skills: [
    // Languages
    "Python",
    "Java",
    "C++",
    "Matlab",
    "SQL",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Assembly x86-64",

    // Frameworks & Libraries
    "Matplotlib",
    "Pandas",
    "Streamlit",
    "TensorFlow",
    "NumPy",
    "Flask",
    "BeautifulSoup",
    "Scikit-Learn",
    "OpenCV",
    "Flower (Federated Learning)",
    "Shadcn UI",
    "Taipy",
    "ROSpy",
    "OpenAI",
    "Hugging Face",
    "Google-Auth",
    "Google Maps API",
    "MkDocs",

    // Tools & Technologies
    "Next.js",
    "React",
    "Node.js",
    "MySQL",
    "Firebase",
    "Vercel",
    "Heroku",
    "Git",
    "Google Cloud Platform",
    "Azure",
    "AWS",
    "Figma",
    "REST",
    "Docker",
    "Linux",
    "VS Code",
    "Prisma",
    "Notion",
    "Power BI",
    "Tableau",
    "Linear",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://ihusam.tech/", icon: NotebookIcon, label: "Blog" },
    { href: "/error", icon: CodeIcon, label: "Projects" },
    { href: "/Mohammed Husamuddin Resume.pdf", icon: PencilLine, label: "Resume" },
  ],
  contact: {
    email: "workforhusam@gmail.com",
    tel: "+123456789",
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
      company: "Brio",
      href: "https://www.briotech.com/",
      badges: [],
      location: "Hyderabad, India",
      title: "Software Engineering Intern",
      logoUrl: "/brio.jpg",
      start: "July 2024",
      end: "August 2024",
      description: [
        "Developed a Cloud Pricing Calculator that facilitated easy comparison of migration costs across cloud platforms, utilizing Azure API integration, Python web frameworks (Streamlit), and data analysis.",
        "Built a full-stack Sales Lead Email Generation Application that automated 80% of the lead generation process, increasing sales team productivity by 40%, utilizing LinkedIn's Rapid API, GPT-4 integration, and Streamlit (now converting codebase to React) for a responsive front-end.",
        "Integrated Google Cloud Platform service accounts into the applications developed, enabling seamless and secure access to Google Cloud services without user intervention, learned how to proficiently practice cloud security, IAM policies, and programmatic authentication in production environments.",
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
        "Engineered data pipeline using Python and regex, cleaning web-scraped data and reducing manual entry by 73%, while developing a reusable UI component library that boosted developer productivity by 40% andimproved system architecture, resulting in increase in UI consistency and flow efficiency",
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
        "Expanded chapter to largest campus community (350+ members), managing 26-person team across 5 departments, implementing 3-tier structure, and overseeing 903+ student participations and certifications.",
        "Developed and directed 4 internal and community applications/tools and 40+ long-term assets including automated scripts and internal web apps, increasing website traffic by 73% and documenting processes through SoP initiatives.",
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
        "Designed and developed a security compliance dashboard MVP, increasing valuation by 27% and gaining stakeholders approval.",
        "Analyzed financial and operational metrics to identify cost-saving opportunities and recommend strategies for revenue growth",
        "Pitched product to local and international investors & presented unit economics(CLV or LTV) and market analysis to stakeholders, contributing to securing $500,000 in funding, while developing strategies to improve market penetration",
      ],
    },
  ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s2",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "Birla Institute of Technology & Sciences, Pilani",
      href: "https://www.bits-pilani.ac.in/dubai/",
      degree: "Bachelor's Degree of Computer Science Engineering(B.Tech)",
      logoUrl: "/bits.png",
      start: "2021",
      end: "2025",
    },
    {
      school: "Delhi Private School, Sharjah",
      href: "https://website.dpssharjah.com/",
      degree: "Secondary Education, till Grade 12-CBSE",
      logoUrl: "/dps.jpg",
      start: "2007",
      end: "2021",
    },
    
  
  ],
  projects: [
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
      title: "Prof Priti Bajpai.com",
      href: "https://www.profpritibajpai.com/",
      dates: "May 2023 - June 2023",
      active: true,
      description:
        "A website to get the support you need to ace your math courses with expertly crafted video lectures, practice problems, and other resources.",
      technologies: [
        "Figma",
        "Wix Studio",
        "Google Analytics",
        "Domain Registration"
      ],
      links: [
        {
          type: "Website",
          href: "https://www.profpritibajpai.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: {
        src: "/priti.png",
        width: 1200,
        height: 630,
      },
      video:
        "",
    },
    {
      title: "IHSSRC(Now ICMSDG)",
      href: "https://www.icmsdg2025.com/",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and consulted a conference website for the Humanities Department of BITS Pilani Dubai.",
      technologies: [
        "Figma",
        "Wix Studio",
        "Google Analytics",
        "Domain Registration"
      ],
      links: [
        {
          type: "Website",
          href: "https://ihssrc2024.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://ihssrc2024.com/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: {
        src: "/ihssrc_web.png",
        width: 1200,
        height: 630,
      },
      video: "",
    },
    {
      title: "Hala Dubai",
      href: "https://hala-dubai.vercel.app/",
      dates: "November 2024 - Present",
      active: true,
      description:
        "A new way to collect and explore Dubai.",
      technologies: [
        "Next.js",
        "Typescript",
        "NodeJs",
        "Firebase",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://hala-dubai.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/HUSAM-07/Hala-Dubai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: {
        src: "/haladubai.png",
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
    {
      title: "TSP Visualizer",
      href: "genetic.streamlit.app",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Demo of genetic algorithm solver for the Traveling Salesman Problem.",
      technologies: [
        "Streamlit",
        "Python",
        "Pandas"
      ],
      links: [
        {
          type: "Website",
          href: "https://genetic.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: {
        src: "/genetic.png",
        width: 1200,
        height: 630,
      },
      video:
        "",
    },
    {
      title: "Mohammed Faiyazuddin.com",
      href: "https://mfu-portfolio-prod.vercel.app/",
      dates: "December 2024 - Jan 2025",
      active: true,
      description:
        "A Portfolio Site for Mohammed Faiyazuddin — a MEP Specialist & Strategic Business Leader in Dubai, UAE",
      technologies: [
        "ReactJs",
        "NextJs",
        "Once UI",
        "Vercel",
        "Git"
      ],
      links: [
        {
          type: "Website",
          href: "https://mfu-portfolio-prod.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: {
        src: "/mfu-thumbnail.png",
        width: 1200,
        height: 630,
      },
      video:
        "",
    },
  ],

} as const;
