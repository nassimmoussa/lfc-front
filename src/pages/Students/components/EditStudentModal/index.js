import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import {
  clearSelectedStudentAction,
  editStudentAction,
} from 'store/modules/students/actions';
import { selectedStudentSelector } from 'store/modules/students/selectors';

import StudentForm from '../StudentForm';

const EditStudentModal = () => {
  const dispatch = useDispatch();
  const selectedStudent = useSelector(selectedStudentSelector);

  const handleClose = () => {
    dispatch(clearSelectedStudentAction());
  };

  const handleSubmit = (values) => {
    dispatch(editStudentAction(values));
    handleClose();
  };

  return (
    <Dialog open={!!selectedStudent} onClose={handleClose} maxWidth="xs">
      <DialogTitle>Editar o aluno</DialogTitle>
      <DialogContent>
        <StudentForm
          closeActionProp={handleClose}
          submitActionProp={handleSubmit}
          submitBtnText="Atualizar"
          initialValues={selectedStudent}
        />
      </DialogContent>
    </Dialog>
  );
};

export default EditStudentModal;
