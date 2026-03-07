"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import gsap from "gsap";
import { Observer } from "gsap/all";
import { useEffect, useRef } from "react";
gsap.registerPlugin(Observer);

interface MarqueeProps {
    items: string[];
    className?: string;
    icon?: string;
    iconClassName?: string;
    reverse?: boolean;
}

const Marquee = ({
    items,
    className = "text-white bg-black",
    icon = "weui:star-filled",
    iconClassName = "",
    reverse = false,
}: MarqueeProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<(HTMLSpanElement | null)[]>([]);

    function horizontalLoop(
        loopItems: HTMLElement[],
        config: {
            repeat?: number;
            paused?: boolean;
            speed?: number;
            snap?: number | false;
            paddingRight?: number;
            reversed?: boolean;
        }
    ) {
        const elements = gsap.utils.toArray(loopItems) as HTMLElement[];
        config = config || {};
        const tl = gsap.timeline({
            repeat: config.repeat,
            paused: config.paused,
            defaults: { ease: "none" },
            onReverseComplete: () => {
                tl.totalTime(tl.rawTime() + tl.duration() * 100);
            },
        });
        const length = elements.length;
        const startX = elements[0].offsetLeft;
        const times: number[] = [];
        const widths: number[] = [];
        const xPercents: number[] = [];
        let curIndex = 0;
        const pixelsPerSecond = (config.speed || 1) * 100;
        const snap =
            config.snap === false
                ? (v: number) => v
                : gsap.utils.snap(config.snap || 1);

        gsap.set(elements, {
            xPercent: (i: number, el: HTMLElement) => {
                const w = (widths[i] = parseFloat(
                    gsap.getProperty(el, "width", "px") as string
                ));
                xPercents[i] = snap(
                    (parseFloat(gsap.getProperty(el, "x", "px") as string) / w) * 100 +
                    (gsap.getProperty(el, "xPercent") as number)
                );
                return xPercents[i];
            },
        });
        gsap.set(elements, { x: 0 });

        const totalWidth =
            elements[length - 1].offsetLeft +
            (xPercents[length - 1] / 100) * widths[length - 1] -
            startX +
            elements[length - 1].offsetWidth *
            (gsap.getProperty(elements[length - 1], "scaleX") as number) +
            (config.paddingRight || 0);

        for (let i = 0; i < length; i++) {
            const item = elements[i];
            const curX = (xPercents[i] / 100) * widths[i];
            const distanceToStart = item.offsetLeft + curX - startX;
            const distanceToLoop =
                distanceToStart +
                widths[i] * (gsap.getProperty(item, "scaleX") as number);
            tl.to(
                item,
                {
                    xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
                    duration: distanceToLoop / pixelsPerSecond,
                },
                0
            )
                .fromTo(
                    item,
                    {
                        xPercent: snap(
                            ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
                        ),
                    },
                    {
                        xPercent: xPercents[i],
                        duration:
                            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
                        immediateRender: false,
                    },
                    distanceToLoop / pixelsPerSecond
                )
                .add("label" + i, distanceToStart / pixelsPerSecond);
            times[i] = distanceToStart / pixelsPerSecond;
        }

        function toIndex(index: number, vars?: gsap.TweenVars) {
            vars = vars || {};
            if (Math.abs(index - curIndex) > length / 2) {
                index += index > curIndex ? -length : length;
            }
            const newIndex = gsap.utils.wrap(0, length, index);
            const time = times[newIndex];
            let adjustedTime = time;
            if (time > tl.time() !== index > curIndex) {
                vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
                adjustedTime += tl.duration() * (index > curIndex ? 1 : -1);
            }
            curIndex = newIndex;
            vars.overwrite = true;
            return tl.tweenTo(adjustedTime, vars);
        }

        (tl as gsap.core.Timeline & {
            next: (vars?: gsap.TweenVars) => gsap.core.Tween;
            previous: (vars?: gsap.TweenVars) => gsap.core.Tween;
            current: () => number;
            toIndex: (index: number, vars?: gsap.TweenVars) => gsap.core.Tween;
            times: number[];
        }).next = (vars?: gsap.TweenVars) => toIndex(curIndex + 1, vars);
        (tl as gsap.core.Timeline & {
            previous: (vars?: gsap.TweenVars) => gsap.core.Tween;
        }).previous = (vars?: gsap.TweenVars) => toIndex(curIndex - 1, vars);

        tl.progress(1, true).progress(0, true);
        if (config.reversed) {
            tl.vars.onReverseComplete?.();
            tl.reverse();
        }
        return tl;
    }

    useEffect(() => {
        const validItems = itemsRef.current.filter(Boolean) as HTMLElement[];
        if (validItems.length === 0) return;

        const tl = horizontalLoop(validItems, {
            repeat: -1,
            paddingRight: 30,
            reversed: reverse,
        });

        Observer.create({
            onChangeY(self) {
                let factor = 2.5;
                if ((!reverse && self.deltaY < 0) || (reverse && self.deltaY > 0)) {
                    factor *= -1;
                }
                gsap
                    .timeline({
                        defaults: {
                            ease: "none",
                        },
                    })
                    .to(tl, { timeScale: factor * 2.5, duration: 0.2, overwrite: true })
                    .to(tl, { timeScale: factor / 2.5, duration: 1 }, "+=0.3");
            },
        });
        return () => { tl.kill(); };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items, reverse]);

    return (
        <div
            ref={containerRef}
            className={`overflow-hidden w-full h-20 md:h-[100px] flex items-center marquee-text-responsive font-light uppercase whitespace-nowrap ${className}`}
        >
            <div className="flex">
                {items.map((text, index) => (
                    <span
                        key={index}
                        ref={(el) => { itemsRef.current[index] = el; }}
                        className="flex items-center px-16 gap-x-32"
                    >
                        {text} <Icon icon={icon} className={iconClassName} />
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
