export const ADD_PRODUCT_IN_CART = 'ADD_PRODUCT_IN_CART';
export const REMOVE_PRODUCT_CART = 'REMOVE_PRODUCT_CART';
export const INCREASE_COUNTER_PRODUCT = 'INCREASE_COUNTER_PRODUCT';

export const addProductInCard = productId => ({
  type: ADD_PRODUCT_IN_CART,
  payload: productId,
});

export const removeProductCart = productId => ({
  type: REMOVE_PRODUCT_CART,
  payload: productId,
});

export const increaseCounterProduct = productId => ({
  type: INCREASE_COUNTER_PRODUCT,
  payload: productId,
});
