import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

export default function HelpSection() {
  return (
    <section
      id="groups"
      className="relative py-10 w-full sm:mb-[100px] md:mb-[159px]"
    >
      {/* Картинка слева внизу вне контейнера */}
      <div className="absolute top-[-150px] sm:top-0 left-0 z-0 w-[120px] h-[auto] md:w-[272px]">
        <Image
          src="/assets/key.png"
          alt="Key Decoration"
          width={272}
          height={300}
          className="object-contain"
        />
      </div>

      {/* Картинка справа вверху вне контейнера */}
      <div className="absolute top-[-50px] sm:top-0 right-0 z-20 sm:z-0 w-[120px] h-[auto] md:w-[252px]">
        <Image
          src="/assets/ribbon.png"
          alt="Ribbon Decoration"
          width={500}
          height={300}
          className="object-contain"
        />
      </div>

      {/* Контейнер с контентом */}
      <div className="container px-4 relative z-10 flex justify-center mx-auto">
        <div className="relative flex flex-col md:flex-row w-full max-w-7xl overflow-hidden rounded-2xl bg-white shadow-md p-6 md:p-8">
          {/* Текстовая часть */}
          <div className="flex-1 pr-0 md:pr-8">
            <h2
              className={`text-2xl md:text-3xl mb-4 text-[#2D2D2D] font-medium ${poppins.className}`}
            >
              A Place to Heal, Grow, and Create
            </h2>
            <p
              className={`text-[#2D2D2D] text-base md:text-sm md:w-[70%] font-normal ${poppins.className}`}
            >
              Whether you’re seeking support, connection, or simply a creative
              pause from daily life, you’re welcome here. We offer individual
              and couples counselling, as well as group creative sessions that
              encourage expression, reflection, and growth. Discover how we work
              and take the first step toward positive change.
            </p>
          </div>

          {/* Правая часть с кнопкой и фоном */}
          <div className="relative flex items-center justify-center min-w-[300px] md:px-10 text-white">
            {/* Синее круговое изображение */}
            <div className="absolute hidden md:block w-[600px] h-[600px]">
              <Image
                src="/assets/Ellipse.png"
                alt="Blue Circle"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Кнопка поверх круга */}
            <a
              href="#contact"
              className={`relative z-10 bg-gradient-to-r from-[#12DCDC] to-[#D5C9B5] bg-clip-text text-transparent md:text-white md:pr-[20px] py-5 md:py-3 rounded-full text-xl hover:brightness-110 transition font-medium ${poppins.className}`}
            >
              Get consultation →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
