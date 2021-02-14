import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { newLogin } from 'store/modules/room/actions';
import { loggedStudentSelector } from 'store/modules/room/selectors';

import StudentList from './components/StudentList';

import StudentLogin from './components/StudentLogin';
import Activities from './components/Activities';
import { useStyles } from './styles';

const StudentRoom = ({ socket }) => {
  const classes = useStyles();
  const loggedStudent = useSelector(loggedStudentSelector);
  const dispatch = useDispatch();

  if (!loggedStudent) {
    return <StudentLogin socket={socket} />;
  }

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
          <Paper className={classes.paper}>
            <Typography variant="h3">Atividades</Typography>
            <Activities socket={socket} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

StudentRoom.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  socket: PropTypes.object.isRequired,
};

export default StudentRoom;
