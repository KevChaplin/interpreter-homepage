import { red } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// A custom theme for this app
let theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(87, 17 , 133, 1.0)',
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
      secondary: '#858585',
      // secondary: '#000000'
    }
  },
  components: {
    // Name of the component
    MuiPaper: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: 'rgba(87, 17 , 133, 0.9)',
        },
      },
    },
    MuiImageListItemBar: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: 'rgb(0, 0, 0)',
        },
      },
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;
