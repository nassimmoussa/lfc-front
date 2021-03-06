/* eslint-disable react/prop-types */
import React from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import { useStyles } from '../../styles';

const ChainedIfActivity = ({ lE, lE2, onResponse, studentResponse }) => {
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

    if ((lE.result || !lE2.result) && studentResponse.response === 'SECOND')
      return classes.wrongButton;

    if (!lE.result && lE2.result) return classes.correctButton;
  };
  // eslint-disable-next-line consistent-return
  const getThirdButtonClasses = () => {
    if (!studentResponse) {
      return classes.activityBtn;
    }

    if (lE.result && studentResponse.response === 'THIRD')
      return classes.wrongButton;

    if (!lE.result && lE2.result && studentResponse.response === 'THIRD')
      return classes.wrongButton;

    if (!lE.result && !lE2.result) return classes.correctButton;
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
            onClick={() => onResponse('FIRST')}
            className={getFirstButtonClasses()}
            disabled={!!studentResponse}
          >
            Bloco a ser executado
          </Button>
          <Typography variant="h5" gutterBottom>
            {'}'} else if({lE2.text}) {'{'}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => onResponse('SECOND')}
            className={getSecondButtonClasses()}
            disabled={!!studentResponse}
          >
            Bloco a ser executado
          </Button>
          <Typography variant="h5" gutterBottom>
            {'}'} else {'{'}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => onResponse('THIRD')}
            className={getThirdButtonClasses()}
            disabled={!!studentResponse}
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

export default ChainedIfActivity;
