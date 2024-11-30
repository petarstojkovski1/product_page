import React, { useEffect } from 'react';
import Product from '../../components/product';
import { getArticle } from '../../store/article/articleSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Skeleton } from '@mui/material';

const ProductPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.article.loading);

  useEffect(() => {
    dispatch(getArticle());
  }, []);

  if (loading) {
    return <Skeleton />;
  } else return <Product />;
};

export default ProductPage;
