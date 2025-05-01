'use client';
import { useState } from "react";
import ChartCripto from "./Chartcripto";

export default function PortafolioCripto() {
  const [data, setData] = useState(null);

  const handleFetchdatacripto = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        api_key: 'tm-d8146c27-3d97-41ee-871e-1d7053caf49d' // <-- reemplaza esto con tu key real
      }
    };

    try {
      const response = await fetch(
        'https://api.tokenmetrics.com/v2/market-metrics?startDate=2023-10-01&endDate=2025-04-20&limit=1000&page=0', options
      );
      const result = await response.json();
      setData(result); // Guarda los datos para visualizarlos
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
        
        {/* Bloque de datos (izquierda) */}
        <div className="md:col-span-4 bg-gray-800 p-6 rounded-2xl shadow-lg overflow-auto max-h-[600px]">
          <h2 className="text-xl font-semibold mb-4 text-gray-200">Datos cargados</h2>
          {data ? (
            <ChartCripto data={data} />
          ) : (
            <p className="text-gray-500">No hay datos cargados</p>
          )}
        </div>

        {/* Botón y extra info (derecha) */}
        <div className="flex flex-col gap-6">
          
          <button
            onClick={handleFetchdatacripto}
            className="bg-indigo-600 hover:bg-indigo-500 transition-colors duration-300 text-white py-3 px-6 rounded-xl shadow-md"
          >
            Cargar datos
          </button>

          <div className="bg-gray-800 p-4 rounded-xl shadow-inner text-gray-400">
            <span className="block text-sm">Advertencia</span>
            <p className="mt-2 text-xs text-gray-500">
              La siguiente aplicacion usa una key gratuita de Market Metrics. Por lo cual las peticiones estan limitadas, si tienes tienes problemas con esta aplicacion contactame en mi linkedIn:
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
    </div>

  );
}
