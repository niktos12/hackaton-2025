"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function MarryTree() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="container flex flex-row gap-12 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className=" items-start flex flex-col gap-6 max-w-[854px]"
        >
          <h1 className="text-6xl font-bold text-[#11181C] leading-[60px] text-left">
            Свадебное дерево: <br />
            <span className="text-[#17C964]">вместо очередного букета</span>
            <br />— корни в земле.
          </h1>
          <p className="text-2xl text-[#3F3F46] leading-8 text-left">
            Свадьба заканчивается, фото блекнут, торт съели и забыли.
            <br />
            Но если в день росписи вы сажаете своё дерево — память становится
            живой. Каждая семья после ЗАГСа может поехать не в ТЦ, а на свою
            первую совместную посадку. Дерево растёт вместе с вами:
            <br /> переживает ветра, морозы, засуху. Как и семья: главное — не
            бросать, ухаживать и возвращаться.
            <br />
          </p>
          <motion.button
            className="py-3 px-6 cursor-pointer bg-[#006FEE] text-white rounded-full hover:bg-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl text-sm"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(0, 111, 238, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Посадить семейное дерево!
          </motion.button>
          <div className=" leading-6 text-[#52525B] text-left -mt-3">
            5 000 ₽ — ваша традиция, ваш
            <br /> лес, ваш след
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative z-10">
            <Image
              src="/marry-tree.png"
              alt="Дерево ответственности"
              width={854}
              height={912}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
