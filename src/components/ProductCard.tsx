"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Link href={`/products/${product.slug}`}>
        <div className="bg-[#141414] rounded-2xl overflow-hidden border border-gray-800 group-hover:border-brand-blue/40 transition-all duration-500">
          {/* Image */}
          <div className="aspect-square bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] flex items-center justify-center p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src={product.images.main}
              alt={product.name}
              className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://placehold.co/600x600/1a1a1a/666?text=" + product.name;
              }}
            />
          </div>
          {/* Info */}
          <div className="p-5">
            <h3 className="text-white font-semibold text-base mb-1">{product.name}</h3>
            <p className="text-gray-500 text-xs mb-3">{product.subtitle}</p>
            <div className="flex items-baseline gap-2">
              <span className="text-brand-blue font-bold text-lg">¥{product.price}</span>
              {product.originalPrice && (
                <span className="text-gray-600 text-xs line-through">
                  ¥{product.originalPrice}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
