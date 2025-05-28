"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: "400" });

export default function CustomerReviews() {
  const images = [
    "/assets/review1.png",
    "/assets/review2.png",
    "/assets/review3.png",
    "/assets/review4.png",
  ];

  const [slidesToShow, setSlidesToShow] = useState(2);
  const [slideWidth, setSlideWidth] = useState(392);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setSlidesToShow(1);
        setSlideWidth(width - 10);
        setIsMobile(true);
      } else if (width < 1024) {
        setSlidesToShow(2);
        setSlideWidth(300);
        setIsMobile(false);
      } else {
        setSlidesToShow(2);
        setSlideWidth(392);
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", updateScreenSize);
    updateScreenSize();

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return (
    <section className="container bg-[#EFF2F799]/60 w-full pt-[45px] pb-[45px] px-4 md:px-[50px] md:pt-[55px] md:pb-[55px] lg:px-[80px] lg:pt-[65px] lg:pb-[65px] ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {" "}
        {/* Левая колонка: Заголовок + кнопки */}
        <div className="text-center md:text-left md:col-span-1">
          <h2
            className={`text-4xl leading-tight md:text-5xl lg:text-6xl font-normal text-black mb-5 ${spaceGrotesk.className}`}
          >
            Our Clients Consider Us The Best{" "}
          </h2>
          {/* Кнопки навигации — показываем только на планшете и десктопе */}
          {!isMobile && (
            <div className="flex gap-5 justify-center md:justify-start lg:justify-start">
              <button
                className="flex items-center justify-center rounded-full bg-white text-[#1C5107] text-2xl border-1 border-black hover:bg-[#1C5107] hover:text-white w-[36px] h-[36px] md:w-[36px] md:h-[36px] lg:w-[46px] lg:h-[46px]"
                id="prevBtn"
              >
                ‹
              </button>
              <button
                className="flex items-center justify-center rounded-full bg-white text-[#1C5107] text-2xl border-1 border-black hover:bg-[#1C5107] hover:text-white w-[36px] h-[36px] md:w-[36px] md:h-[36px] lg:w-[46px] lg:h-[46px]"
                id="nextBtn"
              >
                ›
              </button>
            </div>
          )}
        </div>
        {/* Средняя и правая колонки: Слайдер с изображениями */}
        <div className="md:col-span-2 mt-[50px] md:mt-[0px] lg:mt-[0px]">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={10}
            slidesPerView={slidesToShow}
            loop={true}
            autoplay={{ delay: 3000 }}
            grabCursor={true}
            navigation={
              !isMobile ? { prevEl: "#prevBtn", nextEl: "#nextBtn" } : false
            } // Кнопки навигации только на десктопе
            className="flex justify-center overflow-hidden"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="flex-shrink-0">
                  <Image
                    src={src}
                    alt={`Customer Review ${index + 1}`}
                    width={slideWidth}
                    height={410}
                    className="rounded-lg object-cover max-w-[80%] "
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
