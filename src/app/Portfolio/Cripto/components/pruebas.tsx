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