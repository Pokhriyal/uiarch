import React from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import './assets/scss/index.scss';
import theme from './theme';
import Routes from './Routes';
import { green, orange, purple } from '@material-ui/core/colors';

const browserHistory = createBrowserHistory();


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router history={browserHistory}>
          <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
