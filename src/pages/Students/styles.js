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
  listContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  listItem: {
    margin: theme.spacing(3),
    minWidth: '300px',
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}));
