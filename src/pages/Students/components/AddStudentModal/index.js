import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { studentNewAction } from 'store/modules/students/actions';

import StudentForm from '../StudentForm';

const AddStudentModal = ({ open, closeHandler }) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    closeHandler();
  };

  const handleSubmit = (values) => {
    dispatch(studentNewAction(values));
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs">
      <DialogTitle>Adicionar novo aluno</DialogTitle>
      <DialogContent>
        <StudentForm
          closeActionProp={handleClose}
          submitActionProp={handleSubmit}
          submitBtnText="Adicionar"
        />
      </DialogContent>
    </Dialog>
  );
};

AddStudentModal.propTypes = {
  open: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
};

export default AddStudentModal;
