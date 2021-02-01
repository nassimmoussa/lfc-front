import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { studentLoginSuccess } from 'store/modules/room/actions';

import { format } from 'helpers/formatter';
import { useStyles } from '../../styles';

const StudentLoginModal = ({ socket }) => {
  const { roomId } = useParams();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [CPF, setCPF] = useState('');
  const [error, setError] = useState(false);
  const validator = Yup.string().min(11).max(11).required();

  socket.on('room:login:success', ({ room, cpf }) => {
    dispatch(studentLoginSuccess(room, cpf));
  });

  const validate = () => {
    setError(!validator.isValidSync(CPF));
  };

  const loginHandler = () => {
    if (!error) {
      socket.emit('room:login', { CPF, roomId });
    }
  };

  const onChange = (e) => {
    setCPF(e.target.value);
    if (CPF.length === 10) {
      setError(false);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Typography variant="h4" align="center">
          Digite seu CPF para entrar na sala
        </Typography>

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="CPF"
          label="CPF"
          name="CPF"
          error={error}
          onChange={onChange}
          value={CPF.length === 11 ? format(CPF, '999.999.999-99') : CPF}
          autoFocus
          onBlur={validate}
        />
        <Typography align="center">
          <Button
            variant="outlined"
            size="large"
            color="primary"
            onClick={loginHandler}
            disabled={!validator.isValidSync(CPF)}
          >
            ENTRAR
          </Button>
        </Typography>
      </div>
    </div>
  );
};

StudentLoginModal.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  socket: PropTypes.object.isRequired,
};

export default StudentLoginModal;
