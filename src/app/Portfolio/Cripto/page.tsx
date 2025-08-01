
import PortafolioCripto from "./components/cripto";
import Link from "next/link";


export default function portfolio() {


    return (
        <div className="p-2 md:p-6 bg-gray-900 rounded-2xl shadow-xl border border-gray-700 space-y-6">
            <div className="space-y-6">
                <div className="bg-indigo-200 text-gray-700 p-4 rounded-lg border border-gray-700">
                    <div className="flex ">
                        <Link
                        href="/"
                        className="bg-indigo-900 rounded-xl p-2 text-m text-indigo-100 hover:text-indigo-300 transition duration-200"
                        >
                        ←  Volver
                        </Link>
                    </div>
                    <p className="flex mb-5 justify-center text-xl">
                        Conexion API para la visualizacion del mercado cripto.
                    </p>
                    <p className="mx-10">
                        La siguiente aplicación web esta hecha con el proposito unico de formar parte de mi portaforlio de desarrollo. No recibo por ningun motivo fondos para ser invertidos en ningun activo financiero. 
                    </p>
               
                </div>
                <div className="">
                    <PortafolioCripto />
                </div>
                <div className="bg-gray-800 text-gray-200 p-4 rounded-lg border border-gray-700">
                    <p className="mb-5 mx-5">
                        
                        Esta aplicación utiliza la API de CRYPTOCOMPARE POWERED BY COINDESK para obtener datos históricos diarios de precios de las criptomonedas más relevantes del mercado: Bitcoin (BTC), Ethereum (ETH), Ripple (XRP).
                    </p>
                    <p className="mb-5 mx-5">
                        Permite comparar el comportamiento de estas criptomonedas frente a monedas fiduciarias: el Euro (EUR), el Dólar estadounidense (USD), el Yen Japones (JPY) y el Peso Mexicano (MXN). Los datos provienen directamente de los servidores de CRYPTOCOMPARE, actualizados diariamente a medianoche (UTC), y permiten analizar cómo han fluctuado los precios a lo largo del tiempo.
                    </p>
                    <p className="mb-5 mx-5">
                        Ideal para realizar análisis financieros, seguimientos de inversión o simplemente para entender mejor la evolución del mercado cripto.
                    </p>

                </div>
            
                <div className="bg-gray-800 p-4 mt-5 rounded-xl shadow-inner text-gray-300">
                    <span className="block text-sm">Advertencia</span>
                    <p className="mt-2 text-xs text-gray-400">
                    La siguiente aplicación usa una key gratuita de CryptoCompare. Las peticiones están limitadas. Si tienes problemas, contáctame en mi LinkedIn:
                    </p>
                    <a
                    href="https://www.linkedin.com/in/raúl-vega-326364272"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                    >
                    LinkedIn
                    </a>
                </div>
                
            
            </div>
        </div>
      
    );
};
