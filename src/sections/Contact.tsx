"use client";

import { socials } from "@/constants";

export default function Contact() {
    return (
        <section id="contact" className="px-6 py-24 relative max-w-3xl mx-auto">
            <div className="flex flex-col items-center mb-16 space-y-4">
                <span className="text-[#A855F7] text-sm font-bold tracking-[0.2em] uppercase">
                    Approach Frequency
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight text-center">
                    Book Flight
                </h2>
                <p className="text-text-secondary text-center max-w-lg mx-auto">
                    Ready to launch your next idea? Fill out your manifest and let's get you cleared for takeoff.
                </p>
            </div>

            {/* Form & Contact Details Container */}
            <div className="w-full rounded-[40px] glass shadow-2xl p-8 md:p-12">
                
                <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                    {/* Passenger Inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] uppercase font-bold text-text-secondary tracking-widest pl-2">Passenger Name</label>
                            <input 
                                type="text"
                                placeholder="John Doe"
                                className="w-full bg-[#1C1C1E]/50 text-text-primary border border-[#2C2C2E] rounded-2xl px-6 py-4 outline-none focus:border-[var(--color-accent-purple)] transition-colors"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] uppercase font-bold text-text-secondary tracking-widest pl-2">Email Address</label>
                            <input 
                                type="email"
                                placeholder="john@example.com"
                                className="w-full bg-[#1C1C1E]/50 text-text-primary border border-[#2C2C2E] rounded-2xl px-6 py-4 outline-none focus:border-[var(--color-accent-purple)] transition-colors"
                            />
                        </div>
                    </div>

                    {/* Cargo / Message */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase font-bold text-text-secondary tracking-widest pl-2">Flight Requirements</label>
                        <textarea 
                            rows={4}
                            placeholder="Tell me about your next digital destination..."
                            className="w-full bg-[#1C1C1E]/50 text-text-primary border border-[#2C2C2E] rounded-2xl px-6 py-4 outline-none focus:border-[var(--color-accent-purple)] transition-colors resize-none"
                        />
                    </div>

                    <a
                        href="mailto:himanshudubey@welocalhost.com"
                        className="mt-4 w-full py-5 text-center flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#A855F7] to-[#EC4899] text-white font-extrabold text-base tracking-wide shadow-lg glow-btn transition-transform hover:scale-[1.02] active:scale-95"
                    >
                        <span>Send Transmission</span>
                        <span className="text-xl">✈</span>
                    </a>
                </form>

                {/* Separator */}
                <div className="flex items-center my-10 border-t border-[var(--color-card-border)]">
                    <span className="mx-auto -mt-3 glass px-4 py-1 text-[10px] uppercase font-bold text-text-secondary tracking-widest rounded-full">Or connect via</span>
                </div>

                {/* Social Frequencies */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {socials.map((s) => (
                        <a
                            key={s.name}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-2 p-4 rounded-3xl bg-[var(--color-card-border)]/20 border border-[var(--color-card-border)] hover:border-[var(--color-accent-purple)] hover:bg-[var(--color-accent-purple)]/10 transition-all group"
                        >
                            <span className="text-sm font-semibold text-text-primary group-hover:text-[var(--color-accent-purple)] transition-colors">{s.name}</span>
                            <span className="text-[10px] text-text-secondary">FREQ CH</span>
                        </a>
                    ))}
                </div>
            </div>
            
            {/* Footer details */}
            <div className="mt-16 text-center text-[#6B7280] text-xs font-semibold tracking-wider flex flex-col items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-tr from-[#A855F7] to-[#EC4899] glow-purple" />
                © {new Date().getFullYear()} HD-OPS. ALL FLIGHTS RESERVED.
            </div>
        </section>
    );
}
