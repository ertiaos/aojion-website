import Link from "next/link";

const cols = [
  {
    title: "产品",
    links: [
      { href: "/products", label: "全部产品" },
      { href: "/products/k2", label: "K2 显示器支架" },
    ],
  },
  {
    title: "支持",
    links: [
      { href: "/support", label: "安装教程" },
      { href: "/support", label: "常见问题" },
      { href: "/support", label: "售后政策" },
    ],
  },
  {
    title: "关于",
    links: [
      { href: "/about", label: "品牌故事" },
      { href: "/about", label: "联系我们" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <img src="/images/logo.svg" alt="傲戟" className="h-5 w-auto" />
            <span>© {new Date().getFullYear()} 傲戟 Aojion. All rights reserved.</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-600">
            <span>京东旗舰店：傲戟官方旗舰店</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
