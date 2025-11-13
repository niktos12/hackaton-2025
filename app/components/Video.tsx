"use client";
import { useAnimateOnScroll } from "../hooks/useAnimateOnScroll";

export function VideoSection() {
  const containerRef = useAnimateOnScroll("fadeInUp", 0.3, 0);
  const videoRef = useAnimateOnScroll("fadeInUp", 0.3, 200);

  return (
    <div className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={containerRef} className="opacity-0 text-center mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#11181C] mb-3">
            Наша миссия в действии
          </h1>
          <p className="text-sm sm:text-base text-[#3F3F46] max-w-2xl mx-auto">
            Посмотрите, как мы создаём зелёное будущее вместе
          </p>
        </div>

        <div
          ref={videoRef}
          className="opacity-0 bg-gray-100 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
        >
          <div className="relative w-full aspect-video">
            <video className="w-full h-full object-cover" controls>
              <source src="/video.mp4" type="video/mp4" />
              Ваш браузер не поддерживает видео тег.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
