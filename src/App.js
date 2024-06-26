import React, { useEffect, useState } from 'react';

function App() {
  const [userId, setUserId] = useState(null);
  const [startAppParam, setStartAppParam] = useState(null);
  const [message, setMessage] = useState('Cargando...');

  useEffect(() => {
    // Obtener el valor del parámetro startapp de la URL
    const urlParams = new URLSearchParams(window.Telegram.WebApp.initData);
    const startApp = urlParams.get('startapp');
    setStartAppParam(startApp);

    if (window.Telegram && window.Telegram.WebApp) {
      const initDataUnsafe = window.Telegram.WebApp.initDataUnsafe;
      if (initDataUnsafe && initDataUnsafe.user) {
        setUserId(initDataUnsafe.user.id);
        setMessage(`Tu ID de Telegram es: ${initDataUnsafe.user.id}`);
      } else {
        setMessage('Usuario no identificado o datos iniciales no disponibles');
      }
    } else {
      setMessage('Esta aplicación solo funciona dentro de Telegram');
    }
  }, []);

  return (
    <div>
      <h1>WEB APP</h1>
      <p>{message}</p>
      {startAppParam && <p>Valor del parámetro startapp: {startAppParam}</p>}
      {userId && <p>Tu ID de Telegram es: {userId}</p>}
    </div>
  );
}

export default App;
