import { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';

const WS_ENDPOINT = process.env.REACT_APP_WS_URL;

const useModal = () => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = socketIOClient(WS_ENDPOINT);

    setSocket(newSocket);
  }, []);

  return socket;
};

export default useModal;
