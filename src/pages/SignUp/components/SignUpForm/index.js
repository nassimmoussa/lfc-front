import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { useStyles } from '../../styles';

const SignUpForm = () => {
  const classes = useStyles();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler} noValidate>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="name"
        label="Nome"
        name="name"
        autoComplete="name"
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="E-mail"
        name="email"
        autoComplete="email"
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
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password-confirmation"
        label="Confirma a senha"
        type="password"
        id="password-confirmation"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Enviar
      </Button>
    </form>
  );
};

export default SignUpForm;
