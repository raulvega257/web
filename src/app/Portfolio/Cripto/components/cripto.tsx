'use client';
import { useState } from "react";
import ChartCripto from "./Chartcripto";

const CRYPTOS = [
  { code: "BTC", name: "Bitcoin" },
  { code: "ETH", name: "Ethereum" },
];

const FIATS = [
  { code: "USD", name: "United States Dollar" },
  { code: "EUR", name: "Euro" },
];

export default function PortafolioCripto() {
  const [data, setData] = useState(null);
  const [symbol, setSymbol] = useState("BTC");
  const [market, setMarket] = useState("EUR");
  const [showLimitModal, setShowLimitModal] = useState(false);

  const handleFetchdatacripto = async () => {
    try {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${symbol}&market=${market}&apikey=TYZ6Z1NHFQLTKU4B`
      );
      const result = await response.json();
      // Verificamos si la respuesta contiene el mensaje de límite de API
      if (result.Information) {
        setShowLimitModal(true);
        return;
      }

      setData(result);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5  gap-6">

        {/* Controles de selección y botón */}
        <div className="flex flex-col col-span-1 gap-6 order-1 md:order-2">
          {/* Acordeón de criptomonedas */}
          <div className="bg-gray-800 rounded-xl shadow-inner p-4 text-gray-400 open:ring-2 open:ring-indigo-500 transition-all">
            <div className="font-semibold text-white">Seleccionar criptomoneda</div>
            <select
              className="mt-4 w-full p-2 bg-gray-700 rounded text-white"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
            >
              {CRYPTOS.map((crypto) => (
                <option key={crypto.code} value={crypto.code}>
                  {crypto.code} - {crypto.name}
                </option>
              ))}
            </select>
          </div>

          {/* Acordeón de moneda fiat */}
          <div className="bg-gray-800 rounded-xl shadow-inner p-4 mt-10 text-gray-400 open:ring-2 open:ring-indigo-500 transition-all">
            <div className="font-semibold text-white">Seleccionar moneda fiat</div>
            <select
              className="mt-4 w-full p-2 bg-gray-700 rounded text-white"
              value={market}
              onChange={(e) => setMarket(e.target.value)}
            >
              {FIATS.map((fiat) => (
                <option key={fiat.code} value={fiat.code}>
                  {fiat.code} - {fiat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Botón de carga */}
          <button
            onClick={handleFetchdatacripto}
            className="bg-indigo-600 hover:bg-indigo-500 mt-10 transition-colors duration-300 text-white py-3 px-6 rounded-xl shadow-md"
          >
            Cargar datos
          </button>
        </div>

        {/* Gráfica + Advertencia */}
        <div className="grid grid-cols-1 col-span-4 order-2 md:order-1">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg overflow-auto max-h-[600px]">
            <h2 className="text-xl font-semibold mb-4 text-gray-200">Datos cargados</h2>
            {data ? (
              <ChartCripto data={data} />
            ) : (
              <p className="text-gray-500">No hay datos cargados</p>
            )}
          </div>

          <div className="bg-gray-800 p-4 mt-5 rounded-xl shadow-inner text-gray-400">
            <span className="block text-sm">Advertencia</span>
            <p className="mt-2 text-xs text-gray-500">
              La siguiente aplicación usa una key gratuita de Alphavantage. Las peticiones están limitadas a 25 por día. Si tienes problemas con esta aplicación, contáctame en mi LinkedIn:
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

      {/* Modal de límite de API */}
      {showLimitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg max-w-md text-center">
            <h2 className="text-xl font-bold text-red-400 mb-4">Límite alcanzado</h2>
            <p className="text-sm text-gray-300 mb-4">
              Se ha alcanzado el límite diario de 25 solicitudes gratuitas de la API de Alpha Vantage. Por favor inténtalo más tarde o contáctame en mi LinkedIn.
            </p>
            <button
              onClick={() => setShowLimitModal(false)}
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg mt-2"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>

  );
}
