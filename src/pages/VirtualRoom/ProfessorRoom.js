import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Timer from 'components/Timer';

import { newLogin, roomCleanup, roomUpdate } from 'store/modules/room/actions';
import {
  activityStartedSelector,
  activityDoneSelector,
} from 'store/modules/room/selectors';
import {
  lEIndexLoadAction,
  lECleanUpAction,
} from 'store/modules/logicExpressions/actions';

import useModal from 'hooks/useModal';

import StudentList from './components/StudentList';
import AddAtcivityModal from './components/AddAtcivityModal';
import ProfessorActivityList from './components/ProfessorActivityList';
import RankedStudentsTable from './components/RankedStudentsTable';

import { useStyles } from './styles';

const ProfessorRoom = ({ socket }) => {
  const { roomId } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();
  const activityStarted = useSelector(activityStartedSelector);
  const activityDone = useSelector(activityDoneSelector);
  const [
    isOpenAddActivityModal,
    closeAddActivityModal,
    openAddActivityModal,
  ] = useModal();
  const [minutes, setMinutes] = useState();
  const [minutesError, setMinutesError] = useState();

  useEffect(() => {
    if (socket) {
      socket.on('room:new:login', ({ cpf }) => {
        dispatch(newLogin(cpf));
      });

      socket.on('room:add:activity:success', ({ room }) => {
        dispatch(roomUpdate(room));
      });

      socket.on('room:remove:activity:success', ({ room }) => {
        dispatch(roomUpdate(room));
      });
    }
  }, [socket, dispatch]);

  useEffect(() => {
    dispatch(lEIndexLoadAction());
    return () => {
      dispatch(roomCleanup());
      dispatch(lECleanUpAction());
    };
  }, [dispatch]);

  const startActivityHandler = () => {
    if (!minutes) {
      setMinutesError('informe a quantidade de minutos');
    } else {
      socket.emit('room:start:activity', { roomId, minutes });
      setMinutesError();
    }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
            <StudentList />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={9}>
          {activityDone ? (
            <Paper className={classes.paper}>
              <RankedStudentsTable />
            </Paper>
          ) : null}

          <Paper className={classes.paper}>
            <div className={classes.navRight}>
              <div className="">
                {activityStarted ? (
                  <Timer />
                ) : (
                  <TextField
                    id="standard-number"
                    label="Quantidade de minutos"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    error={minutesError}
                    helperText={minutesError}
                    value={minutes}
                    onChange={(e) => setMinutes(e.target.value)}
                  />
                )}

                <Button
                  className={classes.addButton}
                  onClick={startActivityHandler}
                  variant="text"
                  disabled={activityStarted}
                >
                  começar a dinâmica
                </Button>
              </div>

              <Button
                className={classes.addButton}
                onClick={openAddActivityModal}
                disabled={activityStarted}
              >
                + ADICIONAR ATIVIDADE
              </Button>
            </div>

            <ProfessorActivityList socket={socket} />
          </Paper>
        </Grid>
      </Grid>

      <AddAtcivityModal
        open={isOpenAddActivityModal}
        closeHandler={closeAddActivityModal}
        socket={socket}
      />
    </div>
  );
};

ProfessorRoom.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  socket: PropTypes.object.isRequired,
};

export default ProfessorRoom;
