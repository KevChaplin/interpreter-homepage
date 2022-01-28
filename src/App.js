import * as React from 'react';
import Box from '@mui/material/Box';
import { ParallaxBanner } from 'react-scroll-parallax';

import ButtonAppBar from './components/App-bar/App-bar'
import Intro from './components/Intro'
import AboutMe from './components/About-me'
import MyWork from './components/My-work'
import Contact from './components/Contact'
import Copyright from './components/Copyright'

import introBackgroundImg from './images/intro_background.jpg'

export default function App() {
  
  return (
    <Box> 
      <ButtonAppBar />
      <ParallaxBanner
      layers={[
        { image: introBackgroundImg, speed: -200, style: {zIndex: -1, height: 'auto', backgroundSize: 'auto auto'} },
      ]}>
        <Intro />
        <AboutMe />
        <MyWork />
        <Contact />
        <Copyright />
      </ParallaxBanner>
    </Box>
  );
}
