/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { format } from 'helpers/formatter';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { useStyles } from '../../styles';

const StudentForm = ({ submitActionProp, closeActionProp, submitBtnText }) => {
  const classes = useStyles();

  const submitHandler = (values) => {
    submitActionProp(values);
  };

  const closeHandler = (handleReset) => {
    handleReset();
    closeActionProp();
  };

  return (
    <Formik
      initialValues={{ name: '', cpf: '' }}
      onSubmit={submitHandler}
      validationSchema={Yup.object().shape({
        name: Yup.string().required('Campo obrigatório'),
        cpf: Yup.string()
          .min(11, 'CPF deve contém 11 caracteres')
          .max(11, 'CPF deve contém 11 caracteres')
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
          handleReset,
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <div>
              <TextField
                className={classes.inputField}
                type="text"
                id="name"
                label="Nome"
                variant="outlined"
                color="secondary"
                fullWidth
                error={errors.name && touched.name}
                helperText={errors.name && touched.name && errors.name}
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <TextField
                className={classes.inputField}
                type="text"
                id="cpf"
                label="CPF"
                variant="outlined"
                color="secondary"
                fullWidth
                error={errors.cpf && touched.cpf}
                helperText={errors.cpf && touched.cpf && errors.cpf}
                value={
                  values.cpf.length === 11
                    ? format(values.cpf, '999.999.999-99')
                    : values.cpf
                }
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </div>

            <div className={classes.cardButtons}>
              <Button
                className={classes.cardButton}
                onClick={() => closeHandler(handleReset)}
                color="primary"
              >
                CANCELAR
              </Button>
              <Button
                className={classes.cardButton}
                onClick={handleSubmit}
                color="primary"
                variant="contained"
              >
                {submitBtnText}
              </Button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

StudentForm.propTypes = {
  submitActionProp: PropTypes.func.isRequired,
  closeActionProp: PropTypes.func.isRequired,
  submitBtnText: PropTypes.string.isRequired,
};

export default StudentForm;
