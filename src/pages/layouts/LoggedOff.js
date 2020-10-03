import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

import { useStyles } from './styles';

const LoggedOff = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.loggedOffRootContainer}>
      <div className={classes.loggedOffImage} />
      <Paper elevation={6} square className={classes.loggedOffFormContainer}>
        {children}
      </Paper>
    </div>
  );
};

LoggedOff.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LoggedOff;
