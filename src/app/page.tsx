import Link from "next/link";
import Image from "next/image";

export default function Main() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-6">


      <div className="max-w-4xl w-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg p-8 space-y-8">


        {/* Header */}
        <div className="flex flex-col items-center space-y-4 mb-20">
          <Image
            src="/yo/b44.jpg"
            alt="Raul Ricardo Vega Mendoza"
            width={150}
            height={150}
            className="rounded-full border-4 border-gray-700 object-cover"
          />
          <h1 className="text-4xl font-bold tracking-wide text-center">
            Raúl Vega
          </h1>
          <h2 className="text-2xl font-bold tracking-wide text-center mt-10">
            Analista de Datos y Desarrollador Frontend
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>

              {/* Sobre mí */}
              <section className="space-y-2 mb-10">
                <h2 className="text-xl font-semibold border-b border-gray-700 pb-1">
                  Sobre mí
                </h2>
                <p className="text-gray-300 leading-relaxed mb-5">
                Soy una persona con un alto sentido de la responsabilidad y la ética profesional.
                Tengo una fuerte pasión por el aprendizaje y disfruto enfrentar nuevos retos que me permitan expandir mis habilidades técnicas y personales.
                 
                </p>
                <p className="text-gray-300 leading-relaxed mb-5">
                
                Soy altamente autodidacta, curioso y dedicado, lo que me impulsa a seguir creciendo de forma continua.
                 
                </p>
                <p className="text-gray-300 leading-relaxed">
                
                
                Me gusta integrarme a equipos de trabajo donde pueda aportar ideas, aprender de los demás y contribuir activamente a los objetivos comunes.
                Creo firmemente que el conocimiento alcanza su máximo valor cuando se comparte, por eso me motiva aprender, compartir y aportar para crecer junto a mi equipo y entorno. 
                </p>
              </section>

              {/* Idiomas */}
              <section className="space-y-2 mb-10">
                <h2 className="text-xl font-semibold border-b border-gray-700 pb-1">
                  Idiomas
                </h2>
                <p className="text-gray-300">Español (nativo) · Inglés (conversacional)</p>
              </section>

              {/* Habilidades */}
              <section className="space-y-2 mb-10">
                <h2 className="text-xl font-semibold border-b border-gray-700 pb-1">
                  Habilidades
                </h2>
                <p className="text-gray-300">
                  HTML, CSS, JavaScript, React, Next.js, Python (Pandas, Numpy), Ensamblador,
                  Tableau, Power BI.
                </p>
              </section>


              {/* Redes sociales */}
              <section className="space-y-2 mb-10">
                <h2 className="text-xl font-semibold border-b border-gray-700 pb-1">
                  Redes y Contacto
                </h2>
                <ul className="flex space-x-6">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/raúl-vega-326364272"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/raulvega257"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      GitHub
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://wa.me/524444970396"
                      className="text-blue-400 hover:underline"
                    >
                      Mi whatsapp
                    </a>
                  </li>

                  <li>
                    <a
                      href=""
                    
                      className="text-blue-200 hover:underline"
                    >
                      mi correp
                    </a>
                  </li>
                </ul>
              </section>
          </div>

          <div>
            {/* Portafolio */}
            <section className="space-y-2">
              <h2 className="text-xl font-semibold border-b border-gray-700 pb-1 ml-20">
                Portafolio
              </h2>

              <div>
                {/* Tableau */}
                <div className="flex flex-col items-center space-y-4 mb-20">
                  <a
                    href="https://public.tableau.com/app/profile/raul.vega6780/vizzes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center space-y-4 text-blue-400 hover:underline"
                  >
                    <Image
                      src="/yo/tableau.png"
                      alt="tableau"
                      width={150}
                      height={150}
                      className="border-4 border-gray-700 rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                    <h1 className="text-gray-300 text-lg font-medium">Tableau</h1>
                  </a>
                </div>

                {/* Power BI PDF */}
                <div className="flex flex-col items-center space-y-4 mb-20">
                  <a
                    href="/yo/powerbi.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center space-y-2"
                  >
                    <Image
                      src="/yo/powerbiimg.png"
                      alt="powerbiimg"
                      width={150}
                      height={150}
                      className="border-4 border-gray-700 rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                    <h1 className="text-gray-300 text-lg font-medium">Power BI</h1>
                  </a>
                </div>

                {/* Conexión API y gráfica cripto */}
                <div className="flex flex-col items-center space-y-4 mb-20">
                  <Link href="/Portfolio/Cripto/" className="flex flex-col items-center space-y-4 text-blue-400 hover:underline">
                    <Image
                      src="/yo/cripto.png"
                      alt="cripto"
                      width={150}
                      height={150}
                      className="border-4 border-gray-700 rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                    <h1 className="text-gray-300 text-lg font-medium">
                      Conexión API y gráfica cripto
                    </h1>
                  </Link>
                </div>
              </div>
            </section>
          </div>
          



        </div>


      </div>
    </div>
  );
}
