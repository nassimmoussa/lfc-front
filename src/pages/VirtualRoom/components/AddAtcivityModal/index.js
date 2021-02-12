import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import ActivityForm from '../ActivityForm';

const AddAtcivityModal = ({ open, closeHandler, socket }) => {
  const { roomId } = useParams();
  const handleClose = () => {
    closeHandler();
  };

  const handleSubmit = (activity) => {
    socket.emit('room:add:activity', { activity, roomId });
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
  // eslint-disable-next-line react/forbid-prop-types
  socket: PropTypes.object.isRequired,
};

export default AddAtcivityModal;
