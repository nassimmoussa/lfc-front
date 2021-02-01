import {
  ROOM_CLEANUP,
  ROOM_UPDATE,
  ROOM_STUDENT_LOGIN_SUCCESS,
  ROOM_STUDENT_NEW_LOGIN,
} from '../../types';

export const roomUpdate = (room) => ({
  type: ROOM_UPDATE,
  room,
});

export const roomCleanup = () => ({
  type: ROOM_CLEANUP,
});

export const studentLoginSuccess = (room, cpf) => ({
  type: ROOM_STUDENT_LOGIN_SUCCESS,
  room,
  cpf,
});

export const newLogin = (cpf) => ({
  type: ROOM_STUDENT_NEW_LOGIN,
  cpf,
});
