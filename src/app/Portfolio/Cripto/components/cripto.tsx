



'use client';

import { useRef, useState } from 'react';
import ChartCripto from './Chartcripto';
import dayjs from 'dayjs';

type CriptoData = {
  formattedDate: string;
  open: number;
  close: number;
  low: number;
  high: number;
};

export default function PortafolioCripto() {
  const cryptoRef = useRef<HTMLDetailsElement>(null);
  const fiatRef = useRef<HTMLDetailsElement>(null);
  const rangeRef = useRef<HTMLDetailsElement>(null);

  const [rawData, setRawData] = useState<CriptoData[] | null>(null);
  const [showLimitModal, setShowLimitModal] = useState(false);
  const [range, setRange] = useState<'30' | '365' | 'all'>('30');
  const [crypto, setCrypto] = useState('BTC');
  const [fiat, setFiat] = useState('USD');
  const [loadedCrypto, setLoadedCrypto] = useState('BTC');
  const [loadedFiat, setLoadedFiat] = useState('USD');
  const [dataTodo, setDataTodo] = useState<CriptoData[]>([]);

  const handleFetchdatacripto = async () => {
    try {
      const response = await fetch(
        `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${crypto}&tsym=${fiat}&limit=2000`
      );
      const result = await response.json();

      if (result?.Information || !result?.Data?.Data) {
        setShowLimitModal(true);
        return;
      }

      // const resultData: CriptoData[] = result.Data.Data.map((entry: any) => ({
      //   formattedDate: dayjs.unix(entry.time).format('DD/MM/YYYY'),
      //   open: entry.open,
      //   close: entry.close,
      //   low: entry.low,
      //   high: entry.high,
      // }));
      

      // Línea 45 corregida
      const resultData: CriptoData[] = result.Data.Data.map(
        (entry: { time: number; open: number; close: number; low: number; high: number }) => ({
          formattedDate: dayjs.unix(entry.time).format('DD/MM/YYYY'),
          open: entry.open,
          close: entry.close,
          low: entry.low,
          high: entry.high,
        })
      );



      setRawData(resultData);
      setDataTodo(resultData);
      setLoadedCrypto(crypto);
      setLoadedFiat(fiat);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  const getFilteredData = () => {
    if (range === '30') return dataTodo.slice(-30);
    if (range === '365') return dataTodo.slice(-365);
    return dataTodo;
  };

  const monedasCripto = [
    { key: 'BTC', label: 'Bitcoin' },
    { key: 'ETH', label: 'Ethereum' },
    { key: 'XRP', label: 'Ripple' },
  ];

  const monedasFiat = [
    { key: 'USD', label: 'United States Dollar' },
    { key: 'EUR', label: 'Euro' },
    { key: 'JPY', label: 'Japanese Yen' },
    { key: 'MXN', label: 'Mexican Peso' },
  ];

  const rangoLabel = {
    '30': 'Últimos 30 días',
    '365': 'Últimos 365 días',
    all: 'Todos los datos',
  };

  return (
    <div className="bg-gray-900 text-white p-2 md:p-6 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="flex flex-col col-span-1 gap-6 order-1 md:order-2">
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-xl shadow-inner p-4 text-gray-400">
              <details ref={cryptoRef} className="group open:ring-2 open:ring-indigo-500 transition-all">
                <summary className="cursor-pointer font-semibold text-white flex justify-between items-center">
                  <span>Divisas</span>
                  <span className="transition-transform duration-300 group-open:rotate-90">▶</span>
                </summary>
                <div className="mt-4">
                  <select
                    className="w-full p-2 mt-2 bg-gray-700 rounded text-white"
                    value={crypto}
                    onChange={(e) => {
                      setCrypto(e.target.value || 'BTC');
                      setTimeout(() => cryptoRef.current?.removeAttribute('open'), 100);
                    }}
                  >
                    {monedasCripto.map((crypto) => (
                      <option key={crypto.key} value={crypto.key}>
                        {crypto.key} - {crypto.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-4">
                  <select
                    className="w-full p-2 mt-2 bg-gray-700 rounded text-white"
                    value={fiat}
                    onChange={(e) => {
                      setFiat(e.target.value || 'USD');
                      setTimeout(() => fiatRef.current?.removeAttribute('open'), 100);
                    }}
                  >
                    {monedasFiat.map((fiat) => (
                      <option key={fiat.key} value={fiat.key}>
                        {fiat.key} - {fiat.label}
                      </option>
                    ))}
                  </select>
                </div>
              </details>
            </div>

            <div className="bg-gray-800 rounded-xl shadow-inner p-4 text-gray-400">
              <details ref={rangeRef} className="group open:ring-2 open:ring-indigo-500 transition-all">
                <summary className="cursor-pointer font-semibold text-white flex justify-between items-center">
                  <span>Rango</span>
                  <span className="transition-transform duration-300 group-open:rotate-90">▶</span>
                </summary>
                <div className="mt-4">
                  <select
                    className="w-full p-2 mt-2 bg-gray-700 rounded text-white"
                    value={range}
                    onChange={(e) => {
                      setRange(e.target.value as '30' | '365' | 'all');
                      setTimeout(() => rangeRef.current?.removeAttribute('open'), 100);
                    }}
                  >
                    <option value="30">Últimos 30 días</option>
                    <option value="365">Últimos 365 días</option>
                    <option value="all">Todos los datos</option>
                  </select>
                </div>
              </details>
            </div>
          </div>

          <button
            onClick={handleFetchdatacripto}
            className="bg-indigo-600 hover:bg-indigo-500 transition-colors duration-300 text-white py-3 px-6 rounded-xl shadow-md"
          >
            Cargar datos
          </button>
        </div>

        <div className="col-span-4 order-2 md:order-1">
          <div className="bg-gray-800 p-2 md:p-6 rounded-2xl shadow-lg overflow-auto max-h-[600px]">
            <h2 className="text-xl font-semibold mb-4 ml-4 text-gray-200">
              {loadedCrypto} / {loadedFiat}
            </h2>

            <h2 className="text-xl font-semibold mb-4 ml-4 text-gray-200">
              ({rangoLabel[range]})
            </h2>

            {rawData ? (
              <ChartCripto data={getFilteredData()} />
            ) : (
              <div>
                <p className="my-5 text-gray-500">No hay datos cargados</p>
                <p className="text-gray-500">Presiona el botón &quot;Cargar datos&quot;</p>
              </div>
            )}
          </div>

          <div className="bg-gray-800 p-4 mt-5 rounded-xl shadow-inner text-gray-400">
            <span className="block text-sm">Advertencia</span>
            <p className="mt-2 text-xs text-gray-500">
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

      {showLimitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg max-w-md text-center">
            <h2 className="text-xl font-bold text-red-400 mb-4">Límite alcanzado</h2>
            <p className="text-sm text-gray-300 mb-4">
              Se ha alcanzado el límite diario de la API de CryptoCompare.
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
