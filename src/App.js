import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {Container, Menu, MenuItem} from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';
import Main from './components/main';
import Planets from './components/planets';
import Heroes from './components/heroes';
import HeroPage from './components/heroPage';

function App () {
  return (
    <Container>
      <Router>
        <h1 className = 'main-title'>Star Wars DB</h1>
        <Menu>
          <NavLink to="/">
            <MenuItem className="menu-item">Main</MenuItem>
          </NavLink>
          <NavLink to="/planets"><MenuItem>Planets</MenuItem></NavLink>
          <NavLink to="/heroes"><MenuItem>Heroes</MenuItem></NavLink>
        </Menu>
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/planets" exact>
            <Planets />
          </Route>
          <Route  path="/heroes" exact>
            <Heroes />
          </Route>
          <Route path="/heroes:heroId">
            <HeroPage />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
