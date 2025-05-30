"use client";

import { useState } from "react";
import Image from "next/image";

export default function EducationSection() {
  const [modalContent, setModalContent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (text: string) => {
    setModalContent(text);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container w-full">
      {/* МОДАЛКА */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-white/90 z-50 flex items-center justify-center">
          <div className="bg-white border border-[#09234B] rounded-xl p-6 max-w-lg w-[90%] relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-xl text-black"
            >
              ✕
            </button>
            <p className="text-[#09234B] font-inter text-[16px] whitespace-pre-line">
              {modalContent}
            </p>
          </div>
        </div>
      )}

      <section className="py-16">
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
                <div className="absolute bottom-0 py-4 px-4 w-full text-white text-left text-lg sm:text-2xl">
                  Individual therapeutic counseling{" "}
                </div>
              </div>
              <div className="flex gap-0 mt-4 flex-col sm:flex-row">
                <div className="bg-gradient-to-r from-[#D5C9B5] to-[#12DCDC] rounded-xl p-2 w-full sm:w-2/3 text-sm sm:text-base font-inter text-white relative">
                  <p>
                    In the sessions, we gently accompany you in exploring your
                    inner world, helping you to cope with anxiety, stress,
                    crises and emotional ...
                  </p>
                  <button
                    onClick={() =>
                      openModal(
                        "Дозволяє поєднати працю та навчання. Передбачає отримання базового обсягу компетенцій та навичок у стислий термін. Дає можливість спрямувати зусилля, час та фінанси в інтервенції із заздалегідь високою результативністю."
                      )
                    }
                    className="text-white text-sm mt-2 cursor-pointer underline"
                  >
                    more ...
                  </button>
                </div>

                <div className="relative bg-gradient-to-b from-[#12DCDC] to-[#FFFFFF] rounded-xl p-2 w-full sm:w-1/3 font-bold font-inter text-[#09234B] flex flex-col items-center justify-center">
                  <button className="bg-white text-black py-2 px-3 rounded-full mt-4">
                    120 годин{" "}
                  </button>
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
                  src="/assets/Text2.png"
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
                <div className="absolute bottom-0 py-4 px-4 w-full text-white text-left text-lg sm:text-2xl">
                  Creative group activities{" "}
                </div>
              </div>
              <div className="flex gap-0 mt-4 flex-col sm:flex-row">
                <div className="bg-gradient-to-r from-[#D5C9B5] to-[#12DCDC] rounded-xl p-2 w-full sm:w-2/3 text-sm sm:text-base font-inter text-[white] relative">
                  <p>
                    In our author groups we combine art therapy techniques,
                    elements of body practices and group dialog. It is a safe
                    and free space ...
                  </p>
                  <button
                    onClick={() =>
                      openModal(
                        "Спрямована на фахівців, які впроваджують у роботу отримані знання за принципом «тут та зараз»."
                      )
                    }
                    className="text-white text-sm mt-2 cursor-pointer underline"
                  >
                    more ...
                  </button>
                </div>

                <div className="relative bg-gradient-to-b from-[#12DCDC] to-[#FFFFFF] rounded-xl p-2 w-full sm:w-1/3 font-bold font-inter text-[#09234B] flex flex-col items-center justify-center">
                  <button className="bg-white text-black py-2 px-3 rounded-full mt-4">
                    120 годин{" "}
                  </button>
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
                  src="/assets/Text3.png"
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
                <div className="absolute bottom-0 py-4 px-4 w-full text-white text-left text-lg sm:text-2xl">
                  Personalized art lessons
                </div>
              </div>
              <div className="flex gap-0 mt-4 flex-col sm:flex-row">
                <div className="bg-gradient-to-r from-[#D5C9B5] to-[#12DCDC] rounded-xl p-2 w-full sm:w-2/3 text-sm sm:text-base font-inter text-white relative">
                  <p>
                    We will help you unlock your creativity, express your
                    feelings through visual techniques and learn how to interact
                    with yourself through art. Lessons ...
                  </p>
                  <button
                    onClick={() =>
                      openModal(
                        "Уможливлює досягнення нового рівня у діяльності або започаткування кар'єри «з нуля»."
                      )
                    }
                    className="text-white text-sm mt-2 cursor-pointer underline"
                  >
                    more ...
                  </button>
                </div>

                <div className="relative bg-gradient-to-b from-[#12DCDC] to-[#FFFFFF] rounded-xl p-2 w-full sm:w-1/3 font-bold font-inter text-[#09234B] flex flex-col items-center justify-center">
                  <button className="bg-white text-black py-2 px-3 rounded-full mt-4">
                    120 годин{" "}
                  </button>
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
              <div className="relative h-[200px] sm:h-[240px] md:h-[244px] lg:h-[320px] rounded-2xl overflow-hidden">
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
                  Consultations for organizations and groups{" "}
                </div>
              </div>
              <div className="flex gap-0 mt-4 flex-col sm:flex-row">
                <div className="bg-gradient-to-r from-[#D5C9B5] to-[#12DCDC] rounded-xl p-2 w-full sm:w-2/3 text-sm sm:text-base  font-inter text-white relative">
                  <p>
                    We design and deliver group programs for teams, educational
                    institutions, volunteer and social organizations. Topics can
                    range from emotional ...
                  </p>
                  <button
                    onClick={() =>
                      openModal(
                        "Уможливлює досягнення нового рівня у діяльності або започаткування кар'єри «з нуля»."
                      )
                    }
                    className="text-white text-sm mt-2 cursor-pointer underline"
                  >
                    more ...
                  </button>
                </div>

                <div className="relative bg-gradient-to-b from-[#12DCDC] to-[#FFFFFF] rounded-xl p-2 w-full sm:w-1/3 font-bold font-inter text-[#09234B] flex flex-col items-center justify-center">
                  <button className="bg-white text-black py-2 px-3 rounded-full mt-4">
                    120 годин{" "}
                  </button>
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
