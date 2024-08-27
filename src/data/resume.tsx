import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";
import Image from 'next/image';

export const DATA = {
  name: "Husam",
  initials: "MHD",
  url: "https://dillion.io",
  location: "Dubai, U.A.E",
  locationLink: "https://www.google.com/maps/place/Dubai",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary:
    "I am an undergraduate computer science engineering student and a freelance software engineer. My passion for software lies with dreaming up ideas and making them come true with elegant interfaces. I take great care in the experience, architecture, and code quality of the things I build. I am also an open-source enthusiast and maintainer. I love how collaboration and knowledge sharing happens through open-source and I am happy to see what I do could eventually feedback to the community and industry",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Figma",
    "Firebase",
    "Docker",
    "Streamlit",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "#", icon: CodeIcon, label: "Projects" },
    { href: "#", icon: PencilLine, label: "Notes" },
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
      Youtube: {
        name: "Youtube",
        url: "https://valuevault.beehiiv.com/",
        icon: Icons.youtube,
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
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
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
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
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
      description:
        "Architected and wrote the entire MVP of the Internal Cloud Price Calculator and A/B testing dashboard using React, TypeScript, Streamlit and Python.",
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
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
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
      title: "IHSSRC",
      href: "https://www.ihssrc2024.com/",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and consulted a conference website for the Humanities Department of BITS Pilani Dubai.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
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
