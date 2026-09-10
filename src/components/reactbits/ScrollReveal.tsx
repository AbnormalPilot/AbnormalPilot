"use client";

/**
 * ScrollReveal, adapted from React Bits (https://reactbits.dev/text-animations/scroll-reveal), MIT.
 * Changes from upstream: renders one semantic tag instead of a heading wrapping a paragraph,
 * only kills the ScrollTriggers it created, and prefers-reduced-motion renders static text.
 */

import React, { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/components/motion/prefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
    children: string;
    as?: "h1" | "h2" | "h3" | "p";
    enableBlur?: boolean;
    baseOpacity?: number;
    baseRotation?: number;
    blurStrength?: number;
    className?: string;
    rotationEnd?: string;
    wordAnimationEnd?: string;
}

export default function ScrollReveal({
    children,
    as = "p",
    enableBlur = true,
    baseOpacity = 0.1,
    baseRotation = 3,
    blurStrength = 4,
    className = "",
    rotationEnd = "bottom bottom",
    wordAnimationEnd = "bottom bottom",
}: ScrollRevealProps) {
    const ref = useRef<HTMLElement>(null);

    const words = useMemo(
        () =>
            children.split(/(\s+)/).map((word, index) =>
                /^\s+$/.test(word) ? (
                    word
                ) : (
                    <span className="word inline-block" key={index}>
                        {word}
                    </span>
                ),
            ),
        [children],
    );

    useEffect(() => {
        const el = ref.current;
        if (!el || prefersReducedMotion()) return;

        const wordEls = el.querySelectorAll<HTMLElement>(".word");
        const tweens: gsap.core.Tween[] = [
            gsap.fromTo(
                el,
                { transformOrigin: "0% 50%", rotate: baseRotation },
                {
                    ease: "none",
                    rotate: 0,
                    scrollTrigger: { trigger: el, start: "top bottom", end: rotationEnd, scrub: true },
                },
            ),
            gsap.fromTo(
                wordEls,
                { opacity: baseOpacity, willChange: "opacity" },
                {
                    ease: "none",
                    opacity: 1,
                    stagger: 0.05,
                    scrollTrigger: { trigger: el, start: "top bottom-=20%", end: wordAnimationEnd, scrub: true },
                },
            ),
        ];

        if (enableBlur) {
            tweens.push(
                gsap.fromTo(
                    wordEls,
                    { filter: `blur(${blurStrength}px)` },
                    {
                        ease: "none",
                        filter: "blur(0px)",
                        stagger: 0.05,
                        scrollTrigger: { trigger: el, start: "top bottom-=20%", end: wordAnimationEnd, scrub: true },
                    },
                ),
            );
        }

        return () => {
            tweens.forEach((tween) => {
                tween.scrollTrigger?.kill();
                tween.kill();
            });
        };
    }, [enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength]);

    return React.createElement(as, { ref, className }, words);
}
