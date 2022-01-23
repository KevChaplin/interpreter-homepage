import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function ImageModal(props) {

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const boxWidth = isMobile ? '100vw' : 'auto'

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: boxWidth,
    bgcolor: 'black',
    border: 'none',
    boxShadow: 'none',
    p: 0,
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <Box sx={style} onClick={props.handleClose}>
            <img src={props.modalImage.url} style={{'width': '100%'}}/>
            <ImageListItemBar
              title={props.modalImage.title}
              subtitle={props.modalImage.subtitle}
              sx={{
                '& .MuiImageListItemBar-titleWrap': {
                  pointerEvents: 'none',
                }
              }}
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}