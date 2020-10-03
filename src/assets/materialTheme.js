import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4163C4',
    },
    secondary: {
      main: '#393939',
      light: '#757575',
    },
    white: {
      main: '#fff',
    },
  },
  typography: {
    fontSize: 12,
  },
});

export default theme;
