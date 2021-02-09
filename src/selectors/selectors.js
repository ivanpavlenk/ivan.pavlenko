import {createSelector} from 'reselect';

const cartProducts = state => state.cartProducts;

export const totalCartItem = createSelector (cartProducts, products =>
  products.reduce ((acc, item) => {
    return acc + item.count;
  }, 0)
);

export const allProductsInCart = createSelector (
  state => state.products,
  state => state.cartProducts,
  (products, cartProducts) => {
    const productsInCart = cartProducts.map (cartProduct => {
      const {img, price, id} = products.find (
        product => product.id === cartProduct.id
      );
      return {
        img,
        price:cartProduct.count * price,
        count: cartProduct.count,
        id,
      };
    });
    return productsInCart;
  }
);

export const getProductsPrice = createSelector(
   allProductsInCart,
   productsInCart => {
      const result = productsInCart.reduce((acc,item) => {
          return acc +  item.price
      },0)
      return result
   }
)
 