import Header from "@/app/components/Header";
import ContactForm from "@/app/components/ContactForm";
import Footer from "@/app/components/Footer";
import React from "react";
import Image from "next/image";

export default function AerLessons() {
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
              src="/assets/Text3.webp"
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
              Personalised art lessons
            </h2>

            <p className="text-base sm:text-lg leading-relaxed">
              We will help you unlock your creativity, express your feelings
              through visual techniques, and learn how to connect with yourself
              through art.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              These lessons are tailored to your individual needs and goals,
              offering a safe and supportive environment where you can explore
              artistic expression at your own pace.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              Whether you’re a beginner or an experienced artist, our sessions
              guide you to discover new dimensions of self-understanding,
              emotional release, and personal growth through the power of
              creativity.
            </p>
          </div>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </main>
  );
}
