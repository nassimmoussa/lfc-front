import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import DefaultLayout from 'pages/layouts/DefaultLayout';
import LoggedOff from 'pages/layouts/LoggedOff';
import RoomLayout from 'pages/layouts/RoomLayout';
import { store } from '../store';

const RouteWrapper = ({ component: Component, isRoom, isPrivate, ...rest }) => {
  const signed = !!store.getState().auth.data.token;

  if (!signed && isPrivate) {
    return <Redirect to="/login" />;
  }

  if (signed && !isPrivate && !isRoom) {
    return <Redirect to="/" />;
  }
  let Layout;

  if (signed) {
    Layout = DefaultLayout;
  } else if (isRoom) {
    Layout = RoomLayout;
  } else {
    Layout = LoggedOff;
  }

  return (
    <Layout>
      <Route {...rest} component={Component} />
    </Layout>
  );
};

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  isRoom: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  isRoom: false,
};

export default RouteWrapper;
