import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import Magnet from "@/components/reactbits/Magnet";
import { CONTACT_LABEL, profile, socials } from "@/constants";

export default function Contact() {
    return (
        <section id="contact" className="pt-16 pb-16 md:pt-20 md:pb-20">
            <div className="wrap">
                <Reveal>
                    <h2 className="t-display max-w-[14ch] text-[clamp(2.25rem,4.6vw,3.75rem)] leading-[1.02]">
                        Have a serious product to ship?
                    </h2>
                </Reveal>
                <Reveal delay={0.08}>
                    <p className="mt-8 max-w-[56ch] text-lg leading-relaxed text-muted">
                        Bring the problem. I bring product judgment, engineering depth and the discipline
                        to get it into production.
                    </p>
                </Reveal>
                <Reveal delay={0.16}>
                    <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                        <Magnet padding={40} magnetStrength={10}>
                            <a href={`mailto:${profile.email}`} className="btn-primary h-12 px-6">
                                {CONTACT_LABEL}
                            </a>
                        </Magnet>
                        <a
                            href={`mailto:${profile.email}`}
                            className="text-base font-medium text-ink underline decoration-line-strong underline-offset-[6px] transition-colors hover:decoration-ink"
                        >
                            {profile.email}
                        </a>
                    </div>
                </Reveal>
                <Reveal delay={0.24}>
                    <ul className="mt-20 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-8">
                        {socials.map((social) => (
                            <li key={social.name}>
                                <a
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-ink"
                                >
                                    {social.name}
                                    <ArrowUpRight
                                        size={14}
                                        strokeWidth={1.75}
                                        aria-hidden="true"
                                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </Reveal>
            </div>
        </section>
    );
}
