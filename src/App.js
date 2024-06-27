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
      <div className="space-y-4 max-w-xs w-full">
        <h1 className="text-xl font-bold text-center">WEB APPS</h1>
        <p>{message}</p>
        {startAppParam && <p>Valor del parámetro startapp: {startAppParam}</p>}
        {userId && <p>Tu ID de Telegram es: {userId}</p>}
        {/* Utiliza la imagen minero1.jpg desde la carpeta public */}
        <img src="minero1.jpg" alt="Mining Plan" className="mx-auto w-full" />
        <button className="bg-money-green hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">
          UPGRADE
        </button>
      </div>
      <footer className="text-center text-gray-400 text-sm mt-6">
        @ASDAS2NBBOT
        <br/>
        Please see the manual.
      </footer>
    </div>
  );
}

export default App;
