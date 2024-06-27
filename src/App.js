import React, { useEffect, useState } from 'react';

function App() {
  const [userId, setUserId] = useState(null);
  const [startAppParam, setStartAppParam] = useState(null);
  const [message, setMessage] = useState('Cargando...');

  useEffect(() => {
    if (window.Telegram.WebApp) {
      const initDataUnsafe = window.Telegram.WebApp.initDataUnsafe;
      if (initDataUnsafe) {
        if (initDataUnsafe.start_param) {
          setStartAppParam(initDataUnsafe.start_param);
        }
        if (initDataUnsafe.user) {
          setUserId(initDataUnsafe.user.id);
          setMessage(`Tu ID de Telegram es: ${initDataUnsafe.user.id}`);
        } else {
          setMessage('Usuario no identificado o datos iniciales no disponibles');
        }
      } else {
        setMessage('Datos iniciales no seguros no disponibles');
      }
    } else {
      setMessage('Esta aplicación solo funciona dentro de Telegram');
    }
  }, []);

  return (
    <div className="bg-dark-black text-white min-h-screen flex flex-col items-center justify-center p-4">
      <div className="space-y-4 w-full max-w-sm bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold">WEB APPS</h1>
        <p className="text-gray-300">{message}</p>
        {startAppParam && <p>Valor del parámetro startapp: {startAppParam}</p>}
        {userId && <p>Tu ID de Telegram es: {userId}</p>}
        <img src="minero1.jpg" alt="Mining Plan" className="mx-auto w-full py-4" />
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-money-green hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Share</button>
          <button className="bg-money-green hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Withdraw</button>
        </div>
        <button className="bg-money-green hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full mt-3">Live Payments</button>
        <div className="pt-4">
          <h2 className="text-lg font-bold">FAQ</h2>
          <p>How can I withdraw my balance?</p>
          <p>When will my withdrawal be processed?</p>
          <p>About</p>
        </div>
      </div>
      <footer className="text-gray-400 text-sm mt-6">
        @ASDAS2NBBOT
        <br />
        Please see the manual.
      </footer>
    </div>
  );
}

export default App;
