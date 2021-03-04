/* eslint-disable react/prop-types */
import React from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import { useStyles } from '../../styles';

const LEActivity = ({ lE }) => {
  const classes = useStyles();

  const renderVariables = () =>
    lE.variables.map((variable) => (
      <span key={variable.id} className={classes.activityVariables}>
        {variable.name} = {variable.value}
      </span>
    ));

  const renderResponseStatus = () => (
    <Typography variant="subtitle1" className={classes.wrongResponse}>
      Resposta errada
    </Typography>
  );

  return (
    <div className={classes.activityContainer}>
      <Paper
        elevation={3}
        className={`${classes.activityCard} ${classes.activityLeftCard}`}
      >
        <Typography variant="h5" gutterBottom>
          Expressão:
        </Typography>

        <Typography
          variant="h5"
          gutterBottom
          className={classes.activityExpression}
          align="center"
        >
          {lE.text}
        </Typography>

        <div className={classes.activityBtnsContainer}>
          <Button
            variant="contained"
            color="primary"
            className={`${classes.activityBtn} ${classes.correctButton}`}
            disabled
          >
            Verdadeiro
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={`${classes.activityBtn} ${classes.wrongButton}`}
            disabled
          >
            Falso
          </Button>
        </div>
        {renderResponseStatus()}
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

export default LEActivity;
