import { withTheme } from '@emotion/react';
import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { palette } from '@mui/system';

// A custom theme for this app
const theme = createTheme({
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
      fontSize: '2rem'
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

export default theme;
