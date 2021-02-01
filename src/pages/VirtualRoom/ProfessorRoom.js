import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { newLogin } from 'store/modules/room/actions';

const ProfessorRoom = ({ socket }) => {
  const dispatch = useDispatch();

  socket.on('room:new:login', ({ cpf }) => {
    dispatch(newLogin(cpf));
  });

  return (
    <div>
      <h2>Professor Room</h2>
    </div>
  );
};

ProfessorRoom.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  socket: PropTypes.object.isRequired,
};

export default ProfessorRoom;
