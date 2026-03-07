"use client";

import { useRef } from "react";
import AnimatedHeaderSection from "@/components/AnimatedHeaderSection";
import { AnimatedTextLines } from "@/components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface EducationItem {
    icon: string;
    degree: string;
    institution: string;
    url: string;
    year: string;
    hoverColor: string;
}

interface AchievementItem {
    icon: string;
    title: string;
    issuer: string;
    url: string;
    date: string;
    hoverColor: string;
}

interface ActivityItem {
    icon: string;
    label: string;
    url: string;
    hoverColor: string;
}

const About = () => {
    const text = `Passionate about clean architecture
    I build scalable, high-performance solutions
    from prototype to production`;

    const aboutText = ``;

    const education: EducationItem[] = [
        {
            icon: "📚",
            degree: "Senior Secondary Education",
            institution: "Kendriya Vidyalaya",
            url: "https://aliganjshift2.kvs.ac.in/",
            year: "2024",
            hoverColor: "hover:text-blue-400",
        },
        {
            icon: "🎓",
            degree: "Bachelor of Technology in Computer Science(AI & ML)",
            institution: "Newton School of Technology, ADYPU Pune",
            url: "https://www.newtonschool.co/newton-school-of-technology-nst/nst-adypu-pune",
            year: "2025-2029",
            hoverColor: "hover:text-green-400",
        },
    ];

    const achievements: AchievementItem[] = [
        {
            icon: "🏆",
            title: "Inspire Award MANAK",
            issuer: "Department of Science & Technology",
            url: "https://drive.google.com/drive/folders/1RdWSHG47svhyDgpvHiVlKiNwAVt5dNXz?usp=sharing",
            date: "2020",
            hoverColor: "hover:text-orange-400",
        },
        {
            icon: "🥇",
            title: "Building AI Readiness Among Young Innovators",
            issuer: "INTEL India & DST",
            url: "https://drive.google.com/drive/folders/1rlHOek68BZwPnuhGAOUJKHYIS3P98m23?usp=sharing",
            date: "2022",
            hoverColor: "hover:text-blue-400",
        },
        {
            icon: "⭐",
            title: "Youth Unnati & Vikas using AI",
            issuer: "INTEL India & DST ",
            url: "https://drive.google.com/drive/folders/1XVguGGk35WKQYtgWCzawIp2Fg3978hov?usp=sharing",
            date: "2023",
            hoverColor: "hover:text-green-400",
        },
    ];

    const activities: ActivityItem[] = [
        {
            icon: "♙",
            label: "Play Chess",
            url: "https://chess.com/member/Abnormal_Pilot",
            hoverColor: "hover:text-green-400",
        },
        {
            icon: "🎶",
            label: "Listen to music",
            url: "https://open.spotify.com/playlist/2aJgHuXPj8a27kDQ5opeKv?si=332671e3c1794379",
            hoverColor: "hover:text-green-400",
        },
        {
            icon: "💪",
            label: "Gym",
            url: "https://maps.app.goo.gl/aCH2XUqbSsrZS2kw7",
            hoverColor: "hover:text-red-400",
        },
    ];

    const imgRef = useRef<HTMLImageElement>(null);

    useGSAP(() => {
        gsap.to("#about", {
            scale: 0.95,
            scrollTrigger: {
                trigger: "#about",
                start: "bottom 80%",
                end: "bottom 20%",
                scrub: true,
                markers: false,
            },
            ease: "power1.inOut",
        });

        gsap.set(imgRef.current, {
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
        });
        gsap.to(imgRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 2,
            ease: "power4.out",
            scrollTrigger: { trigger: imgRef.current },
        });
    });

    return (
        <section id="about" className="min-h-screen bg-black rounded-b-4xl">
            <AnimatedHeaderSection
                subTitle={"Code with purpose, Built to scale"}
                title={"About"}
                text={text}
                textColor={"text-white"}
                withScrollTrigger={true}
            />
            <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
                <img
                    ref={imgRef}
                    src="images/man.jpeg"
                    alt="man"
                    className="w-md rounded-3xl"
                />
                <div className="w-full space-y-8">
                    <AnimatedTextLines text={aboutText} className={"w-full"} />

                    {/* Education Section */}
                    <div className="space-y-4 pt-6">
                        <h3 className="text-2xl font-medium text-white/80 mb-6 flex items-center gap-2">
                            <span>📖</span> Education
                        </h3>
                        <div className="space-y-4">
                            {education.map((edu, index) => (
                                <a
                                    key={index}
                                    href={edu.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`block p-4 bg-white/5 rounded-xl ${edu.hoverColor} transition-all duration-300 hover:scale-105 hover:bg-white/10 group cursor-pointer border border-white/10 hover:border-white/20`}
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-start gap-3">
                                            <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                                {edu.icon}
                                            </span>
                                            <div>
                                                <h4 className="font-medium text-white/90 group-hover:text-white transition-colors duration-300">
                                                    {edu.degree}
                                                </h4>
                                                <p className="text-white/60 font-light">
                                                    {edu.institution} • {edu.year}
                                                </p>
                                            </div>
                                        </div>
                                        <svg
                                            className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white/60"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Achievements Section */}
                    <div className="space-y-4 pt-6">
                        <h3 className="text-2xl font-medium text-white/80 mb-6 flex items-center gap-2">
                            <span>🏅</span> Achievements
                        </h3>
                        <div className="space-y-4">
                            {achievements.map((achievement, index) => (
                                <a
                                    key={index}
                                    href={achievement.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`block p-4 bg-white/5 rounded-xl ${achievement.hoverColor} transition-all duration-300 hover:scale-105 hover:bg-white/10 group cursor-pointer border border-white/10 hover:border-white/20`}
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-start gap-3">
                                            <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                                {achievement.icon}
                                            </span>
                                            <div>
                                                <h4 className="font-medium text-white/90 group-hover:text-white transition-colors duration-300">
                                                    {achievement.title}
                                                </h4>
                                                <p className="text-white/60 font-light">
                                                    {achievement.issuer} • {achievement.date}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm text-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                View Certificate
                                            </span>
                                            <svg
                                                className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white/60"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Activities Section */}
                    <div className="space-y-4 pt-6">
                        <h3 className="text-2xl font-medium text-white/80 mb-6 flex items-center gap-2">
                            <span>🎯</span> When I&apos;m not coding:
                        </h3>
                        <div className="space-y-3">
                            {activities.map((activity, index) => (
                                <a
                                    key={index}
                                    href={activity.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-3 text-white/60 ${activity.hoverColor} transition-all duration-300 hover:scale-105 hover:translate-x-2 group cursor-pointer`}
                                >
                                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                        {activity.icon}
                                    </span>
                                    <span className="font-light tracking-wide group-hover:font-normal transition-all duration-300">
                                        {activity.label}
                                    </span>
                                    <svg
                                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-auto"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
