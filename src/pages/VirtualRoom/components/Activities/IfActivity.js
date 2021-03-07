/* eslint-disable react/prop-types */
import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import { useStyles } from '../../styles';

const IfActivity = ({ lE, onResponse, studentResponse, activityDone }) => {
  const classes = useStyles();

  const renderVariables = () =>
    lE.variables.map((variable) => (
      <span key={variable.id} className={classes.activityVariables}>
        {variable.name} = {variable.value}
      </span>
    ));

  // eslint-disable-next-line consistent-return
  const getFirstButtonClasses = () => {
    if (!studentResponse) {
      return classes.activityBtn;
    }

    if (lE.result) {
      return classes.correctButton;
    }

    if (!lE.result && studentResponse.response === 'FIRST') {
      return classes.wrongButton;
    }
  };

  // eslint-disable-next-line consistent-return
  const getSecondButtonClasses = () => {
    if (!studentResponse) {
      return classes.activityBtn;
    }

    if (lE.result && studentResponse.response === 'SECOND') {
      return classes.wrongButton;
    }

    if (!lE.result) {
      return classes.correctButton;
    }
  };

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
        <div className={classes.activityExpression}>
          <Typography variant="h5" gutterBottom>
            if ({lE.text}) {'{'}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={getFirstButtonClasses()}
            onClick={() => onResponse('FIRST')}
            disabled={!!studentResponse || activityDone}
          >
            Bloco a ser executado
          </Button>
          <Typography variant="h5" gutterBottom>
            {'}'} else {'{'}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={getSecondButtonClasses()}
            onClick={() => onResponse('SECOND')}
            disabled={!!studentResponse || activityDone}
          >
            Bloco a ser executado
          </Button>
          <Typography variant="h5" gutterBottom>
            {'}'}
          </Typography>
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

export default IfActivity;
