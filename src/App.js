import * as React from 'react';

import ButtonAppBar from './components/App-bar/App-bar.js'
import Intro from './components/Intro.js'
import MyWork from './components/My-work.js'
import Copyright from './components/Copyright'


export default function App() {
  return (
    <React.Fragment>
      <ButtonAppBar />
      <Intro />
      <MyWork />
      <div id="contact-me">Contact Form</div>
      <Copyright />
    </React.Fragment>
  );
}
