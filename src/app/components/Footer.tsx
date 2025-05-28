// import { FaFacebook, FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";
// import { Space_Grotesk } from "next/font/google";

// const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: "400" });

// export default function Footer() {
//   return (
//     <footer className="w-full text-center bg-[#8da883] text-white py-8 px-30">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Контактная информация */}
//         <div>
//           <div
//             className={`flex flex-col items-center md:items-start ${spaceGrotesk.className}`}
//           >
//             <h3 className="text-lg font-semibold mb-4">Kontakte</h3>
//             <a
//               href="tel:+4368184242756"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white mb-2 hover:text-[#1C5107]"
//             >
//               +4368184242756
//             </a>

//             <p className="mb-2">Österreich</p>
//             <p className="mb-2">Deutschland</p>
//           </div>
//           <div
//             className={`flex flex-col items-center md:items-start ${spaceGrotesk.className} text-[14px]`}
//           >
//             <a
//               href="https://www.daheimbetreut.at/de/impressum"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white hover:text-[#1C5107]"
//             >
//               https://www.daheimbetreut.at/de/impressum
//             </a>
//             <a
//               href="https://www.wko.at/datenschutzerklaerung"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white hover:text-[#1C5107]"
//             >
//               https://www.wko.at/datenschutzerklaerung
//             </a>
//             <a
//               href="https://www.daheimbetreut.at/de/barrierefreiheit"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white hover:text-[#1C5107]"
//             >
//               https://www.daheimbetreut.at/de/barrierefreiheit
//             </a>
//           </div>
//         </div>

//         {/* Ссылки на соцсети */}
//         <div className="flex justify-center space-x-10">
//           <a
//             href="https://www.facebook.com/profile.php?id=61558576380840"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white hover:text-[#1C5107]"
//           >
//             <FaFacebook size={25} />
//           </a>
//           <a
//             href="https://wa.me/4368184242756"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white hover:text-[#1C5107]"
//           >
//             <FaWhatsapp size={25} />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/betreuung-zu-hause-a9b2b7355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white hover:text-[#1C5107]"
//           >
//             <FaLinkedin size={25} />
//           </a>
//           <a
//             href="mailto:office.betreuung24stunden@gmail.com"
//             className="text-white hover:text-[#1C5107]"
//           >
//             <FaEnvelope size={25} />
//           </a>
//         </div>

//         {/* Политика конфиденциальности */}
//         <div
//           className={`flex justify-center md:justify-end ${spaceGrotesk.className}`}
//         >
//           <a href="/privacy-policy" className="text-white hover:text-[#1C5107]">
//             Datenschutzrichtlinie
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="container bg-[url('/blue-texture.jpg')] bg-cover bg-center text-black px-6 py-12 md:py-16">
      <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
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
        <div className="text-right space-y-2">
          <p className="text-sm font-medium">+1 981 981-23-19</p>
          <p className="text-sm text-gray-700">dataverse@gmail.com</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-12 border-t border-black pt-6 gap-4">
        <p className="text-sm text-gray-700">© 2025 — Copyright</p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-12 h-12 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
        >
          <ArrowUp size={20} />
        </button>
      </div>

      {/* Branding */}
      <div className="mt-8">
        <h1 className="text-center text-4xl md:text-6xl font-bold tracking-tight">
          <span className="text-white">PEACE OF MIND</span>
          <span className="text-white">THERAPY</span>
        </h1>
      </div>
    </footer>
  );
}
