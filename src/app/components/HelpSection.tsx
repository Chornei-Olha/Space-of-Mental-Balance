// components/HelpSection.jsx
import Image from "next/image";

export default function HelpSection() {
  return (
    <section className="container px-4 relative py-10 flex justify-center">
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-7xl overflow-hidden rounded-2xl bg-white shadow-md">
        {/* Текстовая часть */}
        <div className="flex-1 p-6 md:p-8">
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
        <div className="relative flex items-center justify-right md:justify-center min-w-[300px] px-10 text-white">
          {/* Синее круговое изображение, обрезанное контейнером */}
          <div className="absolute w-full md:w-[600px] h-[100px] md:h-[600px]">
            <Image
              src="/assets/Ellipse.png"
              alt="Blue Circle"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Кнопка поверх круга */}
          <button className="relative z-10 text-white pr-[20px] py-10 md:py-3 rounded-full font-medium hover:brightness-110 transition">
            Get consultation →
          </button>
        </div>
      </div>
    </section>
  );
}
