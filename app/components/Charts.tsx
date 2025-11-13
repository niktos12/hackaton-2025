"use client";

import { useAnimateOnScroll } from "../hooks/useAnimateOnScroll";

interface Chart {
  src: string;
  alt: string;
}

const ChartItem = ({ chart, index }: { chart: Chart; index: number }) => {
  const chartRef = useAnimateOnScroll("fadeInUp", 0.3, index * 150);

  return (
    <div ref={chartRef} className="opacity-0 group flex justify-center">
      <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 sm:group-hover:-translate-y-2 w-full max-w-2xl">
        <img src={chart.src} alt={chart.alt} className="w-full h-auto" />
      </div>
    </div>
  );
};

export function Charts() {
  const titleRef = useAnimateOnScroll("fadeInDown", 0.3, 0);

  const charts: Chart[] = [
    { src: "chart1.png", alt: "Статистика 1" },
    { src: "chart2.png", alt: "Статистика 2" },
    { src: "chart3.png", alt: "Статистика 3" },
    { src: "chart4.png", alt: "Статистика 4" },
  ];

  return (
    <div className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="flex flex-col gap-6 sm:gap-8 justify-center items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1
          ref={titleRef}
          className="opacity-0 text-[#11181C] text-2xl sm:text-3xl font-bold text-center"
        >
          Статистика
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full">
          {charts.map((chart, index) => (
            <ChartItem key={index} chart={chart} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
