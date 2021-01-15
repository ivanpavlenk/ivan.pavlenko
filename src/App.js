import React from 'react';
import useDocumentTitle from './hooks/useDocumentTitle';
import './App.css';
import useLocalStorage from './hooks/useLocalStorage';
import useOnlineStatus from './hooks/useOnlineStatus';

export default function App () {

  const {title, handleChangeTitle} = useDocumentTitle ('Home work 4');
  const {name, handleSetState} = useLocalStorage ('name', 'ivan');
  const {checkOnlineState} = useOnlineStatus ();

  return (
    <div className="App">
      <input value={title} onChange={handleChangeTitle} />
      <input
        value={name}
        placeholder="enter your value for local storage"
        onChange={handleSetState}
      />
      <button 
        className = 'check-online-btn' 
        onClick={checkOnlineState}>
        Check Online State
      </button>
    </div>
  );
}
