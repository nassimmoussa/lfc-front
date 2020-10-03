import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { useStyles } from '../../styles';

const ForgotPasswordForm = () => {
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
        id="email"
        label="E-mail"
        name="email"
        autoComplete="email"
        autoFocus
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Enviar nova senha
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;
