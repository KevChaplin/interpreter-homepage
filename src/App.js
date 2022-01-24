import * as React from 'react';

import Box from '@mui/material/Box';

import ButtonAppBar from './components/App-bar/App-bar'
import Intro from './components/Intro'
import AboutMe from './components/About-me'
import MyWork from './components/My-work'
import Copyright from './components/Copyright'
import Contact from './components/Contact'

import introBackgroundImg from './images/intro_background.jpg'

export default function App() {
  return (
    <Box sx={{
      backgroundImage: `url(${introBackgroundImg})`,
      backgroundSize: 'cover'}}>
      <ButtonAppBar />
      <Intro />
      <AboutMe />
      <MyWork />
      <Contact />
      <Copyright />
    </Box>
  );
}
