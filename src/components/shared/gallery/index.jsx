import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import SvgIcon from '@mui/material/SvgIcon';

import zoomIcon from '../../../assets/images/icons/zoom-in.svg';

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(null);
  const [zoomOpen, setZoomOpen] = useState(false);

  const images = [
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/250',
    'https://via.placeholder.com/300',
  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 2 }}>
          <Grid container direction="column" spacing={2}>
            {images.map((image, index) => (
              <Grid item key={index}>
                <Box
                  component="img"
                  src={image}
                  alt={`Thumbnail ${index}`}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    cursor: 'pointer',
                    border: activeImage === image ? '2px solid blue' : 'none',
                  }}
                  onClick={() => setActiveImage(image)}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid size={{ xs: 10 }} sx={{ position: 'relative' }}>
          <Box
            component="img"
            src={activeImage || images[0]}
            alt="Active Image"
            sx={{
              width: '100%',
              height: 'auto',
              cursor: 'pointer',
            }}
            onClick={() => {
              setZoomOpen(true);
            }}
          />
          <IconButton
            sx={{
              position: 'absolute',
              bottom: 10,
              right: 10,
              color: 'white',
              borderRadius: '50%',
            }}
            onClick={() => {
              setZoomOpen(true);
            }}
          >
            <SvgIcon
              component={zoomIcon}
              inheritViewBox
              sx={(theme) => ({
                color: theme.palette.typography.light,
                width: '25px',
              })}
            />
          </IconButton>
        </Grid>
      </Grid>

      <Dialog open={zoomOpen} onClose={() => setZoomOpen(false)}>
        <DialogContent>
          <Box
            component="img"
            src={activeImage || images[0]}
            alt="Enlarged Image"
            sx={{ width: '100%', height: 'auto' }}
          />
        </DialogContent>
        <DialogActions>
          <IconButton onClick={() => setZoomOpen(false)}>Close</IconButton>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Gallery;
