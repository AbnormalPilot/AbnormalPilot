import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
    subsets: ["latin"],
    variable: "--font-schibsted",
    display: "swap",
});

const geist = Geist({
    subsets: ["latin"],
    variable: "--font-geist",
    display: "swap",
});

const geistMono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-geist-mono",
    display: "swap",
});

const SITE = "https://himanshubuilds.in";
const TITLE = "Himanshu Dubey | Founder & CTO";
const DESCRIPTION =
    "Founder and CTO leading technology at Localhost, Qbitio and TargetHunt. Architecture, product direction and the teams that ship.";

export const metadata: Metadata = {
    metadataBase: new URL(SITE),
    title: {
        default: TITLE,
        template: "%s | Himanshu Dubey",
    },
    description: DESCRIPTION,
    keywords: [
        "Himanshu Dubey",
        "Founder",
        "CTO",
        "Localhost",
        "Qbitio",
        "TargetHunt",
        "technology architect",
    ],
    authors: [{ name: "Himanshu Dubey" }],
    openGraph: {
        type: "website",
        url: SITE,
        siteName: "Himanshu Dubey",
        title: TITLE,
        description: DESCRIPTION,
        images: [
            {
                url: "/assets/generated/himanshu-professional.png",
                width: 1536,
                height: 1024,
                alt: "Himanshu Dubey",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: TITLE,
        description: DESCRIPTION,
        images: ["/assets/generated/himanshu-professional.png"],
    },
    icons: {
        icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    },
};

export const viewport: Viewport = {
    themeColor: "#f7f7f8",
    colorScheme: "light",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${schibsted.variable} ${geist.variable} ${geistMono.variable}`}>
            {/* suppressHydrationWarning: browser extensions (e.g. ColorZilla) add attributes to <body> before React loads. */}
            <body suppressHydrationWarning>
                <a
                    href="#main"
                    className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-btn focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-bg"
                >
                    Skip to content
                </a>
                {children}
            </body>
        </html>
    );
}
