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
      <div className="relative z-10 flex h-full items-center">
        <div className="container">
          <div className="mt-32 md:mt-48 max-w-5xl">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-medium leading-none">
              Welcome to creative peace of mind
            </h1>
            <button className="mt-6 px-6 py-3 bg-white text-black rounded-full font-semibold flex items-center gap-2 shadow-md">
              Book now
              <span className="text-xl">→</span>
            </button>

            {/* Контентная часть */}
            <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <p className="max-w-md text-sm md:text-base">
                Welcome to a space of mental balance and inner healing. We
                combine professional therapeutic practices with creative methods
                to help you restore harmony of body, mind and spirit.
              </p>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <Image
                    src="/assets/person.svg"
                    alt="User"
                    width={180}
                    height={50}
                  />
                </div>
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
      </div>
    </section>
  );
}
