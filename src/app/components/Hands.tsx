import Image from "next/image";
import { PhoneIcon } from "@heroicons/react/solid";

export default function CareSection() {
  return (
    <section
      id="about"
      className="w-full px-4 md:px-16 lg:px-24 py-7 bg-[#1C5107] text-white"
    >
      {/* Заголовок */}
      <h2 className="text-center md:text-left lg:text-left text-[18px] md:text-[30px] lg:text-[40px] mb-6 ">
        DIE 24 STUNDEN BETREUUNG BEGINNT
      </h2>

      {/* Контейнер для картинки и текста */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center md:items-start gap-6">
        {/* Изображение (слева на десктопе, сверху на мобилке) */}
        <div className="w-full md:w-[70%] rounded-2xl overflow-hidden">
          <Image
            src="/assets/hands.jpg"
            alt="hands"
            width={429}
            height={267}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Текст (справа на десктопе, под фото на мобилке) */}
        <div className="text-[16px] w-[90%] md:w-[90%] lg:w-full leading-[18.78px] font-normal font-['YasnoRaleway']">
          <p className="mb-6 md:items-left lg:items-left">
            Es ist geschafft! Wir haben die perfekte Betreuungskraft für Sie
            gefunden, organisieren den Transport der Betreuungskraft zu Ihnen
            nach Hause und die 24 Stunden Betreuung beginnt.
          </p>
          <a href="tel:+4368184242756">
            <button className="mb-6 bg-white text-[#1C5107] p-5 rounded-3xl hover:text-black hover:border-2 hover:border-black flex items-center gap-2">
              <PhoneIcon className="h-6 w-6 text-[#1C5107]" /> RUFEN SIE UNS AN
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
