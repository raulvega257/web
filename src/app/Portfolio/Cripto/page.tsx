
import PortafolioCripto from "./components/cripto";
import Link from "next/link";




export default function portfolio() {





    return (
        <div className="p-6 bg-gray-900 rounded-2xl shadow-xl border border-gray-700 space-y-6">
            <div className="space-y-4">
                <div className="bg-gray-800 text-gray-200 p-4 rounded-lg border border-gray-700">
                    <p className="mb-5">
                        
                        Esta aplicación utiliza la API de Alpha Vantage para obtener datos históricos diarios de precios de las dos criptomonedas más relevantes del mercado: Bitcoin (BTC) y Ethereum (ETH).
                    </p>
                    <p className="mb-5">
                        Permite comparar el comportamiento de estas criptomonedas frente a dos monedas fiduciarias: el Euro (EUR) y el Dólar estadounidense (USD). Los datos provienen directamente de los servidores de Alpha Vantage, actualizados diariamente a medianoche (UTC), y permiten analizar cómo han fluctuado los precios a lo largo del tiempo.
                    </p>
                    <p className="mb-5">
                        Ideal para realizar análisis financieros, seguimientos de inversión o simplemente para entender mejor la evolución del mercado cripto en distintos contextos monetarios.
                    </p>

                    <p className="mb-5">
                        presiona el boton cargar datos
                    </p>
                </div>
            
                <div className="flex justify-end">
                    <Link
                    href="/"
                    className="text-sm text-indigo-400 hover:text-indigo-300 transition duration-200"
                    >
                    ← Volver
                    </Link>
                </div>
            
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <PortafolioCripto />
                </div>
            </div>
        </div>
      
    );
};
