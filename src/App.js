import React, { useEffect, useState } from 'react';

function App() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Verifica que el objeto Telegram.WebApp está disponible
    if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe) {
      const initDataUnsafe = window.Telegram.WebApp.initDataUnsafe;
      const user = initDataUnsafe.user;
      
      if (user) {
        setUserId(user.id);
      } else {
        setUserId('Usuario no identificado');
      }
    } else {
      setUserId('Telegram Web App no está disponible');
    }
  }, []);

  return (
    <div>
      <h1>Bienvenido a la Web App de Telegram</h1>
      <p>Tu ID de Telegram es: {userId}</p>
    </div>
  );
}

export default App;
