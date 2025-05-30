"use client";
import { useState } from "react";
import Image from "next/image";

export default function QuoteSection() {
  const quotes = [
    {
      icon: "/assets/quote.png",
      text: "Real healing does not happen alone, but in relationships - where you are truly seen, where your pain is not frightening, but accepted with respect and care. In a safe space where you can be yourself, step by step, the contact with yourself returns, an inner resource emerges and the silence within comes. We are there to accompany you on this journey - with care, with attention, without rushing.”",
      author: "— María",
    },
    {
      icon: "/assets/quote.png",
      text: "Real healing does not happen alone, but in relationships - where you are truly seen, where your pain is not frightening, but accepted with respect and care. In a safe space where you can be yourself, step by step, the contact with yourself returns, an inner resource emerges and the silence within comes. We are there to accompany you on this journey - with care, with attention, without rushing.”",
      author: "— María",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevQuote = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? quotes.length - 1 : prevIndex - 1
    );
  };

  const nextQuote = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="container px-4 w-full flex flex-col justify-center text-white">
      <div className="relative bg-[#D5C9B5] mx-auto rounded-[71px] overflow-hidden">
        {/* Нижний правый угол: картинка */}
        <Image
          src="/assets/line_white.png"
          alt="Decorative Line"
          width={200}
          height={150}
          className="absolute bottom-0 right-0 w-[200px] h-auto md:w-[400px] md:h-auto object-contain pointer-events-none"
        />
        {/* Текстовая часть */}
        <div className="items-center font-normal leading-tight text-2xl md:text-3xl lg:text-4xl px-10 pt-[70px]">
          <Image
            src={quotes[currentIndex].icon}
            alt="Quote Icon"
            width={50}
            height={50}
            className="mb-4 w-[20px] h-[20px] md:w-[35px] md:h-[35px] lg:w-[50px] lg:h-[50px]"
          />
          <p>{quotes[currentIndex].text}</p>
          <p className="mt-4 text-sm md:text-base lg:text-base">
            {quotes[currentIndex].author}
          </p>
        </div>

        {/* Контейнер для кнопок */}
        <div className="flex gap-5 justify-center md:justify-start lg:justify-start px-10 pb-[30px] pt-[30px] md:pt-[50px] w-full max-w-full">
          <button
            className="flex items-center justify-center rounded-full bg-[#CE946B] text-[#EFF2F7] text-2xl hover:bg-white hover:text-[#CE946B] hover:border hover:border-[#CE946B]
                    w-[36px] h-[36px] md:w-[36px] md:h-[36px] lg:w-[46px] lg:h-[46px]"
            onClick={prevQuote}
          >
            ←
          </button>
          <button
            className="flex items-center justify-center rounded-full bg-white text-black text-2xl hover:bg-white hover:text-[#CE946B] hover:border hover:border-[#CE946B]
                    w-[36px] h-[36px] md:w-[36px] md:h-[36px] lg:w-[46px] lg:h-[46px]"
            onClick={nextQuote}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
