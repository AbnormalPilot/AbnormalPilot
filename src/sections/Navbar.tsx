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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-[#0F0F12]/80 backdrop-blur-xl border-b border-[#2C2C2E]"
                    : "bg-transparent"
            }`}
        >
            <div className="flex items-center justify-between px-6 h-16 max-w-5xl mx-auto">
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
