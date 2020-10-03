import React from 'react';
import { useHistory } from 'react-router-dom';
import ROUTER_PATHS from 'constants/router';

import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import ForgotPasswordForm from './components/ForgotPasswordForm';

import { useStyles } from './styles';

const ForgotPassword = () => {
  const classes = useStyles();
  const history = useHistory();

  const redirectToLoginUpHandler = () => {
    history.push(ROUTER_PATHS.LOGIN);
  };

  return (
    <>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        login
      </Typography>
      <ForgotPasswordForm />
      <div className={classes.loginRedirect}>
        <Button
          variant="text"
          color="primary"
          onClick={redirectToLoginUpHandler}
        >
          volta para login
        </Button>
      </div>
    </>
  );
};

export default ForgotPassword;
