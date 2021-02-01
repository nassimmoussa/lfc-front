import {
  ROOM_CLEANUP,
  ROOM_UPDATE,
  ROOM_STUDENT_LOGIN_SUCCESS,
} from '../../types';

export const roomUpdate = (room) => ({
  type: ROOM_UPDATE,
  data: room,
});

export const roomCleanup = () => ({
  type: ROOM_CLEANUP,
});

export const studentLoginSuccess = (room) => ({
  type: ROOM_STUDENT_LOGIN_SUCCESS,
  data: room,
});
