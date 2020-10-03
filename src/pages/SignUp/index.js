import React from 'react';
import history from 'services/history';
import ROUTER_PATHS from 'constants/router';

import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import SignUpForm from './components/SignUpForm';

import { useStyles } from './styles';

const SignUp = () => {
  const classes = useStyles();

  const redirectToLoginHandler = () => {
    history.push(ROUTER_PATHS.LOGIN);
  };

  return (
    <>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Cadastre-se
      </Typography>
      <SignUpForm />
      <div className={classes.loginRedirect}>
        <Button variant="text" color="primary" onClick={redirectToLoginHandler}>
          já possui conta? faça login
        </Button>
      </div>
    </>
  );
};

export default SignUp;
