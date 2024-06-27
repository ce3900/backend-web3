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
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <div className="p-4 bg-gray-800 rounded-lg shadow-lg text-center">
        <h1 className="text-xl font-bold mb-2">WEB APPS</h1>
        <p className="mb-4">{message}</p>
        {startAppParam && <p>Valor del parámetro startapp: {startAppParam}</p>}
        {userId && <p>Tu ID de Telegram es: {userId}</p>}
      </div>
      <footer className="text-center text-gray-400 text-sm mt-4">
        @ASDAS2NBBOT
        <br/>
        Please see the manual.
      </footer>
    </div>
  );
}

export default App;
