import React, { useEffect, useState } from 'react';

function App() {
  const [userId, setUserId] = useState(null);
  const [startAppParam, setStartAppParam] = useState(null);
  const [message, setMessage] = useState('Cargando...');

  useEffect(() => {
    if (window.Telegram.WebApp) {
      const urlParams = new URLSearchParams(window.Telegram.WebApp.initData);
      let startApp = urlParams.get('startapp');
      setStartAppParam(startApp);

      if (window.Telegram.WebApp.initDataUnsafe && window.Telegram.WebApp.initDataUnsafe.user) {
        setUserId(window.Telegram.WebApp.initDataUnsafe.user.id);
        setMessage(`Tu ID de Telegram es: ${window.Telegram.WebApp.initDataUnsafe.user.id}`);
      } else {
        setMessage('Usuario no identificado o datos iniciales no disponibles');
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
