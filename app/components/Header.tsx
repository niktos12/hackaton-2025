"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["Услуги", "О нас", "Контакты"];

  return (
    <header
      className={`fixed top-4 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 py-2 sm:py-3 px-4 sm:px-6 backdrop-blur-lg transition-all duration-300 rounded-2xl sm:rounded-[100px] w-[calc(100%-32px)] sm:w-[calc(100%-48px)] max-w-6xl border border-white/20 ${
        isScrolled ? "bg-white/95 shadow-lg" : "bg-gray-200/40 shadow-sm"
      }`}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <h2 className="font-black text-xl sm:text-2xl text-gray-900 tracking-tight hover:scale-105 transition-transform duration-200 cursor-pointer">
            ДеревьЯ
          </h2>
        </div>

        <nav className="hidden lg:flex items-center gap-8 xl:gap-16">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-gray-700 hover:text-[#006FEE] transition-all duration-200 text-sm font-medium relative group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#006FEE] transition-all duration-200 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <button className="hidden lg:block py-2.5 px-4 bg-[#006FEE] text-white rounded-full hover:bg-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 text-sm font-medium">
          Заказать звонок
        </button>

        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-700 hover:text-[#006FEE] transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 pb-2">
          <nav className="flex flex-col gap-3">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-gray-700 hover:text-[#006FEE] transition-all duration-200 py-2 px-3 rounded-lg hover:bg-gray-100 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button
              className="py-2.5 px-4 bg-[#006FEE] text-white rounded-full hover:bg-blue-600 transition-all duration-200 shadow-lg mt-2 text-sm font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Заказать звонок
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
