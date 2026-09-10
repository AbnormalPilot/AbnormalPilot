import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { roles } from "@/constants";

export default function Companies() {
    return (
        <section id="companies" className="pt-6 pb-20 md:pt-8 md:pb-24">
            <div className="wrap">
                <p className="t-label text-muted">Currently leading technology at</p>

                <ul className="mt-10 grid gap-12 md:grid-cols-3 md:gap-10">
                    {roles.map((role, i) => (
                        <li key={role.id}>
                            <Reveal delay={i * 0.08}>
                                <a
                                    href={role.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block"
                                >
                                    <Image
                                        src={role.mark}
                                        alt=""
                                        width={26}
                                        height={26}
                                        className="h-[26px] w-[26px] object-contain grayscale transition duration-300 group-hover:grayscale-0"
                                    />
                                    <span className="t-display mt-5 block text-xl leading-tight">
                                        {role.company}
                                    </span>
                                    <span className="mt-1.5 block text-sm text-muted">{role.descriptor}</span>
                                    <span className="mt-5 block text-sm font-medium text-ink">{role.title}</span>
                                    <span className="mt-1 inline-flex items-center gap-1 text-sm text-muted transition-colors group-hover:text-ink">
                                        {role.domain}
                                        <ArrowUpRight
                                            size={14}
                                            strokeWidth={1.75}
                                            aria-hidden="true"
                                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                        />
                                    </span>
                                </a>
                            </Reveal>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
