"use client";

import {
    siDocker,
    siExpo,
    siGsap,
    siNextdotjs,
    siNodedotjs,
    siPaypal,
    siPostgresql,
    siRazorpay,
    siReact,
    siShadcnui,
    siStripe,
    siTailwindcss,
    siThreedotjs,
    siTypescript,
    type SimpleIcon,
} from "simple-icons";
import LogoLoop, { type LogoItem } from "@/components/reactbits/LogoLoop";

const STACK: SimpleIcon[] = [
    siNextdotjs,
    siReact,
    siTypescript,
    siNodedotjs,
    siPostgresql,
    siTailwindcss,
    siExpo,
    siDocker,
    siGsap,
    siThreedotjs,
    siShadcnui,
    siStripe,
    siRazorpay,
    siPaypal,
];

const logos: LogoItem[] = STACK.map((icon) => ({
    title: icon.title,
    node: (
        <span className="inline-flex items-center gap-3 text-ink-soft">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
                <path d={icon.path} />
            </svg>
            <span className="text-base font-medium">{icon.title}</span>
        </span>
    ),
}));

export default function Stack() {
    return (
        <section className="py-16 md:py-20" aria-labelledby="stack-heading">
            <div className="wrap">
                <h2 id="stack-heading" className="t-display text-[clamp(1.6rem,2.6vw,2.1rem)] leading-tight">
                    What I build with.
                </h2>
            </div>
            <div className="mt-10">
                <LogoLoop
                    logos={logos}
                    speed={48}
                    gap={64}
                    logoHeight={24}
                    pauseOnHover
                    fadeOut
                    fadeOutColor="var(--color-bg)"
                    ariaLabel="Technology stack"
                />
            </div>
        </section>
    );
}
