import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Cart, Products } from './pages';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Products} />
    <Route path="/products" component={Products} />
    <Route path="/cart" component={Cart} />
  </Switch>
);

export default Routes;
