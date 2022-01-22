import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';

import ImageModal from './Image-modal.js'

import pic01url from '../images/01.jpg'
import pic02url from '../images/02.jpg'
import pic03url from '../images/03.jpg'
import pic04url from '../images/04.jpg'
import pic05url from '../images/05.jpg'
import pic06url from '../images/06.jpg'
import pic07url from '../images/07.jpg'
import pic08url from '../images/08.jpg'
import pic09url from '../images/09.jpg'
import pic10url from '../images/10.jpg'

const MyWork = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [ modalImage, setModalImage ] = React.useState(
    { 
      name: "pic01", 
      url: pic01url,
      title: "Doing some interpreter stuff somewhere",
      subtitle: "Klingon, Japanese, Polish"
    }
  )

  const handleImageClick = (e) => { 
    setModalImage( () => {
      for (let i=0; i<itemData.length; i++) {
        if (itemData[i].name === e.target.parentNode.id ) {
          return itemData[i]
        }
      }
    })
    handleOpen()
  }

  return (
    <Box id="my-work" sx={{ width: 1, display: "flex", justifyContent: 'center', backgroundColor: "white" }}>
    <ImageModal open={open} handleOpen={handleOpen} handleClose={handleClose} modalImage={modalImage}/>
      <ImageList sx={{ width: 1000, height: "auto" }}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div">My Work</ListSubheader>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.name} id={item.name} onClick={(e) => handleImageClick(e)}>
            <img
              src={`${item.url}?w=248&fit=crop&auto=format`}
              srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.subtitle}
              sx={{
                '& .MuiImageListItemBar-titleWrap': {
                  pointerEvents: 'none',
                }
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  { 
    name: "pic01", 
    url: pic01url,
    title: "Doing some interpreter stuff somewhere",
    subtitle: "Klingon, Japanese, Polish"
  },
  {
    name: "pic02", 
    url: pic02url,
    title: "Doing some interpreter stuff somewhere",
    subtitle: "Klingon, Japanese, Polish"
  },
  {
    name: "pic03", 
    url: pic03url,
    title: "Doing some interpreter stuff somewhere",
    subtitle: "Klingon, Japanese, Polish"
  },
  {
    name: "pic04", 
    url: pic04url,
    title: "Doing some interpreter stuff somewhere",
    subtitle: "Klingon, Japanese, Polish"
  },
  {
    name: "pic05", 
    url: pic05url,
    title: "Doing some interpreter stuff somewhere",
    subtitle: "Klingon, Japanese, Polish"
  },
  {
    name: "pic06", 
    url: pic06url,
    title: "Doing some interpreter stuff somewhere",
    subtitle: "Klingon, Japanese, Polish"
  },
  {
    name: "pic07", 
    url: pic07url,
    title: "Doing some interpreter stuff somewhere",
    subtitle: "Klingon, Japanese, Polish"
  },
  {
    name: "pic08", 
    url: pic08url,
    title: "Doing some interpreter stuff somewhere",
    subtitle: "Klingon, Japanese, Polish"
  },
  {
    name: "pic09", 
    url: pic09url,
    title: "Doing some interpreter stuff somewhere",
    subtitle: "Klingon, Japanese, Polish"
  },
  {
    name: "pic10", 
    url: pic10url,
    title: "Doing some interpreter stuff somewhere",
    subtitle: "Klingon, Japanese, Polish"
  },
];

export default MyWork