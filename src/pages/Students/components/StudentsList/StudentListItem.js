import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { format } from 'helpers/formatter';

import { useStyles } from '../../styles';

const StudentListItem = ({ student }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.listItem}>
      <Typography variant="h5" align="left" gutterBottom>
        nome: {student.name}
      </Typography>
      <Typography variant="subtitle1" align="left" gutterBottom>
        CPF: {format(student.cpf, '999.999.999-99')}
      </Typography>
      <div className={classes.buttonsContainer}>
        <Button color="primary" variant="contained">
          Editar
        </Button>
        <Button color="secondary" variant="contained">
          Excluir
        </Button>
      </div>
    </Paper>
  );
};

StudentListItem.propTypes = {
  student: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    cpf: PropTypes.string.isRequired,
  }).isRequired,
};

export default StudentListItem;
