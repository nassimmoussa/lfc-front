import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  navRight: {
    display: 'flex',
    paddingRight: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      width: '100%',
      paddingRight: theme.spacing(0),
    },
    justifyContent: 'flex-end',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  addButton: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.main,
    width: '180px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  tablePaper: {
    width: '80%',
    margin: 'auto',
  },
  editButton: {
    color: theme.palette.primary.main,
    padding: 0,
  },
  deleteButton: {
    color: theme.palette.secondary.light,
    padding: 0,
  },
  boldText: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
