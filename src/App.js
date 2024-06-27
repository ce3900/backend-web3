import React, { useEffect, useState } from 'react';

function App() {
  const [userId, setUserId] = useState(null);
  const [startAppParam, setStartAppParam] = useState(null);
  const [message, setMessage] = useState('Cargando...');

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      // Obtener el parámetro startapp de la URL
      const urlParams = new URLSearchParams(window.Telegram.WebApp.initData);
      let startApp = urlParams.get('startapp');

      // Obtener el parámetro start_param desde initData
      const initDataUnsafe = window.Telegram.WebApp.initDataUnsafe;
      if (initDataUnsafe && initDataUnsafe.start_param) {
        startApp = initDataUnsafe.start_param;
      }
      setStartAppParam(startApp);

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
      <h1>WEB APPS</h1>
      <p>{message}</p>
      {startAppParam !== null && <p>Valor del parámetro startapp: {startAppParam}</p>}
      <p>Tu ID de Telegram es: {userId}</p>
    </div>
  );
}

export default App;
