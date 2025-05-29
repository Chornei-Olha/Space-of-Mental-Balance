"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="container px-4 absolute top-0 w-full z-50 py-3 flex justify-between items-center">
      {/* Лого слева */}
      <div className="relative w-[250px] md:w-[380px] h-[auto]">
        <Image
          src="/assets/logo.svg"
          alt="Blue Circle"
          width={350}
          height={55}
          className="object-contain"
          priority
        />
      </div>

      {/* Desktop navigation справа */}
      <nav className="hidden lg:flex space-x-3 items-center">
        <Link
          href="#about"
          className="px-4 py-2 border border-white rounded-full text-white text-sm hover:bg-white hover:text-black transition"
        >
          About us
        </Link>
        <Link
          href="#services"
          className="px-4 py-2 border border-white rounded-full text-white text-sm hover:bg-white hover:text-black transition"
        >
          Services
        </Link>
        <Link
          href="#groups"
          className="px-4 py-2 border border-white rounded-full text-white text-sm hover:bg-white hover:text-black transition"
        >
          For groups
        </Link>
        <Link
          href="#contact"
          className="px-4 py-2 border border-white rounded-full text-white text-sm hover:bg-white hover:text-black transition"
        >
          Contact us
        </Link>
      </nav>

      {/* Кнопка бургер для мобилок справа */}
      <button
        className="lg:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Мобильное меню */}
      {menuOpen && (
        <div className="absolute top-full h-screen left-0 w-full bg-gradient-to-r from-blue-400 to-cyan-500 text-white flex flex-col items-center space-y-4 py-6 lg:hidden">
          <Link
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="text-lg px-4 py-2 hover:bg-white hover:text-black rounded-full transition"
          >
            About us
          </Link>
          <Link
            href="#services"
            onClick={() => setMenuOpen(false)}
            className="text-lg px-4 py-2 hover:bg-white hover:text-black rounded-full transition"
          >
            Services
          </Link>
          <Link
            href="#groups"
            onClick={() => setMenuOpen(false)}
            className="text-lg px-4 py-2 hover:bg-white hover:text-black rounded-full transition"
          >
            For groups
          </Link>
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-lg px-4 py-2 hover:bg-white hover:text-black rounded-full transition"
          >
            Contact us
          </Link>
        </div>
      )}
    </header>
  );
}
