import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';

import ImageModal from './Image-modal.js'
import imagesData from '../images/images-data.js';

import pic01url from '../images/01.jpg'

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
      for (let i=0; i<imagesData.length; i++) {
        if (imagesData[i].name === e.target.parentNode.id ) {
          return imagesData[i]
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
          <ListSubheader component="div">
            <Typography variant="h2" gutterBottom>My Work</Typography>
          </ListSubheader>
        </ImageListItem>
        {imagesData.map((item) => (
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

export default MyWork