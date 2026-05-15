"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function FloatingParticles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-brand-blue/30"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function GeometricShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large ring */}
      <motion.div
        className="absolute border border-brand-blue/10 rounded-full"
        style={{ width: 500, height: 500, left: "60%", top: "20%" }}
        animate={{
          rotate: 360,
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      {/* Small ring */}
      <motion.div
        className="absolute border border-brand-blue/15 rounded-full"
        style={{ width: 200, height: 200, left: "15%", top: "50%" }}
        animate={{
          rotate: -360,
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      {/* Square */}
      <motion.div
        className="absolute border border-brand-blue/8 rounded-lg"
        style={{ width: 120, height: 120, left: "75%", top: "60%" }}
        animate={{
          rotate: 360,
          borderRadius: ["8px", "50%", "8px"],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Tiny dot cluster */}
      <motion.div
        className="absolute"
        style={{ left: "30%", top: "30%" }}
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-1 h-1 bg-brand-blue/40 rounded-full mb-2" />
        <div className="w-1.5 h-1.5 bg-brand-blue/30 rounded-full mb-2 ml-3" />
        <div className="w-1 h-1 bg-brand-blue/50 rounded-full ml-1" />
      </motion.div>
    </div>
  );
}

function GridBackground() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.03]"
      style={{
        backgroundImage:
          "linear-gradient(#0066ff 1px, transparent 1px), linear-gradient(90deg, #0066ff 1px, transparent 1px)",
        backgroundSize: "80px 80px",
        maskImage: "radial-gradient(circle at 50% 50%, black 30%, transparent 70%)",
        WebkitMaskImage: "radial-gradient(circle at 50% 50%, black 30%, transparent 70%)",
      }}
    />
  );
}

function ProductSilhouette() {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ right: "5%", top: "50%", transform: "translateY(-50%)" }}
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="relative"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src="/images/k2-main.svg"
          alt="傲戟 K2"
          className="w-[280px] md:w-[400px] lg:w-[500px] h-auto opacity-70 drop-shadow-[0_0_60px_rgba(0,102,255,0.15)]"
        />
      </motion.div>
    </motion.div>
  );
}

export default function HeroAnimated() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left) / rect.width - 0.5,
          y: (e.clientY - rect.top) / rect.height - 0.5,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-brand-black"
    >
      <GridBackground />
      <FloatingParticles />
      <GeometricShapes />

      {/* Subtle mouse-follow glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,102,255,0.06) 0%, transparent 70%)",
        }}
        animate={{
          x: mousePos.x * 40,
          y: mousePos.y * 40,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />

      <ProductSilhouette />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-transparent to-brand-black pointer-events-none z-10" />

      {/* Text content */}
      <div className="relative z-20 h-full flex flex-col items-start justify-center px-6 sm:px-10 lg:px-20 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-3"
        >
          <span className="text-brand-blue text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase border border-brand-blue/20 rounded-full px-4 py-1.5">
            傲戟 K2 · 全新上市
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight mb-4 leading-[1.05]"
        >
          机械弹簧
          <br />
          <span className="text-brand-blue">擎天之力</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-gray-500 text-base sm:text-lg max-w-md mb-10"
        >
          15kg 强劲承重 · 360° 全向调节 · 铝合金机身 · 隐藏理线
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex gap-4 flex-wrap"
        >
          <a
            href="/products"
            className="px-8 py-3.5 bg-brand-blue text-white font-semibold rounded-full hover:bg-brand-blue-light transition-all hover:scale-105 text-sm"
          >
            探索产品
          </a>
          <a
            href="https://search.jd.com/search?keyword=傲戟K2"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border border-gray-700 text-white font-semibold rounded-full hover:border-brand-blue hover:text-brand-blue transition-all hover:scale-105 text-sm"
          >
            京东购买
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex gap-8 lg:gap-12 mt-16"
        >
          {[
            { num: "15kg", label: "承重能力" },
            { num: "360°", label: "全向旋转" },
            { num: "3年", label: "质保承诺" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-xl sm:text-2xl font-bold text-white">{s.num}</div>
              <div className="text-xs text-gray-600 mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 bg-brand-blue rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
