import React from 'react';

import Typography from '@mui/material/Typography';

const Description = ({ description }) => {
  return (
    <>
      <Typography
        variant="h5"
        color="primary"
        gutterBottom
        textTransform="uppercase"
      >
        Description
      </Typography>
      {description?.split('\n').map((line, index) => (
        <Typography key={index} gutterBottom variant="body2">
          {line}
        </Typography>
      ))}
    </>
  );
};

export default Description;
