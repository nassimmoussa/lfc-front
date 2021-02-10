import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ACTIVITY_TYPES, PORTUGUES_TYPES } from 'constants/activityTypes';

import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import SelectWithSearch from 'components/SelectWithSearch';

import { lEsListSelector } from 'store/modules/logicExpressions/selectors';

import { useStyles } from '../../styles';

const ActivityForm = ({ submitActionProp, closeActionProp }) => {
  const classes = useStyles();
  const logicExpressions = useSelector(lEsListSelector);
  const [selectedLE, setSelectedLE] = useState('');
  const [activityForm, setActivityForm] = useState({
    activityType: 'none',
  });

  const options = logicExpressions.map((le) => ({
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
    setSelectedLE(selected);
    setActivityForm({
      ...activityForm,
      logicExpression: logicExpressions.find((le) => le.id === selected.value),
    });
  };

  const handleTypeChange = (activityType) => {
    setActivityForm({
      ...activityForm,
      activityType: activityType.target.value,
    });
  };

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
