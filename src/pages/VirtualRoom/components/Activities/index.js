/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ACTIVITY_TYPES } from 'constants/activityTypes';

import Typography from '@material-ui/core/Typography';

import {
  activitySelector,
  loggedStudentDataSelector,
} from 'store/modules/room/selectors';

import LEActivity from './LEActivity';
import IfActivity from './IfActivity';
import ChainedIfActivity from './ChainedIfActivity';

const Activities = ({ socket }) => {
  const { roomId } = useParams();
  const activitiesList = useSelector(activitySelector);
  const student = useSelector(loggedStudentDataSelector);

  const studentResponseHandler = (response, activity) => {
    socket.emit('student:activity:response', {
      activity,
      roomId,
      response,
      student,
    });
  };

  const renderActivity = (activity) => {
    const studentResponse = activity.responses.find(
      (response) => response.cpf === student.cpf
    );
    if (activity.activityType === ACTIVITY_TYPES.LOGICAL_EXPRESSION)
      return (
        <LEActivity
          lE={activity.logicExpression}
          onResponse={(response) => studentResponseHandler(response, activity)}
          studentResponse={studentResponse}
        />
      );
    if (activity.activityType === ACTIVITY_TYPES.IF)
      return (
        <IfActivity
          lE={activity.logicExpression}
          onResponse={(result) => studentResponseHandler(result, activity.id)}
          studentResponse={studentResponse}
        />
      );
    return (
      <ChainedIfActivity
        lE={activity.logicExpression2}
        lE2={activity.logicExpression2}
        onResponse={(result) => studentResponseHandler(result, activity.id)}
        studentResponse={studentResponse}
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
