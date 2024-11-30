import React from 'react';

import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';

import starIcon from '../../../assets/images/icons/star.svg';
import filledStarIcon from '../../../assets/images/icons/star-filled.svg';

const StarRating = ({ rating, boxSx }) => {
  const roundedRating = Math.round(rating);
  const stars = Array.from({ length: 5 }, (_, i) => {
    const star = i + 1;
    return (
      <SvgIcon
        key={i}
        component={star <= roundedRating ? filledStarIcon : starIcon}
        inheritViewBox
        sx={(theme) => ({
          color:
            star <= roundedRating
              ? theme.palette.icon.yellow
              : theme.palette.icon.main,
          width: '15px',
          mr: 0.5,
        })}
      />
    );
  });

  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      sx={boxSx}
    >
      {stars}
    </Box>
  );
};

export default StarRating;
