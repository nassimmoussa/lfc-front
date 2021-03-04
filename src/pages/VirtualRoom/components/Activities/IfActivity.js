/* eslint-disable react/prop-types */
import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import { useStyles } from '../../styles';

const IfActivity = ({ lE, onResponse }) => {
  const classes = useStyles();

  const renderVariables = () =>
    lE.variables.map((variable) => (
      <span key={variable.id} className={classes.activityVariables}>
        {variable.name} = {variable.value}
      </span>
    ));
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
          <Button
            variant="contained"
            color="primary"
            onClick={() => onResponse('FIRST')}
          >
            Bloco a ser executado
          </Button>
          <Typography variant="h5" gutterBottom>
            {'}'} else {'{'}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => onResponse('SECOND')}
          >
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

export default IfActivity;
