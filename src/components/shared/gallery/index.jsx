/* eslint-disable no-undef */
import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import SvgIcon from '@mui/material/SvgIcon';

import zoomIcon from '../../../assets/images/icons/zoom-in.svg';

const Gallery = ({ images }) => {
  const [activeImage, setActiveImage] = useState(null);
  const [zoomOpen, setZoomOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 2 }}>
          <Grid container direction="column" spacing={2}>
            {images.map((image, index) => (
              <Grid key={index}>
                <Box
                  component="img"
                  src={`${process.env.PUBLIC_URL}/images/${image}`}
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
            src={`${process.env.PUBLIC_URL}/images/${activeImage || images[0]}`}
            alt="Active Image"
            sx={{
              width: '100%',
              height: { xs: '200px', md: '400px' },
              cursor: 'pointer',
              objectFit: 'cover',
            }}
            onClick={() => {
              setZoomOpen(true);
            }}
          />
          <IconButton
            sx={(theme) => ({
              position: 'absolute',
              bottom: 10,
              right: 10,
              backgroundColor: theme.palette.secondary.main,
              borderRadius: '50%',
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
              },
            })}
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
            src={`${process.env.PUBLIC_URL}/images/${activeImage || images[0]}`}
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
