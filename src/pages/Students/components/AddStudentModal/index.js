import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import StudentForm from '../StudentForm';

const AddStudentModal = ({ open, closeHandler }) => {
  const handleClose = () => {
    closeHandler();
  };

  const handleSubmit = (values) => {
    console.log(values);
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
