import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Cart, ProductList } from './pages';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ProductList} />
    <Route path="/products" component={ProductList} />
    <Route path="/cart" component={Cart} />
  </Switch>
);

export default Routes;
