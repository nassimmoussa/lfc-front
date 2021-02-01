import { ROOM_CLEANUP, ROOM_UPDATE } from '../../types';

export const roomUpdate = (room) => ({
  type: ROOM_UPDATE,
  data: room,
});

export const roomCleanup = () => ({
  type: ROOM_CLEANUP,
});
