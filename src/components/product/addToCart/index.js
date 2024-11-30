import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SvgIcon from '@mui/material/SvgIcon';

import plusIcon from '../../../assets/images/icons/add.svg';
import { Typography } from '@mui/material';

const AddToCart = ({ addToCart, unit }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <Box display="flex" alignItems="center">
      <TextField
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        sx={{
          width: '60px',
          '& .MuiOutlinedInput-root': {
            borderRadius: 0,
          },
          '& input[type=number]': {
            '-moz-appearance': 'textfield',
          },
          '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button':
            {
              '-webkit-appearance': 'none',
              margin: 0,
            },
        }}
        margin="dense"
        size="small"
      />
      <Typography
        component="span"
        variant="body2"
        mx={0.5}
        sx={(theme) => ({ color: theme.palette.typography.dark })}
      >
        {unit}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ ml: 2, borderRadius: '0px' }}
        onClick={() => addToCart(quantity)}
        size="medium"
        startIcon={<SvgIcon component={plusIcon} inheritViewBox />}
      >
        Add to cart
      </Button>
    </Box>
  );
};
export default AddToCart;
