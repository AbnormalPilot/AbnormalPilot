"use client";

import { useEffect, useState } from "react";

export default function Hero() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const update = () => {
            setTime(new Date().toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
            }));
        };
        update();
        const id = setInterval(update, 60000); // update every minute
        return () => clearInterval(id);
    }, []);

    return (
        <section
            id="hero"
            className="relative flex flex-col items-center justify-center min-h-screen px-4 pt-20 pb-10 overflow-hidden bg-cover bg-center"
        >
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-[#A855F7]/10 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] rounded-full bg-[#EC4899]/10 blur-[100px] pointer-events-none" />

            {/* Boarding Pass Container mimicking a Mobile Screen Layout */}
            <div className="relative w-full max-w-[400px] h-[800px] max-h-[85vh] rounded-[48px] border-[8px] border-[#1C1C1E] bg-[#0F0F12] shadow-2xl flex flex-col justify-between overflow-hidden">
                
                {/* Top Half: Dark Section with Giant Letters */}
                <div className="flex-1 px-8 pt-12 pb-6 flex flex-col">
                    <div className="text-center text-[#A1A1AA] text-sm tracking-widest font-medium mb-12 uppercase">
                        Boarding Pass
                    </div>

                    {/* Flight Path Path */}
                    <div className="relative flex justify-between items-center w-full mb-8">
                        {/* Origin */}
                        <div className="flex flex-col">
                            <span className="text-6xl font-extrabold text-white tracking-tighter">HD</span>
                            <span className="text-[#A1A1AA] text-sm mt-2 ml-1">Frontend<br/>Developer</span>
                        </div>
                        
                        {/* Dotted path SVG / Line */}
                        <div className="absolute top-[40%] left-[30%] right-[30%] h-0.5 border-t-2 border-dashed border-[#2C2C2E]">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[#2C2C2E] text-lg">✈</div>
                        </div>

                        {/* Destination */}
                        <div className="flex flex-col text-right">
                            <span className="text-6xl font-extrabold text-white tracking-tighter">DEV</span>
                            <span className="text-[#A1A1AA] text-sm mt-2 mr-1">Fullstack<br/>Engineer</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Half: White/Light Stub Card */}
                <div className="relative bg-[#EAEAEA] m-4 rounded-[32px] overflow-hidden flex flex-col">
                    
                    {/* The Soft Purple Gradients inside the white card */}
                    <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#b084ff]/40 via-[#b084ff]/10 to-transparent pointer-events-none" />
                    
                    {/* Top edge cutouts (simulating ticket perforations inside the container) */}
                    <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-[#0F0F12]" />
                    <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#0F0F12]" />

                    {/* Details */}
                    <div className="px-6 py-6 pb-4 relative z-10 flex flex-col gap-5 text-[#1C1C1E]">
                        {/* Row 1 */}
                        <div className="flex justify-between items-end">
                            <div className="flex flex-col">
                                <span className="text-[#6B7280] text-[10px] uppercase font-bold tracking-widest">Passenger</span>
                                <span className="text-sm font-semibold mt-1">Himanshu Dubey</span>
                            </div>
                            <div className="flex flex-col text-right">
                                <span className="text-[#6B7280] text-[10px] uppercase font-bold tracking-widest">Seat</span>
                                <span className="text-sm font-semibold mt-1">1A</span>
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="flex justify-between items-end">
                            <div className="flex flex-col">
                                <span className="text-[#6B7280] text-[10px] uppercase font-bold tracking-widest">Date</span>
                                <span className="text-sm font-semibold mt-1">{new Date().toLocaleDateString("en-US", { month: "2-digit", day: "2-digit", year: "numeric" })}</span>
                            </div>
                            <div className="flex flex-col text-right">
                                <span className="text-[#6B7280] text-[10px] uppercase font-bold tracking-widest">Class</span>
                                <span className="text-sm font-semibold mt-1">First Class</span>
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div className="flex justify-between items-end">
                            <div className="flex flex-col">
                                <span className="text-[#6B7280] text-[10px] uppercase font-bold tracking-widest">Flight Number</span>
                                <span className="text-sm font-semibold mt-1">HD001</span>
                            </div>
                            <div className="flex flex-col text-right">
                                <span className="text-[#6B7280] text-[10px] uppercase font-bold tracking-widest">Terminal</span>
                                <span className="text-sm font-semibold mt-1">Web</span>
                            </div>
                        </div>

                        {/* Row 4 */}
                        <div className="flex justify-between items-end">
                            <div className="flex flex-col">
                                <span className="text-[#6B7280] text-[10px] uppercase font-bold tracking-widest">Departure</span>
                                <span className="text-sm font-semibold mt-1">{time || "ON TIME"}</span>
                            </div>
                            <div className="flex flex-col text-right">
                                <span className="text-[#6B7280] text-[10px] uppercase font-bold tracking-widest">Arrival</span>
                                <span className="text-sm font-semibold mt-1">Future</span>
                            </div>
                        </div>
                    </div>

                    {/* Barcode section separator with side cutouts */}
                    <div className="relative w-full h-8 flex items-center">
                        <div className="absolute left-0 w-3 h-6 bg-[#0F0F12] rounded-r-full" />
                        <div className="flex-1 border-t-2 border-dashed border-[#1C1C1E]/20 mx-4" />
                        <div className="absolute right-0 w-3 h-6 bg-[#0F0F12] rounded-l-full" />
                    </div>

                    {/* Barcode */}
                    <div className="px-6 pb-6 pt-2 flex flex-col justify-center items-center relative z-10 w-full">
                        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#b084ff]/30 to-transparent pointer-events-none" />
                        <div className="flex w-full h-12 justify-center gap-[2px] opacity-80 mix-blend-multiply">
                            {/* Fake Barcode Lines */}
                            {Array.from({ length: 48 }).map((_, i) => (
                                <div key={i} className="bg-[#1C1C1E] h-full" style={{ width: `${Math.max(1, Math.random() * 4)}px` }} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
