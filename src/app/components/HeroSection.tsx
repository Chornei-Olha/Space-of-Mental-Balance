"use client";

import Image from "next/image";
import { Instrument_Sans, Manrope } from "next/font/google";
import React, { useState, useRef } from "react";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["500"],
});
// const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });
const manrope = Manrope({ subsets: ["latin"], weight: ["500"] });

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.5); // по умолчанию 50%
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
      if (newVolume === 0) {
        videoRef.current.muted = true;
        setIsMuted(true);
      } else {
        videoRef.current.muted = false;
        setIsMuted(false);
      }
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white pt-[152px] pb-[80px]">
      {/* ⬇️ Фоновое видео */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full min-h-full object-cover z-0 scale-[1.23]"
      >
        <source src="/assets/sea.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <video
        ref={videoRef}
        autoPlay
        loop
        playsInline
        muted={isMuted}
        className="absolute top-0 left-0 w-full h-full object-cover z-0 scale-[1.41]"
      >
        <source src="/assets/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Кнопка управления звуком */}
      <button
        onClick={toggleMute}
        className="absolute bottom-0 right-4 z-10 bg-white/50 px-3 py-1 rounded text-black font-semibold"
      >
        {isMuted ? "🔇" : "🔊"}
      </button>

      {/* Регулировка громкости */}
      <div className="absolute bottom-10 right-4 z-10 bg-white/50 px-3 py-1 rounded text-black">
        <label htmlFor="volume">Volume: </label>
        <input
          id="volume"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>

      {/* ⬆️ Контент поверх */}
      <div className="relative flex items-center justify-center">
        <div className="container px-4 flex flex-col justify-center">
          <h1
            className={`text-5xl md:text-7xl lg:text-9xl leading-none text-left max-w-6xl font-medium apple-chancery`}
          >
            Welcome to Creative Peace Of Mind
          </h1>

          <div className="mt-[130px] sm:mt-[180px] text-left">
            <a
              href="#contact"
              className="flex items-center gap-2 cursor-pointer"
            >
              <Image
                src="/assets/button.svg"
                alt="book now"
                width={250}
                height={150}
                className="object-cover z-10"
              />
            </a>
          </div>

          {/* Контентная часть */}
          <div className="mt-6 flex flex-col lg:flex-row md:items-left md:justify-between gap-6 text-left">
            <p
              className={`max-w-xl text-lg md:text-xl text-medium mx-auto md:mx-0 font-medium ${instrumentSans.className}`}
            >
              Step into a space where words aren’t your only language. Whether
              you speak through stories, silence, colour or movement — we’re
              here to explore it together, gently and creatively, at your pace
            </p>
            <div className="flex items-center gap-3 justify-left md:justify-start">
              <Image
                src="/assets/Person.png"
                alt="User"
                width={150}
                height={50}
              />
              <div className="flex flex-col gap-1 text-white text-lg">
                {"★★★★★"}
                <span
                  className={`text-base text-white font-medium ${manrope.className}`}
                >
                  Rating reviews from 150 people
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
