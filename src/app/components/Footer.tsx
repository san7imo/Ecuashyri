"use client";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="mt-12">
      <div className="w-full">
        {/* banner inferior */}
        <div className="w-full">
          <Image
            src="/banner-bottom.jpg"
            alt="Ecuashyri footer"
            className="w-full h-auto object-cover"
            width={1600}
            height={420}
            
          />
        </div>

        <div className="bg-gradient-to-r from-[var(--ecua-orange)] to-[var(--ecua-blue)] text-white text-center py-4">
          <div className="container mx-auto px-4">
            <p className="font-semibold">
              Ecuashyri — La radio con sonido tricolor
            </p>
            <p className="text-sm mt-1">
              Contactos: 610 660 115 • 910 81 99 92 — www.ecuashyri.es
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
