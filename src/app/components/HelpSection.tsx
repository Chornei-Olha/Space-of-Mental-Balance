import Image from "next/image";

export default function HelpSection() {
  return (
    <section id="groups" className="relative py-10 sm:mb-[100px] md:mb-[159px]">
      {/* Картинка слева внизу вне контейнера */}
      <div className="absolute bottom-0 left-0 z-0 w-[120px] h-[120px] md:w-[150px] md:h-[150px]">
        <Image
          src="/assets/key.png"
          alt="Key Decoration"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Картинка справа вверху вне контейнера */}
      <div className="absolute top-0 right-0 z-0 w-[120px] h-[120px] md:w-[150px] md:h-[150px]">
        <Image
          src="/assets/ribbon.png"
          alt="Ribbon Decoration"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Контейнер с контентом */}
      <div className="container relative z-10 px-4 flex justify-center">
        <div className="relative flex flex-col md:flex-row w-full max-w-7xl overflow-hidden rounded-2xl bg-white shadow-md p-6 md:p-8">
          {/* Текстовая часть */}
          <div className="flex-1 pr-0 md:pr-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#2D2D2D]">
              Do you need help?
            </h2>
            <p className="text-[#2D2D2D] text-base md:text-sm md:w-[70%]">
              We will provide detailed information about our services, types of
              work, and top projects. We will calculate the cost and prepare a
              commercial proposal.
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
              className="relative z-10 bg-gradient-to-r from-[#12DCDC] to-[#D5C9B5] bg-clip-text text-transparent md:text-white md:pr-[20px] py-5 md:py-3 rounded-full text-xl font-medium hover:brightness-110 transition"
            >
              Get consultation →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
