"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Instrument_Sans, Poppins, Manrope, Inter } from "next/font/google";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
});
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "600"] });
const manrope = Manrope({ subsets: ["latin"], weight: ["600"] });
const inter = Inter({ subsets: ["latin"], weight: ["300"] });

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
    <section id="about" className="relative w-full">
      {/* Левый декор */}
      <div className="absolute z-0 top-[100px] right-0 sm:left-0 sm:right-auto w-[50px] sm:w-[75px] md:w-[100px]">
        <Image
          src="/assets/flowers-1.png"
          alt="flowers"
          width={371}
          height={71}
          className="object-contain"
        />
      </div>

      <div className="absolute z-0 bottom-[-400px] left-0 w-[300px]">
        <Image
          src="/assets/ribbon1.png"
          alt="ribbon"
          width={371}
          height={71}
          className="object-contain"
        />
      </div>

      {/* Центральный декор */}
      <div className="absolute top-[45%] left-[45%] hidden md:block">
        <Image
          src="/assets/flower@.png"
          alt="flower@"
          width={115}
          height={112}
          className="object-contain"
        />
      </div>

      {/* Правый декор */}
      <div className="absolute z-0 bottom-[-100px] right-0 w-[100px] sm:w-[180px] md:w-[250px]">
        <Image
          src="/assets/flowers-2.png"
          alt="flowers"
          width={250}
          height={300}
          className="object-contain"
        />
      </div>

      <div className="container px-4 py-10 mx-auto relative z-10">
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
                  src="/assets/therapist01.png"
                  alt="Iryna"
                  width={300}
                  height={300}
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
              <div className="w-full md:w-1/2 max-h-[400px] flex justify-center">
                <Image
                  src="/assets/therapist02.jpeg"
                  alt="Olena"
                  width={300}
                  height={300}
                  className="object-cover rounded-xl object-top"
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
        {/* Кнопки */}
        <div
          className={`flex justify-start md:justify-end my-6 space-x-4 font-light ${inter.className}`}
        >
          <button className="px-4 py-2 border bg-[#2437705E]/37 text-black border-gray-400 rounded-full text-sm hover:bg-white hover:text-black transition">
            About us
          </button>
          <button className="px-4 py-2 border bg-[#F0D9D4] text-black border-gray-400 rounded-full text-sm hover:bg-white hover:text-black transition">
            History
          </button>
        </div>
        {/* Заголовок */}
        {/* <h2
          className={`text-lg mb-5 text-black font-normal ${instrumentSans.className}`}
        >
          About Us
        </h2> */}
        <div className="grid grid-cols-1 gap-6 bg-gradient-to-t from-[#12DCDC] to-[#D5C9B5] rounded-[20px] mb-10">
          <div className="gap-5 rounded-lg p-6 flex flex-col md:flex-row items-center text-[#243770]">
            <div className="bg-[#07512A42]/26 rounded-xl p-4 relative w-full flex justify-center">
              <Image
                src="/assets/aboutUs.webp"
                alt="our team"
                width={300}
                height={300}
                className="object-cover z-10 rounded-xl"
              />
            </div>
            <div className="flex flex-col w-full">
              <p
                className={`container text-xl mb-2 font-semibold ${poppins.className}`}
              >
                Our Story: Where Counselling Meets Art
              </p>{" "}
              <p
                className={`container text-sm md:text-base mb-2  font-normal ${poppins.className}`}
              >
                Some collaborations are born from planning, others from passion
                — and some simply grow out of friendship.
              </p>
              <p
                className={`container text-sm md:text-base mb-2 font-normal ${poppins.className}`}
              >
                We are Iryna, an integrative counsellor, and Olena, a
                professional artist. What began as quiet conversations between
                two friends — one listening deeply to emotions, the other
                expressing them through colour and form — soon blossomed into
                something more. Over time, we realised we weren’t just talking
                about creativity and healing. We were dreaming up a shared space
                where the two could meet.
              </p>
              <p
                className={`container text-sm md:text-base mb-2 font-normal ${poppins.className}`}
              >
                And so our joint project was born: a unique therapeutic offering
                that blends the depth of counselling with the power of artistic
                expression. Together, we create and hold spaces where people can
                explore emotions, relationships, and inner landscapes through
                both talk and creative process — a place where healing doesn’t
                always require the right words, but invites the right
                connection.
              </p>
              <p
                className={`container text-sm md:text-base mb-5 font-normal ${poppins.className}`}
              >
                “Art can permeate the very deepest part of us, where no words
                exist.” — Eileen Miller, creative therapist
              </p>
            </div>
          </div>
        </div>
        <p
          className={`container text-xl mb-2 text-black font-semibold ${poppins.className}`}
        >
          What We Offer
        </p>
        <p
          className={`container text-sm md:text-base mb-2 text-black font-normal ${poppins.className}`}
        >
          We work with individuals, couples, and groups, using integrative
          creative therapy to help you reconnect with your inner self, your
          partner, or your community. Whether you’re struggling with anxiety,
          emotional blockages, communication issues, or simply want to reconnect
          with your creative spirit — this work can open unexpected doors.
        </p>
        <p
          className={`container text-sm md:text-base mb-2 text-black font-normal ${poppins.className}`}
        >
          Our sessions may take place:
        </p>
        <p
          className={`container text-sm md:text-base mb-2 text-black font-normal ${poppins.className}`}
        >
          🌿 In a cosy, welcoming therapy room
        </p>
        <p
          className={`container text-sm md:text-base mb-2 text-black font-normal ${poppins.className}`}
        >
          🌿 Outside on the beach, in the forest, or beneath the open sky
        </p>
        <p
          className={`container text-sm md:text-base mb-2 text-black font-normal ${poppins.className}`}
        >
          🌿 Or a mix of both — depending on the season and the soul’s needs
        </p>
        <p
          className={`container text-sm md:text-base mb-2 text-black font-normal ${poppins.className}`}
        >
          Examples of Creative Work We Explore Together:
          <ul
            className={`container text-sm md:text-base mb-2 text-black font-normal ${poppins.className}`}
          >
            <li>
              • Drawing Emotions — a guided process to give colour, shape, and
              space to feelings that may be difficult to verbalise. Sometimes
              the most important emotion is the one we didn’t realise we were
              holding.
            </li>
            <li>
              • “Inside/Outside” Self-Portraits — a powerful exercise used in
              creative therapy to explore the contrast between how you appear to
              the world and how you feel within.
            </li>
            <li>
              • The Journey Map — visually mapping life experiences through
              symbols, colours, or scenes, helping make sense of the path you’ve
              walked and where you’re heading
            </li>
            <li>
              • Drawing the Relationship — a non-verbal process for couples to
              explore their emotional connection, communication patterns, and
              shared space.
            </li>
            <li>
              • Nature-Based Creative Rituals — creating art using natural
              materials found in the landscape around us — sand, leaves, stones
              — to honour transitions, express feelings, or let go.
            </li>{" "}
          </ul>
        </p>
        <p
          className={`container text-sm md:text-base mb-2 text-black font-normal ${poppins.className}`}
        >
          And sometimes, it’s as simple — and as profound — as sitting quietly
          beside a canvas and seeing what emerges.
        </p>
        <p
          className={`container text-sm md:text-base mb-5 text-black font-normal ${poppins.className}`}
        >
          “Every child is an artist. The problem is how to remain an artist once
          we grow up.” — Pablo Picasso
        </p>
        <p
          className={`container text-xl mb-2 text-black font-semibold ${poppins.className}`}
        >
          Why It Matters
        </p>
        <p
          className={`container text-sm md:text-base mb-2 text-black font-normal ${poppins.className}`}
        >
          We live in a world that rushes us toward answers and productivity. But
          healing often requires a different rhythm — a slower unfolding. In our
          work, there is space to feel, to explore, to reconnect. Creativity
          becomes more than just expression — it becomes a form of communication
          with the self, a bridge between the known and the unknown.
        </p>{" "}
        <p
          className={`container text-sm md:text-base mb-2 text-black font-normal ${poppins.className}`}
        >
          We believe that creative therapy is not about being “artistic” — it’s
          about being real. You don’t need experience or technique, only a
          willingness to be curious and open.
        </p>{" "}
        <p
          className={`container text-sm md:text-base mb-2 text-black font-normal ${poppins.className}`}
        >
          “When we are no longer able to change a situation, we are challenged
          to change ourselves.” — Viktor Frankl
        </p>{" "}
        <p
          className={`container text-sm md:text-base mb-5 text-black font-normal ${poppins.className}`}
        >
          And through this work, change happens — gently, but powerfully.
        </p>{" "}
        <p
          className={`container text-xl mb-2 text-black font-semibold ${poppins.className}`}
        >
          A Friendship Turned Offering
        </p>{" "}
        <p
          className={`container text-sm md:text-base mb-2 text-black font-normal ${poppins.className}`}
        >
          What makes our work unique is the relationship behind it. We are
          friends as well as professionals, and our deep respect for one another
          — and for the people we work with — is at the heart of everything we
          offer.
        </p>{" "}
        <p
          className={`container text-sm md:text-base mb-2 text-black font-normal ${poppins.className}`}
        >
          We come together not just as counsellor and artist, but as two women
          who believe that the human heart heals best when it is both heard and
          seen.
        </p>{" "}
        <p
          className={`container text-sm md:text-base mb-5 text-black font-normal ${poppins.className}`}
        >
          We invite you to join us — in a room, in the forest, or on the sand.
          Let your story unfold not only in words, but in lines, colours,
          textures, and metaphors. Together, we’ll hold space for what needs to
          be spoken, drawn, released, and reclaimed.
        </p>
        <p
          className={`container text-sm md:text-base mb-10 text-black font-semibold ${poppins.className}`}
        >
          With warmth and creativity, Iryna & Olena Peace of Mind Therapy –
          Creative Counselling & Art-Led Healing for Individuals, Couples &
          Groups
        </p>
        {/* Карточки */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gradient-to-r from-[#12DCDC] to-[#D5C9B5] rounded-[20px]">
          {/* Карточка 1 */}
          <div className="gap-10 rounded-lg p-6 flex flex-col md:flex-row items-center text-[#243770]">
            <div className="bg-[#07512A42]/26 rounded-xl p-4 relative mb-4 w-full flex justify-center">
              <Image
                src="/assets/therapist1.webp"
                alt="Iryna"
                width={300}
                height={300}
                className="object-cover z-10 rounded-xl"
              />
            </div>
            <div className="flex flex-col w-full">
              <h3
                className={`w-[40%] inline-block px-4 py-1 bg-white rounded-full shadow text-[#101119] text-lg mx-auto text-center font-semibold ${manrope.className}`}
              >
                Iryna
              </h3>
              <p
                className={`text-xl text-center pt-[15px] font-light ${poppins.className}`}
              >
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
              <h3
                className={`w-[40%] inline-block px-4 py-1 bg-white rounded-full shadow text-[#101119] text-lg mx-auto text-center font-semibold ${manrope.className}`}
              >
                Olena
              </h3>
              <p
                className={`text-xl text-center pt-[15px] font-light ${poppins.className}`}
              >
                {" "}
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
                src="/assets/therapist2.webp"
                alt="Olena"
                width={300}
                height={300}
                className="object-cover z-10 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
