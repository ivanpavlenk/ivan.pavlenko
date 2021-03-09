import React, { useState } from 'react'

export const useLocalStorage = (key, defaultValue) => {

  const [storedValue, setStoredValue] = useState(
    () => {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue
      } catch (error) {
        console.log(error);
        return defaultValue
      }
    });

  const setValue = value => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  };
  return [storedValue, setValue];

};


export function LocalStorageExample() {
  const [name, setName] = useLocalStorage('name', '');
  const [options, setOptions] = useLocalStorage('opts', { autoplay: true, value: 10 });

  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <br/>
      Autoplay - <input type="checkbox" checked={options.autoplay} onChange={() => setOptions({ ...options, autoplay: !options.autoplay })} />
    </div>
  )
}
