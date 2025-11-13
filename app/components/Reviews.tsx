"use client";
import { useAnimateOnScroll } from "../hooks/useAnimateOnScroll";
import { useState } from "react";

interface Review {
  id: number;
  author: string;
  position?: string;
  data: string;
  text: string;
  highlight: string;
}

export function Reviews() {
  const containerRef = useAnimateOnScroll("fadeInUp", 0.3, 0);
  const [showAllReviews, setShowAllReviews] = useState(false);

  const initialReviews: Review[] = [
    {
      id: 1,
      author: "Волков",
      position: "Пулевский",
      text: "Псухостепенная площадь — всё организованное чётко, чувствуется любовь к природе.",
      data: "21.06.25",
      highlight: "Круто.",
    },
    {
      id: 2,
      author: "Дмитрий",
      data: "21.06.25",
      text: "Крутяя команда. С ними нас становятся ближе и понятнее.",
      highlight: "Полезный опыт!",
    },
    {
      id: 3,
      author: "Светлана",
      data: "10.08.25",
      text: "Каждое дедово — как маленький взгляд в пике заката. Спасибо поклонению.",
      highlight: "Рекомендую!",
    },
    {
      id: 4,
      author: "Аноним",
      data: "30.09.25",
      text: "Ребята делают великое дело — сможет дергать на них где это реально нужно. Уважение!",
      highlight: "Круто.",
    },
  ];

  const additionalReviews: Review[] = [
    {
      id: 5,
      author: "Михаил",
      data: "30.09.25",
      text: "Отличная организация процесса посадки. Все было четко и понятно.",
      highlight: "Отлично!",
    },
    {
      id: 6,
      author: "Анна",
      data: "30.09.25",
      text: "Очень понравилось участвовать в посадке деревьев. Обязательно приду еще.",
      highlight: "Супер!",
    },
    {
      id: 7,
      author: "Сергей",
      data: "30.09.25",
      text: "Профессиональный подход к делу. Видно, что команда знает свое дело.",
      highlight: "Профессионалы!",
    },
    {
      id: 8,
      author: "Ольга",
      data: "12.09.25",
      text: "Прекрасная инициатива! Спасибо за возможность внести вклад в природу.",
      highlight: "Благодарность!",
    },
  ];

  const allReviews = showAllReviews
    ? [...initialReviews, ...additionalReviews]
    : initialReviews;

  const handleShowAllReviews = () => {
    setShowAllReviews(!showAllReviews);
  };

  return (
    <div className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={containerRef} className="opacity-0 text-center mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#11181C] mb-3">
            Что говорят люди
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {allReviews.map((review, index) => (
            <div
              key={review.id}
              className="animate__animated animate__fadeInUp opacity-0 w-full bg-white rounded-xl sm:rounded-2xl max-w-full border-[#11111126] border p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col gap-3 text-black">
                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-row gap-2">
                    <div className="flex flex-row bg-[#D4D4D866] p-1 gap-1 rounded-full items-center">
                      <img
                        src={"/avatar.svg"}
                        className="rounded-full w-6 h-6"
                      />
                      <p className="text-black text-xs sm:text-sm">
                        {review.author}
                      </p>
                    </div>
                    <div className="flex flex-row bg-[#17C96433] p-1 gap-1 rounded-full items-center">
                      <img src={"star.svg"} className="w-3 h-3" />
                      <p className="text-[#17C964] text-xs sm:text-sm">5</p>
                    </div>
                  </div>
                  <p className="text-black opacity-20 text-xs">{review.data}</p>
                </div>
                <h1 className="text-base sm:text-lg font-semibold">
                  {review.highlight}
                </h1>
                <p className="text-xs sm:text-sm opacity-80">{review.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6 sm:mt-8">
          <button
            onClick={handleShowAllReviews}
            className="inline-flex items-center gap-2 text-[#006FEE] hover:text-blue-700 font-semibold text-sm sm:text-base transition-all duration-200 hover:gap-3 group cursor-pointer"
          >
            {showAllReviews ? "Скрыть отзывы" : "Читать все отзывы"}
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${
                showAllReviews ? "rotate-90" : "group-hover:translate-x-1"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
