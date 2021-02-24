import {useEffect, useState} from 'react';

export default function useLocalStorage (key, defaultValue) {
  const [state, setState] = useState (() => {
    let value;
    try {
      value = JSON.parse(window.localStorage.getItem(key)) || String (defaultValue)
    } catch (e) {
      value = defaultValue;
    }
    return value;
  });

  const handleSetState = e => {
    setState (e.target.value);
  };

  useEffect (
    () => {
      window.localStorage.setItem(key, JSON.stringify(state));
    },
    [key, state]
  );
  return {state, handleSetState};
}
