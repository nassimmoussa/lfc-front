import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { loggedStudentSelector } from 'store/modules/room/selectors';

import StudentLogin from './components/StudentLogin';

const StudentRoom = ({ socket }) => {
  const loggedStudent = useSelector(loggedStudentSelector);

  if (!loggedStudent) {
    return <StudentLogin socket={socket} />;
  }

  return (
    <div>
      <h2>Student Room</h2>
    </div>
  );
};

StudentRoom.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  socket: PropTypes.object.isRequired,
};

export default StudentRoom;
