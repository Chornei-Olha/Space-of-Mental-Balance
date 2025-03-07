import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[800px] overflow-hidden">
      {/* Десктоп и планшет: фон */}
      <div className="hidden md:block absolute w-full h-full">
        <Image
          src="/assets/hero-background.png"
          alt="Hero"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      </div>

      {/* Мобильная версия: четкое изображение сверху */}
      <div className="block md:hidden relative w-[800px] h-[500px]">
        <Image
          src="/assets/hero-background.png"
          alt="Hero"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 scale-[1]"
        />
      </div>

      {/* <div className="absolute md:right-0 w-full md:w-1/2 h-full bg-opacity-50 md:backdrop-blur-lg"></div> */}

      {/* Добавляем блюренное изображение и на мобилку */}
      <div className="absolute top-[50vh] md:top-0 right-0 w-full h-[600px] md:w-1/2 md:h-full">
        <Image
          src="/assets/blur.png"
          alt="Blurred Background"
          layout="fill"
          objectFit="cover"
          className="z-10 opacity-100 md:opacity-100"
        />
      </div>

      {/* Блок с текстом */}
      <div className="absolute top-1/2 md:top-auto md:bottom-0 right-0 transform translate-y-[-50%] md:translate-y-0 p-4 md:p-8 text-white z-20 w-full md:w-1/2 md:text-left text-center">
        <h1 className="leading-tight text-[45px] mt-[400px] md:text-[70px] md:mt-[200px] lg:text-[100px] lg:mt-[270px] text-left">
          Betreuung <br />
          <span className="text-[40px] md:text-[65px] lg:text-[90px]">
            24
          </span>{" "}
          Stunden
        </h1>
        <div className="flex md:justify-start space-x-1 md:space-x-4 my-4 text-[15px] md:text-[20px] text-left">
          <span className="border border-white rounded-full py-1 px-3 w-10 h-10">
            ➘
          </span>
          <span className="border border-white rounded-lg py-1 px-3">
            Liebe
          </span>
          <span className="border border-white rounded-lg py-1 px-3">
            Fürsorge
          </span>
          <span className="border border-white rounded-lg py-1 px-3">
            Verantwortung
          </span>
        </div>
        <a
          href="https://wa.me/+4368184242756"
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit mt-5 px-6 py-3 text-[#1C5107] bg-white text-[16px] font-medium rounded-[70px] flex items-center gap-2 hover:bg-[#174406] transition"
        >
          Betreuung finden →
        </a>
        <p className="mt-4 text-[15px] md:text-[18px] lg:text-[20px] text-left">
          Wir bieten Betreuung für ältere Menschen mit Liebe,
          <br />
          Fürsorge und Verantwortung. Wir helfen Angehörigen im <br />
          Alltag und sorge für Komfort, Sicherheit und seelische Wärme.
        </p>
        <p className="mt-4 mb-4 text-left text-[13px]">
          In Österreich Und Deutschland
        </p>
      </div>
    </section>
  );
}
