import React, { useEffect } from "react";
import Product from "../../components/product";
import { getArticle } from "../../store/article/articleSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.article.loading);

  useEffect(() => {
    dispatch(getArticle());
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  } else return <Product />;
};

export default ProductPage;
