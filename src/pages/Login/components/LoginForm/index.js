import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ROUTER_PATHS from 'constants/router';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { useStyles } from '../../styles';

const LoginForm = () => {
  const classes = useStyles();
  const history = useHistory();

  const submitHandler = (values) => {
    console.log(values);
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
      }}
    </Formik>
  );
};

export default LoginForm;

// <form className={classes.form} onSubmit={submitHandler} noValidate>
//         <TextField
//           variant="outlined"
//           margin="normal"
//           required
//           fullWidth
//           id="email"
//           label="E-mail"
//           name="email"
//           autoComplete="email"
//           autoFocus
//         />
//
//       </form>
