import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { forgotPasswordAction } from 'store/modules/auth/actions';

import { useStyles } from '../../styles';

const ForgotPasswordForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const submitHandler = (values) => {
    dispatch(forgotPasswordAction(values));
  };

  return (
    <Formik
      initialValues={{ email: '' }}
      onSubmit={submitHandler}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('email inválido')
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
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
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
              error={errors.email && touched.email}
              helperText={errors.email && touched.email && errors.email}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
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
      }}
    </Formik>
  );
};

export default ForgotPasswordForm;
