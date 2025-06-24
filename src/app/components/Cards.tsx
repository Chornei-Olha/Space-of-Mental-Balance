"use client";

import { useState } from "react";
import Image from "next/image";
import { DM_Sans, Inter } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export default function EducationSection() {
  // const [modalContent, setModalContent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = (text: string) => {
  //   setModalContent(text);
  //   setIsModalOpen(true);
  // };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container w-full">
      {/* МОДАЛКА */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            background: `linear-gradient(
          180deg,
          #D5C9B5 0%,
          #EAE4DA 19%,
          #F1EEE7 68%,
          #F5F1ED 75%,
          #FFFFFF 100%
        )`,
          }}
        >
          <div className="bg-gradient-to-r from-[#12DCDC] to-[#D5C9B5] rounded-[20px] border border-[#09234B] p-6 max-w-lg w-[90%] relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-xl text-black"
            >
              ✕
            </button>
            {/* <p className="text-[#09234B] font-inter text-[16px] whitespace-pre-line">
              {modalContent}
            </p> */}
          </div>
        </div>
      )}

      <section id="services" className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-6 ">
            {/* КАРТОЧКА 1 */}
            <div>
              <div className="relative h-[200px] sm:h-[240px] md:h-[244px] lg:h-[320px] rounded-2xl overflow-hidden bor">
                <Image
                  src="/assets/Text1.png"
                  alt="Картинка 1"
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  }}
                ></div>
                {/* Overlay */}
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.25)",
                  }}
                ></div>
                <div
                  className={`absolute bottom-0 py-4 px-4 w-full text-white text-left text-lg sm:text-2xl font-normal ${dmSans.className}`}
                >
                  Therapeutic Counselling Sessions{" "}
                </div>
              </div>
              <div className="flex gap-0 mt-4 flex-col sm:flex-row h-[200px] sm:h-[150px] md:h-[200px] lg:h-[150px]">
                <div className="bg-gradient-to-r from-[#D5C9B5] to-[#12DCDC] rounded-xl p-2 w-full sm:w-2/3 text-sm sm:text-base font-inter text-white relative">
                  <p
                    className={`text-sm sm:text-base font-normal ${inter.className}`}
                  >
                    Therapy isn’t about having the right words - it’s about
                    having a space where you don’t have to hold it all together
                    ...
                  </p>
                  <div className="flex justify-end mt-2">
                    <a
                      href="/sessions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-sm mt-2 cursor-pointer underline"
                    >
                      more ...
                    </a>
                  </div>
                </div>

                <div className="relative bg-gradient-to-b from-[#12DCDC] to-[#FFFFFF] rounded-xl p-2 w-full sm:w-1/3 font-bold font-inter text-[#09234B] flex flex-col items-center justify-center">
                  <a
                    href="#contact"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <button
                      className={`cursor-pointer bg-white text-black py-2 px-3 rounded-full mt-4 font-bold ${inter.className}`}
                    >
                      Enquiry
                    </button>
                  </a>
                  <Image
                    src="/assets/vector-for-card.svg"
                    alt="Декор"
                    fill
                    className="absolute bottom-0 right-0 w-full h-auto object-cover z-0 pointer-events-none"
                  />
                </div>
              </div>
            </div>

            {/* КАРТОЧКА 2 */}
            <div>
              <div className="relative h-[200px] sm:h-[240px] md:h-[244px] lg:h-[320px] rounded-2xl overflow-hidden">
                <Image
                  src="/assets/Text2.webp"
                  alt="Картинка 2"
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  }}
                ></div>
                {/* Overlay */}
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.25)",
                  }}
                ></div>
                <div
                  className={`absolute bottom-0 py-4 px-4 w-full text-white text-left text-lg sm:text-2xl font-normal ${dmSans.className}`}
                >
                  Creative group activities{" "}
                </div>
              </div>
              <div className="flex gap-0 mt-4 flex-col sm:flex-row h-[200px] sm:h-[150px] md:h-[200px] lg:h-[150px]">
                <div className="bg-gradient-to-r from-[#D5C9B5] to-[#12DCDC] rounded-xl p-2 w-full sm:w-2/3 text-sm sm:text-base font-inter text-[white] relative">
                  <p
                    className={`text-sm sm:text-base font-normal ${inter.className}`}
                  >
                    {" "}
                    In our author groups we combine art therapy techniques,
                    elements of body practices and group dialog. It is a safe
                    and free space ...
                  </p>
                  <div className="flex justify-end mt-2">
                    <a
                      href="/activities"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-sm mt-2 cursor-pointer underline"
                    >
                      more ...
                    </a>
                  </div>
                </div>

                <div className="relative bg-gradient-to-b from-[#12DCDC] to-[#FFFFFF] rounded-xl p-2 w-full sm:w-1/3 font-bold font-inter text-[#09234B] flex flex-col items-center justify-center">
                  <a
                    href="#contact"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <button
                      className={`cursor-pointer bg-white text-black py-2 px-3 rounded-full mt-4 font-bold ${inter.className}`}
                    >
                      Enquiry
                    </button>
                  </a>
                  <Image
                    src="/assets/vector-for-card.svg"
                    alt="Декор"
                    fill
                    className="absolute bottom-0 right-0 w-full h-auto object-cover z-0 pointer-events-none"
                  />
                </div>
              </div>
            </div>

            {/* КАРТОЧКА 3 */}
            <div>
              <div className="relative h-[200px] sm:h-[240px] md:h-[244px] lg:h-[320px] rounded-2xl overflow-hidden">
                <Image
                  src="/assets/Text3.webp"
                  alt="Картинка 3"
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  }}
                ></div>
                {/* Overlay */}
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.25)",
                  }}
                ></div>
                <div
                  className={`absolute bottom-0 py-4 px-4 w-full text-white text-left text-lg sm:text-2xl font-normal ${dmSans.className}`}
                >
                  Personalised art lessons
                </div>
              </div>
              <div className="flex gap-0 mt-4 flex-col sm:flex-row h-[200px] sm:h-[150px] md:h-[200px] lg:h-[150px]">
                <div className="bg-gradient-to-r from-[#D5C9B5] to-[#12DCDC] rounded-xl p-2 w-full sm:w-2/3 text-sm sm:text-base font-inter text-white relative">
                  <p
                    className={`text-sm sm:text-base font-normal ${inter.className}`}
                  >
                    {" "}
                    We will help you unlock your creativity, express your
                    feelings through visual techniques and learn how to interact
                    with yourself through art. Lessons ...
                  </p>
                  <div className="flex justify-end mt-2">
                    <a
                      href="/artLessons"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-sm mt-2 cursor-pointer underline"
                    >
                      more ...
                    </a>
                  </div>
                </div>

                <div className="relative bg-gradient-to-b from-[#12DCDC] to-[#FFFFFF] rounded-xl p-2 w-full sm:w-1/3 font-bold font-inter text-[#09234B] flex flex-col items-center justify-center">
                  <a
                    href="#contact"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <button
                      className={`cursor-pointer bg-white text-black py-2 px-3 rounded-full mt-4 font-bold ${inter.className}`}
                    >
                      Enquiry
                    </button>
                  </a>
                  <Image
                    src="/assets/vector-for-card.svg"
                    alt="Декор"
                    fill
                    className="absolute bottom-0 right-0 w-full h-auto object-cover z-0 pointer-events-none"
                  />
                </div>
              </div>
            </div>

            {/* КАРТОЧКА 4 */}
            <div>
              <div
                className={`relative h-[200px] sm:h-[240px] md:h-[244px] lg:h-[320px] rounded-2xl overflow-hidden font-normal ${dmSans.className}`}
              >
                <Image
                  src="/assets/Text4.png"
                  alt="Картинка 4"
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  }}
                ></div>
                {/* Overlay */}
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.25)",
                  }}
                ></div>
                <div className="absolute bottom-0 py-4 px-4 w-full text-white text-left text-lg sm:text-2xl">
                  Consultations for Organisations and Groups
                </div>
              </div>
              <div className="flex gap-0 mt-4 flex-col sm:flex-row h-[200px] sm:h-[150px] md:h-[200px] lg:h-[150px]">
                <div className="bg-gradient-to-r from-[#D5C9B5] to-[#12DCDC] rounded-xl p-2 w-full sm:w-2/3 text-sm sm:text-base  font-inter text-white relative">
                  <p
                    className={`text-sm sm:text-base font-normal ${inter.className}`}
                  >
                    {" "}
                    We offer bespoke consultations and creative wellbeing
                    sessions for organisations, community groups, and teams
                    looking to support emotional health ...
                  </p>
                  <div className="flex justify-end mt-2">
                    <a
                      href="/consultations"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-sm mt-2 cursor-pointer underline"
                    >
                      more ...
                    </a>
                  </div>
                </div>

                <div className="relative bg-gradient-to-b from-[#12DCDC] to-[#FFFFFF] rounded-xl p-2 w-full sm:w-1/3 font-bold font-inter text-[#09234B] flex flex-col items-center justify-center">
                  <a
                    href="#contact"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <button
                      className={`cursor-pointer bg-white text-black py-2 px-3 rounded-full mt-4 font-bold ${inter.className}`}
                    >
                      Enquiry
                    </button>
                  </a>
                  <Image
                    src="/assets/vector-for-card.svg"
                    alt="Декор"
                    fill
                    className="absolute bottom-0 right-0 w-full h-auto object-cover z-0 pointer-events-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
