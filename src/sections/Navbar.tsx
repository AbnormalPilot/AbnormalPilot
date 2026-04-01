"use client";

import { socials } from "@/constants";
import { useEffect, useState } from "react";

const STEPS = [
    { label: "Profile", id: "manifest" },
    { label: "Flights", id: "work" },
    { label: "Book", id: "contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-3xl rounded-full border border-[var(--color-card-border)] ${
                scrolled
                    ? "bg-[var(--color-app-bg)]/80 backdrop-blur-2xl shadow-xl"
                    : "bg-[var(--color-app-bg)]/40 backdrop-blur-md"
            }`}
        >
            <div className="flex items-center justify-between px-4 sm:px-6 h-14">
                {/* Logo */}
                <button
                    onClick={() => scrollTo("hero")}
                    className="flex items-center gap-2 group"
                >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#A855F7] to-[#EC4899] p-[1px]">
                        <div className="w-full h-full bg-[#1C1C1E] rounded-full flex items-center justify-center group-hover:bg-transparent transition-colors">
                            <span className="text-[10px] text-white font-bold">HD</span>
                        </div>
                    </div>
                </button>

                {/* Steps */}
                <nav className="hidden sm:flex items-center gap-6">
                    {STEPS.map((g) => (
                        <button
                            key={g.id}
                            onClick={() => scrollTo(g.id)}
                            className="text-sm font-medium text-[#A1A1AA] hover:text-white transition-colors"
                        >
                            {g.label}
                        </button>
                    ))}
                </nav>

                {/* GitHub Action */}
                <a
                    href={socials.find((s) => s.name === "GitHub")?.href ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold px-4 py-2 rounded-full bg-[#1C1C1E] border border-[#2C2C2E] hover:border-[#A855F7] text-white transition-all glow-btn-hover"
                >
                    GitHub ↗
                </a>
            </div>
        </header>
    );
}
