import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import FoodDetails from '../containers/FoodDetails';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/details" component={FoodDetails} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
