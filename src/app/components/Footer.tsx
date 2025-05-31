"use client";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="container px-4 text-black py-12 md:py-16">
      <div className="md:justify-between mx-auto flex flex-col md:flex-row gap-8">
        {/* INFO */}
        <div>
          <h4 className="uppercase font-semibold text-sm tracking-widest mb-4">
            Info
          </h4>
          <ul className="space-y-2 text-base">
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
            <li>
              <a href="#contacts" className="hover:underline">
                Contacts
              </a>
            </li>
          </ul>
          <div className="flex flex-row gap-10 mt-10">
            {" "}
            {/* SOCIAL - Instagram */}
            <div>
              <div className="border-b border-black mb-4 w-full" />
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <FaInstagram className="text-xl" />
                Instagram
              </div>
            </div>
            {/* SOCIAL - Whatsapp */}
            <div>
              <div className="border-b border-black mb-4 w-full" />
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <FaWhatsapp className="text-xl" />
                Whatsapp
              </div>
            </div>
          </div>
        </div>

        {/* CONTACTS */}
        <div className="text-left md:text-right space-y-2">
          <p className="text-sm font-medium">+1 981 981-23-19</p>
          <p className="text-sm text-gray-700">dataverse@gmail.com</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-row justify-between mt-12 border-black pt-6 gap-4">
        <p className="text-sm text-gray-700">© 2025 — Copyright</p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-12 h-12 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
}
