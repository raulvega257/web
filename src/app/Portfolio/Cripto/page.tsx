
import PortafolioCripto from "./components/cripto";
import Link from "next/link";




export default function portfolio() {





    return (
        <div className="p-6 bg-gray-900 rounded-2xl shadow-xl border border-gray-700 space-y-6">
            <div className="space-y-4">
            <div className="bg-gray-800 text-gray-200 p-4 rounded-lg border border-gray-700">
                API para consultar capitalización de mercado total según Market Metrics. presiona el boton cargar datos
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
