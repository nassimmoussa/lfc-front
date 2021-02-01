import { createSelector } from 'reselect';

export const roomSelector = (state) => state.room;

export const roomDataSelector = createSelector(
  roomSelector,
  (room) => room.data
);

export const studentsSelector = createSelector(
  roomDataSelector,
  (data) => data.students
);