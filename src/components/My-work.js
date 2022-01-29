import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useTranslation } from 'react-i18next'

import ImageModal from './Image-modal.js'
import imagesData from '../images/images-data.js';

import img01url from '../images/01.jpg'

const MyWork = () => {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { t } = useTranslation()

  const [ modalImage, setModalImage ] = React.useState(
    { 
      name: "img01", 
      url: img01url
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
    <Paper id="my-work"
      sx={{maxWidth: '1000px', display: "flex", justifyContent: 'center', my: 2, mx: 'auto', px: [1, 4]}}>
      <ImageModal open={open} handleOpen={handleOpen} handleClose={handleClose} modalImage={modalImage}/>
        <ImageList sx={{ width: 1000, height: "auto" }}>
          <ImageListItem key="Subheader" cols={2}>
            <Typography variant="h2" gutterBottom>{t('myWork.title')}</Typography>
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
                title={t(`myWork.${item.name}.title`)}
                sx={{
                  '& .MuiImageListItemBar-titleWrap': {
                    pointerEvents: 'none',
                  }
                }}
              />
            </ImageListItem>
          ))}
      </ImageList>
    </Paper>
  );
}

export default MyWork