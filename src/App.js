import React, { useEffect, useState } from 'react';
import './index.css';

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
          setMessage(`Tu IDda de Telegram es: ${initDataUnsafe.user.id}`);
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
      <div className="w-full max-w-sm bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-2">WEB APPS</h1>
        <p className="mb-4">{message}</p>
        <div className="bg-gray-700 p-4 rounded-lg shadow">
          {userId && <p>Tu ID de Telegram es: {userId}</p>}
          {startAppParam && <p>Valor del parámetro startapp: {startAppParam}</p>}
          <img src="minero1.jpg" alt="Mining Plan" className="mx-auto w-32 h-32 rounded-full mt-3" />
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <button className="bg-money-green hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Share</button>
          <button className="bg-money-green hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Withdraw</button>
          <button className="bg-money-green hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Live Payments</button>
        </div>
        <div className="text-left mt-4">
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
