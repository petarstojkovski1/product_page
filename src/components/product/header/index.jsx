import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import SvgIcon from '@mui/material/SvgIcon';

import { getCart } from '../../../store/cart/cartSlice';
import { getFavorites, setFavorite } from '../../../store/user/userSlice';

import factsSoftLogo from '../../../assets/images/icons/facts-soft.svg';
import favoriteIcon from '../../../assets/images/icons/favorite.svg';
import cartIcon from '../../../assets/images/icons/cart.svg';
import favoriteFilledIcon from '../../../assets/images/icons/favorite-filled.svg';
import AddToCart from '../addToCart';

const Header = ({
  articleName,
  isAddToCartVisible,
  unit,
  addToCart,
  articleId,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const totalItems = useSelector((state) => state.cart.totalItems);
  const loading = useSelector((state) => state.cart.loading);
  const favorites = useSelector((state) => state.user.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
    dispatch(getFavorites());
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: 'white',
        boxShadow: scrolled ? '0px 4px 20px rgba(0, 0, 0, 0.1)' : 'none',
        transition: 'box-shadow 0.3s ease-in-out',
        borderBottom: '1px solid #e0e0e0',
      }}
    >
      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          width="100%"
          alignItems="center"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            width="100%"
            alignItems="center"
            flexDirection={{ xs: 'column', md: 'row' }}
          >
            <Typography variant="h6" color="primary">
              {articleName}
            </Typography>
            <Box
              display="flex"
              alignItems={{ xs: 'flex-end', md: 'center' }}
              mr={2}
              flexDirection={{ xs: 'column-reverse', md: 'row' }}
            >
              {!isAddToCartVisible ? (
                <Box mr={4}>
                  <AddToCart unit={unit} addToCart={addToCart} />
                </Box>
              ) : null}
              <SvgIcon
                component={
                  favorites?.some((item) => item === articleId)
                    ? favoriteFilledIcon
                    : favoriteIcon
                }
                inheritViewBox
                sx={(theme) => ({
                  color: theme.palette.secondary.main,
                  width: '25px',
                  '&:hover': {
                    color: theme.palette.primary.main,
                  },
                  transition: 'color 0.3s ease-in-out',
                  ml: 1,
                })}
                onClick={() => {
                  dispatch(setFavorite(articleId));
                }}
              />
              <SvgIcon
                component={factsSoftLogo}
                inheritViewBox
                sx={(theme) => ({
                  color: theme.palette.secondary.main,
                  width: '25px',
                  ml: 1,
                })}
              />
            </Box>
          </Box>
          <Box
            position="relative"
            display="flex"
            alignItems="center"
            borderLeft="1px solid #e0e0e0"
            pl={2}
          >
            <SvgIcon
              component={cartIcon}
              inheritViewBox
              sx={(theme) => ({
                color: theme.palette.secondary.main,
                width: '25px',
              })}
            />
            {totalItems > 0 ? (
              <Box
                position="absolute"
                top={0}
                right={-5}
                bgcolor="red"
                borderRadius="50%"
                width="16px"
                height="16px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                {!loading ? (
                  <Typography variant="caption" color="white" fontSize="10px">
                    {totalItems}
                  </Typography>
                ) : (
                  <CircularProgress size={10} color="white" />
                )}
              </Box>
            ) : null}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
