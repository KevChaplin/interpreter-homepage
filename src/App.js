import * as React from 'react';
import Box from '@mui/material/Box';
import { ParallaxBanner } from 'react-scroll-parallax';

import ButtonAppBar from './components/App-bar/App-bar'
import Intro from './components/Intro'
import AboutMe from './components/About-me'
import MyWork from './components/My-work'
import Contact from './components/Contact'
import Copyright from './components/Copyright'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import introBackgroundImg from './images/intro_background.jpg'

export default function App() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const bkgdStyle = isMobile ?
  {zIndex: -1, backgroundAttachment: 'fixed', backgroundSize: 'auto' }
  : {zIndex: -1, backgroundAttachment: 'scroll', backgroundSize: 'auto'}

  return (
    <Box> 
      <ButtonAppBar />
      <ParallaxBanner
        layers={[
          { 
            disabled: isMobile ? true : false, 
            image: introBackgroundImg, 
            speed: -200, 
            style: bkgdStyle
          },
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
