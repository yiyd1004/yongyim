import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { PiCertificate } from "react-icons/pi";

export const bio = {
    name: "Yong Yim",
    roles: ["Full Stack Developer", "Android Developer", "Programmer"],
    description:
        "I'm an experienced software developer with 8 years in the field, driven by a relentless commitment to excellence. With a positive attitude and a growth mindset, I thrive on challenges and am eager to make a meaningful impact.",
    linkedin: "https://linkedin.com/in/yong-yim-52a67129",
    git: "https://github.com/yiyd1004",
    certificates: [
        {
            name: "Meta Front-End Developer Professional Certificate",
            url: "https://github.com/yiyd1004/meta-front-end-developer-professional-certificate-solutions",
        },
    ],
};

export const links = [
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Meta Front-End Developer Professional Certificate",
        title2: "",
        company: "",
        location: "Coursera.org",
        description:
            "I completed my certificate program in August 2023. During the program, I created a responsive website using HTML to structure content, CSS to handle visual style, and JavaScript to develop interactive experiences. I also learned to use React in relation to JavaScript libraries and frameworks, the Bootstrap CSS Framework to create webpages, and how to work with GitHub repositories and version control.",
        icon: React.createElement(PiCertificate),
        skills: [
            "HTML",
            "JavaScript",
            "CSS",
            "React",
            "Bootstrap",
            "Figma",
            "Git",
            "UX/UI",
        ],
        date: "Aug, 2023",
    },
    {
        title: "Co-Founder, Software Developer",
        title2: "",
        company: "CONNECTIVIOT LLC",
        location: "Bellevue, WA",
        description:
            "I was the co-founder of an IoT startup company named CONNECTIVIOT and worked for 5 years as an Android and Full Stack Developer. During my tenure, I designed and developed a communication protocol between IoT devices and mobile/web applications, utilizing STUN, TURN, and ICE NAT Traversal Protocols. Additionally, I developed a backend server to integrate Google Home and Amazon Alexa voice commands. Furthermore, I designed and developed Android, Tizen watch, and web applications to control IoT devices.",
        icon: React.createElement(CgWorkAlt),
        skills: [
            "C",
            "Java",
            "HTML",
            "JavaScript",
            "CSS",
            "PHP",
            "SQLite",
            "MySQL",
            "UX/UI",
            "Android",
            "Tizen",
            "Netty",
            "Google Home",
            "Amazon Alexa",
        ],
        date: "Sept, 2014 - July, 2019",
    },
    {
        title: "Tizen Developer - Outsource Contractor",
        title2: "",
        company: "CONNECTIVIOT LLC",
        location: "Bellevue, WA",
        description:
            "I developed a Tizen Wearable smart car application for Mercedes-Benz, a Tizen Wearable GPS application for Glympse, a Tizen Wearable news application for USA Today, and a Tizen Wearable golf application for TaylorMade.",
        icon: React.createElement(CgWorkAlt),
        skills: ["HTML", "JavaScript", "C", "Tizen", "jQuery", "Angular"],
        date: "Dec, 2015 - Feb, 2017",
    },
    {
        title: "Software Developer",
        title2: "",
        company: "TECACE Software Ltd",
        location: "Bellevue, WA",
        description:
            "I developed an MMS/SMS Android application for Samsung Mobile, an Android NewsAce RSS Feed Reader, and a Samsung Music Hub application for Windows 8 (Metro). Additionally, I developed applications for Tizen and Tizen Wearable, as well as a web crawling server and management site for NewsAce RSS Feed Reader.",
        icon: React.createElement(CgWorkAlt),
        skills: [
            "Java",
            "HTML",
            "JavaScript",
            "PHP",
            "C++",
            "C#",
            "SQLite",
            "MySQL",
            "Android",
            "Tizen",
        ],
        date: "Apr, 2011 - Sept, 2014",
    },
    {
        title: "Bachelor of Science",
        title2: "Computing and Software System",
        company: "University of Washington Tacoma",
        location: "Tacoma, WA",
        description:
            "I graduated from the University of Washington Tacoma with a major in Computing and Software Systems (BS degree) in March 2011.",
        icon: React.createElement(LuGraduationCap),
        skills: [],
        date: "Mar, 2011",
    },
] as const;

