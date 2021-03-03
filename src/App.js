import React from 'react';
import useDocumentTitle from './hooks/useDocumentTitle';
import './App.css';
import useLocalStorage from './hooks/useLocalStorage';
import useOnlineStatus from './hooks/useOnlineStatus';

export default function App () {
  const documentTitle = useDocumentTitle ('React Home Work 4');
  const [options, setOptions] = useLocalStorage ('opts', {
    autoplay: true,
    value: 10,
  });
  const [name, setName] = useLocalStorage ('name', '');
  const {checkOnlineState} = useOnlineStatus ();

  return (
    <div className="App">
      <input
        type="text"
        value={name}
        onChange={e => setName (e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={options.autoplay}
          onChange={() =>
            setOptions ({...options, autoplay: !options.autoplay})}
        />
        Autoplay
      </label>
      <button className="check-online-btn" onClick={checkOnlineState}>
        Check Online State
      </button>
    </div>
  );
}
