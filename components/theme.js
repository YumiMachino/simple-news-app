import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Create a theme instance. To be shared by server-side and client-side.
const theme = createMuiTheme({
  palette: {
    primary: {
        500: '#009688',
        A100: '#a7ffeb',
        A200: '##64ffda',
        A400: '##1de9b6',
        A700: '#00bfa5',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },

  },
});

export default theme;