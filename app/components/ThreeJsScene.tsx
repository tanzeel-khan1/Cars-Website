"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh, BufferGeometry, Material } from "three";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const RotatingGeometry = () => {
  const meshRef = useRef<Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.002;
    }
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.0005;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.5, 8]} />
        <meshPhongMaterial
          color="#ddb360"
          emissive="#ddb360"
          emissiveIntensity={0.5}
          shininess={100}
          wireframe={false}
        />
      </mesh>

      {/* Outer floating ring */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.5, 0.1, 16, 64]} />
        <meshPhongMaterial
          color="#ddb360"
          emissive="#ddb360"
          emissiveIntensity={0.3}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Second rotating ring */}
      <mesh position={[0, 0, 0]} rotation={[0, Math.PI / 3, Math.PI / 4]}>
        <torusGeometry args={[2, 0.08, 16, 64]} />
        <meshPhongMaterial
          color="#b8990e"
          emissive="#b8990e"
          emissiveIntensity={0.2}
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Floating particles */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const x = Math.cos(angle) * 3;
        const y = Math.sin(angle) * 3;
        const z = Math.sin(angle * 2) * 1.5;

        return (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[0.15, 8, 8]} />
            <meshPhongMaterial
              color="#ddb360"
              emissive="#ddb360"
              emissiveIntensity={0.8}
            />
          </mesh>
        );
      })}
    </group>
  );
};

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.5} color="#ffffff" />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ddb360" />
      <pointLight position={[-10, -10, 10]} intensity={0.8} color="#b8990e" />
      <pointLight position={[0, 0, 5]} intensity={0.6} color="#ffffff" />
    </>
  );
};

export default function ThreeJsScene() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 75 }}
        style={{ background: "transparent" }}
      >
        <Lights />
        <RotatingGeometry />
      </Canvas>
    </div>
  );
}
