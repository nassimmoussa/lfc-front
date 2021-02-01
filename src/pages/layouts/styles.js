import { makeStyles } from '@material-ui/core/styles';
import BackgroundImage from 'assets/background.png';

export const useStyles = makeStyles((theme) => {
  return {
    loggedOffRootContainer: {
      height: '100vh',
      display: 'flex',
    },
    loggedOffImage: {
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      maxWidth: '60%',
      flexBasis: '60%',
      [theme.breakpoints.down('sm')]: {
        maxWidth: '40%',
        flexBasis: '40%',
      },
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    loggedOffFormContainer: {
      padding: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '40%',
      flexBasis: '40%',
      [theme.breakpoints.down('sm')]: {
        maxWidth: '60%',
        flexBasis: '60%',
      },
      [theme.breakpoints.down('xs')]: {
        maxWidth: '100%',
        flexBasis: '100%',
      },
    },
    topBar: {
      height: 70,
    },
    title: {
      flexGrow: 1,
    },
  };
});
