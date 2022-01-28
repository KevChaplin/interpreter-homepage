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
  const isLgScreen = useMediaQuery(theme.breakpoints.up('md'))

  const bkgdStyle = isLgScreen ?
  {zIndex: -1, backgroundAttachment: 'scroll', backgroundSize: '160%'}
  : {zIndex: -1, backgroundAttachment: 'fixed', backgroundSize: 'auto 100vh' }

  return (
    <Box> 
      <ButtonAppBar />
      <ParallaxBanner
        layers={[
          { 
            disabled: isLgScreen ? false : true, 
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
