"use client";

import { projects } from "@/constants";
import Image from "next/image";

export default function Works() {
    return (
        <section id="work" className="px-6 py-24 relative max-w-5xl mx-auto">
            {/* Section label */}
            <div className="flex flex-col items-center mb-16 space-y-4">
                <span className="text-[#A855F7] text-sm font-bold tracking-[0.2em] uppercase">
                    Destinations
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight text-center">
                    Best Flights
                </h2>
                <p className="text-[#A1A1AA] text-center max-w-lg mx-auto">
                    Explore high-quality web experiences without the hassle. Get started today to find your next digital journey!
                </p>
            </div>

            {/* "Best Flights" Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="w-full max-w-[340px] rounded-[32px] border border-[#2C2C2E] bg-[#1C1C1E] shadow-xl overflow-hidden flex flex-col hover:border-[#A855F7]/40 transition-all duration-300 group"
                    >
                        {/* Airplane Window Placeholder */}
                        <div className="relative w-[340px] h-[340px] flex items-center justify-center p-8 overflow-hidden bg-gradient-to-b from-[#A855F7]/10 to-transparent">
                            <div className="absolute inset-x-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[300px] bg-white rounded-full scale-110 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)] opacity-20 pointer-events-none" />
                            <div className="relative w-full h-full rounded-[100px] overflow-hidden shadow-[inset_0_4px_24px_rgba(0,0,0,0.6)] border-4 border-[#2C2C2E]">
                                <Image 
                                    src="/assets/airplane-window.png" 
                                    alt="Airplane Window" 
                                    fill 
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                {/* Optional overlay gradient on window */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,15,18,0.7)] to-transparent pointer-events-none" />
                            </div>
                        </div>

                        {/* Text and Action */}
                        <div className="p-6 pt-2 flex flex-col flex-1">
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#A855F7] transition-colors">
                                {project.name}
                            </h3>
                            <p className="text-sm text-[#A1A1AA] leading-relaxed line-clamp-3 mb-6 flex-1">
                                {project.description}
                            </p>
                            
                            {/* Tech Stack Pills */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.frameworks.slice(0, 3).map((fw) => (
                                    <span key={fw.id} className="text-[10px] uppercase tracking-wider bg-[#2C2C2E] text-[#A1A1AA] px-2 py-1 rounded-sm">
                                        {fw.name}
                                    </span>
                                ))}
                            </div>

                            <a
                                href={project.href || "#"}
                                target={project.href ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                className="w-full py-4 text-center rounded-full bg-gradient-to-r from-[#A855F7] to-[#EC4899] text-white font-bold text-sm tracking-wide shadow-lg glow-btn transition-transform hover:scale-[1.02] active:scale-95"
                            >
                                {project.href ? "Get Started!" : "Private / Pending"}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
