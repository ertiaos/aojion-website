"use client";

import HeroAnimated from "@/components/HeroAnimated";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { motion } from "framer-motion";
import { products, allFeatures, testimonials } from "@/data/products";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroAnimated />

      {/* Product preview */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase">
              Products
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
              为每一寸屏幕<span className="text-brand-blue">撑腰</span>
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              机械弹簧结构 · 拒绝沉头 · 让桌面回归整洁
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <ScrollReveal key={p.slug} delay={i * 0.15}>
              {/* Inline product card to avoid extra component import issues */}
              <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="group">
                <Link href={`/products/${p.slug}`}>
                  <div className="bg-[#141414] rounded-2xl overflow-hidden border border-gray-800 group-hover:border-brand-blue/40 transition-all duration-500">
                    <div className="aspect-square bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] flex items-center justify-center p-8 relative overflow-hidden">
                      <div className="absolute inset-0 bg-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <img
                        src={p.images.main}
                        alt={p.name}
                        className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://placehold.co/600x600/1a1a1a/666?text=" + p.name;
                        }}
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-white font-semibold text-base mb-1">{p.name}</h3>
                      <p className="text-gray-500 text-xs mb-3">{p.subtitle}</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-brand-blue font-bold text-lg">¥{p.price}</span>
                        {p.originalPrice && (
                          <span className="text-gray-600 text-xs line-through">
                            ¥{p.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-block px-8 py-3 border border-gray-700 text-white font-semibold rounded-full hover:border-brand-blue hover:text-brand-blue transition-all"
            >
              查看全部产品 →
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-32 bg-brand-dark px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase">
                Why Aojion
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
                为什么选择<span className="text-brand-blue">傲戟</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allFeatures.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.12}>
                <div className="bg-[#141414] rounded-2xl p-6 border border-gray-800 hover:border-brand-blue/30 transition-all group">
                  <div className="text-3xl mb-4">{f.icon}</div>
                  <h3 className="text-white font-semibold text-base mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Scene showcase */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase">
              Gallery
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
              桌面<span className="text-brand-blue">新美学</span>
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="rounded-3xl overflow-hidden border border-gray-800">
            <img
              src="/images/k2-scene.svg"
              alt="傲戟桌面场景"
              className="w-full h-auto"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        </ScrollReveal>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32 bg-brand-dark px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase">
                Reviews
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
                用户<span className="text-brand-blue">真实评价</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-[#141414] rounded-2xl p-6 border border-gray-800">
                  <div className="flex mb-3">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <span key={si} className={si < t.rating ? "text-yellow-500" : "text-gray-700"}>
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{t.text}</p>
                  <span className="text-gray-600 text-xs">{t.author}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 px-4 text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            准备好<span className="text-brand-blue">升级桌面</span>了吗？
          </h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            立即前往京东傲戟官方旗舰店，选择你的专属支架
          </p>
          <a
            href="https://search.jd.com/search?keyword=傲戟"
            target="_blank"
            rel="noopener"
            className="inline-block px-10 py-4 bg-brand-blue text-white font-bold rounded-full text-lg hover:bg-brand-blue-light transition-all hover:scale-105 shadow-lg shadow-brand-blue/25"
          >
            前往京东购买 →
          </a>
        </ScrollReveal>
      </section>
    </>
  );
}
