import React from 'react';
import PropTypes from 'prop-types';

const DefaultLayout = ({ children }) => {
  return <>{children}</>;
};

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DefaultLayout;
