import product from "../data/data";

export const fetchCart = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(product.cart);
    }, 500);
  });
};

export const addToCart = ({ item, count }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ item, count });
    }, 500);
  });
};
