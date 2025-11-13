"use client";

import { useAnimateOnScroll } from "../hooks/useAnimateOnScroll";

export function Main() {
  const sectionRef = useAnimateOnScroll("fadeInUp", 0.3, 100);

  return (
    <section className="bg-[url(/leaves.png)] bg-cover min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8">
      <div className="container flex items-center justify-center w-full max-w-[960px]">
        <div
          ref={sectionRef}
          className="opacity-0 items-center flex flex-col border-[#3F3F4666] border-2 sm:border-4 py-8 sm:py-12 lg:py-[72px] w-full bg-[#FFFFFF] rounded-3xl sm:rounded-[48px] gap-4 sm:gap-6 px-4 sm:px-6"
        >
          <h1 className="text-[#11181C] text-center text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight sm:leading-normal">
            Покупай саженцы
            <br /> — <span className="text-[#17C964]">сажай лес</span>.
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-[#3F3F46] text-center">
            Лес, в который можно вернуться
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-6 w-full sm:w-auto">
            <button className="bg-[#17C964] text-black py-3 px-6 rounded-full text-sm sm:text-base w-full sm:w-auto">
              Выбрать город и посадку
            </button>
            <button className="bg-[#17C964] text-black py-3 px-6 rounded-full text-sm sm:text-base w-full sm:w-auto">
              Для компаний
            </button>
            <button className="bg-[#17C964] text-black py-3 px-6 rounded-full text-sm sm:text-base w-full sm:w-auto">
              Роща славы
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
