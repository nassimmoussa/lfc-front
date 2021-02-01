import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Loading from 'components/Loading';

import useSocket from 'hooks/useSocket';

import { isSignedSelector } from 'store/modules/auth/selectors';
import { roomCleanup, roomUpdate } from 'store/modules/room/actions';

import ProfessorRoom from './ProfessorRoom';
import StudentRoom from './StudentRoom';

const VirtualRoom = () => {
  const { roomId } = useParams();
  const socket = useSocket();
  const dispatch = useDispatch();
  const loggedIn = useSelector(isSignedSelector);

  useEffect(() => {
    if (socket && loggedIn) {
      socket.emit('room:join', { roomId });
    }
  }, [socket, loggedIn, roomId]);

  useEffect(() => {
    return () => {
      dispatch(roomCleanup());
    };
  }, [dispatch]);

  if (!socket) {
    return <Loading />;
  }

  socket.on('room:joined', ({ room }) => {
    dispatch(roomUpdate(room));
  });

  return loggedIn ? <ProfessorRoom /> : <StudentRoom socket={socket} />;
};

export default VirtualRoom;
