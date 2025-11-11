"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function Header() {
  const [,setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(212, 212, 212, 0.4)", "rgba(255, 255, 255, 0.95)"]
  );

  const shadow = useTransform(
    scrollY,
    [0, 100],
    ["0 2px 10px rgba(0,0,0,0.05)", "0 8px 30px rgba(0,0,0,0.12)"]
  );

  const scale = useTransform(scrollY, [0, 100], [1, 0.98]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      style={{
        backgroundColor,
        boxShadow: shadow,
        scale,
      }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 py-1 px-6 pr-1 backdrop-blur-lg transition-all duration-300 rounded-[100px] w-[1084px] max-w-[calc(100%-48px)] border border-white/20"
    >
      <div className="flex items-center justify-between w-full">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <h2 className="font-black text-2xl text-gray-900 tracking-tight">
            ДеревьЯ
          </h2>
        </motion.div>

        <nav className="flex items-center gap-16">
          {["Услуги", "О нас", "Контакты"].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-black hover:text-[#006FEE] transition-all duration-200  text-sm relative group"
              whileHover={{ y: -1 }}
              transition={{ delay: index * 0.1 }}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#006FEE] transition-all duration-200 group-hover:w-full"></span>
            </motion.a>
          ))}
        </nav>
        <motion.button
          className="py-2.5 px-4 bg-[#006FEE] cursor-pointer text-white rounded-full hover:bg-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl text-sm"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(0, 111, 238, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Заказать звонок
        </motion.button>
      </div>
    </motion.header>
  );
}
