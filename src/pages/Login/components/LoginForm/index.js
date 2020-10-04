import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ROUTER_PATHS from 'constants/router';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import {
  authIsLoadingSelector,
  authHasErrorSelector,
  authErrorSelector,
} from 'store/modules/auth/selectors';
import { authLoginLoadAction } from 'store/modules/auth/actions';

import { useStyles } from '../../styles';

const LoginForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoading = useSelector(authIsLoadingSelector);
  const authHasError = useSelector(authHasErrorSelector);
  const authError = useSelector(authErrorSelector);

  const submitHandler = (values) => {
    dispatch(authLoginLoadAction(values));
  };

  const redirectToForgotPasswordUpHandler = () => {
    history.push(ROUTER_PATHS.FORGOT_PASS);
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={submitHandler}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('email inválido')
          .required('Campo obrigatório'),
        password: Yup.string()
          .min(6, 'senha deve ser mais que 6 caracteres')
          .required('Campo obrigatório'),
      })}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              error={errors.email && touched.email}
              helperText={errors.email && touched.email && errors.email}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
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
              error={errors.password && touched.password}
              helperText={
                errors.password && touched.password && errors.password
              }
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <Button
              variant="text"
              color="primary"
              onClick={redirectToForgotPasswordUpHandler}
            >
              Esqueceu a senha?
            </Button>

            {authHasError ? (
              <Typography
                variant="button"
                display="block"
                color="error"
                align="center"
              >
                {authError.message}
              </Typography>
            ) : null}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={isLoading}
            >
              login
            </Button>
          </form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
