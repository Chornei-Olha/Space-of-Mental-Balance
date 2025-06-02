"use client";

import { Instrument_Sans } from "next/font/google";

const instrumentSans = Instrument_Sans({ subsets: ["latin"], weight: ["400"] });

interface AboutVideoProps {
  videoSrc: string;
  title?: string;
  description?: string;
}

export default function AboutVideo({
  videoSrc,
  title,
  description,
}: AboutVideoProps) {
  return (
    <section className="max-w-3xl mt-[50px] shadow-lg overflow-hidden rounded-[20px]">
      <div className="container p-4 mx-auto bg-gradient-to-r from-[#12DCDC] to-[#D5C9B5]">
        {" "}
        {title && (
          <h2
            className={`text-lg text-[#243770] mb-2 font-normal ${instrumentSans.className}`}
          >
            {title}
          </h2>
        )}
        {description && (
          <p
            className={`text-sm md:text-base text-[#243770] mb-4 font-normal ${instrumentSans.className}`}
          >
            {description}
          </p>
        )}
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="rounded-xl w-full h-full"
            src={videoSrc}
            title="Video about girls"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
