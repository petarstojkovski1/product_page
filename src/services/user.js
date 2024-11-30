import product from '../data/data';

export const fetchFavorites = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(product.user.favorite_articles);
    }, 500);
  });
};

export const setFavorite = (articleId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      //We would normally send a request to the server to add/remove the item to the favorites
      //Now we just resolve the articleId so we can update the state
      resolve(articleId);
    }, 500);
  });
};
