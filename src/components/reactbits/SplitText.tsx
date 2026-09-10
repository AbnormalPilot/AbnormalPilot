"use client";

/**
 * SplitText, adapted from React Bits (https://reactbits.dev/text-animations/split-text), MIT.
 * Changes from upstream: block-level wrapper, left-aligned default, the element stays hidden
 * until the split is ready (no flash of unanimated text), and prefers-reduced-motion renders
 * the text statically.
 */

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { prefersReducedMotion } from "@/components/motion/prefersReducedMotion";

gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);

export interface SplitTextProps {
    text: string;
    className?: string;
    delay?: number;
    duration?: number;
    ease?: string | ((t: number) => number);
    splitType?: "chars" | "words" | "lines" | "words, chars";
    from?: gsap.TweenVars;
    to?: gsap.TweenVars;
    threshold?: number;
    rootMargin?: string;
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
    textAlign?: React.CSSProperties["textAlign"];
    onLetterAnimationComplete?: () => void;
}

type SplitHost = HTMLElement & { _rbsplitInstance?: GSAPSplitText };

const SplitText: React.FC<SplitTextProps> = ({
    text,
    className = "",
    delay = 50,
    duration = 1.25,
    ease = "power3.out",
    splitType = "chars",
    from = { opacity: 0, y: 40 },
    to = { opacity: 1, y: 0 },
    threshold = 0.1,
    rootMargin = "-100px",
    tag = "p",
    textAlign = "left",
    onLetterAnimationComplete,
}) => {
    const ref = useRef<SplitHost>(null);
    const animationCompletedRef = useRef(false);
    const onCompleteRef = useRef(onLetterAnimationComplete);
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        onCompleteRef.current = onLetterAnimationComplete;
    }, [onLetterAnimationComplete]);

    useEffect(() => {
        if (document.fonts.status === "loaded") {
            setFontsLoaded(true);
            return;
        }
        // Do not hold the headline hostage to a slow font: proceed after a short grace period.
        const timeout = window.setTimeout(() => setFontsLoaded(true), 1500);
        document.fonts.ready.then(() => setFontsLoaded(true));
        return () => window.clearTimeout(timeout);
    }, []);

    useGSAP(
        () => {
            const el = ref.current;
            if (!el || !text || !fontsLoaded) return;

            if (prefersReducedMotion() || animationCompletedRef.current) {
                gsap.set(el, { opacity: 1 });
                return;
            }

            if (el._rbsplitInstance) {
                try {
                    el._rbsplitInstance.revert();
                } catch {
                    /* already reverted */
                }
                el._rbsplitInstance = undefined;
            }

            const startPct = (1 - threshold) * 100;
            const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
            const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
            const marginUnit = marginMatch ? marginMatch[2] || "px" : "px";
            const sign =
                marginValue === 0
                    ? ""
                    : marginValue < 0
                      ? `-=${Math.abs(marginValue)}${marginUnit}`
                      : `+=${marginValue}${marginUnit}`;
            const start = `top ${startPct}%${sign}`;

            let targets: Element[] = [];
            const assignTargets = (self: GSAPSplitText) => {
                if (splitType.includes("chars") && self.chars?.length) targets = self.chars;
                if (!targets.length && splitType.includes("words") && self.words.length) targets = self.words;
                if (!targets.length && splitType.includes("lines") && self.lines.length) targets = self.lines;
                if (!targets.length) targets = self.chars || self.words || self.lines;
            };

            const splitInstance = new GSAPSplitText(el, {
                type: splitType,
                smartWrap: true,
                autoSplit: splitType === "lines",
                linesClass: "split-line",
                wordsClass: "split-word",
                charsClass: "split-char",
                reduceWhiteSpace: false,
                onSplit: (self: GSAPSplitText) => {
                    assignTargets(self);
                    gsap.set(el, { opacity: 1 });
                    return gsap.fromTo(
                        targets,
                        { ...from },
                        {
                            ...to,
                            duration,
                            ease,
                            stagger: delay / 1000,
                            scrollTrigger: {
                                trigger: el,
                                start,
                                once: true,
                                fastScrollEnd: true,
                                anticipatePin: 0.4,
                            },
                            onComplete: () => {
                                animationCompletedRef.current = true;
                                onCompleteRef.current?.();
                            },
                            willChange: "transform, opacity",
                            force3D: true,
                        },
                    );
                },
            });
            el._rbsplitInstance = splitInstance;

            return () => {
                ScrollTrigger.getAll().forEach((st) => {
                    if (st.trigger === el) st.kill();
                });
                try {
                    splitInstance.revert();
                } catch {
                    /* already reverted */
                }
                el._rbsplitInstance = undefined;
            };
        },
        {
            dependencies: [
                text,
                delay,
                duration,
                ease,
                splitType,
                JSON.stringify(from),
                JSON.stringify(to),
                threshold,
                rootMargin,
                fontsLoaded,
            ],
            scope: ref,
        },
    );

    return React.createElement(
        tag,
        {
            ref,
            className: `split-parent block ${className}`,
            style: { textAlign, opacity: 0, wordWrap: "break-word", willChange: "transform, opacity" },
        },
        text,
    );
};

export default SplitText;
