import React from 'react';
import { useSelector } from 'react-redux';

import { studentsListSelector } from 'store/modules/students/selectors';

import StudentListItem from './StudentListItem';
import { useStyles } from '../../styles';

const StudentsList = () => {
  const classes = useStyles();

  const students = useSelector(studentsListSelector);

  return (
    <div className={classes.listContainer}>
      {students.map((student) => (
        <StudentListItem key={student.id} student={student} />
      ))}
    </div>
  );
};

export default StudentsList;
