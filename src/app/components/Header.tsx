"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="container px-4 absolute top-0 w-full z-50 py-9 flex justify-between items-center mx-auto">
      <h1 className="text-yellow-300 text-xl font-semibold">
        Peace of MindTherapy
      </h1>

      {/* Desktop navigation */}
      <nav className="hidden md:flex space-x-3">
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

      {/* Mobile burger icon */}
      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-gradient-to-r from-blue-400 to-cyan-500 text-white flex flex-col items-center space-y-4 py-6 md:hidden">
          <Link
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="text-sm px-4 py-2 hover:bg-white hover:text-black rounded-full transition"
          >
            About us
          </Link>
          <Link
            href="#services"
            onClick={() => setMenuOpen(false)}
            className="text-sm px-4 py-2 hover:bg-white hover:text-black rounded-full transition"
          >
            Services
          </Link>
          <Link
            href="#groups"
            onClick={() => setMenuOpen(false)}
            className="text-sm px-4 py-2 hover:bg-white hover:text-black rounded-full transition"
          >
            For groups
          </Link>
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-sm px-4 py-2 hover:bg-white hover:text-black rounded-full transition"
          >
            Contact us
          </Link>
        </div>
      )}
    </header>
  );
}
