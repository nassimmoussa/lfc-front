import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';

import Loading from 'components/Loading';
import Button from '@material-ui/core/Button';

import StudentsList from './components/StudentsList';
import SelectedStudentsList from './components/SelectedStudentsList';
import { useStyles } from './styles';

const WS_ENDPOINT = process.env.REACT_APP_WS_URL;

const Home = () => {
  const classes = useStyles();
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = socketIOClient(WS_ENDPOINT);

    setSocket(newSocket);
  }, []);

  if (!socket) {
    return <Loading />;
  }

  const createRoomHandler = () => {
    socket.emit('room:create', { students: ['aluno1', 'aluno2'] });
  };

  socket.on('room:created', ({ roomId }) => {
    console.log(roomId);
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
