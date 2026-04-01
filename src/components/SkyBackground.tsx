"use client";

import { Canvas } from "@react-three/fiber";
import { Sky, Cloud, Clouds } from "@react-three/drei";
import { useTimeTheme } from "@/hooks/useTimeTheme";
import * as THREE from "three";

export default function SkyBackground() {
    const { sunPosition, theme } = useTimeTheme();

    return (
        <div className="fixed inset-0 -z-50 pointer-events-none transition-colors duration-[3000ms]" style={{ background: theme === "night" ? "#0F0F12" : "transparent" }}>
            <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
                <ambientLight intensity={theme === "night" ? 0.1 : 0.5} />
                
                {/* Sun and Sky Shader */}
                // @ts-expect-error Types mismatch in drei occasionally 
                <Sky
                    distance={450000} // How far the sky dome is
                    sunPosition={sunPosition}
                    inclination={0}
                    azimuth={0.25}
                    rayleigh={theme === "dawn" || theme === "dusk" ? 3 : 1}
                    mieCoefficient={0.005}
                    mieDirectionalG={0.8}
                />

                {/* Volumetric Clouds */}
                {theme !== "night" && (
                    <Clouds material={THREE.MeshBasicMaterial}>
                        <Cloud segments={40} bounds={[10, 2, 2]} volume={10} color={theme === "dawn" || theme === "dusk" ? "#ffe4e1" : "white"} />
                        <Cloud seed={1} scale={2} volume={5} color={theme === "dawn" ? "#ffb6c1" : "white"} position={[5, 5, -5]} speed={0.4} />
                    </Clouds>
                )}
            </Canvas>
        </div>
    );
}
