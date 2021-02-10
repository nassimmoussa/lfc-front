import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      width: '100%',
    },
    justifyContent: 'center',
    padding: theme.spacing(3),
  },
  content: {
    marginRight: theme.spacing(4),
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  cardStudentLine: {
    marginBottom: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: `1px solid #BCBCBC`,
  },
  online: {
    color: theme.palette.primary.light,
  },
  offline: {
    color: theme.palette.error.main,
  },
  addAtcivityForm: {
    height: 600,
  },
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
  cardButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
  },
  cardButton: {
    [theme.breakpoints.up('md')]: {
      minWidth: '180px',
    },
  },
  lESelect: {
    marginTop: theme.spacing(1),
  },
  typeSelect: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));
