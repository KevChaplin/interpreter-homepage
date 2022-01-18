import * as React from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from './ProTip';

import ButtonAppBar from './components/App-bar/App-bar.js'
import Intro from './components/Intro.js'
import Copyright from './components/Copyright'


export default function App() {
  return (
    <React.Fragment>
      <ButtonAppBar />
      <Intro />
      <Copyright />
    </React.Fragment>
  );
}
