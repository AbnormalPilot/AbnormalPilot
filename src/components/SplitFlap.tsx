"use client";

import { useEffect, useState } from "react";

const CHARSET = " ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.:-/·";

interface SplitFlapProps {
    value: string;
    /** ms delay before this word starts animating */
    startDelay?: number;
    className?: string;
    charClassName?: string;
}

function FlapChar({
    target,
    delay,
    charClassName = "",
}: {
    target: string;
    delay: number;
    charClassName?: string;
}) {
    const [display, setDisplay] = useState(" ");
    const upper = target.toUpperCase();
    const targetIdx = CHARSET.indexOf(upper);

    useEffect(() => {
        if (targetIdx === -1) {
            setDisplay(upper);
            return;
        }

        let frame = 0;
        const steps = targetIdx + Math.floor(Math.random() * 4); // slight overshoot for realism
        let timerId: ReturnType<typeof setTimeout>;

        timerId = setTimeout(() => {
            const tick = () => {
                setDisplay(CHARSET[frame % CHARSET.length]);
                frame++;
                if (frame > steps) {
                    setDisplay(upper);
                    return;
                }
                timerId = setTimeout(tick, 30 + Math.random() * 20);
            };
            tick();
        }, delay);

        return () => clearTimeout(timerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [target]);

    return (
        <span
            className={`flap-char ${charClassName}`}
            aria-hidden="true"
        >
            {display}
        </span>
    );
}

export default function SplitFlap({
    value,
    startDelay = 0,
    className = "",
    charClassName = "",
}: SplitFlapProps) {
    const chars = value.split("");

    return (
        <span className={className} aria-label={value}>
            {chars.map((ch, i) => (
                <FlapChar
                    key={i}
                    target={ch}
                    delay={startDelay + i * 55}
                    charClassName={charClassName}
                />
            ))}
        </span>
    );
}
