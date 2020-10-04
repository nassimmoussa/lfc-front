import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import Routes from 'routes';
import history from 'services/history';
import theme from 'assets/materialTheme';
import Notifier from 'components/Notifier';
import { store, persistor } from './store';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Notifier />
          <Router history={history}>
            <Routes />
          </Router>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
