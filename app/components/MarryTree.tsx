"use client";
import Image from "next/image";
import { useAnimateOnScroll } from "../hooks/useAnimateOnScroll";

export function MarryTree() {
  const textRef = useAnimateOnScroll("fadeInUp", 0.3, 0);
  const imageRef = useAnimateOnScroll("fadeInUp", 0.3, 200);

  return (
    <section className="min-h-screen flex items-center justify-center bg-white py-8 sm:py-12 lg:py-16">
      <div className="container flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-12 items-center px-4 sm:px-6 lg:px-8">
        <div
          ref={textRef}
          className="opacity-0 flex flex-col gap-3 sm:gap-4 lg:gap-6 w-full lg:w-1/2 order-2 lg:order-1 items-center lg:items-start text-center lg:text-left"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#11181C] leading-tight">
            Свадебное дерево: <br />
            <span className="text-[#17C964]">вместо очередного букета</span>
            <br />— корни в земле.
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-[#3F3F46] leading-relaxed">
            Свадьба заканчивается, фото блекнут, торт съели и забыли.
            <br className="hidden sm:block" />
            Но если в день росписи вы сажаете своё дерево — память становится
            живой. Каждая семья после ЗАГСа может поехать не в ТЦ, а на свою
            первую совместную посадку. Дерево растёт вместе с вами:
            <br className="hidden sm:block" /> переживает ветра, морозы, засуху.
            Как и семья: главное — не бросать, ухаживать и возвращаться.
          </p>
          <button className="py-2 sm:py-3 px-4 sm:px-6 cursor-pointer bg-[#006FEE] text-white rounded-full hover:bg-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base w-full sm:w-auto">
            Посадить семейное дерево!
          </button>
          <div className="text-xs sm:text-sm lg:text-base text-[#52525B] -mt-1">
            5 000 ₽ — ваша традиция, ваш
            <br /> лес, ваш след
          </div>
        </div>

        <div
          ref={imageRef}
          className="opacity-0 flex justify-center w-full lg:w-1/2 order-1 lg:order-2"
        >
          <div className="relative max-w-xs sm:max-w-md lg:max-w-full">
            <Image
              src="/marry-tree.png"
              alt="Свадебное дерево"
              width={854}
              height={912}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
