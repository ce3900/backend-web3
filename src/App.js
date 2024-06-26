import React, { useEffect, useState } from 'react';

function App() {
  const [userId, setUserId] = useState(null);
  const [message, setMessage] = useState('Cargando...');

  useEffect(() => {
    console.log('Telegram WebApp:', window.Telegram && window.Telegram.WebApp);
    console.log('InitDataUnsafe:', window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe);

    if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe) {
      const initDataUnsafe = window.Telegram.WebApp.initDataUnsafe;
      const user = initDataUnsafe.user;

      if (user) {
        setUserId(user.id);
        setMessage(`Tu ID de Telegram es: ${user.id}`);
      } else {
        setMessage('Usuario no identificado');
      }
    } else {
      setMessage('Esta aplicación solo funciona dentro de Telegram');
    }
  }, []);

  return (
    <div>
      <h1>Bienvenido a la Web App de Telegram</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
