import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { newLogin } from 'store/modules/room/actions';

import StudentList from './components/StudentList';

import { useStyles } from './styles';

const ProfessorRoom = ({ socket }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  socket.on('room:new:login', ({ cpf }) => {
    dispatch(newLogin(cpf));
  });

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
            <StudentList />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Paper className={classes.paper}>Professor Room</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

ProfessorRoom.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  socket: PropTypes.object.isRequired,
};

export default ProfessorRoom;
