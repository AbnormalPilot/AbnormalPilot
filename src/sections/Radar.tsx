"use client";

import { useState } from "react";

const EXPERIENCES = [
    {
        id: 1,
        role: "Senior Frontend Engineer",
        company: "Tech Airlines",
        status: "CLEARED TO LAND",
        year: "2024 - Present",
        x: "65%",
        y: "25%",
        desc: "Cruising altitude reached. Architecting massive scaled React applications with pristine glassmorphism UIs."
    },
    {
        id: 2,
        role: "Fullstack Developer",
        company: "Cloud Hangar",
        status: "DEPARTED",
        year: "2021 - 2024",
        x: "30%",
        y: "60%",
        desc: "Built scalable backend infrastructure to handle high-traffic air traffic payload requests securely."
    },
    {
        id: 3,
        role: "Junior Web Dev",
        company: "Local Airstrip",
        status: "ARCHIVED",
        year: "2019 - 2021",
        x: "75%",
        y: "75%",
        desc: "Initial flight training. Mastered Javascript mechanics and CSS tailwinds before taking on enterprise jets."
    }
];

export default function Radar() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <section id="experience" className="relative w-full max-w-6xl mx-auto px-6 py-32 z-10 flex flex-col md:flex-row gap-16 items-center">
            
            {/* Timeline Details */}
            <div className="flex-[1.5] flex flex-col gap-8 order-2 md:order-1">
                <div className="mb-4">
                    <span className="text-[var(--color-accent-purple)] text-sm font-bold tracking-[0.2em] uppercase">
                        Tower Logs
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-2">
                        Clearance Delivery
                    </h2>
                    <p className="text-[var(--color-text-secondary)] mt-4 max-w-lg">
                        Tracking recent flight trajectories and project altitudes across the industry radar.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    {EXPERIENCES.map((exp) => (
                        <div 
                            key={exp.id} 
                            className={`glass p-6 rounded-3xl border border-transparent transition-all duration-300 cursor-pointer ${hoveredId === exp.id ? '!border-[var(--color-accent-purple)] scale-[1.02]' : 'hover:border-[var(--color-card-border)]'}`}
                            onMouseEnter={() => setHoveredId(exp.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-[var(--color-text-primary)]">{exp.role}</h3>
                                <div className="text-[10px] font-mono uppercase bg-[var(--color-app-bg)]/80 px-3 py-1 rounded-full text-[var(--color-accent-pink)] font-semibold border border-[var(--color-accent-pink)]/30">
                                    {exp.status}
                                </div>
                            </div>
                            <div className="text-sm font-semibold text-[var(--color-text-primary)] mb-2">@ {exp.company} — <span className="text-[var(--color-text-secondary)]">{exp.year}</span></div>
                            <p className="text-sm text-[var(--color-text-secondary)]">
                                {exp.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Radar Animation */}
            <div className="flex-1 w-full flex justify-center order-1 md:order-2">
                <div className="relative w-full max-w-[400px] aspect-square rounded-full glass border-[4px] border-[#1C1C1E] shadow-2xl flex items-center justify-center overflow-hidden bg-[#0F0F12]">
                    
                    {/* Concentric Rings */}
                    <div className="absolute inset-4 rounded-full border border-[var(--color-accent-purple)]/20" />
                    <div className="absolute inset-16 rounded-full border border-[var(--color-accent-purple)]/20" />
                    <div className="absolute inset-28 rounded-full border border-[var(--color-accent-purple)]/20" />
                    
                    {/* Crosshairs */}
                    <div className="absolute w-full h-px bg-[var(--color-accent-purple)]/30 origin-center" />
                    <div className="absolute h-full w-px bg-[var(--color-accent-purple)]/30 origin-center" />
                    
                    {/* The Sweeper (Conic Gradient) */}
                    <div 
                        className="absolute inset-0 rounded-full animate-[spin_4s_linear_infinite]"
                        style={{ 
                            background: "conic-gradient(from 0deg, transparent 40%, rgba(168, 85, 247, 0.1) 80%, rgba(168, 85, 247, 0.6) 100%)",
                            borderRight: "2px solid #A855F7"
                        }} 
                    />

                    {/* Blips */}
                    {EXPERIENCES.map((exp) => {
                        const isHovered = hoveredId === exp.id;
                        return (
                            <div 
                                key={exp.id}
                                className={`absolute w-3 h-3 rounded-full transition-all duration-300 ${isHovered ? 'bg-[#EC4899] scale-150 shadow-[0_0_15px_#EC4899]' : 'bg-[var(--color-accent-purple)] animate-pulse shadow-[0_0_8px_var(--color-accent-purple)]'}`}
                                style={{ 
                                    left: exp.x, 
                                    top: exp.y,
                                    transform: 'translate(-50%, -50%)'
                                }}
                            >
                                {/* Blip Label */}
                                {isHovered && (
                                    <div className="absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] font-mono text-white bg-[#1C1C1E] px-2 py-1 rounded shadow-lg border border-[#2C2C2E] z-10">
                                        FLT {exp.id}00
                                    </div>
                                )}
                            </div>
                        )
                    })}
                    
                </div>
            </div>

        </section>
    );
}
