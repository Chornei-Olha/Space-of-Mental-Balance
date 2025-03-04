"use client";
import { useState } from "react";
import Image from "next/image";

export default function InfoSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "Individuelle Betreuung",
      content:
        "Wir bieten maßgeschneiderte Betreuung, die sich an den individuellen Bedürfnissen jedes Einzelnen orientiert. Mit Herz, Geduld und Fachwissen sorgen wir für Wohlbefinden, Sicherheit und eine hohe Lebensqualität. Unser Ziel ist es, jeden Tag ein Stück Lebensfreude zu schenken.",
    },
    {
      title: "Bezahlbare Tarife",
      content:
        "Wir bieten professionelle Betreuung zu transparenten und fairen Preisen. Unser Ziel ist es, hochwertige Pflege für jeden zugänglich zu machen, ohne Kompromisse bei der Qualität einzugehen.",
    },
    {
      title: "Langzeitarbeitsreisen unserer Pflegekräfte",
      content:
        "Langzeitarbeitsreisen unserer Pflegekräfte – Flexibilität und Vielfalt für optimale Betreuung. Unsere Pflegekräfte sind bereit, für längere Zeiträume in verschiedenen Regionen tätig zu sein, um den individuellen Bedürfnissen unserer Klienten gerecht zu werden. Durch diese Einsatzbereitschaft gewährleisten wir eine kontinuierliche und qualitativ hochwertige Pflege, unabhängig vom Standort.",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-16 lg:px-24 py-12 bg-white text-black">
      {/* Левая часть с аккордеоном */}
      <div className="w-full md:w-1/2">
        {items.map((item, index) => (
          <div key={index} className="border-b border-gray-300 py-4">
            <button
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center w-full text-left text-lg font-medium pb-2"
            >
              {item.title}
              <span
                className="text-xl transition-transform transform "
                style={{
                  transform:
                    openIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                }}
              >
                +
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-700 text-sm leading-relaxed pt-2">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Правая часть с изображением */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/assets/care.png"
          alt="Info Image"
          width={642}
          height={488}
          className="rounded-lg object-cover"
        />
      </div>
    </section>
  );
}
