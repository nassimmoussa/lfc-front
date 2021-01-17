import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';

import {
  lEIndexLoadAction,
  lECleanUpAction,
} from 'store/modules/logicExpressions/actions';

import LogicExpressionsList from './components/LogicExpressionsList';

import { useStyles } from './styles';

const LogicExpressions = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(lEIndexLoadAction());
    return () => {
      dispatch(lECleanUpAction());
    };
  }, [dispatch]);

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
