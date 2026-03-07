"use client";

import { useEffect, useRef, useState } from "react";
import { socials } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-scroll";

const Navbar = () => {
    const navRef = useRef<HTMLElement>(null);
    const linksRef = useRef<(HTMLDivElement | null)[]>([]);
    const contactRef = useRef<HTMLDivElement>(null);
    const topLineRef = useRef<HTMLSpanElement>(null);
    const bottomLineRef = useRef<HTMLSpanElement>(null);
    const burgerRef = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline | null>(null);
    const iconTl = useRef<gsap.core.Timeline | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    useGSAP(() => {
        gsap.set(navRef.current, { xPercent: 100 });
        gsap.set([...linksRef.current.filter(Boolean), contactRef.current], {
            autoAlpha: 0,
            x: -20,
        });

        tl.current = gsap
            .timeline({ paused: true })
            .to(navRef.current, {
                xPercent: 0,
                duration: 1,
                ease: "power3.out",
            })
            .to(
                linksRef.current.filter(Boolean),
                {
                    autoAlpha: 1,
                    x: 0,
                    stagger: 0.1,
                    duration: 0.5,
                    ease: "power2.out",
                },
                "<"
            )
            .to(
                contactRef.current,
                {
                    autoAlpha: 1,
                    x: 0,
                    duration: 0.5,
                    ease: "power2.out",
                },
                "<+0.2"
            );

        iconTl.current = gsap
            .timeline({ paused: true })
            .to(topLineRef.current, {
                rotate: 45,
                y: 3.3,
                duration: 0.3,
                ease: "power2.inOut",
            })
            .to(
                bottomLineRef.current,
                {
                    rotate: -45,
                    y: -3.3,
                    duration: 0.3,
                    ease: "power2.inOut",
                },
                "<"
            );
    }, []);

    // Click outside to close navbar
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                isOpen &&
                navRef.current &&
                burgerRef.current &&
                !navRef.current.contains(event.target as Node) &&
                !burgerRef.current.contains(event.target as Node)
            ) {
                closeMenu();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    const closeMenu = () => {
        if (isOpen) {
            tl.current?.reverse();
            iconTl.current?.reverse();
            setIsOpen(false);
        }
    };

    const toggleMenu = () => {
        if (isOpen) {
            closeMenu();
        } else {
            tl.current?.play();
            iconTl.current?.play();
            setIsOpen(true);
        }
    };

    const handleLinkClick = () => {
        closeMenu();
    };

    return (
        <>
            <nav
                ref={navRef}
                className="fixed z-50 flex flex-col justify-between w-full h-full px-10 uppercase bg-black text-white/80 py-28 gap-y-10 md:w-1/2 md:left-1/2"
            >
                <div className="flex flex-col text-5xl gap-y-2 md:text-6xl lg:text-8xl">
                    {["home", "skills", "about", "work", "contact"].map(
                        (section, index) => (
                            <div key={index} ref={(el) => { linksRef.current[index] = el; }}>
                                <Link
                                    className="transition-all duration-300 cursor-pointer hover:text-white"
                                    to={`${section}`}
                                    smooth
                                    offset={0}
                                    duration={2000}
                                    onClick={handleLinkClick}
                                >
                                    {section}
                                </Link>
                            </div>
                        )
                    )}
                </div>
                <div
                    ref={contactRef}
                    className="flex flex-col flex-wrap justify-between gap-8 md:flex-row"
                >
                    <div className="font-light">
                        <p className="tracking-wider text-white/50">E-mail</p>
                        <p className="text-xl tracking-widest lowercase text-pretty">
                            himanshudubey@welocalhost.com
                        </p>
                    </div>
                    <div className="font-light">
                        <p className="tracking-wider text-white/50">Social Media</p>
                        <div className="flex flex-col flex-wrap md:flex-row gap-x-2">
                            {socials.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="text-sm leading-loose tracking-widest uppercase hover:text-white transition-colors duration-300"
                                >
                                    {"{ "}
                                    {social.name}
                                    {" }"}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
            <div
                ref={burgerRef}
                className="fixed z-50 flex flex-col items-center justify-center gap-1 transition-all duration-300 bg-black rounded-full cursor-pointer w-14 h-14 md:w-20 md:h-20 top-4 right-10"
                onClick={toggleMenu}
            >
                <span
                    ref={topLineRef}
                    className="block w-8 h-0.5 bg-white rounded-full origin-center"
                ></span>
                <span
                    ref={bottomLineRef}
                    className="block w-8 h-0.5 bg-white rounded-full origin-center"
                ></span>
            </div>
        </>
    );
};

export default Navbar;
