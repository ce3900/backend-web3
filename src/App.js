import React, { useEffect, useState } from 'react';

function App() {
  const [userId, setUserId] = useState(null);
  const [startAppParam, setStartAppParam] = useState(null);
  const [message, setMessage] = useState('Cargando...');

  useEffect(() => {
    if (window.Telegram.WebApp) {
      // Asumimos que start_param siempre está en initDataUnsafe, si está disponible
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
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <h1 className="text-xl font-bold text-center text-gray-900">WEB APPS</h1>
      <p className="text-center text-gray-600">{message}</p>
      {startAppParam && <p className="text-center text-green-500">Valor del parámetro startapp: {startAppParam}</p>}
      {userId && <p className="text-center text-blue-500">Tu ID de Telegram es: {userId}</p>}
    </div>
  );
}

export default App;
