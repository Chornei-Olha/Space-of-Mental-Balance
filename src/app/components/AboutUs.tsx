"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function AboutUs() {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  // Блокируем прокрутку body, если любая модалка открыта
  useEffect(() => {
    if (modal1Open || modal2Open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modal1Open, modal2Open]);

  return (
    <section id="about" className="container px-4 py-10">
      {/* МОДАЛКА 1 */}
      {modal1Open && (
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
          <div
            className="bg-gradient-to-r from-[#12DCDC] to-[#D5C9B5] rounded-[20px] border border-[#09234B] p-6 max-w-3xl w-[90%] relative flex flex-col md:flex-row items-center gap-4"
            style={{
              maxHeight: "80vh",
              overflowY: "auto",
            }}
          >
            <button
              onClick={() => setModal1Open(false)}
              className="absolute top-2 right-4 text-xl text-black"
            >
              ✕
            </button>
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/therapist1.png"
                alt="Irina"
                width={200}
                height={200}
                className="object-cover rounded-xl"
              />
            </div>
            <div className="flex flex-col w-full md:w-1/2 overflow-auto max-h-[70vh]">
              <p className="text-[#09234B] font-inter text-[12px] whitespace-pre-line">
                {`Hello and welcome — I’m so glad you’ve found your way here.

My name is Iryna, and I’m an integrative counsellor who works creatively with both individuals and couples. I’ve always believed that within each of us lives an untold story — not just the one we’ve been handed by life, but the one we’re still shaping. My role is to support you in exploring yours, especially in those chapters where pain, confusion, or disconnection might have made the words feel too heavy to write alone.

My approach is integrative, which means I draw from different therapeutic models — person-centred, psychodynamic, and cognitive behavioural therapy, among others — tailoring my work to meet you, rather than fitting you into a rigid method. I also bring creativity into the room when it’s right: art, metaphor, and imagination often offer insight when words fall short. Whether you are struggling with anxiety, grief, relationship challenges, low self-esteem, or just a feeling that something isn’t quite right — I offer a safe, compassionate, and non-judgemental space to explore it.

“Until you make the unconscious conscious, it will direct your life and you will call it fate.” — Carl Jung

This quote has guided me throughout my journey as a counsellor. Much of our emotional pain comes from parts of ourselves that have been hidden away, silenced, or simply misunderstood. In our sessions, we can gently bring these parts into the light — with curiosity, not criticism.

Why I Do This Work

I’ve worked with people at various stages of life and emotional struggle — those who feel lost in their relationships, those carrying childhood wounds, those who appear “fine” on the outside but feel deeply disconnected inside. I’ve witnessed how therapy can be a turning point, a place where silence begins to speak, and shame begins to loosen its grip. Being alongside someone in those moments — that’s a profound privilege.

I also work with couples, helping them reconnect, hear each other anew, and rebuild trust. As Esther Perel says, “The quality of your relationships determines the quality of your life.” Sometimes, it’s not about solving every problem, but learning how to really listen — to ourselves and to each other.

A Creative and Flexible Space for Growth

Therapy doesn’t have to be clinical or cold. I see it as a living, breathing process — sometimes intense, sometimes tender, sometimes even humorous. We might talk. We might reflect in silence. We might draw, write, imagine, or simply sit with what arises. However we work, the goal remains the same: to help you find more clarity, more freedom, and more connection with who you really are.

Clients often tell me that therapy with me feels both grounding and freeing. That’s what I strive for — to create a space where you feel held enough to explore the uncomfortable, and safe enough to imagine new possibilities.

I offer sessions in a way that fits your needs and lifestyle:
🌿 In-person in a quiet, comfortable therapy room
🌿 Online, so you can connect from your own safe space, wherever you are
🌿 Walk-and-talk therapy, outdoors — a grounding and natural way to process, especially for those who feel more at ease moving while talking

You choose what feels right for you — and we take it from there.

“The curious paradox is that when I accept myself just as I am, then I can change.” — Carl Rogers

This paradox sits at the heart of healing. You don’t need to “fix” yourself to start therapy — you just need to show up, as you are. From there, we begin.

Let’s Begin

Whether you’re feeling overwhelmed, stuck, or simply curious about what therapy could offer you — I invite you to reach out. The first step is often the hardest, but you don’t have to take it alone. I’d be honoured to walk with you.

Warmly,
Iryna
Peace of Mind Therapy
Integrative Counsellor | Creative Therapy | Individuals & Couples
Online | In-Person | Walk & Talk Sessions`}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* МОДАЛКА 2 */}
      {modal2Open && (
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
          <div
            className="bg-gradient-to-r from-[#12DCDC] to-[#D5C9B5] rounded-[20px] border border-[#09234B] p-6 max-w-3xl w-[90%] relative flex flex-col md:flex-row items-center gap-4"
            style={{
              maxHeight: "80vh",
              overflowY: "auto",
            }}
          >
            <button
              onClick={() => setModal2Open(false)}
              className="absolute top-2 right-4 text-xl text-black"
            >
              ✕
            </button>
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/therapist2.png"
                alt="Olena"
                width={200}
                height={200}
                className="object-cover rounded-xl"
              />
            </div>
            <div className="flex flex-col w-full md:w-1/2 overflow-auto max-h-[70vh]">
              <p className="text-[#09234B] font-inter text-[12px] whitespace-pre-line">
                {`I am Olena from Zaporizhzhia, Ukraine. Art has always been a part of my life—from a happy childhood, where the first strokes on paper opened up an endless world of creativity, to today, when art has become not only a form of self-expression but also a way to help others.

However, my life’s path took a different course for a long time. I dedicated seven years to serving in the Ukrainian police, working as a company commander and a press officer. This job required strength, resilience, and discipline. But life is unpredictable then the war in Ukraine began, I was on maternity leave and was forced to leave my homeland with my children.

Upon arriving in the UK, I found a new way to be of service—through art. Volunteering at art classes created a space where people could find comfort, experience the joy of creativity, and relieve the stress of difficult times. I happily shared my knowledge, using various painting techniques that helped people cope with challenges and discover new facets of themselves.

Today, my art is no longer just a hobby but a way of serving people in a creative form. I believe that creativity has the power to heal, inspire, and unite and I continue to pour a piece of myself into every painting I create.`}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Заголовок */}
      <h2 className="text-lg font-medium mb-4 text-black">About Us</h2>
      <p className="text-sm md:text-base max-w-3xl mb-10 text-black">
        We are a team of practicing therapists with years of experience in
        mental health and art approaches. Our center is a safe and supportive
        space where you will be heard, understood and helped to find your way
        back to yourself.
      </p>

      {/* Кнопки */}
      <div className="flex justify-start md:justify-end my-6 space-x-4">
        <button className="px-4 py-2 border text-black border-gray-400 rounded-full text-sm hover:bg-white hover:text-black transition">
          About us
        </button>
        <button className="px-4 py-2 border text-black border-gray-400 rounded-full text-sm hover:bg-white hover:text-black transition">
          History
        </button>
      </div>

      {/* Карточки */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gradient-to-r from-[#12DCDC] to-[#D5C9B5] rounded-[20px]">
        {/* Карточка 1 */}
        <div className="gap-10 rounded-lg p-6 flex flex-col md:flex-row items-center text-[#243770]">
          <div className="bg-[#07512A42]/26 rounded-xl p-4 relative mb-4 w-full flex justify-center">
            <Image
              src="/therapist1.png"
              alt="Irina"
              width={150}
              height={150}
              className="object-cover z-10"
            />
          </div>
          <div className="flex flex-col w-full">
            <h3 className="text-lg font-semibold mb-2 text-center">Irina</h3>
            <p className="text-sm text-center">
              Welcome to a space of mental balance and inner healing.
            </p>
            <button
              onClick={() => setModal1Open(true)}
              className="text-[#243770] text-sm mt-2 cursor-pointer underline self-center"
            >
              more ...
            </button>
          </div>
        </div>

        {/* Карточка 2 */}
        <div className="gap-10 rounded-lg p-6 flex flex-col-reverse md:flex-row items-center text-[#243770]">
          <div className="flex flex-col w-full">
            <h3 className="text-lg font-semibold mb-2 text-center">Olena</h3>
            <p className="text-sm text-center">
              Welcome to a space of mental balance and inner healing.
            </p>
            <button
              onClick={() => setModal2Open(true)}
              className="text-[#243770] text-sm mt-2 cursor-pointer underline self-center"
            >
              more ...
            </button>
          </div>
          <div className="bg-[#07512A42]/26 rounded-xl p-4 relative mb-4 w-full flex justify-center">
            <Image
              src="/therapist2.png"
              alt="Olena"
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
