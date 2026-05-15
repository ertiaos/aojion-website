"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 text-center px-4">
        <ScrollReveal>
          <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase">
            About
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mt-3 mb-4">
            关于<span className="text-brand-blue">傲戟</span>
          </h1>
        </ScrollReveal>
      </section>

      {/* Brand story */}
      <section className="pb-20 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="bg-[#141414] rounded-3xl border border-gray-800 p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-white mb-6">品牌故事</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                傲戟（Aojion）诞生于一群对桌面空间有着极致追求的工程师之手。我们相信，一个好的显示器支架，不仅仅是支撑一块屏幕，更是支撑每个人工作、创作、娱乐的基石。
              </p>
              <p>
                从第一代产品开始，傲戟就坚持使用机械弹簧结构。相比传统气压杆，机械弹簧更加稳定、寿命更长，且不会因温度变化而产生"沉头"现象——这是我们给用户的承诺。
              </p>
              <p>
                我们的产品采用航空级铝合金与冷轧钢结构，经过超过 20000 次升降测试，确保每一台出厂的支架都能稳定服役多年。
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Philosophy */}
        <ScrollReveal delay={0.2}>
          <div className="mt-8 bg-[#141414] rounded-3xl border border-gray-800 p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-white mb-6">设计理念</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  title: "稳固为王",
                  desc: "机械弹簧 + 冷轧钢核心，拒绝一切妥协。我们的产品不只是\"能用\"，而是\"好用十年\"。",
                },
                {
                  title: "极简美学",
                  desc: "隐藏理线系统、纯黑铝合金机身，让支架融入桌面而非抢占视线。",
                },
                {
                  title: "人人用得起",
                  desc: "通过自研核心部件与高效供应链，把高端支架做到亲民价格。",
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Contact */}
        <ScrollReveal delay={0.3}>
          <div className="mt-8 bg-[#141414] rounded-3xl border border-gray-800 p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-white mb-6">联系我们</h2>
            <div className="space-y-3 text-gray-400 text-sm">
              <p>
                京东旗舰店：
                <a
                  href="https://search.jd.com/search?keyword=傲戟"
                  target="_blank"
                  rel="noopener"
                  className="text-brand-blue hover:underline ml-1"
                >
                  傲戟官方旗舰店
                </a>
              </p>
              <p>商务合作：business@aojion.com</p>
              <p>售后支持：support@aojion.com</p>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
