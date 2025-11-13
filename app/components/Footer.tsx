"use client";
import { useAnimateOnScroll } from "../hooks/useAnimateOnScroll";

export function Footer() {
  const containerRef = useAnimateOnScroll("fadeInUp", 0.3, 0);

  return (
    <footer className="bg-white text-black py-6 sm:py-8 lg:py-11 px-4 sm:px-8 lg:px-24 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-[#E4E5ED]">
      <h1 className="text-[#11181C] font-bold text-sm sm:text-base">
        ©2025 “Деревья”
      </h1>
      <div className="flex flex-row gap-4 sm:gap-6 lg:gap-12 flex-wrap justify-center">
        <p className="text-black text-sm sm:text-base cursor-pointer hover:text-blue-600 transition-colors">
          Telegram
        </p>
        <p className="text-black text-sm sm:text-base cursor-pointer hover:text-blue-600 transition-colors">
          Discord
        </p>
        <p className="text-black text-sm sm:text-base cursor-pointer hover:text-blue-600 transition-colors">
          Пользовательское соглашение
        </p>
      </div>
    </footer>
  );
}
