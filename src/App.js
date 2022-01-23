import * as React from 'react';

import ButtonAppBar from './components/App-bar/App-bar'
import Intro from './components/Intro'
import MyWork from './components/My-work'
import Copyright from './components/Copyright'
import Contact from './components/Contact'

export default function App() {
  return (
    <React.Fragment>
      <ButtonAppBar />
      <Intro />
      <MyWork />
      <Contact />
      <Copyright />
    </React.Fragment>
  );
}
