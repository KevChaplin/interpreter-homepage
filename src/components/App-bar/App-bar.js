import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import NavMenu from './Nav-menu.js'
import LanguageMenu from './Language-menu.js'

// Navigation bar on top of screen, contains navigation and language selector
export default function ButtonAppBar() {
  return (
      <AppBar position="fixed">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center' }}>
          <NavMenu />
          <LanguageMenu />
        </Toolbar>
      </AppBar>
  );
}