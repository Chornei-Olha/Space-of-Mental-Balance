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

      <section className="py-16 ">
        <div className="container mx-auto text-[#09234B]">
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-6 ">
            {/* КАРТОЧКА 1 */}
            <div>
              <div className="relative rounded-2xl overflow-hidden ">
                <Image
                  src="/assets/Text1.png"
                  alt="Картинка 1"
                  width={600}
                  height={400}
                  className="w-full max-h-[348px] object-cover"
                />
              </div>
              <div className="flex gap-4 sm:gap-0 mt-4 flex-col sm:flex-row">
                <div className="bg-[#F4F4F4] rounded-xl p-2 w-full sm:w-2/3 text-[16px] font-inter text-[#09234B] relative">
                  <p>
                    In the sessions, we gently accompany you in exploring your
                    inner world, helping you to cope with anxiety, stress,
                    crises and emotional difficulties ...
                  </p>
                  <button
                    onClick={() =>
                      openModal(
                        "Дозволяє поєднати працю та навчання. Передбачає отримання базового обсягу компетенцій та навичок у стислий термін. Дає можливість спрямувати зусилля, час та фінанси в інтервенції із заздалегідь високою результативністю."
                      )
                    }
                    className="text-blue-600 text-sm mt-2 cursor-pointer"
                  >
                    more ...
                  </button>
                </div>

                <div className="bg-[#F6FF00] rounded-xl p-2 w-full sm:w-1/3 font-bold font-inter text-[#09234B] flex flex-col items-center justify-center">
                  {/* <p className="text-[16px] text-center">120 годин</p> */}
                  <button className="bg-black text-white py-2 px-3 rounded-full mt-4">
                    120 годин{" "}
                  </button>
                </div>
              </div>
            </div>

            {/* КАРТОЧКА 2 */}
            <div>
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/assets/Text2.png"
                  alt="Картинка 2"
                  width={600}
                  height={400}
                  className="w-full max-h-[348px] object-cover"
                />
              </div>
              <div className="flex gap-4 sm:gap-0 mt-4 flex-col sm:flex-row">
                <div className="bg-[#F4F4F4] rounded-xl p-2 w-full sm:w-2/3 text-[16px] font-inter text-[#09234B] relative">
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
                    className="text-blue-600 text-sm mt-2 cursor-pointer"
                  >
                    more ...
                  </button>
                </div>

                <div className="bg-[#F6FF00] rounded-xl p-2 w-full sm:w-1/3 font-bold font-inter text-[#09234B] flex flex-col items-center justify-center">
                  {/* <p className="text-[16px] text-center">120 годин</p> */}
                  <button className="bg-black text-white py-2 px-3 rounded-full mt-4">
                    120 годин{" "}
                  </button>
                </div>
              </div>
            </div>

            {/* КАРТОЧКА 3 */}
            <div>
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/assets/Text3.png"
                  alt="Картинка 3"
                  width={600}
                  height={400}
                  className="w-full max-h-[348px] object-cover"
                />
              </div>
              <div className="flex gap-4 sm:gap-0 mt-4 flex-col sm:flex-row">
                <div className="bg-[#F4F4F4] rounded-xl p-2 w-full sm:w-2/3 text-[16px] font-inter text-[#09234B] relative">
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
                    className="text-blue-600 text-sm mt-2 cursor-pointer"
                  >
                    more ...
                  </button>
                </div>

                <div className="bg-[#F6FF00] rounded-xl p-2 w-full sm:w-1/3 font-bold font-inter text-[#09234B] flex flex-col items-center justify-center">
                  {/* <p className="text-[16px] text-center">120 годин</p> */}
                  <button className="bg-black text-white py-2 px-3 rounded-full mt-4">
                    120 годин{" "}
                  </button>
                </div>
              </div>
            </div>

            {/* КАРТОЧКА 4 */}
            <div>
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/assets/Text4.png"
                  alt="Картинка 4"
                  width={600}
                  height={400}
                  className="w-full max-h-[348px] object-cover"
                />
              </div>
              <div className="flex gap-4 sm:gap-0 mt-4 flex-col sm:flex-row">
                <div className="bg-[#F4F4F4] rounded-xl p-2 w-full sm:w-2/3 text-[16px] font-inter text-[#09234B] relative">
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
                    className="text-blue-600 text-sm mt-2 cursor-pointer"
                  >
                    more ...
                  </button>
                </div>

                <div className="bg-[#F6FF00] rounded-xl p-2 w-full sm:w-1/3 font-bold font-inter text-[#09234B] flex flex-col items-center justify-center">
                  {/* <p className="text-[16px] text-center">120 годин</p> */}
                  <button className="bg-black text-white py-2 px-3 rounded-full mt-4">
                    120 годин{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
