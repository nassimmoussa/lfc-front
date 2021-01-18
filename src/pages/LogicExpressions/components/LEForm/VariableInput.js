/* eslint-disable react/prop-types */

import React from 'react';

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../../styles';

const VariableInput = ({
  index,
  errors,
  touched,
  values,
  handleChange,
  handleBlur,
}) => {
  const classes = useStyles();
  return (
    <>
      <Typography gutterBottom variant="h6">
        Variavél {index + 1}
      </Typography>
      <div className={classes.variableInputContainer}>
        <TextField
          className={classes.variableInputField}
          type="text"
          id={`variables[${index}].name`}
          label="Nome"
          variant="outlined"
          color="secondary"
          fullWidth
          error={
            errors.variables &&
            touched.variables &&
            errors.variables[index] &&
            touched.variables[index] &&
            touched.variables[index].name &&
            errors.variables[index].name
          }
          helperText={
            errors.variables &&
            touched.variables &&
            errors.variables[index] &&
            touched.variables[index] &&
            touched.variables[index].name &&
            errors.variables[index].name
          }
          value={values.variables[index].name}
          onBlur={handleBlur}
          onChange={handleChange}
        />

        <TextField
          className={classes.variableInputField}
          type="text"
          id={`variables[${index}].value`}
          label="Valor"
          variant="outlined"
          color="secondary"
          fullWidth
          error={
            errors.variables &&
            touched.variables &&
            errors.variables[index] &&
            touched.variables[index] &&
            touched.variables[index].value &&
            errors.variables[index].value
          }
          helperText={
            errors.variables &&
            touched.variables &&
            errors.variables[index] &&
            touched.variables[index] &&
            touched.variables[index].value &&
            errors.variables[index].value
          }
          value={values.variables[index].value}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default VariableInput;
