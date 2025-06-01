"use client";
import { FaInstagram, FaEnvelope, FaFacebook } from "react-icons/fa";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="container px-4 text-black py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        </div>

        {/* Elena & Irina's Contacts (центральная колонка) */}
        <div className="text-center">
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
            </div>
          </div>

          {/* Ирина */}
          <div className="mt-10">
            <div className="border-b border-black mb-4 w-full" />
            <p className="uppercase font-semibold text-sm tracking-widest mb-2">
              Irina’s Contacts
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
            </div>
          </div>
        </div>

        {/* CONTACTS */}
        <div className="text-left md:text-right space-y-2">
          <p className="text-sm font-medium">
            {" "}
            <a href="tel:07927673728" className="hover:underline">
              07927 673 728
            </a>
          </p>
          <p className="text-sm text-gray-700">
            info@peaceofmind-therapy.co.uk
          </p>
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
