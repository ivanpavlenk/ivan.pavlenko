import {ADD_PRODUCT_IN_CART, REMOVE_PRODUCT_CART, INCREASE_COUNTER_PRODUCT} from '../actions/cart';
let initialsState = [];

const cartReducer = (state = initialsState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_IN_CART: {
      const productCart = state.find (product => product.id === action.payload);
      if (!productCart) return [...state, {id: action.payload,count:1}];
      return state.map (
        product =>
          product === productCart
            ? {...productCart, count: productCart.count + 1}
            : product
      );
    }
    case REMOVE_PRODUCT_CART: {
      const productCart = state.find (product => product.id === action.payload);
      if (productCart.count === 1) return state.filter(product => product.id !== action.payload)
      return state.map(product => product === productCart ? {...productCart,count:productCart.count-1}:product)
    }

    case INCREASE_COUNTER_PRODUCT: {
      const increaseProduct = state.find (product => product.id === action.payload)
      return state.map(product => product === increaseProduct? {...increaseProduct,count:increaseProduct.count + 1}:product)
    }

    default:
      return state;
  }
};

export default cartReducer;
