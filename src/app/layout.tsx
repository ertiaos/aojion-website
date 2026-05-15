import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "傲戟 Aojion | 显示器支架 · 气杆弹簧 · 擎天之力",
  description:
    "傲戟（Aojion）专注高性能显示器支架，气杆弹簧结构，2-12kg承重范围，360°全向调节。铝合金机身，隐藏理线，打造整洁高效桌面空间。",
  keywords: ["傲戟", "显示器支架", "机械臂", "桌面支架", "Aojion", "AGKey", "屏幕支架"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
