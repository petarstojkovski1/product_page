import product from '../data/data';

export const fetchArticle = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(product.article);
    }, 1000);
  });
};
