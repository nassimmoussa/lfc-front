import { NOTIFICATIONS_ERROR, NOTIFICATIONS_SUCCESS } from 'store/types';

export const errorNotificationAction = (message) => ({
  type: NOTIFICATIONS_ERROR,
  data: message,
});

export const successNotificationAction = (message) => ({
  type: NOTIFICATIONS_SUCCESS,
  data: message,
});
