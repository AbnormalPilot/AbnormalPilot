"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";
import { prefersReducedMotion } from "@/components/motion/prefersReducedMotion";
import Magnet from "@/components/reactbits/Magnet";
import SplitText from "@/components/reactbits/SplitText";
import { CONTACT_LABEL, profile } from "@/constants";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Hero() {
    const root = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            const scope = root.current;
            if (!scope) return;

            if (prefersReducedMotion()) {
                gsap.set("[data-rise]", { opacity: 1 });
                return;
            }

            // Supporting copy rises in once the headline has started.
            gsap.fromTo(
                "[data-rise]",
                { opacity: 0, y: 18 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.09, delay: 0.45 },
            );

            // The opening recedes as the page moves on: the portrait drifts slower
            // than the copy, so leaving the hero feels like depth rather than a cut.
            gsap.to("[data-hero-copy]", {
                yPercent: -10,
                opacity: 0.4,
                ease: "none",
                scrollTrigger: { trigger: scope, start: "top top", end: "bottom top", scrub: 0.5 },
            });
        },
        { scope: root },
    );

    return (
        <section
            ref={root}
            id="top"
            className="relative flex min-h-[100dvh] items-center overflow-hidden pt-[68px]"
        >
            <div aria-hidden="true" className="hero-wash pointer-events-none absolute inset-0 -z-10" />

            <div
                data-portrait
                className="pointer-events-none absolute bottom-0 right-0 top-[6%] hidden w-[52%] lg:block"
            >
                <Image
                    src={profile.portraits.hero}
                    alt="Himanshu Dubey, founder and CTO."
                    fill
                    priority
                    sizes="56vw"
                    className="portrait-fade object-cover object-[58%_top]"
                />
            </div>

            <div className="wrap relative py-16">
                <div data-hero-copy className="lg:max-w-[40rem]">
                    <p data-rise className="t-label text-muted opacity-0">
                        Founder &amp; CTO
                    </p>

                    <SplitText
                        tag="h1"
                        text="Building companies through software."
                        className="t-display mt-6 text-[clamp(2.15rem,5.4vw,4.25rem)] leading-[1.03] text-ink"
                        splitType="words"
                        delay={70}
                        duration={0.9}
                        from={{ opacity: 0, y: 28 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0}
                        rootMargin="0px"
                    />

                    <p data-rise className="mt-7 max-w-[46ch] text-lg leading-relaxed text-muted opacity-0">
                        CTO at Localhost, lead engineer at Qbitio and technology architect at TargetHunt.
                        Architecture, product direction and the teams that deliver.
                    </p>

                    <div data-rise className="mt-10 flex flex-wrap items-center gap-3 opacity-0">
                        <Magnet padding={40} magnetStrength={10}>
                            <a href="#contact" className="btn-primary h-12 px-6">
                                {CONTACT_LABEL}
                            </a>
                        </Magnet>
                        <a href="#work" className="btn-secondary h-12 px-6">
                            See the work
                            <ArrowDown size={16} strokeWidth={1.75} aria-hidden="true" />
                        </a>
                    </div>
                </div>

                {/* Full-bleed on narrow screens: boxed inside the gutter, the photograph's
                    own studio backdrop reads as a pasted rectangle against the page. */}
                <div className="relative left-1/2 mt-14 aspect-[5/6] w-screen -translate-x-1/2 sm:aspect-[16/11] lg:hidden">
                    <Image
                        src={profile.portraits.hero}
                        alt="Himanshu Dubey, founder and CTO."
                        fill
                        priority
                        sizes="100vw"
                        className="portrait-fade-b object-cover object-[58%_12%]"
                    />
                </div>
            </div>
        </section>
    );
}
