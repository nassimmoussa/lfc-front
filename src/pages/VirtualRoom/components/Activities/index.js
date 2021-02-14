import React from 'react';
import { useSelector } from 'react-redux';
import { ACTIVITY_TYPES } from 'constants/activityTypes';

import Typography from '@material-ui/core/Typography';

import { activitySelector } from 'store/modules/room/selectors';

import LEActivity from './LEActivity';
import IfActivity from './IfActivity';
import ChainedIfActivity from './ChainedIfActivity';

const Activities = () => {
  const activitiesList = useSelector(activitySelector);

  const renderActivity = (activity) => {
    if (activity.activityType === ACTIVITY_TYPES.LOGICAL_EXPRESSION)
      return <LEActivity lE={activity.logicExpression} />;
    if (activity.activityType === ACTIVITY_TYPES.IF)
      return <IfActivity lE={activity.logicExpression} />;
    return (
      <ChainedIfActivity
        lE={activity.logicExpression2}
        lE2={activity.logicExpression2}
      />
    );
  };

  return (
    <div>
      {activitiesList.map((activity, index) => (
        <div key={activity.id}>
          <Typography variant="h5">Atividade: {index + 1}</Typography>
          {renderActivity(activity)}
        </div>
      ))}
    </div>
  );
};

export default Activities;
