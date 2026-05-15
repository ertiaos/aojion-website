"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

function Model() {
  const meshRef = useRef<THREE.Mesh>(null);
  const geom = useMemo(() => new THREE.CylinderGeometry(0.8, 1, 3, 64, 1, true), []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.08;
    }
  });

  return (
    <group position={[0, 0.2, 0]}>
      {/* Main arm body */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <cylinderGeometry args={[0.25, 0.35, 2.5, 32]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.2} />
      </mesh>
      {/* Horizontal arm */}
      <mesh position={[0.8, 1, 0]} rotation={[0, 0, 0.2]}>
        <boxGeometry args={[1.8, 0.2, 0.2]} />
        <meshStandardMaterial color="#2a2a3e" metalness={0.8} roughness={0.3} />
      </mesh>
      {/* VESA plate */}
      <mesh position={[1.9, 0.85, 0]} rotation={[0.1, 0.4, 0]}>
        <boxGeometry args={[0.5, 0.5, 0.05]} />
        <meshStandardMaterial color="#333355" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Base */}
      <mesh position={[0, -1.5, 0]}>
        <cylinderGeometry args={[0.4, 0.5, 0.4, 32]} />
        <meshStandardMaterial color="#111122" metalness={0.9} roughness={0.15} />
      </mesh>
      {/* Clamp */}
      <mesh position={[0, -1.9, 0]}>
        <boxGeometry args={[0.8, 0.3, 0.5]} />
        <meshStandardMaterial color="#0a0a1a" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Floating rings */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.6}>
        <mesh position={[0, 0.5, 0]}>
          <torusGeometry args={[0.45, 0.02, 16, 64]} />
          <meshStandardMaterial color="#0066ff" emissive="#0066ff" emissiveIntensity={0.8} />
        </mesh>
      </Float>
      <Float speed={3} rotationIntensity={0.4} floatIntensity={0.8}>
        <mesh position={[0.8, 1.3, 0.15]}>
          <torusGeometry args={[0.25, 0.015, 16, 48]} />
          <meshStandardMaterial color="#3399ff" emissive="#3399ff" emissiveIntensity={0.5} />
        </mesh>
      </Float>
    </group>
  );
}

function Particles() {
  const count = 80;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return pos;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#0066ff" transparent opacity={0.6} />
    </points>
  );
}

export default function Hero3D() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 1, 7], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <pointLight position={[-3, 2, 3]} intensity={0.6} color="#0066ff" />
          <pointLight position={[3, -1, 2]} intensity={0.4} color="#3399ff" />
          <Model />
          <Particles />
          <Environment preset="city" />
        </Canvas>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-brand-black/70 via-transparent to-brand-black pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-black via-brand-black/30 to-transparent pointer-events-none" />

      {/* Text content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight mb-4"
        >
          承重之上
          <br />
          <span className="text-brand-blue">擎天之力</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-xl mb-8"
        >
          傲戟显示器支架 · 机械弹簧结构 · 16kg 强劲承重
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex gap-4 flex-wrap justify-center"
        >
          <a
            href="/products"
            className="px-8 py-3 bg-brand-blue text-white font-semibold rounded-full hover:bg-brand-blue-light transition-all hover:scale-105"
          >
            探索产品
          </a>
          <a
            href="https://search.jd.com/search?keyword=傲戟"
            target="_blank"
            rel="noopener"
            className="px-8 py-3 border border-gray-600 text-white font-semibold rounded-full hover:border-brand-blue hover:text-brand-blue transition-all hover:scale-105"
          >
            京东购买
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1 bg-brand-blue rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
