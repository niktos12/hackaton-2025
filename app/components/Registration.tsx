"use client";
import { useAnimateOnScroll } from "../hooks/useAnimateOnScroll";

export function Registration() {
  const containerRef = useAnimateOnScroll("fadeInUp", 0.3, 0);

  const formFields = [
    { label: "Название компании", type: "text", id: "company" },
    { label: "Адрес компании", type: "text", id: "address" },
    { label: "ФИО", type: "text", id: "fullname" },
    { label: "Номер телефона", type: "tel", id: "phone" },
    { label: "Email", type: "email", id: "email" },
  ];

  return (
    <div className="bg-white w-full min-h-screen lg:h-[1080px] flex items-center">
      <div className="h-full w-full">
        <div className="flex flex-col lg:flex-row h-full">
          <div className="lg:w-1/2 w-full h-64 lg:h-full">
            <img
              src="/leaves.png"
              alt="Регистрация"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:w-1/2 w-full flex items-center justify-center py-8 lg:py-0">
            <div className="max-w-md w-full px-4 sm:px-8 flex flex-col justify-center items-center">
              <div className="text-center mb-8">
                <h1 className="text-2xl sm:text-3xl font-black text-[#11181C] mb-2">
                  Регистрация для "ООО"
                </h1>
              </div>

              <div className="flex flex-col gap-4 w-full max-w-[340px]">
                {formFields.map((field, index) => (
                  <div
                    key={field.id}
                    className="animate__animated animate__fadeInUp opacity-0"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <input
                      type={field.type}
                      id={field.id}
                      className="w-full px-4 py-4 border-2 text-black bg-[#F4F4F5] border-gray-200 rounded-xl focus:ring-2 focus:ring-[#006FEE] focus:border-[#006FEE] text-base placeholder-gray-500 transition-all duration-200 hover:border-gray-300 cursor-text"
                      placeholder={field.label}
                    />
                  </div>
                ))}

                <div className="animate__animated animate__fadeInUp opacity-0">
                  <button className="w-full bg-[#006FEE] hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-base mb-4 cursor-pointer">
                    Зарегистрироваться
                  </button>

                  <p className="text-sm text-[#D4D4D8] leading-relaxed text-center">
                    Регистрируясь, вы соглашаетесь с политикой
                    конфиденциальности.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
