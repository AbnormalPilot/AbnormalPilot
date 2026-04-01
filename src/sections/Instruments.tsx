"use client";

import { useEffect, useState } from "react";

export default function Instruments() {
    const [heading, setHeading] = useState(0);

    // Simulate subtle active physics for the artificial horizon
    useEffect(() => {
        const updateHeading = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 40; // Bank angle map
            const y = (e.clientY / window.innerHeight - 0.5) * 40; // Pitch map
            setHeading(x);
        };
        window.addEventListener("mousemove", updateHeading);
        return () => window.removeEventListener("mousemove", updateHeading);
    }, []);

    return (
        <section id="instruments" className="relative w-full max-w-6xl mx-auto px-6 py-24 z-10 flex flex-col items-center">
            
            <div className="text-center mb-16">
                <span className="text-[var(--color-accent-pink)] text-sm font-bold tracking-[0.2em] uppercase">
                    Cockpit Avionics
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-2">
                    Flight Instruments
                </h2>
                <p className="text-[var(--color-text-secondary)] mt-4 max-w-2xl mx-auto">
                    A real-time telemetry readout of the technical capacities and core engine frameworks powering this portfolio.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                
                {/* 1. Altimeter (Backend/Cloud) */}
                <div className="glass rounded-[40px] p-8 flex flex-col items-center justify-center hover:scale-[1.02] transition-transform duration-500 shadow-xl group">
                    <div className="w-48 h-48 rounded-full border-[8px] border-[#1C1C1E] bg-[#0F0F12] relative flex items-center justify-center shadow-inner overflow-hidden">
                        {/* Dial marks */}
                        {Array.from({ length: 10 }).map((_, i) => (
                            <div key={i} className="absolute inset-0 flex justify-center w-full h-full" style={{ transform: `rotate(${i * 36}deg)` }}>
                                <div className="w-1 h-3 bg-white/40 mt-1" />
                            </div>
                        ))}
                        <span className="absolute top-8 text-xs font-bold text-[#A1A1AA] uppercase">ALT FT</span>
                        
                        {/* Digital Readout */}
                        <div className="bg-black/80 px-4 py-1 rounded-md text-white font-mono text-xl border border-[#2C2C2E] group-hover:text-[var(--color-accent-purple)] transition-colors">
                            99,900
                        </div>
                        
                        {/* Needle */}
                        <div className="absolute bottom-1/2 w-1.5 h-20 bg-white origin-bottom rotate-[140deg] group-hover:rotate-[280deg] transition-all duration-[2s] rounded-t-full shadow-[0_0_10px_white]" />
                        <div className="w-4 h-4 rounded-full bg-white z-10 absolute" />
                    </div>
                    <h3 className="text-[var(--color-text-primary)] text-2xl font-bold mt-8">AWS & Cloud</h3>
                    <p className="text-[var(--color-text-secondary)] text-sm mt-2 text-center uppercase tracking-widest font-semibold">Max Altitude Scalability</p>
                </div>

                {/* 2. Artificial Horizon (UI/UX) */}
                <div className="glass rounded-[40px] p-8 flex flex-col items-center justify-center hover:scale-[1.02] transition-transform duration-500 shadow-xl group">
                    <div className="w-48 h-48 rounded-full border-[8px] border-[#1C1C1E] relative flex items-center justify-center shadow-inner overflow-hidden bg-[#0F0F12]">
                        
                        {/* Rotating Sphere Container */}
                        <div 
                            className="absolute inset-0 rounded-full transition-transform duration-[0.1s] ease-out flex flex-col"
                            style={{ transform: `rotate(${heading}deg)` }}
                        >
                            <div className="flex-1 bg-blue-500/80 w-full" /> {/* Sky */}
                            <div className="w-full h-1 bg-white relative z-10" /> {/* Horizon Line */}
                            <div className="flex-1 bg-amber-700/80 w-full" /> {/* Earth */}

                            {/* Pitch Lines on the moving background */}
                            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-white/50" />
                            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-white/80" />
                            <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-white/80" />
                            <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-white/50" />
                        </div>
                        
                        {/* Fixed Aircraft Symbol on top */}
                        <div className="absolute z-20 flex items-center justify-center pointer-events-none">
                            <div className="w-12 h-1 bg-yellow-400 absolute right-4" /> {/* Left Wing */}
                            <div className="w-2 h-2 rounded-full bg-yellow-400 border border-black z-10" /> {/* Nose */}
                            <div className="w-12 h-1 bg-yellow-400 absolute left-4" /> {/* Right Wing */}
                        </div>

                        {/* Static Angle Ticks around edge */}
                        <div className="absolute z-30 inset-1 rounded-full border-t-4 border-white/50 border-dashed" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }} />
                    </div>
                    <h3 className="text-[var(--color-text-primary)] text-2xl font-bold mt-8">React Fiber</h3>
                    <p className="text-[var(--color-text-secondary)] text-sm mt-2 text-center uppercase tracking-widest font-semibold">Stable UI Attitudes</p>
                </div>

                {/* 3. Airspeed Indicator (Performance) */}
                <div className="glass rounded-[40px] p-8 flex flex-col items-center justify-center hover:scale-[1.02] transition-transform duration-500 shadow-xl group">
                    <div className="w-48 h-48 rounded-full border-[8px] border-[#1C1C1E] bg-[#0F0F12] relative flex items-center justify-center shadow-inner overflow-hidden">
                        
                        {/* Color Arcs (Flap ranges etc) */}
                        <svg className="absolute inset-0 w-full h-full -rotate-90">
                            <circle cx="50%" cy="50%" r="42%" stroke="gray" strokeWidth="8" fill="none" opacity="0.3" />
                            <circle cx="50%" cy="50%" r="42%" stroke="#22c55e" strokeWidth="8" fill="none" strokeDasharray="60 200" strokeDashoffset="-20" />
                            <circle cx="50%" cy="50%" r="42%" stroke="#eab308" strokeWidth="8" fill="none" strokeDasharray="30 200" strokeDashoffset="-80" />
                            <circle cx="50%" cy="50%" r="42%" stroke="#ef4444" strokeWidth="8" fill="none" strokeDasharray="20 200" strokeDashoffset="-110" />
                        </svg>

                        <span className="absolute top-10 text-xs font-bold text-[#A1A1AA] uppercase">KNOTS</span>
                        
                        {/* Needle */}
                        <div className="absolute bottom-1/2 w-1.5 h-[76px] bg-[#EC4899] origin-bottom rotate-[-40deg] group-hover:rotate-[220deg] transition-all duration-[1.5s] ease-in-out cursor-pointer rounded-t-full shadow-[0_0_8px_#EC4899]" />
                        <div className="w-4 h-4 rounded-full bg-[#EC4899] z-10 absolute border-[3px] border-[#0F0F12]" />
                    </div>
                    <h3 className="text-[var(--color-text-primary)] text-2xl font-bold mt-8">Next.js Apps</h3>
                    <p className="text-[var(--color-text-secondary)] text-sm mt-2 text-center uppercase tracking-widest font-semibold">MACH 1 Loading Speeds</p>
                </div>

            </div>
        </section>
    );
}
