import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import GlareHover from "@/components/reactbits/GlareHover";
import { profile, projects, type Project } from "@/constants";

function ProjectCard({ project }: { project: Project }) {
    const wide = project.wide === true;

    return (
        <a href={project.href} target="_blank" rel="noopener noreferrer" className="group block">
            <GlareHover
                width="100%"
                height="auto"
                background="var(--color-tint)"
                borderRadius="var(--radius-card)"
                borderColor="var(--color-line)"
                glareColor="#ffffff"
                glareOpacity={0.35}
                glareAngle={-40}
                glareSize={220}
                transitionDuration={750}
            >
                <div className={`relative w-full overflow-hidden ${wide ? "aspect-[2.15/1]" : "aspect-[4/3]"}`}>
                    <div className="absolute inset-x-[7%] top-[9%] bottom-0 overflow-hidden rounded-t-[10px] border border-b-0 border-line bg-surface shadow-frame transition-transform duration-700 ease-out-expo group-hover:-translate-y-1.5">
                        <Image
                            src={project.image}
                            alt={project.alt}
                            fill
                            sizes={wide ? "(min-width: 1200px) 1100px, 100vw" : "(min-width: 768px) 50vw, 100vw"}
                            className="object-cover object-top"
                        />
                    </div>
                </div>
            </GlareHover>

            <div className="mt-5 flex items-start justify-between gap-6">
                <div className="min-w-0">
                    <h3 className="t-display text-2xl leading-tight">{project.title}</h3>
                    <p className="mt-2 max-w-[52ch] text-base leading-relaxed text-muted">{project.summary}</p>
                    <p className="mt-3 text-sm text-muted">
                        {project.year} · {project.stack.join(", ")}
                    </p>
                </div>
                <ArrowUpRight
                    size={20}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="mt-1.5 shrink-0 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
            </div>
        </a>
    );
}

export default function Work() {
    return (
        <section id="work" className="py-24 md:py-32">
            <div className="wrap">
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <h2 className="t-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.04]">Selected work.</h2>
                    <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-ink"
                    >
                        More on LinkedIn
                        <ArrowUpRight
                            size={15}
                            strokeWidth={1.75}
                            aria-hidden="true"
                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                    </a>
                </div>

                <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2">
                    {projects.map((project, i) => (
                        <Reveal key={project.id} delay={i * 0.08} className={project.wide ? "md:col-span-2" : ""}>
                            <ProjectCard project={project} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
