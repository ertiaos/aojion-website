"use client";

import ScrollReveal from "@/components/ScrollReveal";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-28 lg:pt-36 pb-12 text-center px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
          产品<span className="text-brand-blue">中心</span>
        </h1>
        <p className="text-gray-500 mt-4 max-w-md mx-auto">
          每一款产品都经过严苛测试，只为给你最稳固的支撑
        </p>
      </section>

      {/* Grid */}
      <section className="pb-20 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <ScrollReveal key={p.slug} delay={i * 0.1}>
              <ProductCard product={p} />
            </ScrollReveal>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">更多产品即将上线，敬请期待</p>
          </div>
        )}
      </section>
    </>
  );
}
