import React from 'react';
import useDocumentTitle from './hooks/useDocumentTitle';
import './App.css';
import useLocalStorage from './hooks/useLocalStorage';
import useOnlineStatus from './hooks/useOnlineStatus';

export default function App () {

  const documentTitle = useDocumentTitle ('React Home Work 4');
  const {optinsState,handleSetState} = useLocalStorage ('user',{name: 'Ivan',surname:'Pavlenko'});
  const {checkOnlineState} = useOnlineStatus ();

  return (
    <div className="App">
      <input
        value={optinsState}
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
