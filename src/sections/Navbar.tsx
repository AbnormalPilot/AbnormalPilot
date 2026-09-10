"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X } from "lucide-react";
import { useRef, useState } from "react";
import Mark from "@/components/Mark";
import { CONTACT_LABEL, nav, profile } from "@/constants";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const MOBILE_LINKS = [...nav, { label: "Contact", id: "contact" }];

export default function Navbar() {
    const header = useRef<HTMLElement>(null);
    const [open, setOpen] = useState(false);

    useGSAP(
        () => {
            const el = header.current;
            if (!el) return;

            // Stuck state without a scroll listener: ScrollTrigger batches its reads.
            ScrollTrigger.create({
                start: 16,
                end: "max",
                onToggle: (self) => el.classList.toggle("is-stuck", self.isActive),
            });

            // Read position on a page with no panel breaks: the bar is the only
            // cue for how far through the document you are, so it is scrubbed
            // against total scroll rather than animated on its own clock.
            gsap.fromTo(
                "[data-progress]",
                { scaleX: 0 },
                { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.3 } },
            );

            // Current-section indicator so a one-page site still tells you where you are.
            nav.forEach(({ id }) => {
                const section = document.getElementById(id);
                const link = el.querySelector<HTMLElement>(`[data-nav="${id}"]`);
                if (!section || !link) return;
                ScrollTrigger.create({
                    trigger: section,
                    start: "top 45%",
                    end: "bottom 45%",
                    onToggle: (self) => link.classList.toggle("is-active", self.isActive),
                });
            });
        },
        { scope: header },
    );

    return (
        <header
            ref={header}
            className="fixed inset-x-0 top-0 z-50 border-b border-transparent transition-[background-color,border-color] duration-300 [&.is-stuck]:border-line [&.is-stuck]:bg-bg/85 [&.is-stuck]:backdrop-blur-xl"
        >
            <div className="wrap flex h-[68px] items-center justify-between gap-6">
                <a href="#top" className="flex items-center gap-2.5" aria-label="Himanshu Dubey, back to top">
                    <Mark className="text-ink" />
                    <span className="font-display text-[1.05rem] font-semibold tracking-tight">
                        {profile.name}
                    </span>
                </a>

                <nav className="hidden items-center gap-8 md:flex" aria-label="Sections">
                    {nav.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            data-nav={link.id}
                            className="text-sm font-medium text-muted transition-colors hover:text-ink [&.is-active]:text-ink"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <a href="#contact" className="btn-primary hidden h-10 px-4 sm:inline-flex">
                        {CONTACT_LABEL}
                    </a>
                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-btn border border-line bg-surface md:hidden"
                    >
                        {open ? (
                            <X size={16} strokeWidth={1.5} aria-hidden="true" />
                        ) : (
                            <Menu size={16} strokeWidth={1.5} aria-hidden="true" />
                        )}
                    </button>
                </div>
            </div>

            <div
                data-progress
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-accent opacity-0 transition-opacity duration-300 [.is-stuck_&]:opacity-100"
            />

            {open && (
                <div className="border-t border-line bg-bg md:hidden">
                    <nav className="wrap flex flex-col py-2" aria-label="Sections">
                        {MOBILE_LINKS.map((link) => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                onClick={() => setOpen(false)}
                                className="border-b border-line py-4 text-lg font-medium last:border-b-0"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
