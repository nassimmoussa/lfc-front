/* eslint-disable react/prop-types */
import React from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import { useStyles } from '../../styles';

const LEActivity = ({ lE, onResponse, studentResponse }) => {
  const classes = useStyles();

  const getTrueButtonClasses = () => {
    if (!studentResponse) {
      return classes.activityBtn;
    }

    const btnClasses = [classes.activityBtn];
    if (lE.result) {
      btnClasses.push(classes.correctButton);
    }

    if (!lE.result && studentResponse.response === 'TRUE') {
      btnClasses.push(classes.wrongButton);
    }

    return btnClasses.join(' ');
  };

  const getFalseButtonClasses = () => {
    if (!studentResponse) {
      return classes.activityBtn;
    }

    const btnClasses = [classes.activityBtn];
    if (lE.result && studentResponse.response === 'FALSE') {
      btnClasses.push(classes.wrongButton);
    }

    if (!lE.result) {
      btnClasses.push(classes.correctButton);
    }

    return btnClasses.join(' ');
  };

  const renderVariables = () =>
    lE.variables.map((variable) => (
      <span key={variable.id} className={classes.activityVariables}>
        {variable.name} = {variable.value}
      </span>
    ));

  const renderResponseStatus = () => {
    if (!studentResponse) {
      return '';
    }
    return studentResponse.correct ? (
      <Typography variant="subtitle1" className={classes.correctResponse}>
        Resposta correta
      </Typography>
    ) : (
      <Typography variant="subtitle1" className={classes.wrongResponse}>
        Resposta errada
      </Typography>
    );
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
            className={getTrueButtonClasses()}
            onClick={() => onResponse('TRUE')}
            disabled={!!studentResponse}
          >
            Verdadeiro
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={getFalseButtonClasses()}
            onClick={() => onResponse('FALSE')}
            disabled={!!studentResponse}
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
