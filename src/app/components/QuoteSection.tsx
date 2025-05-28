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
      <div className=" bg-[#D5C9B5] mx-auto rounded-[71px]">
        {/* Текстовая часть */}
        <div className="items-center font-normal leading-tight text-[20px] md:text-[30px] lg:text-[40px] px-10 pt-[70px]">
          <Image
            src={quotes[currentIndex].icon}
            alt="Quote Icon"
            width={50}
            height={50}
            className="mb-4 w-[20px] h-[20px] md:w-[35px] md:h-[35px] lg:w-[50px] lg:h-[50px]"
          />
          <p>{quotes[currentIndex].text}</p>
          <p className="mt-4 text-[14px] md:text-[15px] lg:text-[16px]">
            {quotes[currentIndex].author}
          </p>
        </div>

        {/* Контейнер для кнопок */}
        <div className="flex flex-col md:justify-between lg:justify-between md:flex-row px-10 pb-[30px] pt-[30px] md:pt-[50px] w-full max-w-full">
          <div className="flex gap-5 ">
            {/* Стрелки влево и вправо */}
            <button
              className="flex items-center justify-center rounded-full bg-white text-[#1C5107] text-2xl w-[30px] h-[30px] md:w-[36px] md:h-[36px] lg:w-[46px] lg:h-[46px]"
              onClick={prevQuote}
            >
              ‹
            </button>
            <button
              className="flex items-center justify-center rounded-full bg-white text-[#1C5107] text-2xl w-[30px] h-[30px] md:w-[36px] md:h-[36px] lg:w-[46px] lg:h-[46px]"
              onClick={nextQuote}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
