import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import './App.scss';
import Routes from './routes';
import { green, orange, purple } from '@material-ui/core/colors';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#7986cb",
      main: "#34a751",
      dark: "#303f9f",
      contrastText: "#fff",
    },
    secondary: {
      main: '#fff',
    },
  },
});

function App() {
  return (
    <ThemeProvider  theme={theme}>
      <CssBaseline />
      <div className="App">
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
