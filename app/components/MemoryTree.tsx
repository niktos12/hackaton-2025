"use client";
import Image from "next/image";
import { useAnimateOnScroll } from "../hooks/useAnimateOnScroll";

export function MemoryTree() {
  const titleRef = useAnimateOnScroll("fadeInDown", 0.3, 0);
  const imageRef = useAnimateOnScroll("fadeInUp", 0.3, 200);
  const buttonRef = useAnimateOnScroll("fadeInUp", 0.3, 400);

  return (
    <section className="bg-white min-h-screen flex items-center justify-center py-8 sm:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-12">
          <div
            ref={titleRef}
            className="opacity-0 flex flex-col gap-3 sm:gap-4 lg:gap-6 items-center text-center"
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#11181C] leading-tight">
              Роща славы. Дерево, которое
              <br />
              <span className="text-[#17C964]">держит память</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#3F3F46] leading-relaxed max-w-4xl">
              Есть вещи, которые словами не лечатся.
              <br className="hidden sm:block" />
              Когда отец на фронте. Когда его уже нет. Когда ребёнку нужно во
              что-то
              <br className="hidden sm:block" /> упереться, кроме пустоты.
              <br className="hidden sm:block" />
              Мы создаём Рощу славы — живой мемориал, где
              <br className="hidden sm:block" /> дети с мамами сажают деревья в
              честь своих защитников.
            </p>
          </div>

          <div ref={imageRef} className="opacity-0 flex justify-center w-full">
            <div className="relative w-full max-w-lg lg:max-w-2xl xl:max-w-3xl">
              <div className="absolute inset-0 z-20 pointer-events-none">
                <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-20 lg:w-40 bg-gradient-to-r from-white via-white/70 to-transparent"></div>
                <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-20 lg:w-40 bg-gradient-to-l from-white via-white/70 to-transparent"></div>
                <div className="absolute left-0 right-0 top-0 h-5 sm:h-10 lg:h-20 bg-gradient-to-b from-white to-transparent"></div>
                <div className="absolute left-0 right-0 bottom-0 h-5 sm:h-10 lg:h-20 bg-gradient-to-t from-white to-transparent"></div>
              </div>

              <Image
                src="/trees.png"
                alt="Дерево памяти"
                width={1074}
                height={567}
                className="w-full h-auto"
              />
            </div>
          </div>
          <button
            ref={buttonRef}
            className="opacity-0 bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto text-center cursor-pointer"
          >
            Посадить дерево в Роще славы
          </button>
        </div>
      </div>
    </section>
  );
}
