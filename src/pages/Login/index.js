import React from 'react';
import { useHistory } from 'react-router-dom';
import ROUTER_PATHS from 'constants/router';

import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import LoginForm from './components/LoginForm';

import { useStyles } from './styles';

const Login = () => {
  const classes = useStyles();
  const history = useHistory();

  const redirectToSignUpHandler = () => {
    history.push(ROUTER_PATHS.SIGN_UP);
  };

  return (
    <>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        login
      </Typography>
      <LoginForm />
      <div className={classes.signUpedirect}>
        <Button
          variant="text"
          color="primary"
          onClick={redirectToSignUpHandler}
        >
          não possui conta? cadastre-se
        </Button>
      </div>
    </>
  );
};

export default Login;
