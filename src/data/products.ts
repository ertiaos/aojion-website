export interface Product {
  slug: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  loadCapacity: string;
  screenSize: string;
  material: string;
  color: string;
  features: string[];
  images: {
    main: string;
    gallery: string[];
    scene: string;
  };
  jdLink: string;
  specs: { label: string; value: string }[];
}

export const products: Product[] = [
  {
    slug: "k2",
    name: "傲戟 K2",
    subtitle: "机械弹簧·双段臂·大承重",
    price: 199,
    originalPrice: 279,
    loadCapacity: "2-15kg",
    screenSize: "17-32寸",
    material: "铝合金 + 冷轧钢",
    color: "黑色",
    features: [
      "机械弹簧结构，升降顺滑不沉头",
      "15kg 强劲承重，适配主流曲面屏",
      "360° 全向旋转，横竖屏自由切换",
      "双段臂设计，更大覆盖范围",
      "内置理线槽，桌面整洁如一",
      "夹桌/穿孔双安装方式",
    ],
    images: {
      main: "/aojion-website/images/k2-main.svg",
      gallery: [
        "/aojion-website/images/k2-gallery-1.svg",
        "/aojion-website/images/k2-gallery-2.svg",
        "/aojion-website/images/k2-gallery-3.svg",
      ],
      scene: "/aojion-website/images/k2-scene.svg",
    },
    jdLink: "https://search.jd.com/search?keyword=傲戟K2",
    specs: [
      { label: "产品型号", value: "傲戟 K2" },
      { label: "承重范围", value: "2-15kg" },
      { label: "适用尺寸", value: "17-32寸" },
      { label: "安装方式", value: "夹桌 / 穿孔" },
      { label: "臂体材质", value: "铝合金 + 冷轧钢" },
      { label: "VESA 孔距", value: "75×75mm / 100×100mm" },
      { label: "升降范围", value: "0-450mm" },
      { label: "旋转角度", value: "360°" },
      { label: "倾斜角度", value: "-35° ~ +85°" },
      { label: "颜色", value: "黑色" },
      { label: "净重", value: "约 3.8kg" },
    ],
  },
];

export const allFeatures = [
  {
    icon: "💪",
    title: "15kg 强劲承重",
    desc: "机械弹簧结构，稳固支撑 17-32 寸主流显示器，不沉头不掉位",
  },
  {
    icon: "🎯",
    title: "360° 全向调节",
    desc: "横竖屏自由切换，俯仰升降随心调，找到最舒适的观看角度",
  },
  {
    icon: "✨",
    title: "铝合金机身",
    desc: "航空级铝合金 + 冷轧钢核心部件，轻量高强，经久耐用",
  },
  {
    icon: "🧹",
    title: "隐藏理线系统",
    desc: "臂体内部走线设计，告别桌面线缆缠绕，保持工作空间整洁",
  },
];

export const testimonials = [
  {
    text: "一百多块买到这个质量的支架，安装简单，升降很丝滑，桌面整洁多了。",
    author: "京东用户 ***8",
    rating: 5,
  },
  {
    text: "承重确实可以，32寸曲面屏挂上去稳稳的，性价比没得说。",
    author: "京东用户 ***2",
    rating: 5,
  },
  {
    text: "铝合金做工比预期好，比之前用的百元支架强太多了，推荐。",
    author: "京东用户 ***5",
    rating: 4,
  },
  {
    text: "第二次买了，这次给副屏也配上，机械弹簧比气压的舒服。",
    author: "京东用户 ***1",
    rating: 5,
  },
];
