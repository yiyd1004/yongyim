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
        name: "Education",
        hash: "#education",
    },
    {
        name: "Certificate",
        hash: "#certificate",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
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
] as const;

export const certificateData = [
    {
        title: "Amazon Junior Software Developer",
        title2: "",
        company: "Amazon",
        location: "www.coursera.org",
        description:
            "I completed my certificate program in December 2024. During the program, I gained hands-on experience in software development by completing real-world projects, including designing a desktop application with integrated data handling and front-end GUI features. I developed a capstone project to solve a fictional software development challenge, showcasing my ability to apply software development principles, manage data, and create user-friendly interfaces. These practical experiences helped me build a robust portfolio, demonstrating my technical proficiency and problem-solving skills, while preparing me for a Junior Software Developer role.",
        icon: React.createElement(PiCertificate),
        skills: [
            "Software Development",
            "Java Programming",
            "Generative AI",
            "SQL Database Management",
            "Full-Stack Web Development",
        ],
        url: "https://coursera.org/share/ee6943a676a7cec5a0d53eb09860da22",
        date: "Dec, 2024",
    },
    {
        title: "Rust Programming Specialization",
        title2: "",
        company: "Duke University",
        location: "www.coursera.org",
        description:
            "I completed my certificate program in December 2024. During the program, I gained applied skills in Rust programming, with a focus on its speed, safety, and versatility for robust systems programming. I mastered Rust’s foundational syntax through to advanced machine learning integrations, completing hands-on lessons and over 20 coding projects. I tackled real-world challenges such as building a database migration tool, optimizing machine learning pipelines, and creating Linux automation scripts. By the end of the program, I developed portfolio-ready Rust skills, preparing me for roles such as Platform Engineer, MLOps Engineer, Data Engineer, Embedded Engineer, or Backend Developer.",
        icon: React.createElement(PiCertificate),
        skills: [
            "Algorithm Design",
            "Python",
            "Data Structure Design",
            "Hashtables",
            "Analysis of Algorithms",
            "Graphs Algorithms",
            "Integer Programming",
            "Approximation Algorithm",
        ],
        url: "https://coursera.org/share/b30d81e8a49314a64d106f12cfa0c12c",
        date: "Dec, 2024",
    },
    {
        title: "Foundations of Data Structures and Algorithms Specialization",
        title2: "",
        company: "University of Colorado Boulder",
        location: "www.coursera.org",
        description:
            "I completed my certificate program in November 2024. During the program, I gained a deep understanding of how data is organized in a computer and how to efficiently perform operations such as sorting, searching, and indexing, which are essential for building fast and high-performing data science applications. This course provided a strong foundation in data structures and algorithms, focusing on their application in processing large datasets. Designed for those with basic Python programming knowledge, it equipped me with the skills to design efficient solutions for handling and analyzing large-scale data, even without prior expertise in data science.",
        icon: React.createElement(PiCertificate),
        skills: [
            "Computer Programming",
            "Rust (Programming Language)",
            "Cargo",
            "Information Engineering",
            "Cloud Computing",
            "Command-Line Interface",
            "Polars",
            "Devops",
            "AWS Lambda",
            "Natural Language Processing",
            "AI pair programming",
            "serverless",
        ],
        url: "https://coursera.org/share/b38b8378fcf3745ade9107489283d4ee",
        date: "Nov, 2024",
    },
    {
        title: "Meta Back-End Developer Professional Certificate",
        title2: "",
        company: "Meta",
        location: "www.coursera.org",
        description:
            "I completed my certificate program in November 2024. During the program, I gained practical skills in building, testing, and deploying web applications, mastering back-end frameworks, working with databases, and implementing RESTful APIs to create scalable and secure back-end solutions.",
        icon: React.createElement(PiCertificate),
        skills: [
            "Django (Web Framework)",
            "API endpoints",
            "REST APIs",
            "MySQL",
            "Python",
            "HTML",
            "JavaScript",
            "CSS",
            "Production environments",
            "Version Control",
            "Github",
            "Bash (Unix Shell)",
            "Computer Science",
            "Debugging",
            "Computer Programming",
            "Database (DBMS)",
        ],
        url: "https://coursera.org/share/31116f98fd2ca58b50ad3abe3cd02fa6",
        date: "Nov, 2024",
    },
    {
        title: "Data Structures and Algorithms",
        title2: "",
        company: "University of California San Diego",
        location: "www.coursera.org",
        description:
            "I completed my certificate program in October 2024. During the program, I learned how to efficiently organize and manipulate data using various structures like arrays, linked lists, trees, and graphs. I gained a deep understanding of key algorithms, including sorting, searching, and graph traversal, and how to analyze their performance through time and space complexity. Through hands-on coding assignments, I developed strong problem-solving skills and learned to apply algorithmic thinking to real-world challenges.",
        icon: React.createElement(PiCertificate),
        skills: [
            "Algorithms",
            "Theoretical Computer Science",
            "Computer Programming",
            "Data Structures",
            "Problem Solving",
            "Mathematics",
            "Computer Programming Tools",
            "Critical Thinking",
            "Graph Theory",
            "Programming Principles",
            "Mathematical Theory & Analysis",
            "Software Testing",
        ],
        url: "https://coursera.org/share/52432ffd9c28e1dd4ef34c5069be5251",
        date: "Oct, 2024",
    },
    {
        title: "Meta Android Developer Professional Certificate",
        title2: "",
        company: "Meta",
        location: "www.coursera.org",
        description:
            "I completed my certificate program in September 2024. During the program, I gained the skills required for an entry-level career as an Android developer. I learned to code in Kotlin, along with the programming fundamentals for creating user interfaces (UI) and following best design practices. I also learned how to develop Android applications, including building and managing the lifecycle of a mobile app using Android Studio. Additionally, I gained experience in creating cross-platform mobile applications using React Native.",
        icon: React.createElement(PiCertificate),
        skills: [
            "Android",
            "Android Studio",
            "Kotlin",
            "Jetpack Compose",
            "React",
            "Git",
            "UX/UI",
            "Algorithms",
            "Computer Programming",
            "Software Engineering",
            "Mobile Development",
            "Programming Principles",
        ],
        url: "https://coursera.org/share/b8ac0b342db799db83ff2826e4efa4e2",
        date: "Sept, 2024",
    },
    {
        title: "Kotlin for Java Developers",
        title2: "",
        company: "JetBrains",
        location: "www.coursera.org",
        description:
            "I completed my certificate program in August 2024. During the program, I have learned basic syntax, nullability, functional programming with Kotlin, object-oriented programming with Kotlin, the power of the Kotlin standard library, and Java interoperability",
        icon: React.createElement(PiCertificate),
        skills: [
            "Kotlin",
            "Computer Programming",
            "Programming Principles",
            "Algorithms",
            "Data Structures",
            "Problem Solving",
            "Mathematics",
            "Software Engineering",
        ],
        url: "https://coursera.org/share/a813dd909d94112394e463a998504cfa",
        date: "Aug, 2024",
    },
    {
        title: "Meta Front-End Developer Professional Certificate",
        title2: "",
        company: "Meta",
        location: "www.coursera.org",
        description:
            "I completed my certificate program in August 2023. During the program, I learned front-end web development, including HTML, CSS, JavaScript, React, and version control with Git. By completing the certificate, I gained hands-on experience in creating responsive websites, building interactive web applications, and applying UI/UX design principles",
        icon: React.createElement(PiCertificate),
        skills: [
            "HTML and CSS",
            "JavaScript",
            "React",
            "Bootstrap",
            "Figma",
            "Git",
            "UX/UI",
            "Web Development",
            "Algorithms",
            "Computer Programming",
            "Software Engineering",
        ],
        url: "https://coursera.org/share/140c409bdd76aa5fd0c4212ef19b47ac",
        date: "Aug, 2023",
    },
] as const;

