"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: "400" });

export default function CustomerReviews() {
  const images = [
    "/assets/review1.png",
    "/assets/review2.png",
    "/assets/review3.png",
    "/assets/review4.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(2);
  const [slideWidth, setSlideWidth] = useState(392);
  const gap = 42;

  useEffect(() => {
    const updateSlideWidth = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
        setSlideWidth(window.innerWidth - 10); // Полная ширина экрана с отступами
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
        setSlideWidth(300); // Уменьшенные карточки
      } else {
        setSlidesToShow(2);
        setSlideWidth(392); // Десктоп
      }
    };

    window.addEventListener("resize", updateSlideWidth);
    updateSlideWidth();

    return () => window.removeEventListener("resize", updateSlideWidth);
  }, []);

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - slidesToShow : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - slidesToShow ? 0 : prevIndex + 1
    );
  };

  const translateValue = `translateX(-${currentIndex * (slideWidth + gap)}px)`;

  return (
    <section className="w-full bg-[#EFF2F7] pt-[45px] pb-[45px] px-6 md:px-[70px] md:pt-[55px] md:pb-[55px] lg:px-[90px] lg:pt-[65px] lg:pb-[65px]">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center">
        {/* Левая колонка: Заголовок + кнопки */}
        <div className="text-center md:text-left">
          <h2
            className={`text-[40px] leading-tight md:text-[50px] lg:text-[69.42px] font-normal text-black mb-5 ${spaceGrotesk.className}`}
          >
            Unsere Kunden halten uns für die besten
          </h2>
          <div className="flex gap-5 justify-center md:justify-start lg:justify-start">
            {/* Стрелки влево и вправо */}
            <button
              className="flex items-center justify-center rounded-full bg-white text-[#1C5107] text-2xl border-2 border-[#1C5107] hover:bg-[#1C5107] hover:text-white w-[36px] h-[36px] md:w-[36px] md:h-[36px] lg:w-[46px] lg:h-[46px]"
              onClick={prevImage}
            >
              ‹
            </button>
            <button
              className="flex items-center justify-center rounded-full bg-white text-[#1C5107] text-2xl border-2 border-[#1C5107] hover:bg-[#1C5107] hover:text-white w-[36px] h-[36px] md:w-[36px] md:h-[36px] lg:w-[46px] lg:h-[46px]"
              onClick={nextImage}
            >
              ›
            </button>
          </div>
        </div>

        {/* Средняя и правая колонки: Две картинки (слайдер) */}
        <div className="col-span-2 flex justify-center gap-13 overflow-hidden mt-[50px] md:mt-[0px] lg:mt-[0px]">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: translateValue }}
          >
            {images.map((src, index) => (
              <div key={index} className="flex-shrink-0 mx-[21px]">
                <Image
                  src={src}
                  alt={`Customer Review ${index + 1}`}
                  width={slideWidth}
                  height={410}
                  className="rounded-lg object-cover max-w-[85%] "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
