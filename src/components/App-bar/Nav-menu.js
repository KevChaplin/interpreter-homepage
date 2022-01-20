import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from "react-scroll";

export default function NavMenu() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClickIcon = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navItems = [ 
    { key: 1, name: "Top", link: "top"},
    { key: 2, name: "About Me", link: "about-me"},
    { key: 3, name: "My Work", link: "my-work"},
    { key: 4, name: "Contact Me", link: "contact-me"}
  ]

  const navElementsMobile = navItems.map( item => {
    return (
      <MenuItem key={item.key}>
        <Link
          onClick={handleClose}
          activeClass="active"
          to={item.link}
          spy={true}
          smooth={true}
          offset={-70}
          duration={700}
        >
          {item.name}
        </Link>  
      </MenuItem>
    )
  })

  const navElementButtons = navItems.map( item => {
    return (
      <Button key={item.key * 10} variant="text" color="white">
          <Link
            activeClass="active"
            to={item.link}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            {item.name}
          </Link>  
        </Button>
    )
  })
  
  return (
    <Box>
      {/* for mobile devices, use nav icon */}
      {isMobile ? (
        <>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClickIcon}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="navigation-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            {navElementsMobile}
          </Menu>
        </>
      )
      // for devices larger than mobile, use nav buttons
    : (
      <Stack spacing={2} direction="row">
        {navElementButtons}
      </Stack>
      )
    }
    </Box>
  );
}