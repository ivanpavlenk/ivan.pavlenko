import { combineReducers } from 'redux';
import productsReducer from './product'
import cartReducer from './cart';



const rootReducer =  combineReducers ({
    products: productsReducer,
    cartProducts: cartReducer
})

export default rootReducer