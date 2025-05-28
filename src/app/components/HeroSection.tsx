import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-start text-white px-6 md:px-16 overflow-hidden">
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

      {/* ⬆️ Всё остальное поверх */}
      <div className="relative z-10 w-full">
        <div className="mt-32 md:mt-48">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-medium leading-none">
            Welcome to creative peace of mind
          </h1>
          <button className="mt-6 px-6 py-3 bg-white text-black rounded-full font-semibold flex items-center gap-2 shadow-md">
            Book now
            <span className="text-xl">→</span>
          </button>
          <div className="flex flex-row justify-between">
            {" "}
            <p className="mt-6 max-w-md text-sm md:text-base">
              Welcome to a space of mental balance and inner healing. We combine
              professional therapeutic practices with creative methods to help
              you restore harmony of body, mind and spirit.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex -space-x-2">
                <Image
                  src="/assets/person.svg"
                  alt="User"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex flex-col items-left gap-1 text-[#FFE70F] text-lg">
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
