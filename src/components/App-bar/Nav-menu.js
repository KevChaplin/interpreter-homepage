import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { Link, animateScroll as scroll } from "react-scroll";

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

  return (
    <Box>
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
            TransitionComponent={Fade}>
            <MenuItem>
              <Link
                onClick={handleClose}
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                Top
              </Link>  
            </MenuItem>
            <MenuItem>
              <Link
                onClick={handleClose}
                activeClass="active"
                to="about-me"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                About Me
              </Link>  
            </MenuItem>
            <MenuItem>
              <Link
                onClick={handleClose}
                activeClass="active"
                to="my-work"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                My Work
              </Link>  
            </MenuItem>
            <MenuItem>
              <Link
                onClick={handleClose}
                activeClass="active"
                to="contact-form"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                Contact
              </Link>  
            </MenuItem>
          </Menu>
        </>
      )
    : (
      <Stack spacing={2} direction="row">
        <Button variant="text" color="white">
          <Link
            activeClass="active"
            to="top"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Top
          </Link>  
        </Button>
        <Button variant="text" color="white">
          <Link
            activeClass="active"
            to="about-me"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About Me
          </Link>  
        </Button>
        <Button variant="text" color="white">
          <Link
            activeClass="active"
            to="my-work"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            My Work
          </Link>  
        </Button>
        <Button variant="text" color="white">
          <Link
            activeClass="active"
            to="contact-form"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>  
        </Button>
      </Stack>
      )
    }
    </Box>
  );
}