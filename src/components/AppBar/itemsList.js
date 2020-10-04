import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, useHistory } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';

import { useStyles } from './styles';

const SidebarList = ({ closeDrawer }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const redirect = (path) => {
    history.push(path);
  };

  return (
    <div
      className={classes.list}
      role="presentation"
      onClick={closeDrawer}
      onKeyDown={closeDrawer}
    >
      <List>
        <ListItem
          button
          disabled={location.pathname === '/'}
          selected={location.pathname === '/'}
          onClick={() => redirect('/')}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home page" />
        </ListItem>
      </List>
    </div>
  );
};

SidebarList.propTypes = {
  closeDrawer: PropTypes.func.isRequired,
};

export default SidebarList;
