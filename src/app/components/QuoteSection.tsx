"use client";
import { useState } from "react";
import Image from "next/image";

export default function QuoteSection() {
  const quotes = [
    {
      icon: "/assets/quote.png",
      text: "Die Pflege, die wir Ihren Angehörigen bieten, ist nicht nur ein Beruf. Es ist eine Berufung, die Herz, Geduld und Erfahrung erfordert. Wir behandeln jeden wie eine Familie und sorgen jeden Tag für Komfort und Seelenfrieden.",
      author: "— María",
    },
    {
      icon: "/assets/quote.png",
      text: "Wahre Fürsorge bedeutet, nicht nur physische Bedürfnisse zu erfüllen, sondern auch ein offenes Herz und ein verständnisvolles Ohr zu haben. Jeder Mensch verdient es, mit Würde und Respekt behandelt zu werden.",
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
    <section className="w-full bg-[#1C5107] flex flex-col justify-center text-white px-6 h-[538px] md:h-[590px] lg:h-[638px] md:px-16 lg:px-24">
      {/* Текстовая часть */}
      <div className="w-[80%] items-left text-left font-normal leading-tight text-[20px] md:text-[30px] lg:text-[40px]">
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
      <div className="flex flex-col gap-5 md:justify-between lg:justify-between md:flex-row mt-[30px] md:mt-[50px] w-full max-w-full">
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

        {/* Кнопка "Betreuung finden" (переносится вниз в мобильной версии) */}
        <a
          href="https://wa.me/+4368184242756"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto border-2 border-white text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white hover:text-[#1C5107] transition mt-4 md:mt-0"
        >
          Betreuung finden
          <span className="text-lg ml-auto">→</span>
        </a>
      </div>
    </section>
  );
}
