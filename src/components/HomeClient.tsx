"use client";

import dynamic from "next/dynamic";
import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";

const About = dynamic(() => import("@/sections/About"));
const Works = dynamic(() => import("@/sections/Works"));
const Contact = dynamic(() => import("@/sections/Contact"));

export default function HomeClient() {
    return (
        <div className="relative w-screen min-h-screen overflow-x-hidden">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Works />
                <Contact />
            </main>
        </div>
    );
}
