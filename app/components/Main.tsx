"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function Main() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="container flex flex-row gap-12 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-green-300/30 blur-2xl rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="relative z-10">
              <Image
                src="/tree.svg"
                alt="Дерево ответственности"
                width={854}
                height={912}
                className="
                  drop-shadow-2xl
                  filter
                  brightness-105
                  contrast-105
                  hover:scale-105
                  transition-transform
                  duration-300
                "
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className=" items-end flex flex-col gap-6 max-w-[854px]"
        >
          <h1 className="text-6xl font-bold text-[#11181C] leading-[60px] text-right">
            Мужчина — это{" "}
            <span className="text-[#006FEE]">не про «бороду отрастил»</span>.
          </h1>
          <p className="text-2xl text-[#3F3F46] leading-8 text-right">
            Это про ответственность.
            <br />
            Один мальчик сажает одно дерево — и в этот момент у него появляется
            что-то своё: живое, растущее, зависимое от него.
          </p>
          <div className="text-xl leading-7 text-[#17C964] text-right">
            5 000 ₽ — вклад в лес и в характер ребёнка
          </div>
          <motion.button
            className="py-3 px-6 cursor-pointer bg-[#006FEE] text-white rounded-full hover:bg-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl text-sm"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(0, 111, 238, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Записаться на посвящение
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
