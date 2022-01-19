import * as React from 'react';

import ButtonAppBar from './components/App-bar/App-bar.js'
import Intro from './components/Intro.js'
import Copyright from './components/Copyright'


export default function App() {
  return (
    <React.Fragment>
      <ButtonAppBar />
      <Intro />
      <div id="my-work">My Work</div>
      <div id="contact-form">Contact Form</div>
      <Copyright />
    </React.Fragment>
  );
}
