"use client";

import { useParams } from "next/navigation";
import ImageCarousel from "./ImageCarousel";
import ScrollReveal from "./ScrollReveal";
import { products } from "@/data/products";
import Link from "next/link";

export default function ProductDetailClient() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <section className="pt-28 pb-20 text-center px-4">
        <h1 className="text-2xl font-bold text-white mb-4">产品未找到</h1>
        <Link href="/products" className="text-brand-blue hover:underline">
          ← 返回产品中心
        </Link>
      </section>
    );
  }

  return (
    <>
      <section className="pt-28 lg:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link
          href="/products"
          className="inline-flex items-center gap-1 text-gray-500 hover:text-white transition-colors text-sm mb-8"
        >
          ← 返回产品中心
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal>
            <ImageCarousel
              images={[product.images.main, ...product.images.gallery]}
              alt={product.name}
            />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase">
              {product.subtitle}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4">
              {product.name}
            </h1>
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-brand-blue font-bold text-3xl">¥{product.price}</span>
              {product.originalPrice && (
                <span className="text-gray-600 line-through">¥{product.originalPrice}</span>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { label: "承重", value: product.loadCapacity },
                { label: "适用尺寸", value: product.screenSize },
                { label: "材质", value: product.material },
                { label: "颜色", value: product.color },
              ].map((s) => (
                <div key={s.label} className="bg-[#141414] rounded-lg px-4 py-3 border border-gray-800">
                  <span className="text-gray-500 text-xs">{s.label}</span>
                  <p className="text-white text-sm font-medium">{s.value}</p>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h3 className="text-white font-semibold mb-3">产品亮点</h3>
              <ul className="space-y-2">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                    <span className="text-brand-blue mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={product.jdLink}
              target="_blank"
              rel="noopener"
              className="inline-block w-full sm:w-auto text-center px-10 py-4 bg-brand-blue text-white font-bold rounded-full hover:bg-brand-blue-light transition-all hover:scale-105 shadow-lg shadow-brand-blue/25"
            >
              京东购买 →
            </a>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-white mb-6">详细规格</h2>
            <div className="bg-[#141414] rounded-2xl border border-gray-800 overflow-hidden">
              {product.specs.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex items-center px-6 py-4 ${
                    i % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"
                  } ${i < product.specs.length - 1 ? "border-b border-gray-800/50" : ""}`}
                >
                  <span className="text-gray-500 text-sm w-40 shrink-0">{s.label}</span>
                  <span className="text-white text-sm">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
