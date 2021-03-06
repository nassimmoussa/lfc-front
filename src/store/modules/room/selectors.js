import { createSelector } from 'reselect';
import { rankStudents } from './helpers';

export const roomSelector = (state) => state.room;

export const roomDataSelector = createSelector(
  roomSelector,
  (room) => room.data
);

export const loggedStudentSelector = createSelector(
  roomSelector,
  (room) => room.loggedStudent
);

export const studentsSelector = createSelector(
  roomDataSelector,
  (data) => data.students || []
);

export const activitySelector = createSelector(
  roomDataSelector,
  (data) => data.activities || []
);

export const activityStartedSelector = createSelector(
  roomDataSelector,
  (data) => data.activityStarted
);

export const loggedStudentDataSelector = createSelector(
  studentsSelector,
  loggedStudentSelector,
  (students, loggedStudent) =>
    students.find((studnet) => studnet.cpf === loggedStudent)
);

export const finishTimeSelector = createSelector(
  roomDataSelector,
  (data) => new Date(data.finishTime)
);

export const startTimeSelector = createSelector(
  roomDataSelector,
  (data) => new Date(data.startTime)
);

export const activityDoneSelector = createSelector(
  roomDataSelector,
  (data) => data.allStudentsDone || data.timeDone
);

export const rankedStudentsSelector = createSelector(
  studentsSelector,
  startTimeSelector,
  finishTimeSelector,
  rankStudents
);
