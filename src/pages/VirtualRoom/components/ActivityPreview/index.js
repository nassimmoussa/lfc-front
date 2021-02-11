import React from 'react';
import isempty from 'lodash.isempty';
import { ACTIVITY_TYPES } from 'constants/activityTypes';

import { useStyles } from '../../styles';
import LEPreview from './LEPreview';
import IfPreview from './IfPreview';
import ChainedIfPreview from './ChainedIfPreview';

const ActivityPreview = ({ type, lE }) => {
  const classes = useStyles();

  if (type === 'none' || isempty(lE)) {
    return <div className={classes.previewDiv} />;
  }

  const renderPreview = () => {
    if (type === ACTIVITY_TYPES.LOGICAL_EXPRESSION)
      return <LEPreview lE={lE} />;
    if (type === ACTIVITY_TYPES.IF) return <IfPreview lE={lE} />;
    return <ChainedIfPreview lE={lE} />;
  };

  return <div className={classes.previewDiv}>{renderPreview()}</div>;
};

export default ActivityPreview;
