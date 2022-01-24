import { red } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// A custom theme for this app
let theme = createTheme({
  palette: {
    primary: {
      main: '#571185',
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
  // typography: {
  //   h1 : {
  //     fontSize: '3rem',
  //   },
  //   h2: {
  //     fontSize: '1.8rem'
  //   }
  // },
  components: {
    // Name of the component
    MuiPaper: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: '#571185',
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
