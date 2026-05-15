"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "首页" },
  { href: "/products", label: "产品中心" },
  { href: "/about", label: "关于我们" },
  { href: "/support", label: "服务支持" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback(() => setOpen(false), []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-brand-black/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center cursor-pointer select-none shrink-0"
          >
            <img
              src="/images/logo.svg"
              alt="傲戟"
              className="h-8 lg:h-9 w-auto"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://search.jd.com/search?keyword=傲戟"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-5 py-2 bg-brand-blue text-white text-sm font-semibold rounded-full hover:bg-brand-blue-light transition-colors"
            >
              京东购买
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="菜单"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-white transition-all duration-200 ${
                  open ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-white transition-all duration-200 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-white transition-all duration-200 ${
                  open ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-brand-black/98 border-t border-gray-800 overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={closeMenu}
              className="block py-2 text-gray-300 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://search.jd.com/search?keyword=傲戟"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 text-center py-3 bg-brand-blue text-white font-semibold rounded-lg"
          >
            京东购买
          </a>
        </div>
      </div>
    </nav>
  );
}
