import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  authIsLoadingSelector,
  userProfileSelector,
} from 'store/modules/auth/selectors';
import { authUpdateLoadAction } from 'store/modules/auth/actions';

import { Formik } from 'formik';
import * as Yup from 'yup';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { useStyles } from '../../styles';

const EditProfileForm = () => {
  const classes = useStyles();
  const isLoading = useSelector(authIsLoadingSelector);
  const userProfile = useSelector(userProfileSelector);
  const dispatch = useDispatch();

  const submitHandler = (values) => {
    dispatch(authUpdateLoadAction(values));
  };

  return (
    <Formik
      initialValues={{
        email: userProfile.email,
        name: userProfile.name,
        password: '',
        'password-confirmation': '',
      }}
      onSubmit={submitHandler}
      validationSchema={Yup.object().shape({
        name: Yup.string(),
        email: Yup.string().email('email inválido'),
        password: Yup.string().min(6, 'senha deve ser mais que 6 caracteres'),
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
            {false ? (
              <Typography
                variant="button"
                display="block"
                color="error"
                align="center"
              >
                error message
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
              Salvar
            </Button>
          </form>
        );
      }}
    </Formik>
  );
};

export default EditProfileForm;
