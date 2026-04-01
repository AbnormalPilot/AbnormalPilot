"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import { useTimeTheme } from "@/hooks/useTimeTheme";
import SkyBackground from "@/components/SkyBackground";

const Radar = dynamic(() => import("@/sections/Radar"));
const Instruments = dynamic(() => import("@/sections/Instruments"));
const About = dynamic(() => import("@/sections/About"));
const Works = dynamic(() => import("@/sections/Works"));
const Contact = dynamic(() => import("@/sections/Contact"));

export default function HomeClient() {
    const { theme } = useTimeTheme();

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <div className="relative w-screen min-h-screen overflow-x-hidden theme-transition">
            <SkyBackground />
            <Navbar />
            <main>
                <Hero />
                <Radar />
                <Instruments />
                <About />
                <Works />
                <Contact />
            </main>
        </div>
    );
}
