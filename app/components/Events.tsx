"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import { useAnimateOnScroll } from "../hooks/useAnimateOnScroll";

export function Events() {
  const [selectedCity, setSelectedCity] = useState("Москва");
  const [searchQuery, setSearchQuery] = useState("");
  const cities = ["Москва", "СПб", "Самара", "Казань"];

  const titleRef = useAnimateOnScroll("fadeInDown", 0.3, 0);
  const citiesRef = useAnimateOnScroll("fadeInLeft", 0.3, 200);
  const cardsRef = useAnimateOnScroll("fadeInRight", 0.3, 400);

  const services = [
    {
      title: "Посвящение в мужчины",
      description:
        "Совместимость ритуала с международным и международным проектом",
      image: "/man.png",
    },
    {
      title: "Свадебное дерево",
      description: "Свадебное дерево — символ любви и начала семейного пути",
      image: "/marry.png",
    },
    {
      title: "Участие в посадке",
      description: "Совместная посадка деревьев ради общего дела",
      image: "/landings.png",
    },
  ];

  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:gap-6">
          <div ref={titleRef} className="opacity-0 text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#11181C]">
              Выбор города и формат участия
            </h2>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-12">
            <div
              ref={citiesRef}
              className="opacity-0 flex flex-col gap-3 sm:gap-4 items-stretch sm:items-center lg:flex-row lg:justify-center"
            >
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                {cities.map((city) => (
                  <button
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    className={`px-3 sm:px-4 py-2 rounded-full transition-all duration-300 text-xs sm:text-sm font-semibold cursor-pointer ${
                      selectedCity === city
                        ? "bg-[#006FEE] text-white shadow-lg"
                        : "bg-white border border-[#D4D4D8] text-black hover:bg-gray-100"
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>

              <div className="relative w-full sm:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Найти город..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-full focus:ring-2 focus:ring-[#006FEE] focus:border-[#006FEE] text-sm placeholder-gray-500 transition-all duration-200 hover:border-gray-300 cursor-text"
                />
              </div>
            </div>

            <div
              ref={cardsRef}
              className="opacity-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
            >
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="relative rounded-xl sm:rounded-2xl overflow-hidden min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] flex flex-col group cursor-pointer bg-gray-200 hover:-translate-y-1 sm:hover:-translate-y-2 transition-transform duration-300"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 z-0"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />

                  <div className="absolute inset-0 z-10 pointer-events-none">
                    <div className="absolute left-0 right-0 top-0 h-1/2 bg-linear-to-t from-black/30 to-transparent"></div>
                  </div>

                  <div className="relative z-20 p-3 sm:p-4 flex flex-col h-full justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="flex justify-end mt-3">
                      <a
                        href="#"
                        className="inline-flex items-center gap-1 bg-[#006FEE] hover:bg-blue-600 text-white px-3 py-2 rounded-full font-semibold text-xs transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-x-1 hover:scale-105 cursor-pointer"
                      >
                        Подробнее →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
