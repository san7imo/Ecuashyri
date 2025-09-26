"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full">
     
      {/* Card con logo/social */}
      <div className="container mx-auto px-4">
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg flex items-center gap-4">
          <div className="w-36 flex-shrink-0">
            <Image
              src="/logo1.png"
              alt="Ecuashyri logo"
              width={300}
              height={80}
              className="object-contain rounded"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-extrabold">Ecuashyri</h1>
            <p className="text-sm text-slate-600">
              Imagen y sonido tricolor • 103.7 FM Madrid
            </p>
            <div className="flex gap-3 mt-3 text-xl text-slate-700">
              <a
                href="https://tiktok.com/@radioecuashyri"
                aria-label="TikTok"
                className="hover:text-[var(--ecua-blue)]"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.facebook.com/Ecuadorstereo"
                aria-label="Facebook"
                className="hover:text-[var(--ecua-blue)]"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com/ecuashyri"
                aria-label="Instagram"
                className="hover:text-[var(--ecua-blue)]"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/34610660115"
                aria-label="WhatsApp"
                className="hover:text-[var(--ecua-blue)]"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
