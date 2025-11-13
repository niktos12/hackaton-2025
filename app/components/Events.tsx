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
    <section className="bg-white py-12 sm:py-16 lg:py-20 xl:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5">
          <div ref={titleRef} className="opacity-0 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-[#11181C]">
              Выбор города и формат участия
            </h2>
          </div>

          <div className="flex flex-col gap-8 sm:gap-12 lg:gap-16">
            <div
              ref={citiesRef}
              className="opacity-0 flex flex-col gap-4 sm:gap-6 items-stretch sm:items-center lg:flex-row lg:justify-center"
            >
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                {cities.map((city) => (
                  <button
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 text-sm sm:text-lg font-semibold ${
                      selectedCity === city
                        ? "bg-[#006FEE] text-white shadow-lg"
                        : "bg-white border-2 border-[#D4D4D8] text-black hover:bg-gray-300"
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>

              <div className="relative w-full sm:w-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Найти город..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 sm:py-4 border-2 border-gray-200 rounded-full focus:ring-2 focus:ring-[#006FEE] focus:border-[#006FEE] text-sm sm:text-lg placeholder-gray-500 transition-all duration-200 hover:border-gray-300"
                />
              </div>
            </div>

            <div
              ref={cardsRef}
              className="opacity-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] flex flex-col group cursor-pointer bg-gray-200 hover:-translate-y-2 sm:hover:-translate-y-5 transition-transform duration-300"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 z-0"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />

                  <div className="absolute inset-0 z-10 pointer-events-none">
                    <div className="absolute left-0 right-0 top-0 h-1/2 bg-linear-to-t from-transparent to-white"></div>
                  </div>

                  <div className="relative z-20 p-4 sm:p-5 flex flex-col h-full justify-between">
                    <div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-3 sm:mb-4 text-[#11181C]">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base lg:text-xl text-[#11181C] leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="flex justify-end mt-4 sm:mt-6">
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 bg-[#006FEE] hover:bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-x-1 sm:hover:translate-x-2 hover:scale-105"
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
