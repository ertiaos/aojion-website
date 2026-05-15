"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageCarousel({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = useCallback(
    (i: number) => {
      setDirection(i > current ? 1 : -1);
      setCurrent(i);
    },
    [current]
  );

  const next = () => go((current + 1) % images.length);
  const prev = () => go((current - 1 + images.length) % images.length);

  const fallback = "https://placehold.co/800x800/1a1a1a/666?text=Product+Image";

  return (
    <div className="relative">
      <div className="aspect-square bg-[#141414] rounded-2xl overflow-hidden border border-gray-800 relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.img
            key={current}
            src={images[current]}
            alt={`${alt} ${current + 1}`}
            className="w-full h-full object-contain p-8 absolute inset-0"
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -50 }}
            transition={{ duration: 0.3 }}
            onError={(e) => {
              (e.target as HTMLImageElement).src = fallback;
            }}
          />
        </AnimatePresence>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 mt-4 justify-center">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
              i === current ? "border-brand-blue" : "border-gray-700 opacity-60 hover:opacity-100"
            }`}
          >
            <img
              src={img}
              alt={`${alt} thumb ${i + 1}`}
              className="w-full h-full object-contain bg-[#111]"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://placehold.co/100x100/1a1a1a/666?text=" + (i + 1);
              }}
            />
          </button>
        ))}
      </div>

      {/* Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors"
          >
            &#8249;
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors"
          >
            &#8250;
          </button>
        </>
      )}
    </div>
  );
}
