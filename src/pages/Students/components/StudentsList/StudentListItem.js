import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import ConfirmModal from 'components/ConfirmModal';
import useModal from 'hooks/useModal';

import { format } from 'helpers/formatter';

import { deleteStudentAction } from 'store/modules/students/actions';

import { useStyles } from '../../styles';

const StudentListItem = ({ student }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [deleteModalIsOpen, deleteModalClose, deleteModalOpen] = useModal();

  const deleteClickHandler = () => {
    dispatch(deleteStudentAction(student.id));
    deleteModalClose();
  };

  return (
    <>
      <Paper className={classes.listItem}>
        <Typography variant="h5" align="left" gutterBottom>
          nome: {student.name}
        </Typography>
        <Typography variant="subtitle1" align="left" gutterBottom>
          CPF: {format(student.cpf, '999.999.999-99')}
        </Typography>
        <div className={classes.buttonsContainer}>
          <Button color="primary" variant="contained">
            Editar
          </Button>
          <Button
            color="secondary"
            variant="contained"
            onClick={deleteModalOpen}
          >
            Excluir
          </Button>
        </div>
      </Paper>
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

StudentListItem.propTypes = {
  student: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    cpf: PropTypes.string.isRequired,
  }).isRequired,
};

export default StudentListItem;
