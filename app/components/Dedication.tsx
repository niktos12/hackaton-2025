"use client";
import Image from "next/image";
import { useAnimateOnScroll } from "../hooks/useAnimateOnScroll";

export function Dedication() {
  const imageRef = useAnimateOnScroll("fadeInUp", 0.3, 0);
  const textRef = useAnimateOnScroll("fadeInUp", 0.3, 200);

  return (
    <section className="min-h-screen flex items-center justify-center bg-white py-8 sm:py-12 lg:py-16">
      <div className="container flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-12 items-center px-4 sm:px-6 lg:px-8">
        <div
          ref={imageRef}
          className="opacity-0 flex justify-center w-full lg:w-1/2 order-1 lg:order-1"
        >
          <div className="relative max-w-xs sm:max-w-md lg:max-w-full">
            <div className="relative z-10">
              <Image
                src="/main-tree.png"
                alt="Дерево ответственности"
                width={854}
                height={912}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        <div
          ref={textRef}
          className="opacity-0 flex flex-col gap-3 sm:gap-4 lg:gap-6 w-full lg:w-1/2 order-2 lg:order-2 items-center lg:items-end text-center lg:text-right"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#11181C] leading-tight">
            Мужчина — это{" "}
            <span className="text-[#17C964]">не про «бороду отрастил»</span>.
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-[#3F3F46] leading-relaxed">
            Это про ответственность.
            <br className="hidden sm:block" />
            Один мальчик сажает одно дерево — и в этот момент у него
            <br className="hidden sm:block" /> появляется что-то своё: живое,
            растущее, зависимое от него.
            <br className="hidden sm:block" />
            Раз в год мы проводим ритуал посвящения в мужчины.
            <br className="hidden sm:block" />
            Отец и сын выходят на землю, берут в руки лопаты и сажают дерево.
            <br className="hidden sm:block" />
            Не в теории, не в «когда-нибудь», а здесь и сейчас.
          </p>
          <button className="py-2 sm:py-3 px-4 sm:px-6 cursor-pointer bg-[#006FEE] text-white rounded-full hover:bg-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base w-full sm:w-auto">
            Записаться на посвящение
          </button>
          <div className="text-xs sm:text-sm lg:text-base text-[#52525B] -mt-1">
            5 000 ₽ — вклад в лес и в<br /> характер ребёнка
          </div>
        </div>
      </div>
    </section>
  );
}