export const educationData = [
    {
        title: "Bachelor of Science",
        title2: "Computing and Software System",
        company: "University of Washington Tacoma",
        location: "Tacoma, WA",
        description:
            "I graduated from the University of Washington Tacoma with a major in Computing and Software Systems (BS degree) in March 2011.",
        icon: React.createElement(LuGraduationCap),
        skills: [],
        url: "",
        date: "Mar, 2011",
    },
] as const;

export const projectsData = [
    {
        title: "Real-time Webcam Object / Face Detection with MediaPipe",
        description:
            "AI powered object detection web application built with Next.js, Three.js, and MediaPipe ML solutions.",
        tags: [
            "React",
            "Next.js",
            "Three.js",
            "Tailwind",
            "TypeScript",
            "MediaPipe",
        ],
        imageUrl: "/assets/projects/face-mesh.png",
        gits: [
            {
                description: "View code",
                url: "https://github.com/yiyd1004/nextjs_face_object_detection",
            },
        ],
        demos: [
            {
                description: "View live demo",
                url: "https://yiyd1004.github.io/nextjs_face_object_detection/",
            },
        ],
    },
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
    {
        title: "Naver Today's Webtoon",
        description:
            "This app shows the list of Today's Webtoon, episodes, and allows you to read the episode. List of webtoons are fetched from Naver Webtoon. Webtoon episodes are in Korean.",
        tags: ["Flutter"],
        imageUrl: "/assets/projects/naver_webtoon_main.png",
        gits: [
            {
                description: "View code",
                url: "https://github.com/yiyd1004/flutter_naver_webtoon",
            },
        ],
        demos: [],
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
    { name: "Flutter", icon: "/assets/skills/flutter.svg" },
    { name: "Kotlin", icon: "/assets/skills/kotlin.svg" },
] as const;
