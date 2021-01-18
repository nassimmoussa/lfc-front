/* eslint-disable react/prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import VariableInput from './VariableInput';
import { useStyles } from '../../styles';

const LEForm = ({
  submitActionProp,
  closeActionProp,
  submitBtnText,
  initialValues,
}) => {
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
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={Yup.object().shape({
        title: Yup.string().min(1).required('Campo obrigatório'),
        text: Yup.string().min(1).required('Campo obrigatório'),
        result: Yup.boolean().required('Campo obrigatório'),
        variables: Yup.array()
          .of(
            Yup.object().shape({
              name: Yup.string().required('Nome de variavel é obrigatório'),
              value: Yup.string().required('Valor de variavel é obrigatório'),
            })
          )
          .required(),
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
          setFieldValue,
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <div>
              <TextField
                className={classes.inputField}
                type="text"
                id="title"
                label="Titulo"
                variant="outlined"
                color="secondary"
                fullWidth
                error={errors.title && touched.title}
                helperText={errors.title && touched.title && errors.title}
                value={values.title}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <TextField
                className={classes.inputField}
                type="text"
                id="text"
                label="Texto"
                variant="outlined"
                color="secondary"
                fullWidth
                error={errors.text && touched.text}
                helperText={errors.text && touched.text && errors.text}
                value={values.text}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </div>
            <Divider />

            <div className={classes.addVariableBtn}>
              <Typography variant="h6" className={classes.boldText}>
                Quantidade de Variávies: {values.variables.length}
              </Typography>

              <Button
                variant="outlined"
                color="primary"
                onClick={() =>
                  setFieldValue('variables', [
                    ...values.variables,
                    { name: '', value: '', id: values.variables.length + 1 },
                  ])
                }
              >
                + addicionar variavel
              </Button>
            </div>

            {values.variables.map((v, index) => (
              <VariableInput
                key={v.id}
                index={index}
                errors={errors}
                touched={touched}
                values={values}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
            ))}

            <Divider />

            <div className={classes.resultInputContainer}>
              <Typography variant="h6" className={classes.boldText}>
                Resultado:
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={values.result}
                    onChange={handleChange}
                    name="result"
                    color="primary"
                  />
                }
                label={values.result ? 'Verdadeiro' : 'falso'}
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

LEForm.defaultProps = {
  initialValues: {
    id: '',
    text: '',
    result: false,
    variables: [],
  },
};

LEForm.propTypes = {
  submitActionProp: PropTypes.func.isRequired,
  closeActionProp: PropTypes.func.isRequired,
  submitBtnText: PropTypes.string.isRequired,
  initialValues: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    result: PropTypes.bool.isRequired,
    variables: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.string,
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      })
    ).isRequired,
  }),
};

export default LEForm;
