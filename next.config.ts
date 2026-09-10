import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    outputFileTracingRoot: process.cwd(),
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
    experimental: {
        optimizePackageImports: ["lucide-react", "gsap", "simple-icons"],
    },
};

export default nextConfig;
