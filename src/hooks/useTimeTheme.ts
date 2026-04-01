"use client";

import { useEffect, useState } from "react";

export type ThemeName = "dawn" | "day" | "dusk" | "night";

export function useTimeTheme() {
    const [theme, setTheme] = useState<ThemeName>("night");
    const [sunPosition, setSunPosition] = useState<[number, number, number]>([0, -10, 0]);
    const [currentTime, setCurrentTime] = useState<Date | null>(null);

    useEffect(() => {
        const updateTheme = () => {
            const now = new Date();
            setCurrentTime(now);

            const hours = now.getHours();
            const minutes = now.getMinutes();
            const decimalTime = hours + minutes / 60;

            // Theme Classification
            if (hours >= 5 && hours < 8) {
                setTheme("dawn");
            } else if (hours >= 8 && hours < 17) {
                setTheme("day");
            } else if (hours >= 17 && hours < 20) {
                setTheme("dusk");
            } else {
                setTheme("night");
            }

            // Sun Position Calculation
            // Map 6:00 AM to 0 radians, 6:00 PM (18:00) to PI radians
            // time offset from 6AM:
            const timeOffset = decimalTime - 6;
            // 24 hours = 2 PI radians
            const angle = (timeOffset / 24) * Math.PI * 2;

            // Radius
            const radius = 20;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * Math.max(radius * 0.5, radius); // squish the arc slightly if needed
            const z = -10; // push into background

            // To map visually correctly in THREE:
            // Right to left arc:
            // x should go from positive (east) to negative (west) as time goes from 6 to 18
            setSunPosition([x, y, z]);
        };

        updateTheme();
        const interval = setInterval(updateTheme, 60000); // Check every minute
        return () => clearInterval(interval);
    }, []);

    return { theme, sunPosition, currentTime };
}
