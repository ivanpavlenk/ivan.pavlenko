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
import Products from './containers/products';
import Cart from './containers/cart';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './Redux/reducers';
import MenuCart from './components/menuCart'

const store = createStore (rootReducer);

function App () {
  return (
    <Provider store={store}>
      <Container>
        <Router>
          <h1 className="main-title">Product Cart</h1>
          <div className="menu-inner">
            <Menu>
              <NavLink to="/products"><MenuItem>Products</MenuItem></NavLink>
              <NavLink to="/cart"><MenuItem>Cart</MenuItem></NavLink>
              <MenuCart/>
            </Menu>
          </div>
          <Switch>
            <Route path="/products" exact>
              <Products />
            </Route>
            <Route path="/cart" exact>
              <Cart />
            </Route>
          </Switch>
        </Router>
      </Container>
    </Provider>
  );
}

export default App;
