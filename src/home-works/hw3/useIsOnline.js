import React, { useState, useEffect } from 'react';

export function useIsOnline() {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {

    setIsOnline(navigator.onLine);

    function updateOnlineStatus() {
      setIsOnline(navigator.onLine);
    }

    window.addEventListener('online',  updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    return () => {
        window.removeEventListener('online',  updateOnlineStatus);
        window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  return isOnline;
}

export function OnlineComponent() {
  const status = useIsOnline();

  return (
    <div>
      Status: <span style={{ color: status ? 'green': 'red' }}>{status ? 'Online': 'Offline'}</span>
    </div>
  )
}

