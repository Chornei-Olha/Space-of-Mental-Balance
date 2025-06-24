"use client";
import {
  FaInstagram,
  FaEnvelope,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import { Poppins, Inter } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });
const inter = Inter({ subsets: ["latin"], weight: ["500"] });

export default function Footer() {
  return (
    <footer id="contact" className="relative w-full">
      <div className="absolute z-0 bottom-0 left-0 w-[80px] sm:w-[100px] md:w-[140px]">
        <Image
          src="/assets/bitmap.png"
          alt="bitmap"
          width={371}
          height={71}
          className="object-contain"
        />
      </div>
      <div className="container px-4 text-black py-12 md:py-16 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* INFO */}
          <div>
            <h4
              className={`uppercase text-xs tracking-widest mb-4 font-medium ${poppins.className}`}
            >
              Info
            </h4>
            <ul
              className={`space-y-2 text-base font-normal ${poppins.className}`}
            >
              <li>
                <a href="#about" className="hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#groups" className="hover:underline">
                  For groups
                </a>
              </li>
            </ul>
          </div>

          {/* Elena & Iryna's Contacts (центральная колонка) */}
          <div className={`text-center font-normal ${poppins.className}`}>
            <h3 className="border-b border-black ">Contacts</h3>

            {/* Елена */}
            <div className="mt-6 md:mt-0">
              <div className="mb-4 w-full" />
              <p className="uppercase font-semibold text-sm tracking-widest mb-2">
                Olena’s Contacts
              </p>
              <div className="flex justify-center gap-6">
                <a
                  href="https://www.instagram.com/asanka_91?igsh=MThzd3IxaGI4cnVrbw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black transition"
                >
                  <FaInstagram className="text-xl" />
                </a>
                <a
                  href="mailto:Olena1sanko@gmail.com"
                  className="text-gray-700 hover:text-black transition"
                >
                  <FaEnvelope className="text-xl" />
                </a>
                <a
                  href="https://www.facebook.com/share/15MGMdUX8U/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black transition"
                >
                  <FaFacebook className="text-xl" />
                </a>
                <a
                  href="https://wa.me/447927673728"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black transition"
                >
                  <FaWhatsapp className="text-xl" />
                </a>
              </div>
            </div>

            {/* Ирина */}
            <div className="mt-10">
              <div className="mb-4 w-full" />
              <p className="uppercase font-semibold text-sm tracking-widest mb-2">
                Iryna’s Contacts
              </p>
              <div className="flex justify-center gap-6">
                <a
                  href="https://wa.me/447927673728"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black transition"
                >
                  <FaWhatsapp className="text-xl" />
                </a>
                <a
                  href="mailto:info@peaceofmind-therapy.co.uk"
                  className="text-gray-700 hover:text-black transition"
                >
                  <FaEnvelope className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-row justify-between mt-12 border-black pt-6 gap-4">
          <p className={`text-xs text-gray-700 font-medium ${inter.className}`}>
            © 2025 —{" "}
            <a href="https://impuls-studio.com.ua/" className="hover:underline">
              ImpulsStudio
            </a>
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 border border-white rounded-full flex items-center justify-center bg-[#07512A]/26 hover:bg-[#F0D9D4] hover:text-white transition"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
