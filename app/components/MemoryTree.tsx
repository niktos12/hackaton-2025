"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function MemoryTree() {
  return (
    <section className="bg-white min-h-screen flex items-center justify-center py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 items-center "
          >
            <h1 className="text-6xl font-bold text-[#11181C] text-center">
              Роща славы. Дерево, которое
              <br />
              <span className="text-[#17C964]">держит память</span>
            </h1>

            <p className="text-2xl text-[#3F3F46] text-center">
              Есть вещи, которые словами не лечатся.
              <br />
              Когда отец на фронте. Когда его уже нет. Когда ребёнку нужно во
              что-то
              <br /> упереться, кроме пустоты.
              <br />
              Мы создаём Рощу славы — живой мемориал, где
              <br /> дети с мамами сажают деревья в честь своих защитников.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 z-20 pointer-events-none">
                <div className="absolute left-0 top-0 bottom-0 w-40 bg-linear-to-r from-white via-white/70 to-transparent"></div>

                <div className="absolute right-0 top-0 bottom-0 w-40 bg-linear-to-l from-white via-white/70 to-transparent"></div>

                <div className="absolute left-0 right-0 top-0 h-20 bg-linear-to-b from-white to-transparent"></div>
                <div className="absolute left-0 right-0 bottom-0 h-20 bg-linear-to-t from-white to-transparent"></div>
              </div>

              <Image
                src="/trees.png"
                alt="Дерево памяти"
                width={1074}
                height={567}
                className=""
              />
            </div>
          </motion.div>
          <motion.button
            className="bg-green-600 hover:bg-green-700 text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(5, 150, 105, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            Посадить дерево в Роще славы
          </motion.button>
        </div>
      </div>
    </section>
  );
}
