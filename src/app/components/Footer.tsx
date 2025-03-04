import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full text-center bg-[#8da883] text-white py-8 px-30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Контактная информация */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Kontakte</h3>
          <p className="mb-2">+4368184242756</p>
          <p className="mb-2">Deutschland</p>
        </div>

        {/* Ссылки на соцсети */}
        <div className="flex justify-center space-x-10">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#1C5107]"
          >
            <FaFacebook size={25} />
          </a>
          <a
            href="https://www.whatsapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#1C5107]"
          >
            <FaWhatsapp size={25} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#1C5107]"
          >
            <FaInstagram size={25} />
          </a>
        </div>

        {/* Политика конфиденциальности */}
        <div className="flex justify-center md:justify-end">
          <a href="/privacy-policy" className="text-white hover:text-[#1C5107]">
            Datenschutzrichtlinie
          </a>
        </div>
      </div>
    </footer>
  );
}
