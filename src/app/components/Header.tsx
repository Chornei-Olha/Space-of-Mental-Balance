import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 px-6 md:px-16 py-9 flex justify-between items-center">
      <h1 className="text-yellow-300 text-xl font-semibold">
        Peace of MindTherapy
      </h1>
      <nav className="space-x-3">
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
    </header>
  );
}
