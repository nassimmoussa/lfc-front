import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Loading from 'components/Loading';

import useSocket from 'hooks/useSocket';

import { isSignedSelector } from 'store/modules/auth/selectors';

const VirtualRoom = () => {
  const { roomId } = useParams();
  const socket = useSocket();
  const loggedIn = useSelector(isSignedSelector);

  useEffect(() => {
    if (socket && loggedIn) {
      socket.emit('room:join', { roomId });
    }
  }, [socket, loggedIn]);

  if (!socket) {
    return <Loading />;
  }

  socket.on('room:joined', ({ room }) => {
    console.log(room);
  });

  return (
    <div>
      <h2>VirtualRoom {roomId}</h2>
    </div>
  );
};

export default VirtualRoom;
