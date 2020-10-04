import React, { useState, useRef } from 'react';

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import itemsList from './itemsList';
import UserDropDown from './userDropDown';

import { useStyles } from './styles';

const Topbar = () => {
  const classes = useStyles();
  const userIconRef = useRef();

  const [open, setOpen] = useState(false);
  const [userDropDownOpen, setUserDropDownOpen] = useState(false);

  const closeDrawer = (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpen(false);
  };

  const closeUserDropDown = () => {
    setUserDropDownOpen(false);
  };

  const openUserDropDown = () => {
    setUserDropDownOpen(true);
  };

  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.topBar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="secondary"
            aria-label="menu"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            Lógica Fácil Condicional
          </Typography>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={openUserDropDown}
              color="inherit"
              ref={userIconRef}
            >
              <AccountCircle />
            </IconButton>
            <UserDropDown
              anchorEl={userIconRef}
              open={userDropDownOpen}
              handleClose={closeUserDropDown}
            />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="left"
        open={open}
        onClose={closeDrawer}
      >
        {itemsList({ closeDrawer })}
      </Drawer>
    </div>
  );
};

export default Topbar;
