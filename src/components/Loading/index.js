import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import { useStyles } from './styles';

const Loading = () => {
  const classes = useStyles();
  return (
    <div className={classes.loading}>
      <CircularProgress
        color="primary"
        style={{
          margin: 'auto',
        }}
        thickness={4}
        size={70}
      />
    </div>
  );
};

export default Loading;
