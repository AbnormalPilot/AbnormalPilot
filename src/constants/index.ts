// constants/index.ts

export interface ServiceItem {
    title: string;
    description?: string;
}

export interface ServiceData {
    title: string;
    description: string;
    items: ServiceItem[];
}

export interface Project {
    id: number;
    name: string;
    description: string;
    href: string;
    image: string;
    bgImage: string;
    frameworks: { id: number; name: string }[];
}

export interface Social {
    name: string;
    href: string;
}

export const servicesData: ServiceData[] = [
    {
        title: "Frontend Development",
        description:
            "Responsive and user-friendly web applications using modern frameworks. ",
        items: [
            {
                title: "React",
                description: "(Next.js, Shadcn, Tailwind CSS)",
            },
            {
                title: "Next.js",
                description: "(Server-side rendering, Static site generation)",
            },
        ],
    },
    {
        title: "Mobile Apps",
        description:
            "Cross-platform mobile applications that deliver a native-like experience on both iOS and Android.nce",
        items: [
            {
                title: "Cross-Platform Apps",
                description: "(Single codebase for iOS/Android/Web)",
            },
            {
                title: "Payment Integrations",
                description: "(Razorpay, Stripe, PayPal)",
            },
        ],
    },
];

export const projects: Project[] = [
    {
        id: 1,
        name: "Mobile Ad-Free Browser",
        description:
            "A lightweight, ad-free mobile browser with a focus on speed and privacy, featuring a built-in ad blocker and customizable speed.",
        href: "https://focusbrowser.vercel.app",
        image: "/assets/projects/unnamed.webp",
        bgImage: "/assets/backgrounds/focus-bg.png",
        frameworks: [
            { id: 1, name: "React Native" },
            { id: 2, name: "Expo" },
        ],
    },
    {
        id: 2,
        name: "Abhuday Gullak Pathsala",
        description:
            "Volenteered for Pathsala, a non-profit organization, to create thier website using Next.js, now a active leader in the organization.",
        href: "",
        image: "/assets/projects/pathsala.png",
        bgImage: "/assets/backgrounds/pathsala-bg.png",
        frameworks: [
            { id: 1, name: "Next.js" },
            { id: 3, name: "Shadcn" },
            { id: 4, name: "Tailwind CSS" },
        ],
    },
    {
        id: 3,
        name: "ChaxSimplifies",
        description:
            "Personality development coach, Chax Simplifies, offers personalized coaching sessions to help individuals enhance their personality and clear SSB interviews.",
        href: "https://www.chaxsimplifies.com/",
        image: "/assets/projects/chax.jpg",
        bgImage: "/assets/backgrounds/chax-bg.png",
        frameworks: [
            { id: 1, name: "Wix" },
            { id: 2, name: "Razorpay Payments" },
        ],
    },
];

export const socials: Social[] = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/himanshuportfolio/" },
    { name: "GitHub", href: "https://github.com/AbnormalPilot" },
    { name: "Instagram", href: "https://www.instagram.com/abnormal.pilot" },
    {
        name: "Leetcode",
        href: "https://leetcode.com/u/abnormal_pilot/",
    },
];
