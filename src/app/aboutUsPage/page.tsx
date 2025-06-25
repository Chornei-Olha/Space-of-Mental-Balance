import Header from "@/app/components/Header";
import ContactForm from "@/app/components/ContactForm";
import Footer from "@/app/components/Footer";
import React from "react";
import Image from "next/image";

export default function AboutUsPage() {
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
              src="/assets/aboutUs.webp"
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
              Our Story: Where Counselling Meets Art
            </h2>
            <p>
              Some collaborations are born from planning, others from passion —
              and some simply grow out of friendship.
            </p>
            <p>
              We are Iryna, an integrative counsellor, and Olena, a professional
              artist. What began as quiet conversations between two friends —
              one listening deeply to emotions, the other expressing them
              through colour and form — soon blossomed into something more.
            </p>
            <p>
              Over time, we realised we weren’t just talking about creativity
              and healing. We were dreaming up a shared space where the two
              could meet.
            </p>
            <p>
              And so our joint project was born: a unique therapeutic offering
              that blends the depth of counselling with the power of artistic
              expression. Together, we create and hold spaces where people can
              explore emotions, relationships, and inner landscapes through both
              talk and creative process.
            </p>
            <blockquote className="italic text-gray-600 border-l-4 border-gray-400 pl-4">
              “Art can permeate the very deepest part of us, where no words
              exist.” — Eileen Miller
            </blockquote>

            <h3 className="text-xl font-semibold mt-6">What We Offer</h3>
            <p>
              We work with individuals, couples, and groups, using integrative
              creative therapy to help you reconnect with your inner self, your
              partner, or your community.
            </p>
            <p>Our sessions may take place:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>🌿 In a cosy, welcoming therapy room</li>
              <li>
                🌿 Outside on the beach, in the forest, or beneath the open sky
              </li>
              <li>
                🌿 Or a mix of both — depending on the season and the soul’s
                needs
              </li>
            </ul>
            <p>Examples of Creative Work We Explore Together:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Drawing Emotions</strong> — a guided process to give
                colour, shape, and space to feelings that may be difficult to
                verbalise.
              </li>
              <li>
                <strong>“Inside/Outside” Self-Portraits</strong> — explore how
                you appear to the world vs. how you feel within.
              </li>
              <li>
                <strong>The Journey Map</strong> — visually mapping life
                experiences through symbols and colour.
              </li>
              <li>
                <strong>Drawing the Relationship</strong> — a non-verbal process
                for couples to explore their connection.
              </li>
              <li>
                <strong>Nature-Based Creative Rituals</strong> — creating art
                with natural materials like sand or leaves.
              </li>
            </ul>
            <p>
              And sometimes, it’s as simple — and as profound — as sitting
              quietly beside a canvas and seeing what emerges.
            </p>
            <blockquote className="italic text-gray-600 border-l-4 border-gray-400 pl-4">
              “Every child is an artist. The problem is how to remain an artist
              once we grow up.” — Pablo Picasso
            </blockquote>

            <h3 className="text-xl font-semibold mt-6">Why It Matters</h3>
            <p>
              We live in a world that rushes us toward answers and productivity.
              But healing often requires a different rhythm — a slower
              unfolding. Creativity becomes more than just expression — it
              becomes a form of communication with the self.
            </p>
            <p>
              We believe creative therapy is not about being “artistic” — it’s
              about being real. You don’t need experience or technique, only a
              willingness to be curious and open.
            </p>
            <blockquote className="italic text-gray-600 border-l-4 border-gray-400 pl-4">
              “When we are no longer able to change a situation, we are
              challenged to change ourselves.” — Viktor Frankl
            </blockquote>

            <h3 className="text-xl font-semibold mt-6">
              A Friendship Turned Offering
            </h3>
            <p>
              What makes our work unique is the relationship behind it. We are
              friends as well as professionals, and our deep respect for one
              another — and for the people we work with — is at the heart of
              everything we offer.
            </p>
            <p>
              We invite you to join us — in a room, in the forest, or on the
              sand. Let your story unfold not only in words, but in lines,
              colours, textures, and metaphors.
            </p>

            <p className="font-semibold">
              With warmth and creativity,
              <br />
              Iryna & Olena
            </p>
            <div className="relative w-full h-[80px] mt-6 rounded-2xl overflow-hidden">
              <Image
                src="/assets/logo2.png"
                alt="about Us"
                fill
                className="object-contain h-[auto] w-[100%] mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </main>
  );
}
