import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';

import pic01 from '../images/01.jpg'
import pic02 from '../images/02.jpg'
import pic03 from '../images/03.jpg'
import pic04 from '../images/04.jpg'
import pic05 from '../images/05.jpg'
import pic06 from '../images/06.jpg'
import pic07 from '../images/07.jpg'
import pic08 from '../images/08.jpg'
import pic09 from '../images/09.jpg'
import pic10 from '../images/10.jpg'

const MyWork = () => {

  const fullscreenImg = {
    img: pic01,
    title: "Doing some interpreter stuff somewhere",
    subtitle: "Klingon, Japanese, Polish"
  }

  const showFullscreen = (item) => {
    console.log(item)
  }

  return (
    <Box id="my-work" sx={{ width: 1, display: "flex", justifyContent: 'center', backgroundColor: "white" }}>>
    {/* <Box sx={{width: '100vw', height: '100vh', display: "flex", justifyContent: 'center', position: 'fixed', top: 0, left: 0, backgroundColor: 'pink', visibility: 'visible', zIndex: 2}}>
      <img
        src={fullscreenImg.img}
        alt={fullscreenImg.title}
        max-width='1000px'
        height='auto'
        loading="lazy"
      />
    </Box> */}
      <ImageList sx={{ width: 1000, height: "auto" }}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div">My Work</ListSubheader>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img} onClick={() => showFullScreen(item)}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.subtitle}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: pic01,
    title: "Doing some interpreter stuff somewhere",
    subtitle: "Klingon, Japanese, Polish"
  },
  {
    img: pic02,
    title: "Doing some interpreter stuff somewhere",
    subtitle: "Klingon, Japanese, Polish"
  },
  {
    img: pic03,
    title: "Doing some interpreter stuff somewhere",
    subtitle: "Klingon, Japanese, Polish"
  },
  {
    img: pic04,
    title: "Doing some interpreter stuff somewhere",
    subtitle: "Klingon, Japanese, Polish"
  },
  {
    img: pic05,
    title: "Doing some interpreter stuff somewhere",
    subtitle: "Klingon, Japanese, Polish"
  },
  {
    img: pic06,
    title: "Doing some interpreter stuff somewhere",
    subtitle: "Klingon, Japanese, Polish"
  },
  {
    img: pic07,
    title: "Doing some interpreter stuff somewhere",
    subtitle: "Klingon, Japanese, Polish"
  },
  {
    img: pic08,
    title: "Doing some interpreter stuff somewhere",
    subtitle: "Klingon, Japanese, Polish"
  },
  {
    img: pic09,
    title: "Doing some interpreter stuff somewhere",
    subtitle: "Klingon, Japanese, Polish"
  },
  {
    img: pic10,
    title: "Doing some interpreter stuff somewhere",
    subtitle: "Klingon, Japanese, Polish"
  }
];

export default MyWork