"use client";

/**
 * Magnet, adapted from React Bits (https://reactbits.dev/animations/magnet), MIT.
 * Changes from upstream: the transform is written straight to the DOM instead of going
 * through React state on every pointer move, and the effect is skipped under
 * prefers-reduced-motion or on touch-only devices.
 */

import React, { useEffect, useRef, type HTMLAttributes, type ReactNode } from "react";
import { prefersReducedMotion } from "@/components/motion/prefersReducedMotion";

interface MagnetProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    padding?: number;
    disabled?: boolean;
    magnetStrength?: number;
    activeTransition?: string;
    inactiveTransition?: string;
    wrapperClassName?: string;
    innerClassName?: string;
}

const Magnet: React.FC<MagnetProps> = ({
    children,
    padding = 100,
    disabled = false,
    magnetStrength = 2,
    activeTransition = "transform 0.3s ease-out",
    inactiveTransition = "transform 0.5s ease-in-out",
    wrapperClassName = "",
    innerClassName = "",
    ...props
}) => {
    const wrapRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const box = wrapRef.current;
        const el = innerRef.current;
        if (!box || !el) return;

        const reset = () => {
            el.style.transition = inactiveTransition;
            el.style.transform = "translate3d(0, 0, 0)";
        };

        const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
        if (disabled || !finePointer || prefersReducedMotion()) {
            reset();
            return;
        }

        let active = false;
        const onMove = (e: MouseEvent) => {
            const { left, top, width, height } = box.getBoundingClientRect();
            const centerX = left + width / 2;
            const centerY = top + height / 2;
            const inside =
                Math.abs(centerX - e.clientX) < width / 2 + padding &&
                Math.abs(centerY - e.clientY) < height / 2 + padding;

            if (inside) {
                if (!active) {
                    active = true;
                    el.style.transition = activeTransition;
                }
                const x = (e.clientX - centerX) / magnetStrength;
                const y = (e.clientY - centerY) / magnetStrength;
                el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            } else if (active) {
                active = false;
                reset();
            }
        };

        window.addEventListener("mousemove", onMove, { passive: true });
        return () => {
            window.removeEventListener("mousemove", onMove);
            reset();
        };
    }, [padding, disabled, magnetStrength, activeTransition, inactiveTransition]);

    return (
        <div
            ref={wrapRef}
            className={wrapperClassName}
            style={{ position: "relative", display: "inline-block" }}
            {...props}
        >
            <div ref={innerRef} className={innerClassName} style={{ willChange: "transform" }}>
                {children}
            </div>
        </div>
    );
};

export default Magnet;
