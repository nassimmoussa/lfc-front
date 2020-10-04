import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import {
  authIsLoadingSelector,
  authHasErrorSelector,
  authErrorSelector,
} from 'store/modules/auth/selectors';
import { authSignUpLoadAction } from 'store/modules/auth/actions';

import { useStyles } from '../../styles';

const SignUpForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isLoading = useSelector(authIsLoadingSelector);
  const authHasError = useSelector(authHasErrorSelector);
  const authError = useSelector(authErrorSelector);

  const submitHandler = (values) => {
    dispatch(authSignUpLoadAction(values));
  };

  return (
    <Formik
      initialValues={{
        email: '',
        name: '',
        password: '',
        'password-confirmation': '',
      }}
      onSubmit={submitHandler}
      validationSchema={Yup.object().shape({
        name: Yup.string().required('Campo obrigatório'),
        email: Yup.string()
          .email('email inválido')
          .required('Campo obrigatório'),
        password: Yup.string()
          .min(6, 'senha deve ser mais que 6 caracteres')
          .required('Campo obrigatório'),
        'password-confirmation': Yup.string().oneOf(
          [Yup.ref('password'), null],
          'as senhas devem ser iguais'
        ),
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
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
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
              error={errors.name && touched.name}
              helperText={errors.name && touched.name && errors.name}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
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
              error={errors.email && touched.email}
              helperText={errors.email && touched.email && errors.email}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
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
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password-confirmation"
              label="Confirma a senha"
              type="password"
              id="password-confirmation"
              error={
                errors['password-confirmation'] &&
                touched['password-confirmation']
              }
              helperText={
                errors['password-confirmation'] &&
                touched['password-confirmation'] &&
                errors['password-confirmation']
              }
              onChange={handleChange}
              onBlur={handleBlur}
              value={values['password-confirmation']}
            />
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
              Enviar
            </Button>
          </form>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;
