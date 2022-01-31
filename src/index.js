import * as React from 'react';
import ReactDOM from 'react-dom';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { ParallaxProvider } from 'react-scroll-parallax'

import App from './App';
import theme from './theme';
import './i18n';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </ThemeProvider>,
  document.querySelector('#root'),
);
