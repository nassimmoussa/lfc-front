import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(1),
    fontWeight: theme.typography.fontWeightBold,
    fontSize: '1.5rem',
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    width: '45%',
  },
  error: {
    color: theme.palette.error.main,
    border: `solid 1px ${theme.palette.error.main}`,
  },
  primary: {
    color: theme.palette.primary.main,
    border: `solid 1px ${theme.palette.primary.main}`,
  },
}));
