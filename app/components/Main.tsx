"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function Main() {
  return (
    <section className="bg-[url(/leaves.png)] bg-cover min-h-screen flex items-center justify-center bg-white">
      <div className="container flex items-center justify-center max-w-[960px]">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className=" items-center flex flex-col border-[#3F3F4666] border-4 py-[72px] w-full bg-[#FFFFFF] rounded-[48px] gap-6"
        >
          <h1 className="text-[#11181C] text-center text-6xl font-bold">
            Покупай саженцы
            <br /> — <span className="text-[#17C964]">сажай лес</span>.
          </h1>
          <p className="text-2xl text-[#3F3F46]">
            Лес, в который можно вернуться
          </p>
          <div className="flex flex-row mt-6 gap-2">
            <button className="bg-[#17C964] text-black py-3 px-6 rounded-full">
              Выбрать город и посадку
            </button>
            <button className="bg-[#17C964] text-black py-3 px-6 rounded-full">
              Для компаний
            </button>
            <button className="bg-[#17C964] text-black py-3 px-6 rounded-full">
              Роща славы
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
