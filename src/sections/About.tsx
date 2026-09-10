import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import ScrollReveal from "@/components/reactbits/ScrollReveal";
import { profile, scope } from "@/constants";

export default function About() {
    return (
        <section id="about" className="py-24 md:py-32">
            <div className="wrap">
                <ScrollReveal
                    as="h2"
                    className="t-display max-w-[24ch] text-[clamp(1.9rem,3.8vw,3.1rem)] leading-[1.12]"
                    baseOpacity={0.12}
                    baseRotation={1.5}
                    blurStrength={3}
                >
                    I don&apos;t just write code. I take responsibility for what ships.
                </ScrollReveal>

                <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-10">
                    <div className="lg:col-span-6">
                        <Reveal>
                            <p className="text-lg leading-relaxed text-ink-soft">
                                I work across product, engineering and operations: the decisions that
                                turn an idea into software customers can trust and a business can depend
                                on.
                            </p>
                        </Reveal>
                        <Reveal delay={0.08}>
                            <p className="mt-6 text-lg leading-relaxed text-muted">
                                Today I lead technology across Localhost, Qbitio and TargetHunt, staying
                                close enough to the code to keep strategy grounded in reality.
                            </p>
                        </Reveal>
                        <Reveal delay={0.16}>
                            <dl className="mt-12 border-t border-line">
                                {scope.map(([term, value]) => (
                                    <div
                                        key={term}
                                        className="grid grid-cols-[8rem_1fr] gap-6 border-b border-line py-4"
                                    >
                                        <dt className="t-label pt-0.5 text-ink">{term}</dt>
                                        <dd className="text-base text-muted">{value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </Reveal>
                    </div>

                    <div className="lg:col-span-5 lg:col-start-8">
                        <Reveal distance={40}>
                            <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-tint shadow-frame">
                                <Image
                                    src={profile.portraits.about}
                                    alt="Himanshu Dubey photographed against a dark studio background."
                                    fill
                                    sizes="(min-width: 1024px) 40vw, 100vw"
                                    className="object-cover object-[68%_center]"
                                />
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
