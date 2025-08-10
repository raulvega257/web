


import Link from "next/link";
import Image from "next/image";

export default function Main() {
  return (
    <div className="p-2 md:p-6 bg-gray-900 rounded-2xl shadow-xl ">
      
      <div className="min-h-screen text-gray-200 flex flex-col rounded-2xl space-y-6">
        {/* HEADER */}
        <header className="bg-indigo-200  rounded-2xl p-6 flex flex-col items-center shadow-md">
          <Image
            src="/yo/yo12.jpg"
            alt="Raul Ricardo Vega Mendoza"
            width={300}
            height={200}
            className="rounded-full border-4 border-orange-200 object-cover my-4"
          />
          <h1 className="text-4xl text-gray-700 font-bold tracking-wide">Raúl Vega</h1>
          <h2 className="text-lg text-gray-700 opacity-90">
            Analista de Datos y Desarrollador Frontend
          </h2>
        </header>

        {/* MAIN CONTENT */}
        <main className="flex-1 flex flex-col rounded-2xl space-y-16 p-8 mx-auto bg-gray-800">
          {/* SOBRE MÍ + HABILIDADES */}
          <section className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl  font-bold  pb-2 mb-4">
                Sobre mí
              </h2>
              <p className="mb-3">
                Profesional, responsable y con gran atención al detalle.
              </p>
              <p className="mb-3">
                Siento pasión por las nuevas tecnologías y mantengo un alto compromiso con el aprendizaje continuo. Soy autodidacta y orientado a resultados, me adapto con rapidez a nuevos retos y contribuyo activamente al logro de objetivos.
              </p>
              <p className="mb-3">
                Estoy convencido de que compartir el conocimiento es clave para potenciar el crecimiento colectivo.
              </p>
              <p className="mb-3 mt-15 text-lg ml-6">
                - Aprender, aportar, crecer.
              </p>

            </div>

            <div className="space-y-8">
              {/* Idiomas */}
              <div>
                <h2 className="text-2xl  font-bold  pb-2 mb-2">
                  Idiomas
                </h2>
                <p>Español (nativo) · Inglés (Conversacional - B2)</p>
              </div>

              {/* Habilidades */}
              <div>
                <h2 className="text-2xl  font-bold  pb-2 mb-2">
                  Habilidades
                </h2>
                <ul className="grid grid-cols-2 lg:grid-cols-3 gap-3 text-gray-200 list-none">
                  <li>🌐 HTML</li>
                  <li>🎨 CSS</li>
                  <li>📜 JavaScript</li>
                  <li>⚛️ React</li>
                  <li>🧭 Next.js</li>
                  <li><p> 🐍 Python </p><p> (Pandas, NumPy) </p> </li>
                  <li>🧠 Ensamblador</li>
                  <li>📊 Tableau</li>
                  <li>📈 Power BI</li>
                </ul>
              </div>
            </div>
          </section>

          {/* PORTAFOLIO */}
          <section>
            <h2 className="text-3xl font-bold border-b-2 border-orange-200 pb-2 mb-8">
              Portafolio
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <a
                href="https://public.tableau.com/app/profile/raul.vega6780/vizzes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
              >
                <Image
                  src="/yo/tableau.png"
                  alt="tableau"
                  width={150}
                  height={150}
                  className="rounded-xl border-6 border-sky-200 transition-transform duration-300 group-hover:scale-125 group-hover:border-sky-600"
                />
                <h3 className="mt-3 font-medium">Tableau</h3>
              </a>

              <a
                href="/yo/powerbi.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
              >
                <Image
                  src="/yo/powerbiimg.png"
                  alt="Power BI"
                  width={150}
                  height={150}
                  className="rounded-xl border-6 border-sky-200 transition-transform duration-300 group-hover:scale-125 group-hover:border-sky-600"
                />
                <h3 className="mt-3 font-medium">Power BI</h3>
              </a>

              <Link
                href="/Portfolio/Cripto/"
                className="flex flex-col items-center group"
              >
                <Image
                  src="/yo/maney.jpg"
                  alt="cripto"
                  width={150}
                  height={150}
                  className="rounded-xl border-6 border-sky-200 transition-transform duration-300 group-hover:scale-125 group-hover:border-sky-600"
                />
                <h3 className="mt-3 font-medium">Conexión API y gráfica cripto</h3>
              </Link>
            </div>
          </section>


        </main>
        <footer className=" rounded-2xl  p-8  bg-gray-800">
          <section>
            <h2 className="text-2xl font-bold  pb-2 mb-4">
              Redes y Contacto
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-gray-200">
              <a
                href="https://www.linkedin.com/in/raúl-vega-326364272"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition-colors"
              >
                🔗 LinkedIn
              </a>
              <a
                href="https://github.com/raulvega257"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition-colors"
              >
                💻 GitHub
              </a>
              <a
                href="https://wa.me/524444970396"
                className="hover:text-sky-400 transition-colors"
              >
                📱 WhatsApp
              </a>
              <div>
                <p>📧 Correo:</p>
                <p className="opacity-80">raul.vega.LK@proton.me</p>
              </div>
            </div>
          </section>
        </footer>
      </div>
    </div>
  );
}
