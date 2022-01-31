import * as React from 'react';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { ParallaxBanner } from 'react-scroll-parallax';

import ButtonAppBar from './components/App-bar/App-bar'
import Intro from './components/Intro'
import AboutMe from './components/About-me'
import MyWork from './components/My-work'
import Contact from './components/Contact'
import Footer from './components/Footer'

import introBackgroundImg from './images/intro_background.jpg'

// Application
export default function App() {
  const theme = useTheme()
  const isLgScreen = useMediaQuery(theme.breakpoints.up('md'))

  const bkgdStyle = isLgScreen ?
  {zIndex: -1, backgroundAttachment: 'scroll', backgroundSize: '160%'}
  : {zIndex: -1, backgroundAttachment: 'fixed', backgroundSize: 'auto 100vh' }

  return (
    <Box> 
      <ButtonAppBar />
      {/* Parallax scrolling enabled for all elements apart from nav-bar. Parallax disable on smaller screens due to performance issues */}
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
        <Footer />
      </ParallaxBanner>
    </Box>
  );
}
