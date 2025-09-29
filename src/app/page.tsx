import Header from "../app/components/Header";
import Footer from "../app/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-[60vh] flex items-center justify-center">
        <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left">
          <div>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Estamos construyendo nuestro sitio web
            </h2>
            <p className="text-lg text-slate-700 mb-6">
              Ecuashyri llega a España para acompañar a la comunidad latina. Muy pronto estaremos en internet con música, cultura y la voz de nuestra gente. ¡Síguenos en redes y sé parte de este nuevo comienzo!
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
