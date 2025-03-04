"use client";

export default function ExperienceSection() {
  return (
    <section
      id="services"
      className="w-full bg-white py-16 px-6 md:px-16 lg:px-24"
    >
      <p className="text-black text-[12px] pb-[16px]">Unsere Vorteile</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Левая часть: Заголовок и текст */}
        <div>
          <h2 className="font-['Instrument_Sans'] text-[20px] md:text-[25px] lg:text-[30px] font-normal text-black leading-tight mb-6">
            Das Alter bringt viele Hürden mit sich. Diese werden wir gemeinsam
            mit unseren Betreuerinnen überwinden!
          </h2>

          <p className="text-[15px] md:text-[18px] lg:text-[20px] text-[#1B1B1B] mb-4">
            Sichere und zuverlässige Betreuung: Wir bieten seit 15 Jahren eine
            qualitativ hochwertige Pflege an, bei der wir jedem Kunden besondere
            Aufmerksamkeit schenken. Sie können sicher sein, dass Ihre
            Angehörigen qualifiziert und liebevoll betreut werden.
          </p>
          <p className="text-[15px] md:text-[18px] lg:text-[20px] text-[#1B1B1B] mb-4">
            Erfahrung und Qualifikation: Unsere Fachkräfte haben mehr als 200
            Stunden Fachausbildung absolviert und entsprechende Zertifikate
            erhalten, die es uns ermöglichen, Pflege auf höchstem Niveau zu
            leisten.
          </p>
          <p className="text-[15px] md:text-[18px] lg:text-[20px] text-[rgba(27,27,27,0.5)] mb-4">
            Individueller Ansatz: Jeder Kunde ist für uns etwas Besonderes. Wir
            wissen, wie wichtig ein persönlicher Ansatz ist, und schaffen ein
            Umfeld, das den spezifischen Bedürfnissen und Wünschen Ihrer Familie
            entspricht.
          </p>
          <p className="text-[15px] md:text-[18px] lg:text-[20px] text-[rgba(27,27,27,0.5)]">
            Langfristige Unterstützung: Wir haben uns auf die Langzeitpflege
            spezialisiert und bieten Ihren Angehörigen über viele Jahre hinweg
            Stabilität und Komfort.
          </p>
        </div>

        {/* Правая часть: 4 блока + кнопка */}
        <div className="flex flex-col gap-6 items-center">
          {/* 4 квадрата */}
          <div className="grid grid-cols-2 gap-0">
            {/* Верхний левый */}
            <div className="p-6 flex flex-col items-center border-b-[1px] border-r-[1px] border-[#D1D1D1]">
              <span className="text-[50px] md:text-[70px] lg:text-[100px] font-medium text-[#1B1B1B]">
                7
              </span>
              <span className="text-[16px] text-black">
                Jahre Pflegeerfahrung
              </span>
            </div>

            {/* Верхний правый */}
            <div className="p-6 flex flex-col items-center border-b-[1px] border-[#D1D1D1]">
              <span className="text-[50px] md:text-[70px] lg:text-[100px] font-medium text-[#1B1B1B]">
                100
              </span>
              <span className="text-[16px] text-black">zufriedene Kunden</span>
            </div>

            {/* Нижний левый */}
            <div className="p-6 flex flex-col items-center border-r-[1px] border-[#D1D1D1]">
              <span className="text-[50px] md:text-[70px] lg:text-[100px] font-medium text-[#1B1B1B]">
                50
              </span>
              <span className="text-[16px] text-black">
                Langzeitpflegefälle
              </span>
            </div>

            {/* Нижний правый */}
            <div className="p-6 flex flex-col items-center">
              <span className="text-[50px] md:text-[70px] lg:text-[100px] font-medium text-[#1B1B1B]">
                200
              </span>
              <span className="text-[16px] text-black">
                Stunden Schulungen und Zertifikate
              </span>
            </div>
          </div>

          {/* Кнопка */}
          <a
            href="https://wa.me/+4368184242756"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit mt-6 px-6 py-3 bg-[#1C5107] text-white text-[18px] font-medium rounded-[70px] flex items-center gap-2 hover:bg-[#174406] transition"
          >
            Betreuung finden →
          </a>
        </div>
      </div>
    </section>
  );
}
