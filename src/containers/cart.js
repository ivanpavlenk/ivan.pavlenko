import React from 'react';
import {Container} from 'semantic-ui-react';
import {useSelector} from 'react-redux';
import {allProductsInCart, getProductsPrice} from '../selectors/selectors';
import CartItem from '../components/cartItem';
export default function Cart () {
  const productsCart = useSelector (allProductsInCart);
  const productsPrice = useSelector (getProductsPrice);

  return (
    <Container>
      <div className="cart-container">
        {productsPrice !== 0
          ? productsCart.map (product => {
              return <CartItem product={product} />;
            })
          : <p>CART IS EMPTY</p>}
        {productsPrice !== 0
          ? <div className="total-price">
              <p className="total-price-value"> Total: {productsPrice}</p>
            </div>
          : null}
      </div>
    </Container>
  );
}
