import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ROUTER_PATHS from 'constants/router';
import Home from 'pages/Home';
import Login from 'pages/Login';

const Routes = () => (
  <Switch>
    <Route exact path={ROUTER_PATHS.HOME} component={Home} />
    <Route path={ROUTER_PATHS.LOGIN} component={Login} />
  </Switch>
);

export default Routes;
