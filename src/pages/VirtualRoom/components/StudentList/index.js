import React from 'react';
import { useSelector } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import { studentsSelector } from 'store/modules/room/selectors';

import { useStyles } from '../../styles';

const StudentList = () => {
  const classes = useStyles();

  const students = useSelector(studentsSelector);
  return (
    <div>
      <div className={classes.cardStudentLine}>
        <Typography variant="subtitle1">Aluno</Typography>
        <Typography variant="subtitle1">Respostas</Typography>
        <Typography variant="subtitle1">Online</Typography>
      </div>

      {students.map((student) => (
        <div className={classes.cardStudentLine} key={student.id}>
          <Typography variant="subtitle1">{student.name}</Typography>
          <Typography variant="subtitle1">
            {student.responses.length}
          </Typography>
          {student.loggedIn ? (
            <FiberManualRecordIcon className={classes.online} />
          ) : (
            <FiberManualRecordIcon className={classes.offline} />
          )}
        </div>
      ))}
    </div>
  );
};

export default StudentList;
