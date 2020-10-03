import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import DefaultLayout from 'pages/layouts/DefaultLayout';
import LoggedOff from 'pages/layouts/LoggedOff';
import { store } from '../store';

const RouteWrapper = ({ component: Component, isPrivate, ...rest }) => {
  const signed = !!store.getState().auth.data.token;

  if (!signed && isPrivate) {
    return <Redirect to="/login" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/" />;
  }
  const Layout = signed ? DefaultLayout : LoggedOff;

  return (
    <Layout>
      <Route {...rest} component={Component} />
    </Layout>
  );
};

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

export default RouteWrapper;
