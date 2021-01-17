import React from 'react';

import Button from '@material-ui/core/Button';

import LogicExpressionsList from './components/LogicExpressionsList';

import { useStyles } from './styles';

const LogicExpressions = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.navRight}>
        <Button className={classes.addButton}>+ NOVA EXPRESSÃO</Button>
      </div>
      <LogicExpressionsList />
    </div>
  );
};

export default LogicExpressions;
