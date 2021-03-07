import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Timer from 'components/Timer';

import { newLogin } from 'store/modules/room/actions';
import {
  loggedStudentSelector,
  activityStartedSelector,
} from 'store/modules/room/selectors';

import StudentList from './components/StudentList';

import StudentLogin from './components/StudentLogin';
import Activities from './components/Activities';
import { useStyles } from './styles';

const StudentRoom = ({ socket }) => {
  const classes = useStyles();
  const loggedStudent = useSelector(loggedStudentSelector);
  const activityStarted = useSelector(activityStartedSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (socket) {
      socket.on('room:new:login', ({ cpf }) => {
        dispatch(newLogin(cpf));
      });
    }
  }, [socket, dispatch]);

  if (!loggedStudent) {
    return <StudentLogin socket={socket} />;
  }

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
            <div className={classes.studentTimerContainer}>
              <Typography variant="h3">Atividades</Typography>
              {activityStarted ? <Timer /> : null}
            </div>
            {activityStarted ? (
              <Activities socket={socket} />
            ) : (
              <Typography variant="h5">
                As atividades ainda não foram liberadas pelo professor...
                aguarde o início da dinâmica
              </Typography>
            )}
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
