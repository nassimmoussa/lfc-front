import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loading from 'components/Loading';
import Button from '@material-ui/core/Button';

import useSocket from 'hooks/useSocket';

import { successNotificationAction } from 'store/modules/notifications/actions';
import { studentCleanUpAction } from 'store/modules/students/actions';
import { roomStudentsSelector } from 'store/modules/students/selectors';

import StudentsList from './components/StudentsList';
import SelectedStudentsList from './components/SelectedStudentsList';
import { useStyles } from './styles';

const Home = () => {
  const classes = useStyles();
  const socket = useSocket();
  const dispatch = useDispatch();
  const students = useSelector(roomStudentsSelector);

  useEffect(() => {
    return () => {
      dispatch(studentCleanUpAction());
    };
  }, [dispatch]);

  if (!socket) {
    return <Loading />;
  }

  const createRoomHandler = () => {
    socket.emit('room:create', { students });
  };

  socket.on('room:created', ({ roomId }) => {
    dispatch(
      successNotificationAction(`sala criada com sucesso id: ${roomId}`)
    );
  });

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.content}>
          <StudentsList />
        </div>
        <div className={classes.content}>
          <SelectedStudentsList />
          <div className={classes.cardButtons}>
            <Button
              variant="outlined"
              size="large"
              color="primary"
              onClick={createRoomHandler}
            >
              CRIAR SALA VIRTUAL
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
