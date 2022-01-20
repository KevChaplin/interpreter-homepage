import { red } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// A custom theme for this app
let theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    white: {
      main: '#ffffff'
    },
    text: {
      primary: '#ffffff',
      secondary: '#000000'
    }
  },
  typography: {
    h1 : {
      fontSize: '3rem',
    },
    h2: {
      fontSize: '1.8rem'
    }
  },
  components: {
    // Name of the component
    MuiPaper: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: '#556cd6',
        },
      },
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;
