"use client";

import { useEffect, useState, useRef } from "react";
import QRCode from "react-qr-code";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Hero() {
    const [time, setTime] = useState("");
    const containerRef = useRef<HTMLDivElement>(null);
    const ticketRef = useRef<HTMLDivElement>(null);
    const stubRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);

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

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=800", // Scroll 800px down to fully collapse it
                scrub: 1,
                pin: true,
            }
        });

        // 1. Collapse the bottom ticket stub natively 
        tl.to(stubRef.current, {
            opacity: 0,
            height: 0,
            margin: 0,
            padding: 0,
            duration: 1,
            ease: "power2.inOut"
        }, 0);

        // 2. Squash the main ticket max height bounds
        tl.to(ticketRef.current, {
            height: "140px",
            minHeight: "140px",
            borderRadius: "32px",
            duration: 1,
            ease: "power2.inOut"
        }, 0);

        // 3. Scale down the header to settle in the compressed header mode
        tl.to(titleRef.current, {
            scale: 0.7,
            transformOrigin: "top center",
            y: -10,
            duration: 1,
            ease: "power2.inOut"
        }, 0);

    }, { scope: containerRef });

    return (
        <section
            id="hero"
            ref={containerRef}
            className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-28 pb-10"
        >
            {/* Background Glows (static) */}
            <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-[var(--color-accent-purple)]/10 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] rounded-full bg-[var(--color-accent-pink)]/10 blur-[100px] pointer-events-none" />

            {/* Animated Ticket Wrapper */}
            <div 
                ref={ticketRef} 
                className="relative w-full max-w-[420px] h-[800px] min-h-[600px] max-h-[85vh] rounded-[48px] glass shadow-2xl flex flex-col justify-between overflow-hidden origin-top will-change-transform"
            >
                
                {/* Top Half: Dark Section with Giant Letters */}
                <div ref={titleRef} className="flex flex-col px-8 pt-10 shrink-0">
                    <div className="text-center text-[var(--color-text-secondary)] text-sm tracking-widest font-bold uppercase mb-10 md:mb-12">
                        Boarding Pass
                    </div>

                    {/* Origin -> Dest Flight Path */}
                    <div className="relative flex justify-between items-center w-full mb-6">
                        {/* Origin */}
                        <div className="flex flex-col">
                            <span className="text-6xl font-extrabold tracking-tighter text-[var(--color-text-primary)]">HD</span>
                            <span className="text-xs mt-2 ml-1 text-[var(--color-text-secondary)]">Frontend<br/>Developer</span>
                        </div>
                        
                        {/* Dotted path SVG / Line */}
                        <div className="absolute top-[40%] left-[30%] right-[30%] h-0.5 border-t-2 border-dashed border-[var(--color-card-border)]">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[var(--color-text-secondary)] text-lg">✈</div>
                        </div>

                        {/* Destination */}
                        <div className="flex flex-col text-right">
                            <span className="text-6xl font-extrabold tracking-tighter text-[var(--color-text-primary)]">DEV</span>
                            <span className="text-xs mt-2 mr-1 text-[var(--color-text-secondary)]">Fullstack<br/>Engineer</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Half: Passenger Details & QR Code Stub */}
                <div ref={stubRef} className="relative m-4 rounded-[32px] overflow-hidden flex flex-col flex-1 bg-[var(--color-app-bg)]/60">
                    
                    {/* Soft Purple Gradients inside the lower stub */}
                    <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[var(--color-accent-purple)]/20 to-transparent pointer-events-none" />
                    
                    {/* Top edge cutouts simulating horizontal ticket perforations within container */}
                    <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-[#0F0F12] shadow-inner" />
                    <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#0F0F12] shadow-inner" />

                    {/* Grid Passenger Details */}
                    <div className="px-6 py-6 pb-2 relative z-10 flex flex-col gap-4 text-[var(--color-text-primary)]">
                        {/* Row 1 */}
                        <div className="flex justify-between items-end">
                            <div className="flex flex-col">
                                <span className="text-[var(--color-text-secondary)] text-[10px] uppercase font-bold tracking-widest">Passenger</span>
                                <span className="text-sm font-semibold mt-1">Himanshu Dubey</span>
                            </div>
                            <div className="flex flex-col text-right">
                                <span className="text-[var(--color-text-secondary)] text-[10px] uppercase font-bold tracking-widest">Seat</span>
                                <span className="text-sm font-semibold mt-1">1A</span>
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="flex justify-between items-end">
                            <div className="flex flex-col">
                                <span className="text-[var(--color-text-secondary)] text-[10px] uppercase font-bold tracking-widest">Date</span>
                                <span className="text-sm font-semibold mt-1">{new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })}</span>
                            </div>
                            <div className="flex flex-col text-right">
                                <span className="text-[var(--color-text-secondary)] text-[10px] uppercase font-bold tracking-widest">Class</span>
                                <span className="text-sm font-semibold mt-1">First Class</span>
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div className="flex justify-between items-end">
                            <div className="flex flex-col">
                                <span className="text-[var(--color-text-secondary)] text-[10px] uppercase font-bold tracking-widest">Flight Number</span>
                                <span className="text-sm font-semibold mt-1">HD001</span>
                            </div>
                            <div className="flex flex-col text-right">
                                <span className="text-[var(--color-text-secondary)] text-[10px] uppercase font-bold tracking-widest">Terminal</span>
                                <span className="text-sm font-semibold mt-1">Web</span>
                            </div>
                        </div>
                    </div>

                    {/* LinkedIn QR Code Container */}
                    <div className="flex-1 px-6 pb-6 mt-4 flex flex-col justify-center items-center relative z-10 w-full overflow-hidden">
                        {/* Visual Tear Line separating text and QR */}
                        <div className="w-full h-0.5 border-t-2 border-dashed border-[var(--color-card-border)]/50 mb-6" />
                        
                        <div className="text-[var(--color-text-secondary)] text-[10px] uppercase font-bold tracking-widest text-center mb-4">
                            Scan to Connect on LinkedIn
                        </div>
                        
                        <div className="p-3 bg-white rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300">
                            <QRCode 
                                value="https://www.linkedin.com/in/himanshuportfolio/" 
                                bgColor="#FFFFFF" 
                                fgColor="#000000" 
                                size={140} 
                            />
                        </div>
                        
                        {/* Tiny Bottom Fade */}
                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[var(--color-accent-pink)]/10 to-transparent pointer-events-none" />
                    </div>

                </div>
            </div>
        </section>
    );
}
