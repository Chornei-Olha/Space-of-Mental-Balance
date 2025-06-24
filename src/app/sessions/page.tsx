import Header from "@/app/components/Header";
import ContactForm from "@/app/components/ContactForm";
import Footer from "@/app/components/Footer";
import React from "react";
import Image from "next/image";

export default function Sessions() {
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
              src="/assets/Text1.png"
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
              Therapeutic Counselling Sessions
            </h2>
            <p className="text-base sm:text-lg leading-relaxed">
              Therapy Isn’t About Having the Right Words
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              It’s about having a space where you don’t have to hold it all
              together.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              In our sessions, you’re invited to slow down, be real, and explore
              whatever’s on your mind or weighing on your heart. There’s no
              “right way” to begin.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              Whether you’re feeling anxious, disconnected, navigating
              relationship struggles or simply unsure of what’s next — we’ll
              work together to understand what’s happening beneath the surface
              and find what helps you feel more like yourself again.
            </p>
            <h3 className="text-xl font-semibold mt-4">
              I work with both individuals and couples, offering:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-base sm:text-lg">
              <li>50-minute sessions for individuals</li>
              <li>60-minute sessions for couples</li>
            </ul>
            <p className="text-base sm:text-lg leading-relaxed">
              You can choose to meet online, in-person in Christchurch, or even
              take therapy outdoors — with walk-and-talk sessions or creative
              work by the sea.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              For those who prefer more than just talking, I offer the option to
              explore with imagery, symbols, or gentle creative methods. No
              pressure, and no artistic skill needed — just curiosity and
              openness.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              Some clients come weekly for short-term support, others stay
              longer for deeper reflection and healing. There’s no fixed path —
              we shape it together.
            </p>
            <div className="bg-gray-100 border-l-4 border-[#D5C9B5] p-4 italic text-gray-700">
              If you’re not sure where to start, that’s completely okay. I offer
              a free 30-minute call so you can ask questions, get a feel for how
              I work, and decide what feels right for you.
            </div>
          </div>
        </div>
      </div>

      <ContactForm />
      <Footer />
    </main>
  );
}
