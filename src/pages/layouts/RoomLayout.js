import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './styles';

const RoomLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <div>
        <AppBar position="static" color="primary">
          <Toolbar className={classes.topBar}>
            <Typography variant="h4" className={classes.title}>
              Lógica Fácil Condicional
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      {children}
    </>
  );
};

RoomLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default RoomLayout;
