import React from 'react';
import PropTypes from 'prop-types';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { useStyles } from '../../styles';

const LogicExpressionsTableItem = ({ le }) => {
  const classes = useStyles();

  const renderVariables = () =>
    le.variables.map((v) => (
      <div key={v.name}>
        {v.name} : {v.value}
        <br />
      </div>
    ));

  return (
    <TableRow hover role="checkbox" tabIndex={-1}>
      <TableCell>{le.text}</TableCell>
      <TableCell>{renderVariables()}</TableCell>
      <TableCell>{le.result ? 'Verdadeiro' : 'Falso'}</TableCell>
      <TableCell>
        <Button className={classes.editButton}>
          <EditIcon />
        </Button>
        <Button className={classes.deleteButton}>
          <DeleteIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
};

LogicExpressionsTableItem.propTypes = {
  le: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    result: PropTypes.bool.isRequired,
    variables: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
};

export default LogicExpressionsTableItem;
