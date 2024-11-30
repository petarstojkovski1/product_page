import product from '../data/data';

export const fetchCart = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(product.cart);
    }, 500);
  });
};

export const addToCart = ({ id, quantity }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      //We would normally send a request to the server to add the item to the cart
      //and get the updated cart data in response.
      resolve({ quantity, cost: product.article.price * quantity, id });
    }, 500);
  });
};
