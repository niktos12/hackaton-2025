"use client";
import Image from "next/image";
import { useAnimateOnScroll } from "../hooks/useAnimateOnScroll";

export function MemoryTree() {
  const titleRef = useAnimateOnScroll("fadeInDown", 0.3, 0);
  const imageRef = useAnimateOnScroll("fadeInUp", 0.3, 200);
  const buttonRef = useAnimateOnScroll("fadeInUp", 0.3, 400);

  return (
    <section className="bg-white min-h-screen flex items-center justify-center py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center justify-center gap-8 sm:gap-12">
          <div
            ref={titleRef}
            className="opacity-0 flex flex-col gap-4 sm:gap-6 items-center text-center"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#11181C] leading-tight sm:leading-normal">
              Роща славы. Дерево, которое
              <br />
              <span className="text-[#17C964]">держит память</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-[#3F3F46] leading-relaxed max-w-4xl">
              Есть вещи, которые словами не лечатся.
              <br />
              Когда отец на фронте. Когда его уже нет. Когда ребёнку нужно во
              что-то
              <br /> упереться, кроме пустоты.
              <br />
              Мы создаём Рощу славы — живой мемориал, где
              <br /> дети с мамами сажают деревья в честь своих защитников.
            </p>
          </div>

          <div ref={imageRef} className="opacity-0 flex justify-center w-full">
            <div className="relative w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl">
              <div className="absolute inset-0 z-20 pointer-events-none">
                <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-linear-to-r from-white via-white/70 to-transparent"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-linear-to-l from-white via-white/70 to-transparent"></div>
                <div className="absolute left-0 right-0 top-0 h-10 sm:h-20 bg-linear-to-b from-white to-transparent"></div>
                <div className="absolute left-0 right-0 bottom-0 h-10 sm:h-20 bg-linear-to-t from-white to-transparent"></div>
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
            className="opacity-0 bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg lg:text-xl transition-all duration-300 hover:scale-105 shadow-lg sm:shadow-xl hover:shadow-2xl w-full sm:w-auto text-center"
          >
            Посадить дерево в Роще славы
          </button>
        </div>
      </div>
    </section>
  );
}
