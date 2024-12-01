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
    "Software Engineer. I love building things and helping people.",
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
      company: "PropReturns",
      href: "https://www.propreturns.com/",
      badges: [],
      location: "Remote",
      title: "Full Stack & Data Science Engineer",
      logoUrl: "/propreturns.jpg",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Engineered data pipeline using Python and regex, cleaning web-scraped data and reducing manual entry by 73%, while developing a reusable UI component library that boosted developer productivity by 40% andimproved system architecture, resulting in increase in UI consistency and flow efficiency",
    },
    {
      company: "Google Developer Student Clubs",
      badges: [],
      href: "https://developers.google.com/",
      location: "Remote",
      title: "Lead",
      logoUrl: "/gdsc.png",
      start: "August 2023",
      end: "Present",
      description: [
        "Expanded chapter to largest campus community (350+ members), managing 26-person team across 5 departments, implementing 3-tier structure, and overseeing 903+ student participations and certifications.",
        "Developed and directed 4 internal and community applications/tools and 40+ long-term assets including automated scripts and internal web apps, increasing website traffic by 73% and documenting processes through SoP initiatives.",
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
      end: "Present",
      description: [
        "Developed a Cloud Pricing Calculator that facilitated easy comparison of migration costs across cloud platforms, utilizing Azure API integration, Python web frameworks (Streamlit), and data analysis.",
        "Built a full-stack Sales Lead Email Generation Application that automated 80% of the lead generation process, increasing sales team productivity by 40%, utilizing LinkedIn's Rapid API, GPT-4 integration, and Streamlit (now converting codebase to React) for a responsive front-end.",
        "Integrated Google Cloud Platform service accounts into the applications developed, enabling seamless and secure access to Google Cloud services without user intervention, learned how to proficiently practice cloud security, IAM policies, and programmatic authentication in production environments.",
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
      title: "UniDash-A personal initiative",
      href: "https://unidash.mohammedhusamuddin.me/",
      dates: "July 2024 - Present",
      active: true,
      description:
        "Designed and Developed a Web App for the students of BITS Pilani Dubai to view their courses, university portals, track attendance, view career services guidance.",
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
          href: "https://www.behance.net/gallery/168506855/Security-Compliance-Dashboard",
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
  ],

} as const;
