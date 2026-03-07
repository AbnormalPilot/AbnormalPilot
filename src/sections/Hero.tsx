"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [greeting, setGreeting] = useState("");

    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return "Good Morning";
        if (hour < 17) return "Good Afternoon";
        if (hour < 21) return "Good Evening";
        return "Good Night";
    };

    useEffect(() => {
        setGreeting(getGreeting());
    }, []);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen relative overflow-hidden bg-white">
            {/* Smooth Animated Blur Gradients */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30" />

                <div
                    className="absolute -top-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-20"
                    style={{
                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        animation: "float1 12s ease-in-out infinite",
                    }}
                />

                <div
                    className="absolute top-20 -right-20 w-96 h-96 rounded-full blur-3xl opacity-15"
                    style={{
                        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                        animation: "float2 15s ease-in-out infinite",
                    }}
                />

                <div
                    className="absolute bottom-20 left-20 w-72 h-72 rounded-full blur-3xl opacity-20"
                    style={{
                        background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                        animation: "float3 18s ease-in-out infinite",
                    }}
                />

                <div
                    className="absolute top-1/2 left-1/2 w-60 h-60 rounded-full blur-3xl opacity-10"
                    style={{
                        background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
                        animation: "float4 20s ease-in-out infinite",
                        transform: "translate(-50%, -50%)",
                    }}
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/20" />
            </div>

            {/* Time-based Greeting */}
            <div
                className={`absolute top-6 left-6 md:top-8 md:left-12 z-20 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                    }`}
            >
                <div className="flex flex-col">
                    <span
                        className="text-gray-700 font-medium text-lg mb-1"
                        style={{
                            fontFamily:
                                '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                        }}
                    >
                        {greeting} 👋
                    </span>
                    <span
                        className="text-gray-500 text-xs italic font-light"
                        style={{
                            fontFamily:
                                '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                        }}
                    ></span>
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 min-h-screen flex items-center justify-start">
                <div className="flex w-full h-screen">
                    {/* Text Content Section */}
                    <div className="w-full lg:w-1/2 flex items-center justify-end px-6 lg:px-12">
                        <div className="text-left max-w-2xl w-full">
                            <h1
                                className={`text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold mb-6 transition-all duration-1500 ease-out delay-300 ${isVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-12"
                                    }`}
                            >
                                <span
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600"
                                    style={{
                                        fontFamily:
                                            '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif',
                                        fontWeight: "700",
                                        letterSpacing: "-0.025em",
                                        lineHeight: "0.9",
                                    }}
                                >
                                    Himanshu
                                </span>
                                <br />
                                <span
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400"
                                    style={{
                                        fontFamily:
                                            '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif',
                                        fontWeight: "300",
                                        letterSpacing: "-0.025em",
                                    }}
                                >
                                    Dubey
                                </span>
                            </h1>

                            {/* Quote Section */}
                            <div
                                className={`mb-12 transition-all duration-1500 ease-out delay-700 ${isVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-8"
                                    }`}
                            >
                                <div className="relative">
                                    <blockquote
                                        className="text-lg md:text-xl font-light text-gray-700 leading-relaxed"
                                        style={{
                                            fontFamily:
                                                '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                                        }}
                                    >
                                        &quot;I think it&apos;s possible for ordinary people to
                                        choose to be extraordinary.&quot;
                                    </blockquote>
                                    <div
                                        className="mt-4 text-sm text-gray-500 font-light"
                                        style={{
                                            fontFamily:
                                                '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                                        }}
                                    >
                                        —{" "}
                                        <span className="font-semibold">Elon Musk</span>
                                    </div>

                                    <div className="mt-6 w-24 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div
                                className={`transition-all duration-1500 ease-out delay-1000 ${isVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-8"
                                    }`}
                            >
                                <button
                                    onClick={() =>
                                        window.open("https://github.com/AbnormalPilot", "_blank")
                                    }
                                    className="group relative px-10 py-4 bg-black/90 backdrop-blur-sm text-white border border-black/10 rounded-full overflow-hidden transition-all duration-300 hover:bg-black hover:scale-105 hover:shadow-2xl hover:shadow-black/20"
                                    style={{
                                        fontFamily:
                                            '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                                    }}
                                >
                                    <span className="relative z-10 flex items-center space-x-3">
                                        <span className="font-medium tracking-wide">
                                            View My Work
                                        </span>
                                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </span>

                                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-1000 delay-1300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
            >
                <div className="flex flex-col items-center space-y-2">
                    <span
                        className="text-gray-500 text-sm font-light tracking-wide"
                        style={{
                            fontFamily:
                                '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                        }}
                    >
                        Scroll to explore
                    </span>
                    <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                        <div
                            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
                            style={{
                                animation: "scrollBounce 2s infinite",
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-gray-400/40 rounded-full animate-pulse opacity-60" />
            <div
                className="absolute top-2/3 right-1/3 w-1 h-1 bg-gray-300/30 rounded-full animate-pulse opacity-40"
                style={{ animationDelay: "2s" }}
            />
            <div
                className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-gray-400/35 rounded-full animate-pulse opacity-50"
                style={{ animationDelay: "4s" }}
            />

            {/* Custom CSS animations */}
            <style>{`
        @keyframes float1 {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes float2 {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          25% {
            transform: translate(-25px, -25px) scale(1.05);
          }
          50% {
            transform: translate(25px, -15px) scale(0.95);
          }
          75% {
            transform: translate(-15px, 25px) scale(1.02);
          }
        }

        @keyframes float3 {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          40% {
            transform: translate(20px, -40px) scale(1.08);
          }
          80% {
            transform: translate(-30px, 10px) scale(0.92);
          }
        }

        @keyframes float4 {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            transform: translate(-40%, -60%) scale(1.1);
          }
        }

        @keyframes scrollBounce {
          0%, 20% {
            opacity: 0;
            transform: translateY(0px);
          }
          50% {
            opacity: 1;
          }
          80%, 100% {
            opacity: 0;
            transform: translateY(20px);
          }
        }

        .blur-3xl {
          filter: blur(64px);
        }
      `}</style>
        </div>
    );
};

export default Hero;
