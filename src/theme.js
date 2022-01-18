import { withTheme } from '@emotion/react';
import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

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
    text: {
      primary: 'white'
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
});

export default theme;
