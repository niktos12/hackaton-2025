"use client";
import { useAnimateOnScroll } from "../hooks/useAnimateOnScroll";

export function Main() {
  const sectionRef = useAnimateOnScroll("fadeInUp", 0.3, 100);

  return (
    <section className="bg-[url(/leaves.png)] bg-cover bg-center min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8 py-16">
      <div className="container flex items-center justify-center w-full max-w-4xl lg:max-w-6xl">
        <div
          ref={sectionRef}
          className="opacity-0 items-center flex flex-col border-[#3F3F4666] border-2 sm:border-3 lg:border-4 py-6 sm:py-8 lg:py-12 w-full bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl lg:rounded-[48px] gap-3 sm:gap-4 lg:gap-6 px-4 sm:px-6 lg:px-8"
        >
          <h1 className="text-[#11181C] text-center text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold leading-tight">
            Покупай саженцы
            <br /> — <span className="text-[#17C964]">сажай лес</span>.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-[#3F3F46] text-center">
            Лес, в который можно вернуться
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-3 sm:mt-4 lg:mt-6 w-full sm:w-auto">
            <button className="bg-[#17C964] hover:bg-green-600 text-black py-2 sm:py-3 px-4 sm:px-6 rounded-full text-xs sm:text-sm lg:text-base w-full sm:w-auto transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
              Выбрать город и посадку
            </button>
            <button className="bg-[#17C964] hover:bg-green-600 text-black py-2 sm:py-3 px-4 sm:px-6 rounded-full text-xs sm:text-sm lg:text-base w-full sm:w-auto transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
              Для компаний
            </button>
            <button className="bg-[#17C964] hover:bg-green-600 text-black py-2 sm:py-3 px-4 sm:px-6 rounded-full text-xs sm:text-sm lg:text-base w-full sm:w-auto transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
              Роща славы
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
