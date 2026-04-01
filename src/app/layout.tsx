import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "HimanshuBuilds | Portfolio",
    description:
        "Portfolio of Himanshu Dubey — Full-stack developer building scalable, high-performance web and mobile applications.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable}`}>
            <body className="antialiased min-h-screen selection:bg-purple-500/30">
                {children}
            </body>
        </html>
    );
}
