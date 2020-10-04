import React, { useEffect } from 'react';
import { useSnackbar, SnackbarProvider } from 'notistack';
import { useSelector, useDispatch } from 'react-redux';

import {
  notificationsErrorSelector,
  notificationsSuccessSelector,
} from 'store/modules/notifications/selectors';
import {
  successNotificationAction,
  errorNotificationAction,
} from 'store/modules/notifications/actions';

const NotificationManager = () => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const error = useSelector(notificationsErrorSelector);
  const success = useSelector(notificationsSuccessSelector);

  const enqueueSnackbarWithMessage = ({ message, variant }) => {
    const screenWidth = window.innerWidth;
    enqueueSnackbar(message, {
      variant,
      anchorOrigin: {
        horizontal: 'left',
        vertical: screenWidth <= 600 ? 'top' : 'bottom',
      },
    });
  };

  useEffect(() => {
    if (success !== '') {
      enqueueSnackbarWithMessage({ message: success, variant: 'success' });
      dispatch(successNotificationAction(''));
    }
  }, [success, dispatch]);

  useEffect(() => {
    if (error !== '') {
      enqueueSnackbarWithMessage({ message: error, variant: 'error' });
      dispatch(errorNotificationAction(''));
    }
  }, [error, dispatch]);

  return null;
};

const Notifier = () => {
  return (
    <SnackbarProvider>
      <NotificationManager />
    </SnackbarProvider>
  );
};

export default Notifier;