export const projectsData = [
    {
        title: "Propmptopia",
        description:
            "Promptopia is a site where you can share AI prompts. This project is created to study font-end development using NextJS, Next-Auth, Tailwindcss, Prisma (MongoDB), and TypeScript.",
        tags: [
            "React",
            "Next.js",
            "Prisma",
            "MongoDB",
            "Tailwind",
            "Next-Auth",
            "TypeScript",
        ],
        imageUrl: "/assets/projects/promptopia.png",
        gits: [
            {
                description: "View code",
                url: "https://github.com/yiyd1004/nextjs_promptopia",
            },
        ],
        demos: [
            {
                description: "View live demo",
                url: "https://promptopia-yongyim.vercel.app/",
            },
        ],
    },
    {
        title: "Little Lemon Restaurant",
        description:
            "This project is for Meta Front-End Developer Capstone Final Project. Little Lemon Restaurant is a family-run Mediterranean restaurant located in Chicago, Illinois. Please come and enjoy our wide selection of authentic Mediterranean cuisine!",
        tags: ["React", "TailwindCSS", "React Router Dom", "JavaScript"],
        imageUrl: "/assets/projects/littlelemon.png",
        gits: [
            {
                description: "View code",
                url: "https://github.com/yiyd1004/little-lemon",
            },
        ],
        demos: [
            {
                description: "View live demo",
                url: "https://yiyd1004.github.io/little-lemon/",
            },
        ],
    },
    {
        title: "Ai-Poet & ChatPDF",
        description:
            "Ai-Poet is to ask Ai to generate a poem when the subject is given. ChatPDF is to upload PDF for AI to study, and ask question to AI regarding the PDF. This project is to study using OpenAI and LLAMA 2 with LangChain, Streamlit, and ChromaDB.",
        tags: ["Python", "LangChain", "OpenAi", "LLAMA", "Streamlit"],
        imageUrl: "/assets/projects/chatpdf.png",
        gits: [
            {
                description: "View Ai-Poet code",
                url: "https://github.com/yiyd1004/ai-poet",
            },
            {
                description: "View ChatPDF code",
                url: "https://github.com/yiyd1004/ChatPDF",
            },
        ],
        demos: [],
    },
    {
        title: "Simple Admin/Dashboard",
        description:
            "This project demonstrates simple layouts and styles for e-commerce admin/dashboard pages. This project is to study font-end development using NextJS, Tailwindcss, ReCharts, and TypeScript.",
        tags: ["React", "Next.js", "TailwindCSS", "Recharts", "TypeScript"],
        imageUrl: "/assets/projects/simpleadmin.png",
        gits: [
            {
                description: "View code",
                url: "https://github.com/yiyd1004/nextjs-simple-admin",
            },
        ],
        demos: [
            {
                description: "View live demo",
                url: "https://yiyd1004.github.io/nextjs-simple-admin/",
            },
        ],
    },
] as const;

export const skillsData = [
    { name: "HTML", icon: "/assets/skills/html.svg" },
    { name: "CSS", icon: "/assets/skills/css.svg" },
    { name: "JavaScript", icon: "/assets/skills/javascript.svg" },
    { name: "TypeScript", icon: "/assets/skills/typescript.svg" },
    { name: "React", icon: "/assets/skills/react.svg" },
    { name: "Next.js", icon: "/assets/skills/nextjs.svg" },
    { name: "Node.js", icon: "/assets/skills/nodejs.svg" },
    { name: "Git", icon: "/assets/skills/git.svg" },
    { name: "Tailwind", icon: "/assets/skills/tailwindcss.svg" },
    { name: "Prisma", icon: "/assets/skills/prisma.svg" },
    { name: "MongoDB", icon: "/assets/skills/mongodb.svg" },
    { name: "Redux", icon: "/assets/skills/redux.svg" },
    { name: "Express", icon: "/assets/skills/expressjs.svg" },
    { name: "PostgreSQL", icon: "/assets/skills/postgresql.svg" },
    { name: "Python", icon: "/assets/skills/python.svg" },
    { name: "Streamlit", icon: "/assets/skills/streamlit.svg" },
    { name: "Langchain", icon: "/assets/skills/langchain.png" },
    { name: "ChromaDB", icon: "/assets/skills/chroma.svg" },
    { name: "Framer Motion", icon: "/assets/skills/framer-motion.svg" },
] as const;
