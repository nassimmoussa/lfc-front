import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import ActivityForm from '../ActivityForm';

const AddAtcivityModal = ({ open, closeHandler }) => {
  const handleClose = () => {
    closeHandler();
  };

  const handleSubmit = (values) => {
    console.log(values);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Adicionar nova atividade</DialogTitle>
      <DialogContent>
        <ActivityForm
          closeActionProp={handleClose}
          submitActionProp={handleSubmit}
        />
      </DialogContent>
    </Dialog>
  );
};

AddAtcivityModal.propTypes = {
  open: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
};

export default AddAtcivityModal;
