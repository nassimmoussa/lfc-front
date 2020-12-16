import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';

import { useStyles } from './styles';

const ConfirmModal = ({
  open,
  closeHandler,
  confirmHandler,
  titleText,
  cancelText,
  confirmText,
  variant,
}) => {
  const classes = useStyles();
  return (
    <Dialog open={open} onClose={closeHandler} maxWidth="xs">
      <DialogTitle className={classes.title}>{titleText}</DialogTitle>
      <DialogContent>
        <div className={classes.buttonsContainer}>
          <Button
            className={classes.button}
            onClick={closeHandler}
            color="secondary"
            variant="outlined"
          >
            {cancelText}
          </Button>
          <Button
            className={`${classes.button} ${classes[variant]}`}
            onClick={confirmHandler}
            variant="outlined"
          >
            {confirmText}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

ConfirmModal.defaultProps = {
  variant: 'primary',
};

ConfirmModal.propTypes = {
  open: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
  confirmHandler: PropTypes.func.isRequired,
  titleText: PropTypes.string.isRequired,
  cancelText: PropTypes.string.isRequired,
  confirmText: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'error']),
};

export default ConfirmModal;
