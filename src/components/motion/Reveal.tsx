"use client";

import AnimatedContent from "@/components/reactbits/AnimatedContent";

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    distance?: number;
    duration?: number;
}

/** House defaults on top of React Bits' AnimatedContent: short rise, expo ease, once. */
export default function Reveal({ children, className = "", delay = 0, distance = 28, duration = 0.9 }: RevealProps) {
    return (
        <AnimatedContent
            className={className}
            delay={delay}
            distance={distance}
            duration={duration}
            ease="power3.out"
            threshold={0.15}
        >
            {children}
        </AnimatedContent>
    );
}
