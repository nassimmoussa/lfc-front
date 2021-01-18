import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import ConfirmModal from 'components/ConfirmModal';
import useModal from 'hooks/useModal';

import {
  deleteLEAction,
  selectLEAction,
} from 'store/modules/logicExpressions/actions';

import { useStyles } from '../../styles';

const LogicExpressionsTableItem = ({ le }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [deleteModalIsOpen, deleteModalClose, deleteModalOpen] = useModal();

  const renderVariables = () =>
    le.variables.map((v) => (
      <div key={v.name}>
        {v.name} : {v.value}
        <br />
      </div>
    ));

  const editClickHandler = () => {
    dispatch(selectLEAction(le));
  };

  const deleteClickHandler = () => {
    dispatch(deleteLEAction(le.id));
    deleteModalClose();
  };

  return (
    <>
      <TableRow hover role="checkbox" tabIndex={-1}>
        <TableCell>{le.title}</TableCell>
        <TableCell>{le.text}</TableCell>
        <TableCell>{renderVariables()}</TableCell>
        <TableCell>{le.result ? 'Verdadeiro' : 'Falso'}</TableCell>
        <TableCell>
          <Button onClick={editClickHandler} className={classes.editButton}>
            <EditIcon />
          </Button>
          <Button className={classes.deleteButton} onClick={deleteModalOpen}>
            <DeleteIcon />
          </Button>
        </TableCell>
      </TableRow>
      <ConfirmModal
        open={deleteModalIsOpen}
        closeHandler={deleteModalClose}
        confirmHandler={deleteClickHandler}
        titleText="Deseja realmente excluir a expressão lógica?"
        cancelText="CANCELAR"
        confirmText="EXCLUIR"
        variant="error"
      />
    </>
  );
};

LogicExpressionsTableItem.propTypes = {
  le: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    result: PropTypes.bool.isRequired,
    variables: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
};

export default LogicExpressionsTableItem;
