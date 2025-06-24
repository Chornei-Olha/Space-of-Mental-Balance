import Header from "@/app/components/Header";
import ContactForm from "@/app/components/ContactForm";
import Footer from "@/app/components/Footer";
import React from "react";
import Image from "next/image";

export default function Activities() {
  return (
    <main
      className="flex min-h-screen flex-col items-center"
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
      <Header />

      {/* Image and Intro */}
      <div className="container px-4 mx-auto pt-20 sm:pt-32 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-2 md:col-start-2">
          <div className="relative h-[300px] sm:h-[280px] md:h-[344px] lg:h-[450px] rounded-2xl overflow-hidden">
            <Image
              src="/assets/Text2.webp"
              alt="about Us"
              fill
              className="object-cover"
              style={{
                WebkitMaskImage: `
                  linear-gradient(to top, transparent 0%, black 15%, black 85%, transparent 100%),
                  linear-gradient(to left, transparent 0%, black 15%, black 85%, transparent 100%)
                `,
                WebkitMaskComposite: "intersect",
                maskImage: `
                  linear-gradient(to top, transparent 0%, black 15%, black 85%, transparent 100%),
                  linear-gradient(to left, transparent 0%, black 15%, black 85%, transparent 100%)
                `,
                maskComposite: "intersect",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "100% 100%",
                maskRepeat: "no-repeat",
                maskSize: "100% 100%",
              }}
            />
          </div>

          <div className="mt-10 bg-white/60 backdrop-blur-md p-6 rounded-xl shadow-md space-y-5 text-gray-800 leading-relaxed text-sm sm:text-base">
            <h2 className="text-2xl font-bold text-gray-900">
              Creative group activities
            </h2>
            <p className="text-base sm:text-lg leading-relaxed">
              Group Sessions with Heart & Creativity
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              In our unique group sessions, we combine creative therapy
              techniques, body-based practices, and group dialogue.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              This creates a safe and open space where participants can freely
              express themselves, connect with others, and explore their inner
              worlds.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              These groups encourage creativity, self-reflection, and shared
              experiences, fostering both personal growth and a sense of
              community.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              Participants are invited to discover new ways of understanding
              themselves and others through artistic expression, movement, and
              meaningful conversation.
            </p>
          </div>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </main>
  );
}
