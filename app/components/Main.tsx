"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../lib/animations";
export default function Main() { //not full, need svg with tree
  return (
    <motion.main
      className="bg-gray-900 text-white py-12"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      <img></img>
      <div className="max-w-4xl mx-auto px-4">
        <motion.h1 className="text-3xl font-bold mb-4" variants={fadeInUp}>
          Мужчина — это не про «бороду отрастил».
        </motion.h1>
        <motion.p className="text-xl mb-4" variants={fadeInUp}>
          Это про ответственность.
        </motion.p>
        <motion.p className="text-gray-300" variants={fadeInUp}>
          Один мальчик скажет одно дерево — и в этот момент у него появляется
          что-то свой…помощь, разгуляя, заваливается почти.
        </motion.p>
      </div>
    </motion.main>
  );
}
