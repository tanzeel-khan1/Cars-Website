"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const FloatingParticles = () => {
  const particlesRef = useRef<THREE.Points>(null);

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x += 0.0001;
      particlesRef.current.rotation.y += 0.0002;
    }
  });

  const particles = new THREE.BufferGeometry();
  const particleCount = 500;
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 20;
    positions[i + 1] = (Math.random() - 0.5) * 20;
    positions[i + 2] = (Math.random() - 0.5) * 20;
  }

  particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  return (
    <points ref={particlesRef} geometry={particles}>
      <pointsMaterial size={0.08} color="#ddb360" sizeAttenuation transparent />
    </points>
  );
};

const AmbientLights = () => {
  return (
    <>
      <ambientLight intensity={0.4} color="#ffffff" />
      <pointLight position={[15, 15, 15]} intensity={0.6} color="#ddb360" />
      <pointLight position={[-15, -15, 15]} intensity={0.4} color="#b8990e" />
    </>
  );
};

export default function PremiumBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }} style={{ background: "transparent" }}>
        <AmbientLights />
        <FloatingParticles />
      </Canvas>
    </div>
  );
}
