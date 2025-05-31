import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white pt-[152px] pb-[80px]">
      {/* ⬇️ Фоновое видео */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full min-h-full object-cover z-0 scale-[1.23]"
      >
        <source src="/assets/sea.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* ⬆️ Контент поверх */}
      <div className="relative flex items-center justify-center">
        <div className="container px-4 flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-medium leading-none text-left">
            Welcome to creative peace of mind
          </h1>

          <div className="mt-[130px] sm:mt-[180px] text-left">
            <a
              href="#contact"
              className="flex items-center gap-2 cursor-pointer"
            >
              <Image
                src="/assets/button.svg"
                alt="book now"
                width={250}
                height={150}
                className="object-cover z-10"
              />
            </a>
          </div>

          {/* Контентная часть */}
          <div className="mt-6 flex flex-col lg:flex-row md:items-left md:justify-between gap-6 text-left">
            <p className="max-w-xl text-lg md:text-xl text-medium mx-auto md:mx-0">
              Welcome to a space of mental balance and inner healing. We combine
              professional therapeutic practices with creative methods to help
              you restore harmony of body, mind and spirit.
            </p>
            <div className="flex items-center gap-3 justify-left md:justify-start">
              <Image
                src="/assets/Person.png"
                alt="User"
                width={150}
                height={50}
              />
              <div className="flex flex-col gap-1 text-white text-lg">
                {"★★★★★"}
                <span className="text-base text-white">
                  Rating reviews from 10k people
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
