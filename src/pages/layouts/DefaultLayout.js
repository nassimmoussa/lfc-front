import React from 'react';
import PropTypes from 'prop-types';

import Appbar from 'components/AppBar';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Appbar />
      {children}
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DefaultLayout;
