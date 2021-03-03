import {useEffect, useState} from 'react';

export default function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(null);

  const checkOnlineState = () => {
    if (navigator.onLine) {
      setIsOnline(true);
      alert('Доступ к сети есть');
    } else {
      alert('Нет доступа к сети');
      setIsOnline(false);
    }
  };
  useEffect(() => {
    window.addEventListener('online', checkOnlineState);
    return () => {
      window.removeEventListener('online', checkOnlineState);
    };
  });

  return {isOnline, checkOnlineState};
}
