import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-[60vh] flex items-center">
        <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Estamos construyendo nuestro sitio web
            </h2>
            <p className="text-lg text-slate-700 mb-6">
              Ecuashyri llega a España para acompañar a la comunidad latina. Muy pronto estaremos en internet con música, cultura y la voz de nuestra gente. ¡Síguenos en redes y sé parte de este nuevo comienzo!
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/banner.jpg"
              alt="Ecuashyri visual"
              height={300}
              width={400}
              className="rounded-lg shadow-md max-h-72 object-contain"
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
