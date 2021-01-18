import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import useModal from 'hooks/useModal';
import Button from '@material-ui/core/Button';

import {
  lEIndexLoadAction,
  lECleanUpAction,
} from 'store/modules/logicExpressions/actions';

import LogicExpressionsList from './components/LogicExpressionsList';
import AddLEModal from './components/AddLEModal';

import { useStyles } from './styles';

const LogicExpressions = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isOpenAddLEModal, closeAddLEModal, openAddLEModal] = useModal();

  useEffect(() => {
    dispatch(lEIndexLoadAction());
    return () => {
      dispatch(lECleanUpAction());
    };
  }, [dispatch]);

  return (
    <div>
      <div className={classes.navRight}>
        <Button className={classes.addButton} onClick={openAddLEModal}>
          + NOVA EXPRESSÃO
        </Button>
      </div>
      <LogicExpressionsList />
      <AddLEModal open={isOpenAddLEModal} closeHandler={closeAddLEModal} />
    </div>
  );
};

export default LogicExpressions;
