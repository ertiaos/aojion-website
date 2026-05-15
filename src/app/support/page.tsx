"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "傲戟支架支持哪些尺寸的显示器？",
    a: "S1系列支持 17-32 寸显示器，只要显示器背面有标准 VESA 孔位（75×75mm 或 100×100mm）即可安装。",
  },
  {
    q: "如何判断我的桌子是否适合安装？",
    a: "支持两种安装方式：夹桌安装（桌面厚度 10-50mm）和穿孔安装（孔径 ≥10mm）。大部分办公桌和家用桌都能适配。",
  },
  {
    q: "安装复杂吗？需要工具吗？",
    a: "包装内附赠安装工具和详细说明书，一般 10-15 分钟即可完成安装。也可查看我们的安装视频教程。",
  },
  {
    q: "出现沉头怎么办？",
    a: "傲戟采用机械弹簧结构，正常情况下不会出现沉头现象。如果遇到此问题，请检查悬臂上方的调节螺丝，适当旋紧即可。如仍有问题，请及时联系售后。",
  },
  {
    q: "售后政策是怎样的？",
    a: "自购买之日起享 3 年质保。7 天无理由退换货（需保持包装完好）。如有质量问题，免费换新。详情请联系京东旗舰店客服。",
  },
  {
    q: "支架会伤桌子吗？",
    a: "夹桌底座配有硅胶防滑垫，不会刮伤桌面。建议不要过度旋紧夹具螺丝即可。",
  },
];

const steps = [
  { step: "1", title: "安装底座", desc: "将夹具固定在桌沿或穿过桌面穿孔" },
  { step: "2", title: "安装下臂", desc: "将下臂插入底座，旋紧固定螺丝" },
  { step: "3", title: "安装上臂", desc: "将上臂与下臂连接，调整到合适高度" },
  { step: "4", title: "安装VESA板", desc: "将 VESA 板固定在显示器背面" },
  { step: "5", title: "挂载显示器", desc: "将显示器挂在臂体前端，锁紧安全扣" },
  { step: "6", title: "调节平衡", desc: "使用附赠工具调节悬臂力度，完成安装" },
];

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 text-center px-4">
        <ScrollReveal>
          <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase">
            Support
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mt-3 mb-4">
            服务<span className="text-brand-blue">支持</span>
          </h1>
          <p className="text-gray-500 max-w-md mx-auto">
            安装教程、常见问题、售后政策，一切尽在这里
          </p>
        </ScrollReveal>
      </section>

      {/* Install guide */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-2xl font-bold text-white mb-8 text-center">安装教程</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((s, i) => (
            <ScrollReveal key={s.step} delay={i * 0.1}>
              <div className="bg-[#141414] rounded-2xl border border-gray-800 p-6 text-center group hover:border-brand-blue/30 transition-colors">
                <div className="w-10 h-10 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  {s.step}
                </div>
                <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.4}>
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              温馨提示：安装前请仔细阅读包装内的说明书，或扫描说明书上的二维码观看视频教程
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* FAQ */}
      <section className="pb-20 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-2xl font-bold text-white mb-8 text-center">常见问题</h2>
        </ScrollReveal>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="bg-[#141414] rounded-xl border border-gray-800 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-white text-sm font-medium pr-4">{faq.q}</span>
                  <span
                    className={`text-gray-500 text-lg shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* After-sales */}
      <section className="pb-20 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="bg-[#141414] rounded-3xl border border-gray-800 p-8 lg:p-10">
            <h2 className="text-2xl font-bold text-white mb-6">售后政策</h2>
            <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
              <div>
                <h3 className="text-white font-medium mb-1">7 天无理由退换</h3>
                <p>自签收之日起 7 天内，保持产品及包装完好可申请无理由退换货。</p>
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">3 年质保</h3>
                <p>产品主体（臂体、底座、弹簧机构）享 3 年免费保修，非人为损坏免费换新。</p>
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">退换流程</h3>
                <p>联系京东旗舰店客服 → 提供订单号及问题描述 → 客服确认 → 寄回/换新。</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
