import type { Metadata } from "next";
import "./globals.css";

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
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
