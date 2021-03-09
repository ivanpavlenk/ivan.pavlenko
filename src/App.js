import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import CW7 from "./class-works/cw7/App";

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        {<CW7 />}
      </div>
    )
  }
}

export default App;
