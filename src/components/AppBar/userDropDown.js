import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { logoutAction } from 'store/modules/auth/actions';

const UserDropDown = ({ anchorEl, open, handleClose }) => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutAction());
  };

  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={open}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={logoutHandler}>Logout</MenuItem>
    </Menu>
  );
};

UserDropDown.propTypes = {
  open: PropTypes.bool.isRequired,
  anchorEl: PropTypes.element.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default UserDropDown;
