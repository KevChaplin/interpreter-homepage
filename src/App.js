import * as React from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from './ProTip';

import Copyright from './components/Copyright'
import ButtonAppBar from './components/App-bar/App-bar.js'


export default function App() {
  return (
    <React.Fragment>
      <ButtonAppBar />
      <Container maxWidth={false}>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Create React App example
          </Typography>
          <ProTip />
        </Box>
      </Container>
      <Copyright />
    </React.Fragment>
  );
}
