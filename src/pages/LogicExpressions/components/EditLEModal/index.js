import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import {
  clearSelectedLEAction,
  editLEAction,
} from 'store/modules/logicExpressions/actions';
import { selectedlESelector } from 'store/modules/logicExpressions/selectors';

import LEForm from '../LEForm';

const EditLEModal = () => {
  const dispatch = useDispatch();
  const selectedlE = useSelector(selectedlESelector);

  const handleClose = () => {
    dispatch(clearSelectedLEAction());
  };

  const handleSubmit = (values) => {
    dispatch(editLEAction(values));
    handleClose();
  };

  return (
    <Dialog open={!!selectedlE} onClose={handleClose} maxWidth="xs">
      <DialogTitle>Editar o aluno</DialogTitle>
      <DialogContent>
        <LEForm
          closeActionProp={handleClose}
          submitActionProp={handleSubmit}
          submitBtnText="Atualizar"
          initialValues={selectedlE}
        />
      </DialogContent>
    </Dialog>
  );
};

export default EditLEModal;
