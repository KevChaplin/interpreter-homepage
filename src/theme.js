import { red } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// A custom theme for this app
let theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(0, 99, 199)',
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
    }
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0, 99, 199, 0.9)',
        },
      },
    },
    MuiImageListItemBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgb(0, 0, 0)',
        },
        titleWrapBottom: {
          padding: '8px'
        },
        title: {
          fontSize: '0.8rem'
        },
        subtitle: {
          fontSize: '0.6rem'
        }
      },
    },
  },
});
// Set resonsive font size (Material UI functionality)
theme = responsiveFontSizes(theme);

export default theme;
