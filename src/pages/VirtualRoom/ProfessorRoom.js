import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { newLogin, roomCleanup, roomUpdate } from 'store/modules/room/actions';
import {
  lEIndexLoadAction,
  lECleanUpAction,
} from 'store/modules/logicExpressions/actions';

import useModal from 'hooks/useModal';

import StudentList from './components/StudentList';
import AddAtcivityModal from './components/AddAtcivityModal';
import ProfessorActivityList from './components/ProfessorActivityList';

import { useStyles } from './styles';

const ProfessorRoom = ({ socket }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
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
          <Paper className={classes.paper}>
            <div className={classes.navRight}>
              <div className="">
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

                <Button
                  className={classes.addButton}
                  onClick={startActivityHandler}
                  variant="text"
                >
                  começar a dinâmica
                </Button>
              </div>

              <Button
                className={classes.addButton}
                onClick={openAddActivityModal}
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
