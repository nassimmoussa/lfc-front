import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ACTIVITY_TYPES, PORTUGUES_TYPES } from 'constants/activityTypes';

import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import SelectWithSearch from 'components/SelectWithSearch';

import { lEsListSelector } from 'store/modules/logicExpressions/selectors';

import ActivityPreview from '../ActivityPreview';
import { useStyles } from '../../styles';

const ActivityForm = ({ submitActionProp, closeActionProp }) => {
  const classes = useStyles();
  const logicExpressions = useSelector(lEsListSelector);
  const [selectedLE, setSelectedLE] = useState('');
  const [secondSelectedLE, setSecondSelectedLE] = useState('');
  const [activityForm, setActivityForm] = useState({
    activityType: 'none',
    logicExpression: {},
    logicExpression2: {},
  });

  const options = logicExpressions.map((le) => ({
    value: le.id,
    label: le.title,
  }));

  const options2 = logicExpressions
    .filter((le) => le.id !== selectedLE.value)
    .map((le) => ({
      value: le.id,
      label: le.title,
    }));

  const handleSubmit = (e) => {
    e.preventDefault();
    submitActionProp(activityForm);
  };

  const closeHandler = () => {
    closeActionProp();
  };

  const selectChangeHandler = (selected) => {
    if (selected) {
      setSelectedLE(selected);
      setActivityForm({
        ...activityForm,
        logicExpression: logicExpressions.find(
          (le) => le.id === selected.value
        ),
      });
    } else {
      setSelectedLE('');
      setActivityForm({ ...activityForm, logicExpression: {} });
    }
  };

  const secondSelectChangeHandler = (selected) => {
    if (selected) {
      setSecondSelectedLE(selected);
      setActivityForm({
        ...activityForm,
        logicExpression2: logicExpressions.find(
          (le) => le.id === selected.value
        ),
      });
    } else {
      setSecondSelectedLE('');
      setActivityForm({ ...activityForm, logicExpression2: {} });
    }
  };

  const handleTypeChange = (activityType) => {
    setActivityForm({
      ...activityForm,
      activityType: activityType.target.value,
    });
  };

  const renderExtraExpressionSelect = () => (
    <SelectWithSearch
      placeholder="Selecione a segunda Expressão logica"
      className={classes.lESelect}
      options={options2}
      handleChange={secondSelectChangeHandler}
      selected={secondSelectedLE}
    />
  );

  return (
    <form onSubmit={handleSubmit} className={classes.addAtcivityForm}>
      <SelectWithSearch
        placeholder="Selecione a Expressão logica"
        className={classes.lESelect}
        options={options}
        handleChange={selectChangeHandler}
        selected={selectedLE}
      />
      <Select
        value={activityForm.activityType}
        onChange={handleTypeChange}
        className={classes.typeSelect}
        variant="outlined"
        fullWidth
      >
        <MenuItem value="none" disabled>
          Selecionar o tipo da atividade
        </MenuItem>

        <MenuItem value={ACTIVITY_TYPES.LOGICAL_EXPRESSION}>
          {PORTUGUES_TYPES.LOGICAL_EXPRESSION}
        </MenuItem>
        <MenuItem value={ACTIVITY_TYPES.IF}>{PORTUGUES_TYPES.IF}</MenuItem>
        <MenuItem value={ACTIVITY_TYPES.CHAINED_IF}>
          {PORTUGUES_TYPES.CHAINED_IF}
        </MenuItem>
      </Select>

      {activityForm.activityType === ACTIVITY_TYPES.CHAINED_IF
        ? renderExtraExpressionSelect()
        : null}

      <ActivityPreview
        type={activityForm.activityType}
        lE={activityForm.logicExpression}
        lE2={activityForm.logicExpression2}
      />

      <div className={classes.cardButtons}>
        <Button
          className={classes.cardButton}
          onClick={closeHandler}
          color="primary"
        >
          CANCELAR
        </Button>
        <Button
          className={classes.cardButton}
          onClick={handleSubmit}
          color="primary"
          variant="contained"
        >
          Adicionar atividade
        </Button>
      </div>
    </form>
  );
};

ActivityForm.propTypes = {
  submitActionProp: PropTypes.func.isRequired,
  closeActionProp: PropTypes.func.isRequired,
};

export default ActivityForm;
