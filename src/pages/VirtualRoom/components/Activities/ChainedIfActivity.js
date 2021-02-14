/* eslint-disable react/prop-types */
import React from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import { useStyles } from '../../styles';

const ChainedIfActivity = ({ lE, lE2 }) => {
  const classes = useStyles();

  const renderVariables = () => {
    const variables = [
      ...lE.variables,
      ...lE2.variables.filter(
        (v1) => !lE.variables.find((v2) => v2.name === v1.name)
      ),
    ];

    return variables.map((variable) => (
      <span key={variable.id} className={classes.activityVariables}>
        {variable.name} = {variable.value}
      </span>
    ));
  };

  return (
    <div className={classes.activityContainer}>
      <Paper
        elevation={3}
        className={`${classes.activityCard} ${classes.activityLeftCard}`}
      >
        <Typography variant="h5" gutterBottom>
          Expressão:
        </Typography>
        <div className={classes.activityExpression}>
          <Typography variant="h5" gutterBottom>
            if ({lE.text}) {'{'}
          </Typography>
          <Button variant="contained" color="primary">
            Bloco a ser executado
          </Button>
          <Typography variant="h5" gutterBottom>
            {'}'} else if({lE2.text}) {'{'}
          </Typography>
          <Button variant="contained" color="primary">
            Bloco a ser executado
          </Button>
          <Typography variant="h5" gutterBottom>
            {'}'} else {'{'}
          </Typography>
          <Button variant="contained" color="primary">
            Bloco a ser executado
          </Button>
          <Typography variant="h5" gutterBottom>
            {'}'}
          </Typography>
        </div>
      </Paper>
      <Paper
        elevation={3}
        className={`${classes.activityCard} ${classes.activityRightCard}`}
      >
        <Typography variant="h4" gutterBottom>
          Variaveis
        </Typography>
        {renderVariables()}
      </Paper>
    </div>
  );
};

export default ChainedIfActivity;
