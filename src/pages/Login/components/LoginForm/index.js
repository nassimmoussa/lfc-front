import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { useStyles } from '../../styles';

const LoginForm = () => {
  const classes = useStyles();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const redirectToForgotPasswordUpHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler} noValidate>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="E-mail"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Senha"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <Button
        variant="text"
        color="primary"
        onClick={redirectToForgotPasswordUpHandler}
      >
        Esqueceu a senha?
      </Button>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        login
      </Button>
    </form>
  );
};

export default LoginForm;
