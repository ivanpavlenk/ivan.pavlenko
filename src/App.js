import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {Provider} from 'react-redux';
import store from './redux/createStore';
import HomePage from './containers/homePage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FilesPage from './containers/filesPage';

function App () {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/files">
            <FilesPage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
