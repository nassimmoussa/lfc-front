import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, useHistory } from 'react-router-dom';
import ROUTER_PATHS from 'constants/router';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import StudentIcon from '@material-ui/icons/SupervisorAccount';

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
          disabled={location.pathname === ROUTER_PATHS.HOME}
          selected={location.pathname === ROUTER_PATHS.HOME}
          onClick={() => redirect(ROUTER_PATHS.HOME)}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Página inicial" />
        </ListItem>

        <ListItem
          button
          disabled={location.pathname === ROUTER_PATHS.STUDENTS}
          selected={location.pathname === ROUTER_PATHS.STUDENTS}
          onClick={() => redirect(ROUTER_PATHS.STUDENTS)}
        >
          <ListItemIcon>
            <StudentIcon />
          </ListItemIcon>
          <ListItemText primary="Alunos" />
        </ListItem>
      </List>
    </div>
  );
};

SidebarList.propTypes = {
  closeDrawer: PropTypes.func.isRequired,
};

export default SidebarList;
