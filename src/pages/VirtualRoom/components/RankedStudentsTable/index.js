import React from 'react';
import { useSelector } from 'react-redux';

import Typography from '@material-ui/core/Typography';

import { rankedStudentsSelector } from 'store/modules/room/selectors';
import { useStyles } from '../../styles';

const RankedStudentsTable = () => {
  const classes = useStyles();
  const rankedStudents = useSelector(rankedStudentsSelector);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Placar final
      </Typography>
      <div className={classes.rankedStudentLine}>
        <Typography
          variant="subtitle1"
          className={classes.rankedStudentLineItem}
        >
          Posição
        </Typography>
        <Typography
          variant="subtitle1"
          className={classes.rankedStudentLineItem}
        >
          Aluno
        </Typography>
        <Typography
          variant="subtitle1"
          className={classes.rankedStudentLineItem}
        >
          Respostas Corretas
        </Typography>
        <Typography
          variant="subtitle1"
          className={classes.rankedStudentLineItem}
        >
          Respostas Erradas
        </Typography>
        <Typography
          variant="subtitle1"
          className={classes.rankedStudentLineItem}
        >
          Tempo para responder
        </Typography>
      </div>

      {rankedStudents.map((student, index) => (
        <div className={classes.cardStudentLine} key={student.id}>
          <Typography
            variant="subtitle1"
            className={classes.rankedStudentLineItem}
          >
            {index + 1}
          </Typography>
          <Typography
            variant="subtitle1"
            className={classes.rankedStudentLineItem}
          >
            {student.name}
          </Typography>
          <Typography
            variant="subtitle1"
            className={classes.rankedStudentLineItem}
          >
            1
          </Typography>
          <Typography
            variant="subtitle1"
            className={classes.rankedStudentLineItem}
          >
            1
          </Typography>
          <Typography
            variant="subtitle1"
            className={classes.rankedStudentLineItem}
          >
            11:20
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default RankedStudentsTable;
