/* eslint-disable react/prop-types */
import React from 'react';
import isEmpty from 'lodash.isempty';
import { ACTIVITY_TYPES } from 'constants/activityTypes';

import { useStyles } from '../../styles';
import LEPreview from './LEPreview';
import IfPreview from './IfPreview';
import ChainedIfPreview from './ChainedIfPreview';

const ActivityPreview = ({ type, lE, lE2 }) => {
  const classes = useStyles();

  if (type === 'none' || isEmpty(lE)) {
    return <div className={classes.previewDiv} />;
  }
  if (type === ACTIVITY_TYPES.CHAINED_IF && (isEmpty(lE) || isEmpty(lE2))) {
    return <div className={classes.previewDiv} />;
  }

  const renderPreview = () => {
    if (type === ACTIVITY_TYPES.LOGICAL_EXPRESSION)
      return <LEPreview lE={lE} />;
    if (type === ACTIVITY_TYPES.IF) return <IfPreview lE={lE} />;
    return <ChainedIfPreview lE={lE} lE2={lE2} />;
  };

  return <div className={classes.previewDiv}>{renderPreview()}</div>;
};

export default ActivityPreview;
