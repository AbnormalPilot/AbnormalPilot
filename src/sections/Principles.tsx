import { RefreshCw, ShieldCheck, Target, UserRound } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { principles } from "@/constants";

const ICONS = [Target, ShieldCheck, RefreshCw, UserRound];

export default function Principles() {
    return (
        <section id="principles" className="py-24 md:py-32">
            <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-5">
                    <div className="lg:sticky lg:top-28">
                        <Reveal>
                            <h2 className="t-display text-[clamp(2rem,3.6vw,3rem)] leading-[1.06]">
                                Built like a product company, not a code shop.
                            </h2>
                        </Reveal>
                        <Reveal delay={0.08}>
                            <p className="mt-6 max-w-[42ch] text-lg leading-relaxed text-muted">
                                I own the hard parts: product decisions and architecture through launch,
                                observability and iteration.
                            </p>
                        </Reveal>
                    </div>
                </div>

                <ul className="border-t border-line lg:col-span-6 lg:col-start-7">
                    {principles.map((item, i) => {
                        const Icon = ICONS[i];
                        return (
                            <li key={item.title} className="border-b border-line">
                                <Reveal delay={i * 0.06}>
                                    <div className="grid grid-cols-[auto_1fr] gap-6 py-8">
                                        <span className="grid h-11 w-11 place-items-center rounded-btn bg-tint text-accent">
                                            <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
                                        </span>
                                        <div>
                                            <h3 className="t-display text-xl leading-tight">{item.title}</h3>
                                            <p className="mt-2 text-base leading-relaxed text-muted">{item.copy}</p>
                                        </div>
                                    </div>
                                </Reveal>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
