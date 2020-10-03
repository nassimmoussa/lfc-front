import React from 'react';
import { Switch } from 'react-router-dom';
import ROUTER_PATHS from 'constants/router';
import Home from 'pages/Home';
import Login from 'pages/Login';
import SignUp from 'pages/SignUp';
import Route from './Route';

const Routes = () => (
  <Switch>
    <Route exact path={ROUTER_PATHS.HOME} component={Home} isPrivate />
    <Route path={ROUTER_PATHS.LOGIN} component={Login} />
    <Route path={ROUTER_PATHS.SIGN_UP} component={SignUp} />
  </Switch>
);

export default Routes;
