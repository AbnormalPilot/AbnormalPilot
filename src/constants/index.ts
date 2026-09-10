export interface Role {
    id: number;
    company: string;
    title: string;
    /** The company's own one-line description, taken from its website title. */
    descriptor: string;
    domain: string;
    href: string;
    mark: string;
}

export interface Project {
    id: number;
    title: string;
    category: string;
    year: string;
    summary: string;
    stack: string[];
    image: string;
    alt: string;
    href: string;
    /** Takes the full-width slot in the work grid. */
    wide?: boolean;
}

export interface Principle {
    title: string;
    copy: string;
}

export interface Social {
    name: string;
    href: string;
    handle: string;
}

export const profile = {
    name: "Himanshu Dubey",
    title: "Founder & CTO",
    email: "himanshudubey@welocalhost.com",
    location: "India",
    linkedin: "https://www.linkedin.com/in/himanshuportfolio/",
    site: "https://himanshubuilds.in",
    portraits: {
        hero: "/assets/generated/himanshu-founder.png",
        about: "/assets/generated/himanshu-professional.png",
    },
};

/** One label for the contact intent, used everywhere a contact CTA appears. */
export const CONTACT_LABEL = "Start a conversation";

export const nav = [
    { label: "Work", id: "work" },
    { label: "Companies", id: "companies" },
    { label: "About", id: "about" },
];

export const roles: Role[] = [
    {
        id: 1,
        company: "Localhost",
        title: "Chief Technology Officer",
        descriptor: "Scalable and enterprise software",
        domain: "welocalhost.com",
        href: "https://welocalhost.com",
        mark: "/assets/companies/localhost-mark.png",
    },
    {
        id: 2,
        company: "Qbitio",
        title: "Lead Engineer",
        descriptor: "Making electronics fun and easy",
        domain: "qbitio.com",
        href: "https://qbitio.com",
        mark: "/assets/companies/qbitio-mark.png",
    },
    {
        id: 3,
        company: "TargetHunt",
        title: "Chief Technology Architect",
        descriptor: "External attack surface scanning",
        domain: "targethunt.io",
        href: "https://targethunt.io",
        mark: "/assets/companies/targethunt-mark.png",
    },
];

export const scope: [string, string][] = [
    ["Product", "Direction, scope, experience"],
    ["Engineering", "Architecture, systems, delivery"],
    ["Operations", "Reliability, iteration, ownership"],
];

export const projects: Project[] = [
    {
        id: 1,
        title: "FocusBro",
        category: "Mobile & Brand",
        year: "2025",
        summary: "Study productivity platform with a focus timer, analytics and smart scheduling.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
        image: "/assets/projects/unnamed.webp",
        alt: "FocusBro launch graphic with a phone mockup and productivity messaging.",
        href: "https://welocalhost.com",
        wide: true,
    },
    {
        id: 2,
        title: "ChaxSimplifies",
        category: "Product & Web",
        year: "2025",
        summary: "Coaching platform for defence aspirants with courses, resources and dashboards.",
        stack: ["React", "Node.js", "PostgreSQL", "Stripe"],
        image: "/assets/projects/chax.jpg",
        alt: "ChaxSimplifies website hero for a career-mentorship service.",
        href: "https://welocalhost.com",
    },
    {
        id: 3,
        title: "Abhuday Gullak Pathsala",
        category: "Web & Social",
        year: "2024",
        summary: "Non-profit platform to drive awareness, collect donations and manage campaigns.",
        stack: ["Next.js", "MongoDB", "Tailwind CSS", "Razorpay"],
        image: "/assets/projects/pathsala.png",
        alt: "Abhuday Gullak Pathsala Foundation website with an education-focused hero.",
        href: "https://welocalhost.com",
    },
];

export const principles: Principle[] = [
    { title: "Solve the right problem", copy: "Product judgment before feature volume." },
    { title: "Design for production", copy: "Security, performance and failure states from day one." },
    { title: "Ship in tight loops", copy: "Small releases, real feedback, measurable progress." },
    { title: "Stay accountable", copy: "Clear decisions, honest tradeoffs, ownership after launch." },
];

export const socials: Social[] = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/himanshuportfolio/",
        handle: "himanshuportfolio",
    },
    {
        name: "GitHub",
        href: "https://github.com/AbnormalPilot",
        handle: "AbnormalPilot",
    },
    {
        name: "LeetCode",
        href: "https://leetcode.com/u/abnormal_pilot/",
        handle: "abnormal_pilot",
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/abnormal.pilot",
        handle: "abnormal.pilot",
    },
];
