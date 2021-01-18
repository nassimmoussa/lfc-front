import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { lENewAction } from 'store/modules/logicExpressions/actions';

import LEForm from '../LEForm';

const AddLEModal = ({ open, closeHandler }) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    closeHandler();
  };

  const handleSubmit = (values) => {
    dispatch(lENewAction(values));
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Adicionar nova expressão logica</DialogTitle>
      <DialogContent>
        <LEForm
          closeActionProp={handleClose}
          submitActionProp={handleSubmit}
          submitBtnText="Salvar"
        />
      </DialogContent>
    </Dialog>
  );
};

AddLEModal.propTypes = {
  open: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
};

export default AddLEModal;
