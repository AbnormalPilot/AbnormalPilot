"use client";

import { useState } from "react";

const SKILL_ROWS = [
    { label: "React",   id: "A1", status: "selected" },
    { label: "Next.js", id: "B1", status: "occupied" },
    { label: "Tailwind",id: "C1", status: "occupied" },
    { label: "Node.js", id: "D1", status: "occupied" },
    { label: "Express", id: "E1", status: "available" },
    { label: "Postgres",id: "F1", status: "available" },
    { label: "MongoDB", id: "A2", status: "occupied" },
    { label: "ReactNative",id:"B2",status: "selected" },
    { label: "TypeScript",id:"C2",status: "occupied" },
    { label: "GraphQL", id: "D2", status: "available" },
];

export default function About() {
    const [selectedSkill, setSelectedSkill] = useState("A1");

    return (
        <section id="manifest" className="px-6 py-24 relative max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            
            {/* Text / Profile Content */}
            <div className="flex-1 space-y-6">
                <div className="text-[#A855F7] text-sm font-bold tracking-[0.2em] uppercase">
                    Passenger Manifest
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                    Cleared for <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#EC4899]">
                        Takeoff
                    </span>
                </h2>
                <p className="text-[#A1A1AA] leading-relaxed text-lg">
                    I am a full-stack developer with over 3 years of flight time navigating modern web and mobile architectures. My mission is to build scalable, high-performance applications that deliver a first-class user experience.
                </p>
                <div className="flex gap-4 pt-4">
                    <div className="flex flex-col">
                        <span className="text-xs text-[#6B7280] font-bold uppercase tracking-widest">Base</span>
                        <span className="text-white font-medium mt-1">India</span>
                    </div>
                    <div className="w-px bg-[#2C2C2E]" />
                    <div className="flex flex-col">
                        <span className="text-xs text-[#6B7280] font-bold uppercase tracking-widest">Clearance</span>
                        <span className="text-white font-medium mt-1">Full-Stack Ops</span>
                    </div>
                </div>
            </div>

            {/* "Seat Selection" App UI Mockup */}
            <div className="w-full max-w-[360px] h-[640px] rounded-[40px] border-[6px] border-[#1C1C1E] bg-[#0F0F12] shadow-2xl flex flex-col pt-8 pb-6 px-6 relative overflow-hidden">
                <div className="text-center font-semibold text-white mb-6">Select Skill</div>
                
                {/* Legend */}
                <div className="flex justify-between items-center mb-10 px-2">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#1C1C1E]" />
                        <span className="text-[10px] text-[#A1A1AA]">Available</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#2C2C2E]" />
                        <span className="text-[10px] text-[#A1A1AA]">Core</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-[#A855F7] to-[#EC4899]" />
                        <span className="text-[10px] text-white">Active</span>
                    </div>
                </div>

                {/* Grid */}
                <div className="flex-1 flex flex-col gap-4">
                    {/* Rows */}
                    {Array.from({ length: 6 }).map((_, rowIndex) => (
                        <div key={rowIndex} className="flex justify-between items-center w-full">
                            <div className="flex gap-3">
                                <Seat
                                    id={`A${rowIndex + 1}`}
                                    status={rowIndex === 1 ? "selected" : rowIndex < 3 ? "occupied" : "available"}
                                    active={selectedSkill}
                                    set={setSelectedSkill}
                                />
                                <Seat
                                    id={`B${rowIndex + 1}`}
                                    status={rowIndex % 2 === 0 ? "occupied" : "available"}
                                    active={selectedSkill}
                                    set={setSelectedSkill}
                                />
                            </div>
                            
                            {/* Aisle Text / Or spacing */}
                            <div className="w-8 flex justify-center text-[10px] text-[#2C2C2E] font-bold">
                                {rowIndex + 1}
                            </div>
                            
                            <div className="flex gap-3">
                                <Seat
                                    id={`C${rowIndex + 1}`}
                                    status={rowIndex === 3 ? "selected" : "occupied"}
                                    active={selectedSkill}
                                    set={setSelectedSkill}
                                />
                                <Seat
                                    id={`D${rowIndex + 1}`}
                                    status={rowIndex > 3 ? "available" : "occupied"}
                                    active={selectedSkill}
                                    set={setSelectedSkill}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="mt-auto bg-white rounded-[24px] p-4 flex justify-between items-center shadow-lg">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-[#6B7280] font-bold uppercase">Focus</span>
                        <span className="text-sm font-extrabold text-[#1C1C1E]">
                            {selectedSkill === "A2" ? "React" : selectedSkill === "C4" ? "Next.js" : "Fullstack"}
                        </span>
                    </div>
                    <button className="bg-gradient-to-r from-[#A855F7] to-[#EC4899] text-white text-xs font-bold py-3 px-6 rounded-full shadow-lg glow-btn">
                        Deploy Now
                    </button>
                </div>
            </div>

        </section>
    );
}

function Seat({ id, status, active, set }: { id: string, status: string, active: string, set: (s: string) => void }) {
    const isSelected = active === id || status === "selected";
    
    let bg = "bg-[#1C1C1E]"; // default available
    if (status === "occupied") bg = "bg-[#2C2C2E]";
    if (isSelected) bg = "bg-gradient-to-tr from-[#A855F7] to-[#EC4899] glow-purple";

    return (
        <button
            onClick={() => set(id)}
            className={`w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center text-[10px] font-bold transition-all duration-300 ${bg} ${isSelected ? "text-white" : "text-[#6B7280]"}`}
        >
            {id}
        </button>
    );
}
