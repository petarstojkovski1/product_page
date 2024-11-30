import product from "../data/data";

export const fetchArticle = () => {
  console.log("usao u fetchArticle");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(product.article);
    }, 1000);
  });
};
