import * as React from 'react';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import LanguageIcon from '@mui/icons-material/Language';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

import { useTranslation } from 'react-i18next'

const lngs = {
  en: { nativeName: 'English' },
  jp: { nativeName: '日本語' }
};
// stil to add (will be listed in this order):
  // pl: { nativeName: 'Polski' },
  // ru: { nativeName: 'русский' },
  // de: { nativeName: 'Deutsch' }

// Language selector
export default function LanguageMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const open = Boolean(anchorEl);
  const handleClickIcon = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  // localization functionality by react-i18next
  const { t, i18n } = useTranslation()

  return (
    <Box>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ ml: 2 }}
        onClick={handleClickIcon}
      >
        <LanguageIcon />
      </IconButton>
      <Menu
        id="language-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
          sx: {backgroundColor: "primary.main"}
        }}
        anchorEl={anchorEl}
        open={open} 
        onClose={handleClose}
        TransitionComponent={Fade}
        >
        {Object.keys(lngs).map((lng) => (
            <MenuItem 
              key={lng} 
              style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} 
              type="submit" 
              onClick={() => {
                i18n.changeLanguage(lng)
                handleClose()}
              }>
              {lngs[lng].nativeName}
            </MenuItem>
          ))}
      </Menu>
    </Box>
  );
}