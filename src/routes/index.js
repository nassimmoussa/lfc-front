import React from 'react';
import { Switch } from 'react-router-dom';
import ROUTER_PATHS from 'constants/router';
import Home from 'pages/Home';
import Login from 'pages/Login';
import SignUp from 'pages/SignUp';
import ForgotPassword from 'pages/ForgotPassword';
import EditProfile from 'pages/profile/Edit';
import Students from 'pages/Students';
import LogicExpressions from 'pages/LogicExpressions';
import VirtualRoom from 'pages/VirtualRoom';
import Route from './Route';

const Routes = () => (
  <Switch>
    <Route
      exact
      path={`${ROUTER_PATHS.VIRTUAL_ROOM}/:roomId`}
      component={VirtualRoom}
      isRoom
    />
    <Route
      exact
      path={ROUTER_PATHS.LOGIC_EXPRESSIONS}
      component={LogicExpressions}
      isPrivate
    />

    <Route exact path={ROUTER_PATHS.STUDENTS} component={Students} isPrivate />
    <Route
      exact
      path={ROUTER_PATHS.PROFILE}
      component={EditProfile}
      isPrivate
    />
    <Route exact path={ROUTER_PATHS.HOME} component={Home} isPrivate />
    <Route path={ROUTER_PATHS.LOGIN} component={Login} />
    <Route path={ROUTER_PATHS.SIGN_UP} component={SignUp} />
    <Route path={ROUTER_PATHS.FORGOT_PASS} component={ForgotPassword} />
  </Switch>
);

export default Routes;
