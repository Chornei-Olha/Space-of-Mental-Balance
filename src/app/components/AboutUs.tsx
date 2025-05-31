import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about" className="container px-4 py-10">
      <h2 className="text-lg font-medium mb-4 text-black">About Us</h2>
      <p className="text-sm md:text-base max-w-3xl mb-10 text-black">
        We are a team of practicing therapists with years of experience in
        mental health and art approaches. Our center is a safe and supportive
        space where you will be heard, understood and helped to find your way
        back to yourself.
      </p>

      <div className="flex justify-start md:justify-end my-6 space-x-4">
        <button className="px-4 py-2 border text-black border-gray-400 rounded-full text-sm hover:bg-white hover:text-black transition">
          About us
        </button>
        <button className="px-4 py-2 border text-black border-gray-400 rounded-full text-sm hover:bg-white hover:text-black transition">
          History
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gradient-to-r from-[#12DCDC] to-[#D5C9B5] rounded-[20px]">
        {/* Card 1 */}
        <div className="rounded-lg p-6 flex flex-col md:flex-row items-center text-[#243770]">
          <div className="bg-[#07512A42]/26 rounded-xl p-4 relative mb-4 w-full flex justify-center">
            <Image
              src="/therapist1.png"
              alt="Irina L Lelina"
              width={150}
              height={150}
              className="object-cover z-10"
            />
          </div>
          <div className="flex flex-col">
            {" "}
            <h3 className="text-lg font-semibold mb-2 text-center">
              Irina L Lelina
            </h3>
            <p className="text-sm text-center color-[#243770]">
              Welcome to a space of mental balance and inner healing. We combine
              professional therapeutic practices with creative methods to help
              you restore harmony of body, mind and spirit.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-lg p-6 flex flex-col-reverse md:flex-row items-center text-[#243770]">
          <div className="flex flex-col">
            {" "}
            <h3 className="text-lg font-semibold mb-2 text-center">
              Irina L Lelina
            </h3>
            <p className="text-sm text-center">
              Welcome to a space of mental balance and inner healing. We combine
              professional therapeutic practices with creative methods to help
              you restore harmony of body, mind and spirit.
            </p>
          </div>
          <div className="bg-[#07512A42]/26 rounded-xl p-4 relative mb-4 w-full flex justify-center">
            <Image
              src="/therapist2.png"
              alt="Irina L Lelina"
              width={150}
              height={150}
              className="object-cover z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
