import React from 'react';
import { useSelector } from 'react-redux';

import { lEsListSelector } from 'store/modules/logicExpressions/selectors';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import LogicExpressionsTableItem from './LogicExpressionsTableItem';
import { useStyles } from '../../styles';

const LogicExpressionsList = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const logicExpressions = useSelector(lEsListSelector);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.tablePaper}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell style={{ minWidth: 240 }} className={classes.boldText}>
                Texto
              </TableCell>
              <TableCell style={{ minWidth: 160 }} className={classes.boldText}>
                Variavies
              </TableCell>
              <TableCell style={{ minWidth: 160 }} className={classes.boldText}>
                Resultado
              </TableCell>
              <TableCell style={{ minWidth: 80 }} className={classes.boldText}>
                Ações
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {logicExpressions
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((le) => (
                <LogicExpressionsTableItem le={le} key={le.id} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={logicExpressions.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        labelRowsPerPage="expressões por página"
        labelDisplayedRows={({ from, to, count }) =>
          `${from}-${to} de ${count !== -1 ? count : `mais que ${to}`}`
        }
      />
    </Paper>
  );
};

export default LogicExpressionsList;
