import { createSelector } from 'reselect';

export const notificationsSelector = (state) => state.notifications;

export const notificationsErrorSelector = createSelector(
  notificationsSelector,
  (notifications) => notifications.error
);

export const notificationsSuccessSelector = createSelector(
  notificationsSelector,
  (notifications) => notifications.success
);
