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
    <section className="relative bg-[#EFF2F799]/60 w-full pt-[45px] mt-[20px] md:mt-[100px] mb-[15px] pb-[45px]">
      {/* Левый декор */}
      <div className="absolute top-[-80px] md:top-0 left-0 z-0">
        <Image
          src="/assets/leave_left.png"
          alt="Left Leaf Decoration"
          width={100}
          height={300}
          className="object-contain"
        />
      </div>

      {/* Правый декор */}
      <div className="absolute top-[-80px] hidden md:block right-0 z-0">
        <Image
          src="/assets/leave_right.png"
          alt="Right Leaf Decoration"
          width={500}
          height={300}
          className="object-contain"
        />
      </div>

      {/* Контейнер для заголовка, стрелок и слайдера */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-10 items-start">
          {/* Левая колонка: Заголовок и кнопки */}
          <div className="text-center md:text-left md:col-span-1">
            <h2
              className={`leading-tight text-4xl md:text-5xl lg:text-7xl font-normal text-black mb-5 ${spaceGrotesk.className}`}
            >
              Our Clients Consider Us The Best{" "}
            </h2>
            {!isMobile && (
              <div className="flex gap-5 justify-center md:justify-start lg:justify-start">
                <button
                  className="flex items-center justify-center rounded-full bg-[#07512A]/26 text-[#EFF2F7] text-2xl hover:bg-[#EFF2F7] hover:text-[#07512A] hover:border hover:border-[#07512A]
                    w-[36px] h-[36px] md:w-[36px] md:h-[36px] lg:w-[46px] lg:h-[46px]"
                  id="prevBtn"
                >
                  ←
                </button>
                <button
                  className="flex items-center justify-center rounded-full bg-[#F0D9D4] text-[#EFF2F7] text-2xl hover:bg-[#EFF2F7] hover:text-[#F0D9D4] hover:border hover:border-[#F0D9D4]
                    w-[36px] h-[36px] md:w-[36px] md:h-[36px] lg:w-[46px] lg:h-[46px]"
                  id="nextBtn"
                >
                  →
                </button>
              </div>
            )}
          </div>

          {/* Средняя и правая колонки: Слайдер */}
          <div className="md:col-span-2 mt-[50px] md:mt-0 flex justify-center">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={10}
              slidesPerView={slidesToShow}
              loop={true}
              autoplay={{ delay: 3000 }}
              grabCursor={true}
              navigation={
                !isMobile ? { prevEl: "#prevBtn", nextEl: "#nextBtn" } : false
              }
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
                      className="rounded-lg object-cover mx-auto max-w-[80%]"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
