import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden text-white">
      {/* ⬇️ Фоновое видео */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/sea.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* ⬆️ Контент поверх */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container px-4">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-medium leading-none text-left">
            Welcome to creative peace of mind
          </h1>

          <div className="mt-9 text-left">
            <button className="flex items-center gap-2 cursor-pointer">
              <Image
                src="/assets/button.svg"
                alt="Irina L Lelina"
                width={250}
                height={150}
                className="object-cover z-10"
              />
            </button>
          </div>

          {/* Контентная часть */}
          <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-center md:text-left">
            <p className="max-w-md text-sm md:text-base mx-auto md:mx-0">
              Welcome to a space of mental balance and inner healing. We combine
              professional therapeutic practices with creative methods to help
              you restore harmony of body, mind and spirit.
            </p>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Image
                src="/assets/Person.png"
                alt="User"
                width={180}
                height={50}
              />
              <div className="flex flex-col gap-1 text-white text-lg">
                {"★★★★★"}
                <span className="text-sm text-white">
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
