import { Container, Header, Menu } from "semantic-ui-react";
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";
import React, { useEffect } from "react";
import Products from "./containers/Products";
import Cart from "./containers/Cart";
import Register from "./containers/Register";
import NotFoundPage from "./containers/404";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/slices/products";
import Login from "./containers/Login";
import Navbar from "./components/Navbar";
import Home from "./containers/Home";
import { getCurrentAuthState } from "./redux/selectors/auth";
import DimmerLoader from "../../home-works/hw4/blog-v2/components/DimmerLoader";
import { fetchSession } from "./redux/slices/auth";

export default function Blog() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchSession());
  }, []);
  const { hasLoaded } = useSelector(getCurrentAuthState);
  if (!hasLoaded) {
    return <DimmerLoader active={true} />
  }
  return (
    <Container>
      <Router>
        <Header>
          <NavLink to='/' activeClassName='active-nav'>Shop</NavLink>
        </Header>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/signup' exact component={Register} />
          <Route path='/signin' exact component={Login} />
          <Route path='/products' exact component={Products} />
          <Route path='/cart' component={Cart} />
          <Route path='*' component={NotFoundPage} />
        </Switch>
      </Router>
    </Container>
  )
}
