import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';

import packageIcon from '../../../assets/images/icons/package.svg';

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(
    images?.length > 0 ? images[0] : packageIcon
  );

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 2 }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          {images?.map((image, index) => (
            <Box
              key={index}
              component="img"
              src={image}
              alt={`Thumbnail ${index + 1}`}
              sx={{
                width: '100%',
                height: 'auto',
                cursor: 'pointer',
                mb: 1,
                border: selectedImage === image ? '2px solid #fc6203' : 'none',
              }}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </Box>
      </Grid>
      <Grid size={{ xs: 12, md: 10 }}>
        <Box
          component="img"
          src={selectedImage}
          alt="Selected"
          sx={{ width: '100%', height: 'auto' }}
        />
      </Grid>
    </Grid>
  );
};

export default Gallery;
