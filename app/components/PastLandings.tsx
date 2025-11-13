"use client";

import { useAnimateOnScroll } from "../hooks/useAnimateOnScroll";

interface Card {
  data: string;
  city: string;
  image: string;
}

const PastLandingCard = ({ card, index }: { card: Card; index: number }) => {
  const cardRef = useAnimateOnScroll("fadeInUp", 0.3, index * 100);

  return (
    <div
      ref={cardRef}
      className="opacity-0 relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[250px] sm:min-h-[300px] lg:min-h-[350px] xl:min-h-[400px] flex flex-col group cursor-pointer bg-gray-200 hover:-translate-y-2 sm:hover:-translate-y-3 transition-transform duration-300"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 z-0"
        style={{ backgroundImage: `url(${card.image})` }}
      />

      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute left-0 right-0 top-0 h-1/2 bg-linear-to-t from-transparent to-white"></div>
      </div>

      <div className="relative z-20 p-4 sm:p-5 flex flex-col h-full justify-between">
        <div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-2 sm:mb-4 text-[#11181C]">
            {card.data}
          </h3>
          <p className="text-base sm:text-lg lg:text-xl text-[#11181C] leading-relaxed">
            {card.city}
          </p>
        </div>
      </div>
    </div>
  );
};

export function PastLandings() {
  const containerRef = useAnimateOnScroll("fadeInDown", 0.3, 0);

  const cards: Card[] = [
    { data: "29 июня", city: "Тюмень", image: "/work1.png" },
    { data: "1 июля", city: "Новосибирск", image: "/work2.png" },
    { data: "15 августа", city: "Москва", image: "/work3.png" },
    { data: "29 июня", city: "Самара", image: "/work4.png" },
    { data: "1 июля", city: "Казань", image: "/work5.png" },
    { data: "15 августа", city: "СПб", image: "/work6.png" },
  ];

  return (
    <div className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="flex flex-col gap-6 sm:gap-8 justify-center items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={containerRef}
          className="opacity-0 flex flex-col gap-4 sm:gap-6 lg:gap-8 items-center text-center"
        >
          <h1 className="text-2xl sm:text-3xl font-black text-[#11181C]">
            Истории прошлых посадок
          </h1>

          <button className="rounded-full text-[#006FEE] border-[#006FEE] border-2 py-2 sm:py-3 px-4 sm:px-6 font-semibold hover:bg-[#006FEE] hover:text-white transition-all duration-300 text-sm sm:text-base w-full sm:w-auto">
            Смотреть видео
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
          {cards.map((card, index) => (
            <PastLandingCard key={card.city} card={card} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
