"use client";

import { useEffect, useState } from "react";
import ReactLenis from "lenis/react";
import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import ServiceSummary from "@/sections/ServiceSummary";
import About from "@/sections/About";
import Services from "@/sections/Services";
import Works from "@/sections/Works";
import Contact from "@/sections/Contact";

const HomeClient = () => {
    const [isReady, setIsReady] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const loadingTimer = setInterval(() => {
            setProgress((prevProgress) => {
                const nextProgress = prevProgress + Math.random() * 30;
                if (nextProgress >= 100) {
                    setIsReady(true);
                    clearInterval(loadingTimer);
                    return 100;
                }
                return nextProgress;
            });
        }, 100);

        return () => clearInterval(loadingTimer);
    }, []);

    return (
        <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
            {!isReady && (
                <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black text-white transition-opacity duration-700 font-light">
                    <p className="mb-4 text-xl tracking-widest animate-pulse">
                        Loading {Math.floor(progress)}%
                    </p>
                    <div className="relative h-1 overflow-hidden rounded w-60 bg-white/20">
                        <div
                            className="absolute top-0 left-0 h-full transition-all duration-300 bg-white"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>
            )}
            <div
                className={`${isReady ? "opacity-100" : "opacity-0"
                    } transition-opacity duration-1000`}
            >
                <Navbar />
                <Hero />
                <ServiceSummary />
                <About />
                <Services />
                <Works />
                <Contact />
            </div>
        </ReactLenis>
    );
};

export default HomeClient;
