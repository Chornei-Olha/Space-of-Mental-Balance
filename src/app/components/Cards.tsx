"use client";

import { useState } from "react";
import Image from "next/image";
import { DM_Sans, Inter } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

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
            <p className="text-[#09234B] font-inter text-[16px] whitespace-pre-line">
              {modalContent}
            </p>
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
                    <button
                      onClick={() =>
                        openModal(
                          "Therapy isn’t about having the right words - it’s about having a space where you don’t have to hold it all together.\n In our sessions, you’re invited to slow down, be real, and explore whatever’s on your mind or weighing on your heart. There’s no “right way” to begin. Whether you’re feeling anxious, disconnected, navigating relationship struggles or simply unsure of what’s next, we’ll work together to understand what’s happening beneath the surface and find what helps you feel more like yourself again.\n I work with both individuals and couples, offering:\n - 50-minute sessions for individuals\n - 60-minute sessions for couples\n You can choose to meet online, in-person in Christchurch, or even take therapy outdoors - with walk-and-talk sessions or creative work by the sea. For those who prefer more than just talking, I offer the option to explore with imagery, symbols, or gentle creative methods. No pressure, and no artistic skill needed - just curiosity and openness.\n Some clients come weekly for short-term support, others stay longer for deeper reflection and healing. There’s no fixed path - we shape it together.\n If you’re not sure where to start, that’s completely okay. I offer a free 30-minute call so you can ask questions, get a feel for how I work, and decide what feels right for you.\n"
                        )
                      }
                      className="text-white text-sm mt-2 cursor-pointer underline"
                    >
                      more ...
                    </button>
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
                    <button
                      onClick={() =>
                        openModal(
                          "In our unique group sessions, we combine creative therapy techniques, body-based practices, and group dialogue. This creates a safe and open space where participants can freely express themselves, connect with others, and explore their inner worlds. These groups encourage creativity, self-reflection, and shared experiences, fostering both personal growth and a sense of community. Participants are invited to discover new ways of understanding themselves and others through artistic expression, movement, and meaningful conversation."
                        )
                      }
                      className="text-white text-sm mt-2 cursor-pointer underline"
                    >
                      more ...
                    </button>
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
                    <button
                      onClick={() =>
                        openModal(
                          "We will help you unlock your creativity, express your feelings through visual techniques, and learn how to connect with yourself through art. These lessons are tailored to your individual needs and goals, offering a safe and supportive environment where you can explore artistic expression at your own pace. Whether you’re a beginner or an experienced artist, our sessions guide you to discover new dimensions of self-understanding, emotional release, and personal growth through the power of creativity."
                        )
                      }
                      className="text-white text-sm mt-2 cursor-pointer underline"
                    >
                      more ...
                    </button>
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
                    <button
                      onClick={() =>
                        openModal(
                          "We offer bespoke consultations and creative wellbeing sessions for organisations, community groups, and teams looking to support emotional health, communication, and connection in the workplace or shared spaces.\nWhether you’re charity, business, or creative collective, we can design sessions that meet your group’s unique needs - from reflective wellbeing workshops and art-based team building to emotional support sessions around change, stress, or burnout.\nOur work draws on therapeutic, relational, and creative practices to foster trust, reduce tension, and create safe spaces for expression. Sessions can be delivered as one-off events, ongoing group support, or part of a wider wellbeing programme.\nLet’s talk about how we can support your team or community in a way that feels meaningful, inclusive, and sustainable."
                        )
                      }
                      className="text-white text-sm mt-2 cursor-pointer underline"
                    >
                      more ...
                    </button>
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
