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
      className="opacity-0 relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden min-h-[180px] sm:min-h-[220px] lg:min-h-[280px] xl:min-h-[320px] flex flex-col group cursor-pointer bg-gray-200 hover:-translate-y-1 sm:hover:-translate-y-2 transition-transform duration-300"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 z-0"
        style={{ backgroundImage: `url(${card.image})` }}
      />

      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute left-0 right-0 top-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      <div className="relative z-20 p-3 sm:p-4 lg:p-5 flex flex-col h-full justify-between">
        <div>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-black mb-1 sm:mb-2 lg:mb-3 text-white">
            {card.data}
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-white leading-relaxed">
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
    <div className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 justify-center items-center mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          ref={containerRef}
          className="opacity-0 flex flex-col gap-3 sm:gap-4 lg:gap-6 items-center text-center"
        >
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#11181C]">
            Истории прошлых посадок
          </h1>

          <button className="rounded-full text-[#006FEE] border-[#006FEE] border py-1.5 sm:py-2 lg:py-2.5 px-3 sm:px-4 lg:px-5 font-semibold hover:bg-[#006FEE] hover:text-white transition-all duration-300 text-xs sm:text-sm lg:text-base w-full sm:w-auto cursor-pointer">
            Смотреть видео
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 w-full">
          {cards.map((card, index) => (
            <PastLandingCard key={card.city} card={card} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
