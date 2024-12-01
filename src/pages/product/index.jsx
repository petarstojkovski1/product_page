import React, { useEffect } from 'react';
import Product from '../../components/product';
import { getArticle } from '../../store/article/articleSlice';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const ProductPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.article.loading);

  useEffect(() => {
    dispatch(getArticle());
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          zIndex: 9999,
        }}
      >
        <CircularProgress />
      </Box>
    );
  } else return <Product />;
};

export default ProductPage;
