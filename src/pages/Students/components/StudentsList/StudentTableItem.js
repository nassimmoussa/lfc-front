import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import ConfirmModal from 'components/ConfirmModal';
import useModal from 'hooks/useModal';

import { format } from 'helpers/formatter';

import {
  deleteStudentAction,
  selectStudentAction,
} from 'store/modules/students/actions';

import { useStyles } from '../../styles';

const StudentTableItem = ({ student }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [deleteModalIsOpen, deleteModalClose, deleteModalOpen] = useModal();

  const deleteClickHandler = () => {
    dispatch(deleteStudentAction(student.id));
    deleteModalClose();
  };

  const editClickHandler = () => {
    dispatch(selectStudentAction(student));
  };

  return (
    <>
      <TableRow hover role="checkbox" tabIndex={-1}>
        <TableCell>{student.name}</TableCell>
        <TableCell>{format(student.cpf, '999.999.999-99')}</TableCell>
        <TableCell>
          <Button onClick={editClickHandler} className={classes.editButton}>
            <EditIcon />
          </Button>
          <Button onClick={deleteModalOpen} className={classes.deleteButton}>
            <DeleteIcon />
          </Button>
        </TableCell>
      </TableRow>
      <ConfirmModal
        open={deleteModalIsOpen}
        closeHandler={deleteModalClose}
        confirmHandler={deleteClickHandler}
        titleText="Deseja realmente excluir o aluno?"
        cancelText="CANCELAR"
        confirmText="EXCLUIR"
        variant="error"
      />
    </>
  );
};

StudentTableItem.propTypes = {
  student: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    cpf: PropTypes.string.isRequired,
  }).isRequired,
};

export default StudentTableItem;
